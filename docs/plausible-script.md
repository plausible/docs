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

### Where to find your JavaScript snippet

You can find your JavaScript snippet by [logging into your Plausible account](https://plausible.io/sites). Here you'll find the list of websites you've added to Plausible Analytics.

<img alt="Plausible Analytics" src={useBaseUrl('img/list-of-sites.png')} />

Click on the "**Settings**" button on the right-hand side of the website you'd like to get the snippet for and scroll down to the "**Javascript snippet**" section on the following page.

<img alt="Your Plausible Analytics tracking script" src={useBaseUrl('img/your-javascipt-snippet.png')} />

### You can also use our community integrations

Thanks to the members of our community, there are now Plausible Analytics community integrations and plugins for several frameworks and content management systems such as WordPress. See the [full list](community-integrations.md).

### Alternatively you can serve the script from your domain as a first-party connection

We offer a quick and easy way to serve the Plausible Analytics script from your domain name as a first-party connection. See the full instructions on how to setup a custom subdomain and [serve the Plausible Analytics script as a first-party connection](custom-domain.md).

## Verify if the script is installed on your site

After you've added the Plausible Analytics script to the HTML of your website, you should see the script installed on your site. You can verify this by viewing the HTML of your website in your favorite web browser.

In a web browser such as Firefox, visit your website, right-click anywhere on the page and choose "**View Page Source**". Then press `cmd+f` on a Mac or `ctrl+f` on Linux and Windows to search. Type `plausible` to search for the Plausible Analytics script.

You should see the Plausible Analytics tracking script in the source code of your website. If you cannot see the script, please double check if you've inserted it correctly. Contact **hello@plausible.io** if the problem persists.

<img alt="Your Plausible Analytics tracking script" src={useBaseUrl('img/javascript-snippet.png')} />

## Verify that the stats are being tracked

After you've added the script to your website, it's time to verify that the integration is working.

In your [Plausible Analytics account](https://plausible.io/sites), click on your website domain name. You should see a blinking green dot which indicates that we’re listening for incoming page views in real-time.

<img alt="Listening for incoming page views" src={useBaseUrl('img/waiting-for-pageview.png')} />

Once the first page view comes through, you'll be automatically taken to the stats dashboard. This is an indication that the integration is working, congrats!

If you didn't see the green blinking dot, there's nothing to worry about. It just means that someone visited your site already since you installed the Plausible Analytics script.

:::note
You're running Plausible on localhost? Our script automatically disables itself when running on localhost as the majority of people don't want those stats to be counted.
:::

:::note
Using CSP? Do not forget to add our domain specifically to your Content Security Policy too.
:::

If you see the dashboard with graphs and numbers, it means everything is working! Plausible Analytics is now tracking your website statistics while preserving the privacy of your visitors.
