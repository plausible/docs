---
title: Add the script to your website
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To integrate your website with Plausible Analytics, you need to be able to update the HTML code of the website you want to track. Paste your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Your Plausible Analytics tracking script code will look something like this (your exact code will be shown on the JavaScript snippet page):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

:::tip Are you using WordPress?
We recommend you integrate Plausible by using our plugin. It's very lightweight, excludes your visits by default and allows you to see the stats directly in your WordPress dashboard. It also avoids conflicts with WP Rocket and similar plugins. [See more here](https://plausible.io/wordpress-analytics-plugin).
:::

## Where to find your JavaScript snippet

You can find your JavaScript snippet by [logging into your Plausible account](https://plausible.io/sites). Here you'll find the list of websites you've added to Plausible Analytics.

Click on the menu icon on the right-hand side of the domain name you'd like to get the snippet for and choose "**Settings**" to enter the website settings section. Then scroll down to the "**JavaScript Snippet**" section on the following page.

<img alt="Plausible Analytics" src={useBaseUrl('img/list-of-sites.png')} />

## Alternatively you can proxy our script

If you'd like to serve the script as a first-party connection from your domain name, we offer a way to proxy our script. See [full details here](/proxy/introduction.md).

## Check out integration guides for popular site builders and CMSs

Installing Plausible on a site can be a slightly different process depending on what tools you're using to manage your site.

We've put together several guides that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also integrations and plugins for several frameworks such as Hugo and GatsbyJS. We also have guides for single-page applications.

Here's [the full list of all integrations and guides](integration-guides.md). These can help you set up and start counting your site visitors in no time.

## Can I send stats to multiple dashboards at the same time?

Yes, you can send your visitor stats to multiple Plausible dashboards at the same time. To do this, you need to configure the data-domain attribute as a comma-separated list in the Plausible snippet that you insert into your site. Here's an example:

```html
<script defer data-domain="domain1.com,domain2.com,subdomain.yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## Can I track visitors across my domain and subdomain?

Yes, seamless cross-subdomain tracking is possible. If your marketing landing page is on the main domain name (`yoursite.com`) and your app is on the subdomain (`app.yoursite.com`), you can add one site to your Plausible account (`yoursite.com`) and insert the same tracking snippet on both the domain name and the subdomain. This keeps the visitor session active between the main site and the subdomain.

You can then set up [a custom event](custom-event-goals.md) or [a pageview goal](pageview-goals.md) on the actions you want to track on your site. This allows you to see the visitor journey end-to-end from the landing on the main domain name to a conversion on the subdomain. And the conversion on the subdomain will be attributed to the original referral source that brought the visitor to the main domain. No need to filter out internal referral sources. 

You can even display this user journey [in a funnel](funnel-analysis.md). 

There are two drawbacks with this approach:

1. You will have one dashboard with all the stats combined. You won't be able to see individual dashboard of the individual site separated from the other sites.

2. If you have pages with identical page paths on the different sites (say `yourdomain.com/best-page/` and `subdomain.yourdomain.com/best-page/`), these identical page paths will be listed under one entry (`/best-page/`) in the "**Top Pages**" report with the stats combined into that one entry.

We do have a rollup view reporting which avoids these drawbacks. Here's how to use it:

## Is there a roll-up view?

:::note
Pageviews tracked using the roll-up view will count towards your billable monthly pageviews.
:::

Rollup reporting allows you to aggregate stats from multiple sites and see them all together in one dashboard while still keeping the individual site stats on their own separate dashboards. Here's how you can use it:

* Say you have `yoursite.com`, `yoursecondsite.com` and `anothersite.com` as websites in your Plausible account
* Then you could add a new site to your Plausible account called for example `rollup.mysites.com` (you can come up with any name that you want for this, it doesn't need to be an actual domain)
* On the `yoursite.com` site, add the new site name to the data-domain attribute in your Plausible snippet like this:

```html
<script defer data-domain="yoursite.com,rollup.mysites.com" src="https://plausible.io/js/script.js"></script>
```

* And on `yoursecondsite.com` site, add the new site name to the data-domain attribute in your Plausible snippet like this:

```html
<script defer data-domain="yoursecondsite.com,rollup.mysites.com" src="https://plausible.io/js/script.js"></script>
```

* Add the new site name to the data-domain attribute in your Plausible snippet on the `anothersite.com` site too. Like this:

```html
<script defer data-domain="anothersite.com,rollup.mysites.com" src="https://plausible.io/js/script.js"></script>
```

This will send pageviews from your sites to their individual dashboards so you can still see their separate stats but it will also send their stats to a grouped dashboard which means you'll be able to see the combined stats too in a roll-up view.

:::tip Integrating Plausible by using Google Tag Manager?
You'll need to use a different tracking snippet. [See these instructions](google-tag-manager.md).
:::

## How to verify if the script is installed on your site

After you've added the Plausible Analytics snippet to the HTML of your website, you should see our script installed on your site and can verify that the integration is working.

In your [Plausible Analytics account](https://plausible.io/sites), click on your website domain name. You should see a blinking green dot which indicates that we’re listening for incoming page views in real-time.

There are no delays in stats with Plausible. Everything is live. Once the first page view comes through, you'll be automatically taken to the stats dashboard with graphs and numbers.

This is an indication that the integration is working, congrats! Plausible Analytics is now tracking your website statistics while preserving the privacy of your visitors.

Have some issues with the integration? Take a look at [our guide to troubleshooting your Plausible Analytics integration](troubleshoot-integration.md).
