---
title: All metrics and their definitions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## 404 Error Pages

Automatically track the 404 error pages on your site. This feature isn't enabled by default so you need to [follow these steps](error-pages-tracking-404.md) to enable it for sites where you want to track 404 error pages.

## Average Revenue

The average revenue of orders tracked. This is a part of the [revenue attribution tracking](ecommerce-revenue-tracking.md).

## Bounce Rate

The percentage of visitors with a single page view. A visitor "bounces" away and leaves your site after only viewing a single page.

If you have issues with high bounce rates on your site, you can try to set up some [custom events](custom-event-goals.md). Custom events are by default considered interactive and will count towards the bounce rate.

## Browser

Shows the browsers used by your visitors. We only show the brand of the browser and when you click on the brand you can see the version number too. Metrics are shown as a percentage of all visitors and the total number of unique visitors.

## Channels

Channels show a breakdown of your traffic sources categorized into high-level groups such as "Organic Social", "Paid Search" and "Email". Learn more [here](top-referrers.md).

## Conversion Rate (or CR)

The percentage of visitors that take a desired action such as subscribing to a newsletter or signing up for an account. Calculated as follows: unique conversions for a goal / unique visitors, where both values depend on the filters applied to the dashboard.

## Custom Properties (or Custom Dimensions)

You can attach custom data when sending pageviews and custom events in order to create custom metrics. Learn more [here](/custom-props/introduction)

## Current Visitors

The number of people currently on your site. This metric does not depend on the filters applied to the dashboard. It includes all visitors who have loaded a page in the last 5 minutes. You can click on the number to see what pages they are viewing.

## Direct / None

Includes visitors who typed your URL into their browser or clicked a link in an email. It also includes other visitors who were [missing a referrer header](https://plausible.io/blog/referrer-policy).

## Entry Pages

Shows the first page people view on your site.

## Exit Pages

Shows the last page people view on your site.

## Exit Rate

Shows how often people exit from a specific page. It's calculated as the number of exits divided by the number of total pageviews for that specific page.

## File Downloads

Automatically track the number of file downloads. This feature isn't enabled by default so you need to [follow these steps](file-downloads-tracking.md) to enable it for sites where you want to track clicks on files.

## Funnels

You can follow the visitor journey from a landing page to a conversion with [funnel analysis](funnel-analysis.md).

## Goals (or Events)

You can use goals to track desired actions people take on your site. Goals can be based on people [visiting a particular page](pageview-goals.md) or [triggering a particular event](custom-event-goals.md) such as subscribing to a newsletter or signing up for an account. You can even use custom properties to create your own metrics to collect and analyze data that Plausible doesn’t automatically track.

## Locations

Shows the list of countries, regions and cities your visitors are based in.

## (Not set)

When it is not possible to identify a specific metric such as a browser name, we will group those visits under the `(not set)` entry in our reports. Chances are you won't see this entry in your reports as it stands for a very tiny percentage of all traffic.

## Operating System

Shows the operating systems used by your visitors. We show the brand of the operating system and when you click on the brand you can see the version numbers too. Metrics are shown as the total number of unique visitors and as a percentage of all visitors.

## Outbound Link Clicks

Automatically track the number of clicks on the external links. This feature isn't enabled by default so you need to [follow these steps](outbound-link-click-tracking.md) to enable it for sites where you want to track clicks on external links.

## Referrer Drilldown

You can click on any source to drill-down and view the individual pages linking to your site and the traffic they've sent over time.

## Screen Size

Shows the devices used by your visitors. Devices are categorized into desktop, mobile or tablet. This is derived from the User-Agent HTTP header. The full User-Agent is discarded. Metrics are shown as the total number of unique visitors and as a percentage of all visitors.

## Scroll Depth

Measures how far visitors scroll down a webpage. It represents the percentage of a page’s total height that visitors have reached on average. You can learn how we calculate it [here](http://plausible.io/docs/scroll-depth).

## Source

See all referral sources that are sending you traffic. A source is reported when a person clicks through to your site from another site.

## Time on Page

The average amount of time spent per visitor viewing a particular page on your site.

Similar to scroll depth, this metric relies on `engagement` events being sent by our tracking script for every pageview when the user navigates to a new page or switches tabs. This allows us to provide you with a more precise and reliable measure of user engagement which includes visitors who bounce away from your pages and which does not include time not spent actively on your pages.

<details>
<summary>Legacy time on page metric</summary>

Prior to a tracker script upgrade in March 2025, we used a different method to calculate time on page, instead relying on timestamp of each `pageview` event. This method was both prone to over-estimating time spent on a page and was unable to provide measurements on pages where visitors bounced.

For dates prior to the new tracker upgrade, the legacy time on page metric is displayed along with a note in the tooltip.
</details>

## Total Conversions

If the same goal is completed multiple times by the same visitor, all the completed conversions will be counted within the total conversions.

## Total Pageviews

The total number of times your pages were loaded by your visitors.

## Total Revenue

The total revenue of orders tracked. This is a part of the [revenue attribution tracking](ecommerce-revenue-tracking.md).

## UTM parameters

To minimize the amount of traffic that falls within the "Direct / None" category, you can add special query parameters (UTMs) to your links. UTMs help you better understand where your traffic is coming from. Plausible Analytics supports `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`. Read more about [tagging your links](top-referrers.md).

## Unique Conversions

When a visitor converts for a particular goal they’ll be counted as a unique conversion.

## Unique Visitors

The number of people who visited your site. We are privacy-friendly so we don't use cookies and other persistent identifiers. If a person visits from multiple devices or on multiple days, they are counted as separate visitors. You can learn more about [how we count unique visitors](https://plausible.io/data-policy).

## Views Per Visit (or Pages / Session)

Views per visit (also known as Pages per session) shows the average number of pageviews per visit. Repeated views of a single page are included too.

## Visit Duration

The amount of time visitors spend on your site. It only shows people who visit more than one page. For those who visit one page only we default to 0 seconds. Average visit duration is the sum of all session lengths divided by the number of sessions, which includes the 0 second visits (bounces).

If you have issues with high bounce rates on your site, you can try to set up some [custom events](custom-event-goals.md). Custom events are by default considered interactive and will count towards bounce rate and visit duration too.

## Total Visits (or Sessions)

A session (also known as a visit) is a set of actions that a user takes on your site. A visit is started when a visitor first lands on your page and ends when no action is taken on your site for 30 minutes.

You can read more about how you can use these metrics to [measure your website's or startup's progress and make better decisions](https://plausible.io/blog/analytics-metrics-definitions).
