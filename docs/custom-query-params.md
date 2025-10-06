---
title: Tracking custom query parameters
---

Query parameters `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` are valid and supported by Plausible out of the box. The parameters themselves are stripped from the page paths so they are not shown in the "**Top Pages**" report but they are used for source attribution of  marketing campaigns. You can check all the clicks on links with UTM tags in the "**Campaigns**" tab of the "**Top Sources**" report. Read more about [tagging links with query parameters here](top-referrers.md).

Other than the source attribution query parameters listed above, Plausible strips all other query parameters for privacy purposes. This means that pages like `yoursite.com/blog/index.php?article=some_article&page=11` will be reported as `yoursite.com/blog/index.php` in the "**Top Pages**" report of your Plausible dashboard.

If you still want some pages to be reported with the complete URL that includes the query part, here's what you should do:

## 1. Disable automatic pageviews

To specify a custom location for your event, you must disable automatic pageview tracking. Update your snippet to set `autoCapturePageviews` to `false`.

```javascript
plausible.init({
  autoCapturePageviews: false
})
```

Do this on all the pages where you want to track the custom query parameters.

## 2. Trigger the pageview event with a custom `url` attribute

Once you've disabled `autoCapturePageviews` extension, the `pageview` event won't be sent automatically. This means that the stats won't be tracked anymore by default. You'll have to trigger the events to be counted manually.

Now you can create another script in which you will trigger your pageview event. This is where you can also define a custom location and
make the query part of the URL look like a standard subfolder. To do so, add the following snippet:

```html
<!-- trigger pageview -->
<script>
  function prepareUrl(params) {
    const url = new URL(location.href)
    const queryParams = new URLSearchParams(location.search)
    let customUrl = url.protocol + "//" + url.hostname + url.pathname.replace(/\/$/, '')
    for (const paramName of params) {
      const paramValue = queryParams.get(paramName)
      if (paramValue) customUrl = customUrl + '/' + paramValue
    }
    return customUrl
  }
  plausible('pageview', { url: prepareUrl(["CUSTOM_PARAM_1", "CUSTOM_PARAM_2", ... ]) + window.location.search })
</script>
```
Make sure to replace `CUSTOM_PARAM_X` with your query parameter names. You can define as many as you want.
For example, for `yoursite.com/blog/index.php?article=some_article&page=11` you could write the last line as

```javascript
plausible('pageview', { url: prepareUrl(["article", "page"]) + window.location.search });
```

and the page path will be reported to your dashboard as `blog/index.php/some_article/11`


:::note
The `+ window.location.search` is needed to persist source acquisition query parameters from your actual URL. Plausible uses `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` query parameters for source acquisition.
:::

That's it! You're now tracking the complete URLs of the pages that include custom parameters.
