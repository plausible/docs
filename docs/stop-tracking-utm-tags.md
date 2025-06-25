---
title: Stop tracking UTM tags and other query parameters
---

By default, Plausible strips all query parameters for privacy purposes [except for](top-referrers.md) `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`. If you prefer to stop tracking these parameters as well, please follow these instructions:

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

That's it! You're now no longer tracking any UTM tags or other parameters. We will use the [referrer header](top-referrers.md) to display the sources of the traffic instead. If the referring site doesn't send any referrer header, the traffic will fall within the "**Direct / None**" source.
