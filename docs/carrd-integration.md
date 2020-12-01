---
title: How to add the script to your Carrd site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add Plausible Analytics tracking code to your Carrd website by adding an "**Embed**" component. Carrd is a one-page website builder that doesn's support normal navigation. You need to use [our special hash-based script](hash-based-routing.md) on Carrd sites.

* Go to the editor of your Carrd website and add an "**Embed**" component.
  
* Change the type to "**Code**" and give it any name that you want. 

* Paste your Plausible Analytics hash-based script tag into the "**Code**" field.

* Here's what the full script tag will look like (make sure to replace your-domain with the domain you've added to Plausible Analytics):

```html
<script async defer data-domain="<your-domain>" src="https://plausible.io/js/plausible.hash.js"></script>
```

* If you're using [a custom domain](custom-domain.md) for your Plausible account, you can add the `.hash.js` as follows: `https://your.custom-domain.com/js/index.hash.js`

* After adding your code, click on the "**Save**" button.

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](plausible-script.md#verify-if-the-script-is-installed-on-your-site).

Thanks to Marius for contributing [these instructions](https://medium.com/@rasmus1610/how-to-integrate-plausible-io-web-analytics-with-your-carrd-co-website-b9d4a05f87bf)!
