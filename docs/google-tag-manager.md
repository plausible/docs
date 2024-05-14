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
  script.dataset.domain = "yourdomain.com";
  script.dataset.api = "https://plausible.io/api/event";
  script.src = "https://plausible.io/js/script.js";
  document.getElementsByTagName('head')[0].appendChild(script);
</script>
```

This code will generate your Plausible snippet and add it to the `<head>` section of the page. Make sure to change `yourdomain.com` to the actual domain of your Plausible site.

Additionally, if you're using our [proxy](proxy/introduction.md) or any [script extensions](script-extensions.md), you can change the `script.dataset.api` (`data-api` attribute) and `script.src` values according to your tracking needs. Please check out the linked resources for further instructions. For a full documentation on the Plausible script configuration and tracking options, see [here](plausible-script.md).

* Then click to "**Choose a trigger to make this tag fire**"
  
<img alt="Paste Plausible script" src={useBaseUrl('img/paste-plausible-script.png')} />

* Select the "**All Pages**" and filter "**Page View**" as the trigger if you want to count all your pages
  
<img alt="Tag trigger" src={useBaseUrl('img/trigger-tag.png')} />

:::note
Be careful about extras you enable such as tag firing priority, tag sequencing, consent checks etc as they all may affect when and how our script loads
:::

* Give your tag a name
  
<img alt="Name tag" src={useBaseUrl('img/name-your-tag.png')} />

* Click on the "**Save**" button

* Click "**Submit**" to submit your changes

* Then click on the "**Publish**" button

That's it! Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## Track custom events

To track custom events using CSS class names, you need to change the default tracking script in the `script.src` line to add the `tagged-events` extension. Do also make sure to change `yourdomain.com` to the actual domain of your site. Like this:

```html
<script>
  var script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = "yourdomain.com";
  script.dataset.api = "https://plausible.io/api/event";
  script.src = "https://plausible.io/js/script.tagged-events.js";
  document.getElementsByTagName('head')[0].appendChild(script);
</script>
```

For more details on goals and events, do check out the [custom events guide](custom-event-goals.md)

## Track custom properties

To track custom properties on the pageview level, you need to change the default tracking script in the `script.src` line to add the `pageview-props` extension and then send the properties using the `script.setAttribute`. Do also make sure to change `yourdomain.com` to the actual domain of your site. Like this:

```html
<script>
  var script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = "yourdomain.com";
  script.dataset.api = "https://plausible.io/api/event";
  script.src = "https://plausible.io/js/script.pageview-props.js";

  script.setAttribute("event-author", "John Doe");
  script.setAttribute("event-logged_in", "true");
  // ... add a new line like above for each property

  document.getElementsByTagName('head')[0].appendChild(script);
</script>
```

For more details on custom properties, do check out the [custom properties guide](custom-props/introduction.md)
