---
title: How to add the script to your Webflow site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use the "**[Custom Code](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags)**" feature to add Plausible Analytics tracking code to your Webflow website same way you would add Google Analytics code or any other JavaScript code. 

Site-wide JavaScript code injection is a premium Webflow feature so you need to upgrade your Webflow account to a paid subscription plan.

## How to add Plausible to your Webflow website

* In your "**Project settings**" click on "**Custom code**".

* Find the "**Head code**" section.

* Paste your Plausible tracking code in the "**Head code**" section and save changes.

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## How to track a form submission in Webflow

Here's an example of how you can track form submissions on your Webflow site using our [custom events](https://plausible.io/docs/custom-event-goals).

### 1. Trigger custom events with JavaScript on your site
 
First, make sure your tracking setup includes the second line as shown below. For this, follow the same steps you took when inserting the default Plausible snippet.

```html
<script defer data-domain="<yourdomain.com>" src="https://plausible.io/js/plausible.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

### 2. Find the ID attribute of your form element

Your form element should already have an ID attribute by default. Look up the value of this from the Designer view, by selecting the form element:

<img alt="Form element settings" src={useBaseUrl('img/webflow-form-elem-settings.png')} />

### 3. Implement the code
 
If you want to trigger form submissions, button clicks etc. you need to implement the code for that yourself. This is how the code should look like to track form submissions on Webflow. In the below code, you need to replace the following:

- `<my-form-id>` with the id value from the previous step
- `<my-event-name>` with the custom event name you want to be shown on your Plausible dashboard (use this same name in step 5)


```html
<script>
const plausibleGoalForm = document.getElementById('<my-form-id>');

plausibleGoalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    setTimeout(submitForm, 1000);
    var formSubmitted = false;
  
    function submitForm() {
      if (!formSubmitted) {
        formSubmitted = true;
        plausibleGoalForm.submit();
      }
    }
  
    plausible('<my-event-name>', {callback: submitForm});
  })
</script>
```

### 4. Insert the modified JavaScript code in the footer section of your page
 
Using the [custom code](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags) feature once again, insert the modified JavaScript code, this time in the footer section of the page where the form is located.

### 5. Create a custom event goal with the same name in your Plausible Analytics account.

When you start sending custom events to Plausible Analytics, they won’t show up automatically. You’ll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The names must be an exact match to the one on your site for the conversions to show up in your analytics dashboard.

<img alt="Add your custom event goal" src={useBaseUrl('img/add-custom-event-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. 

## 6. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event. Goal conversions are listed at the very bottom of the dashboard. The goal will show up in your dashboard once it has been completed at least once.
