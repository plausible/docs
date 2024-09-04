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

* Paste your Plausible JavaScript tracking snippet in the "**HTML**" field within the "**Custom HTML**" section. Do note that Plausible will automatically detect that you're using Google Tag Manager and will present you a GTM-dedicated snippet that you need to use. We will display your snippet during the process of adding a new site to your account. If you've already added the site to your Plausible account, you can see the snippet within the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

* After pasting the snippet, click to "**Choose a trigger to make this tag fire**"
  
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

## Track 404 error pages

* You can enable "**404 error pages**" as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control what data is collected in the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md). After you enable 404 error pages tracking, we will automatically add a new goal called `404` to your site

<img alt="Enable 404 tracking during onboarding" src={useBaseUrl('img/onboarding-enable-404-tracking.png')} />

* The tracking snippet will change after your selection of "**404 error pages**" as an optional measurement. Do ensure to paste the newest snippet into your "**Custom HTML**" tag for all tracking to work as expected

* Create a new GTM Variable 

<img alt="Create new GTM Variable " src={useBaseUrl('img/GTM-create-new-variable.png')} />

* Name the new variable "**Page Not Found**" and set the type to "**Custom JavaScript**"

<img alt="New GTM variable name and type" src={useBaseUrl('img/GTM-variable-name-and-type.png')} />

* Create a new GTM Trigger 

<img alt="Create new GTM trigger" src={useBaseUrl('img/GTM-create-trigger.png')} />

* Name the new trigger "**Page Not Found Trigger**" and set the type to "**Page View**" and "**DOM Ready**"

<img alt="New GTM trigger name and type" src={useBaseUrl('img/GTM-trigger-name-and-type.png')} />

* Add the following function to the trigger's field

```javascript
    function() {
  return typeof pageNotFound === 'undefined' ? 0 : pageNotFound;
}
```

<img alt="New GTM trigger code" src={useBaseUrl('img/GTM-variable-code.png')} />

* Make sure that the "**Page Not Found Trigger**" only fires on "**Some DOM Ready Events**" where "**Page Not Found**" variable is "**greater than equal to 1**"
  
<img alt="New GTM trigger references" src={useBaseUrl('img/GTM-trigger-fire.png')} />

* Add the following line within the `body` section of your website's 404 page template. For instance, if you're using WordPress, your 404 page template will be called `404.php` and it will be located within your theme files

```javascript
    <script type="text/javascript">
      var pageNotFound = true;
    </script>
```

5. Create a new GTM Tag called "**Page Not Found Tag**" of type "**Custom HTML**" and paste the following code:

```javascript
<script type="text/javascript">window.plausible("404", { props: { path: document.location.pathname } });</script>
```

6. Publish all changes.

## Track custom events

* You can enable "**Custom events**" as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control what data is collected in the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md)

* The tracking snippet will change after your selection of "**Custom events**" as an optional measurement. Do ensure to paste the newest snippet into your "**Custom HTML**" tag for all tracking to work as expected

* You then need to tag individual elements of your site by following our [custom events guide](custom-event-goals.md).

## Track custom properties

* You can enable "**Custom properties**" as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control what data is collected in the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md)

* The tracking snippet will change after your selection of "**Custom properties**" as an optional measurement. Do ensure to paste the newest snippet into your "**Custom HTML**" tag for all tracking to work as expected
  
* To track custom properties on the pageview level, you need to manually change your Plausible snippet to send the properties using the `script.setAttribute`

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

For more details on custom properties, do check out the [custom properties guide](custom-props/introduction.md).
