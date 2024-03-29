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
      "source": "/your-subdirectory/js/script.js",
      "destination": "https://plausible.io/js/script.js"
    },
    {
      "source": "/your-subdirectory/api/event",
      "destination": "https://plausible.io/api/event"
    }
  ]
}
```

Note that:

- The source paths identified here **must be** used when configuring the HTML script tag in the next section.
- You can use whatever paths you like here (for example, here prefixing with `/your-subdirectory/`). Do choose a generic or irrelevant name. If you choose something like analytics, stats or plausible, it might get blocked.

## Step 3: Add the script tag

> See Plausible's [script tag](plausible-script.md) docs 

Add a script tag to your application's HTML page, passing the values configured above as attributes. The `src` and `data-api` attributes **must match** the `source` values in the `vercel.json` file.

```html
<script
  src="/your-subdirectory/js/script.js"
  data-api="/your-subdirectory/api/event"
  data-domain="yourdomain.com"
></script>
```

Thanks to [davestewart](https://github.com/davestewart) for contributing these instructions!
