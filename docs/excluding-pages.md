---
title: Exclude specific pages from being tracked
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics tracks every page you install the snippet on. If you don't want Plausible to track specific pages, do not include the snippet on those pages.

Alternatively, you can also manually exclude specific pages from being tracked. When excluding pages manually, the exclusion means that pageviews on the excluded page won't be counted any more from the moment of exclusion. The historical stats will be kept and will stay the same.

Outbound link clicks and other custom events on the excluded page will still track like normal. Only the pageviews will be excluded.

Here's how to exclude pages manually.

## 1. You'll need to use a different Plausible script snippet

To manually exclude specific pages from being tracked, you need to change your Plausible script snippet `src` attribute from `https://plausible.io/js/plausible.js` to `https://plausible.io/js/plausible.exclusions.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.exclusions.js"></script>
```

## 2. Add the pages you'd like to exclude from being tracked

The page-specific exclusions rely on a script option `data-exclude`. You add page exclusions very similarly to `data-domain`. The format for this field is as follows:

```
data-exclude="/blog4, /rule/*, /how-to-*, /*/admin, /*/priv/*, /more-paths-here"
```

Any pages listed in this format, **comma-separated**, with asterisks to indicate unspecified regions of the pathname, will **not** be counted in your Plausible dashboard.

All entries must begin with a `/`, and should **not** include the trailing slash as we account for this automatically.

- Asterisks (`*`) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but **cannot** be in the place of slashes.
- Double asterisks (`**`) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent **any** characters, even slashes.

See below for examples of common page use cases and how they would function.

## 3. Change the snippet on your site to the new snippet

The new snippet would look like this (make sure to change the `data-domain` attribute to the domain you added to your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.exclusions.js" data-exclude="/blog4, /rule/*, /how-to-*, /*/admin, /*/priv/*, /more-paths-here"></script>
```

You need to place your new Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags. Do this for all the websites where you'd like to use page-tracking exclusions.

This is the only tracking script you need. You don't need to keep the default script. Your stats will keep tracking without interruption and you will not lose any of your old data.

You do not have to use the `exclusions` script type exclusively. You can chain various script types, for example:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.hash.exclusions.outbound-links.js" data-exclude="/blog4, /rule/*, /how-to-*, /*/admin, /*/priv/*, /more-paths-here"></script>
```

The example above includes both [outbound link clicks tracking](outbound-link-click-tracking.md) and tracking for [hash-based routing pages](hash-based-routing.md) in addition to the `exclusions` script type.

## Common use cases and examples

| data-exclude input | Prevents tracking on pages with a URL path of: |
| ------------- | ------------- |
| `/blog4` | `/blog4` and exactly `/blog4` with nothing before or after it, so not `/blog45` nor `/blog4/new` nor `/blog` |
| `/rule/*` | `/rule/<anything>`, with `<anything>` being any set of characters (length >=0), but not a forward slash - for example, both `/rule/1` as well as `/rule/general-rule-14`, but not `/rule/4/details` nor `/rules` |
| `/how-to-*` | `/how-to-<anything>` - for example, `/how-to-play` or `/how-to-succeed`, but not `how-to-/blog` |
| `/*/admin` | `/<anything>/admin` - for example, `/sites/admin`, but not `/sites/admin/page-2` nor `/sites/2/admin` nor `/admin` |
| `/*/priv/*` | `/<anything>/priv/<anything>` - for example, `/admin/priv/sites`, but not `/priv` nor `/priv/page` nor `/admin/priv` |
| `/rule/*/*` | `/rule/<anything>/<anything>` - for example, `/rule/4/new/` or `/rule/10/edit`, but not `/rule` nor `/rule/10/new/save` |
| `/wp/**` | `/wp<anything, even slashes>` - for example, `/wp/assets/subdirectory/another/image.png` or `/wp/admin`, and everything in between, but not `/page/wp`

This exclusion method currently does not support filtering out specific page [hashes](hash-based-routing.md), but may in the future.

## Return to your website to ensure it works

You can test your page-specific exclusions by:

* Visiting a page on your website that you excluded from tracking and ensuring views for it don't show in your Plausible dashboard.

* Alternatively, after loading a page, you can check the browser console (press F12 on Firefox or Chrome and then click the "Console" tab). If you've excluded your pages and are browsing on the excluded page, you should see a message saying "Ignoring event in exclusion". You may need to ensure the "Warnings" filter (in the top right in Firefox and top-center under a dropdown in Chrome) is enabled before this message is visible.
