---
title: Dashboard FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Numbers not 'adding up'

It's common to see that the numbers in your dashboard aren't _adding up_. In the example below, there are 34 unique users in total but when you add together the unique users in the 'Top pages' report, it adds up to 52 users.

<img alt="Numbers not adding up" src={useBaseUrl('img/numbers-not-adding-up.png')} />

This happens because visitors can view more than a single page or trigger more than a single custom event on your site. Imagine a single visitor triggering two pageviews: `/page1` and `/page2`. In this case your Plausible dashboard would show 1 unique visitor in total. However, the 'Top pages' report would show one unique visitor for `/page1` and one unique visitor for `/page2`.

This is why adding up unique visitor numbers and comparing them to the total is misleading. Since visitors aren't limited to a single pageview or action on your site, you shouldn't expect these numbers to be equal.

## Does Plausible exclude known bots and spam traffic?

Plausible excludes bots, crawlers and other known non-human activity by default. In [a test we ran](https://plausible.io/blog/server-log-analysis), we saw 18x more page views with server side tracking than with Plausible Analytics which shows the volume of spam traffic that Plausible excludes. 

Most of this difference comes from the fact that client-side analytics such as Plausible only count visitors that run JavaScript. This is a decent proxy for "this is probably a real human using a web browser". 

In addition to this, we exclude known bots by the User-Agent header and we filter out known referrer spam domains too.

## Does Plausible do data sampling?

Data sampling is the practice of analyzing a subset of all data to uncover the meaningful information in the larger data set. Most analytics tools including Google Analytics do data sampling for all their reports.

Plausible does not do any data sampling by default. The stats in your dashboard show 100% accurate data of what happens on your site.

On some dashboard views that have a lot of data such as those with more than 20 million pageviews, we do limited data sampling to make the dashboard load as fast as possible. There will be a clear note in your dashboard when you're viewing a report with sampled data.

Note that we do collect and store 100% of the data no matter how many page views you have. Our stats API is completely unsampled so if you need 100% unsampled data for longer time ranges, you can use [our stats API](stats-api.md).
