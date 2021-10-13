---
title: Troubleshoot your integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

After you've added the Plausible script to your website, it's time to verify that the integration is working.

In your Plausible account, click on your site domain name. You should see a blinking green dot which indicates that we’re listening for incoming page views in real-time. You can visit your site and the dashboard will update instantly with your visit.

<img alt="Listening for incoming page views" src={useBaseUrl('img/waiting-for-pageview.png')} />

Once the first page view comes through, you'll be automatically taken to the stats dashboard. There are no delays in the data. The dashboard goes live and displays the data as soon as the first visitor is counted.

If you didn't see the green blinking dot, there's nothing to worry about. It just means that someone visited your site already since you installed the Plausible Analytics script.

If you see the dashboard with graphs and numbers, it means everything is working! Congrats! Plausible Analytics is now tracking your website statistics while preserving the privacy of your visitors.

## Keep seeing a blinking green dot?

Do you keep seeing a blinking green dot screen despite having visitors on your site? Please verify if our script is installed correctly.

You can load your website, open the browser inspector (press F12 on Firefox or Chrome), and ensure that the Plausible Analytics script is loading in the "Network" tab.

<img alt="Ensure that the Plausible Analytics script is loading in the 'Network' tab" src={useBaseUrl('img/dev-tools-troubleshoot.png')} />

Alternatively, you can verify this by viewing the HTML of your site in your browser. Visit your site, right-click anywhere on the page and choose "**View Page Source**". Then press `cmd+f` on a Mac or `ctrl+f` on Linux and Windows to search. Type `plausible` to search for the Plausible Analytics script.

### Is Plausible script not installed on your site?

You should see the Plausible Analytics tracking script in the "Network" tab or in the source code of your website. If you cannot see the script, please double check if you've inserted it correctly. Installing Plausible on a site can be a slightly different process depending on what tools you're using.

We've put together several integration guides that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also community integrations and plugins for several frameworks such as Hugo and GatsbyJS. These can help you set up and start counting your site visitors in no time.

Here's [the full list of all integrations and guides](integration-guides.md).

### Plausible script is on your site but still seeing the green blinking dot and no stats?

* Please ensure that the script you use is exactly the same script as listed in your Plausible website settings. You can find your JavaScript snippet by [logging into your Plausible account](https://plausible.io/sites). Here you'll find the list of sites you've added to Plausible. Hover over your site name and click on the "**Settings**" icon on the right hand side of the domain name you'd like to get the snippet for. Then scroll down to the "**Javascript snippet**" section on the following page.

* Does your site use a Content Security Policy (CSP)? If it does, you need to add plausible.io specifically to the allowed domains.

* Running on localhost? Our script automatically disables itself when running on localhost as the majority of people don't want those stats to be counted. If you do want to track stats on localhost, you can [use our extension](script-extensions.md).

* On WordPress and using WP Rocket plugin? It may affect our script. We recommend you use our official WordPress plugin to avoid these issues or to manually whitelist our script in WP Rocket settings. [Learn more here](https://plausible.io/wordpress-analytics-plugin#troubleshoot-conflict-with-wp-rocket-or-other-performance-optimization-plugins). 

* On Wordpress and using SiteGround Optimizer plugin? Take a look at these instructions for the [SG Optimizer](https://plausible.io/wordpress-analytics-plugin#conflict-with-siteground-optimizer).

* Using cache? Do purge the cache just in case.

* Are you running an AMP page? To track Google AMP pages with Plausible, you need to declare an AMP-analytics object on your AMP pages. [See the instructions here](https://github.com/plausible/analytics/discussions/220#discussioncomment-904022).

* Are you running a browser extension that may be blocking our script? Do disable the extension or whitelist our script within the settings of the extension you are using

## Would you like to exclude your own visits from being tracked?

You can do so by following the instructions [in this guide](excluding.md).

On WordPress? [Our Wordpress plugin](https://plausible.io/wordpress-analytics-plugin) excludes admin visits by default.
