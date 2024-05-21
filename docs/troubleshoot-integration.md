---
title: How to check if Plausible Analytics is installed correctly 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

After you've [added the Plausible snippet to your site](plausible-script.md), the dashboard will start displaying the stats in real-time as soon as the first visit is counted. There are no delays with data in Plausible.

If you see the dashboard with graphs and numbers, it means everything is working. Congrats! Plausible is now tracking your website statistics while preserving the privacy of your visitors.

Do you keep seeing a blinking green dot screen instead of the dashboard? The blinking green dot indicates that we’re listening for incoming visits in real-time but haven't recorded any yet. 

Our testing tool will launch automatically from the blinking green dot screen to send test traffic to your site. This test traffic won't be recorded in the dashboard but you'll see a status message indicating whether Plausible Analytics has been installed correctly.

Did our testing tool detect an issue with your integration? See how to troubleshoot the most common issues below.

## How to troubleshoot your Plausible integration

* **Didn't add the Plausible snippet?** We've put together [many integration guides](integration-guides.md) that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also community integrations and plugins for several frameworks such as Hugo and GatsbyJS. These can help you set up and start counting your site visitors in no time.

* **Running a browser extension that may be blocking our script**? Do disable extensions such as adblockers or whitelist our script within the settings of the extension you are using.

* **Using caching on your site**? Do purge the cache to ensure that you're viewing the latest version of your site.

* **Is the snippet correct?** View the source code of your site. You can right-click anywhere on your page and click "View Page Source" (the wording may be slightly different depending on your web browser). Then press Command+f on a Mac or ctrl+f on Linux and Windows to search. Type "**data-domain**" to search for the Plausible snippet. Does the snippet look as expected? Is the data-domain attribute within the snippet an exact match to the site as you've added it to your Plausible account?

* **Implemented Plausible using Google Tag Manager?** GTM strips the `data-*` attributes by default which can break the tracking. Please follow [our GTM guide](google-tag-manager.md) for instructions on how to integrate Plausible using GTM.

* **Check for errors in your browser's developer tools**. Your browser's developer tools may give you some insights through the error code it provides. Make sure to check for any errors in the "**Console**" tab. To do so, right-click anywhere on your page and click "Inspect" (the wording may vary depending on your web browser) to open the developer tools. Alternatively, press the key F12 on Firefox or Chrome or Option+Command+i on Safari.

* **Does your site use a Content Security Policy (CSP)**? If it does, you need to add plausible.io specifically to the allowed domains. [More info here](https://github.com/plausible/docs/issues/20).

* **Running on localhost**? Our script automatically disables itself when running on localhost as most people don't want those stats to be counted. In the `script.js` script, `window.location.hostname` is used to verify that. If you do want to track stats on localhost, you can [use our extension](script-extensions.md).
  
* **Are you running an AMP page**? To track Google AMP pages with Plausible, you need to declare an AMP-analytics object on your AMP pages. [See the instructions here](https://github.com/plausible/analytics/discussions/220#discussioncomment-904022).

### WordPress troubleshooting

In addition to the steps above, do check this too:

* **Integrated Plausible using our official WordPress plugin?** It excludes admin visits by default which is why you may not see your own visits being recorded in the dashboard.

* **On WordPress and using WP Rocket, SiteGround Optimizer or other performance optimization plugins**? These may affect our script. We recommend you use our official WordPress plugin to avoid these issues or to manually whitelist our script in the settings of the individual performance optimization plugin. [Learn more abour our plugin here](https://plausible.io/wordpress-analytics-plugin).

## Launch the Plausible testing tool

Have you made any change? You can launch our testing tool at any time from your [site settings](website-settings.md) to verify whether the changes you made has worked.

<details>

<summary>

## How to manually check your integration

</summary>

In some cases, our automated testing tool may not be able to check your site. In those cases, a manual check is needed:

## Check for the Plausible snippet in your source code

A simple way to verify if Plausible is working is to view the source code of your site and look for the Plausible snippet. Here's how:

1. Visit your home page or any other page on your site where Plausible is installed. 
2. View the source code of your site. You can right-click anywhere on your page and click "**View Page Source**" (the wording may be slightly different depending on your web browser). Alternatively, use a keyboard shortcut to view the source code (`Option+Command+u` on a Mac or `ctrl+u` on Linux and Windows).  
3. Press `Command+f` on a Mac or `ctrl+f` on Linux and Windows to search the source code. Type `data-domain` to search for the Plausible snippet. 
4. Do you see our snippet? Ensure that the snippet is correct and that there are no unintended modifications compared to the snippet we provided you with.

If you see our snippet in your source code and it is exactly the same snippet as the one we provided, it means Plausible is installed.

<img alt="Ensure that the Plausible Analytics script is loading by checking the source code" src={useBaseUrl('img/data-domain-plausible-analytics-script.png')} />

## Check for the Plausible script in your browser's developer tools

You can also use your browser's developer tools to look for the Plausible script or any errors related to your Plausible integration.

1. Visit your home page or any other page on your site where Plausible is installed. 
2. Right-click anywhere on your page and click "**Inspect**" (the wording may vary depending on your web browser) to open the developer tools. Alternatively, press the key `F12` on Firefox or Chrome or `Option+Command+i` on Safari.
3. Look into the "**Console**" tab in the developer tools for any errors related to Plausible. If you see an error related to the Plausible script, it means that something's not right with your implementation. We have some troubleshooting options further down this article.
4. Then click on the "**Network**" tab in the developer tools. It will be empty, so you would need to reload your page. After you refresh the page, you will start seeing some data in the "**Network**" tab. You should see the `script.js` script from the Plausible domain `plausible.io` in the list. The Plausible script should display status 200.

<img alt="Ensure that the Plausible Analytics script is loading in the 'Network' tab" src={useBaseUrl('img/network-check-if-plausible-is-working.png')} />

</details>

## Need further help with your integration?

Do [contact us](https://plausible.io/contact). We're here to help.
