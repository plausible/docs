---
title: Proxying Plausible through Vercel
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

## Step 2: Add configuration file

> See Vercel's [project configuration](https://vercel.com/docs/cli#project-configuration) docs

Add a special `vercel.json` file in your application root:

```
/vercel.json
```

## Step 3: Configure rewrites

>  See Vercel's [rewrites](https://vercel.com/docs/cli#project-configuration/rewrites) docs

Add the following JSON to rewrite calls within your application to Plausible's resources:

```json
{
  "rewrites": [
    {
      "source": "/your-subdirectory/js/script.js",
      "destination": "https://plausible.io/js/pa-XXXXX.js"
    },
    {
      "source": "/your-subdirectory/api/event",
      "destination": "https://plausible.io/api/event"
    }
  ]
}
```

Replace `https://plausible.io/js/pa-XXXXX.js` with script location from step 1.

Note that:

- The source paths identified here **must be** used when configuring the HTML script tag in the next section.
- You can use whatever paths you like here (for example, here prefixing with `/your-subdirectory/`). Do choose a generic or irrelevant name. If you choose something like analytics, stats or plausible, it might get blocked.

## Step 4: Update your snippet

> See Plausible's [script tag](plausible-script.md) docs

Add a script tag to your application's HTML page, passing the values configured above as attributes. The `src` and `endpoint` attributes **must match** the `source` values in the `vercel.json` file.

```html
<script async src="/your-subdirectory/js/script.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init({
    endpoint: "/your-subdirectory/api/event"
  })
</script>
```
