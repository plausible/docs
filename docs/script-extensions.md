---
title: Script extensions
---

We're proud to have one of the most [lightweight Javascript snippets](https://plausible.io/lightweight-web-analytics) in the analytics industry. Clocking in at less than 1KB, our script
will not add any bloat to your website or cause performance issues. One of the ways we achieve that is by radically limiting the
amount of options in the default script. Instead, we provide separate script files based on how you might want to use Plausible.

For example, the default `plausible.js` script will automatically work with [pushState](https://developer.mozilla.org/en-US/docs/Web/API/History_API) based frontend routing which is the most common.
If your website uses [hash-based routing](https://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash#hash-based-routing) instead, you have the option of loading the script with a different extension: `plausible.hash.js`. If you want to automatically track
outbound links on your website, you can load `plausible.outbound-links.js`. And if you want both, these extensions can be combined as follows:
`plausible.hash.outbound-links.js`.

This approach makes sure that you only load code that will actually be used on your website. Websites should not have to load dozens or hundreds of kilobytes
of dead Javascript code on every pageload which degrades the user experience and causes unnecessary network traffic.

| Extension                   | Explanation                                                             |
|-----------------------------|-------------------------------------------------------------------------|
| plausible.hash.js           | Automatically follow frontend navigation when using [hash-based routing](hash-based-routing.md)  |
| plausible.outbound-links.js | Automatically [track clicks on outbound links](outbound-link-click-tracking.md) from your website          |
| plausible.exclusions.js     | [Exclude certain pages from being tracked](excluding-pages.md)                                |
| plausible.compat.js         | Compatibility mode for tracking users on Internet Explorer              |

### plausible.compat.js

The default Plausible script will not work on Internet Explorer because it uses the [document.currentScript](https://caniuse.com/document-currentscript) API to read configuration
options. You can run Plausible in compatibility mode by including the `plausible.compat.js` extension and defining `id="plausible"` on the script tag so that it can find itself. Here's
how it should look like:

```html
<script id="plausible" defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.compat.js"></script>
```
