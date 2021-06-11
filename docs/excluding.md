---
title: Opt out and exclude yourself from the analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics tracks every visitor to your website. When you're working on your site, you might not want to record your own visits and page views.

Most web analytics tools do this by excluding certain IP addresses from being counted. However, we do not store the visitors’ IP addresses in our database for privacy reasons as we are a [GDPR compliant web analytics](https://plausible.io/data-policy) tool.

To block your page views from your Plausible Analytics stats dashboard, you can use a standard ad-blocking browser extension. Some extensions may automatically opt you out of Plausible tracking as soon as you activate them but you can follow these steps to make sure that they do so. 
 
:::note 
On WordPress? You can use our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin) which excludes views coming from admins by default.
:::

## uBlock Origin

When using [uBlock Origin](https://github.com/gorhill/uBlock/#installation), you can follow these steps to make sure that you exclude yourself from being counted in the stats. 

### Locate the My Rules tab

* Click the "**uBlock Origin**" icon in your browser
* Then click the "**Dashboard**" icon in the lower-right corner to open the uBlock Origin dashboard
* Tick the "**I am an advanced user**" box

<img alt="The uBlock Origin dashboard" src={useBaseUrl('img/ublock-origin-dashboard.png')} />

* Select the "**My rules**" tab in the top navigation

<img alt="My Rules tab in the uBlock Origin dashboard" src={useBaseUrl('img/ublock-origin-my-rules.png')} />

### Block the Plausible Analytics script on your domain

<img alt="Add a new rule the uBlock Origin dashboard" src={useBaseUrl('img/ublock-origin-temporary-rules.png')} />

In the "**Temporary rules**" box on the right-hand side of the page insert the following rule. Remember to change `yourdomain.com` with the domain name where you installed Plausible Analytics.

```html 
yourdomain.com plausible.io * block 
```

Or in case you're proxying our script, use this. Remember to change `yourproxy.com` with location where you're serving the Plausible script from and `yourdomain.com` with the domain name where you installed Plausible Analytics.

```html
yourdomain.com yourproxy.com * block 
```

Once you’ve entered the correct rule, click on the "**Save**" button and then click on the "**Commit**" button.

## Adblock Plus and AdGuard

When using [Adblock Plus](https://adblockplus.org/) or [Adguard](https://adguard.com), you can follow these steps to make sure that you exclude yourself from being counted in the stats. 

Go into your Adblock Plus settings and click on "**Advanced**" in the left hand side menu. Scroll down to the "**My Filter List**" section.

Insert the following rule and click on the "**Add**" button. Remember to change `yourdomain.com` with the domain name where you installed Plausible Analytics.

```html
||plausible.io^$script,domain=yourdomain.com 
```

Or in case you're proxying our script, use this. Remember to change `yourproxy.com` with location where you're serving the Plausible script from and `yourdomain.com` with the domain name where you installed Plausible Analytics.

```html
||yourproxy.com^$script,domain=yourdomain.com 
```

## Return to your website to ensure it works

You can test your filter by:

* Reloading your website multiple times and making sure that the total page views number in your Plauible Analytics dashboard does not increase. This isn’t very reliable if there are other people visiting your site at the same time.

* Alternatively you can load your website, open the browser inspector (press F12 in Firefox or Chrome), and ensure that the Plausible Analytics script is not loading in the "**Network**" tab.

* Your adblocker will also show you the number of domains and/or scripts they block when you visit the individual website.

:::note
Do you want a different way of excluding your visits or do you want to make it easy for your team to exclude themselves from being counted? You can allow them to set a special `localStorage` flag in the browser. [Here's how](excluding-localstorage.md).
:::
