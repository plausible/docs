---
title: Using a proxy for analytics
---

## How proxying works

The easiest way to get started with Plausible Analytics is to install the script from our
main domain as follows:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

This is the simplest way to install Plausible Analytics but it will also be blocked by a significant portion
of your visitors.

In order to see all of your traffic, you can set up a proxy in your infrastructure. A proxy basically maps
certain URLs from your domain to the Plausible domain:

```
https://<yourdomain.com>/js/script.js -> https://plausible.io/js/plausible.js
https://<yourdomain.com>/api/event    -> https://plausible.io/api/event
```

In this example, when the browser request a file at `https://yourdomain.com/js/script.js` it will
actually be fetched from `https://plausible.io/js/plausible.js`. The analytics will work exactly the same
but since your domain most likely is not on any adblocker's list, it will not be blocked by any visitors.

Setting up your proxy takes a bit of work to but it ensures that you're seeing the full picture in your Plausible Dashboard.

There are many ways you can proxy requests to Plausible depending on your hosting situation. We've divided our guides
to *standalone* and *integrated* proxies. A standalone proxy can be set up on its own and it does not matter what hosting
provider or tech stack you are using. Integrated proxy setups are dependent on how you've deployed your app.

Standalone proxy setups:
* [Cloudflare Workers](/docs/proxy/guides/cloudflare)
* Using something else? [Contribute to this guide](https://github.com/plausible/docs/)

Integrated proxy setups:
* [Netlify](/docs/proxy/guides/netlify)
* Using something else? [Contribute to this guide](https://github.com/plausible/docs/)
