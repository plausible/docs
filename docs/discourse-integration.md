---
title: How to add the script to your Discourse community
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add Plausible Analytics tracking code to your Discourse community by adding a component. Since Discourse uses hash-based routing for the post threads, you should to use [our special hash-based script](hash-based-routing.md) on Discourse forums.  You may also want to add some of the other options like file-downloads.

* Go to Admin > Customize > Appearance > Components in your Discourse admin to create a new component.

* Click 'Install' and then 'Create New +'.  Give it a friendly name like 'Plausible Analytics', make sure the Type shows 'Component', and click 'Create'.

* For the 'Include Component...' section, click the 'Add All Themes' button to ensure that this tracker is enabled across all themes.  However, you may have themes that you don't want to track (maybe a special theme for Admins) in which case you can use the drop-down to select the specfic themes where you want the Plausible script added.

* Then click on the 'Edit CSS/HTML' button.  Make sure you're in the 'Common' section (not 'Desktop' or 'Mobile').  Go to the `<head>` section (not the 'header' but the 'head') and paste in your Plausible Analytics script tag.

* Here's how the full script tag should look inside the `head` section:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.hash.js"></script>
```

* Note: Replace "yourdomain.com" with the site you're tracking in Plausible.  If your Discourse is on a sub-domain of your main site, you could track them together by entering your main site here.  Alternately, you could create a separate site in Plausible for yout Discourse to keep them separate.  See [here](https://plausible.io/docs/subdomain-hostname-filter) for a deeper discussion.

* Note: If you're using [a proxy](/proxy/introduction.md) for your Plausible account, you can add the `.hash.js` as follows: `https://yourproxylocation.com/js/index.hash.js`.

* After adding your code, click on the "**Save**" button at the bottom, and the "**<**" button in the top left to get back to the component screen.  If it saved properly, you should see the `head` section called out as a 'custom section' under the CSS/HTML header.   

Discourse will automatically add a nonce to the script to satisfy the Content Security Policy headers, so no further action is necessary for that.

Now you can go to your Discourse community and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

Thanks to Justin DiRose from the Discourse team for contributing [these instructions](https://meta.discourse.org/t/add-plausible-analytics-tracking-to-discourse/173310)!
