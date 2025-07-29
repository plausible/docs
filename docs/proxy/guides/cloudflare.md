---
title: Proxying Plausible through Cloudflare
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use Cloudflare Workers to proxy your Plausible Analytics requests. Cloudflare Workers offers free service for up to 100,000 requests per day.
All you need to set it up is a free Cloudflare account. Here's the step-by-step process for creating a proxy. 

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

Step 0: Sign up for a free Cloudflare account if you don't have an account already and add your site.

## Step 1: Create a worker

In your Cloudflare account, click on the "Compute (Workers" > 'Workers & Pages' section in the sidebar to get the 'Overview' page. Choose "Start with Hello World!" and then click on "Get Started" to start configuring your proxy. 

<img alt="Create CloudFlare worker" src={useBaseUrl('img/create-cloudflare-worker.png')} />

## Step 2 (Optional): You can change your service name

This is optional but you can change the service name to give your worker a more meaningful name. Do avoid words like 'plausible', 'analytics', 'tracking', 'stats', etc. as they may be blocked. It's also fine to keep the random name that Cloudflare generates by default. Then click on the 'Deploy' button. 

<img alt="Deploy CloudFlare worker" src={useBaseUrl('img/deploy-cloudflare-worker.png')} />

## Step 3: Paste the following code

Next click on the 'Edit Code' button, remove the default code that Cloudflare presents and paste the code that we present below instead.

<img alt="Edit CloudFlare worker" src={useBaseUrl('img/edit-worker-code.png')} />

We recommend you change the folder name in the first two lines in the code below. This makes your proxy more difficult to discover and block. We especially recommend you change the folder name in the two lines if you're not hosting your site on the Cloudflare CDN.

In the **ScriptName** line, change the `/js/` to whatever you wish. Say `/your-folder-name/`. Then the location in the code would be `/your-folder-name/script.js`. 

In the **Endpoint** line, change the `/api/` to whatever you want. It can be the same as above but you can also choose something different. If you choose `/your-folder-name/`, then the full location would be `/your-folder-name/event`. 

Do avoid words like 'plausible', 'analytics', 'tracking', 'stats', etc. as they may be blocked.

```js
const ScriptName = '/js/script.js';
const Endpoint = '/api/event';

const ScriptWithoutExtension = ScriptName.replace('.js', '')

addEventListener('fetch', event => {
    event.passThroughOnException();
    event.respondWith(handleRequest(event));
})

async function handleRequest(event) {
  const pathname = new URL(event.request.url).pathname
  const [baseUri, ...extensions] = pathname.split('.')

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
        response = await fetch("https://plausible.io/js/plausible." + extensions.join("."));
        event.waitUntil(caches.default.put(event.request, response.clone()));
    }
    return response;
}

async function postData(event) {
    const request = new Request(event.request);
    request.headers.delete('cookie');
    return await fetch("https://plausible.io/api/event", request);
}
```

Once you've added the above code to the worker, you can click on the 'Save and Deploy' button on the top right. On the confirmation message, do confirm that you want to save and deploy your worker by clicking on the 'Save and Deploy' button again.

<img alt="Paste Plausible code to CloudFlare worker" src={useBaseUrl('img/paste-plausible-code-to-cloudflare-worker.png')} />

## Step 4: Make sure the script is accessible

Now, the Plausible script should be accessible at the following URL:

```
https://your-worker-name.your-cloudflare-zone.workers.dev/your-folder-name/script.js
```

If you can load this URL and see some JavaScript code, you should be good to go to the following step.

## Step 5: Integrate a new snippet into your site header

Once you have the URL for your script, you can replace your Plausible Analytics script tag in the Header (`<head>`) section of your site with the proxied snippet. This is how the new snippet should look like (make sure to edit it to have the correct domain name of your site and the correct URL to the proxied file):

```html
<script defer data-domain="yourdomain.com" data-api="https://your-worker-name.your-cloudflare-zone.workers.dev/your-folder-name/event" src="https://your-worker-name.your-cloudflare-zone.workers.dev/your-folder-name/script.js"></script>
```

Are you using our extensions such as hash-based routing, revenue or outbound link click tracking? Change the file name from `script.js` to the script you want to use: `script.hash.js`, `script.revenue.js` or `script.outbound-links.js`. Want to use more than one extension? You can chain them like this: `script.hash.revenue.outbound-links.js`. You just need to change the script name in the snippet that you insert into your site, no need to change the code for the worker.

That's it! You're now counting your website stats using a proxy.

## Step 6 (Optional): Run proxy as a subdirectory

If you're hosting your site on the Cloudflare CDN, you can run the proxy as a subdirectory installation to avoid a third-party
request to the `workers.dev` domain. This is completely optional but it can make your URLs look much cleaner and avoid third-party
requests.

In your Cloudflare account, click on the 'Workers & Pages' section in the sidebar. Then, click on the worker that you have just created and then choose the 'Triggers' options in the 'Settings' section of your worker. Next click on the 'Add route' button on the right-hand side of the 'Route' heading.

Next, in the 'Route' field enter the URL prefix where you would like to host the proxy. In this example, we'll install the proxy on the `example.com` domain, and we'll use `qwerty` as the subdirectory name. You can choose any name for the subdirectory, but it's a good idea to avoid words like 'analytics' and 'tracking'.

* Route: `*example.com/qwerty/*`

Then select your domain name in the 'Zone' field. Then click on the 'Add route' button. After clicking 'Add route', the script should be accessible at the subdirectory URL of your site: `https://example.com/qwerty/your-folder-name/script.js`. 

At this point you can change your Plausible script tag in your site header to reference the new URL. It's also important to specify the `data-api` attribute to make sure data is sent through the worker as well. The new snippet in your site header should look like this:

```html
<script defer data-domain="yourdomain.com" data-api="/qwerty/your-folder-name/event" src="/qwerty/your-folder-name/script.js"></script>
```

Notice that since the script tag is installed on the same domain as the website itself, there's no need to specify the hostname in `src` and `data-api` attributes. A relative path will work just fine.
