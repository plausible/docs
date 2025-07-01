---
title: Check if Plausible is installed correctly
---

import useBaseUrl from '@docusaurus/useBaseUrl';

After you've [added the Plausible snippet to your site](plausible-script.md), the dashboard will start displaying the stats in real-time as soon as the first visit is counted. There are no delays with data in Plausible.

If you see the dashboard with graphs and numbers, it means everything is working and we've counted your first visitor. Congrats! Plausible is now tracking your website statistics while preserving the privacy of your visitors.

Do you keep seeing a blinking green dot screen instead of the dashboard? The blinking green dot indicates that we’re listening for incoming visits in real-time but haven't recorded any yet.

Our testing tool will launch automatically from the blinking green dot screen to send test traffic to your site. This test traffic won't be recorded in the dashboard but you'll see a status message indicating whether Plausible Analytics has been installed correctly.

<img alt="Integration verification tool" src={useBaseUrl('img/integration-verification-tool.png')} />

Did our testing tool detect an issue with your integration? Or is there something unusual about the data you're seeing? See how to troubleshoot the most common issues below.

## Have you added the Plausible snippet into your site?

We've put together [many integration guides](integration-guides.md) that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also community integrations and plugins for several frameworks such as Hugo and GatsbyJS. These can help you set up and start counting your site visitors in no time.

## Have you cleared the cache of your site?

If you are using caching on your site, the latest version of your site where our snippet is integrated may not be showing to all your visitors yet. Do purge the cache to ensure that you're presenting the latest version of your site to all your visitors.

## Have you implemented Plausible using Google Tag Manager?

GTM strips the `data-*` attributes by default which can break the tracking. Please follow [our GTM guide](google-tag-manager.md) for instructions on how to integrate Plausible using GTM.

## Does your site use a Content Security Policy (CSP)?

If it does, you would need to add our domain name (plausible.io) specifically to the allowed domains list in order for the script to work. [More info here](https://github.com/plausible/docs/issues/20).

## Are you running on localhost?

Our script automatically disables itself when running on localhost as most people don't want those stats to be counted. In the `script.js` script, `window.location.hostname` is used to verify that. If you do want to track stats on localhost, [see configuration guide](script-extensions.md).

## Are you running a Google AMP page?

To track Google AMP pages with Plausible, you need to declare an AMP-analytics object on your AMP pages. [See the instructions here](https://github.com/plausible/analytics/discussions/220#discussioncomment-904022).

## Did you insert multiple Plausible snippets into your site?

This may affect the accuracy of the tracking and can result in the stats being counted twice. Please make sure to only insert one snippet.

## Are you using an older version of our script?

In some cases when you’re using a custom proxy implementation, you may not be using the latest version of our tracking script. This doesn’t necessarily mean that the tracking won’t work but our automated verification tool won’t be able to confirm whether your integration is working correctly. Please update the script you're proxying to the latest version of our script.

If you're using [our WordPress plugin](https://plausible.io/wordpress-analytics-plugin) with the built-in proxy enabled, you'll need to:

1. Disable the proxy
2. Clear your cache
3. Re-enable the proxy
4. Clear your cache again

This ensures the changes are fully applied and the latest version of our script is properly loaded.

## Has some other plugin altered our snippet?

Are you using WP Rocket, SiteGround Optimizer or other performance optimization plugins? Or some type of consent banner plugin that determines which scripts can run when? These plugins may affect our tracking as they try to optimize our script. If you're on WordPress, we recommend you use [our official WordPress plugin](https://plausible.io/wordpress-analytics-plugin) to avoid these issues as we've built-in resolutions to the most common plugin conflicts.

Do you experience an issue even when using our plugin? Do check your integration manually using the steps below to identify which plugin is in question. Then please whitelist our script location and our domain name in the settings of the individual plugin to stop it from altering our snippet.

## Have you placed our script behind the GDPR consent banner?

Are you using Cookiebot or a similar consent management platform? Have you set the Plausible script to load only after the user gives the consent? Our testing tool cannot verify the integration in that case so please do use [our manual verification process instead](#how-to-manually-check-your-integration).

Plausible is built to be privacy-first and compliant with various privacy regulations so do raise this with your legal team as they could provide the green light to not require user consent. See more details in [our data policy](https://plausible.io/data-policy) and in [this legal assessment written by a data protection lawyer](https://plausible.io/blog/legal-assessment-gdpr-eprivacy).

## Is your website on a different URL than the one you added as your site?

Our testing tool visits the exact URL that you added to your Plausible account. For example, if you added `yourdomain.com` as your site, the tool will try to visit `yourdomain.com` directly.

If the URL you added doesn’t work or doesn’t point to your actual website, the tool won’t be able to reach it and can’t verify the integration. In that case, please use [our manual verification process instead](#how-to-manually-check-your-integration).

## Are you blocking our script or using a VPN that blocks us?

Are you blocking our script from your own device? Or perhaps using a VPN that is blocking scripts? If you are running a browser extension or another service that may be blocking our script, your own visits may not be recorded. Do disable extensions such as adblockers or whitelist our script within the settings of the extension you are using to start counting your own visits too.

Using WordPress and integrated Plausible using our official WordPress plugin? Our plugin excludes logged-in admin visits by default which is why you may not see your own visits being recorded in the dashboard.

If the verification tool has confirmed that the tracking is working fine, then you have nothing to worry about. If you'd like to track those who use adblockers too, take a look at [our proxy solution](/proxy/introduction.md).

## I don't see my own referral source

All referral sources are counted only when they start a new session on your site. This is why you don't see all your own referral sources if you for instance click to test several different [UTM tagged links](top-referrers.md) at the same time. Only the first one appears in the "**Top Sources**" report. You would need to start a new session—such as by waiting 30 minutes or using a different device, browser, or IP address, to have the subsequent sources counted too.

The fact that the referral sources are counted only when they start a new session on your site prevents external domains such as a payment gateway that the user is being taken through to show up in the referrers list. No need for you to manually exclude referrers.

## Launch the Plausible testing tool from your site settings

Have you made any changes to your integration? You can launch our testing tool at any time from your [site settings](website-settings.md) to verify whether the changes you made has worked.

You can also use the tools that are built into your browser, such as the [Chrome](https://developer.chrome.com/docs/devtools/open/), [Safari](https://support.apple.com/en-gb/guide/safari/sfri20948/mac) and [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/) developer tools to manually confirm that Plausible is working on your site. See the instructions below.

Do you need further help with your integration? Do [contact us](https://plausible.io/contact). We're here to help.

<details>

<summary>

## How to manually check your integration

</summary>

In some cases, our automated testing tool may not be able to check your site. In those cases, a manual check is needed:

### Check for the Plausible snippet in your source code

A simple way to verify if Plausible is working is to view the source code of your site and look for the Plausible snippet. Here's how:

1. Visit your home page or any other page on your site where Plausible is installed.
2. View the source code of your site. You can right-click anywhere on your page and click "**View Page Source**" (the wording may be slightly different depending on your web browser). Alternatively, use a keyboard shortcut to view the source code (`Option+Command+u` on a Mac or `ctrl+u` on Linux and Windows).
3. Press `Command+f` on a Mac or `ctrl+f` on Linux and Windows to search the source code. Type `plausible.initp` to search for the Plausible snippet.
4. Do you see our snippet? Ensure that the snippet is correct and that there are no unintended modifications compared to the snippet we provided you with.

If you see our snippet in your source code and it is exactly the same snippet as the one we provided, it means Plausible is installed.

<img alt="Ensure that the Plausible Analytics script is loading by checking the source code" src={useBaseUrl('img/data-domain-plausible-analytics-script.png')} />

### Check for the Plausible script in your browser's developer tools

You can also use your browser's developer tools to look for the Plausible script or any errors related to your Plausible integration.

1. Visit your home page or any other page on your site where Plausible is installed.
2. Right-click anywhere on your page and click "**Inspect**" (the wording may vary depending on your web browser) to open the developer tools. Alternatively, press the key `F12` on Firefox or Chrome or `Option+Command+i` on Safari.
3. Look into the "**Console**" tab in the developer tools for any errors related to Plausible. It may give you some insights into what's going on through the error code it provides. If you see an error related to the Plausible script, it means that something's not right with your implementation.
4. Then click on the "**Network**" tab in the developer tools. It will be empty, so you would need to reload your page. After you refresh the page, you will start seeing some data in the "**Network**" tab. You should see the a script from the Plausible domain `plausible.io` in the list, starting with `s-`. The Plausible script should display status 200.

<img alt="Ensure that the Plausible Analytics script is loading in the 'Network' tab" src={useBaseUrl('img/network-check-if-plausible-is-working.png')} />

</details>
