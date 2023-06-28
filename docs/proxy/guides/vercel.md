---
title: Proxying Plausible through Vercel
---

If you are hosting a **Next.js** application, see [Proxying Plausible through Next.js / Vercel](/proxy/guides/nextjs.md).

## Step 1: Add configuration file

> See Vercel's [project configuration](https://vercel.com/docs/cli#project-configuration) docs

Add a special `vercel.json` file in your application root:

```
/vercel.json
```

## Step 2: Configure rewrites

>  See Vercel's [rewrites](https://vercel.com/docs/cli#project-configuration/rewrites) docs

Add the following JSON to rewrite calls within your application to Plausible's resources: 

```json
{
  "rewrites": [
    {
      "source": "/stats/js/script.js",
      "destination": "https://plausible.io/js/script.js"
    },
    {
      "source": "/stats/api/event",
      "destination": "https://plausible.io/api/event"
    }
  ]
}
```

Note that:
- the source paths identified here **must be** used when configuring the HTML script tag in the next section.
- you can use whatever paths you like here (for example, here prefixing with `/stats/`).

## Step 3: Add the script tag

> See Plausible's [script tag](plausible-script.md) docs 

Add a script tag to your application's HTML page, passing the values configured above as attributes:

```html
<script
  src="/stats/js/script.js"
  data-api="/stats/api/event"
  data-domain="yourdomain.com"
></script>
```
:::note
The `src` and `data-api` attributes **must match** the `source` values in the `vercel.json` file.
:::

Thanks to [davestewart](https://github.com/davestewart) for contributing these instructions!
