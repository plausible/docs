---
title: Introduction to the dashboard
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible Analytics is built with simplicity and speed in mind. There is no navigational menu. There are no additional sub-menus. There is no need to create custom reports. You get one simple and useful web analytics dashboard out of the box.

Rather than tracking every metric imaginable, many of them that you will never find a use for, Plausible Analytics focuses on the essential website stats only. It's easy to use and understand with no training or prior experience.

Here’s what you can discover on your Plausible dashboard. You can also explore our [live demo](https://plausible.io/plausible.io) where you can see the actual traffic of our website.

## Top Graph

<img alt="Top Graph" src={useBaseUrl('img/top-graph.png')} />

See the number of unique visitors, total visits (sessions), total page views, views per visit, the bounce rate (the percentage of sessions that had one page view only) and the visit duration. You can **click on a particular metric to display it in the top graph**.

You can **choose a different time range** that you want to analyze in the date picker in the top right. The visitor numbers are automatically presented on the graph. The time format (24-hour or 12-hour am/pm) for the top graph timelines is displayed automatically based on your browser's defined language.

We get all the favicons (your site favicon and the favicons of all the referral sources) directly from the DuckDuckGo API. We display the same icon that DuckDuckGo shows in their search results.

:::tip Click on the site name in the top left side of the dashboard
Here you can enter "[Site Settings](website-settings.md)" but also switch to a different [pinned site](landing-page.md#access-your-pinned-sites-from-the-site-switcher-list) that you have added to your Plausible account
:::

## Set a different chart interval

You can **set a different unit of time the stats on the chart are grouped by** in the top right of the chart itself. The available interval options depend on the date range you've selected. For example, if you select "Today", you can display the stats by minute or by hour. 

<img alt="Today intervals in top graph" src={useBaseUrl('img/intervals-minutes-hours.png')} />

Or if you select "Last 30 days", you can display the stats by day or by week. You can display the stats by days, weeks or months if you choose a wider timeframe. 

<img alt="Last 30 days intervals in top graph" src={useBaseUrl('img/intervals-days-weeks-months.png')} />

## Compare your stats over time

You can also **compare your stats over time**. Our comparison feature allows you to analyze stats of a specified date range and compare them to another period. "Previous period", "Year over year" and "Custom period" comparisons are all available. You can also match by day of the week to avoid any discrepancies caused by the weekend. 

<img alt="Compare your stats over time" src={useBaseUrl('img/compare-your-stats-over-time.png')} />

Select "Compare" in the date picker or press the "X" key on your keyboard to enable the comparison feature. Learn more on [how the comparison works here](compare-stats.md).

<img alt="Date picker for the compare feature" src={useBaseUrl('img/date-picker-compare-feature.png')} />

## Realtime dashboard

By clicking on the number of "**current visitors**" (defined as those that visited the site in the last 5 minutes) or by selecting "**Realtime**" in the date picker in the top right, you can see the realtime dashboard that tells you what's happening on your site live in that moment. 

The realtime dashboard also includes a pageview graph for the last 30 minutes. It's updated every 30 seconds so you don’t have to refresh it to stay up to date.

[Learn more about the realtime dashboard here](realtime-dashboard.md).

## Filtering

You can go granular and click on any of the entries in any of the reports to filter your Plausible dashboard by it. You can mix and match filters too. This is an easy way for you to segment your audience. For instance you can drill down to see traffic coming from a specific marketing campaign to a specific landing page over time.

You can also use the "**Filter**" button on the top of your dashboard which gives you extra functionality. It allows you to filter the dashboard by multiple sources, countries, pages and more, all at once. You can also search for any metric, exclude segments of your audience and group pages with options such as "**is not**", "**contains**" and "**does not contain**". [Learn more about filtering here](filters-segments.md).

<img alt="Top Sources - multiple filters" src={useBaseUrl('img/guided-tour-filtering-multiple-filters.png')} />

## Detailed metrics and Sorting

You can click the "**Details**" button at the bottom of any report to get an expanded view and see the full list with additional metrics such as "**Visitors**", "**Bounce Rate**", "**Visit Duration**", "**Scroll Depth**", "**Unique Conversions**", "**Total Conversions**", "**Conversion Rate**" and more all depending upon the type of the report.

You can sort any report by such performance metrics by clicking on any metric heading to sort and arrange your data in ascending or descending order.

## Top Sources

See all the acquisition channels and sources of traffic ranked by the number of unique visitors. You can click on the "**Details**" button to see the full list which also includes additional metrics such as the bounce rate and visit duration of the individual referral.
 
You can use the "**Campaigns**" dropdown section in the Top Sources report to view your campaigns separately from other traffic sources. These are visitors coming from UTM tagged links such as those in your emails, social media or in your paid advertising campaigns. Click on "**Medium**", "**Source**", "**Campaign**", "**Term**" and "**Content**" to explore these. 

Note that the referral sources including UTM and other query parameters are counted only when they start a new session on your site.

[Read more here](top-referrers.md).

## Top Pages

See all the most visited pages on your site ranked by the number of unique visitors. You can click on the "**details**" button to see the full list with additional metrics. The number of pageviews, bounce rate, time on page and scroll depth for the individual pages are included too.

You can also get insights into the visitor flow by looking at the "**Entry pages**" and "**Exit pages**". Click on the "**details**" button to see the full list with additional metrics. For "**Entry pages**" details include visit duration for visits that started on a specific page and for "**Exit pages**" details include the exit rate percentage. [Read more here](top-pages.md).

:::tip Looking for the definitions of the metrics you have access to?
[See this list](metrics-definitions.md)
:::

## Locations

See the list of countries, regions and cities your traffic is coming from. You can click on the "**details**" button to see the full list ranked by the number of visitors. [Read more here](countries.md).

:::tip Want a quicker way to navigate the dashboard?
You can use the keyboard shortcuts to do so. Here's [the full list of shortcuts we support](keyboard-shortcuts.md)
:::

## Devices

You can see the device, browser and operating system your visitors are using. Click on the individual browser or operating system to drill down and see browser versions and OS versions too. [Read more here](devices.md).

## Goals, properties and funnels

<img alt="Goal Conversions" src={useBaseUrl('img/dashboard-goal-conversions.png')} />

You can track events and goals to identify the number of unique converted visitors, the total number of conversions, the conversion rate, and the referral sites that send the traffic that converts the best. You can assign dynamic monetary values to goals and custom events to track revenue attribution. We also have an automated way to track 404 error pages, external link clicks and file downloads.

By sending custom properties alongside custom events or pageviews, you can create your own metrics to collect and analyze data that Plausible doesn’t automatically track.

And you can follow the visitor journey from a landing page to a conversion with our multi-step funnel analysis. 

[You can read more about events, properties and funnels here](goal-conversions.md).
