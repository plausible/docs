---
title: How to add the script to your site using Google Tag Manager
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use "**Google Tag Manager**" to add Plausible Analytics tracking code to your website.

* In your Google Tag Manager account, click on "**Add a new tag**"
<img alt="Add new tag" src={useBaseUrl('img/add-new-tag.png')} />

* Click on the "**Choose a tag type to begin setup**"
<img alt="Choose tag type" src={useBaseUrl('img/choose-type-to-begin.png')} />

* Use the search functionality to search for "**Custom HTML**"
<img alt="HTML tag" src={useBaseUrl('img/custom-html-tag.png')} />

* In the HTML field within the Custom HTML section, paste the following code:

```html
<script>
  var script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = "YOUR_DATA_DOMAIN";
  script.dataset.api = "https://plausible.io/api/event";
  script.src = "https://plausible.io/js/script.js";
  document.getElementsByTagName('head')[0].appendChild(script);
</script>
```

This code will generate your Plausible snippet, and add it to the `<head>` section of the page. Make sure to change `YOUR_DATA_DOMAIN` with the actual name of your Plausible site.

Additionally, if you're using our [proxy](proxy/introduction.md) or any [script extensions](/script-extensions), you can change the `script.dataset.api` (`data-api` attribute) and `script.src` values according to your tracking needs. Please check out the linked resources for further instructions. For a full documentation on the Plausible script configuration and tracking options, see [here](plausible-script.md).

:::note
Be careful about extras you enable such as tag firing priority, tag sequencing, consent checks etc as they all may affect when and how our script loads
:::

* Then click to "**Choose a trigger to make this tag fire**"
<img alt="Paste Plausible script" src={useBaseUrl('img/paste-plausible-script.png')} />

* Select the "**All Pages**" and filter "**Page View**" as the trigger if you want to count all your pages
<img alt="Tag trigger" src={useBaseUrl('img/trigger-tag.png')} />

* Give your tag a name
<img alt="Name tag" src={useBaseUrl('img/name-your-tag.png')} />

* Click on the "**Save**" button

* Click "**Submit**" to submit your changes

* Then click on the "**Publish**" button

That's it! Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## Track custom events

To track custom events, you will simply need to change the default tracking script to add the [tagged-events extension](https://plausible.io/docs/script-extensions#all-our-script-extensions) and, if necessary, add the extra script to triger the custom event. For reference you can check out any of our CRM integration guides. For example, our [Webflow guide](https://plausible.io/docs/webflow-integration)

## Tracking custom properties

You can also track custom properties with our [pageview-props extension](/custom-props/for-pageviews) if you've integrated Plausible via Google Tag Manager. In order to add your custom properties according to the pageview-props instructions, in Google Tag Manager, you need to do the following in your custom HTML tag:

```html
<script>
  var script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = "YOUR_DATA_DOMAIN";
  script.dataset.api = "https://plausible.io/api/event";
  script.src = "https://plausible.io/js/script.js";

  script.setAttribute("event-author", "John Doe");
  script.setAttribute("event-logged_in", "true");
  // ... add a new line like above for each property

  document.getElementsByTagName('head')[0].appendChild(script);
</script>
```

## Concerns about using Google Tag Manager

There are a couple of concerns when using Plausible with Google Tag Manager:

### GTM adds extra complexity 

Google Tag Manager adds extra complexity and additional ways things can go wrong. Plausible is very simple and we've made it so it's easy to integrate and start counting visitors to your site. If you follow the above steps, Plausible will work all fine with Google Tag Manager. If you plan to use any more advanced options that GTM gives you access to, please do make sure to verify and test the tracking. 

GTM allows you to select tag firing priority, tag firing options, tag sequencing and so much more. Deviating from the simple setup by adding any of the extras may affect the way the Plausible script loads and counts your traffic. It's best to have in-house expertise and experience with GTM if you plan to use the more advanced options. 

Do make sure to check the consent settings area of GTM so our script is allowed to fire when it's supposed to. Please do test things in the browser console and ensure that our script is firing as intended when it's live on your site.

### GTM is blocked by many browsers and extensions 

[Google Tag Manager script is blocked](https://plausible.io/blog/google-analytics-adblockers-missing-data) (or shimmed) by several browsers including Brave, Firefox and [Safari](https://plausible.io/blog/safari-privacy-report) and many browser extensions. This means that any scripts you're using with Google Tag Manager will be blocked too by a certain percentage of your visitors. 

Plausible integrated without GTM or by using [our proxy](/proxy/introduction.md) will be blocked by fewer people which means you will get more accurate stats if you use Plausible without GTM.
