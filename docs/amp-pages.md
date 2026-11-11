---
displayed_sidebar: someSidebar
title: Track Google AMP pages
sidebar_label: Google AMP pages
description: "Track pageviews and custom events on Google AMP pages with Plausible. AMP doesn't allow our script, so you add an amp-analytics block instead."
---

AMP pages don't allow custom JavaScript, so the Plausible script can't run on them. To count visits to your AMP pages, add an `amp-analytics` block that sends the same events to Plausible.

## 1. Load the amp-analytics component

Add the `amp-analytics` component to the `<head>` of your AMP pages if it isn't there already:

```html
<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
```

## 2. Add the tracking block

Add this to the `<body>` of your AMP pages and replace `example.com` with your site's domain exactly as you added it to Plausible:

```html
<amp-analytics>
  <script type="application/json">
    {
      "vars": {
        "dataDomain": "example.com"
      },
      "requests": {
        "event": "https://plausible.io/api/event"
      },
      "extraUrlParams": {
        "u": "${sourceUrl}",
        "r": "${documentReferrer}",
        "d": "${dataDomain}"
      },
      "triggers": {
        "trackPageview": {
          "on": "visible",
          "request": "event",
          "extraUrlParams": {
            "n": "pageview"
          }
        }
      },
      "transport": {
        "beacon": true,
        "xhrpost": true,
        "image": false,
        "useBody": true
      }
    }
  </script>
</amp-analytics>
```

`${sourceUrl}` is the address of your own AMP page, even when Google serves it from the AMP cache. Your AMP pages appear in the **Top Pages** report under their own paths, such as `/blog/my-post/amp`.

## 3. Check that it works

Open one of your AMP pages, then look at your [realtime dashboard](realtime-dashboard.md). Your visit should show up within a few seconds. In the **Network** tab of your browser's developer tools, you should see a request to `https://plausible.io/api/event`.

## Track custom events

To count a click as a [custom event](custom-event-goals.md), add a trigger for it next to `trackPageview`. This example sends a `Signup` event when someone clicks the element with the ID `signup-button`:

```json
"trackSignup": {
  "on": "click",
  "selector": "#signup-button",
  "request": "event",
  "extraUrlParams": {
    "n": "Signup"
  }
}
```

Then add `Signup` as a [custom event goal](custom-event-goals.md) in your site settings so it shows in your dashboard.

## What's different on AMP pages

The AMP block sends only the events you define, so some things the Plausible script does automatically don't happen on AMP pages:

* Scroll depth and time on page aren't recorded
* Outbound link clicks, file downloads and form submissions aren't tracked automatically. Add a click trigger for each one you need, as in the custom event example above
* If you use our [WordPress plugin](wordpress-integration.md), it doesn't add tracking to AMP pages, including Web Stories. Add the block above to those pages yourself, for example with a code snippets plugin or in your theme