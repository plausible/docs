---
title: Opt out and exclude your own visits from the analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics counts every visitor to your website. When you're working on your site, you might not want to record your own visits and page views.

Most web analytics tools do this by excluding certain IP addresses from being counted. However, we do not store the visitors’ IP addresses in our database for privacy reasons as we are a [GDPR compliant web analytics](https://plausible.io/data-policy) tool.

To prevent counting your own visits from your browser, you can set a special `localStorage` flag for your website (do keep in mind this is unique for every domain, subdomain and browser, so you'd need to do this for any website you'd want to exclude yourself from).

To disable counting on your domain, open the web console (F12 on Firefox and then click the "Console" tab) and run the following command: 

`localStorage.plausible_ignore=true`

### Re-enable counting of your own visits

To re-enable counting, you can run:

`delete localStorage.plausible_ignore`.

### Return to your website to ensure it works

You can test your filter by:

* Reloading your website multiple times and making sure that the total page views number in your Plauible Analytics dashboard does not increase. This isn’t very reliable if there are other people visiting your site at the same time.

* Alternatively, after reloading the page, you can check the same browser console. If you enabled the flag correctly, you should see a message saying "Ignoring Event: localStorage flag". You may need to ensure the "Warnings" filter - in the top right in Firefox, and top-center under a dropdown in Chrome - is enabled before this message is visible.
