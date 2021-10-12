---
title: Script extensions for enhanced measurement
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

| Extension                   | Explanation                                                                                        |
|-----------------------------|----------------------------------------------------------------------------------------------------|
| plausible.hash.js           | Automatically follow frontend navigation when using [hash-based routing](hash-based-routing.md)    |
| plausible.outbound-links.js | Automatically [track clicks on outbound links](outbound-link-click-tracking.md) from your website  |
| plausible.exclusions.js     | [Exclude certain pages from being tracked](excluding-pages.md)                                     |
| plausible.compat.js         | Compatibility mode for tracking users on Internet Explorer                                         |
| plausible.local.js          | Allow analytics to track on localhost too which is useful in hybrid apps                           |
| plausible.manual.js         | Do not trigger pageviews automatically.                                                            |

### plausible.compat.js

The default Plausible script will not work on Internet Explorer because it uses the [document.currentScript](https://caniuse.com/document-currentscript) API to read configuration
options. You can run Plausible in compatibility mode by including the `plausible.compat.js` extension and defining `id="plausible"` on the script tag so that it can find itself. Here's
how it should look like:

```html
<script id="plausible" defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.compat.js"></script>
```

### plausible.manual.js

By default, the Plausible script triggers a pageview when it is first loaded. It also attaches listeners to the History API and will automatically trigger pageviews
when you use `history.pushState`. This is useful for most websites but we also offer a manual mode in case you want full control over when pageviews are triggered
on your website.

The most common use-case for this is when you use [Turbo](https://turbo.hotwired.dev/) (formerly [Turbolinks](https://github.com/turbolinks/turbolinks)). In that case,
you want to manually trigger Plausible pageviews on the `turbo:load` or `turbolinks:load` browser event depending which library you use. Here's how you can do that:


```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.manual.js"></script>
<!-- define the `plausible` function to manually trigger events -->
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
<!-- trigger pageviews on turbolinks navigation -->
<script>
document.addEventListener("turbo:load", function() {
  plausible('pageview')
})
</script>
```

:::note
When using turbolinks, make sure that the Plausible script isn't loaded and executed during turbo navigation. You may need to move the script to the `<head>` section
of your website or use the `data-turbo-eval="false"` attribute.
:::
