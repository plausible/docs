---
title: Top Sources
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Top Sources**" report shows which referral sources are driving traffic to your website. Click on the "details" button to see the visitors coming from "**Direct / None**" and also get extra insights such as visit duration by referral source. Click on any referral source to filter the dashboard by it.

The Top Sources report also includes all the traffic tagged with UTM tags such as `utm_source`, `utm_medium` and `utm_campaign`. You can use UTM tags to understand which marketing and promotional activities are working well and are driving traffic. 

The referral sources are counted only when they start a new session on your site. This prevents external domains such as a payment gateway that the user is being taken through to show up in the referrers list. No need for you to manually exclude referrers.

<img alt="Top Referrers" src={useBaseUrl('img/top-sources.png')} />

## How it works

There are two distinct ways that Plausible Analytics collects the referrer source for a visitor:

### 1. Automatic by the `referer` header

The `referer` header (the HTTP header is misspelled with one r for historical reasons) is the default and automated way of tracking referrer sources of web traffic. The `referer` header works well for the majority of cases but there are some limitations and fall-backs with using it for various historical and technical reasons. 

### "Direct / None" traffic without a referrer source

Not every request from a browser will have the referrer specified, and the `referer` header is not always accurate. Take a look at our blog post on the topic of [referrer header](https://plausible.io/blog/referrer-policy) for further details.

You can see your "**Direct / None**" referrer source if you click on the "**details**" button. This covers all the traffic where the referrer is not passed. These could be clicks from email, clicks from documents, clicks from messengers and other mobile apps, bookmarks, people typing in the URL directly into the browser and more. You may also know it as "**dark traffic**".

Here’s a non-exhaustive list of other problems with the header:

* Whenever someone is moving from `http` to `https` or vice versa, the `referer` header is dropped.

* Facebook `referer` only includes the fact that the visitor came from Facebook. Facebook never sends the post or comment ID where someone clicked.

* Twitter sets the referrer to their link shortener (t.co) so you can see the shortened link but not the actual tweet that brought the traffic. [We make the best effort](twitter.md) to find the tweets that visitors came from using the Twitter API and display those tweets in your dashboard. Click on "**Twitter**" to view these.

* Google does not include the search keywords in the referrer so you can see that the visitor is coming from Google search but you cannot see which keyword phrase they used to find you. To fix this, you can [integrate your account](google-search-console-integration.md) with Google Search Console so the keyword phrases people discover your site with show in your Plausible Analytics dashboard. After integrating with Search Console, you can click on "**Google**" to view these.

### 2. Manual by link tagging

To minimize the amount of traffic that falls within the "**Direct / None**" category, you can add special query parameters such as UTM tags to your links. `ref`, `source`, `utm_source`, `utm_medium` and `utm_campaign` query parameters are all valid and supported by Plausible Analytics.

See "[Manual link tagging](manual-link-tagging.md)" section of the documentation for the full instructions.
