---
title: Dashboard FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Numbers not 'adding up'

It's common to see that the numbers in your dashboard aren't _adding up_. In the example below, there are 34 unique users in total but when you add together the unique users in the '**Top Pages**' report, it adds up to 52 users.

<img alt="Numbers not adding up" src={useBaseUrl('img/numbers-not-adding-up.png')} />

This happens because visitors can view more than a single page or trigger more than a single custom event on your site. Imagine a single visitor triggering two pageviews: `/page1` and `/page2`. In this case your Plausible dashboard would show 1 unique visitor in total. However, the '**Top Pages**' report would show one unique visitor for `/page1` and one unique visitor for `/page2`.

This is why adding up unique visitor numbers and comparing them to the total is misleading. Since visitors aren't limited to a single pageview or action on your site, you shouldn't expect these numbers to be equal.

There's another situation where differences might occur. If you manually tally the unique visitors for each day in a month, you may not get the same result as the number of unique visitors you see in the report for that month. This discrepancy is due to sessions that overlap with [our daily reset](https://plausible.io/data-policy#how-we-count-unique-users-without-cookies). Consider this: If someone visits your site 5 minutes before our daily reset and they continue being engaged with your site until 5 minutes after the reset, their session will count as one unique visitor on each of the two days. However, in the monthly view, that visitor will be counted as one unique visitor only.

## Does Plausible exclude known bots and spam traffic?

Plausible excludes bots, crawlers, referrer spam and other known non-human traffic by default. In [a test we ran](https://plausible.io/blog/server-log-analysis), we saw 18x more pageviews with server side tracking than with Plausible Analytics which shows the volume of spam traffic that Plausible excludes. 

A lot of this difference comes from the fact that client-side analytics such as Plausible only count visitors that run JavaScript. This is a decent proxy for "this is probably a real human using a web browser".

In addition to this, we exclude known bots by the User-Agent header, we filter out traffic from known referrer spam domains and data centers, and we also use our own algorithm to detect and exclude non-human traffic patterns.

## Does Plausible do data sampling?

Data sampling is the practice of analyzing a subset of all data to uncover the meaningful information in the larger data set. Most analytics tools including Google Analytics do data sampling for all their reports.

Plausible does not use any data sampling by default. We collect and store 100% of the data regardless of how many pageviews you have. The stats in your dashboard reflect 100% accurate data of what happens on your site.

However, on some dashboard views that have a lot of data such as those with more than 20 million pageviews, we apply limited data sampling to make the dashboard load as fast as possible.
