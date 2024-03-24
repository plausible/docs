---
title: Adding Plausible to Squarespace
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here's how to add Plausible Analytics to your Squarespace site

## How to add Plausible to your Squarespace website 

* On your site's settings page, click on "**Advanced**"  and then click on "**Code Injection**"

* You can use the "**[Custom Code](https://university.Squarespace.com/lesson/custom-code-in-the-head-and-body-tags)**" feature in Squarespace to add Plausible tracking code to your website. Site-wide JavaScript code injection is a premium Squarespace feature so you need to upgrade your Squarespace account to a paid subscription plan.

* [Paste your Plausible snippet](https://plausible.io/docs/plausible-script) in the "**Header Code**" section. Your Plausible tracking script code will look something like this (your exact code will be shown on the JavaScript snippet page in your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

<img alt="Add Plausible Analytics script to Squarespace" src={useBaseUrl('img/add-plausible-script-to-Squarespace.png')} />

* Do click on the "**Save**" 

Now you can go to your Squarespace website and verify that Plausible script has been added and to your Plausible account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## How to track form submissions on your Squarespace site

The easiest way to track form submissions on your Squarespace site is to track the "thank you" page by setting a [pageview goal](https://plausible.io/docs/pageview-goals).

### 1. Create a "Thank you" page

* First you'll need to create a "thank you" page by clicking on the "Pages" panel and creating the page by clicking on the "+" button in the "**Not Linked**" section. 

<img alt="Create the form submission thank you page in Squarespace" src={useBaseUrl('img/create-a-thank-you-page-in-Squarespace.png')} />

* Click on the gear icon button next to your "thank you" page to access the page's settings. Here you can see ( or edit ) the page path. 

<img alt="Squarespace form submission thank you page path" src={useBaseUrl('img/squarespace-thank-you-page-path.png')} />


### 2. Set the redirect URL on form submission

* Go to the page that contains your form, and click on "**Edit**". Now click on the form to select it and click on the pencil icon to edit it.

<img alt="Edit the form in Squarespace" src={useBaseUrl('img/Edit-form-squarespace.png')} />

* In the "Content" section, click on "Post-submit". Make sure you select the "Redirect" option and in the "Redirect URL" field type in the path to the thank you page ( i.e. **/thank-you** )

<img alt="Add redirect URL to your form in Squarespace" src={useBaseUrl('img/add-redirect-url-to-form-in-Squarespace.png')} />

### 3. Create a pageview goal in your Plausible account

When you send custom events to Plausible, they won't show up in your dashboard automatically. You'll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to [your website's settings](website-settings.md) in your Plausible account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first Squarespace goal" src={useBaseUrl('img/add-goal-squarespace.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form. Select `Pageview` as the goal trigger and enter the and enter the page path that you want to track ( i.e. **/thank-you**)

<img alt="Thank you pageview goal in Squarespace" src={useBaseUrl('img/thank-you-pageview-goal-squarespace.png')} />

### 4. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who completed the form submission. Goal conversions are listed at the very bottom of the dashboard. The goal will show up in your dashboard as soon as it has been completed at least once.

## Tracking orders on your Squarespace site

In Squarespace, all completed orders are being redirected to a page with the following format: 

`https://yourwebsite.com/commerce/orders/977f8aa0-f618-47d0-8787-ee37b1457cc0`

To track completed orders, you can set up a pageview goal. Since the ID (in our example `/977f8aa0-f618-47d0-8787-ee37b1457cc0`) changes with every order, you will need to group those dynamic pages. You can use asterisks (&ast;) to do so. Asterisks can be placed on either end or in the middle of any page path URL. For the example above, you can set up a pageview goal `/commerce/orders/*` to group all of the dynamically created order completion pages.
