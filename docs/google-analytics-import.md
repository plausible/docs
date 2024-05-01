---
title: Import stats from Google Analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible Analytics allows you to import your historical stats from Google's Universal Analytics (UA) and Google Analytics 4 (GA4). You can import multiple Google Analytics properties into the same Plausible dashboard without having any gaps in the data and without any double-counting.

Here's how you can import your historical Google Analytics stats into your Plausible dashboard.

## How to import your historical stats from Google Analytics to Plausible Analytics 

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to import the data for.

2. In the "**Imports**" section, find the "**Import Data**" panel. You can link your Google account to your Plausible account by clicking on the "**Google Analytics**" button.

<img alt="Import Google Analytics data into Plausible" src={useBaseUrl('img/import-google-analytics-data.png')} />

3. After linking Plausible to your Google account, you'll see a drop-down selection menu listing all the existing Google Analytics properties (both UA and GA4) associated with the connected Google account. Select the property that you'd like to import and click on the "**Continue**" button.

4. On the next screen, you can click on the "**Confirm import**" button to start the data import process. The import should take no more than a few minutes for most sites but if you have a site with a lot of historical data, it may take up to a couple of hours to complete due to Google's API limits. You'll receive an email when the import has been completed. 

5. Once you have received the email, the imported data will be visible in your Plausible dashboard alongside the native data. An icon is shown in the top-right of the dashboard when imported data has been included. Clicking this icon will stop the imported data from being displayed and the icon will then appear with a strike-through.

:::tip Google will shut down the Universal Analytics user interface and the API on July 1st 2024
You should import your UA historical data into Plausible before Google deletes your data
:::

## Import multiple Google Analytics properties into the same Plausible dashboard

If you'd like to import multiple Google Analytics properties into the same Plausible dashboard, please go through the process above again and choose a different property to import. You can import a maximum of 5 different properties into the same Plausible dashboard. 

In the "**Imports**" section, you can see the overview of all your existing imports to that specific Plausible dashboard. For each import, we list the Google Analytics property ID, the number of pageviews imported and the time range that the import covers.

## How much data is imported?

Data is imported in aggregate for each date, from your first Google Analytics visitor until your first Plausible Analytics visitor. This is to avoid double-counting visits. 

We also have measures in place to detect and avoid double-counting visitors if you import multiple GA properties into the same Plausible dashboard. Here's an example of how it works:

1. Say that you started counting visitors with Plausible for your site on March 11th 2024
2. You do the first Google Analytics import into that Plausible dashboard and choose your old UA property. We automatically import the data from when you started using that UA property until you stopped using it (say Oct 25th 2008 to May 19th 2023)
3. Then you do the second Google Analytics import into that Plausible dashboard and this time you choose your newer GA4 property. We automatically import the data from when you stopped using UA until you started using Plausible (May 19th 2023 to Mar 11th 2024)

This makes it easy and convenient to import all your historical Google Analytics stats from multiple properties without having any gaps in your data and without any double-counting. It also allows you the flexibility to choose the order in which you import your historical properties into Plausible. For instance, if you've used GA4 and UA simultanously for some time, you can choose which data you prefer to keep in Plausible and import that specific property first. The second import will cover the missing date ranges and will not overwrite the first import.

:::tip Do you want your Google Analytics data to replace the native Plausible data up to today?
This isn't recommended as the native data is superior to the imported data but it's possible if you wish to do so. You can [reset the Plausible stats](reset-site-data.md) first and make the import after that
:::

### Google Analytics Data Retention limits

How long time frame we can import the data for also depends on the data retention limits in Google Analytics. If there are no data retention limits in your Google Analytics account, we can import all the data.

If you have strict data retention limits in place in Google Analytics (for instance GA4 properties have data retention limit of up to 14 months), we can only show the metrics in the top chart of your Plausible dashboard for periods outside of your data retention limit as Google automatically deletes all the other stats.

## How do I delete the imported data?

Data you have imported can be deleted by returning to your site's "**Imports**" settings page and clicking the "**Delete Import**" button in the "**Existing Imports**" section. This action won't affect the native data you have collected using our script directly.

<img alt="Delete Google Analytics data from Plausible" src={useBaseUrl('img/delete-google-analytics-data.png')} />

## My import has failed

This may be due to the user metric setting in your Google Analytics account. We found out that for some Universal Analytics properties, changing the user metric settings is necessary to get correct data out of the Google API.

You'll have to take an extra step to make sure we can import the data smoothly. Please navigate to your Google Analytics admin. In the "**Property Settings**", go to "**User Analysis**". In that section, you'll need to make sure that "**Enable Users Metric in Reporting**" is OFF. Then please try to do the import once again.

## Can I delete my Google Analytics account after a successful import?

We no longer need access to your Google Analytics account after the import has been completed successfully. If you're happy with the way your Google Analytics stats look in your Plausible Analytics dashboard, you can safely delete your Google Analytics account. Your imported data will stay in your Plausible account. 

## How does imported data differ from Plausible native data?

We have taken many steps to make the imported data feel as fast, easy, and straightforward as the native data collected by Plausible directly. But it's important to note that imported data won't be as flexible as the native data that we collect using our script. Here are the differences:

### Filtering 

Google Analytics data is imported using Google API which has limits on the number of dimensions that can be fetched in a single query. This means we can't fetch entries that contain all the dimensions we're interested in and instead need to fetch data for each dimension individually. 

This means that we're unfortunately unable to look at how dimensions interact which makes it impossible to use [our filtering capability](filters-segments.md) with the imported data.

### Unique visitors

When you're looking at a longer period of time, you may see a discrepancy in the number of total unique visitors in your data in Google Analytics and in the Google Analytics data you imported to Plausible. This happens because we only import day-level aggregated data. 

To get the number of unique visitors in a longer period of time (say one month) we just sum up the daily unique visitor numbers. We can't do the proper unique visitors calculation like Google Analytics is doing.

### UTM sources

Google Analytics aggregates UTM source under the "**source**" dimension, and they don't expose a separate "**UTM source**" dimension from their API. This is why we cannot show UTM sources imported from Google Analytics.

### Browser and operating system versions

We can import your traffic split between the different browsers and operating systems. However, you can't drill down to see the imported data's exact browser versions. The OS version can only be drilled down for data imported from Google Analytics 4.

### Exit pages

Currently, you can only see the Exit Pages report for data imported from Universal Analytics. Google Analytics 4 API does not expose that information yet.

### Goals

It's currently not possible to import your goals, custom events and ecommerce revenue data.

### Day view graph

We can't display hourly graph interval on the daily view.

### Export

It isn't possible to export the data imported from Google Analytics using our usual methods, such as the [CSV export](export-stats.md) and the [stats API](stats-api.md).
