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

## Check out integration guides for popular site builders and CMSs

Installing Plausible on a site can be a slightly different process depending on what tools you're using to manage your site.

We've put together several guides that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also integrations and plugins for several frameworks such as Hugo and GatsbyJS. We also have guides for single-page applications.

Here's [the full list of all integrations and guides](integration-guides.md). These can help you set up and start counting your site visitors in no time.

## Alternatively you can proxy our script

If you'd like to serve the script as a first-party connection from your domain name, we offer a way to proxy our script. See [full details here](/proxy/introduction.md).

## Can I track visitors across my domain and subdomain?

Yes, you can add your main domain name as a site to your Plausible account and use that same tracking snippet on all your subdomains too. This keeps the visitor session active between your main site and its subdomains. Here's [more details on how it works](subdomain-hostname-filter.md).

## Can I send stats to multiple dashboards at the same time?

Yes, you can send your visitor stats to multiple Plausible dashboards at the same time. To do this, you need to configure the data-domain attribute as a comma-separated list in the Plausible snippet that you insert into your site. Here's an example:

```html
<script defer data-domain="domain1.com,domain2.com,domain3.com" src="https://plausible.io/js/script.js"></script>
```

## Roll-up reporting

:::note
Pageviews tracked using the roll-up view will count towards your billable monthly pageviews.
:::

Rollup reporting allows you to aggregate stats from multiple sites and see them in one combined dashboard while keeping the individual site stats on their own separate dashboards. This way you get detailed insights into individual site performance and a holistic view of your whole network too. 

This is useful when building multi-tenant applications, offering [a white label analytics dashboard](https://plausible.io/white-label-web-analytics) or in similar situations. It allows you to keep all your global traffic in one dashboard for internal purposes but also share the traffic from individual tenant sites with the particular client only.

Here's how you can use it:

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

:::tip Integrating Plausible by using Google Tag Manager?
You'll need to use a different tracking snippet. [See these instructions](google-tag-manager.md).
:::

## How to verify if the script is installed on your site

After you've added the Plausible Analytics snippet to the HTML of your website, you should see our script installed on your site and can verify that the integration is working.

In your [Plausible Analytics account](https://plausible.io/sites), click on your website domain name. You should see a blinking green dot which indicates that we’re listening for incoming page views in real-time.

There are no delays in stats with Plausible. Everything is live. Once the first page view comes through, you'll be automatically taken to the stats dashboard with graphs and numbers.

This is an indication that the integration is working, congrats! Plausible Analytics is now tracking your website statistics while preserving the privacy of your visitors.

Have some issues with the integration? Take a look at [our guide to troubleshooting your Plausible Analytics integration](troubleshoot-integration.md).
