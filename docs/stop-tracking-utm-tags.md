---
displayed_sidebar: someSidebar
title: Stop tracking UTM tags and other query parameters
description: "How to stop Plausible from tracking UTM tags and other query parameters by stripping them from the URL before the pageview is recorded."
---

By default, Plausible strips all query parameters for privacy purposes [except for](top-referrers.md) `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`, and it also reads ad click IDs such as `gclid` and `msclkid` to recognise paid search traffic. If you prefer to stop tracking these parameters as well, for example to follow stricter national guidance on audience measurement, please follow these instructions:

## Set `transformRequest` option in `plausible.init`

The easiest way to stop tracking parameters is to use `transformRequest` to update the URL property sent to Plausible and prevent the tracking of UTM tag.

To do so, in your Plausible tracking snippet, add the following:

```javascript
function queryStrippedUrl() {
  return location.href.split('?')[0]
}

function transformRequest(payload) {
  // Sets url for the event manually
  payload.u = queryStrippedUrl()
  return payload
}

// At the end, update plausible.init call:
plausible.init({
  transformRequest: transformRequest
})
```

That's it! You're now no longer tracking any UTM tags or other parameters. We will use the [referrer header](top-referrers.md) to display the sources of the traffic instead. If the referring site doesn't send any referrer header, the traffic will fall within the "Direct / None" source. Without UTM tags and click IDs, visits from paid campaigns are counted under their source, such as Google, rather than as paid traffic in the **Channels** report.

## Keep only the referring domain

The referrer header can include the full address of the page a visitor came from. If you'd rather record only the referring site, also replace the referrer with its domain in the same `transformRequest` function:

```javascript
function transformRequest(payload) {
  payload.u = queryStrippedUrl()
  if (payload.r) {
    try {
      payload.r = new URL(payload.r).origin
    } catch (e) {
      payload.r = null
    }
  }
  return payload
}
```

Your **Sources** report keeps working as before. Only the page paths shown when you click on a source are no longer recorded.

:::note
This solution may not work in single-page-applications or when using [hash-based routing](/hash-based-routing) as `location.href` may change before `transformRequest`
is called.
:::
