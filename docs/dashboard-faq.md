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

Most of this difference comes from the fact that client-side analytics such as Plausible only count visitors that run JavaScript. This is a decent proxy for "this is probably a real human using a web browser". In addition to this, we also exclude bots by the User-Agent header.
