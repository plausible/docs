---
title: Acquisition channels, referral sources and paid campaigns 
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Top Sources**" report shows acquisition channels, referral sources and marketing campaigns that drive traffic to your website. This helps you understand your best converting promotional activities.

Click on any individual entry to filter the dashboard by it. Click the "**Details**" button to get extra insights such as the visit duration and bounce rate for the individual entry. Click on any metric heading in the "**Details**" view to sort and arrange your data in ascending or descending order.

Using [the "**Filter**" button on the top of your dashboard](filters-segments.md), you can filter the stats by multiple channels, sources or UTM tags at the same time for more powerful segmenting of traffic. It's also possible to filter out traffic from a specific channel, referral source or UTM tag.

<img alt="Top Referrers - multiple filters" src={useBaseUrl('img/top-referrers-filtering-multiple-filters.png')} />

## Acquisition channels

In the "**Channels**" tab, you can see a breakdown of your sources into high-level categories such as "**Organic Social**" and "**Paid Search**". This allows you to segment your traffic between organic traffic and paid marketing campaigns.

## Referral sources

In the "**Sources**" tab, you can see the full list of your traffic sources.

Note that browsers now only send the domain name of the referrer and not the actual URL. If `thatblog.com/one-post/` sends you visitors, you will see `thatblog.com` in your sources list but won’t be able to see the exact post URL itself. [See more here](https://plausible.io/blog/referrer-policy).

And know also that referral sources are counted only when they start a new session on your site. This is why you may not see all sources of your own visits if you click to test several different links at the same time. You would need to start a new session by using a different browser, IP address or device for the additional sources to be included in the report. This prevents external domains such as payment gateways showing up in the list of sources.

### Consolidation of sources

UTM tags are case sensitive which may lead to traffic sources being duplicated or miscategorized. To mitigate this issue, the "**Sources**" tab in the "**Top Sources**" report consolidates each source into a single entry, disregarding capitalization or naming differences in UTM tags.

For instance, clicks that you get from Facebook which are not tagged by UTMs are labeled with a referral source "**Facebook**" by Facebook itself. If you tag some links that you share on Facebook with utm_source=facebook, utm_source=fb or utm_source=facebook-ads, clicks on those links will be consolidated alongside organic clicks in the "**Facebook**" entry in the “**All**” tab of your "**Top Sources**" report providing a unified view of all Facebook clicks.

You can still isolate your UTM tagged clicks from organic traffic and view their original labels in the "**Campaigns**" tab of "**Top Sources**".

### Keyword phrases from Google search

Note that Google does not include the search keywords in the referrer. This means that you can see that the visitor is coming from Google search but you can't see which keyword phrase they used to find you. 

To fix this, you can integrate your Plausible account [with Google Search Console](google-search-console-integration.md) so that the keyword phrases people discover your site with show in your Plausible dashboard. After integrating with Search Console, you can click on the "**Google**" entry in the "**Top Sources**" report to view these keyword phrases.

## Paid marketing campaigns 

In the "**Campaigns**" tab, you can see the traffic tagged with UTM tags.

To isolate your UTM tagged clicks from the organic clicks, you can segment the traffic by using the "**UTM Medium**", "**UTM Source**", "**UTM Campaign**", "**UTM Content**" and "**UTM Term**" reports within the "**Campaigns**" tab.

## How to reduce the volume of dark traffic

Not all traffic to your website will have the referrer header specified in the browser. This "**dark traffic**" is why you see the "**Direct / None**" source in the "**Top Sources**" report. These are typically clicks from emails, documents, instant messengers, mobile apps or bookmarks.

By default, we attempt to uncover traffic originating from Android apps which is traditionally categorized as direct traffic in web analytics. The volume of "**android-app**" entries in your "**Top Sources**" report will vary based on your site and audience.

To minimize the amount of traffic that falls within the "**Direct / None**" category, you can add special query parameters such as UTM tags to your links whenever you post a link in social media, paid advertising or an email newsletter. `ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` query parameters are all valid and supported by Plausible.

Tagging links helps you better track your marketing campaigns and see which campaigns are responsible for most conversions. Here's an example of how to tag your links: `yourdomain.com?utm_source=Newsletter&utm_medium=Email&utm_campaign=NovemberNewsletter&utm_content=Link`

For any clicks on the above link, "**Newsletter**" would be listed as a referral source in your Plausible dashboard, "**Email**" would be listed as the medium, "**NovemberNewsletter**" would be listed as the campaign and "**Link**" would be listed as the content. 

Read more about "[how to use UTM parameters to track your campaigns and understand the dark traffic](https://plausible.io/blog/utm-tracking-tags)".

## Custom events and conversion attribution 

Goals and custom events allow you to track actions that you want your visitors to take on your site. Actions such as registering for a trial account, purchasing a product or completing a checkout form of an ecommerce store.

<img alt="Conversion rate" src={useBaseUrl('img/conversion-rate.png')} />

By [setting up goals and custom events](goal-conversions.md), you can track the number of conversions, conversion rate, referrer sources and entry pages that are driving conversions and the top pages that people convert on. You can also track [ecommerce revenue](ecommerce-revenue-tracking.md). And you can [set up funnels](funnel-analysis.md) to track the user journey too.

<img alt="Custom goal conversion rate" src={useBaseUrl('img/custom-goal-conversion-rate.png')} />

Click on any specific referral source in your dashboard to see the number of conversions and the conversion rate (CR) of that referral source for any of your goals. You can also click on any goal in your dashboard to see the number of conversions and the conversion rate of that specific goal coming from any referral source or any landing page. This works even if your site operates [across multiple subdomains](subdomain-hostname-filter.md).

Due to the privacy-first nature of our product and the fact that we don't use cookies and other long term identifiers, the conversion attribution in Plausible is based on last click attribution. The referral source of the visit on which the purchase was made will be credited for that conversion. 
