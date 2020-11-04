---
title: Outbound link click tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Outbound link click tracking" src={useBaseUrl('img/outbound-link-click-tracking.jpeg')} />

Outbound link click tracking is important for many site owners and Plausible helps you automate this process. With our "**Outbound Link Click Tracking**" you can:

* See which external URLs are clicked the most
* See on which pages does the particular outbound link get the clicks
* Filter the dashboard by external URL to see what type of visitors click the most (referral source, country, device, browser, OS)

"**Outbound Link Click Tracking**" is an enhanced measurement and not included in our default script. This is because we want to keep the default script as simple and lightweight as possible. Additional enhanced measurement you can choose to add depending on your needs.

If you want to track external link clicks, it is simple to do so. Here's what you need to do:

## How to enable outbound link click tracking

Change your Plausible script snippet `src` attribute from `https://plausible.io/js/plausible.js` to `https://plausible.io/js/index.outbound-links.js`

The new snippet will look like this:

```html
<script async defer data-domain=”yourdomain.com” src=”https://plausible.io/js/index.outbound-links.js”></script>
```

As usual, you need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Do this for all the websites where you'd like to enable outbound link click tracking. This is the only tracking script you need. You don't need to keep the old script.

## If you're serving our script from your custom domain

If you're serving our script [from your domain as a first-party connection](custom-domain.md):

Change your Plausible script snippet `src` attribute from `https://yoursubdomain.yourdomain.com/js/index.js` to `https://yoursubdomain.yourdomain.com/js/index.outbound-links.js`

The new snippet will look like this:

```html
<script async defer data-domain=”yourdomain.com” src=”https://yoursubdomain.yourdomain.com/js/index.js”></script>
```

As usual, you need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Do this for all the websites where you'd like to enable outbound link click tracking. This is the only tracking script you need. You don't need to keep the old script.

## See all the outbound link clicks in your dashboard

After you've added the new snippet to the HTML of your website, all the external link clicks will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see "**Outbound Link: Click**" goal as soon as the first external link click has been tracked.

Click on "**Outbound Link: Click**" to see the full list of all clicks on all external links and have your dashboard filtered by external clicks only. You can see the number of total external link clicks, the number of unique external link clicks and the conversion rate too. You can see the top referral sources that lead to clicks, you can see the top pages that drive the clicks, you can see the countries that click on external links and same for devices (screen size, browser, OS). 

Click on a particular external URL to filter the dashboard by those clicks only and get the full overview of that specific URL.
