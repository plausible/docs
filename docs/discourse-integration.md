---
title: How to add the script to your Discourse community
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add Plausible Analytics tracking code to your Discourse community by adding a "**Theme**" component. You need to use [our special hash-based script](hash-based-routing.md) on Discourse forums.

* Go to Admin > Customize > Themes in your Discourse admin to create a new "**Theme**" component.

* Paste your Plausible Analytics hash-based script tag into the `<head>` section.

* Here's what the full script tag will look like (make sure to replace your-domain with the domain you've added to Plausible Analytics):

```html
<script defer data-domain="<your-domain>" src="https://plausible.io/js/plausible.hash.js"></script>
```

* If you're using [a custom domain](custom-domain.md) for your Plausible account, you can add the `.hash.js` as follows: `https://your.custom-domain.com/js/index.hash.js`

* After adding your code, click on the "**Save**" button.

Now you can go to your Discourse community and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

Thanks to Justin DiRose from the Discourse team for contributing [these instructions](https://meta.discourse.org/t/add-plausible-analytics-tracking-to-discourse/173310)!
