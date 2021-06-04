---
title: Hash-based routing
---

Plausible Analytics integrates automatically with `pushState` based frontend routers. However, if you're using a frontend
framework that uses the URL hash for routing, you need to take an extra step to install the hash-based tracker instead of the default one. Same process you need to follow with [Carrd](carrd-integration.md) and other website builders that don't support normal navigation.

The hash-based tracker is available by changing your script to load `https://plausible.io/js/plausible.hash.js` instead of
the default `https://plausible.io/js/plausible.js`.

Here's what the full script tag will look like:

```html
<script defer data-domain="<your-domain>" src="https://plausible.io/js/plausible.hash.js"></script>
```

If you're using a custom domain, you can add the `.hash.js` as follows: `https://your.custom-domain.com/js/index.hash.js`

This tracker will change two things about how events are collected:
* Trigger pageviews on the `hashchange` event
* Normally the hash part of the URL is discarded in your Plausible dashboard. In hash-mode, the hash part is preserved in your stats so you can see the different pages your visitors have viewed.
