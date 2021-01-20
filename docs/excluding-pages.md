---
title: Exclude specific pages from the analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics tracks every visitor and pageview to your website. At times, you may want to not count specific pages towards your analytics (e.g. admin pages).

To prevent tracking for your browser for a specific website entirely, see [exclude yourself from the analytics](/excluding).

## Updating your Plausible script

Change your Plausible script snippet `src` attribute from `https://plausible.io/js/plausible.js` to `https://plausible.io/js/plausible.exclusions.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to Plausible):

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.exclusions.js"></script>
```

As usual, you need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Do this for all the websites where you'd like to use page-tracking exclusions. This is the only tracking script you need. You don't need to keep the old script. Your stats will keep tracking without intteruption and you will not lose any of your old data.

**Note**: You do not have to use exclusively the `exclusions` script type, you can chain various script types, for example:

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.hash.exclusions.outgoing-links.js"></script>
```

or any combination of types.

See [outbound link clicks](outbound-link-click-tracking.md) and [hash-based routing](hash-based-routing.md) for more information.

### If you're serving our script from your custom domain

If you're serving our script [from your domain as a first-party connection](custom-domain.md):

Change your Plausible script snippet `src` attribute from `https://yoursubdomain.yourdomain.com/js/index.js` to `https://yoursubdomain.yourdomain.com/js/index.exclusions.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to Plausible):

```html
<script async defer data-domain="yourdomain.com" src="https://yoursubdomain.yourdomain.com/js/index.exclusions.js"></script>
```

As usual, you need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

## Adding the page exclusions

The page-specific exclusions rely on a script option `data-exclusions`. You add page exclusions in this very similarly to `data-domain`. The format for this field is as follows:

```
data-exclude="/blog4, /rule/*, /how-to-*, /*/admin, /*/priv/*, /more-paths-here"
```

The new snippet would look like this (make sure to change the `data-domain` attribute to the domain you added to Plausible, and `yoursubdomain.yourdomain` to your custom domain):

```html
<script async defer data-domain="yourdomain.com" src="https://yoursubdomain.yourdomain.com/js/index.exclusions.js" data-exclude="/blog4, /rule/*, /how-to-*, /*/admin, /*/priv/*, /more-paths-here"></script>
```

Any pages listed in this format, **comma-separated**, with asterisks to indicate unspecified regions of the pathname will **not** be sent to your Plausible dashboard.

**Note**: All entries must begin with a `/`, and should **not** include the trailing slash as automatically placed by some browsers, as we account for this automatically.

- Asterisks (`*`) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but **cannot** be in the place of slashes.
- Double asterisks (`**`) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent **any** characters, even slashes.

*See below for examples of common page use cases and how they would function.*

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

**Note**: This exclusion method currently does not support filtering out specific page [hashes](hash-based-routing.md), but may in the future.

## Return to your website to ensure it works

You can test your page-specific filter by:

* Visiting a page of your website, and ensuring views for it don't reach your Plausible dashboard.

* Alternatively, after loading a page, you can check the browser console (Ctrl+Shift+K on Firefox or F12 then click the "Console" tab on most browsers). If you've entered your pages correctly and are on a excluded page, you should see a message saying "Ignoring event in exclusion". You may need to ensure the "Warnings" filter - in the top right in Firefox, and top-center under a dropdown in Chrome - is enabled before this message is visible.
