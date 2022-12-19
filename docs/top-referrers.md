---
title: Top Sources
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Top Sources**" report shows which referral sources are driving traffic to your website. Click on the "**Details**" button to get extra insights such as visit duration by referral source. Click on any referral source to filter the dashboard by it.

The Top Sources report also includes all the traffic tagged with UTM tags such as `utm_source`, `utm_medium` and `utm_campaign`. You can use UTM tags to understand which marketing and promotional activities are working well and are driving traffic. 

:::note 
All referral sources are counted only when they start a new session on your site. This is why you don't see all your own visits if you click to test several different UTM tagged links at the same time
:::

The fact that the referral sources are counted only when they start a new session on your site prevents external domains such as a payment gateway that the user is being taken through to show up in the referrers list. No need for you to manually exclude referrers.

<img alt="Top Referrers" src={useBaseUrl('img/top-sources.png')} />

## How it works

There are two distinct ways that Plausible Analytics collects the referrer source for a visitor:

### 1. Automatic by the `referer` header

The `referer` header (the HTTP header is misspelled with one r for historical reasons) is the default and automated way of tracking referrer sources of web traffic. The `referer` header works well for the majority of cases but there are some limitations and fall-backs with using it for various historical and technical reasons.

Note that all the major browsers have stopped sending the detailed info on [referral sources](https://plausible.io/blog/referrer-policy). Chrome, Safari and Firefox now only send the full domain name of the referrer and not the actual URL. This affects all analytics services including Plausible. It means that if `thatblog.com/one-post/` sends you visitors, you will see `thatblog.com` in your referral sources list but won’t be able to see the exact post URL itself.

### "Direct / None" traffic without a referrer source

Not every request from a browser will have the referrer specified, and the `referer` header isn't always accurate. Take a look at our blog post on the topic of [referrer header](https://plausible.io/blog/referrer-policy) for further details.

You can see your "**Direct / None**" referrer source if you click on the "**details**" button. This covers all the traffic where the referrer isn't passed. These could be clicks from email, clicks from documents, clicks from messengers and other mobile apps, bookmarks, people typing in the URL directly into the browser and more. You may also know it as "**dark traffic**".

Here’s a non-exhaustive list of other problems with the header:

* Whenever someone is moving from `http` to `https` or vice versa, the `referer` header is dropped.

* Facebook `referer` only includes the fact that the visitor came from Facebook. Facebook never sends the post or comment ID where someone clicked.

* Google does not include the search keywords in the referrer, so you can see that the visitor is coming from Google search, but you can't see which keyword phrase they used to find you. To fix this, you can [integrate your account](google-search-console-integration.md) with Google Search Console so the keyword phrases people discover your site with show in your Plausible Analytics dashboard. After integrating with Search Console, you can click on "**Google**" to view these.

### 2. Manual by link tagging

To minimize the amount of traffic that falls within the "**Direct / None**" category, you can add special query parameters such as UTM tags to your links. `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` query parameters are all valid and supported by Plausible Analytics.

See "[Manual link tagging](manual-link-tagging.md)" section of the documentation for the full instructions.
