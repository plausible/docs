---
title: Specify a custom location for your page
---

By default, Plausible Analytics tracks pages using their full URL.

In some cases, you might want to provide Plausible with a custom URL to use instead of the page's real URL. This is especially helpful to redact and aggregate multiple pages whose URL contain identifiers. 

When you specify a custom location URL for a page, all events for that page will be counted under the custom location's URL. As long as the custom location is present, there won't be any new events for the page's real URL. The historical stats will be kept and will stay the same.

Here's how to specify a custom location.

## 1. You'll need to use a different Plausible script snippet

To manually specify a location, you need to change your Plausible script snippet `src` attribute from `https://plausible.io/js/plausible.js` to `https://plausible.io/js/plausible.custom-location.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.custom-location.js"></script>
```

## 2. Specify the custom location

There are two ways to define a custom location. 

### Option 1: specifying a URL directly

You can specify a custom location URL by adding the `data-location` attribute to your Plausible script. The value of that attribute should be a fully-fledged URL. 

With that in place, all traffic and events will then be tracked as if they came from the provided URL.

Here is an example:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.custom-location.js" data-location="https://yourdomain.com/my-custom-location"></script>
```

:::caution
**Be extremely careful when using this technique!** 

You must make sure that you only add the `data-location` attribute to your Plausible script on the pages where that custom URL must be used instead of the default one. 

If you were to add the same `data-location` to all of your website's pages, all of your pages will be tracked as if they were the same.
:::


### Option 2: specifying a function that provides the location

If you prefer, you can provide a function that Plausible can call to obtain the current location. 

This is done by adding the `data-get-location` attribute to your Plausible script. 

The value of that attribute should be the name of the function. The function must be defined in the global namespace, so that it is accessible on the `window` object. If the function is not defined, Plausible will fall back on using the current page's URL.

Here is an example:

```html
<script>window.myLocationGetter = function() { return location.href.replace(/\/\d+\//, '/id/');  }</script>
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.custom-location.js" data-get-location="myLocationGetter"></script>
```


All entries must begin with a `/`, and should **not** include the trailing slash as we account for this automatically.

- Asterisks (`*`) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but **cannot** be in the place of slashes.
- Double asterisks (`**`) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent **any** characters, even slashes.

See below for examples of common page use cases and how they would function.

## 3. Change the snippet on your target pages to the new snippet

You need to place your new Plausible Analytics tracking script code, which you obtained in the previous step, into the `<head>` section of your site. Place the tracking script within the `<head> … </head>` tags. 

If you are using the `data-location` option, you should only change the script in pages where you must define a custom URL.

If you are using the `data-get-location` option, where you should change the script will depend on your implementation.

This is the only tracking script you need. You don't need to keep the default script. Your stats will keep tracking without interruption and you will not lose any of your old data.

You do not have to use the `custom-location` script type exclusively. You can chain various script types, for example:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.hash.custom-location.outbound-links.js" data-get-location="myLocationGetter"></script>
```

The example above includes both [outbound link clicks tracking](outbound-link-click-tracking.md) and tracking for [hash-based routing pages](hash-based-routing.md) in addition to the `custom-location` script type.

## Return to your website to ensure it works

You can test your custom location by visiting a page for which you specified a custom location, and ensuring pageviews events show up under the provided custom URL in your Plausible dashboard.
