---
title: How to check if Plausible is working
---

import useBaseUrl from '@docusaurus/useBaseUrl';

After you've [added the Plausible script to your website](plausible-script.md), it's time to check if Plausible is working. 

You can visit your site and your Plausible dashboard will update instantly with your visit. There are no delays in the data. The dashboard displays the data as soon as your visit is counted.

If you see your visit and the dashboard with graphs and numbers, it means everything is working! Congrats! Plausible is now tracking your website statistics while preserving the privacy of your visitors.

Was your visit not counted? Do you keep seeing a blinking green dot screen? Read further for how you can verify if our script is installed correctly. There are various techniques for how you can do this.

## Check for the Plausible snippet in your source code

A simple way to verify if Plausible is working is to view the source code of your site and look for the Plausible snippet. Here's how:

1. Visit your home page or any other page on your site where Plausible is installed. 
2. View the source code of your site. You can right-click anywhere on your page and click "**View Page Source**" (the wording may be slightly different depending on your web browser). Alternatively, use a keyboard shortcut to view the source code (`Option+Command+u` on a Mac or `ctrl+u` on Linux and Windows).  
3. Press `Command+f` on a Mac or `ctrl+f` on Linux and Windows to search the source code. Type `data-domain` to search for the Plausible snippet. 
4. Do you see our snippet? Ensure that the snippet is correct and that there are no unintended modifications compared to the snippet [we provided you with](plausible-script.md).

If you see our snippet in your source code and it is exactly the same snippet as the one we provided, it means Plausible is installed.

<img alt="Ensure that the Plausible Analytics script is loading by checking the source code" src={useBaseUrl('img/data-domain-plausible-analytics-script.png')} />

## Check for the Plausible script in your browser's developer tools

You can also use your browser's developer tools to look for the Plausible script or any errors related to your Plausible integration.

1. Visit your home page or any other page on your site where Plausible is installed. 
2. Right-click anywhere on your page and click "**Inspect**" (the wording may vary depending on your web browser) to open the developer tools. Alternatively, press the key `F12` on Firefox or Chrome or `Option+Command+c` on Safari.
3. Look into the "**Console**" tab in the developer tools for any errors related to Plausible. If you see an error related to the Plausible script, it means that something's not right with your implementation. We have some troubleshooting options further down this article.
4. Then click on the "**Network**" tab in the developer tools. It will be empty, so you would need to reload your page. After you refresh the page, you will start seeing some data in the "**Network**" tab. You should see the `script.js` script from the Plausible domain `plausible.io` in the list. The Plausible script should display status 200.

<img alt="Ensure that the Plausible Analytics script is loading in the 'Network' tab" src={useBaseUrl('img/network-check-if-plausible-is-working.png')} />

## Is the Plausible script not installed on your site?

You should see the Plausible Analytics tracking script in the "**Network**" tab of developer tools or your website's source code. If you can't see the script, please double check if you've inserted it correctly. Installing Plausible on a site can be a slightly different process depending on what tools you're using.

We've put together several integration guides that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also community integrations and plugins for several frameworks such as Hugo and GatsbyJS. These can help you set up and start counting your site visitors in no time.

Here's [the full list of all integrations and guides](integration-guides.md).

## How to troubleshoot your Plausible integration

Do you see our script on your site but your visits are not being counted? Here's how to troubleshoot that:

* Your browser's developer tools "**Console**" tab may give you some insights through the error code it provides. Make sure to check for any errors in the "**Console**" tab. 

* Please ensure that the script you use is exactly the same script as listed in your Plausible website settings. You can find your JavaScript snippet by [logging into your Plausible account](https://plausible.io/sites). Here you'll find the list of sites you've added to Plausible. Click on the "**Settings**" icon on the right-hand side of the domain name you'd like to get the snippet for. Then scroll down to the "**JavaScript snippet**" section on the following page.

* On WordPress and using WP Rocket, SiteGround Optimizer or other performance optimization plugins? These may affect our script. We recommend you use our official WordPress plugin to avoid these issues or to manually whitelist our script in the settings of the individual performance optimization plugin. [Learn more abour our plugin here](https://plausible.io/wordpress-analytics-plugin). 

* Are you running a browser extension that may be blocking our script such as an adblocker? Do disable the extension or whitelist our script within the settings of the extension you are using.

* Have you integrated Plausible using our official WordPress plugin? It excludes admin visits by default which is why you may not see your own visits being recorded in the dashboard.

* Using caching on your site? Do purge the cache to ensure that you're viewing the latest version of your site.
  
* Does your site use a Content Security Policy (CSP)? If it does, you need to add plausible.io specifically to the allowed domains. [More info here](https://github.com/plausible/docs/issues/20).

* Running on localhost? Our script automatically disables itself when running on localhost as most people don't want those stats to be counted. In the `script.js` script, `window.location.hostname` is used to verify that. If you do want to track stats on localhost, you can [use our extension](script-extensions.md).

* Implemented Plausible using Google Tag Manager? GTM strips the `data-*` attributes by default which can break the tracking. Please follow [our GTM guide](google-tag-manager.md) for instructions on how to integrate Plausible using GTM.

* Are you running an AMP page? To track Google AMP pages with Plausible, you need to declare an AMP-analytics object on your AMP pages. [See the instructions here](https://github.com/plausible/analytics/discussions/220#discussioncomment-904022).

## Would you like to exclude your own visits from being tracked?

You can follow the instructions [in this guide](excluding.md).

On WordPress? [Our WordPress plugin](https://plausible.io/wordpress-analytics-plugin) excludes admin visits by default.
