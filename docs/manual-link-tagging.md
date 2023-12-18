---
title: Paid campaigns, UTM tags and conversion attribution
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Whenever you post a link in social media, paid advertising or send it in an email newsletter, you can choose to add a special query parameter to the link. When for instance `?ref=<value>` query parameter is present, Plausible Analytics will show it as the referral source.

Tagging your links helps you minimize the amount of traffic that falls within the "**Direct / None**" category. It also helps you better track your marketing campaigns and see which campaigns are responsible for most conversions. 

`ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` query parameters are all valid and supported.

:::tip Referral sources are counted only when they start a new session
This is why you don't see all the referral sources of your own visits if you for instance click to test several different UTM tagged links at the same time. You would need to start a new session by using a different browser, a different IP address or a different device for the new source to be included in the report
:::

## How to UTM tag links in your marketing campaigns

Here's an example of what you can do when you want to send a newsletter to your subscribers. 

If you simply link to your site with `yourdomain.com`, anyone who clicks on it would fall within the "**Direct / None**" referral source. 

But if you link to `yourdomain.com?ref=Newsletter` anyone who clicks on that will show "**Newsletter**" as the referrer source. This will allow you to see how many people have clicked on your link in the newsletter.

Here are examples of links with the different query parameters that are supported by Plausible Analytics:

* `yourdomain.com?ref=Newsletter`
* `yourdomain.com?source=Newsletter`
* `yourdomain.com?utm_source=Newsletter`

For any clicks on any of the above links, "**Newsletter**" would be listed as a referral source in your Plausible Analytics dashboard. 

You can also go a bit deeper and track your links in more detail using UTM tags:

* `yourdomain.com?utm_source=Newsletter&utm_medium=Email&utm_campaign=NovemberNewsletter&utm_content=Link`

For any clicks on the above link, "**Newsletter**" would be listed as a referral source in your Plausible Analytics dashboard, "**Email**" would be listed as the medium, "**NovemberNewsletter**" would be listed as the campaign and "**Link**" would be listed as the content. 

Read more about "[how to use UTM parameters to track your campaigns and understand the dark traffic](https://plausible.io/blog/utm-tracking-tags)".

:::tip Prefer to completely stop tracking UTM tags and other query parameters on your site? 
Please [follow these instructions](stop-tracking-utm-tags.md)
:::

## Segment between organic traffic and paid marketing campaigns

Did you know that UTM and other query parameters are case-sensitive? This means that traffic from utm_source=Facebook and utm_source=facebook will appear as separate entries in the "**Top Sources**" report on the Plausible dashboard. Specifically, you'll see one entry as "Facebook" and another as "facebook".

Do note that in the "**Top Sources**" report, we consolidate identical sources. For example, organic clicks from Facebook are automatically labeled as "Facebook" by the platform itself. If you also tag certain links shared on Facebook (like your paid ads) with utm_source=Facebook, those clicks will be combined with the organic Facebook clicks in the "**All**" tab.

For more granular insights, you can segment the traffic by paid marketing campaign clicks using the "**Medium**", "**Source**", "**Campaign**", "**Term**", and "**Content**" reports.

If you use utm_source=facebook for your paid advertising campaigns, it provides a distinct advantage. You can still segment your traffic based on paid marketing clicks alone but you can also differentiate between paid and organic clicks right from the "**All**" tab of the "**Top Sources**" report.

:::tip Does your site use custom query parameters in URLs?
A page like `yoursite.com/blog/index.php?article=some_article&page=11` will be reported as `yoursite.com/blog/index.php` in the "**Top Pages**" report of your Plausible dashboard as we strip custom parameters. You can manually enable these custom parameters to be tracked. [See how here](custom-query-params.md).
:::

## Custom events and conversion attribution 

Goals and custom events allow you to track actions that you want your visitors to take on your site. Actions such as registering for a trial account, purchasing a product or completing a checkout form of an ecommerce store.

<img alt="Conversion rate" src={useBaseUrl('img/conversion-rate.png')} />

By [setting up goals and custom events](goal-conversions.md), you can track the number of conversions, conversion rate, referrer sources and entry pages that are driving conversions and the top pages that people convert on. You can also track [ecommerce revenue](ecommerce-revenue-tracking.md). 

<img alt="Custom goal conversion rate" src={useBaseUrl('img/custom-goal-conversion-rate.png')} />

Click on any specific referral source in your dashboard to see the number of conversions and the conversion rate (CR) of that referral source for any of your goals. You can also click on any goal in your dashboard to see the number of conversions and the conversion rate of that specific goal coming from any referral source or any landing page. And you can [set up funnels](funnel-analysis.md) to track the user journey. 

Due to the privacy-first nature of our product and the fact that we don't use cookies and other long term identifiers, the conversion attribution in Plausible is based on last click attribution. The referral source of the visit on which the purchase was made will be credited for that conversion. 
