---
title: Proxying Plausible through Cloudflare
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use Cloudflare Workers to proxy your Plausible Analytics requests. Cloudflare Workers offers free service for up to 100,000 requests per day.
All you need to set it up is a free Cloudflare account.

Here's the step-by-step process for creating a proxy. It takes only a few minutes and requires no tech know-how or prior experience.

Step 0: Sign up for a free Cloudflare account if you don't have an account already and add your site.

## Step 1: Create a worker

In your Cloudflare account, click on the 'Workers & Pages' section in the sidebar to get the 'Overview' page. On the top right of the 'Overview' page, click on the 'Create application' button. On the 'Create an application' page click on the 'Create Worker' button in the 'Workers' tab to start configuring your proxy. 

## Step 2 (Optional): You can change your service name

This is optional but you can change the service name to give your worker a more meaningful name. Do avoid words like 'plausible', 'analytics', 'tracking', 'stats', etc. as they may be blocked. It's also fine to keep the random name that Cloudflare generates by default. 

## Step 3: Paste the following code

Then click on the 'Deploy' button. Next click on the 'Edit Code' button, remove the default code that Cloudflare presents and paste the code that we present below instead.

We recommend you change the folder name in the first two lines in the code below. This makes your proxy more difficult to discover and block. We especially recommend you change the folder name in the two lines if you're not hosting your site on the Cloudflare CDN.

In the **ScriptName** line, change the `/js/` to whatever you wish. Say `/your-folder-name/`. Then the location in the code would be `/your-folder-name/script.js`. 

In the **Endpoint** line, change the `/api/` to whatever you want. It can be the same as above but you can also choose something different. If you choose `/your-folder-name/`, then the full location would be `/your-folder-name/event`. 

Do avoid words like 'plausible', 'analytics', 'tracking', 'stats', etc. as they may be blocked.

```js
const ScriptName = '/js/script.js';
const Endpoint = '/api/event';

const ScriptWithoutExtension = ScriptName.replace('.js', '');

export default {
  async fetch(request, env, ctx) {
    const pathname = new URL(request.url).pathname;
    const [baseUri, ...extensions] = pathname.split('.');

    if (baseUri.endsWith(ScriptWithoutExtension)) {
        return await getScript(request, extensions);
    } else if (pathname.endsWith(Endpoint)) {
        return await postData(request);
    }
    return new Response(null, { status: 404 });
  },
};

async function getScript(request, extensions) {
    let response = await caches.default.match(request);
    if (!response) {
        response = await fetch("https://plausible.io/js/plausible." + extensions.join("."));
        const cachePut = caches.default.put(request, response.clone());
        // Wait for the cache operation to complete before proceeding
        await cachePut;
    }
    return response;
}

async function postData(request) {
    const newRequest = new Request(request);
    newRequest.headers.delete('cookie');
    return await fetch("https://plausible.io/api/event", newRequest);
}

```

Once you've added the above code to the worker, you can click on the 'Save and Deploy' button on the top right. On the confirmation message, do confirm that you want to save and deploy your worker by clicking on the 'Save and Deploy' button again.

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

Are you using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Change the file name from `script.js` to the script you want to use: `script.hash.js`, `script.exclusions.js` or `script.outbound-links.js`. Want to use more than one extension? You can chain them like this: `script.hash.exclusions.outbound-links.js`. You just need to change the script name in the snippet that you insert into your site, no need to change the code for the worker.

That's it! You're now counting your website stats using a proxy.

## Step 6 (Optional): Run proxy as a subdirectory

If you're hosting your site on the Cloudflare CDN, you can run the proxy as a subdirectory installation to avoid a third-party
request to the `workers.dev` domain. This is completely optional but it can make your URLs look much cleaner and avoid third-party
requests.

In your Cloudflare account, click on the 'Workers & Pages' section in the sidebar. Then, click on the worker that you have just created and then click on the 'View' button in the 'Routes' section of your worker. Next click on the 'Add route' button in the top right.

Next, in the 'Route' field enter the URL prefix where you would like to install Plausible. In this example, we'll install the proxy on the `example.com` domain, and we'll use `qwerty` as the subdirectory name. You can choose any name for the subdirectory, but it's a good idea to avoid words like 'analytics' and 'tracking'.

* Route: `*example.com/qwerty/*`

Then select your domain name in the 'Zone' field. Then click on the 'Add route' button. After clicking 'Add route', the script should be accessible at the subdirectory URL of your site: `https://example.com/qwerty/your-folder-name/script.js`. 

At this point you can change your Plausible script tag in your site header to reference the new URL. It's also important to specify the `data-api` attribute to make sure data is sent through the worker as well. The new snippet in your site header should look like this:

```html
<script defer data-domain="yourdomain.com" data-api="/qwerty/your-folder-name/event" src="/qwerty/your-folder-name/script.js"></script>
```

Notice that since the script tag is installed on the same domain as the website itself, there's no need to specify the hostname in `src` and `data-api` attributes. A relative path will work just fine.
