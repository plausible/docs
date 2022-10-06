---
title: Stop tracking UTM tags and other query parameters
---

By default, Plausible strips all query parameters for privacy purposes [except for](manual-link-tagging.md) `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`. If you prefer to stop tracking these parameters as well, please follow these instructions:

## 1. Add the `manual` script extension

You should use [our manual script extension](script-extensions.md#plausiblemanualjs). To do so, please change your Plausible script snippet `src` attribute from `https://plausible.io/js/script.js` to `https://plausible.io/js/script.manual.js`.

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.manual.js"></script>
```
Do this on all the pages where you want to stop tracking UTM tags and other query parameters.

## 2. Trigger the pageview event with a custom `u` attribute

Once you've started using the manual extension, the `pageview` event won't be sent automatically. This means that the stats won't be tracked anymore by default. You'll have to trigger the events to be counted manually.

To trigger events manually, you need to add the following script after your regular Plausible tracking snippet:

```html
<!-- define the `plausible` function to manually trigger events -->
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

Once that's done, you can create another script in which you will trigger your pageview event. This is where you can override the URL property sent to Plausible and prevent the tracking of UTM tags. To do so, add the following snippet:

```html
<!-- trigger pageview -->
<script>
  function queryStrippedUrl() {
    return location.href.split('?')[0]
  }
  plausible('pageview', { u: queryStrippedURL() })
</script>
```

At this point, your entire setup should look like this:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.manual.js"></script>
<!-- define the `plausible` function to manually trigger events -->
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
<!-- trigger pageview -->
<script>
  function queryStrippedUrl() {
    return location.href.split('?')[0]
  }
  plausible('pageview', { u: queryStrippedURL() })
</script>
```

That's it! You're now no longer tracking any UTM tags or other parameters. We will use the [referrer header](top-referrers.md#1-automatic-by-the-referer-header) to display the sources of the traffic instead. If the referring site doesn't send any referrer header, the traffic will fall within the "Direct / None" source.
