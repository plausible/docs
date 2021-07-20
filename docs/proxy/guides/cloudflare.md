---
title: Proxying Plausible through Cloudflare
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use Cloudflare Workers to proxy your Plausible Analytics requests. Cloudflare Workers offers free service for up to 100,000 requests per day.
All you need to set it up is a free Cloudflare account.

Here's the step-by-step process for creating a proxy. It takes only a few minutes and requires no tech know-how or prior experience.

Step 0: Sign up for a free Cloudflare account if you don't have an account already and add your site

## Step 1: Create a worker

In your Cloudflare account, go into the ['Workers' section](https://dash.cloudflare.com/?to=/:account/workers). Click on 'Create a Worker' to start configuring your proxy. 

<img alt="Workers section of your Cloudflare account" src={useBaseUrl('img/cloudflare-workers.png')} />

Next, you'll see a page where you can edit the code for your worker:

<img alt="Paste the code" src={useBaseUrl('img/cloudflare-paste-code.png')} />

Remove the default code that Cloudflare presents in the 'Script' section on the left side of the screen and paste the following code instead. You do not need to make any edits to this code. You do not need to make any other changes either.

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

Once you've added the above code to the worker, you can click on the 'Save and Deploy' button.

## Step 2: You can rename your worker if you want

This is optional but you can click 'Rename' in the Workers' dashboard to give your worker a more meaningful name. Do avoid words like 'analytics', 'tracking', 'stats', etc. as they may be blocked.

<img alt="Rename your worker" src={useBaseUrl('img/cloudflare-rename-work-dash.png')} />

## Step 3: Make sure the script is accessible

Now, the Plausible script should be accessible at the following URL:

```
https://your-worker-name.your-cloudflare-username.workers.dev/js/script.js
```

If you can load this URL and see some Javascript code, you should be good to go to the following step.

## Step 4: Integrate a new snippet into your site header

Once you have the URL for your script, you can replace your Plausible Analytics script tag in the Header (`<head>`) section of your site with the proxied snippet. This is how the new snippet should look like (make sure to edit it to have the correct domain name and the correct URL to the proxied file):

```html
<script defer data-domain="yourdomain.com" src="https://your-worker-name.your-cloudflare-username.workers.dev/js/script.js"></script>
```

Are you using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Change the file name from `script.js` to the script you want to use: `script.hash.js`, `script.exclusions.js` or `script.outbound-links.js`. Want to use more than one extension? You can chain them like this: `script.hash.exclusions.outbound-links.js`. You just need to change the script name in the snippet that you insert into your site, no need to change the code for the worker.

That's it! You're now counting your website stats using a proxy.

## Step 5 (Optional): Run proxy as a subdirectory

If you're hosting your site on the Cloudflare CDN, you can run the proxy as a subdirectory installation to avoid a third-party
request to the `workers.dev` domain. This is completely optional but it can make your URLs look much cleaner and avoid third-party
requests.

First, open your site dashboard in Cloudflare and [go to the 'Workers' tab](https://dash.cloudflare.com/?to=/workers). Then, click the 'Add route' button on the right hand side. 

<img alt="Adding a route in your Cloudflare account" src={useBaseUrl('img/cloudflare-workers-dash.png')} />

Next, enter the URL prefix where you would like to install Plausible. In this example, we'll install the proxy on the `example.com` domain and we'll use `qwerty` as the subdirectory name. You can choose any name for the subdirectory but it's a good idea to avoid words like 'analytics' and 'tracking'.

* Route: `*example.com/qwerty/*`
* Worker: Choose the worker you created in Step 1

<img alt="A new route" src={useBaseUrl('img/cloudflare-add-route.png')} />

Click on the 'Save' button. After clicking 'Save', the script should be accessible at the subdirectory URL of your site: `https://example.com/qwerty/js/script.js`. 

At this point you can change your Plausible script tag in your site header to reference the new URL. It's also important to specify the `data-api` attribute to make sure data is sent through the worker as well. The new snippet in your site header should look like this:


```html
<script defer data-domain="yourdomain.com" data-api="/qwerty/api/event" src="/qwerty/js/script.js"></script>
```

Notice that since the script tag is installed on the same domain as the website itself, there's no need to specify the hostname in `src` and `data-api` attributes. A relative path will work just fine.
