---
title: Proxying Plausible through Netlify
---

## Step 1: Add URL rewrite rules

If you don't already have a `_redirects` file at the publish directory of your site, create one. You can learn
more about Netlify redirects and rewrites [here](https://docs.netlify.com/routing/redirects/). Here's
the setup for proxying Plausible Analytics:

``` title="_redirects"
/js/script.js https://plausible.io/js/plausible.js 200
/api/event https://plausible.io/api/event 202
```

You can also choose a subdirectory to install Plausible under to make sure it doesn't shadow any routes
that you may already have in your application:

``` title="_redirects"
/your-subdirectory/js/script.js https://plausible.io/js/plausible.js 200
/your-subdirectory/api/event https://plausible.io/api/event 202
```

Choose a generic or irrelevant name for the subdirectory. If you choose something like `analytics` or `plausible`,
it might get blocked in the future.

Using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Edit your `_redirects` and change the name from `plausible.js` to the script you want to use: `plausible.hash.js`, `plausible.exclusions.js` or `plausible.outbound-links.js`. Want to use more than one extension? You can chain them like this: `plausible.hash.exclusions.outbound-links.js`

## Step 2: Adjust your deployed script

With the URL rewrites in place, you can change your script tag as follows:

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

In case of a subdirectory installation, you'll also need to add a `data-api` attribute to tell the script where
the data should be sent.

```html
<script defer data-domain="yourdomain.com" data-api="/subdirectory/api/event" src="/subdirectory/js/script.js"></script>
```


Deploy these changes to your Netlify site. You can verify the proxy is working by opening your network tab. You should see a request to
`https://yourdomain.com/js/script.js` with status 200 and another one to `https://yourdomain.com/api/event` with status 202.

## Troubleshooting

If your `<script>` tag's `src` attribute is being manipulated to some unrecognised CDN URL,
it's because you have the `Asset optimization` JS settings enabled in Netlify.
Both the `Bundle JS` and `Minify JS` options must be de-selected in order to
avoid interference with the proxied Plausible URL.
