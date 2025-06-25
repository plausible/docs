---
title: Specify a custom location to aggregate pages that contain identifiers
---

By default, Plausible tracks pages using their complete URLs as they are on your website. In some cases, you might want to provide Plausible with a custom URL to use instead of the actual URL of a page.

This is especially helpful to redact and aggregate multiple pages whose URLs contain identifiers, personally identifiable information (PII) and other universally unique identifiers (UUID) specific to users. This is helpful both from the privacy and analytics perspective.

Follow the steps below to learn how you can specify a custom location for your pages and aggregate page URLs that contain identifiers:

## 1. Disable automatic pageviews

To specify a custom location for your event, you must disable automatic pageview tracking. Update your snippet to set `autoCapturePageviews` to `false.

```javascript
plausible.init({
  autoCapturePageviews: false
})
```

## 2. Trigger the pageview event

Once you've added the manual extension, the `pageview` event won't be sent automatically anymore: you'll have to trigger it manually.

To trigger events manually, you need to add the following script after your regular Plausible tracking script:

```html
<!-- define the `plausible` function to manually trigger events -->
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

Once that's done, you can create another script in which you will trigger your pageview event:

```html
<!-- trigger pageview -->
<script>
  plausible('pageview');
</script>
```

At this point, your pageview events are being triggered just like before, but you haven't defined a custom location yet.
This is what we'll do in the next step.

## 3. Specify a custom location
The `plausible` function allows you to provide an option named `url`.
This option allows you to specify the URL of the page you're on.

To use it, you can update your `pageview` trigger code to add the `url` option as the second parameter, like so:

```js
plausible('pageview', { url: "https://yourdomain.com/my-custom-location" + window.location.search });
```

:::note
The `+ window.location.search` is needed to persist query parameters from your actual URL. Plausible uses `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` query parameters for source acquisition. [Learn more here](top-referrers.md).
:::

Once you have specified an URL through the `url` option, all the pageview events triggered from that script will be sent as if they came from that URL. In this case, all the pageview events will appear as if they came from `https://yourdomain.com/my-custom-location`).

You can specify the `url` option in your other events as well if you wish to do so.

In a real-world scenario, the URL you provide to Plausible would likely be dynamic, changing depending on the current page and context. The URL can be provided by a JavaScript variable or function, or rendered by the server when generating the page. You can take a look at the examples below to see how URLs can be provided dynamically in common use cases.

## 4. Visit your website to ensure it works

You can test your custom location by visiting a page for which you specified a custom location, and ensuring pageviews events show up under the provided custom URL in your Plausible dashboard.

:::note
If you specify the same custom URL in all your website's pages, all your pages will be tracked as if they were the same. You should implement this feature with caution and test exhaustively to ensure that you are correctly tracking the data.
:::

---

## Common usage examples

Here are a few examples of scenarios in which specifying custom locations might be useful.
### Combining data for multiple pages based on canonical URL

Let's say you have multiple URLs that link to the same pages, such as:

- `https://yourdomain.com/products/banana-leather-shoe`
- `https://yourdomain.com/products/clothes/banana-leather-shoe`
- `https://yourdomain.com/products/clothes/shoes/banana-leather-shoe`
- `https://yourdomain.com/products/clothes/men/shoes/banana-leather-shoe`

Perhaps you would like to combine all the pageviews for these pages so they all appear in Plausible as the canonical URL for this product (which might be `https://yourdomain.com/products/banana-leather-shoe`, for example).

`transformRequest` allows providing an option for getting the canonical URL and overriding the request url. To do so, in your Plausible tracking snippet, add the following:

```javascript
function transformRequest(payload) {
  // Get the canonical URL element
  var canonicalMeta = document.querySelector('link[rel="canonical"]');
  // Use the canonical URL if it exists, falling back on the regular URL when it doesn't.
  if (canonicalMeta) {
    payload.u = canonicalMeta.href + window.location.search
  }
  return payload
}

// At the end, update plausible.init call
plausible.init({
  transformRequest: transformRequest
})
```

_Et voilà!_ From now on, your pageviews will automatically appear as coming from the canonical URL (`https://yourdomain.com/products/banana-leather-shoe` for the product we used in our example).

Plus, if you trigger other events on the page, you can reuse the `url` variable we generated to keep your data consistent!

### Redacting identifiers from URLs

If you have a web application, you likely have URLs with identifiers in them, such as `https://yourapp.com/project/123456/settings`. This is great for your users as they can easily bookmark pages within your app.

However, having the dashboard page of every project appear as individual pages in your analytics may not be all that great. In fact, it can rapidly make your data really hard to analyze: imagine seeing 100 different URLs in your analytics for the same route, instead of seeing a single URL with 100 pageviews.

In situations like these, redacting identifiers from URLs can make things much more manageable, and only takes a few minutes to implement.

For example, you could write a `transformRequest` that uses a regular expression to remove numerical identifiers from the URLs that Plausible receives. To do so, insert this into your snippet:

```javascript
function redactedUrl() {
  var url = window.location.href;
  // Replace every all-numeric sequences located between two slashes by "_ID_"
  return url.replace(/\/\d+\//g, "/_ID_/");
}

function transformRequest(payload) {
  payload.u = redactedUrl() + window.location.search
  return payload
}

// At the end, update plausible.init call
plausible.init({
  transformRequest: transformRequest
})
```

And just like that, your pageviews will start being tracked as `https://yourapp.com/project/_ID_/settings`.

If your identifiers aren't entirely numerical, or if you only want to redact some identifiers but keep others, you can update the regular expression to match your format.

With all the different identifiers being aggregated under the same URL, it's suddenly much easier to see which pages and features your visitors use the most!

Thanks to [Émile Perron](https://github.com/EmilePerron) for the contribution!
