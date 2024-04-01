---
title: Hostname or subdomain tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Does your site operate on a single domain name with multiple subdomains such as `docs.yourdomain.com`, `app.yourdomain.com` and `www.yourdomain.com`?

Plausible seamlessly handles cross-subdomain tracking and helps you simplify the process of tracking your visitors across all these hostnames. 

## How to track user journey across domain and subdomain 

After you add your domain, we will provide you with the tracking snippet that you need to [insert into your site](plausible-script.md) to start counting your stats.

You can add the main domain to your Plausible account (`yourdomain.com`) and insert that same tracking snippet on both the main domain name and its subdomains. This keeps the visitor session active between the main site and the subdomains. 

You can then set up [a custom event](custom-event-goals.md) or [a pageview goal](pageview-goals.md) on the actions you want to track on your site. 

This allows you to see the visitor journey end-to-end from the landing on the main domain name to a conversion on the subdomain. The original source of the visitor will stay attributed for that visitor even when the visitor moves from one of your subdomains to another. 

And the conversion on the subdomain will be attributed to the original referral source that brought the visitor to the main domain. No need to filter out internal referral sources as this eliminates the issue where you might see your own subdomains as sources of traffic.

You can even display this user journey [in a funnel](funnel-analysis.md). 

## Filter traffic by hostname

If you have pages with identical page paths on the different sites (say `yourdomain.com/best-page/` and `docs.yourdomain.com/best-page/`), these identical page paths will be listed under one entry (`/best-page/`) in the "**Top Pages**" report with the stats combined into that one entry.

This is why we allow you to filter your traffic by hostname so you can segment your traffic to view stats from a specific subdomain only. Click on [the "**Filter**" button](filters-segments.md) in the top right of your dashboard and choose the "**Hostname**" option to do so.

You can choose to segment by any one specific hostname in the list but you can also group your hostnames using wildcards:

1. `*.yourdomain.com` will match all subdomains of yourdomain.com but not yourdomain.com itself
2. `*yourdomain.com` will match subdomains of yourdomain.com and yourdomain.com itself

## When to create a site in Plausible for a subdomain 

If you don't want to see visitors of a specific subdomain together with the visitors of other subdomains in the same report, you should [add that subdomain as a site of its own](add-website.md) to your Plausible account. For example, if your subdomain is `https://blog.yourdomain.com` then the part to enter in the "**Domain**" field is `blog.yourdomain.com`.

## Roll up reporting  

Rollup reporting allows you to aggregate stats from multiple sites and see them all together in one dashboard while still keeping the individual site stats on their own separate dashboards. [See how here](plausible-script.md#is-there-a-roll-up-view).

## Block traffic from unwanted hostnames

Plausible blocks all bot traffic out of the box. We filter out known referrer spam domains, we block traffic originating from data centers, and we detect and exclude unnatural traffic patterns.

In some cases you may see visitors from unwanted or unexpected hostnames in your stats. These hostnames vary based on how you've built your site. 

One of the most common cases of unexpected hostnames would be a translation or a similar web service that proxies your site and modifies its content before it reaches the visitor. For instance, `translate.goog` is the hostname for visitors who view your content using Google Translate and `webcache.googleusercontent.com` is the hostname of visitors who view your site using the cache feature in Google's search results.

On the other hand, if you’re using Netlify or Vercel to build your site, you may see `deploy-preview.netlify.app` or similar hostnames which are the deployments that allow you to preview changes you're making to your site before publishing them.

Our script automatically disables itself when running on localhost to reduce recording of traffic from any testing or preview environments. You can also [exclude your internal traffic by IP address](https://plausible.io/docs/excluding) from being recorded in your dashboard.
