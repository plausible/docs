---
title: How to add the script to your WordPress site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are several simple ways to integrate Plausible Analytics with your WordPress website. Let's take a look at them:

## Option 1: Use one of the Plausible Analytics plugins

This is the recommended way to integrate Plausible Analytics with your WordPress website as it gives you a nice Plausible Analytics configuration page directly in your WordPress dashboard:

### Plausible Analytics plugin

* "**[Plausible Analytics plugin](https://wordpress.org/plugins/plausible-analytics/)**" is built and maintained with the help from [Mehul Gohil](https://mehulgohil.com). It supports serving the Plausible script as a first party from your custom domain and the ability to exclude admin users from having their visits and page views recorded.

<img alt="Plausible Analytics plugin" src={useBaseUrl('img/plausible-analytics-wordpress-plugin.png')} />

### Plausible Connector plugin

* "**[Plausible Connector plugin](https://wordpress.org/plugins/plausible-connector/)**" built and maintained by [alyx](https://eq3.net/plausible-wp/). It supports serving the Plausible script from a custom domain, using your self-hosted instance instead of Cloud, custom events and the ability to exclude admin users from having their visits and page views recorded.

<img alt="Plausible Connector plugin" src={useBaseUrl('img/wordpress-plugin-alyx.png')} />

### Unofficial Plausible Analytics plugin
* "**[Unofficial Plausible Analytics plugin](https://wordpress.org/plugins/unofficial-plausible-analytics)**" built and maintained by Joe Clarke of [TaskBill.io](https://blog.taskbill.io/2020/07/27/plausible-analytics-wordpress-plugin/). It allows you to exclude admin users from having their visits and page views recorded.

<img alt="Unofficial Plausible Analytics Plugin" src={useBaseUrl('img/wordpress-plugin-taskbill.png')} />

You can install these community plugins in the "**Plugins**" section in the left-hand side navigation within your WordPress dashboard. Click on "**Add New**" and in the search field in the top right, search for the name of the plugin.

## Option 2. A general plugin

<img alt="Search for and install Insert Headers and Footers plugin" src={useBaseUrl('img/search-for-plugin.png')} /> 

"**[Insert Headers and Footers](https://wordpress.org/plugins/insert-headers-and-footers/)**" is a well-supported plugin with more than 1 million active users and created by Syed Balkhi and the WPBeginner team. It allows you to easily insert any code into your header without editing theme files. You can use this plugin to insert Google Analytics, Plausible Analytics and any other script. 

In the "**Plugins**" section in the left-hand side navigation within your WordPress dashboard, click on "**Add New**". In the search field in the top right, search for "**Insert Headers and Footers**" and click on the "**Install Now**" button. After the installation is finished, click on the "**Activate**" button.

"**Insert Headers and Footers**" will now show up in the "**Settings**" section in the left-hand side navigation within your WordPress dashboard. Click on it to add your scripts. 

Paste your Plausible Analytics tracking code in the "**Scripts in Header**" field and click on the "**Save**" button. In case you do have a caching plugin installed, clear the cache just in case.

<img alt="Paste your Plausible Analytics tracking code" src={useBaseUrl('img/use-a-plugin.png')} />

Now you can go to your website to [verify if the Plausible Analytics script has been added](plausible-script.md#verify-if-the-script-is-installed-on-your-site) and to your Plausible Analytics account to see [whether the stats are being tracked](verify-integration.md).

## Option 3. Modify a file

This is the alternative option. In the "**Appearance**" section in the left-hand side navigation within your WordPress dashboard, click on "**Theme Editor**". Choose your theme in the top right (your current theme should be selected by default) and click on "**Select**". In "**Theme Files**" locate the "**header.php**" file.

<img alt="Modify your header.php file" src={useBaseUrl('img/modify-a-file.png')} />

Paste your Plausible Analytics tracking code between <head>...</head> tags like seen in the screenshot and click on the "**Update File**". In case you do have a caching plugin installed, clear the cache just in case. Note that you will need to do this process every time you update your theme unless you create a child theme.

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](plausible-script.md#verify-if-the-script-is-installed-on-your-site).
