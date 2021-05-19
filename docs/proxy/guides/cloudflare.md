---
title: Proxying Plausible through Cloudflare
---

You can use Cloudflare Workers to proxy your Plausible Analytics requests. Cloudflare Workers offers free service for up to 100,000 requests per day.
All you need to set it up is a free Cloudflare account.

Step 0: Sign up for a free Cloudflare account if you don't have an account already

## Step 1: Create a worker

In you Cloudflare account, click the dropdown on the top left and choose '[Workers](https://workers.cloudflare.com/)'. On the workers page, click on 'Create a Worker' to start configuring your proxy. Next, you'll see a page where you can edit the code for your edge worker. Remove the default code and paste the following code instead:

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
        response = await fetch("https://staging.plausible.io/js/plausible." + extensions.join("."));
        event.waitUntil(caches.default.put(event.request, response.clone()));
    }
    return response;
}

async function postData(event) {
    return await fetch("https://staging.plausible.io/api/event", event.request);
}
```

Once you've added the code for the worker, you can click on the 'Save and Deploy' button.

## Step 2: Make sure the script is accessible

At this point, you can click 'Rename' in the Workers' dashboard to give your worker a meaningful name (avoid words like 'analytics', 'tracking', 'stats', etc.).

Now, the Plausible script should be accessible at the following url:

```
<your-worker-name>.<your-cloudflare-username>.workers.dev/js/script.js
```

If you can load this URL and see some Javascript code, you should be good to go to the following step.

## Step 3: Install your proxy script

Once you have the URL for your script, you can replace your Plausible Analytics script tag in the Header (`<head>`) section of your site with the proxied one instead:

```html
<script defer data-domain="yourdomain.com" src="<your-worker-name>.<your-cloudflare-username>.workers.dev/js/script.js"></script>
```

That's it! You're now counting your website stats using a proxy.

## Step 4 (Optional): Run proxy as a subdirectory

If you're hosting your site on the Cloudflare CDN, you can run the proxy as a subdirectory installation to avoid a third-party
request to the `workers.dev` domain. This is completely optional but it can make your URLs look much cleaner and avoid third-party
requests.

First, open your site dashboard in Cloudflare and go to the 'Workers' tab. Then, click the 'Add route' button on the right hand side.
Next, enter the URL prefix where you would like to install Plausible. In this example, we'll install the proxy on the `example.com` domain and we'll
use `qwerty` as the subdirectory name. You can choose any name for the subdirectory but it's a good idea to avoid words like 'analytics' and 'tracking'.

Route: `*example.com/qwerty/*`
Worker: Choose the worker you created in Step 1

After clicking 'Save', the script should be accessible at the subdirectory URL of your site: `https://example.com/qwerty/js/script.js`. At this point you can
change your Plausible script tag to reference the new URL. It's also important to specify the `data-api` attribute to make sure data is sent through the worker as well:


```html
<script defer data-domain="yourdomain.com" data-api="/qwerty/api/event" src="/qwerty/js/script.js"></script>
```

Notice that since the script tag is installed on the same domain as the website itself, there's no need to specify the hostname in `src` and `data-api` attributes. A
relative path will work just fine.
