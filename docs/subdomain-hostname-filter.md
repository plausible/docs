---
title: Hostname or subdomain tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Does your site operate on a single domain name with multiple subdomains such as `docs.yourdomain.com`, `app.yourdomain.com` and `www.yourdomain.com`?

Plausible helps you simplify cross-subdomain tracking. You can view the visitor journey end-to-end from the landing on your primary domain name to a conversion on the subdomain. The original referral source will stay attributed to that visitor even when the visitor moves from one of your subdomains to another.

Here's how to track the user journey across your domain name and its subdomains.

## How to track the user journey across domain and subdomains

1. [Add your domain name](add-website.md) (`yourdomain.com`) as a site to your Plausible account

2. We'll provide you with the tracking snippet that you need to [insert into your site](plausible-script.md) to start counting the stats

3. Insert that same tracking snippet on both the main domain name and all of its subdomains. This keeps the visitor session active between your primary site and its subdomains

4. Set up [custom events](custom-event-goals.md) or [pageview goals](pageview-goals.md) for the actions you want to track. You can even follow the user journey [in a funnel](funnel-analysis.md). Any conversions that happen on your subdomains will be attributed to the original referral source that brought the visitor to your main domain. There's no need to filter out internal referral sources as this eliminates the issue where you might see your subdomains as a major source of traffic
  
5. Click on any specific referral source in your dashboard to see the number of conversions and the conversion rate (CR) of that referral source for any of your goal completions regardless of the hostname. Or click on any goal in your dashboard to see the number of conversions and the CR of that specific goal coming from any referral source or landing page

## Filtering traffic by hostname

If you have pages with identical page paths on different sites (say `yourdomain.com/best-page/` and `docs.yourdomain.com/best-page/`), these identical page paths will be listed under one entry (`/best-page/`) in the "**Top Pages**" report with the stats combined into that one entry.

This is where filtering traffic by hostname comes in handy. When filtering by hostname, you can segment your traffic and view stats from a specific subdomain only.

Click on [the "**Filter**" button](filters-segments.md) in the top-right of your dashboard and choose the "**Hostname**" entry within the menu.

There you can segment your traffic by any one specific hostname from the list, exclude the traffic from any hostname or even segment by hostnames that contain any particular word.

You can also group your hostnames like this:

1. `*.yourdomain.com` will include all traffic on all subdomains of yourdomain.com but won't include traffic of yourdomain.com itself
2. `*yourdomain.com` will include all traffic on all subdomains of yourdomain.com and yourdomain.com traffic itself will be included too

:::tip Want to filter your traffic by a subfolder or directory?
You can do this by using the filter button or by setting up a pageview goal. [See how here](pageview-goals.md#how-to-group-your-pages)
:::

## Block traffic from unwanted hostnames

Plausible detects and blocks bot traffic out of the box. We filter out known referrer spam domains, we block traffic originating from data centers, and we detect and exclude unnatural traffic patterns.

In some cases you may see visitors from unwanted or unexpected hostnames in your stats. These hostnames vary based on how you've built your site. 

One of the most common cases of unexpected hostnames would be a translator or a similar web service that proxies your site and modifies its content before it reaches the visitor. For instance, `translate.goog` is the hostname for visitors who view your content using Google Translate and `webcache.googleusercontent.com` is the hostname of visitors who view your site using the cache feature in Google's search results.

On the other hand, if you’re using Netlify or Vercel to build your site, you may see `deploy-preview.netlify.app` or similar hostnames which are the deployments that allow you to preview changes you're making to your site before making them live to the public.

Our script automatically disables itself when running on localhost to reduce the recording of traffic from testing environments. You can also [exclude your internal traffic by IP address](https://plausible.io/docs/excluding) from being recorded in your dashboard to block and avoid any unwanted hostnames.

## When to add a subdomain as a dedicated site

If you don't want to track visitors of a specific subdomain together with those of your other sites in the same dashboard, you should add that subdomain as a separate site to your Plausible account.

For example, if your subdomain is `https://blog.yourdomain.com` then the part to enter in the "**Domain**" field when adding a new site is `blog.yourdomain.com`. This would give you one dedicated and standalone dashboard for that particular subdomain.

## Roll-up reporting

Rollup reporting allows you to aggregate stats from multiple sites and see them in one combined dashboard while keeping the individual site stats on their own separate dashboards. This way you can get detailed insights into individual site performance and a holistic view of your whole network too. 

This option is useful when you want to keep all your global traffic in one dashboard for internal purposes but also want to share the individual traffic from client sites with that particular client only. [See how roll-up reporting works](plausible-script.md#is-there-a-roll-up-view).
