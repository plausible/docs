---
title: Track your visitors' screen resolution
description: "See the exact screen resolutions of your visitors in Plausible, such as 1920x1080, with a ready-made custom property snippet."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

The [Devices report](devices.md) groups your visitors into desktop, mobile and tablet. If you design for specific screens and want the exact resolution, such as `1920x1080` or `390x844`, you can send it yourself with a [custom property](custom-props/introduction.md).

<PlanFeatureNote feature="custom-properties" plan="business" label="Custom properties" />

## 1. Add the screen resolution to your tracking snippet

In your Plausible snippet, add a `customProperties` option to the `plausible.init` call:

```javascript
plausible.init({
  // ... Other initialization options
  customProperties: {
    screen_resolution: window.screen.width + "x" + window.screen.height
  }
})
```

This sends the screen's width and height in CSS pixels with every pageview and every custom event. Phones and tablets report the size for the way they're held, so the same phone can show up as `390x844` and `844x390`.

If you only need the width, which keeps the list shorter, send `String(window.screen.width)` instead.

If you use our [NPM package](npm-package.md), pass the same `customProperties` option to `init`.

## 2. Add the property in your site settings

Go to your [site settings](website-settings.md), open the **Custom Properties** section and add `screen_resolution`. You can also add it with one click once the first pageviews with it have come in.

## 3. See your stats by screen resolution

At the bottom of your dashboard, in the **Goals** section, open the **Properties** tab and choose `screen_resolution`. Click a resolution to filter the whole dashboard by it, for example to see which pages visitors on small screens read or how they convert on your goals. More on [filtering by custom properties](custom-props/props-dashboard.md).

## A note on privacy

Plausible doesn't record screen resolutions by default. On its own, a screen resolution doesn't identify anyone, and Plausible only shows it as a count of visitors per resolution. It is one of the signals that fingerprinting scripts combine to recognise devices, though, so some privacy reviews ask about it. Whether to send it, like any custom property, is up to you and your legal team.
