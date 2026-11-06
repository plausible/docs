---
title: Track Core Web Vitals with Plausible
description: "See how your pages score on Google's Core Web Vitals (LCP, INP and CLS) in Plausible, using the open source web-vitals library and a custom event."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

Plausible doesn't measure page speed by default. With Google's open source [web-vitals](https://github.com/GoogleChrome/web-vitals) library, you can send the Core Web Vitals rating of each page load to Plausible as a [custom event](custom-event-goals.md). You then see the share of good, needs improvement and poor loads for each metric, on each page.

The three Core Web Vitals are:

* **LCP** (Largest Contentful Paint): how quickly the main content loads. Good is 2.5 seconds or less.
* **INP** (Interaction to Next Paint): how quickly the page responds to clicks and taps. Good is 200 milliseconds or less.
* **CLS** (Cumulative Layout Shift): how much the layout moves while loading. Good is 0.1 or less.

The library rates each one as `good`, `needs-improvement` or `poor` using Google's thresholds.

<PlanFeatureNote feature="custom-properties" plan="business" label="Custom properties" />

:::caution Custom events count towards your usage
Each Core Web Vitals event counts towards your billable monthly pageviews like any other custom event. With all three metrics on every page load, your usage could grow by up to three events per pageview. The snippet below sends them for a sample of 10% of page loads, which is enough to see the shares on busier pages. Change `0.1` to send more or fewer.
:::

## 1. Add the snippet to your site

Add this below your Plausible snippet, on every page you want to measure:

```html
<script type="module">
  import { onCLS, onINP, onLCP } from 'https://unpkg.com/web-vitals@5?module';

  if (Math.random() < 0.1) {
    function sendToPlausible(metric) {
      plausible('Core Web Vitals', {
        props: { metric: metric.name, rating: metric.rating },
        interactive: false
      });
    }

    onCLS(sendToPlausible);
    onINP(sendToPlausible);
    onLCP(sendToPlausible);
  }
</script>
```

`interactive: false` keeps these events out of your bounce rate, since they aren't something the visitor did. If you'd rather not load the library from a CDN, install it from npm (`npm install web-vitals`) and import it in your own code.

## 2. Set up the goal and properties

1. In your [site settings](website-settings.md), go to **Goals**, click **Add goal**, choose **Custom event** and enter `Core Web Vitals`.
2. In the **Custom Properties** section, add `metric` and `rating`.

## 3. See how your pages score

1. In the **Goals** section at the bottom of your dashboard, click **Core Web Vitals** to filter by it.
2. Open the **Properties** tab, choose `metric` and click **LCP**, **INP** or **CLS** to filter by that metric.
3. Choose `rating` to see how many page loads were good, needed improvement or were poor.

With these filters on, the **Top Pages** report shows which pages the events came from. Add a filter for `rating` is `poor` to find the pages that need the most work. More on [filtering by custom properties](custom-props/props-dashboard.md).

These are ratings from your real visitors, not lab tests, so they reflect the devices and connections your audience actually uses. Plausible shows the share of each rating, not the timings themselves.
