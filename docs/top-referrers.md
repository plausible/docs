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

See "[Manual link tagging](manual-link-tagging.md)" section of the documentation for the full instructions.
