---
title: Outbound link click tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Outbound link click tracking" src={useBaseUrl('img/outbound-link-click-tracking.png')} />

:::note
If you use the outbound link click tracking feature, then these count towards your billable monthly pageviews.
:::

Outbound link click tracking is essential for many site owners and Plausible helps you automate this process. With our "**Outbound links**" tracking you can:

* See which external URLs are clicked the most
* See on which of your pages the particular outbound link gets the clicks
* Filter the dashboard by external URL to see what type of visitors click the most (referral source, entry page, location, device, browser, OS)
* Group your external link clicks by domain name or any keyword

"**Outbound links**" is an [optional enhanced measurement](script-extensions.md). If you want to track external link clicks, here's how to enable it:

## Enable "Outbound links" for your site

You can enable "**Outbound links**" as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control what data is collected in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

<img alt="Enable outbound link clicks tracking during onboarding" src={useBaseUrl('img/onboarding-enable-outbound-link-clicks-tracking.png')} />

After you enable outbound link click tracking, we will automatically add a new goal called `Outbound Link: Click` to your site.

:::tip Using WordPress?
The quickest way to start tracking outbound link clicks is to use our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin)
:::

## See all the outbound link clicks in your dashboard

Click on "**Outbound Link: Click**" goal in the "**Goal Conversions**" report of your Plausible dashboard to see the full list of all clicks on all external links and have your dashboard filtered by external clicks only. You can see:

* The number of total external link clicks
* The number of unique external link clicks
* The conversion rate
* Top referral sources that lead to clicks
* Top pages that drive the clicks
* Countries that click on external links
* Devices (screen size, browser, OS) that click on external links

Click on a particular external URL to filter the dashboard by those clicks only and get the full overview of that specific URL.

Want to group external link clicks by the domain name or any other keyword? In the "**Filter**" button in the top right of your dashboard, choose "**Property**". Then select "**url**" (this includes all the external link click URLs we have recorded) and use the "**contains**" option. Add whatever domain or keyword you want to group the external link clicks by and click on the "**Apply Filter**" button.

:::tip Are you using cloaked affiliate links on your site?
Here's how to automatically [track clicks on cloaked affiliate links](custom-automatic-link-tracking.md)
:::

Check out this blog post for more details on the value of [tracking outbound link clicks](https://plausible.io/blog/track-outbound-link-clicks).

## How to disable "Outbound links" tracking for your site

You can control what data is collected in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

When making changes to your optional measurements, your snippet will change so do ensure to insert the newest snippet into your site for outbound link click tracking to stop.

After you disable outbound link click tracking, we will automatically remove the goal called `Outbound Link: Click` from your site.
