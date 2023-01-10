---
title: Paid campaigns, UTM tags and conversion attribution
---

Whenever you post a link in social media, paid advertising or send it in an email newsletter, you can choose to add a special query parameter to the link. When for instance `?ref=<value>` query parameter is present, Plausible Analytics will show it as the referral source.

Tagging your links helps you minimize the amount of traffic that falls within the "[**Direct / None**](https://plausible.io/blog/utm-tracking-tags)" category. It also helps you better track your marketing campaigns and see which campaigns are responsible for most conversions. 

`ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` query parameters are all valid and supported.

:::note 
All referral sources including UTM and other query parameters are counted only when they start a new session on your site. This is why you don't see all the referral sources of your own visits if you click to test several different UTM tagged links at the same time
:::

## How to tag links in your marketing campaigns

Here's what you can do when you want to send a newsletter to your subscribers. 

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

:::note 
Do you prefer to completely stop tracking UTM tags and other query parameters on your site? Please [follow these instructions](stop-tracking-utm-tags.md)
:::

## Merging organic traffic and paid campaigns 

We merge all the identical sources in the "All" tab of the "Top Sources" report. For instance, clicks that you get from Facebook which aren't tagged by UTMs are labeled with a referral source "**Facebook**" by Facebook itself. 

If you tag some links that you share on Facebook such as your paid ads with the utm_source=Facebook, clicks on those will be merged alongside organic Facebook clicks in the "All" tab. 

Then you can see combined number of clicks between organic and UTM-tagged clicks in the "All" tab, and you can segment by UTM tagged clicks only in the "Medium", "Source", "Campaign", "Term" and "Content" sections.

:::note 
UTM and other tags are case-sensitive so utm_source=Twitter and utm_source=twitter will show separately in your analytics dashboard.
:::

Read more about "[how to use UTM parameters to track your campaigns and understand the dark traffic](https://plausible.io/blog/utm-tracking-tags)".

:::note 
Does your site use page URLs like `yoursite.com/blog/index.php?article=some_article&page=11`? They will be reported as `yoursite.com/blog/index.php` in the Top Pages report of your Plausible dashboard as we strip custom parameters. You can manually enable these custom parameters to be tracked. [See how here](custom-query-params.md).
:::

## Custom events and conversion attribution 

Goals and custom events allow you to track actions that you want your visitors to take on your site. Actions such as registering for a trial account, purchasing a product or completing a checkout form of an ecommerce store.

<img alt="conversion rate" src={useBaseUrl('img/cr2.png')}/>

By [setting up goals and custom events](goal-conversions.md), you can track the number of conversions, conversion rate, referrer sources and entry pages that are driving conversions and the top pages that people convert on. 

<img alt="Custom goal conversion rate" src={useBaseUrl('img/cr.png')}/>

Click on any specific referral source in your dashboard to see the number of conversions and the conversion rate (CR) of that referral source for any of your goals. You can also click on any goal in your dashboard to see the number of conversions and the conversion rate of that specific goal coming from any referral source or any landing page.

Due to the privacy-first nature of our product and the fact that we don't use cookies and other long term identifiers, the conversion attribution in Plausible is based on last click attribution. The referral source of the visit on which the purchase was made will be credited for that conversion. 
