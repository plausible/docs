---
title: Using a proxy for analytics
---

## How proxying works

In a standard setup you would include the Plausible script from our main domain as follows:

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

This is the simplest way to get started with Plausible Analytics but it will also be blocked by a significant portion
of your visitors. When you set up a proxy, you can include analytics from your own domain as follows:

```html
<script async defer data-domain="yourdomain.com" src="https://yourdomain.com/js/script.js"></script>
```

In this example, when the browser request a file at `https://yourdomain.com/js/script.js` it will
actually be fetched from `https://plausible.io/js/plausible.js`. The analytics will work exactly the same
but since your domain most likely is not on any adblocker's list, it will not be blocked by any visitors.

This takes a bit of work to set up but it ensures that you're seeing the full picture in your Plausible Dashboard.
The way you can set up a proxy will depend on your hosting situation. We've included some guides over here:
* [Cloudflare](/docs/proxy/guides/cloudflare)
* [Netlify](/docs/proxy/guides/netlify)
