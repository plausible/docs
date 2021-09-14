---
title: 404 error pages tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="How to track 404 error pages" src={useBaseUrl('img/track-404-error-pages.jpg')} />

:::note
If you use the 404 error pages tracking feature, then these count towards your billable monthly pageviews.
:::

Tracking 404 error pages is essential for many site owners and Plausible helps you automate this process. With our "**404 Error Pages Tracking**" you can:

* Get an easy overview of which 404 pages are accessed by your visitors
* See where visitors find broken links to your 404 error pages
* Then you can manually fix broken links and redirect error pages

Check out this blog post for more details on the value of [tracking 404 error pages](https://plausible.io/blog/track-404-errors).

If you want to track 404 error pages on your site, here's what you need to do:

## 1. Make sure your tracking setup includes the second line

First, make sure your tracking setup for Plausible Analytics includes the second line as shown below:

```html
<script defer data-domain="<yourdomain.com>" src="https://plausible.io/js/plausible.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

You need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

## 2. Paste this piece of code to your 404 page template

Add this code to your 404 page. For instance, if you're using WordPress, your 404 page template will be called 404.php. It will be located within your theme files.

```html
<script>plausible("404",{ props: { path: document.location.pathname } });</script>
```

You need to place this code on your 404 page below the header section (place it somewhere after the closing `</head>` tag).

## Step 3: Create a custom event goal in your Plausible Analytics account

404 error pages won't show up automatically. You'll have to configure the goal for them to show up on your dashboard.

To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `404`.

<img alt="Add 404 error pages goal" src={useBaseUrl('img/404-error-pages-goal.png')} />

Next, click on the "**Add goal**" button and you'll be taken back to the Goals page. After you've completed this process, all the 404 error pages will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see "**404**" goal as soon as the first visit on an error page has been tracked.

Click on "**404**" to see the full list of all visits on all error pages and have your dashboard filtered by error pages only. Click on a particular error page URL to filter the dashboard by those clicks only and get the full overview of that specific URL. Then you can figure out how your visitors discover the broken links and fix them.

Thanks to [Jeremiah Lee](https://www.jeremiahlee.com/) for contributing this to the Plausible Analytics community!
