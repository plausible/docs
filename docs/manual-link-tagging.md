---
title: Manual link tagging with query parameters
---

To minimize the amount of traffic that falls within the "[no referrer](top-referrers.md)" category, you can add special query parameters to your links.

Whenever you post a link online or send it to someone, you can choose to add a special query parameter to the link. When the `?ref=<value>` query parameter is present, Plausible Analytics will show it as the referral source.

`ref`, `source`, `utm_source`, `utm_medium` and `utm_campaign` query parameters are all valid and supported.

For example, here's what you can do when you want to send a newsletter to your subscribers. If you simply link to your site with `yourdomain.com`, anyone who clicks on it would fall within the "**no referrer**" category. 

But if you link to `yourdomain.com?ref=Newsletter` anyone who clicks on that will show "**Newsletter**" as the referrer source. This will allow you to see how many people have clicked on your link in the newsletter.

Here are examples of links with the different query parameters that are supported by Plausible Analytics:

* `yourdomain.com?ref=Newsletter`
* `yourdomain.com?source=Newsletter`
* `yourdomain.com?utm_source=Newsletter`

For any clicks on any of the above links, "**Newsletter**" would be listed as a referral source in your Plausible Analytics dashboard. 

You can also go a bit deeper and track your links in more detail:

* `yourdomain.com?utm_source=Newsletter&utm_medium=Email&utm_campaign=NovemberNewsletter`

For any clicks on the above link, "**Newsletter**" would be listed as a referral source in your Plausible Analytics dashboard, "**Email**" would be listed as the medium and "**NovemberNewsletter**" would be listed as the campaign. 

It is a good practice to tag your links where the referrer header is not sent. Emails, newsletters, chat, messaging applications, particular websites and so on.

When a query parameter is present in the link it takes priority. When someone lands on your website without the special query parameter defined, we fall back to the referrer header.

Read more about "[how to use UTM parameters to track your campaigns and understand the dark traffic](https://plausible.io/blog/utm-tracking-tags)".
