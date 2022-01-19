---
title: Tracking custom que<script defer data-domain="gen.xyz" src="https://plausible.io/js/plausible.js"></script>
ry parameters
---

By default, Plausible strips all query parameters for privacy purposes [except](manual-link-tagging.md) `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`. 

This means that pages like `yoursite.com/blog/index.php?article=some_article&page=11` will be reported as `yoursite.com/blog/index.php` in the Top Pages report of your Plausible dashboard.

If you still want some pages to be reported with the complete URL that includes the query part, here's what you should do:

## 1. Add the `manual` script extension

You can use [Plausible's manual script extension](script-extensions.md#plausiblemanualjs) and define a custom location for all such pageviews. 

To do so, change your Plausible script snippet `src` attribute from `https://plausible.io/js/plausible.js` to `https://plausible.io/js/plausible.manual.js`.

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.manual.js"></script>
```
Do this on all the pages where you want to track the custom query parameters.

## 2. Trigger the pageview event with a custom `u` attribute

Once you've started using the manual extension, the `pageview` event won't be sent automatically. This means that the stats won't be tracked anymore by default. You'll have to trigger the events to be counted manually.

To trigger events manually, you need to add the following script after your regular Plausible tracking snippet:

```html
<!-- define the `plausible` function to manually trigger events -->
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

Once that's done, you can create another script in which you will trigger your pageview event. This is where you can also define a custom location and
make the query part of the URL look like a standard subfolder. To do so, add the following snippet:

```html
<!-- trigger pageview -->
<script>
  function prepareUrl(params) {
    const url = new URL(location.href)
    const queryParams = new URLSearchParams(location.search)
    let customUrl = url.protocol + "//" + url.hostname + url.pathname
    for (const paramName of params) {
      const paramValue = queryParams.get(paramName)
      if (paramValue) customUrl = customUrl + '/' + paramValue
    }
    return customUrl
  }
  plausible('pageview', { u: prepareUrl(["CUSTOM_PARAM_1", "CUSTOM_PARAM_2", ... ]) })
</script>
```
Make sure to replace `CUSTOM_PARAM_X` with your query parameter names. You can define as many as you want.
For example, for `yoursite.com/blog/index.php?article=some_article&page=11` you could write the last line as

```javascript
plausible('pageview', { u: prepareUrl(["article", "page"]) });
```

and the page path will be reported to your dashboard as `blog/index.php/some_article/11`

At this point, your entire setup should look like this:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.manual.js"></script>
<!-- define the `plausible` function to manually trigger events -->
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
<!-- trigger pageview -->
<script>
  function prepareUrl(params) {
    const url = new URL(location.href)
    const queryParams = new URLSearchParams(location.search)
    let customUrl = url.protocol + "//" + url.hostname + url.pathname
    for (const paramName of params) {
      const paramValue = queryParams.get(paramName)
      if (paramValue) customUrl = customUrl + '/' + paramValue
    }
    return customUrl
  }
  plausible('pageview', { u: prepareUrl(["CUSTOM_PARAM_1", "CUSTOM_PARAM_2", ... ]) })
</script>
```

That's it! You're now tracking the complete URLs of the pages that include custom parameters. 
