---
title: Scroll depth tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Scroll depth tracking is built into Plausible Analytics by default, allowing you to measure how far visitors scroll down your pages, expressed as a percentage.

This data provides insights into user engagement and helps optimize content placement, calls-to-action (CTAs) and page layouts.

## Scroll Depth percentage for your pages

You can find scroll depth data in:

1.  **The top row of metrics** when a page filter is applied. Click on it to see trends over time.

2.  **The expanded Top Pages report**, where pages can be sorted by scroll depth for deeper analysis.

<img alt="Scroll depth metric in Plausible" src={useBaseUrl('img/scroll-depth.png')} />

If there's insufficient data, scroll depth will display as "-" until more traffic is recorded.

You can also use [the Filters feature](filters-segments.md) to group similar pages and analyze their average scroll depth. For example, filter URLs containing "blog" to see average engagement for blog posts.

Plausible tracks scrolling at all percentages (1% to 100%), unlike many other tools that limit tracking to specific points such as 25%, 50%, and 75%. If you also want to track a specific scroll depth treshold for some of your pages, you can set up scroll depth goals.

## Scroll Depth goals

You can also set up a Scroll Depth goal with a specific scroll depth percentage threshold to see how many visitors scroll to and beyond your desired scroll depth mark.

To get started with "**Scroll Depth Goals**", go to [your website's settings](website-settings.md) in Plausible Analytics and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Scroll Depth` as the goal trigger, select the scroll depth percentage threshold (from 1% to 100%) and enter the pathname of the page you would like to track. The pathname must match the page path you can see in your Plausible Analytics dashboard.

Do you want to analyze the scroll depth for a specific section of your site? You can use an asterisk (`*`) to match patterns in your page path URLs. Asterisks can be placed on either end or in the middle of any page path URL.

You can for instance group all of your blog posts by using `/blog*` (if your blog subdirectory is named `blog`) or your Woocommerce checkout pages by using `/checkout/order-received/*`. 

Next, click on the "**Add goal**" button and you’ll be taken back to the goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who have reached the particular scroll depth on the specified pages. Goal conversions are listed at the very bottom of the dashboard.

If you'd like to learn more about what scroll depth is, what's a good metric to have, and more, you can check out our blog post [here](https://plausible.io/blog/scroll-depth-tracking).
