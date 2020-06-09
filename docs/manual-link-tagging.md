---
title: Manual link tagging
---

To minimize the amount of traffic that falls within the “[no referrer](top-referrers.md)” category, you can add special query parameters to your links.

Whenever you post a link online or send it to someone, you can choose to add a special query parameter to the link. When the `?ref=<value>` query parameter is present, Plausible Analytics will show it as the referrer source.

Both `source` and `utm_source` query parameters are also valid and supported.

For example, if you want to send a newsletter to your subscribers. If you simply link to your site with `yourdomain.com`, anyone who clicks on it would fall within the “no referrer” category. But if you link to `yourdomain.com?ref=newsletter` anyone who clicks on that will show “newsletter” as the referrer source. This will allow you to see how many people have clicked on your link in the newsletter.

There are other use cases too. For example, let’s say you’re running a digital advertising campaign. Your ad will be shown to visitors on different websites, so with the default behavior, these would all show up as distinct referrer sources in Plausible Analytics.

But what if you want to group referrals from this advertising campaign together? The way you can do that is by changing the link in the advertising campaign to include `?ref=<advertiser-name>`. Now, all referrals from this campaign are linked together and shown as one referral source in Plausible.

When a query parameter is present in the link it takes priority but when someone lands on your website without the special query parameter defined, we fall back to the referrer header.
