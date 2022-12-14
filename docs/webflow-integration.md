---
title: How to add Plausible Analytics to your Webflow site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use the "**[Custom Code](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags)**" feature to add Plausible Analytics tracking code to your Webflow website same way you would add Google Analytics code or any other JavaScript code. 

Site-wide JavaScript code injection is a premium Webflow feature so you need to upgrade your Webflow account to a paid subscription plan.

## How to add Plausible to your Webflow website

* On your project's page, click on the webflow logo ( "**W**") in the left hand side menu and then choose "**Project Settings**"

<img alt="add custom code to webflow" src={useBaseUrl('img/add-custom-code-to-webflow.png')} />

* Choose "**Custom Code**" from the menu and then [copy-paste your Plausible script](https://plausible.io/docs/plausible-script) in the "**Head code**" section. Make sure you publish your changes. 

<img alt="add Plausible script to webflow" src={useBaseUrl('img/add-plausible-script-to-webflow.png')} />

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## How to track a form submission in Webflow

Here's an example of how you can track form submissions on your Webflow site using our [custom events](https://plausible.io/docs/custom-event-goals).

### 1. Find the ID attribute of your form element 

Your form element should already have an ID attribute by default. You can see the ID value by selecting the form element on your page and clicking on the settings gear. In the Designer View you'll be able to see the default assigned ID. 

<img alt="webflow form ID" src={useBaseUrl('img/webflow-form-id.png')} />

:::note Make sure to select the form element and not just the "submit" button. Also, the default assigned ID can be changed. If you change it make sure you include the correct ID in step 2:::
 

### 2. Change your Plausible snippet and trigger custom events with JavaScript on your site


You will need to use the `tagged-events` script extension. All you have to do is change the JavaScript filename in the `src` attribute of your Plausible snippet. For example:

- `https://plausible.io/js/script.js` &rarr; `https://plausible.io/js/script.tagged-events.js`, or
- `https://yourproxy.com/script.manual.js` &rarr; `https://yourproxy.com/script.manual.tagged-events.js` (if you're using a proxy)

You can use this `id` to add the class names to your element dynamically with JavaScript. Here's the code you will have to insert in the `<head>` section of the page with the element you want to track:

```html
<script>
    var toTag = [
        {
            elementId: 'email-form',
            classes: 'plausible-event-name=Form+Submission>'
        }
    ]

    document.addEventListener('DOMContentLoaded', function (_e) {
        toTag.forEach(function (tagObject) {
            var element = document.getElementById(tagObject.elementId)
            tagObject.classes.split(' ').forEach(function (className) {
                element.classList.add(className)
            })
        })
    })
</script>
```

<img alt="modify Plausible script webflow" src={useBaseUrl('img/modify-plausible-script-webflow.png')} />

Once you have this script running on your site, it will add your class names as soon as the HTML content is loaded on the page, and Plausible will be able to track your element.

:::note Make sure to publish your changes!:::

### 3. Create a custom event goal with the same name in your Plausible Analytics account

When you start sending custom events to Plausible Analytics, they won’t show up automatically. You’ll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The names must be an exact match to the one on your site for the conversions to show up in your analytics dashboard.

<img alt="Add your custom event goal" src={useBaseUrl('img/form-submission-custom-event-goal-webflow.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. 

## 4. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event. Goal conversions are listed at the very bottom of the dashboard. The goal will show up in your dashboard once it has been completed at least once.
