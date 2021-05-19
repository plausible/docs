---
title: Proxying Plausible Analytics through Netlify
---

## Step 1: Add URL rewrite rules

If you don't already a `_redirects` file at the root of your repository, create one. You can learn
more about netlify redirects and rewrites [here](https://docs.netlify.com/routing/redirects/). Here's
the setup for proxying Plausible Analytics:

``` title="_redirects"
/js/script.js https://plausible.io/js/plausible.js 200
/api/event https://plausible.io/api/event 200
```

You can also choose a subdirectory to install Plausible under to make sure it doesn't shadow any routes
that you may already have in your application:

``` title="_redirects"
/your-subdirectory/js/script.js https://plausible.io/js/plausible.js 200
/your-subdirectory/api/event https://plausible.io/api/event 200
```

Choose a generic or irrelevant name for the subdirectory. If you choose something like `analytics` or `plausible`,
it might get blocked in the future.

## Step 2: Adjust your deployed script

With the URL rewrites in place, you can change your script tag as follows:

```html
<script defer data-domain="yourdomain.com" data-api="/api/event" src="/js/script.js"></script>
```

Deploy these changes to your Netlify site. You can verify the proxy is working by opening your network tab. You should see a request to
`https://yourdomain.com.com/js/script.js` with status 200 and another one to `https://yourdomain.com.com/api/event` with status 202.
