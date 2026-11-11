---
displayed_sidebar: someSidebar
title: Single-page application support
description: "Plausible works out of the box with React, Vue, Angular and other pushState-based SPAs. No extra configuration needed to track page navigation."
---

Plausible Analytics integrates automatically with modern `pushState` based frontend routers. If you're running a single-page application
with React, Angular, Vue or similar frameworks, you don't need to add any extra configuration to make analytics work.

You can verify this by installing the Plausible Analytics script and checking the **Network** tab in your devtools. Each time you navigate to a new page, an HTTP POST request to `https://plausible.io/api/event` should be triggered.

A new pageview is counted when the path changes. If only the query string changes, such as going from `/products` to `/products?page=2`, it isn't counted as a new pageview.

If you're using a frontend framework that uses the URL hash for routing, you need to take an extra step to install the hash-based tracker instead of the default one. [See details here](hash-based-routing.md).

:::note
Using Next.js or Gatsby.js? Next.js has [a bug](https://github.com/zeit/next.js/issues/9070) that loads async scripts twice, causing double counting in Plausible. Gatsby.js exhibits the same behaviour. Use [workarounds](https://github.com/zeit/next.js/issues/9070#issuecomment-552981178) mentioned in the Github issue to load the Plausible script just once.
:::

## htmx and other partial page updates

Libraries such as [htmx](https://htmx.org/) update part of a page instead of loading a new one. Whether Plausible counts a pageview depends on what happens to the address in the browser:

* **The address changes with `history.pushState`.** This counts as a pageview automatically. In htmx, that's what `hx-boost` and `hx-push-url` do.
* **The address is replaced with `history.replaceState`.** This doesn't count as a pageview. In htmx, that's what `hx-replace-url` does.
* **The address stays the same.** No pageview is counted, as the visitor is still on the same page.

If you want to measure updates that don't change the address, send a [custom event](custom-event-goals.md). For example, to count every time htmx swaps in new content:

```javascript
document.body.addEventListener('htmx:afterSwap', function () {
  plausible('Content update', { interactive: false })
})
```

Setting `interactive` to `false` keeps these events out of your [bounce rate](metrics-definitions.md#bounce-rate). Leave it out if a swap means the visitor engaged with your page, such as loading more results.

[Outbound link clicks](outbound-link-click-tracking.md), [file downloads](file-downloads-tracking.md) and [form submissions](form-submissions-tracking.md) are tracked in content that htmx swaps in too, including forms that htmx submits.

Using Turbo? Follow the [Turbo setup](script-extensions.md#manual-pageviews) instead.
