---
title: Proxying Plausible through Vercel
---

Redirecting an application in [Vercel](https://vercel.com/) is straightforward:

1. add a special Vercel project configuration file
2. configure the file to rewrite script location and API calls
3. add a specially-attributed script tag to your application's HTML

If you are hosting a **Next.js** application, see [Proxying Plausible through Next.js / Vercel](https://plausible.io/docs/proxy/guides/nextjs).

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
      "destination": "https://plausible.io/js/plausible.js"
    },
    {
      "source": "/stats/api/event",
      "destination": "https://plausible.io/api/event"
    }
  ]
}
```

Note that:

- the source paths identified here **must be** used when configuring the HTML script tag in the next section
- you can use whatever paths you like here (for example, here prefixing with  `/stats/`)

## Step 3: Add the script tag

> See Plausible's [script tag](https://plausible.io/docs/plausible-script) docs 

Add a script tag to your application's HTML page, passing the values configured above as attributes:

```html
<script
  src="/stats/js/script.js"
  data-api="/stats/api/event"
  data-domain="<your-domain>"
></script>
```

Note that the `src` and `data-api` attributes **must match** the `source` values in the `vercel.json` file.

