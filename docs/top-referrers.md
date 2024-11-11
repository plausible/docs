---
title: Acquisition channels, referral sources and paid campaigns 
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Top Sources**" report shows acquisition channels, referral sources and marketing campaigns that drive traffic to your website. This information helps you understand your best converting paid campaigns and other promotional activities.

Click on any individual entry within the "**Top Sources**" report to segment your audience by it. Click the "**Details**" button to get extra insights such as the visit duration and bounce rate for the individual entry. Click on any metric heading in the "**Details**" view to sort and arrange your data in ascending or descending order.

Using [the "**Filter**" button on the top of your dashboard](filters-segments.md), you can filter the stats by multiple channels, sources or UTM tags at the same time for more powerful traffic segmentation. You can also exclude traffic from a specific channel, referral source or UTM tag.

<img alt="Top Referrers - multiple filters" src={useBaseUrl('img/top-referrers-filtering-multiple-filters.png')} />

## Channels

In the "**Channels**" tab within the "**Top Sources**" report, you can see a breakdown of your sources into high-level categories such as "**Organic Social**" and "**Paid Search**". This allows you to segment your traffic between organic traffic and paid marketing campaigns. These are the definitions and descriptions of each channel available:

| Channel     | Definition        |
| :---------- | :---------------- |
| Organic Social           | List             |

Note that channel groupings and definitions may evolve as the market changes. We will keep this list up-to-date with any changes.

## Sources

In the "**Sources**" tab within the "**Top Sources**" report, you can see the full list of your individual referral sources.

Note that browsers only send the domain name of the referrer and not the actual URL. If `thatblog.com/one-post/` sends you visitors, you will see `thatblog.com` in your sources list but won’t see the exact post URL itself. [See more here](https://plausible.io/blog/referrer-policy).

Know also that referral sources are counted only when they start a new session on your site. This is why you may not see all sources of your visits if you click to test several different links simultaneously. You would need to start a new session by using a different browser, IP address or device for the additional sources to be included in the report. This prevents external domains such as payment gateways showing up in the sources list without you manually needing to exclude them.

### Consolidation of duplicate sources

UTM tags are case-sensitive, which may lead to duplicated or miscategorized traffic sources all depending on how the different links are tagged. To mitigate this issue, the "**Sources**" tab in the "**Top Sources**" report consolidates each source into a single entry, disregarding capitalization or naming differences in UTM tags.

For instance, clicks you get from Facebook which are not tagged by UTMs are labeled with a referral source "**Facebook**" by Facebook itself. Suppose you tag some links that you share on Facebook with `utm_source=facebook`, `utm_source=fb` or `utm_source=facebook-ads`. In that case, clicks on those tagged links will be consolidated alongside organic clicks within the "**Facebook**" entry in the "**Sources**" tab of your "**Top Sources**" report providing a unified view of all Facebook clicks.

You can still isolate your UTM-tagged clicks from organic traffic and view their original labels in the "**Campaigns**" tab of "**Top Sources**".

### Keyword phrases from Google search

Note that Google does not include the search keywords in the referrer. This means that you can see that a visitor is coming from a Google search but you can't see which keyword phrase they used to find you. 

To fix this, you can integrate your Plausible account [with Google Search Console](google-search-console-integration.md) so that the keyword phrases people discover your site with show in your Plausible dashboard. After integrating with Search Console, you can click on the "**Google**" entry in the "**Top Sources**" report to view these keyword phrases.

## Campaigns 

Are you running paid ads on Facebook, Google and other ad platforms? It's possible to track paid campaigns and conversions with Plausible. In the "**Campaigns**" tab within the "**Top Sources**" report, you can see the traffic arriving to your site from links tagged with UTM tags and other query parameters.

To isolate your UTM-tagged clicks from the organic clicks, you can segment the traffic by using the "**UTM Medium**", "**UTM Source**", "**UTM Campaign**", "**UTM Content**" and "**UTM Term**" reports within the "**Campaigns**" tab.

### GCLID, FBCLID and other marketing parameters

Plausible also records clicks coming from links tagged with GCLID, FBCLID and other paid marketing parameters. You can see these and filter by them within the "**UTM Medium**" section of the "**Top Sources**" report. Do note that we do strip the values of these parameters as they are considered unique identifiers and are not compliant with GDPR without user consent. These are the mrketing parameters that we do record but that we do strip the unique values of:

* `gclid`
* `gbraid`
* `wbraid`
* `msclkid`
* `fbclid`
* `twclid`

This is why we do recommend that you use UTM tags when tagging your paid ad campaigns. We do not strip the values of UTM tags. 

### How to track paid ad conversion attribution

Goals and custom events allow you to track actions that you want your visitors to take on your site. Actions such as registering for a trial account, purchasing a product or completing a checkout form of an ecommerce store. By [setting up goals and custom events](goal-conversions.md), you'll be able to follow the visitor journey from a paid ad click to a conversion on your site. 

Filter your dashboard by a specific goal to see the number of conversions, conversion rate (CR), referrer sources and entry pages that are driving conversions and the top pages that people convert on. You can also track [ecommerce revenue](ecommerce-revenue-tracking.md) and [set up funnels](funnel-analysis.md). This works even if your site operates [across multiple subdomains](subdomain-hostname-filter.md).

<img alt="Custom goal conversion rate" src={useBaseUrl('img/custom-goal-conversion-rate.png')} />

Due to the privacy-first nature of Plausible and the fact that we don't use cookies and other long-term identifiers, the conversion attribution is based on last-click attribution. The referral source of the visit on which the purchase was made will be credited for that conversion. 

## How to reduce the volume of dark traffic

Not all traffic to your website will have the referrer header specified in the browser. This "**dark traffic**" is why you see the "**Direct / None**" source in the "**Top Sources**" report. These are typically clicks from emails, documents, instant messengers, mobile apps or bookmarks.

By default, we attempt to uncover traffic originating from Android apps which is traditionally categorized as direct traffic in web analytics. The volume of these clicks in your "**Top Sources**" report will vary based on your site and audience.

To further minimize the amount of traffic that falls within the "**Direct / None**" category, you can add special query parameters such as UTM tags to your links whenever you post a link in social media, paid advertising or an email newsletter. 

Query parameters that are valid and supported by Plausible:

* `ref`
* `source`
* `utm_source`
* `utm_medium`
* `utm_campaign`
* `utm_content`
* `utm_term` 

Tagging links helps you better track your marketing campaigns and see which are responsible for most conversions. Here's an example of how to tag your links: `yourdomain.com?utm_source=Newsletter&utm_medium=Email&utm_campaign=NovemberNewsletter&utm_content=Link`

For any clicks on the above link, "**Newsletter**" would be listed as a referral source in your Plausible dashboard, "**Email**" would be listed as the medium, "**NovemberNewsletter**" would be listed as the campaign and "**Link**" would be listed as the content. 

Read more about "[how to use UTM parameters to track your campaigns and understand the dark traffic](https://plausible.io/blog/utm-tracking-tags)".
