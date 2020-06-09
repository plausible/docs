---
title: Top Referrers
--- 

Your "Top Referrers" report shows where the traffic to your website is coming from. You can use it to understand which marketing and promotional activities are working well and are driving the traffic to your site:

## How it works

There are two distinct ways that Plausible Analytics collects the referrer source for a visitor:

### 1. Automatic by the `referer` header

The `referer` header (the HTTP header is misspelled with one r for historical reasons) is the default and automated way of tracking referrer sources of web traffic.

It works well for the majority of cases but there are some limitations and fall-backs with using the `referer` header for various historical and technical reasons. Not every request from a browser will have the referrer specified, and it’s not always accurate.

You may be familiar with the "(direct)/(none)" referrer source in the Google Analytics or the term “dark traffic”. This covers all the traffic where the referrer is not passed. These could be clicks from email, clicks from documents, clicks from messengers and other mobile apps, bookmarks, people typing in the URL directly into the browser and more.

Here’s a non-exhaustive list of other problems with the header:

* Whenever someone is moving from `http` to `https` or vice versa, the `referer` header is dropped.

* Facebook `referer` only includes the fact that the visitor came from Facebook. Facebook never sends the post or comment ID where someone clicked.

* Twitter sets the referrer to their link shortener (t.co) so you can see the shortened link but not the actual tweet that brought the traffic.

* Google does not include the search keywords in the referrer so you can see the visitor is coming from Google search but you cannot see which keyword phrase they used to find you.

### 2. Manual by link tagging

To minimize the amount of traffic that falls within the “no referrer” category, you can add special query parameters to your links.

Whenever you post a link online or send it to someone, you can choose to add a special query parameter to the link. When the `?ref=<value>` query parameter is present, Plausible Analytics will show it as the referrer source.

Both `source` and `utm_source` query parameters are also valid and supported.

For example, if you want to send a newsletter to your subscribers. If you simply link to your site with `yourdomain.com`, anyone who clicks on it would fall within the “no referrer” category. But if you link to `yourdomain.com?ref=newsletter` anyone who clicks on that will show “newsletter” as the referrer source. This will allow you to see how many people have clicked on your link in the newsletter.

There are other use cases too. For example, let’s say you’re running a digital advertising campaign. Your ad will be shown to visitors on different websites, so with the default behavior, these would all show up as distinct referrer sources in Plausible Analytics.

But what if you want to group referrals from this advertising campaign together? The way you can do that is by changing the link in the advertising campaign to include `?ref=<advertiser-name>`. Now, all referrals from this campaign are linked together and shown as one referral source in Plausible.

When a query parameter is present in the link it takes priority but when someone lands on your website without the special query parameter defined, we fall back to the referrer header.
