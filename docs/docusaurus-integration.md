---
title: How to add the script to your Docusaurus site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are several simple ways to integrate Plausible Analytics with your Docusaurus documentation site. Let's take a look at them:

## Option 1. Inject the script through the docusaurus.config.js

Add this Plausible Analytics snippet into your "**docusaurus.config.js**" file (make sure to change "**yourdomain.com**" to the domain name that you added to your Plausible account).

This is how [we've integrated Plausible](https://github.com/plausible/docs/commit/08d804dea840f10c49e4118b5ddd5fe0bc722fd8) into our very own Docusaurus-powered documentation:

```
module.exports = {
  scripts: [{src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'yourdomain.com'}],
};
```

## Option 2: Plausible Analytics community plugin

"**[A Docusaurus plugin for Plausible Analytics](https://github.com/infracost/docusaurus-plugin-plausible)**". Built and maintained by Alistair Scott and the [Abar Team](https://www.abar.tech/).

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).
