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

That's it! Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

:::note
Google Tag Manager strips all `data-` attributes from custom scripts. This means data-domain has no effect through the Google Tag Manager.
:::

### Want to track a subfolder or report to multiple dashboards with Google Tag Manager?

There is a workaround you can use to still define your custom data-domain attribute. The snippet you need to insert should look like this:

```html
<script>
  var script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = "YOUR-CUSTOM-DATA-DOMAIN";
  script.src = "https://plausible.io/js/plausible.js";
  document.getElementsByTagName('head')[0].appendChild(script);
</script>
```

Id you want to report to multiple dashboards at the same time, set the custom data-domain value to "firstsite.com,secondsite.com". In case your Plausible site is a subfolder, use "yoursite.com/subfolder" instead.

## Concerns about using Google Tag Manager

There are a couple of concerns when using Plausible with Google Tag Manager:

### GTM adds extra complexity 

Google Tag Manager adds extra complexity and additional ways things can go wrong. Plausible is very simple and we've made it so it's easy to integrate and start counting visitors to your site. If you follow the above steps, Plausible will work all fine with Google Tag Manager. If you plan to use any more advanced options that GTM gives you access to, please do make sure to verify and test the tracking. 

GTM allows you to select tag firing priority, tag firing options, tag sequencing and so much more. Deviating from the simple setup by adding any of the extras may affect the way the Plausible script loads and counts your traffic. It's best to have in-house expertise and experience with GTM if you plan to use the more advanced options. 

Do make sure to check the consent settings area of GTM so our script is allowed to fire when it's supposed to. Please do test things in the browser console and ensure that our script is firing as intended when it's live on your site.

### GTM is blocked by many browsers and extensions 

[Google Tag Manager script is blocked](https://plausible.io/blog/google-analytics-adblockers-missing-data) (or shimmed) by several browsers including Brave, Firefox and [Safari](https://plausible.io/blog/safari-privacy-report) and many browser extensions. This means that any scripts you're using with Google Tag Manager will be blocked too by a certain percentage of your visitors. 

Plausible integrated without GTM or by using [our proxy](/proxy/introduction.md) will be blocked by fewer people which means you will get more accurate stats if you use Plausible without GTM.
