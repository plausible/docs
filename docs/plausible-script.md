---
title: Add the script to your website
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To integrate your website with Plausible Analytics, you need to be able to update the HTML code of the website you want to track. Paste your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Your Plausible Analytics tracking script code will look something like this (your exact code will be shown on the JavaScript snippet page):

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

<img alt="Plausible Analytics script" src={useBaseUrl('img/add-js-snippet.png')} />

## Where to find your JavaScript snippet

You can find your JavaScript snippet by [logging into your Plausible account](https://plausible.io/sites). Here you'll find the list of websites you've added to Plausible Analytics.

<img alt="Plausible Analytics" src={useBaseUrl('img/list-of-sites.png')} />

Hover over your website name and click on the "**Settings**" icon on the right hand side of the domain name you'd like to get the snippet for. Then scroll down to the "**Javascript snippet**" section on the following page.

<img alt="Your Plausible Analytics tracking script" src={useBaseUrl('img/javascript-snippet.png')} />

## Alternatively you can serve the script from your domain as a first-party connection

We offer a quick and easy way to serve the Plausible Analytics script from your domain name as a first-party connection. See the full instructions on how to setup a custom subdomain and [serve the Plausible Analytics script as a first-party connection](custom-domain.md).

## Check out integration guides for popular site builders and CMSs

Installing Plausible on a site can be a slightly different process depending on what tools you're using. 

We've put together several guides that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also integrations and plugins for several frameworks such as Hugo and GatsbyJS. We also have guides for single-page applications. 

Here's [the full list of all integrations and guides](integration-guides.md). These can help you set up and start counting your site visitors in no time. 

## Can I use the same snippet across my domain and subdomain?

You can use the same Plausible snippet on multiple sites and subdomains. Or you can add them all as individual sites to your Plausible account with their own unique snippets and separate dashboards. Which option to use depends on your preference.

There are two negatives of using the same Plausible snippet on multiple sites and subdomains:

1. You will have one dashboard with all the stats combined. You won't be able to see individual dashboard of the individual site separated from others.

2. If you have pages with identical page paths between the different sites (say `yourdomain.com/best-page/` and `subdomain.yourdomain.com/best-page/`), these identical page paths will be listed under one entry (`/best-page/` in the "**Top Pages**" report with the stats combined into that one entry.

## Can I send stats to multiple dashboards at the same time?

You can send stats to multiple Plausible dashboards by configuring the data-domain as a comma-separated list:

```html
<script async defer data-domain="test1.yourdomain.com,test2.yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

## How to verify if the script is installed on your site

After you've added the Plausible Analytics script to the HTML of your website, you should see the script installed on your site and can verify that the integration is working.

In your [Plausible Analytics account](https://plausible.io/sites), click on your website domain name. You should see a blinking green dot which indicates that we’re listening for incoming page views in real-time. 

There are no delays in stats with Plausible. Everything is live. Once the first page view comes through, you'll be automatically taken to the stats dashboard with graphs and numbers. 

This is an indication that the integration is working, congrats! Plausible Analytics is now tracking your website statistics while preserving the privacy of your visitors.

Have some issues with the integration? Take a look at [our guide to troubleshooting your Plausible Analytics integration](troubleshoot-integration.md).
