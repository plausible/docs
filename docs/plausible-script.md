---
title: Add the script to your website
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Paste your Plausible Analytics script into your website header section

To integrate your website with Plausible Analytics, you need to be able to update the HTML code of the website you want to track. Paste your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Your Plausible Analytics tracking script code will look something like this (your exact code will be shown on the JavaScript snippet page):

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

<img alt="Plausible Analytics script" src={useBaseUrl('img/add-js-snippet.png')} />

### Where to find your JavaScript snippet

You can find your JavaScript snippet by [logging into your Plausible account](https://plausible.io/sites). Here you'll find the list of websites you've added to Plausible Analytics.

<img alt="Plausible Analytics" src={useBaseUrl('img/list-of-sites.png')} />

Hover over your website name and click on the "**Settings**" icon on the right hand side of the domain name you'd like to get the snippet for. Then scroll down to the "**Javascript snippet**" section on the following page.

<img alt="Your Plausible Analytics tracking script" src={useBaseUrl('img/javascript-snippet.png')} />

### Alternatively you can serve the script from your domain as a first-party connection

We offer a quick and easy way to serve the Plausible Analytics script from your domain name as a first-party connection. See the full instructions on how to setup a custom subdomain and [serve the Plausible Analytics script as a first-party connection](custom-domain.md).

### Check out integration guides for popular site builders and CMSs

Installing Plausible on a site can be a slightly different process depending on what tools you're using. 

We've put together several integration guides that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also community integrations and plugins for several frameworks such as Hugo and GatsbyJS. These can help you set up and start counting your site visitors in no time. 

Here's [the full list of all integrations and guides](integration-guides.md).

### Can I use the same snippet across my domain and subdomain?

You can use the same Plausible snippet on multiple sites and subdomains. Or you can add them all as individual sites to your Plausible account with their own unique snippets and separate dashboards. Which option to use depends on your preference.

There are two negatives of using the same Plausible snippet on multiple sites and subdomains:

1. You will have one dashboard with all the stats combined. You won't be able to see individual dashboard of the individual site separated from others.

2. If you have pages with identical page paths between the different sites (say `yourdomain.com/best-page/` and `subdomain.yourdomain.com/best-page/`), these identical page paths will be listed under one entry (`/best-page/` in the "**Top Pages**" report with the stats combined into that one entry.

## Verify if the script is installed on your site

After you've added the Plausible Analytics script to the HTML of your website, you should see the script installed on your site. 

You can load your website, open the browser inspector (press F12 on Firefox), and ensure that the Plausible Analytics script is loading in the "Network" tab.

Alternatively, you can verify this by viewing the HTML of your site in your favorite browser. In a browser such as Firefox, visit your website, right-click anywhere on the page and choose "**View Page Source**". Then press `cmd+f` on a Mac or `ctrl+f` on Linux and Windows to search. Type `plausible` to search for the Plausible Analytics script.

You should see the Plausible Analytics tracking script in the source code of your website. If you cannot see the script, please double check if you've inserted it correctly.

## Verify that the stats are being tracked

After you've added the script to your website, it's time to verify that the integration is working.

In your [Plausible Analytics account](https://plausible.io/sites), click on your website domain name. You should see a blinking green dot which indicates that we’re listening for incoming page views in real-time.

If you don't see the green blinking dot, there's nothing to worry about. It just means that someone visited your site already since you installed the Plausible Analytics script.

<img alt="Listening for incoming page views" src={useBaseUrl('img/waiting-for-pageview.png')} />

Once the first page view comes through, you'll be automatically taken to the stats dashboard with graphs and numbers. This is an indication that the integration is working, congrats! Plausible Analytics is now tracking your website statistics while preserving the privacy of your visitors.

Contact **hello@plausible.io** if you failed to verify that our script has been installed properly or if you cannot see any stats despite having visitors.

:::note
You're running Plausible on localhost? Our script automatically disables itself when running on localhost as the majority of people don't want those stats to be counted.
:::

:::note
Using CSP? Do not forget to add our domain specifically to your Content Security Policy too.
:::
