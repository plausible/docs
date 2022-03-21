---
title: Script extensions for enhanced measurement
---

We're proud to have one of the most [lightweight Javascript snippets](https://plausible.io/lightweight-web-analytics) in the analytics industry. Clocking in at less than 1KB, our script will not add any bloat to your website or cause performance issues. 

One of the ways we achieve that is by radically limiting the amount of options in the default script. Instead, we provide separate script files based on how you might want to use Plausible.

For example, the default `script.js` script will automatically work with [pushState](https://developer.mozilla.org/en-US/docs/Web/API/History_API) based frontend routing which is the most common.

If your website uses [hash-based routing](https://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash#hash-based-routing) instead, you have the option of loading the script with a different extension: `script.hash.js`. If you want to automatically track
outbound links on your website, you can load `script.outbound-links.js`. And if you want both, these extensions can be combined as follows:
`script.hash.outbound-links.js`.

In the case above, the snippet you need to insert into your site is as follows:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.hash.outbound-links.js"></script>
```

And say you want to use our `script.exclusions.js` extension to exclude certain pages from being tracked and our `script.local.js` extension to track localhost traffic, your snippet should look like this:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.exclusions.local.js"></script>
```

You can mix and match, and combine extensions any way that you wish. And you only need to insert that one snippet into your site, no need for anything else.

This approach makes sure that you only load code that will actually be used on your website. Websites should not have to load dozens or hundreds of kilobytes
of dead Javascript code on every pageload which degrades the user experience and causes unnecessary network traffic.

## All our script extensions 

Here's the list of all the available extensions at this time:

| Extension                   | Explanation                                                                                        |
|-----------------------------|----------------------------------------------------------------------------------------------------|
| script.hash.js           | Automatically follow frontend navigation when using [hash-based routing](hash-based-routing.md)    |
| script.outbound-links.js | Automatically [track clicks on outbound links](outbound-link-click-tracking.md) from your website  |
| script.exclusions.js     | [Exclude certain pages from being tracked](excluding-pages.md)                                     |
| script.compat.js         | Compatibility mode for [tracking users on Internet Explorer](#plausiblecompatjs)                   |
| script.local.js          | Allow analytics to track on localhost too which is useful in hybrid apps                           |
| script.manual.js         | [Do not trigger pageviews automatically](#plausiblemanualjs). Also allows you to [specify custom locations](custom-locations.md) to redact URLs with identifiers. You can also use it to track [custom query parameters](custom-query-params.md)|

## script.compat.js

The default Plausible script will not work on Internet Explorer because it uses the [document.currentScript](https://caniuse.com/document-currentscript) API to read configuration options. You can run Plausible in compatibility mode by including the `script.compat.js` extension and defining `id="plausible"` on the script tag so that it can find itself. Here's how it should look like:

```html
<script id="plausible" defer data-domain="yourdomain.com" src="https://plausible.io/js/script.compat.js"></script>
```

## script.manual.js

By default, the Plausible script triggers a pageview when it is first loaded. It also attaches listeners to the History API and will automatically trigger pageviews when you use `history.pushState`. This is useful for most websites but we also offer a manual mode in case you want full control over when pageviews are triggered on your website.

The most common use-case for this is when you use [Turbo](https://turbo.hotwired.dev/) (formerly [Turbolinks](https://github.com/turbolinks/turbolinks)). In that case, you want to manually trigger Plausible pageviews on the `turbo:load` or `turbolinks:load` browser event depending which library you use. Here's how you can do that:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.manual.js"></script>
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
When using turbolinks, make sure that the Plausible script isn't loaded and executed during turbo navigation. You may need to move the script to the `<head>` section of your website or use the `data-turbo-eval="false"` attribute.
:::

### Specify custom locations for your page URLs

Additionally, the manual script extension allows you to provide a special option named `u` with your events. This allows you to specify the URL of the page and can be used to specify custom locations. 

It is especially helpful to redact and aggregate multiple pages whose URLs contain identifiers that are specific to users. [Learn more about specifying custom URLs in your events](custom-locations.md).

### Track custom query parameters for complete page URLs

By default, Plausible strips all query parameters for privacy purposes [except](manual-link-tagging.md) `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`. 

This means that pages like `yoursite.com/blog/index.php?article=some_article&page=11` will be reported as `yoursite.com/blog/index.php` in the Top Pages report of your Plausible dashboard.

By using the manual script extension, you can also track custom query parameters and get the complete page URLs in your Top Pages report. Learn here [how to do that](custom-query-params.md).
