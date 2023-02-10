---
title: Adding Plausible to Webflow (and tracking custom events)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here's how to add Plausible Analytics to your Webflow site and set up the tracking of custom events such as button clicks and form submissions.

## How to add Plausible to your Webflow website 

* Go to the editor of your Carrd website and add an "**Embed**" component.

<img alt="Add embed element to Carrd" src={useBaseUrl('img/add-embed-element-to-carrd.png')} />

* In the element's settings make sure: 

- Type is set to "**Code**"
- Style is set to "**Hidden**" and "**Head**"

And past your tracking script in the **Code** field. Your Plausible tracking script code will look something like this (your exact code will be shown on the JavaScript snippet page in your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

<img alt="Add Plausible Analytics script to Carrd" src={useBaseUrl('img/add-plausible-script-to-carrd.png')} />

* Do click on the "**Done**" button and then "**Publish**" your changes.

Now you can go to your Webflow website and verify that Plausible script has been added and to your Plausible account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## How to track form submissions on your Webflow site

**TBD**

## Tracking button clicks and other links on your Webflow site

### 1. Change the Plausible snippet on your site

Please change the file name in the `src` attribute of your Plausible snippet from `script.js` to `script.tagged-events.js`. It should look like this:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.tagged-events.js"></script>
```

:::note
If you're using outbound link clicks, file downloads or any of our other script extensions, you can [combine them](script-extensions.md#you-can-combine-extensions-according-to-your-needs) by changing the `src` attribute in the snippet. If you want to track custom events and outbound link clicks simultaneously, change the script name to `script.tagged-events.outbound-links.js`.
:::

### 3. Set an ID to the element you want to track

In Carrd buttons and links have default IDs. Usually they're assigned IDs based on the order you've added them. So first button or link has an ID of "**buttons01**"/"**links01**", second button or link has an ID of "**buttons02**"/"**links02**" and so on and so forth. 

If you're on a higher plan, like Pro Plus, you'll be able to set these IDs yourself from the element's settings. 

To be sure of your element's ID, you can use your browser's dev tool to inspect the element. 

<img alt="Confirm element ID in Carrd" src={useBaseUrl('img/confirm-element-id-carrd.png')} />


### 3. Trigger custom events with JavaScript on your site

Here's the code you will need to insert in the `<head>` section of the page where the element ID that you want to track is located. You can use the "**Custom Code**" feature to do this similarly to how you've inserted the Plausible snippet into your site.

Make sure to change the `elementId` line in the code below to include the ID attribute of the element you want to track (`buttons01` in our example). 

Also do change the `classes` line to include the goal name in this format: `plausible-event-name=Goal+Name`. The goal name is completely up to you. It's the name under which the goal conversions will appear in your Plausible dashboard. We've used `Button+Click` goal name in our example.

:::note
To represent a space character in goal names, you can use a `+` sign. For example: `plausible-event-name=Form+Submit` will display as `Form Submit` in your Plausible dashboard
:::

```html
<script>
    var toTag = [
        {
            elementId: 'buttons01',
            classes: 'plausible-event-name=Button+Click'
        }
    ]

    document.addEventListener('DOMContentLoaded', function (_e) {
        toTag.forEach(function (tagObject) {
            var element = document.getElementById(tagObject.elementId)
            tagObject.classes.split(' ').forEach(function (className) {
                if (element) { element.classList.add(className) }
            })
        })
    })
</script>
```

<img alt="Modify Plausible script Carrd" src={useBaseUrl('img/modify-plausible-script-carrd.png')} />

Do click on the "**Save Changes**" button and then "**Publish**" your changes.

### 4. Create a custom event goal in your Plausible account

When you send custom events to Plausible, they won't show up in your dashboard automatically. You'll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to [your website's settings](website-settings.md) in your Plausible account and visit the "**Goals**" section.  

Click on the "**+ Add goal**" button to go to the goal creation form. Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The name must be an exact match to the one you added to your site for the conversions to show up in your dashboard.

So in our example where we added a goal name `plausible-event-name=Button+Click` to the Webflow site, the goal to add in the Plausible account is `Button Click` (plus is replaced by a space).

<img alt="Add your custom event goal" src={useBaseUrl('img/button-click-custom-event-goal-webflow.png')} />

Next, click on the "**Add goal**" button and you'll be taken back to the Goals page. 

### 5. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event. Goal conversions are listed at the very bottom of the dashboard. The goal will show up in your dashboard as soon as it has been completed at least once.



## Triggering multiple custom events on the same page

If you want to trigger multiple custom events on the same site, you don't need to add the script for each element that you want to track. Simply add all the elements in the same code. Make sure to **only add** the elements that already exist on your site. For example, if you want to track a link and a button, the code will look like this:

```html
<script>
    var toTag = [
		{
      		elementId: 'buttons01',
            classes: 'plausible-event-name=Button+Click'   
   		},
		{
      		elementId: 'links01',
            classes: 'plausible-event-name=Link+Click'   
   		}
    ]

    document.addEventListener('DOMContentLoaded', function (_e) {
        toTag.forEach(function (tagObject) {
            var element = document.getElementById(tagObject.elementId)
            tagObject.classes.split(' ').forEach(function (className) {
                if (element) { element.classList.add(className) }
            })
        })
    })
</script>
```

<img alt="track multiple elements in Carrd" src={useBaseUrl('img/track-multiple-elements-carrd.png')} />
