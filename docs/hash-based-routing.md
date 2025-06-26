---
title: Hashed page paths
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your site is using page paths with a `#` in the URL, you can use our "**Hashed page paths**" tracking to see the different pages your visitors have viewed. Here's how to enable it:

## Update your snippet

We display your snippet during the process of adding a new site to your account. You can also see the snippet within the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

Update the snippet to pass the following argument to `plausible.init`:

```javascript
plausible.init({
  hashBasedRouting: true
})
```

Your Plausible tracking snippet should be inserted into [the Header (`<head>`) section of your site](plausible-script.md). Place the tracking script within the `<head> … </head>` tags.

After you change the tracking snippet on your site, all the hash-based page paths will start being tracked and will be displayed in the "**Top Pages**" report of your Plausible Analytics dashboard.
