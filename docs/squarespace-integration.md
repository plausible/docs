---
displayed_sidebar: someSidebar
title: Adding Plausible to Squarespace
sidebar_label: Squarespace
description: "Add Plausible Analytics to a Squarespace site using Code Injection. Privacy-first, cookie-free tracking without touching your theme files."
---

import CtaBox from '@site/src/components/CtaBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

Here's how to add Plausible Analytics to your Squarespace site

<CtaBox
  headline="Add privacy-first analytics to your Squarespace site"
  link="https://plausible.io/register"
  linkText="Start free trial"
/>

## How to add Plausible to your Squarespace website 

* On your site's settings page, click on **Advanced**  and then click on **Code Injection**

* You can use the **[Custom Code](https://university.Squarespace.com/lesson/custom-code-in-the-head-and-body-tags)** feature in Squarespace to add Plausible tracking code to your website. Site-wide JavaScript code injection is a premium Squarespace feature so you need to upgrade your Squarespace account to a paid subscription plan.

* [Paste your Plausible snippet](https://plausible.io/docs/plausible-script) in the **Header Code** section. We display your snippet during the process of adding a new site to your account. You can also see the snippet within the **Site Installation** area of the **General** section in your [site settings](website-settings.md).

* Click on **Save**

Now you can go to your Squarespace website and verify that Plausible script has been added and to your Plausible account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## How to track form submissions on your Squarespace site

The easiest way to track form submissions on your Squarespace site is to track the "thank you" page by setting a [pageview goal](https://plausible.io/docs/pageview-goals).

### 1. Create a "Thank you" page

* First you'll need to create a "thank you" page by clicking on the "Pages" panel and creating the page by clicking on the "+" button in the **Not Linked** section. 

<div class="browser">
<img alt="Create the form submission thank you page in Squarespace" src={useBaseUrl('img/create-a-thank-you-page-in-Squarespace.png')} />
</div>

* Click on the gear icon button next to your "thank you" page to access the page's settings. Here you can see ( or edit ) the page path. 

<div class="browser">
<img alt="Squarespace form submission thank you page path" src={useBaseUrl('img/squarespace-thank-you-page-path.png')} />
</div>

### 2. Set the redirect URL on form submission

* Go to the page that contains your form, and click on **Edit**. Now click on the form to select it and click on the pencil icon to edit it.

<div class="browser">
<img alt="Edit the form in Squarespace" src={useBaseUrl('img/Edit-form-squarespace.png')} />
</div>

* In the "Content" section, click on "Post-submit". Make sure you select the "Redirect" option and in the "Redirect URL" field type in the path to the thank you page ( i.e. **/thank-you** ).

<div class="browser">
<img alt="Add redirect URL to your form in Squarespace" src={useBaseUrl('img/add-redirect-url-to-form-in-Squarespace.png')} />
</div>

<div class="browser">
<img alt="Add redirect URL to your form in Squarespace" src={useBaseUrl('img/redirect-url.png')} />
</div>

### 3. Create a pageview goal in your Plausible account

To configure a goal, go to [your website's settings](website-settings.md) in your Plausible account and visit the **Goals** section. You should see an empty list with a prompt to add a goal.

Click on the **+ Add goal** button to go to the goal creation form. Select `Pageview` as the goal trigger and enter the page path that you want to track ( i.e. **/thank-you**).

[Here's more information](https://plausible.io/docs/pageview-goals) about creating pageview goals in your Plausible account.

### 4. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who completed the form submission. Goals are listed at the bottom of your dashboard. The goal will show up in your dashboard as soon as it has been completed at least once.

## Tracking orders on your Squarespace site

In Squarespace, all completed orders are being redirected to a page with the following format: 

`https://yourwebsite.com/commerce/orders/977f8aa0-f618-47d0-8787-ee37b1457cc0`

To track completed orders, you can set up a pageview goal. Since the ID (in our example `/977f8aa0-f618-47d0-8787-ee37b1457cc0`) changes with every order, you will need to group those dynamic pages. You can use asterisks (*) to do so. Asterisks can be placed on either end or in the middle of any page path URL. For the example above, you can set up a pageview goal `/commerce/orders/*` to group all of the dynamically created order completion pages.

## What's next?

- [Add revenue tracking](ecommerce-revenue-tracking.md) to your order confirmation goal to measure revenue per source and campaign
- [Build a funnel](funnel-analysis.md) from your product page to the order confirmation page to see where visitors drop off
- [Explore user journeys](user-journeys.md) to see the paths visitors actually take before and after ordering
- [Invite your team](users-roles.md) or [share the dashboard](shared-links.md) with your client or collaborators
