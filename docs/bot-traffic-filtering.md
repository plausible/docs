---
title: Bot and spam traffic filtering
---

Plausible automatically filters out bots, crawlers, referrer spam and other non-human traffic. Our filtering systems block approximately 2 billion bot visits per month across our network, on top of the bots that never trigger the script at all because they don't execute JavaScript.

## What Plausible filters automatically

We use multiple layers to filter non-human traffic:

- **User-Agent filtering.** We block known bots and crawlers by their User-Agent header, including search engine crawlers, scrapers and monitoring tools.
- **Referrer spam filtering.** We filter out traffic from known referrer spam domains.
- **Data center IP filtering.** We filter traffic from approximately 32,000 known data center IP ranges commonly used by bots and automated tools.
- **Traffic pattern detection.** We use our own algorithm to detect and exclude unnatural traffic patterns that don't match human browsing behavior.

In [a server log comparison we ran](https://plausible.io/blog/server-log-analysis), we saw 18x more pageviews in server logs than in Plausible, which illustrates how much non-human traffic Plausible excludes. In a [separate test comparing Plausible to Google Analytics](https://plausible.io/blog/testing-bot-traffic-filtering-google-analytics), we ran three bot traffic scenarios against both tools. GA4 recorded all of them as legitimate traffic. Plausible rejected all three.

## Why you might still see some bot traffic

No filter is perfect. Bots emerge constantly and there is always a gap between when a new bot appears and when we identify and block it. If you see a sudden spike from an unfamiliar source with a very high bounce rate and short session duration, it may be bot traffic we haven't classified yet.

## What you can do

- **Block by IP, hostname or country.** Use [Shields](excluding.md) to block visits from specific IP addresses, hostnames or countries from being recorded.
- **Filter by page.** Use [page exclusions](excluding-pages.md) to exclude specific URLs from your stats.
- **Filter your dashboard view.** Use [filters and segments](filters-segments.md) to narrow down traffic when analyzing your data.

## How Plausible improves bot filtering over time

We continuously monitor incoming traffic patterns. When we identify new sources of non-human traffic or trends that look automated, we update our filtering rules. The filtering improves over time without any action needed on your end.

If you notice something in your dashboard that looks like unfiltered bot traffic, [contact us](https://plausible.io/contact) with the dates, source and any patterns you've noticed. We'll investigate and update our filters if needed.
