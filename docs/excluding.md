---
title: Opt out and exclude your own visits from the analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics counts every visitor to your website. When you're working on your site, you might not want to record your own visits and page views.

Most web analytics tools do this by excluding certain IP addresses from being counted. However, we do not store the visitors’ IP addresses in our database for privacy reasons as we are a [GDPR compliant web analytics](https://plausible.io/data-policy) tool.

To prevent counting your own visits from your browser, you can set a special `localStorage` flag in your browser. Here's how.

## To exclude your own visits from being counted

Visit the website you'd like to exclude your visits from and open the web console in your browser (press F12 on Firefox and then click the "Console" tab). 

Then run the following command:

```html
localStorage.plausible_ignore=true
```

Note that you have to follow this process for every domain and subdomain you'd like to exclude your visits from. You also need to follow the same process for every browser you'd like to exclude your visits from.

## Return to your website to ensure it works

There are two ways you can check to ensure that you have excluded your own visits:

* Reload your website multiple times and make sure that the total page views number in your Plausible Analytics dashboard does not increase. This isn’t very reliable if there are other people visiting your site at the same time.

* Reload your page and open the browser console again. If you have excluded yourself, you should see a message saying "Ignoring Event: localStorage flag". You may need to ensure the "Warnings" filter - in the top right in Firefox, and top-center under a dropdown in Chrome - is enabled before this message is visible.

## To re-enable counting of your own visits

To re-enable counting, visit the website you'd like to enable your visits for and open the web console in your browser (press F12 on Firefox and then click the "Console" tab). 

Then run the following command:

```html
delete localStorage.plausible_ignore
```
