---
title: Form submissions tracking
description: "Plausible can automatically detect and record form submissions across your site without custom code. See which pages and sources drive the most form completions."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
If you use the form submissions tracking feature, then these count towards your billable monthly pageviews.
:::

Plausible can automatically detect and track when visitors submit forms on your website. This feature helps you measure engagement with contact forms, signup forms, and other key conversion points without adding custom code.

When Form submissions tracking is enabled, Plausible automatically detects all forms across your site and records submissions as a single goal. This means you don’t need to configure individual goals for each form: Plausible handles it for you.

All detected form submissions are grouped under one goal, and you can analyze where conversions happen by filtering results by page path or referrer. For example, if the same form appears on multiple pages, Plausible will show how many submissions occurred on each specific page.

**Form submissions** is an [optional enhanced measurement](script-extensions.md). If you want to track form submissions, here's how to enable it:

## Enable "Form submissions" for your site

By default, **Form submissions** is enabled when adding a new site to your Plausible account. You can enable or disable it by going to the **General** section of your [site settings](website-settings.md). In the **Tracking** area, use the **Form submissions** toggle under **Default tracking**. Your changes take effect automatically without needing to update the snippet on your site.

<div class="browser">
<img alt="Enable form submission tracking in Plausible site settings" src={useBaseUrl('img/v2/enable-form-submission-tracking.png')} />
</div>

After you enable form submissions tracking, we will automatically add a new goal called `Form: Submission` to your site.

## See all the form submissions in your dashboard

Click on **Form: Submission** goal in the **Goals** tab of your Plausible dashboard to see the full list of all form submissions and have your dashboard filtered by them. You can see:

* The number of total form submissions
* The number of unique form submissions
* The conversion rate
* Top referral sources that lead to submissions
* Top pages that drive the submissions
* Countries that submit forms
* Devices (screen size, browser, OS) that submit forms

To analyze a specific form, click on its URL to filter your dashboard by that form’s submissions. This gives you a complete overview of performance for that individual form.

## Other automated goals

Plausible also offers automated tracking for [outbound link clicks](outbound-link-click-tracking.md) and [file downloads](file-downloads-tracking.md). These can be enabled under **Default tracking** in the **Tracking** area of your site settings without any code changes. You can also track [404 error pages](error-pages-tracking-404.md) with a small snippet of code.
