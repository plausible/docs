---
title: How to add the script to your site using Google Tag Manager
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use "**Google Tag Manager**" to add Plausible Analytics tracking code to your website. Here's the process:

* In your Google Tag Manager account, click on "**Add a new tag**"
* Click on the "**Choose a tag type to begin setup**"
* Use the search functionality to search for "**Custom HTML**"
* In the HTML field within the Custom HTML section, paste [your Plausible snippet](plausible-script.md)
* Be careful about extras you enable such as tag firing priority, tag sequencing, consent checks etc as they all may affect when and how our script loads
* Then click to "**Choose a trigger to make this tag fire**"
* Select the "**All Pages**" and filter "**Page View**" as the trigger if you want to count all of your pages
* Give your tag a name
* Click on the "**Save**" button
* Click "**Submit**" to submit your changes
* Then click on the "**Publish**" button

That's it! Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](integration-guides.md).

:::note
You cannot use Google Tag Manager if you have added a subfolder as your site in Plausible. Only naked domain (yoursite.com) or subdomain (subdomain.yoursite.com) will work as the data-domain attribute in our snippet while a subfolder (yoursite.com/subfolder) will not. When using a subfolder as the data-domain, Google Tag Manager strips the subfolder and sends the traffic to yoursite.com instead
:::

## Concerns about using Google Tag Manager

There are a couple of concerns when using Plausible with Google Tag Manager:

### GTM adds extra complexity 

Google Tag Manager adds extra complexity and additional ways things can go wrong. Plausible is very simple and we've made it so it's easy to integrate and start counting visitors to your site. If you follow the above steps, Plausible will work fine even with Google Tag Manager but please do make sure to verify and test the tracking before selecting any other options that GTM gives you access to. 

GTM allows you to select tag firing priority, tag firing options, tag sequencing and so much more. Deviating from the default setup by adding any of the extras may affect the way the Plausible script loads and counts your traffic. Also make sure to check the consent settings area so our script is allowed to fire when it's supposed to. Please do test things in the browser console and ensure that our script is firing as intended when it's live on your site.

### GTM is blocked by many browsers and extensions 

Google Tag Manager script is blocked (or shimmed) by several browsers including Brave, Firefox and [Safari](https://plausible.io/blog/safari-privacy-report) and many browser extensions. This means that any scripts you're using with Google Tag Manager will be blocked too by a certain percentage of your visitors. 

Plausible integrated without GTM or by using [our proxy](/proxy/introduction.md) will be blocked by fewer people which means you will get more accurate stats if you use Plausible without GTM
