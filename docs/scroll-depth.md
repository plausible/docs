---
title: Scroll depth tracking
---

Scroll depth tracking is built into Plausible Analytics by default, allowing you to measure how far visitors scroll down your pages, expressed as a percentage.

This data provides insights into user engagement and helps optimize content placement, calls-to-action (CTAs), and page layouts.

## How scroll depth tracking works in Plausible

### Measured at all depths

Plausible tracks scrolling at all percentages (1% to 100%), unlike many other tools that limit tracking to specific points such as 25%, 50%, and 75%.

### Available with the pages data

You can find scroll depth data in:

1.  **The top row of metrics** when a page filter is applied. Click on it to see trends over time.

2.  **The expanded Top Pages report**, where pages can be sorted by scroll depth for deeper analysis.

If there's insufficient data, scroll depth will display as "-" until more traffic is recorded.

You can also use the Filters feature to group similar pages and analyze their average scroll depth. For example, filter URLs containing "blog" to see average engagement for blog posts.

### How we calculate scroll depth

Scroll depth is calculated as the maximum scroll depth reached by an average user on a specific page. For example, if a user visits a page multiple times and scrolls to different depths (25%, 60%, 10%), their maximum depth is 60%. The final value is based on the maximum average depth of all users.

## Page scroll goals

You can also define a `scroll_threshold` when creating a [pageview goal](https://plausible.io/docs/pageview-goals) to see how many visitors scroll below your desired scroll depth mark.

Once set up, you will be able to filter and break down page scroll goals like any other goals on the dashboard.
