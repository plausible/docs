---
title: Enable optional measurements
---

import useBaseUrl from '@docusaurus/useBaseUrl';

We're proud to have one of the most [lightweight JavaScript snippets](https://plausible.io/lightweight-web-analytics) in the analytics industry.

You can enable these optional measurements when adding a new site to your Plausible account or in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

<img alt="Enable optional enhanced measurements" src={useBaseUrl('img/onboarding-enable-enhanced-tracking.png')} />

:::tip The snippet changes depending on your selection of measurements
Note that the tracking snippet that you need to insert into your site changes depending on your selection of enhanced measurements. When making changes to your optional measurements, do ensure to insert the newest snippet into your site for all tracking to work as expected
:::

Here's the list of our optional measurements:

| Optional Measurement                | Explanation                                                                                        |
|--------------------------|----------------------------------------------------------------------------------------------------|
| Outbound links | Automatically [track clicks on outbound links](outbound-link-click-tracking.md)  |
| File downloads | Automatically [track file downloads](file-downloads-tracking.md)                                   |
| 404 error pages | Automatically [track 404 error pages](error-pages-tracking-404.md)                                   |
| Hashed page paths          | Automatically track page paths that use a `#` in the URL ([hash-based routing](hash-based-routing.md))    |
| Custom events  | Allows you to [track custom events](custom-event-goals.md) such as link clicks, form submits and any other HTML element clicks            |
| Custom properties | Allows you to attach [custom properties](/custom-props/introduction) (also known as custom dimensions in Google Analytics) when sending a pageview or custom event to create custom metrics      |
| Ecommerce revenue  | Allows you to assign dynamic [monetary values](ecommerce-revenue-tracking.md) to custom events and track revenue attribution |

<details>

<summary>

## Advanced tracking options

</summary>

In addition to the above list (`script.outbound-links.js`, `script.file-downloads.js`, `script.hash.js`, `script.tagged-events.js`, `script.pageview-props.js` and `script.revenue.js`), we also have some more advanced tracking options available. Note that these are not included in the site onboarding list so you will need to insert them into your tracking snippet manually.

| Extension                | Explanation                                                                                        |
|--------------------------|----------------------------------------------------------------------------------------------------|
| script.compat.js         | Compatibility mode for [tracking users on Internet Explorer](#scriptcompatjs) (≥IE11)                      |
| script.local.js          | Allow analytics to track on localhost too which is useful in hybrid apps                           |
| script.manual.js         | [Don't trigger pageviews automatically](#scriptmanualjs). Also allows you to [specify custom locations](custom-locations.md) to redact URLs with identifiers. You can also use it to track [custom query parameters](custom-query-params.md)|

### How to manually change the tracking snippet

For example, the default script name in our snippet is `script.js`. If your website is on a localhost and you'd like to track those visits, you have the option of loading the script with a different extension: `script.local.js`. 

In this case, the snippet you need to insert into your site is as follows (make sure to change the data-domain attribute to the domain you added to Plausible):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.local.js"></script>
```

You can mix and match, and combine these extensions any way that you wish. For instance, if you want to use both our hash-based routing and our outbound link click tracking, you can combine them as follows: `script.hash.outbound-links.js`.

In this case, the snippet you need to insert into your site is as follows (make sure to change the data-domain attribute to the domain you added to Plausible):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.hash.outbound-links.js"></script>
```

Or say you want to use our `script.revenue.js` extension to track ecommerce revenue and our `script.local.js` extension to track localhost traffic, your snippet should look like this:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.revenue.local.js"></script>
```

And you only need to insert that one snippet into your site, no need for anything else.

### script.compat.js

The default Plausible script won't work on Internet Explorer because it uses the [document.currentScript](https://caniuse.com/document-currentscript) API to read configuration options. You can run Plausible in compatibility mode by including the `script.compat.js` extension and defining `id="plausible"` on the script tag so that it can find itself. Note that this works only on ≥ IE11. Here's how it should look like:

```html
<script id="plausible" defer data-domain="yourdomain.com" src="https://plausible.io/js/script.compat.js"></script>
```

### script.manual.js

By default, the Plausible script triggers a pageview when it's first loaded. It also attaches listeners to the History API and will automatically trigger pageviews when you use `history.pushState`. This is useful for most websites but we also offer a manual mode in case you want full control over when pageviews are triggered on your website.

One of the use-cases for this is when you use [Turbo](https://turbo.hotwired.dev/) (formerly [Turbolinks](https://github.com/turbolinks/turbolinks)). In that case, you want to manually trigger Plausible pageviews on the `turbo:load` or `turbolinks:load` browser event depending which library you use. Here's how you can do that:

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

When using turbolinks, you should make sure that the Plausible script isn't loaded and executed during turbo navigation. You may need to move the script to the `<head>` section of your website or use the `data-turbo-eval="false"` attribute to do so.

:::note 
When using manual.js every script call with `'pageview'` results in a separate pageview being counted even if called on the same page
:::

#### Specify custom locations for your page URLs

Additionally, the manual script extension allows you to provide a special option named `u` with your events. This allows you to specify the URL of the page and can be used to specify custom locations. 

It's especially helpful to redact and aggregate multiple pages whose URLs contain identifiers that are specific to users. [Learn more about specifying custom URLs in your events](custom-locations.md).

#### Track custom query parameters for complete page URLs

By default, Plausible strips all query parameters for privacy purposes [except for](top-referrers.md) `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`. 

This means that pages like `yoursite.com/blog/index.php?article=some_article&page=11` will be reported as `yoursite.com/blog/index.php` in the "**Top Pages**" report of your Plausible dashboard.

By using the manual script extension, you can also track custom query parameters and get the complete page URLs in your "**Top Pages**" report. Learn here [how to do that](custom-query-params.md).

:::tip Want to track outbound link clicks or file downloads cloaked with pretty URLs?
See these [step-by-step instructions](custom-automatic-link-tracking.md) for how to do that.
:::

</details>
