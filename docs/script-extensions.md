---
title: Enable optional measurements
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Plausible JavaScript snippet offer enhanced measurements and configuration for tailoring to how you want to use Plausible.

Optional measurements can enabled when adding a new site to your Plausible account or in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

<img alt="Enable optional enhanced measurements" src={useBaseUrl('img/onboarding-enable-enhanced-tracking.png')} />

Here's the list of our optional measurements:

| Optional Measurement                | Explanation                                                                                        |
|--------------------------|----------------------------------------------------------------------------------------------------|
| Outbound links | Automatically [track clicks on outbound links](outbound-link-click-tracking.md)  |
| File downloads | Automatically [track file downloads](file-downloads-tracking.md)                                   |
| Form submissions | Automatically [track form submissions](form-submissions-tracking.md) |

## `plausible.init()` configuration

Additionally, `plausible.init()` can be called with different options further enhance its behavior. Supported options are:

| Option | Type | Default | Description |
| -- | -- | -- | -- |
| endpoint             | `string`                          | `"https://plausible.io/api/event"` | Allows [proxying requests](/proxy/introduction) |
| hashBasedRouting     | `boolean`                         | `false`                            | Track page paths that use a `#` in the URL ([hash-based routing](hash-based-routing.md)) |
| fileDownloads        | `boolean` or `{ fileExtensions }` | `false`                            | Automatically [track file downloads](file-downloads-tracking.md) |
| outboundLinks        | `boolean`                         | `false`                            | [track clicks on outbound links](outbound-link-click-tracking.md)                        |
| customProperties     | `object` or `function(eventName)` | `{}`                               | [Add custom props globally](/custom-props/introduction)               |
| formSubmissions      | `boolean`                         | `false`                            | [Track form submissions](form-submissions-tracking.md)                    |
| captureOnLocalhost   | `boolean`                         | `false`                            | Enables tracking on localhost for dev environments                  |
| autoCapturePageviews | `boolean`                         | `true`                             | Automatically track pageviews                                       |
| logging              | `boolean`                         | `true`                             | Enable/disable logging done by script                               |
| transformRequest     | `function(payload)`               | –                                  | Modify or filter events before sending (e.g. [for custom locations](/custom-locations))|


## Advanced tracking recipes

### Tracking 404 error pages

See guide for [tracking 404 error pages](error-pages-tracking-404.md)

### Tracking custom events

See guide for [tracking custom events such as link clicks or any other HTML element clicks](custom-event-goals.md)

### Attaching custom properties

See guide for [attaching custom properties](/custom-props/introduction) (also known as custom dimensions in Google Analytics) when sending a pageview or custom event to create custom metrics.

### Ecommerce revenue

See guide for [assigning dynamic monetary values](ecommerce-revenue-tracking.md) to custom events and track revenue attribution

### Manual pageviews

By default, the Plausible script triggers a pageview when it's first loaded. It also attaches listeners to the History API and will automatically trigger pageviews when you use `history.pushState`. This is useful for most websites but we also allow disabling `autoCapturePageviews` in case you want full control over when pageviews are triggered on your website.

One of the use-cases for this is when you use [Turbo](https://turbo.hotwired.dev/) (formerly [Turbolinks](https://github.com/turbolinks/turbolinks)). In that case, you want to manually trigger Plausible pageviews on the `turbo:load` or `turbolinks:load` browser event depending which library you use.

To do so, add update `plausible.init` to disable `autoCapturePageviews`: `plausible.init({ autoCapturePageviews: false })`

Additionally, add a javascript listener that triggers pageviews on turbolinks navigation:

```javascript
document.addEventListener("turbo:load", function() {
  plausible('pageview')
})
```

:::note
Every script call with `'pageview'` results in a separate pageview being counted even if called on the same page
:::

#### Specify custom locations for your page URLs

Triggering pageviews manually allows you to provide a special option named `url` with your events. This allows you to specify the URL of the page and can be used to specify custom locations.

It's especially helpful to redact and aggregate multiple pages whose URLs contain identifiers that are specific to users. [Learn more about specifying custom URLs in your events](custom-locations.md).


#### Track custom query parameters for complete page URLs

By default, Plausible strips all query parameters for privacy purposes [except for](top-referrers.md) `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`.

This means that pages like `yoursite.com/blog/index.php?article=some_article&page=11` will be reported as `yoursite.com/blog/index.php` in the "**Top Pages**" report of your Plausible dashboard.

By using the manual script extension, you can also track custom query parameters and get the complete page URLs in your "**Top Pages**" report. Learn here [how to do that](custom-query-params.md).

:::tip Want to track outbound link clicks or file downloads cloaked with pretty URLs?
See these [step-by-step instructions](custom-automatic-link-tracking.md) for how to do that.
:::
