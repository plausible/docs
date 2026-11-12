---
title: Measure A/B tests with Plausible
description: "Compare how the variants of an A/B test convert in Plausible, using pageview goals for split URL tests or a custom property for variants on the same page."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

Plausible doesn't split your visitors into variants, but it can measure the results of an A/B test. Your testing tool, your server or your own code decides which visitor sees which version. Plausible then shows how many visitors saw each version and how each one converts on your [goals](goal-conversions.md).

There are two ways to set it up, depending on how your test works.

## Variants on different URLs

When each variant has its own page, such as `/pricing` and `/pricing-b`, you don't need any code changes:

1. Set up the goal you want to compare, such as a [pageview goal](pageview-goals.md) for your thank-you page or a [custom event goal](custom-event-goals.md) for a signup.
2. Filter your dashboard by the goal.
3. In the **Top Pages** report, open the **Entry Pages** tab. It shows the visitors who converted (**Conversions**) and the conversion rate of each variant. Open the report's details view to also see the total visitors of each variant.

Choose a date range that starts when your test started.

## Variants on the same URL

When the variants are shown on the same page, send the variant as a [custom property](custom-props/introduction.md).

<PlanFeatureNote feature="custom-properties" plan="business" label="Custom properties" />

### 1. Send the variant with your tracking snippet

Your page needs to know which variant the visitor sees. Most testing tools and frameworks let you read it in JavaScript. In this example, your site sets it as an attribute on the page's `<html>` tag, such as `<html data-variant="pricing-b">`:

```javascript
plausible.init({
  // ... Other initialization options
  customProperties: function () {
    var variant = document.documentElement.getAttribute("data-variant")
    return variant ? { variant: variant } : {}
  }
})
```

The function runs for every pageview and every custom event, so your goal conversions carry the variant too. Pages without a test send no `variant` property. Replace the line that reads the attribute with however your testing tool exposes the variant.

If you run several tests at once, include the test's name in the value, such as `pricing-page-b` and `signup-form-a`, so you can tell them apart.

If you use our [NPM package](npm-package.md), pass the same `customProperties` option to `init`.

### 2. Add the property in your site settings

Go to your [site settings](website-settings.md), open the **Custom Properties** section and add `variant`.

### 3. Compare your variants

At the bottom of your dashboard, in the **Goals** section, open the **Properties** tab and choose `variant`. The **Visitors** column shows how many visitors saw each variant.

Then filter your dashboard by the goal you're testing. The same column now shows how many visitors converted with each variant. Ignore the **CR** (conversion rate) column in this report. It's calculated against all the visitors to your site, not against each variant's visitors.

## Is the difference real?

Plausible shows how each variant converts but doesn't test whether the difference is statistically significant. For that, enter each variant's visitors and the visitors who converted into our [A/B test significance calculator](https://plausible.io/ab-test-significance-calculator). It also shows each variant's conversion rate. In the **Properties** tab, use the **Visitors** column rather than **Events**. Counting a visitor who converted twice makes a result look more certain than it is.

If the result isn't significant yet, the calculator shows roughly how many visitors your test needs. Let it run until it gets there before you decide.
