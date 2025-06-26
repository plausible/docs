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

## How to check if Plausible Analytics is installed correctly

After adding the Plausible snippet to your website, you can use our testing tool to verify that the snippet is installed correctly and the integration is working. Have some issues with the integration? Take a look at [our guide to troubleshooting your Plausible Analytics integration](troubleshoot-integration.md).
