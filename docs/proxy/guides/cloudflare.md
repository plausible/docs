---
title: Proxying Plausible through Cloudflare
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use Cloudflare Workers to proxy your Plausible Analytics requests. Cloudflare Workers offers free service for up to 100,000 requests per day.
All you need to set it up is a free Cloudflare account.

Here's the step-by-step process for creating a proxy. It takes only a few minutes and requires no tech know-how or prior experience.

Step 0: Sign up for a free Cloudflare account if you don't have an account already and add your site.

## Step 1: Create a worker

In your Cloudflare account, click on the 'Workers' section in the sidebar. Then click on the 'Create a Service' button to start configuring your proxy. 

<img alt="Workers section of your Cloudflare account" src={useBaseUrl('img/cloudflare-workers.png')} />

## Step 2 (Optional): You can change your service name

This is optional but you can change the service name to give your worker a more meaningful name. Do avoid words like 'plausible', 'analytics', 'tracking', 'stats', etc. as they may be blocked. It's also fine to keep the random name that Cloudflare generates by default. 

<img alt="Rename your worker" src={useBaseUrl('img/cloudflare-rename-work-dash.png')} />

In the 'Select a starter' section, keep the 'Introduction (HTTP Handler)' as your selection and then click on the 'Create service' button.

<img alt="Create service" src={useBaseUrl('img/cloudflare-create-service.png')} />

## Step 3: Quick edit the worker

Click on the 'Quick edit' where you can edit the code for your worker:

<img alt="Quick edit the worker" src={useBaseUrl('img/cloudflare-quick-edit.png')} />

Then you will see a screen that looks like this: 

<img alt="Paste the code" src={useBaseUrl('img/cloudflare-paste-code.png')} />

Remove the default code that Cloudflare presents on the left side of the screen and paste the code that we present below instead.

We recommend you change the folder name in the first two lines in the code below. This makes your proxy more difficult to discover and block. We especially recommend you change the folder name in the two lines if you're not hosting your site on the Cloudflare CDN.

In the **ScriptName** line, change the `/js/` to whatever you wish. Say `/your-folder-name/`. Then the location in the code would be `/your-folder-name/script.js`. 

In the **Endpoint** line, change the `/api/` to whatever you want. It can be the same as above but you can also choose something different. If you choose `/your-folder-name/`, then the full location would be `/your-folder-name/event`. 

Do avoid words like 'plausible', 'analytics', 'tracking', 'stats', etc. as they may be blocked.

```js
const ScriptName = '/js/script.js';
const Endpoint = '/api/event';

const ScriptWithoutExtension = ScriptName.replace('.js', '');

// Since even the script names (e.g. `script.outbound-links.js`) are blocked by sensitive adblockers,
// the required scripts are hidden behind numbers
const ExtensionMapping = {
  'js': 'js',
  0: 'hash',
  1: 'outbound-links',
  2: 'file-downloads',
  3: 'tagged-events',
  4: 'exclusions',
  5: 'compat',
  6: 'local',
  7: 'manual',
};

addEventListener('fetch', event => {
  event.passThroughOnException();
  event.respondWith(handleRequest(event));
})

async function handleRequest(event) {
  const pathname = new URL(event.request.url).pathname
  let [baseUri, ...extensions] = pathname.split('.')
  extensions = extensions.map(extension => ExtensionMapping[extension]);

  if (baseUri.endsWith(ScriptWithoutExtension)) {
    return getScript(event, extensions)
  } else if (pathname.endsWith(Endpoint)) {
    return postData(event)
  }
  return new Response(null, { status: 404 })
}

async function getScript(event, extensions) {
  let response = await caches.default.match(event.request);
  if (!response) {
    response = await fetch('https://plausible.io/js/plausible.' + extensions.join('.'));
    event.waitUntil(caches.default.put(event.request, response.clone()));
  }
  return response;
}

async function postData(event) {
  const request = new Request(event.request);
  request.headers.delete('cookie');
  return await fetch('https://plausible.io/api/event', request);
}
```

Once you've added the above code to the worker, you can click on the 'Save and Deploy' button.

## Step 4: Make sure the script is accessible

Now, the Plausible script should be accessible at the following URL:

```
https://your-worker-name.your-cloudflare-username.workers.dev/your-folder-name/script.js
```

If you can load this URL and see some JavaScript code, you should be good to go to the following step.

## Step 5: Integrate a new snippet into your site header

Once you have the URL for your script, you can replace your Plausible Analytics script tag in the Header (`<head>`) section of your site with the proxied snippet. This is how the new snippet should look like (make sure to edit it to have the correct domain name of your site and the correct URL to the proxied file):

```html
<script defer data-domain="yourdomain.com" data-api="https://your-worker-name.your-cloudflare-username.workers.dev/your-folder-name/event" src="https://your-worker-name.your-cloudflare-username.workers.dev/your-folder-name/script.js"></script>
```

Are you using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Change the file name from `script.js` to the script you want to use. Since even the script names (e.g. `script.outbound-links.js`) are blocked by sensitive adblockers, the required scripts are hidden behind numbers. Which number corresponds to which script is defined in the code. According to the code block above, the following mapping is available:

| Number | Script              |
| ------ | ------------------- |
| 0      | `hash.js`           |
| 1      | `outbound-links.js` |
| 2      | `file-downloads.js` |
| 3      | `tagged-events.js`  |
| 4      | `exclusions.js`     |
| 5      | `compat.js`         |
| 6      | `local.js`          |
| 7      | `manual.js`         |

For example, if you want to have script `outbound-links.js` used, change the import of the script to `script.1.js`. For script `tagged-events.js` you use `script.3.js` and so on. Want to use more than one extension? You can chain them like this: `script.2.4.0.js` (the order is irrelevant). You just need to change the script name in the snippet that you insert into your site, no need to change the code for the worker.

That's it! You're now counting your website stats using a proxy.

## Step 6 (Optional): Run proxy as a subdirectory

If you're hosting your site on the Cloudflare CDN, you can run the proxy as a subdirectory installation to avoid a third-party
request to the `workers.dev` domain. This is completely optional but it can make your URLs look much cleaner and avoid third-party
requests.

In your Cloudflare account, click on the 'Workers' section in the sidebar. Then, click on the worker that you have just created and in the 'Triggers' tab, click the 'Add route' button. 

<img alt="Adding a route in your Cloudflare account" src={useBaseUrl('img/cloudflare-workers-dash.png')} />

Next, enter the URL prefix where you would like to install Plausible. In this example, we'll install the proxy on the `example.com` domain, and we'll use `qwerty` as the subdirectory name. You can choose any name for the subdirectory, but it's a good idea to avoid words like 'analytics' and 'tracking'.

* Route: `*example.com/qwerty/*`

<img alt="A new route" src={useBaseUrl('img/cloudflare-add-route.png')} />

Click on the 'Add route' button. After clicking 'Add route', the script should be accessible at the subdirectory URL of your site: `https://example.com/qwerty/your-folder-name/script.js`. 

At this point you can change your Plausible script tag in your site header to reference the new URL. It's also important to specify the `data-api` attribute to make sure data is sent through the worker as well. The new snippet in your site header should look like this:

```html
<script defer data-domain="yourdomain.com" data-api="/qwerty/your-folder-name/event" src="/qwerty/your-folder-name/script.js"></script>
```

Notice that since the script tag is installed on the same domain as the website itself, there's no need to specify the hostname in `src` and `data-api` attributes. A relative path will work just fine.
