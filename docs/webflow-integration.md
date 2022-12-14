---
title: How to add Plausible Analytics to your Webflow site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use the "**[Custom Code](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags)**" feature to add Plausible Analytics tracking code to your Webflow website. Site-wide JavaScript code injection is a premium Webflow feature so you need to upgrade your Webflow account to a paid subscription plan.

## How to add Plausible to your Webflow website

* On your project's page, click on the webflow logo ("**W**") in the left-hand side menu and choose "**Project Settings**"

<img alt="Add custom code to Webflow" src={useBaseUrl('img/add-custom-code-to-webflow.png')} />

* Choose "**Custom Code**" from the menu and [paste your Plausible snippet](https://plausible.io/docs/plausible-script) in the "**Head code**" section. Then publish your changes. 

<img alt="Add Plausible script to Webflow" src={useBaseUrl('img/add-plausible-script-to-webflow.png')} />

Now you can go to your website and verify that Plausible script has been added and to your Plausible account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## How to track a form submission in Webflow

Here's an example of how you can track form submissions on your Webflow site using our [custom events](https://plausible.io/docs/custom-event-goals).

### 1. Find the ID attribute of the form element you want to track

Your form element should already have an ID attribute by default. You can see the ID value by selecting the form element and clicking on the settings gear. In the "**Designer View**" you'll be able to see the assigned ID. 

<img alt="Webflow form ID" src={useBaseUrl('img/webflow-form-id.png')} />

:::note
Please make sure you select your form element, and not just the "submit" button. Also, the default assigned ID can be changed. If you change it, make sure you include the correct ID in step 2 
:::

### 2. Change the Plausible snippet on your site

Please change the file name in the `src` attribute of your Plausible snippet from `script.js` to `script.tagged-events.js`. It should look like this:

```html
<script defer data-domain="<yourdomain.com>" src="https://plausible.io/js/script.tagged-events.js"></script>
```

Or if you're using [a proxy](/proxy/introduction.md):

```html
<script defer data-domain="<yourdomain.com>" src="https://yourproxy.com/script.tagged-events.js"></script>
```

:::note
If you're using outbound link clicks, file downloads or any of our other script extensions, you can [combine them](script-extensions.md#you-can-combine-extensions-according-to-your-needs) by changing the `src` attribute in the snippet. If you want to track custom events and outbound link clicks simultaneously, change the script name to `script.tagged-events.outbound-links.js`.
:::

### 3. Trigger custom events with JavaScript on your site

You can use the `id` attribute to add the class names to your element dynamically with JavaScript. Here's the code you will have to insert in the `<head>` section of the page with the element you want to track:

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

Do publish your changes. Once you have this script running on your site, it will add your class names as soon as the HTML content is loaded on the page and Plausible will be able to track your element.

### 4. Create a custom event goal with the same name in your Plausible Analytics account

When you start sending custom events to Plausible Analytics, they won’t show up automatically. You’ll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The names must be an exact match to the one on your site for the conversions to show up in your analytics dashboard.

<img alt="Add your custom event goal" src={useBaseUrl('img/form-submission-custom-event-goal-webflow.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. 

### 5. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event. Goal conversions are listed at the very bottom of the dashboard. The goal will show up in your dashboard once it has been completed at least once.
