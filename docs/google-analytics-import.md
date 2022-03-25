---
title: Importing stats from Google Analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Universal Analytics, the current version of Google Analytics, will be sunset and [will stop counting stats](https://plausible.io/blog/universal-google-analytics-is-dead) on July 1st 2023. There’s no way to import your historical Universal Analytics stats into the new Google Analytics 4 edition so we've put a lot of effort into making a Google Analytics stats import tool ourselves. 

## How to import your historical stats from Google Analytics to Plausible Analytics 

Here's how to import your historical Google Analytics (Universal Analytics) stats into your Plausible Analytics account.

1. Go to the your Plausible Analytics [site settings](website-settings.md) for the website you'd like to import the data for.

2. In the "**General**" tab, find the "**Data Import from Google Analytics**" panel. You can link your Google account to your Plausible account by clicking on the "**Continue With Google**" button.

3. You will now see a drop-down selection menu listing Google Analytics properties that are associated with your Google account. Select the appropriate property. This will generally be the property with the same domain name as your Plausible site. Then click on the "**Continue**" button.

4. On the next screen, you can click on the "**Confirm import**" button to start the data import process. Depending on the amount of data you have, this may take some time. This is run in the background, so you will receive an email when the import has been completed. It should take no more than a couple of minutes for the majority of sites.

5. Once you have received the email, the imported data will be visible in your Plausible dashboard. 

## How do I view the imported data?

The imported data will be displayed alongside your native Plausible data in the same Plausible dashboard. An icon is displayed in the top-right of the dashboard when imported data has been included.

Clicking this icon will stop the imported data from being displayed and the icon will then appear with a strike-through.

## How do I delete the imported data?

Data that you have imported can be deleted by returning to your site's general settings page and clicking the "**Clear imported pageviews**" button in the "**Data Import from Google Analytics**" panel. This action will not affect the native data you have collected using our script directly.

## How much data is imported?

Data is imported in aggregate for each date, from your first Google Analytics visitor until your first Plausible Analytics visitor. This is to avoid double-counting visits. 

:::note
Do you want your imported Google Analytics data to replace the native Plausible Analytics data all the way up to today? This is not recommended as the native data is superior to the imported data but it is possible if you wish to do so. You can [reset the Plausible stats](reset-site-data.md) first and make the import after that.
:::

How long time frame we can import the data for depends on your data retention limits in your Google Analytics settings. If you haven't set any data retention limits in your Google Analytics settings, we can import all the data from when you started using Google Analytics for the particular website.

You can check the data retention limit you have set for your Google Analytics property in your Google Analytics admin settings by visiting the "**Tracking Info**" section and clicking on "**Data Retention**". 

Do you have strict data retention limits in place in your Google Analytics? We can only show the metrics in the top chart of your Plausible dashboard for periods outside of your data retention limit as Google automatically deletes all the other stats.

## Can I delete my Google Analytics account after a successful import?

We no longer need access to your Google Analytics account after the import has been completed succesfully. If you're happy with the way your old Google Analytics stats look in Plausible Analytics, you can safely delete your Google Analytics account. Your imported data will stay in your Plausible account. 

## How does imported data differ from Plausible native data?

We have taken many steps to make the imported data feel as fast, as easy and as straightforward as the native data that is collected by Plausible directly. But it is important to note that imported data will not be as flexible as the native data that we collect using our script. Here are the differences:

### Filtering 

The Google Analytics data is imported using Google's Reporting API v4 which has limits on the number of dimensions that can be fetched in a single query. This means we cannot fetch entries that contain all of the dimensions we are interested in and instead need to fetch data for each dimension individually. 

Unfortunately, this means we are unable to look at how dimensions interact. For example, it is not possible to use [our filters](filters-segments.md) with the imported data.

### UTM traffic

Google Analytics aggregates multiple dimensions under the name "**source**", including referral sources and the value of the UTM source parameter if that was present during a visit. 

If AdWords auto-tagging was enabled for a visit, then this takes the value "**google**". This means that we are unable to get the referrer for any visits that used a UTM source parameter. The compromise we have made with this problem is to save referrers - identified as being domain names - as "**sources**" and everything else as "**UTM sources**". 

In the case of AdWords tracking, this is saved as a "**UTM source**" with the value "**adwords**".

### Goals, regions, cities and browser/OS versions

While the Reporting API lets us fetch data about which countries visitors connect from, it does not give us access to region and city location data in a standard format. For each visit recorded by Google Analytics, we will have the country, but that visit will have an unknown region and city.

The same is the case for browser and OS versions. We can import your traffic split between the different browsers and operating systems, but you cannot drill down to see the imported data's exact browser versions and OS versions.

It is also not possible to import your goal data.

### Day view graph

Another restriction of the imported data compared to the native data is that we cannot display hourly graphs on the daily view.

### Export

It is not possible to export the data imported from Google Analytics using our usual methods, such as the [CSV export](export-stats.md) and the [stats API](stats-api.md).
