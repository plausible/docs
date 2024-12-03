---
title: Acquisition channels, referral sources and paid campaigns 
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

The "**Top Sources**" report displays acquisition channels, referral sources and marketing campaigns that drive traffic to your website. This information helps you understand which referral sources are most effective and how specific marketing campaigns perform. 

You can click on any individual entry within the "**Top Sources**" report to segment your audience by that source and view the best performing landing pages or highest converting goals. Click the "**Details**" button to access additional insights such as the visit duration and bounce rate for the individual entry. In the "**Details**" view, you can sort and arrange your data in ascending or descending order by clicking any metric heading.

Using [the "**Filter**" button on the top of your dashboard](filters-segments.md), you can filter the stats by multiple channels, sources or UTM tags simultaneously for more powerful traffic segmentation. You can also exclude traffic from a specific channel, referral source or UTM tag.

<img alt="Top Referrers - multiple filters" src={useBaseUrl('img/top-referrers-filtering-multiple-filters.png')} />

## Channels

In the "**Channels**" tab within the "**Top Sources**" report, you can view a breakdown of your sources categorized into high-level groups such as "**Organic Social**", "**Paid Search**" and "**Email**". By clicking on any individual channel, you can see a detailed list of the specific sources within that channel that are driving traffic to your site. Below are the definitions and descriptions for each channel:

| Channel                             | Definition                     |
| :---------------------------------- | :----------------------------- |
| Affiliates                          | `Medium` is "affiliate"             |
| Audio                               | `Medium` is "audio"                 |
| Cross-network                       | `Medium` is "cross-network"          |
| Direct                              | `Source` is "(direct)" **AND** `Medium` is "(not set)" or "(none)"             |
| Display                             | `Medium` is "display", "banner", "expandable", "interstitial" or "cpm"            |
| Email                               | `Source` is "gmail", "email", "e-mail", "e_mail" or "e mail" **OR** `Medium` is "email", "e-mail", "e_mail" or "e mail"          |
| Mobile Push Notifications           | `Source` is "firebase" **OR** `Medium` is "mobile", "notification" or ends with "push"         |
| Organic Search                      | `Source` is a known search site **OR** `Medium` is organic     |
| Organic Shopping                    | `Source` is a known shopping site **OR** `Campaign` matches regex `^(.*(([^a-df-z]\|^)shop\|shopping).*)$`             |
| Organic Social                      | `Source` is a known social site **OR** `Medium` is "social", "social-network", "social-media", "sm", "social network" or "social media"    |
| Organic Video                       | `Source` is a known video site **OR** `Medium` matches regex `^(.*video.*)$`             |
| Paid Other                          | `Medium` matches regex `^(.*cp.*\|ppc\|retargeting\|paid.*)$`            |
| Paid Search                         | `Source` is a known search site **AND** `Medium` matches regex `^(.*cp.*\|ppc\|retargeting\|paid.*)$` **OR** `Source` is Google and the link includes a "gclid" parameter **OR** `Source` is Bing and the link includes a "msclkid" parameter **OR** `Source` is "adwords" or includes a known search site which ends with "ad" or "ads" (as in "googleads")           |
| Paid Shopping                       | `Source` is a known shopping site **OR** `Campaign` matches regex `^(.*(([^a-df-z]\|^)shop\|shopping).*)$` **AND** `Medium` matches regex `^(.*cp.*\|ppc\|retargeting\|paid.*)$`             |
| Paid Social                         | `Source` is a known social site (including abbreviations IG and FB) **AND** `Medium` matches regex `^(.*cp.*\|ppc\|retargeting\|paid.*)$` **OR** `Source` includes a known social site which ends with "ad" or "ads" (as in "fb-ads" or "facebook_feed_ad")           |
| Paid Video                          | `Source` is a known video site (including abbreviation YT) **AND** `Medium` matches regex `^(.*cp.*\|ppc\|retargeting\|paid.*)$` **OR** `Source` includes a known video site which ends with "ad" or "ads" (as in "yt-ads")             |
| Referral                            | `Medium` is "referral", "app" or "link"            |
| SMS                                 | `Source` is "sms" **OR** `Medium` is "sms"         |

We align our channel lists and definitions closely with Google Analytics to make your transition to Plausible as seamless as possible. However, we strive to stay more up-to-date with newer sites and platforms. For example, in Plausible, Temu is categorized as a shopping site, Perplexity as a search site and Discord as a social site.

Please note that channel groupings and definitions may evolve as the market changes. We will keep this list updated to reflect any adjustments.

<img alt="Top Sources - channels" src={useBaseUrl('img/top-sources-channels.png')} />

## Sources

In the "**Sources**" tab within the "**Top Sources**" report, you can see the full list of your referral sources such as "**Google**", "**Facebook**", "**LinkedIn**", "**Reddit**" and "**chatgpt.com**".

Note that browsers only send the domain name of the referrer and not the actual URL. If `thatblog.com/one-post/` sends you visitors, you will see `thatblog.com` in your sources list but won’t see the exact post URL itself. [See more here](https://plausible.io/blog/referrer-policy).

<img alt="Top Sources - sources" src={useBaseUrl('img/top-sources-sources.png')} />

### No need to manually exclude unwanted sources

With Plausible, there's no need for you to manually exclude unwanted referral sources like payment processors such as PayPal, Stripe or Paddle to keep your data clean.

Referral sources are counted only when they start a new session on your site. This prevents external domains such as payment gateways showing up in the list of sources when for instance visitors briefly leave your site to make a payment before returning back. The source that brought the visitor to your site in the first place will be the one attributed for that conversion.

### Consolidation of duplicate sources

UTM tags are case-sensitive, which may lead to duplicated or miscategorized traffic sources all depending on how the different links are tagged. To mitigate this issue, the "**Sources**" tab in the "**Top Sources**" report consolidates each source into a single entry, disregarding capitalization or naming differences in UTM tags.

For instance, clicks you get from Facebook which are not tagged by UTMs are labeled with a referral source "**Facebook**" by Facebook itself. Suppose you tag some links that you share on Facebook with `utm_source=facebook`, `utm_source=fb` or `utm_source=facebook-ads`. In that case, clicks on those tagged links will be consolidated alongside organic clicks within the "**Facebook**" entry in the "**Sources**" tab of your "**Top Sources**" report providing a unified view of all Facebook clicks.

You can still isolate your paid clicks from organic traffic or organic clicks from paid traffic by using the "**Channels**" tab or the "**Campaigns**" tab of the "**Top Sources**" report.

### Keyword phrases from Google search

Google does not include the search keywords in the referrer. This means that you can see that a visitor is coming from a Google search but you can't see which keyword phrase they used to visit your site.

To fix this, you can integrate your Plausible account [with Google Search Console](google-search-console-integration.md) so that the keyword phrases people discover your site with show in your Plausible dashboard. After integrating with Search Console, you can click on the "**Google**" entry in the "**Top Sources**" report to view your keyword phrases.

## Campaigns 

The "**Campaigns**" tab within the "**Top Sources**" report allows you to see the traffic arriving to your site from links tagged with UTM tags and other query parameters. 

### How to tag your paid campaign links

Are you running paid marketing campaigns on Facebook, Google and other ad platforms? We recommend you tag your paid campaign links with UTM parameters. These are the query parameters that are valid and supported by Plausible:

* `ref`
* `source`
* `utm_source`
* `utm_medium`
* `utm_campaign`
* `utm_content`
* `utm_term`

Here's an example of how to tag your links: `yourdomain.com?utm_source=adwords&utm_medium=ppc&utm_campaign=novemberoffer&utm_content=sustainability&utm_term=discount`

To isolate your UTM-tagged clicks from other clicks, you can segment the traffic by using the "**UTM Medium**", "**UTM Source**" (here you can also see any traffic tagged with "ref" and "source" parameters), "**UTM Campaign**", "**UTM Content**" and "**UTM Term**" sections in the "**Campaigns**" tab of the "**Top Sources**" report.

P.S. If you are looking to specifically track Google Ads with Plausible, you can also go through [this guide](https://plausible.io/blog/google-ads-tracking).

### gclid and msclkid marketing parameters

If the UTM tag is not present within the link, Plausible also looks for "gclid" (Google Click ID in Google Ads) and "msclkid" (Microsoft Click ID in Microsoft Ads, formerly Bing Ads) tags which are special paid marketing parameters. You can view and filter these within the "**UTM Medium**" section of the "**Top Sources**" report. 

Please note that we strip the values from "gclid" and "msclkid" parameters because they are considered unique identifiers and are not GDPR-compliant without user consent. This means you can view and filter your dashboard by the audience coming from "gclid" or "msclkid" tagged links, but you will not see the unique identifier for each visitor.

This is why we recommend using UTM tags when tagging your paid ad campaigns. When a UTM tag is present in the link, it takes priority over other parameters. And unlike the "gclid" and "msclkid" marketing parameters, we do not strip the values of UTM tags which provides you more powerful insights.

### How to track conversion attribution

Goals and custom events allow you to track actions that you want your visitors to take on your site. Actions such as registering for a trial account, purchasing a product or completing a checkout form of an ecommerce store. By [setting up goals and custom events](goal-conversions.md), you'll be able to follow the visitor journey from a paid ad click to a conversion on your site. 

Filter your dashboard by a specific goal to see the number of conversions, conversion rate (CR), referrer sources, marketing campaigns and entry pages that are driving conversions. You can also track [ecommerce revenue](ecommerce-revenue-tracking.md) and [set up funnels](funnel-analysis.md). This works even if your site operates [across multiple subdomains](subdomain-hostname-filter.md).

Due to Plausible’s privacy-first approach, which avoids using cookies or long-term identifiers, conversion attribution relies on last-click attribution. This means the referral source of the visit that leads to the purchase is credited for the conversion.

<img alt="Custom goal conversion rate" src={useBaseUrl('img/custom-goal-conversion-rate.png')} />

## How to reduce the volume of dark traffic

Not all traffic to your website will have the referrer header specified in the browser. This "**dark traffic**" is why you see the "**Direct / None**" source in the "**Top Sources**" report. These are typically clicks from emails, documents, instant messengers, mobile apps or bookmarks.

### We attempt to uncover some direct traffic

By default, we attempt to uncover traffic originating from Android apps which is traditionally categorized as direct traffic in web analytics. The volume of these clicks in your "**Top Sources**" report will vary based on your site and audience.

### Tag all the links that you control

To further minimize the amount of traffic that falls within the "**Direct / None**" category, we recommend that you add query parameters such as UTM tags to your links whenever you post a link in social media, paid advertising, an email newsletter or anywhere else. Read more about [how to use UTM parameters to track your campaigns and understand the dark traffic](https://plausible.io/blog/utm-tracking-tags).
