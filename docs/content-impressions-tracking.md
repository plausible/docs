---
title: Track impressions and clicks on banners and other content
sidebar_label: Impressions and clicks
description: "See how many visitors saw a banner, call to action or other block on your page and how many clicked it in Plausible, with a small snippet and two custom events."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

:::caution Custom events count towards your usage
Each impression and each click counts towards your billable monthly pageviews like any other custom event. The snippet sends at most one impression per block per page view, but a page with many tracked blocks sends many events. Track the blocks you want to compare, not every element on the page.
:::

[Goals](goal-conversions.md) tell you how many visitors clicked something. To judge a banner, a call to action or a promotion, you also want to know how many visitors actually saw it. A block at the bottom of a long page gets fewer clicks simply because fewer people scroll that far.

With a small snippet you can send an impression when a block comes into view and a click when someone clicks inside it. Both are [custom events](custom-event-goals.md) with the block's name as a [custom property](custom-props/introduction.md), so you can compare clicks to impressions for each block.

<PlanFeatureNote feature="custom-properties" plan="business" label="Custom properties" />

## 1. Name the blocks you want to track

Add a `data-content-name` attribute to each block you want to track, with a name you'll recognize in your dashboard:

```html
<div class="banner" data-content-name="Spring sale banner">
  <a href="/sale">Save 20% this week</a>
</div>
```

## 2. Add the snippet to your site

Add this script to every page with tracked blocks, at the end of the page just before the closing `</body>` tag:

```html
<script>
  (function () {
    var blocks = document.querySelectorAll('[data-content-name]')
    if (!blocks.length || !('IntersectionObserver' in window)) return

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)
        plausible('Content: Impression', {
          props: { content: entry.target.getAttribute('data-content-name') },
          interactive: false
        })
      })
    }, { threshold: 0.5 })

    blocks.forEach(function (block) {
      observer.observe(block)
    })

    document.addEventListener('click', function (event) {
      var block = event.target.closest && event.target.closest('[data-content-name]')
      if (!block) return
      plausible('Content: Click', {
        props: { content: block.getAttribute('data-content-name') }
      })
    })
  })()
</script>
```

An impression is sent once half of the block is visible on the screen, and only once per page view. `interactive: false` keeps impressions out of your [bounce rate](metrics-definitions.md#bounce-rate), since seeing a block isn't something the visitor did. Clicks do count as interactions.

The script looks for blocks when the page loads. Blocks added to the page later, such as a popup that appears after a few seconds, aren't picked up.

## 3. Add the goals and the property

1. In your [site settings](website-settings.md), go to **Goals**, click **+ Add goal**, choose **Custom event** and add `Content: Impression`. Do the same for `Content: Click`.
2. In the **Custom Properties** section, add `content`.

## 4. Compare clicks to impressions

1. In the **Goals** section of your dashboard, click **Content: Impression** to filter by it.
2. Open the **Properties** tab and choose `content`. The **Total** column shows how many impressions each block had.
3. Do the same with **Content: Click** to see how many clicks each block had.

Divide a block's clicks by its impressions to get its click rate. A block with a high click rate but few impressions may do better higher up the page. One with many impressions and few clicks may need a different message.

Filter by a single block to see which pages it was seen on and which sources brought the visitors who clicked it. More on [filtering by custom properties](custom-props/props-dashboard.md).
