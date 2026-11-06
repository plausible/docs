---
title: Track your visitors' browser language
description: "See which languages your visitors' browsers are set to in Plausible, with a ready-made custom property snippet. Useful for multilingual sites and countries with several languages."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

Plausible doesn't record the browser language by default. The [location reports](countries.md) show where your visitors are, but in countries with several languages, such as Switzerland, Belgium or Canada, that doesn't tell you which language they prefer. You can add the browser language yourself with a [custom property](custom-props/introduction.md), then filter and compare your stats by it.

<PlanFeatureNote feature="custom-properties" plan="business" label="Custom properties" />

## 1. Add the language to your tracking snippet

In your Plausible snippet, add a `customProperties` option to the `plausible.init` call:

```javascript
plausible.init({
  // ... Other initialization options
  customProperties: {
    language: (navigator.language || "unknown").split("-")[0]
  }
})
```

This sends the visitor's main browser language as a two-letter code, such as `en`, `de` or `fr`, with every pageview and every custom event.

If you'd rather keep the regional variant, such as `de-CH` or `fr-CA`, leave out `.split("-")[0]`:

```javascript
plausible.init({
  // ... Other initialization options
  customProperties: {
    language: navigator.language || "unknown"
  }
})
```

The two-letter code keeps the report short. The full code is useful when regional variants matter to you, for example Swiss German versus German.

If you use our [NPM package](npm-package.md), pass the same `customProperties` option to `init`.

## 2. Add the property in your site settings

Go to your [site settings](website-settings.md), open the **Custom Properties** section and add `language`. You can also add it with one click once the first pageviews with it have come in.

## 3. See your stats by language

At the bottom of your dashboard, in the **Goals** section, open the **Properties** tab and choose `language`. You see your visitors, pageviews and conversions for each language.

Click a language to filter the whole dashboard by it, for example to see the top pages or sources for visitors whose browser is set to French. Because the property is sent with your custom events too, you can also see how each language converts on your goals. More on [filtering by custom properties](custom-props/props-dashboard.md).

## Browser language or page language

The browser language is the language your visitors have set in their browser, so it shows what they prefer. If your site is available in several languages and you'd like to see which version they're reading instead, send the language of the page:

```javascript
plausible.init({
  // ... Other initialization options
  customProperties: {
    page_language: document.documentElement.lang || "unknown"
  }
})
```

This reads the `lang` attribute of your page's `<html>` tag, so it only works when your site sets one. You can send both properties side by side to compare what visitors prefer with what they read.
