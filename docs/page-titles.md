---
title: Track your page titles
description: "See your page titles in Plausible next to the page paths, with a ready-made custom property snippet. Useful when paths don't tell you what's on the page."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

The [Top Pages report](top-pages.md) lists your pages by their path, such as `/blog/2026/11/123`. When paths don't tell you what's on the page, or the same path shows different content over time, it helps to see the page title too. You can send the title of each page yourself with a [custom property](custom-props/introduction.md), then see your stats by title.

<PlanFeatureNote feature="custom-properties" plan="business" label="Custom properties" />

## 1. Add the page title to your tracking snippet

In your Plausible snippet, add a `customProperties` option to the `plausible.init` call:

```javascript
plausible.init({
  // ... Other initialization options
  customProperties: function() {
    return { title: document.title }
  }
})
```

This sends the title of the page, as it shows in the browser tab, with every pageview and every custom event. Using a function means the title is read at the moment each event is sent, so it stays right as visitors move between pages. On a single-page app, check a few titles in your dashboard after setting this up: if your app changes the title only after the address has changed, a pageview can carry the previous page's title.

If you use our [NPM package](npm-package.md), pass the same `customProperties` option to `init`.

## 2. Add the property in your site settings

Go to your [site settings](website-settings.md), open the **Custom Properties** section and add `title`. You can also add it with one click once the first pageviews with it have come in.

## 3. See your stats by page title

At the bottom of your dashboard, in the **Goals** section, open the **Properties** tab and choose `title`. You see your visitors and pageviews for each title.

Click a title to filter the whole dashboard by it, for example to see where the visitors to that page came from. With a title filter on, the Top Pages report shows which paths carry that title. More on [filtering by custom properties](custom-props/props-dashboard.md).

## A note on privacy

Some page titles contain personal details, such as a visitor's name on an account page or an order number on a confirmation page. Plausible must not receive [personally identifiable information](custom-props/introduction.md#personally-identifiable-information), so leave the title out on those pages, for example by returning `{}` instead when `location.pathname` starts with `/account`.
