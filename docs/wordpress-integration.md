---
title: How to add the script to your WordPress site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here's how to integrate Plausible Analytics with your WordPress website and get a nice Plausible configuration page directly in your WordPress dashboard.

<img alt="Plausible Analytics plugin" src={useBaseUrl('img/plausible-analytics-wordpress-plugin.png')} />

"**[Plausible Analytics plugin](https://wordpress.org/plugins/plausible-analytics/)**" is built and maintained with the help from [Mehul Gohil](https://mehulgohil.com). It supports these features:

* Serving the Plausible script as a [first party from your custom domain](custom-domain.md)
* Full support for [events and goals including custom properties](custom-event-goals.md) out of the box
* Tracking 404 page errors out of the box
* Tracking outbound link clicks out of the box
* Excludes admin users from having their visits and page views recorded out of the box (but you can disable this in case you want to track your visits)
* Full support for [self-hosted instances of Plausible](self-hosting.md)

## Create your Plausible Analytics account

To use our WordPress plugin, you need to have a Plausible Analytics account. [Sign up for an account on our website](register-account.md) and [add the websites you'd like to track](add-website.md). Then you're ready to go to your WordPress dashboard.

## Install our WordPress plugin

You can install the Plausible Analytics plugin in the "**Plugins**" section in the left-hand side navigation within your WordPress dashboard. 

Click on "**Add New**", in the search field in the top right, search for the name of the plugin ([Plausible Analytics](https://wordpress.org/plugins/plausible-analytics/)) and click on the "**Install Now**" button. 

After the installation is finished, click on the "**Activate**" button.

"**Plausible Analytics**" will now show up in the "**Settings**" section in the left-hand side navigation within your WordPress dashboard. Click on it to explore the different options available.

## Enable the custom domain feature (optional)

If you'd like to serve our script as a first party connection from your subdomain (such as plausible.yourdomain.com or stats.yourdomain.com), you need to enable the custom domain feature in your Plausible Analytics account. You can [see the instructions here](custom-domain.md).

After you've completed the setup process on our website, you can then switch on the custom domain feature in our WordPress plugin too.

## Track analytics for administrator 

By default, our WordPress plugin excludes your own visits from being counted in the stats. However, if you'd like to count your own visits, you can enable the tracking for yourself too.

## How to track 404 page errors with the WordPress plugin

404 error pages won't show up automatically in your Plausible dashboard. You'll have to configure the goal for them to show up.

To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `404`.

<img alt="Add 404 error pages goal" src={useBaseUrl('img/404-error-pages-goal.png')} />

Next, click on the "**Add goal**" button and you'll be taken back to the Goals page. After you've completed this process, all the 404 error pages will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see "**404**" goal as soon as the first visit on an error page has been tracked.

Click on "**404**" to see the full list of all visits on all error pages and have your dashboard filtered by error pages only. Click on a particular error page URL to filter the dashboard by those clicks only and get the full overview of that specific URL. Then you can figure out how your visitors discover the broken links and fix them.

## How to track outbound link clicks with the WordPress plugin

Outbound link clicks won’t show up automatically in your Plausible dashboard. You’ll have to configure the goal for them to show up.

To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `Outbound Link: Click`.

<img alt="Add Outbound Link Click goal" src={useBaseUrl('img/outbound-link-click-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. After you've completed this process, all the external link clicks will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see "**Outbound Link: Click**" goal as soon as the first external link click has been tracked.

## Verify that the stats are being tracked

And that's it. You are now using our WordPress plugin to count your stats including 404 error pages and outbound link clicks. 

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible account to see whether the stats are being tracked. See here [how to verify the integration](plausible-script.md#verify-if-the-script-is-installed-on-your-site).

The development of our WordPress plugin is done in the open [on GitHub](https://github.com/plausible/wordpress) so you can take a look and submit any feature requests.

:::note
In case you do have a caching plugin installed, you may need to clear the cache for any changes to take effect. 
:::
