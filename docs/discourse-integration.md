---
title: How to add the script to your Discourse community
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add Plausible Analytics tracking code to your Discourse community by adding a "**Theme**" component. You need to use [our special hash-based script](hash-based-routing.md) on Discourse forums.

* Go to Admin > Customize > Themes in your Discourse admin to create a new "**Theme**" component.

* Paste your Plausible Analytics hash-based script tag into the `<head>` section.

* Here's what the full script tag will look like (make sure to replace your-domain with the domain you've added to Plausible Analytics):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.hash.js"></script>
```

* If you're using [a proxy](/proxy/introduction.md) for your Plausible account, you can add the `.hash.js` as follows: `https://yourproxylocation.com/js/index.hash.js`.

* After adding your code, click on the "**Save**" button.

Discourse has cross-site protections by default, and to allow Plausible to collect data, you need to add the Plausible URL to the setting called **content security policy script src** 

* Go to Admin > Settings > search for: *content security policy script src*

* Add `plausible.io` or your custom URL (i.e., `yourproxylocation.com`) as an item and click the green checkmark.

Now you can go to your Discourse community and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

Thanks to Justin DiRose from the Discourse team for contributing [these instructions](https://meta.discourse.org/t/add-plausible-analytics-tracking-to-discourse/173310)!
