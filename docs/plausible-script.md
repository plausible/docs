---
title: Add the snippet to your website
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To integrate your website with Plausible Analytics, you need to insert a Plausible tracking snippet into the header section of your site. Place the snippet within the `<head> … </head>` tags. 

We display your snippet during the process of adding a new site to your account. For sites that you've already added to your account, you can find your JavaScript snippet by [logging into your Plausible account](https://plausible.io/sites). Here you'll find the list of websites you've added to Plausible.

Click on the menu icon on the right-hand side of the site you'd like to get the snippet for and choose "**Settings**" to enter the [site settings](website-settings.md). Then scroll down to the "**Site Installation**" area of the "**General**" section. Click on the "**Review Installation**" button to get the installation details including your snippet.

There you can also enable any [optional enhanced measurements](script-extensions.md).

<img alt="Add script extensions and verify your installation" src={useBaseUrl('img/add-script-extensions-verify-installation.png')} />

:::tip Want to track visitors across your domain and its subdomains?
You can add your main domain name as a site to your Plausible account and use that same tracking snippet on all your subdomains too. This keeps the visitor session active between your main site and its subdomains. Here's [how it works](subdomain-hostname-filter.md).
:::

## Check out integration guides for popular site builders and CMSs

Installing Plausible on a site can be a slightly different process depending on what tools you're using to manage your site.

* Are you using WordPress? We recommend you integrate Plausible by using our plugin. It's very lightweight, excludes your visits by default and allows you to see the stats directly in your WordPress dashboard. It also avoids conflicts with WP Rocket and similar plugins. [See more here](https://plausible.io/wordpress-analytics-plugin).

* Are you using Google Tag Manager? We have a guide on [how to add the Plausible snippet using GTM](google-tag-manager.md).

* If you'd like to serve our snippet as a first-party connection from your domain name, we offer a way to proxy our script. See [full details here](/proxy/introduction.md).

* Prefer to avoid JavaScript and use server side tracking instead? We have [the events API for that](events-api.md).

We've put together [several other guides and plugins](integration-guides.md) that cover popular website builders, content management systems (CMS) and frameworks. These can help you set up and start counting your site visitors in no time.

## Can I send stats to multiple dashboards at the same time?

Yes, you can send your visitor stats to multiple Plausible dashboards at the same time. To do this, you need to configure the data-domain attribute as a comma-separated list in the Plausible snippet. Here's an example:

```html
<script defer data-domain="domain1.com,domain2.com,domain3.com" src="https://plausible.io/js/script.js"></script>
```

## Is there a roll-up view?

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

## How to check if Plausible Analytics is installed correctly 

After adding the Plausible snippet to your website, you can use our testing tool to verify that the snippet is installed correctly and the integration is working. Have some issues with the integration? Take a look at [our guide to troubleshooting your Plausible Analytics integration](troubleshoot-integration.md).
