---
title: Count visitors who stay longer than a set time
sidebar_label: Time spent goals
description: "Turn time spent on a page into a goal in Plausible, such as visitors who stayed five minutes or more. A small snippet sends a custom event once the time is reached."
---

:::note
Each of these events counts towards your billable monthly pageviews like any other custom event. The snippet sends at most one event per page view.
:::

Plausible shows [time on page](metrics-definitions.md#time-on-page) and [visit duration](metrics-definitions.md#visit-duration) as averages. When a long stay is a sign of interest for your site, such as a visitor who reads your service page for five minutes and is then likely to get in touch, you may want to count those visitors as a [goal](goal-conversions.md). You can then see how many there were over any period, which pages and sources they came from and filter your dashboard by them.

A small snippet does this by sending a [custom event](custom-event-goals.md) once a visitor has spent a set amount of time on a page.

## 1. Add the snippet to your site

Add this script to every page, right below your Plausible snippet. Change `5` to the number of minutes you want to count:

```html
<script>
  (function () {
    var minutes = 5
    var visibleTime = 0
    var visibleSince = document.visibilityState === 'visible' ? Date.now() : null
    var sent = false

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        visibleSince = Date.now()
      } else if (visibleSince) {
        visibleTime += Date.now() - visibleSince
        visibleSince = null
      }
    })

    var timer = setInterval(function () {
      var total = visibleTime + (visibleSince ? Date.now() - visibleSince : 0)
      if (!sent && total >= minutes * 60 * 1000) {
        sent = true
        clearInterval(timer)
        plausible('Stayed ' + minutes + ' Minutes', { interactive: false })
      }
    }, 5000)
  })()
</script>
```

The timer only runs while the page is open in the visitor's active tab, so a page left open in a background tab isn't counted. It runs on each page separately: it counts one long stay on a page, not a visit spread across several pages. On a single-page app, it starts when the site first loads and keeps running as the visitor moves around, so the event is recorded on the page they're on when the time is reached.

`interactive: false` keeps your [bounce rate](metrics-definitions.md#bounce-rate) as it is. Remove it if you'd rather have visitors who stay this long on a single page stop counting as bounces.

To count more than one length of time, such as 2 and 5 minutes, add the script once for each with a different number.

## 2. Add the goal in your site settings

Go to your [site settings](website-settings.md), open **Goals**, click **+ Add goal**, choose **Custom event** and enter `Stayed 5 Minutes` (with your own number if you changed it).

## 3. See the visitors in your dashboard

The goal appears in the **Goals** section of your dashboard with the number of visitors who reached it and the conversion rate. Click it to filter the dashboard and see which pages held their attention and which sources and campaigns brought them in. You can use the goal in [funnels](funnel-analysis.md) too, for example to see how many of these visitors went on to your contact form.
