---
title: How to add the script to your WordPress site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are several simple ways to integrate Plausible Analytics with your WordPress website. Let's take a look at them:

## Option 1: Use the Plausible Analytics plugin

This is the way to integrate Plausible Analytics with your WordPress website if you want a nice Plausible Analytics configuration page directly in your WordPress dashboard. 

<img alt="Plausible Analytics plugin" src={useBaseUrl('img/plausible-analytics-wordpress-plugin.png')} />

"**[Plausible Analytics plugin](https://wordpress.org/plugins/plausible-analytics/)**" is built and maintained with the help from [Mehul Gohil](https://mehulgohil.com). It supports these features:

* Serving the Plausible script as a [first party from your custom domain](custom-domain.md)
* Full support for [events and goals including custom properties](custom-event-goals.md) out of the box
* Tracking 404 page errors out of the box
* Tracking outbound link clicks out of the box
* The ability to exclude admin users from having their visits and page views recorded
* Full support for [self-hosted instances of Plausible](self-hosting.md)

### How to track 404 page errors with the WordPress plugin

404 error pages won't show up automatically. You'll have to configure the goal for them to show up on your dashboard.

To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `404`.

<img alt="Add 404 error pages goal" src={useBaseUrl('img/404-error-pages-goal.png')} />

Next, click on the "**Add goal**" button and you'll be taken back to the Goals page. After you've completed this process, all the 404 error pages will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see "**404**" goal as soon as the first visit on an error page has been tracked.

Click on "**404**" to see the full list of all visits on all error pages and have your dashboard filtered by error pages only. Click on a particular error page URL to filter the dashboard by those clicks only and get the full overview of that specific URL. Then you can figure out how your visitors discover the broken links and fix them.

### How to track outbound link clicks with the WordPress plugin

Outbound link clicks won’t show up automatically. You’ll have to configure the goal for them to show up on your dashboard.

To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `Outbound Link: Click`.

<img alt="Add Outbound Link Click goal" src={useBaseUrl('img/outbound-link-click-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. After you've completed this process, all the external link clicks will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see "**Outbound Link: Click**" goal as soon as the first external link click has been tracked.

And that's it. You are now using our WordPress plugin to count your stats including 404 error pages and outbound link clicks. 

## Option 2: Use one of the alternative Plausible Analytics plugins

There are several alternatives thanks to the members of our community. Note that these plugins are community maintained and therefore we take no responsibility for them. Check the individual plugin to see whether it's up to date and supports the features that you need.

### Plausible Connector plugin

* "**[Plausible Connector plugin](https://wordpress.org/plugins/plausible-connector/)**" built and maintained by [alyx](https://eq3.net/plausible-wp/). It supports serving the Plausible script from a custom domain, using your self-hosted instance instead of Cloud, custom events and the ability to exclude admin users from having their visits and page views recorded.

<img alt="Plausible Connector plugin" src={useBaseUrl('img/wordpress-plugin-alyx.png')} />

### Unofficial Plausible Analytics plugin
* "**[Unofficial Plausible Analytics plugin](https://wordpress.org/plugins/unofficial-plausible-analytics)**" built and maintained by Joe Clarke of [TaskBill.io](https://blog.taskbill.io/2020/07/27/plausible-analytics-wordpress-plugin/). It allows you to exclude admin users from having their visits and page views recorded.

<img alt="Unofficial Plausible Analytics Plugin" src={useBaseUrl('img/wordpress-plugin-taskbill.png')} />

You can install these community plugins in the "**Plugins**" section in the left-hand side navigation within your WordPress dashboard. Click on "**Add New**" and in the search field in the top right, search for the name of the plugin.

## Option 3. A general plugin

<img alt="Search for and install Insert Headers and Footers plugin" src={useBaseUrl('img/search-for-plugin.png')} /> 

"**[Insert Headers and Footers](https://wordpress.org/plugins/insert-headers-and-footers/)**" is a well-supported plugin with more than 1 million active users and created by Syed Balkhi and the WPBeginner team. It allows you to easily insert any code into your header without editing theme files. You can use this plugin to insert Google Analytics, Plausible Analytics and any other script. 

In the "**Plugins**" section in the left-hand side navigation within your WordPress dashboard, click on "**Add New**". In the search field in the top right, search for "**Insert Headers and Footers**" and click on the "**Install Now**" button. After the installation is finished, click on the "**Activate**" button.

"**Insert Headers and Footers**" will now show up in the "**Settings**" section in the left-hand side navigation within your WordPress dashboard. Click on it to add your scripts. 

Paste your Plausible Analytics tracking code in the "**Scripts in Header**" field and click on the "**Save**" button. In case you do have a caching plugin installed, clear the cache just in case.

<img alt="Paste your Plausible Analytics tracking code" src={useBaseUrl('img/use-a-plugin.png')} />

Now you can go to your website to [verify if the Plausible Analytics script has been added](plausible-script.md#verify-if-the-script-is-installed-on-your-site) and to your Plausible Analytics account to see [whether the stats are being tracked](verify-integration.md).

## Option 4. Modify a file

This is the manual option. In the "**Appearance**" section in the left-hand side navigation within your WordPress dashboard, click on "**Theme Editor**". Choose your theme in the top right (your current theme should be selected by default) and click on "**Select**". In "**Theme Files**" locate the "**header.php**" file.

<img alt="Modify your header.php file" src={useBaseUrl('img/modify-a-file.png')} />

Paste your Plausible Analytics tracking code between <head>...</head> tags like seen in the screenshot and click on the "**Update File**". In case you do have a caching plugin installed, clear the cache just in case. Note that you will need to do this process every time you update your theme unless you create a child theme.

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](plausible-script.md#verify-if-the-script-is-installed-on-your-site).
