---
title: Get the most out of your Plausible experience
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To use Plausible Analytics, you need to [register an account](https://plausible.io/register) and add [our tracking snippet](plausible-script.md) to your site.

To explore the product, we offer you a free 30-day trial. You can test all the different features and use Plausible on multiple sites during the trial. No credit card is required to sign up.

Here are the steps you can take to get the most out of your Plausible experience:

## Enable email/Slack reports and notifications for traffic spikes

You can decide to enable weekly (every Monday) and/or monthly (every 1st day of the month) reports to be sent directly through email. [See instructions here](email-reports.md).

You can also enable traffic spike notifications to be sent directly through email. This will help notify you when your site has an unusually high number of current visitors. [See instructions here](traffic-spikes.md).

And you can get the same reports and traffic spike notifications in Slack too. [See instructions here](slack-reports.md).

## Integrate with Search Console to get keyword phrases people find your site with

You can enable the Google Search Console integration to get all the search keywords people find your site with in Google's search results directly in your Plausible dashboard. [See instructions here](google-search-console-integration.md).

## Set up easy goals including form submissions, 404 error pages, file downloads and outbound link click tracking

Plausible allows you to track custom event goals like signups, purchases and anything else you can think of by using CSS class names or JavaScript. You can send custom properties alongside events too. And if you're an ecommerce store, you can send your revenue too. [See the instructions here](custom-event-goals.md).

You can also enable some automated goals. Here are instructions on how to track [404 error pages](error-pages-tracking-404.md), [file downloads](file-downloads-tracking.md), [outbound link clicks](outbound-link-click-tracking.md) and [form submissions](form-submissions-tracking.md) in your Plausible dashboard.

After you've set up some events, you can create your first [marketing funnel](funnel-analysis.md).

See full details on our [goal conversions and behavior analytics](goal-conversions.md).

## Start using UTM tags in your marketing campaigns

To minimize the amount of traffic that falls within the "direct / none" referral source, you can add special query parameters to your links in social media, email newsletters and your paid advertising campaigns.

`ref`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` query parameters are all valid and supported by Plausible Analytics. [Learn more here](top-referrers.md).

You'll then be able to follow the visitor journey from a paid ad click to a conversion on your site directly in your Plausible dashboard. All the UTM tagged clicks will be displayed in the Campaign tabs of your Top Sources report and all the conversions will be in the Goal Conversions section. You can then [filter your Plausible dashboard](filters-segments.md) by a specific goal to see conversion rate for all the individual sources of traffic, landing pages and so on.

Read also our guide on [how to use UTM parameters to track your campaigns and understand the dark traffic](https://plausible.io/blog/utm-tracking-tags).

## Share your stats with a private link or open them up to the public

You can share your Plausible stats with (potential) partners or advertisers. Or if you're working for an agency or working as a freelancer, you can share the site stats with your clients by generating a shared private link. The shared link is secure and impossible to guess by default. You can even password protect it. [Learn more here](shared-links.md).

You can also choose to be transparent and make your site stats public so anyone with your stats dashboard link can view them. [Learn here how](visibility.md). You can also [embed our default dashboard](embed-dashboard.md) without any Plausible branding directly into your own website.

## Invite team members and other collaborators

Plausible makes it easy to invite team members, clients and other collaborators. You can invite team members and also assign their roles. You can choose to give people access to the stats dashboard only or give them the permission to edit site settings and invite other collaborators.

You can learn more about [user accounts and levels](users-roles.md).

## Explore our API

We have a [stats API](stats-api.md) that allows you to take individual metrics and create a custom-built dashboard within your UI in whichever shape or form you want.

We also have a [sites API](sites-api.md) that allows you to add and manage a large number of sites programmatically.

There's also the [events API](events-api.md) that can be used to record pageviews and custom events without JavaScript. This is useful when tracking Android or iOS mobile apps, or for server side tracking.

## Import your historical Google Analytics stats

You can import your historical Google Analytics stats into your Plausible dashboard. See [how our GA importer works](google-analytics-import.md).

## Opt out from counting your own visits

When you're working on your site, you might not want to record your own visits and page views. Here's [how to opt out and exclude yourself from your analytics](excluding.md).

## You can proxy our script

If you'd like to serve the script as a first-party connection from your domain name, we offer a way to proxy our script. See [full details here](/proxy/introduction.md).

## Explore the intuitive stats dashboard

Now you're ready to start exploring the [fast-loading, ethical and actionable Plausible Analytics dashboard](/docs/guided-tour.md). The dashboard is easy to use, intuitive and powerful too. Segment your audience any way that you want. Compare your trends over different time periods. Track conversion attribution. See what referral sources and landing pages drive the highest (or lowest) conversion rates. 
