---
title: Pageview goals
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Pageview goals allow you to measure how many people visit a specific section of your site (for instance dynamically created checkout pages for ecommerce) and get referral sources and other details for those conversions. 

Since pageviews are collected automatically, you don’t need to change your website’s code to measure pageview goals. This makes pageview goals the easiest way to start tracking any type of conversion on your site. 

Do you run a store and want to track purchases? Do you have a contact form and want to track form submissions? Use pageview goals to track the "thank you" page or the order confirmation page.

To get started with "**Pageview Goals**", go to [your website's settings](website-settings.md) in Plausible Analytics and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click the "**+ Add goal**" button to go to the goal creation form.

Select `Pageview` as the goal trigger and enter the pathname of the page you would like your visitors to hit, or select the same from the dropdown. The pathname must match the page path you can see in your Plausible Analytics dashboard.

<img alt="Add your pageview goal" src={useBaseUrl('img/add-pageview-goal.png')} />

Next, you'll see the Display Name which gets self-populated. You can optionally edit it. You can also edit this later at any time. 

In the next field, you can optionally choose a scroll depth threshold for the selected page to see how many visitors scroll below your desired scroll depth mark. [Scroll depth](http://plausible.io/docs/scroll-depth) is measured in percentage of a page’s total height that visitors have reached on average. If you set this up, you can filter and break down page scroll goals like any other goals on the dashboard.

Then click the "**Add goal**" button and you’ll be taken back to the goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who reached the specified page or group of pages. Goal conversions are listed at the very bottom of the dashboard.

## How to group your pages

Do you want to analyze the total traffic to specific sections of your site or to group your dynamically created pages? You can use an asterisk (`*`) to match patterns in your page path URLs. Asterisks can be placed on either end or in the middle of any page path URL.

You can for instance group all of your blog posts by creating a pageview goal `/blog*` (if your blog subdirectory is named `blog`) or track Woocommerce checkout pages for your ecommerce by creating a pageview goal `/checkout/order-received/*`. 

:::tip Would you like to group your pages at any time without using pageview goals?
You can do so by using [the "Filter" button](filters-segments.md) on the top of your dashboard
:::

## Edit a Pageview Goal

To edit a Pageview Goal, start by locating the pageview goal you want to update in the Goals list in your website's settings. Click on the "Edit goal" button next to it, which will bring up the goal editing form.

<img alt="Edit goal button" src={useBaseUrl('img/edit-goal-button.png')} />

From the pop up, you can select a new page path from the dropdown menu that matches the updated page you want to track.

You can also give it a new display name, say, if the original name of the goal is too long or doesn’t quite fit your needs. This allows you to make the goal name more personalized and descriptive, which not only helps in organizing your reports but also helps your funnels look cleaner.

<img alt="Edit pageview goal popup" src={useBaseUrl('img/edit-pageview-goal-popup.png')} />

Once you’ve made the necessary changes, simply click "Update goal," and your updated settings will be applied immediately. The changes will be reflected in your Plausible Analytics dashboard, with the goal now tracking based on the new settings you’ve configured.
