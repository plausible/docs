---
title: Bot and spam traffic filtering
description: "Plausible automatically filters bots, crawlers, referrer spam and data center traffic, blocking around 2 billion bot visits per month with no configuration needed."
---

Plausible automatically filters out bots, crawlers, referrer spam and other non-human traffic. Our filtering systems block approximately 2 billion bot visits per month across our network, on top of the bots that never trigger the script at all because they don't execute JavaScript.

## What Plausible filters automatically

We use multiple layers to filter non-human traffic:

- **User-Agent filtering.** We block known bots and crawlers by their User-Agent header, including search engine crawlers, scrapers and monitoring tools.
- **Referrer spam filtering.** We filter out traffic from known referrer spam domains.
- **Data center IP filtering.** We filter traffic from approximately 32,000 known data center IP ranges commonly used by bots and automated tools.
- **Traffic pattern detection.** We use our own algorithm to detect and exclude unnatural traffic patterns that don't match human browsing behavior.

In [a server log comparison we ran](https://plausible.io/blog/server-log-analysis), we saw 18x more pageviews in server logs than in Plausible, which illustrates how much non-human traffic Plausible excludes. In a [separate test comparing Plausible to Google Analytics](https://plausible.io/blog/testing-bot-traffic-filtering-google-analytics), we ran three bot traffic scenarios against both tools. GA4 recorded all of them as legitimate traffic. Plausible rejected all three.

## VPN users and bot filtering

Most visitors using VPNs or Tor are tracked normally. When a visit comes through a VPN or Tor network, it typically appears under the "Anonymous VPN Service" entry in the [Countries report](countries.md).

However, some VPN IP addresses fall within ranges we classify as data center infrastructure. When that happens, those visits are filtered out along with automated traffic from the same ranges. Distinguishing between a real visitor using a VPN and automated traffic from a data center is difficult at the IP level.

This is a tradeoff of aggressive bot filtering. It keeps automated traffic out of your stats but can occasionally result in some VPN visits not being recorded.

## Why you might still see some bot traffic

No filter is perfect. Bots emerge constantly and there is always a gap between when a new bot appears and when we identify and block it. If you see a sudden spike from an unfamiliar source with a very high bounce rate and short session duration, it may be bot traffic we haven't classified yet.

## Investigating a suspicious traffic spike

If you see an unexpected spike in your dashboard, run through these steps to confirm whether it is bot traffic and block it.

### 1. Check bounce rate and session duration

Apply a [filter](filters-segments.md) to isolate the traffic source, country or page that spiked. Bot traffic almost always shows a near-100% bounce rate and zero or near-zero session duration. If the filtered view shows normal engagement metrics, the traffic is more likely real.

### 2. Identify the source

Look at the **Sources** tab to see where the spike is coming from. Common patterns for bot traffic:

- A single referrer domain you don't recognise
- Direct traffic spiking with no accompanying change in referral or search traffic
- A specific country sending a sudden burst with no prior history

### 3. Check the entry pages

Look at the **Pages** tab filtered to the spike period. Bots often hit a single page repeatedly or target unusual paths like `/wp-admin`, `/xmlrpc.php` or random URL strings.

### 4. Block it using Shields

Once you have identified the source, use [Shields](excluding.md) to stop it being recorded:

- **By country**: if the traffic is concentrated in one country you don't operate in, block that country
- **By hostname**: if a specific hostname or referrer domain is the source, block it
- **By IP address**: if the traffic is coming from a known IP or range, block that IP
- **By page**: if only specific pages are being hit, use [page exclusions](excluding-pages.md)

Shields rules take effect immediately and apply going forward. They do not remove historical data already recorded.

### 5. Contact us if the pattern continues

If you have applied Shields rules and the traffic continues, or if the spike is large enough to affect your subscription tier, [contact us](https://plausible.io/contact) with the dates, source and any patterns you've noticed. We'll investigate and update our filters if needed.

## What you can do

- **Block by IP, hostname or country.** Use [Shields](excluding.md) to block visits from specific IP addresses, hostnames or countries from being recorded.
- **Filter by page.** Use [page exclusions](excluding-pages.md) to exclude specific URLs from your stats.
- **Filter your dashboard view.** Use [filters and segments](filters-segments.md) to narrow down traffic when analyzing your data.

## How Plausible improves bot filtering over time

We continuously monitor incoming traffic patterns. When we identify new sources of non-human traffic or trends that look automated, we update our filtering rules. The filtering improves over time without any action needed on your end.

If you notice something in your dashboard that looks like unfiltered bot traffic, [contact us](https://plausible.io/contact) with the dates, source and any patterns you've noticed. We'll investigate and update our filters if needed.
