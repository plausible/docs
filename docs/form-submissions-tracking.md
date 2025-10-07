---
title: Form submissions tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
If you use the form submissions tracking feature, then these count towards your billable monthly pageviews.
:::

Plausible can automatically detect and track when visitors submit forms on your website. This feature helps you measure engagement with contact forms, signup forms, and other key conversion points without adding custom code.

When Form submissions tracking is enabled, Plausible automatically detects all forms across your site and records submissions as a single goal. This means you don’t need to configure individual goals for each form — Plausible handles it for you.

All detected form submissions are grouped under one goal, and you can analyze where conversions happen by filtering results by page path or referrer. For example, if the same form appears on multiple pages, Plausible will show how many submissions occurred on each specific page.

## Enable "Form submissions" for your site

You can enable "**Form submissions**" as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control what data is collected in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

<!-- TODO -->
<img alt="Enable form submissions tracking during onboarding" src={useBaseUrl('img/onboarding-enable-outbound-link-clicks-tracking.png')} />

After you enable form submissions click tracking, we will automatically add a new goal called `Form: Submission` to your site.

:::tip Using WordPress?
The quickest way to start tracking form submissions is to use our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin)
:::

## See all the form submissions clicks in your dashboard

Click on "**Form: Submission**" goal in the "**Goal Conversions**" report of your Plausible dashboard to see the full list of all form submissions and have your dashboard filtered by them. You can see:

* The number of total form submissions
* The number of unique form submissions
* The conversion rate
* Top referral sources that lead to submissions
* Top pages that drive the submissions
* Countries that submit forms
* Devices (screen size, browser, OS) that click on forms

To analyze a specific form, click on its URL to filter your dashboard by that form’s submissions. This gives you a complete overview of performance for that individual form.
