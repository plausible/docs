---
title: Exclude yourself from the analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics tracks every visitor and pageview to your website. When you're working on your site, you might not want to record your own visits and page views. Or you may want to not count specific pages towards your analytics (e.g. admin pages).

Most web analytics tools do this by excluding certain IP addresses from being counted. However, we do not store the visitors’ IP addresses in our database for privacy reasons as we are a [GDPR compliant web analytics](https://plausible.io/data-policy) tool.

To prevent tracking for specific pages instead of entirely, see [exclude specific pages from the analytics](/excluding-pages).

There are two primary ways of excluding all Plausible traffing in development or similar, using a website and browser specific localStorage tag, or an ad-blocking browser addon.

## Using the Website Specific flag

### Important Note
The following method requires you to use a special version of the Plausible tracking script, if you want to prevent your own statistics without changing your script type, see [using an ad-blocker add-on for your browser](#using-a-ad-blocker-add-on-for-your-browser).

To prevent all Plauible Analytics events on your website for your specific browser, you can set a special `localStorage` flag for your specific website (do keep in mind this is unique for every domain, subdomain and browser, so you'd need to do this for any website you'd want to exclude yourself on).

### Updating your Plausible script

Change your Plausible script snippet `src` attribute from `https://plausible.io/js/plausible.js` to `https://plausible.io/js/plausible.exclusions.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to Plausible):

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.exclusions.js"></script>
```

As usual, you need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Do this for all the websites where you'd like to use page-tracking exclusions. This is the only tracking script you need. You don't need to keep the old script. Your stats will keep tracking without intteruption and you will not lose any of your old data.

**Note**: You do not have to use exclusively the `exclusions` script type, you can chain various script types, for example:

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.hash.exclusions.outgoing-links.js"></script>
```

or any combination of types.

See [outbound link clicks](outbound-link-click-tracking.md) and [hash-based routing](hash-based-routing.md) for more information.

#### If you're serving our script from your custom domain

If you're serving our script [from your domain as a first-party connection](custom-domain.md):

Change your Plausible script snippet `src` attribute from `https://yoursubdomain.yourdomain.com/js/index.js` to `https://yoursubdomain.yourdomain.com/js/index.exclusions.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to Plausible):

```html
<script async defer data-domain="yourdomain.com" src="https://yoursubdomain.yourdomain.com/js/index.exclusions.js"></script>
```

As usual, you need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

### Disable Tracking
To disable counting on your domain, open the web console (Ctrl+Shift+K on Firefox or F12 then click the "Console" tab on most browsers) and run the following command: `localStorage.plausible_ignore=true`.

### Re-enable Tracking
To re-enable counting, you can similarly run `localStorage.plausible_ignore=false` or `delete localStorage.plausible_ignore`.

### Return to your website to ensure it works

You can test your filter by:

* Reloading your website multiple times and making sure that the total page views number in your Plauible Analytics dashboard does not increase. This isn’t very reliable if there are other people visiting your site at the same time.

* Alternatively, after reloading the page, you can check the same browser console. If you enabled the flag correctly, you should see a message saying "Ignoring event due to localStorage flag". You may need to ensure the "Warnings" filter - in the top right in Firefox, and top-center under a dropdown in Chrome - is enabled before this message is visible.

## Using an ad-blocker add-on for your browser
### Install an adblocker add-on to your browser

To block your page views from reaching your Plausible Analytics stats dashboard, start by installing and activating a standard ad-blocking browser extension. This method has been tested with [Adblock Plus](https://adblockplus.org/), [AdBlock](https://getadblock.com/) and [uBlock Origin](https://github.com/gorhill/uBlock/#installation).

Some extensions may automatically opt you out of Plausible tracking as soon as you install them but you can follow these steps to make sure that they do so. For this guide, we’ll work with uBlock Origin and it works on all the major browsers.

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

``` yourdomain.com plausible.io * block ```

Or in case you're serving Plausible Analytics script from your domain as a first party connection, use this:

``` yourdomain.com yoursubdomain.yourdomain.com * block ```

Once you’ve entered the correct rule, click on the "**Save**" button and then click on the "**Commit**" button.

### Return to your website to ensure it works

You can test your filter by:

* Reloading your website multiple times and making sure that the total page views number in your Plauible Analytics dashboard does not increase. This isn’t very reliable if there are other people visiting your site at the same time.

* Alternatively you can load your website, open the browser inspector (press F12 on Firefox), and ensure that the Plausible Analytics script is not loading in the "**Network**" tab.
