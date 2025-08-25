---
title: Adding Plausible to Webflow (and tracking custom events)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here's how to add Plausible Analytics to your Webflow site and set up the tracking of custom events such as button clicks and form submissions.

## How to add Plausible to your Webflow website

* On your project's page, click on the Webflow logo ("**W**") in the left-hand side menu and choose "**Project Settings**".

<img alt="Add custom code to Webflow" src={useBaseUrl('img/add-custom-code-to-webflow.png')} />

* You can use the "**[Custom Code](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags)**" feature in Webflow to add Plausible tracking code to your website. Site-wide JavaScript code injection is a premium Webflow feature so you need to upgrade your Webflow account to a paid subscription plan.

* Choose "**Custom Code**" from the menu and [paste your Plausible snippet](https://plausible.io/docs/plausible-script) in the "**Head Code**" section. We display your snippet during the process of adding a new site to your account. You can also see the snippet within the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

<img alt="Add Plausible Analytics script to Webflow" src={useBaseUrl('img/add-plausible-script-to-webflow.png')} />

* Do click on the "**Save Changes**" button and then "**Publish**" your changes.

Now you can go to your Webflow website and verify that Plausible script has been added and to your Plausible account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## How to track form submissions on your Webflow site

The easiest way to track form submissions on your Webflow site is to track the "thank you" page by setting a [pageview goal](https://plausible.io/docs/pageview-goals).

### 1. Create a "Thank you" page

First you'll need to create a "thank you" page by clicking on the "Pages" panel and creating the page by clicking on the "Create New Page" button.

<img alt="Create the form submission thank you page in Webflow" src={useBaseUrl('img/create-a-thank-you-page-in-webflow.png')} />

### 2. Set the redirect URL on form submission

Go to the page that contains your form, select the form and click on the gear icon to access the form settings. In the "Redirect URL" field type in the path to the thank you page ( i.e. **/thank-you** )

<img alt="Add redirect URL to your form in Webflow" src={useBaseUrl('img/add-redirect-url-to-form-in-webflow.png')} />

### 3. Create a pageview goal in your Plausible account

When you send custom events to Plausible, they won't show up in your dashboard automatically. You'll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to [your website's settings](website-settings.md) in your Plausible account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first Webflow goal" src={useBaseUrl('img/add-goal-webflow.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form. Select `Pageview` as the goal trigger and enter the and enter the page path that you want to track ( i.e. **/thank-you**)

<img alt="Thank you pageview goal in Webflow" src={useBaseUrl('img/thank-you-pageview-goal-webflow.png')} />

### 4. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who completed the form submission. Goal conversions are listed at the very bottom of the dashboard. The goal will show up in your dashboard as soon as it has been completed at least once.

## Tracking button clicks and other links on your Webflow site

### 1. Set an ID to the element you want to track

In Webflow, link and button elements don't have a default ID. You'll need to assign an ID by selecting the element and clicking on the settings gear. In the **"Designer View"**, you'll be able to set the ID.

<img alt="Add an ID to link and button elements in Webflow" src={useBaseUrl('img/add-id-to-link-and-button-webflow.png')} />

### 2. Trigger custom events with JavaScript on your site

Here's the code you will need to insert in the `<head>` section of the page where the element ID that you want to track is located. You can use the "**Custom Code**" feature to do this similarly to how you've inserted the Plausible snippet into your site.

Make sure to change the `elementId` line in the code below to include the ID attribute of the element you want to track (`button-click` in our example).

Also do change the `classes` line to include the goal name in this format: `plausible-event-name=Goal+Name`. The goal name is completely up to you. It's the name under which the goal conversions will appear in your Plausible dashboard. We've used `Button+Click` goal name in our example.

:::tip To represent a space character in goal names, you can use a `+` sign
For example: `plausible-event-name=Form+Submit` will display as `Form Submit` in your Plausible dashboard
:::

```html
<script>
    var toTag = [
        {
            elementId: 'button-click',
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

<img alt="Modify Plausible script webflow" src={useBaseUrl('img/modify-plausible-script-webflow.png')} />

Do click on the "**Save Changes**" button and then "**Publish**" your changes.

### 3. Create a custom event goal in your Plausible account

When you send custom events to Plausible, they won't show up in your dashboard automatically. You'll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to [your website's settings](website-settings.md) in your Plausible account and visit the "**Goals**" section.

Click on the "**+ Add goal**" button to go to the goal creation form. Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The name must be an exact match to the one you added to your site for the conversions to show up in your dashboard.

So in our example where we added a goal name `plausible-event-name=Button+Click` to the Webflow site, the goal to add in the Plausible account is `Button Click` (plus is replaced by a space).

<img alt="Add your custom event goal" src={useBaseUrl('img/button-click-custom-event-goal-webflow.png')} />

Next, click on the "**Add goal**" button and you'll be taken back to the Goals page.

### 4. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event. Goal conversions are listed at the very bottom of the dashboard. The goal will show up in your dashboard as soon as it has been completed at least once.

## Triggering multiple custom events on the same page

If you want to trigger multiple custom events on the same site, you don't need to add the script for each element that you want to track. Simply add all the elements in the same code. Make sure to **only add** the elements that already exist on your site. For example, if you want to track a link and a button, the code will look like this:

```html
<script>
    var toTag = [
		{
      		elementId: 'link-click',
            classes: 'plausible-event-name=Link+Click'
   		},
		{
      		elementId: 'button-click',
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

<img alt="track multiple elements in Webflow" src={useBaseUrl('img/track-multiple-elements-webflow.png')} />
