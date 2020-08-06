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

How long time visitors spend on your site. It only shows people who visit more than one page. For those who visit one page only we default to 0 seconds.

## Current Visitors

How many people are currently on your site. This includes all visitors who have loaded a page in the last 5 minutes. You can click on the number to see what pages they are viewing.

## Source

See all referral sources that are sending you traffic. A source is reported when a person clicks through to your site from another site.

## Referrer Drilldown

You can click on any source to drill-down and view the individual pages linking to your site and the traffic they've sent over time.

## Direct / None

Includes visitors who typed your URL into their browser or clicked a link in an email. It also includes other visitors who were [missing a referrer header](https://plausible.io/blog/referrer-policy). To minimize the amount of traffic that falls within the "Direct / None" category, you can [add these special query parameters to your links](manual-link-tagging.md).

## Entry Pages

Shows the first page people view on your site.

## Countries

Shows the list of countries your visitors are based in.

## Goals

You can use goals to track desired actions people take on your site. Goals can be based on people [visiting a particular page](pageview-goals.md) or [triggering a particular event](custom-event-goals.md) such as subscribing to a newsletter or signing up for an account.

## Converted Visitors

When a visitor converts for a particular goal they’ll be counted as a converted visitor. If the same goal is completed multiple times by the same visitor, it will only be counted as a single conversion.

## Conversion Rate

The percentage of visitors that take a desired action such as subscribing to a newsletter or signing up for an account.

## Screen Size

Shows the width of the screens used by your visitors. We measure the width of the browser window where your site is actually rendered rather than the full screen width. Anything under 576px screen size is considered a mobile device, up to 992px is considered a tablet, up to 1440px is considered a laptop and anything above 1440px is considered a desktop. Metrics are shown as a percentage of all visitors.

## Browser

Shows the browsers used by your visitors. We only show the brand of the browser and don’t include the version number or any other details. Metrics are shown as a percentage of all visitors.

## Operating System

Shows the operating systems used by your visitors. We only show the brand of the operating system and don’t include the version number or any other details. Metrics are shown as a percentage of all visitors.
