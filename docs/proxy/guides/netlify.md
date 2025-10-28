---
title: Proxying Plausible through Netlify
---

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

## Step 1: Get your snippet

In the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md) you can see
the snippet specific for your site. It will look similar to the following:

```html
<script async src="https://plausible.io/js/pa-XXXXX.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>
```

Your snippet will have a different script location than the example above. Look for the `https://plausible.io/js/pa-XXXXX.js` part in your snippet - that's the personalized location for your site's script. Mark it down for subsequent steps.

## Step 2: Add URL rewrite rules

If you don't already have a `_redirects` file at the publishing directory of your site, create one. You can learn more about Netlify redirects and rewrites [here](https://docs.netlify.com/routing/redirects/). 

Here's the setup for proxying Plausible Analytics:

``` title="_redirects"
/your-subdirectory/js/script.js https://plausible.io/js/pa-XXXXX.js 200
/your-subdirectory/api/event https://plausible.io/api/event 200
```

Replace `https://plausible.io/js/pa-XXXXX.js` with script location from step 1.

Note that:

- The source paths identified here **must be** used when configuring the HTML script tag in the next section.
- You can use whatever paths you like here (for example, here prefixing with `/your-subdirectory/`). Do choose a generic or irrelevant name. If you choose something like analytics, stats or plausible, it might get blocked.

## Step 3: Update your snippet

> See Plausible's [script tag](plausible-script.md) docs

Add a script tag to your application's HTML page, passing the values configured above as attributes. The `src` and `endpoint` attributes **must match** the `source` values in the `_redirects` file.

```html
<script async src="/your-subdirectory/js/script.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init({
    endpoint: "/your-subdirectory/api/event"
  })
</script>
```

Deploy these changes to your Netlify site. You can verify the proxy is working by opening your network tab. You should see a request to `https://yourdomain.com/your-subdirectory/js/script.js` with status 200 and another one to `https://yourdomain.com/your-subdirectory/api/event` with status 202.

## Troubleshooting

If your `<script>` tag's `src` attribute is being manipulated to some unrecognised CDN URL, it's because you have the `Asset optimization` JS settings enabled in Netlify. Both the `Bundle JS` and `Minify JS` options must be de-selected to avoid interference with the proxied Plausible URL. 

Prefer not to disable the `Asset optimization`? Try to use the absolute URL in the `src` attribute of your `<script>` (`https://yourdomain.com/your-subdirectory/js/script.js`).
