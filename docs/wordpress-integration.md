---
title: How to add the script to your WordPress site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Official WordPress plugin for Plausible Analytics is something we'd like to build and support in the future. If you need an immediate solution and don't need Plausible Analytics stats displayed in your WordPress dashboard, here's how you can do that. 

You have two options. One is to use a plugin and the other is to modify one of your theme files.

## Option 1. Add Plausible Analytics to WordPress with a plugin

<img alt="Search for and install Insert Headers and Footers plugin" src={useBaseUrl('img/search-for-plugin.png')} />

In the "**Plugins**" section in the left-hand side navigation within your WordPress dashboard, click on "**Add New**". In the search field in the top right, search for "**[Insert Headers and Footers](https://wordpress.org/plugins/insert-headers-and-footers/)**". 

This is a well-supported plugin with more than 1 million active users and created by Syed Balkhi and the WPBeginner team. It allows you to easily insert any code into your header without editing theme files. 

You could use this plugin to insert Google Analytics, Plausible Analytics and any other script. Click on the "**Install Now**" button. After the installation is finished, click on the "**Activate**" button.

"**Insert Headers and Footers**" will now show up in the "**Settings**" section in the left-hand side navigation within your WordPress dashboard. Click on it to add your scripts. 

Paste your Plausible Analytics tracking code in the "**Scripts in Header**" field and click on the "**Save**" button. In case you do have a caching plugin installed, clear the cache just in case.

<img alt="Paste your Plausible Analytics tracking code" src={useBaseUrl('img/use-a-plugin.png')} />

Now you can go to your website to [verify if the Plausible Analytics script has been added](plausible-script.md#verify-if-the-script-is-installed-on-your-site) and to your Plausible Analytics account to see [whether the stats are being tracked](verify-integration.md).

## Option 2. Add Plausible Analytics to WordPress by modifying a file

This is the alternative option. In the "**Appearance**" section in the left-hand side navigation within your WordPress dashboard, click on "**Theme Editor**". Choose your theme in the top right (your current theme should be selected by default) and click on "**Select**". In "**Theme Files**" locate the "**header.php**" file.

<img alt="Modify your header.php file" src={useBaseUrl('img/modify-a-file.png')} />

Paste your Plausible Analytics tracking code between <head>...</head> tags like seen in the screenshot and click on the "**Update File**". In case you do have a caching plugin installed, clear the cache just in case. Note that you will need to do this process every time you update your theme unless you create a child theme.

Now you can go to your website to [verify if the Plausible Analytics script has been added](plausible-script.md#verify-if-the-script-is-installed-on-your-site) and to your Plausible Analytics account to see [whether the stats are being tracked](verify-integration.md).
