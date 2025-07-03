---
title: Proxying Plausible through Netlify
---

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

## Step 1: Add URL rewrite rules

If you don't already have a `_redirects` file at the publishing directory of your site, create one. You can learn more about Netlify redirects and rewrites [here](https://docs.netlify.com/routing/redirects/). Here's the setup for proxying Plausible Analytics:

``` title="_redirects"
/js/script.js https://plausible.io/js/script.js 200
/api/event https://plausible.io/api/event 200
```

You can also choose a subdirectory to install Plausible under to make sure it doesn't shadow any routes that you may already have in your application:

``` title="_redirects"
/your-subdirectory/js/script.js https://plausible.io/js/script.js 200
/your-subdirectory/api/event https://plausible.io/api/event 200
```

Choose a generic or irrelevant name for the subdirectory. If you choose something like `analytics` or `plausible`,
it might get blocked in the future.

Using our [script extensions](script-extensions.md) such as hash-based routing, revenue or outbound link click tracking? Edit your `_redirects` and change the name from `script.js` to the script you want to use: `script.hash.js`, `script.revenue.js` or `script.outbound-links.js`. Want to use more than one extension? You can chain them like this: `script.hash.revenue.outbound-links.js`.

## Step 2: Adjust your deployed script

With the URL rewrites in place, you can change your script tag as follows:

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

In case of a subdirectory installation, you'll also need to add a `data-api` attribute to tell the script where the data should be sent.

```html
<script defer data-domain="yourdomain.com" data-api="/subdirectory/api/event" src="/subdirectory/js/script.js"></script>
```

Deploy these changes to your Netlify site. You can verify the proxy is working by opening your network tab. You should see a request to `https://yourdomain.com/js/script.js` with status 200 and another one to `https://yourdomain.com/api/event` with status 202.

## Troubleshooting

If your `<script>` tag's `src` attribute is being manipulated to some unrecognised CDN URL, it's because you have the `Asset optimization` JS settings enabled in Netlify. Both the `Bundle JS` and `Minify JS` options must be de-selected to avoid interference with the proxied Plausible URL. 

Prefer not to disable the `Asset optimization`? Try to use the absolute URL in the `src` attribute of your `<script>` (`https://yourdomain.com/js/script.js`).
