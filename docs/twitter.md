---
title: Twitter referrals
--- 

Correlating referral traffic to tweets is challenging because Twitter strips all useful referrer data when people click on links in tweets. However, Plausible Analytics makes the best effort to find the relevant tweet that the visitor came from using the Twitter API.

This allows us to tie most links that are clicked on Twitter to a specific tweet where that link appears. It works most of the time, but not always:

* The Twitter Search API only shows tweets from the last 7 days. When you get traffic from tweets that were posted more than a week ago, Plausible Analytics might not be able to identify them. This is why some links don’t have a tweet associated with them in the screenshot.

* When you share the same link in multiple tweets, Twitter reuses the same shortened `t.co` link. In this case, Plausible Analytics is not able to narrow the visitor down to a specific tweet. Instead, we show all the tweets that contain that specific t.co link.

To avoid the problem of links appearing in multiple tweets, you can force Twitter to generate a new short link each time you tweet out the same link. Just adding a random query parameter such as `yourdomain.com?t=1` will force Twitter to generate a new, unique `t.co` link for it.
