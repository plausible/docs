---
title: Exclude specific pages from being tracked
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics tracks every page you install the snippet on. If you don't want Plausible to track specific pages, don't include the snippet on those pages.

Alternatively, you can also manually exclude specific pages from being tracked. When excluding pages manually, the exclusion means that pageviews on the excluded page won't be counted any more from the moment of exclusion. The historical stats will be kept and will stay the same.

Outbound link clicks and other custom events on the excluded page will still track like normal. Only the pageviews will be excluded.

Here's how to exclude pages manually.

## 1. You'll need to use a different Plausible script snippet

To manually exclude specific pages from being tracked, you need to change your Plausible script snippet `src` attribute from `https://plausible.io/js/script.js` to `https://plausible.io/js/script.exclusions.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.exclusions.js"></script>
```

## 2. Add the pages you'd like to exclude or include

The page-specific exclusions rely on two script options: `data-exclude` and `data-include`. To exclude certain pages from being tracked, use the `data-exclude` attribute as follows:

```
data-exclude="/blog4, /rule/*, /more-paths-here"
```

To exclude **everything except** for some specific pages, use the `data-include` attribute in the exact same way, specifying the only pages you want to track:

```
data-include="/en*, /es*"
```

You can also use a combination of `data-include` and `data-exclude` options. Do note that when using the two options together, any page path that matches both the exclusion and inclusion rule, is **excluded** from being tracked. For example, the following combination won't track pages `/en/user/*` (even though they match the inclusion rule).

```
data-include="/en*" data-exclude="/en/user/*"
```

Any pages listed in this format should be **comma-separated**, with asterisks to indicate unspecified regions of the pathname. All entries must begin with a `/`, and should **not** include the trailing slash as we account for this automatically.

## 3. Change the snippet on your site to the new snippet

The new snippet would look like this (make sure to change the `data-domain` attribute to the domain you added to your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.exclusions.js" data-exclude="/blog4, /rule/*, /more-paths-here"></script>
```

You can also use `data-include` instead of `data-exclude`, and using both options together, the snippet would look like this:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.exclusions.js" data-include="/en*" data-exclude="/en/user/*"></script>
```

You need to place your new Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags. Do this for all the websites where you'd like to use page-tracking exclusions.

This is the only tracking script you need. You don't need to keep the default script. Your stats will keep tracking without interruption and you won't lose any of your old data.

You don't have to use the `exclusions` script type exclusively. You can chain various script types, for example:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.hash.exclusions.outbound-links.js" data-include="/en*"></script>
```

The example above includes both [outbound link clicks tracking](outbound-link-click-tracking.md) and tracking for [hash-based routing pages](hash-based-routing.md) in addition to the `exclusions` script type.

:::note
If you are [tracking custom events](goal-conversions.md) on pages excluded with this method, the URLs of those pages will keep showing in your dashboard. You can override and anonymize the URLs reported through custom events by using [our manual script extension](custom-locations.md).
:::

This exclusion method currently does not support filtering out specific page [hashes](hash-based-routing.md), but may in the future.

## Return to your website to ensure it works

You can test your page-specific exclusions by:

* Visiting a page on your website that you excluded from tracking and ensuring views for it don't show in your Plausible dashboard.

* Alternatively, after loading a page, you can check the browser console (press F12 on Firefox or Chrome, or `Option+Command+i` on Safari and then click the "Console" tab). If you've excluded your pages and are browsing on the excluded page, you should see a message saying "Ignoring event in exclusion". You may need to ensure the "Warnings" filter (in the top right in Firefox and top-center under a dropdown in Chrome) is enabled before this message is visible.
