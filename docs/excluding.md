---
title: Exclude yourself from your analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics tracks every visitor to your website. When you're working on your site, you might not want to record your own visits and page views.

Most web analytics tools do this by excluding certain IP addresses from being counted. However, we do not store the visitors’ IP addresses in our database for privacy reasons as we are a [GDPR compliant web analytics](https://plausible.io/data-policy) tool.

Instead, you can use any standard ad or script-blocking browser extension to filter out your traffic. Here’s how.

## Install an adblocker add-on to your browser

To block your page views from your Plausible Analytics stats dashboard, start by installing and activating a standard ad-blocking browser extension. This method has been tested with [Adblock Plus](https://adblockplus.org/), [AdBlock](https://getadblock.com/) and [uBlock Origin](https://github.com/gorhill/uBlock/#installation). 

For this guide, we’ll work with uBlock Origin and it works on all the major browsers.

## Locate the My Rules tab

* Click the "**uBlock Origin**" icon in your browser
* Then click the "**Dashboard**" icon in the lower-right corner to open the uBlock Origin dashboard

<img alt="The uBlock Origin dashboard" src={useBaseUrl('img/ublock-origin-dashboard.png')} />

* Select the "**My rules**" tab in the top navigation

<img alt="My Rules tab in the uBlock Origin dashboard" src={useBaseUrl('img/ublock-origin-my-rules.png')} />

## Block the Plausible Analytics script on your domain

<img alt="Add a new rule the uBlock Origin dashboard" src={useBaseUrl('img/ublock-origin-temporary-rules.png')} />

In the "**Temporary rules**" box on the right-hand side of the page insert the following rule. Remember to change `yourdomain.com` with the domain name where you installed Plausible Analytics.

``` yourdomain.com plausible.io * block ```

Once you’ve entered the correct rule, click on the "**Save**" button and then click on the "**Commit**" button.

## Return to your website to ensure it works

You can test your filter by:

* Reloading your website multiple times and making sure that the total page views number in your Plauible Analytics dashboard does not increase. This isn’t very reliable if there are other people visiting your site at the same time.

* Alternatively you can load your website, open the browser inspector (press F12 on Firefox), and ensure that the Plausible Analytics script is not loading in the "**Network**" tab.
