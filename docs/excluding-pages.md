---
title: Exclude specific pages from the analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics tracks every visitor and pageview to your website. When you're working on your site, you might not want to record your own visits and page views. Or you may want to not count specific pages towards your analytics (e.g. admin pages).

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
data-exclude="/blog4, /rule/*, /how_it_works, /*/admin, */priv/*"
```

The new snippet would look like this (make sure to change the `data-domain` attribute to the domain you added to Plausible):

```html
<script async defer data-domain="yourdomain.com" src="https://yoursubdomain.yourdomain.com/js/index.exclusions.js" data-exclude="/blog4, /rule/*, /how_it_works, /*/admin, */priv/*"></script>
```

Any pages listed in this format, comma-separated, with asterisks to indicate unspecified regions of the pathname will not be sent to your Plausible dashboard.

Pages listed here account for trailing slashes (as placed by some browsers). Asterisks expand to any stretch of the page name, and can be on either end or in the middle of any entry.

*See below for examples of common page use cases.*

| data-exclude input | Prevents tracking on pages with a URL path of: |
| ------------- | ------------- |
| `/blog4` | `/blog4` and exactly `/blog4` with nothing before or after it |
| `/rule/*` | `/rule/<anything>`, with no limits - for example, both `/rule/1` as well as `/rule/general/2/4`, but not `/rules/4` |
| `/how-to-*` | `/how-to-<anything>` - for example, `/how-to-play` or `/how-to-succeed/4`, but not `/how-to-/blog` |
| `/*/admin` | `/<anything>/admin` - for example, `/sites/2/admin` or `/pages/admin`, but not `/sites/admin/page-2` |
| `/*/priv/*` | `/<anything>/priv/<anything>` - for example, `/admin/priv/sites/2` or `/pages/priv/2`, but not `/admin/private/` |

**Note**: This method currently does not support filtering out specific page [hash](hash-based-routing.md) exclusion, but may in the future.

## Return to your website to ensure it works

You can test your page-specific filter by:

* Visiting a page of your website, and ensuring views for it don't reach your Plausible dashboard.

* Alternatively, after loading a page, you can check the browser console (Ctrl+Shift+K on Firefox or F12 then click the "Console" tab on most browsers). If you've entered your pages correctly and are on a excluded page, you should see a message saying "Ignoring event in exclusion". You may need to ensure the "Warnings" filter - in the top right in Firefox, and top-center under a dropdown in Chrome - is enabled before this message is visible.
