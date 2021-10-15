---
title: All metrics and their definitions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Unique Visitors

The number of people who visited your site. We are privacy friendly so we don't use cookies and other persistent identifiers. If a person visits from multiple devices or on multiple days, they are counted as separate visitors. You can learn more about [how we count unique visitors](https://plausible.io/data-policy).

## Total Pageviews

The total number of times your pages were loaded by your visitors.

## Bounce Rate

The percentage of visitors with a single page view. A visitor "bounces" away and leaves your site after only viewing a single page. 

## Visit Duration

How long time visitors spend on your site. It only shows people who visit more than one page. For those who visit one page only we default to 0 seconds. Average visit duration is the sum of all session lengths divided by the number of sessions, which includes the 0 second visits (bounces).

Session is a set of actions that a user takes on your site. A session is started when a visitor first lands on your page and ended when no action is taken on your site for 30 minutes.

## Current Visitors

How many people are currently on your site. This includes all visitors who have loaded a page in the last 5 minutes. You can click on the number to see what pages they are viewing.

## Source

See all referral sources that are sending you traffic. A source is reported when a person clicks through to your site from another site.

## Referrer Drilldown

You can click on any source to drill-down and view the individual pages linking to your site and the traffic they've sent over time.

## Direct / None

Includes visitors who typed your URL into their browser or clicked a link in an email. It also includes other visitors who were [missing a referrer header](https://plausible.io/blog/referrer-policy).

## UTM parameters

To minimize the amount of traffic that falls within the "Direct / None" category, you can add special query parameters (UTMs) to your links. UTMs help you better understand where your traffic is coming from. Plausible Analytics supports `utm_source`, `utm_medium` and `utm_campaign`. Read more about [tagging your links](manual-link-tagging.md).

## Time on Page

Time on Page shows the time people spend on average on a particular page on your site. Time on page is calculated as the difference between the point when a person lands on a particular page and when they move on to the next page.

## Entry Pages

Shows the first page people view on your site.

## Exit Pages

Shows the last page people view on your site.

## Exit Rate

Shows how often people exit from a specific page. It's calculated as the number of exits divided by the number of total pageviews for that specific page.

## Countries

Shows the list of countries your visitors are based in.

## Goals

You can use goals to track desired actions people take on your site. Goals can be based on people [visiting a particular page](pageview-goals.md) or [triggering a particular event](custom-event-goals.md) such as subscribing to a newsletter or signing up for an account. You can even use custom properties to create your own metrics to collect and analyze data that Plausible doesn’t automatically track. 

## Outbound Link Clicks

Automatically track the number of clicks on the external links. This feature is not enabled by default so you need to [follow these steps](outbound-link-click-tracking.md) to enable it for sites where you want to track clicks on external links.

## 404 Error Pages

Automatically track the 404 error pages on your site. This feature is not enabled by default so you need to [follow these steps](404-error-pages-tracking.md) to enable it for sites where you want to track 404 error pages.

## Unique Conversions

When a visitor converts for a particular goal they’ll be counted as a unique conversion.

## Total Conversions

If the same goal is completed multiple times by the same visitor, all the completed conversions will be counted within the total conversions.

## Conversion Rate

The percentage of visitors that take a desired action such as subscribing to a newsletter or signing up for an account. Calculated as follows:
unique conversions for a goal / unique visitors, where both values depend on the filters applied to the dashboard. 

## Screen Size

Shows the width of the screens used by your visitors. We measure the width of the browser window where your site is actually rendered rather than the full screen width. Anything under 576px screen size is considered a mobile device, up to 992px is considered a tablet, up to 1440px is considered a laptop and anything above 1440px is considered a desktop. Metrics are shown as the total number of unique visitors and as a percentage of all visitors.

## Browser

Shows the browsers used by your visitors. We only show the brand of the browser and when you click on the brand you can see the version number too. Metrics are shown as a percentage of all visitors and the total number of unique visitors.

## Operating System

Shows the operating systems used by your visitors. We show the brand of the operating system and when you click on the brand you can see the version numbers too. Metrics are shown as the total number of unique visitors and as a percentage of all visitors.

You can read more about how you can use these metrics to [measure your website's or startup's progress and make better decisions](https://plausible.io/blog/analytics-metrics-definitions).
