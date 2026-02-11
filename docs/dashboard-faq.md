---
title: Dashboard FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Numbers not 'adding up'

It's common to see that the numbers in your dashboard aren't _adding up_. In the example below, there are 27 unique users in total but when you add together the unique users in the '**Top Pages**' report, it adds up to 51 users.

<img alt="Numbers not adding up" src={useBaseUrl('img/numbers-not-adding-up.png')} />

This happens because visitors can view more than a single page or trigger more than a single custom event on your site. Imagine a single visitor triggering two pageviews: `/page1` and `/page2`. In this case your Plausible dashboard would show 1 unique visitor in total. However, the '**Top Pages**' report would show one unique visitor for `/page1` and one unique visitor for `/page2`.

This is why adding up unique visitor numbers and comparing them to the total is misleading. Since visitors aren't limited to a single pageview or action on your site, you shouldn't expect these numbers to be equal.

There's another situation where differences might occur. If you manually tally the unique visitors for each day in a month, you may not get the same result as the number of unique visitors you see in the report for that month. This discrepancy is due to sessions that overlap with [our daily reset](https://plausible.io/data-policy#how-we-count-unique-users-without-cookies). Consider this: If someone visits your site 5 minutes before our daily reset and they continue being engaged with your site until 5 minutes after the reset, their session will count as one unique visitor on each of the two days. However, in the monthly view, that visitor will be counted as one unique visitor only.

## Unique visitors or Total visits greater than Pageviews on a minute-interval graph?

On minute-interval graphs (such as the realtime dashboard), we count visitors and sessions based on whether their session was active. However, pageviews are counted in each time bucket where they actually happened.

Let's bring a simple example to understand this. Imagine there was only a single visitor who:

* landed on your website on 12:00 (first pageview)
* spent 10 minutes viewing the first page
* navigated to another page on your website at 12:10 (second pageview)
* left your site

Now if we focus on a specific minute on the graph like 12:05, there were no pageviews, but there was a session active during that minute. This is where Plausible would report "Unique visitors" (and "Total visits") as 1, while "Pageviews" is 0. Therefore, the number of visitors and visits is always higher than pageviews when we start summing the numbers up in minute buckets.

Note that this doesn't affect graphs with an hourly (or greater) interval. A session is ended automatically with at least 30 minutes of inactivity. This guarantees that there cannot exist an hour where a session was active, but didn't send us any pageviews.

## Does Plausible exclude known bots and spam traffic?

Plausible excludes bots, crawlers, referrer spam and other known non-human traffic by default. In [a test we ran](https://plausible.io/blog/server-log-analysis), we saw 18x more pageviews with server side tracking than with Plausible Analytics which shows the volume of spam traffic that Plausible excludes. 

A lot of this difference comes from the fact that client-side analytics such as Plausible only count visitors that run JavaScript. This is a decent proxy for "this is probably a real human using a web browser".

In addition to this, we exclude known bots by the User-Agent header, we filter out traffic from known referrer spam domains and data centers, and we also use our own algorithm to detect and exclude non-human traffic patterns.

## Does Plausible do data sampling?

Data sampling is the practice of analyzing a subset of all data to uncover the meaningful information in the larger data set. Most analytics tools including Google Analytics do data sampling for all their reports.

Plausible does not use any data sampling by default. We collect and store 100% of the data regardless of how many pageviews you have. The stats in your dashboard reflect 100% accurate data of what happens on your site.

However, on some dashboard views that have a lot of data such as those with more than 10 million pageviews, we apply limited data sampling to make the dashboard load as fast as possible.

## Why don't I see my own visits?

If you've just installed Plausible and aren't seeing your own visits, there are a few common reasons:

- **WordPress plugin**: Our [official WordPress plugin](https://wordpress.org/plugins/plausible-analytics/) excludes logged-in admin visits by default. If the verification tool confirms the tracking is working, you have nothing to worry about.
- **Shields**: The [Shields feature](excluding.md) lets you block visits based on IP addresses, hostnames, countries or specific pages. Check whether you have any rules that might be excluding your own visits.
- **Adblockers**: If you're using a browser extension or network-level adblocker, it may be blocking the Plausible script. Consider setting up a [proxy](proxy/introduction.md) to serve the script as a first-party connection.

For more details, see our full [troubleshooting guide](troubleshoot-integration.md).

## How quickly will I see data after installing the script?

Data appears in real-time. As soon as the first visit is counted after installing the Plausible snippet, your dashboard will start displaying stats with no delays. If you see a blinking green dot instead of the dashboard, it means we haven't recorded any visits yet. Our testing tool will launch automatically to help you verify the installation.
