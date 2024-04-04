---
title: Import stats from Google Analytics and other tools
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible Analytics allows you to import your historical stats from Google Universal Analytics and Google Analytics 4 (GA4). Additionally, you can import data via CSV files which can be used to import stats from other analytics tools. You can import multiple properties into the same Plausible dashboard too.

Here's how you can import your historical stats into your Plausible dashboard.

## How to import your historical stats from Google Analytics to Plausible Analytics 

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to import the data for.

2. In the "**Imports & Exports**" tab, find the "**Import Data**" panel. You can link your Google account to your Plausible account by clicking on the "**Google Analytics**" button.

<img alt="Import Google Analytics data into Plausible" src={useBaseUrl('img/import-google-analytics-data.png')} />

3. After linking Plausible to your Google account, you will see a drop-down selection menu listing all the existing Google Analytics properties (both UA and GA4) associated with the connected Google account. Select the property that you'd like to import and click on the "**Continue**" button.

4. On the next screen, you can click on the "**Confirm import**" button to start the data import process. Depending on the amount of data you have, this may take some time. You will receive an email when the import has been completed. It should take no more than a couple of minutes for most sites.

5. Once you have received the email, the imported data will be visible in your Plausible dashboard. 

:::tip Google will shut down the Universal Analytics user interface and the API on July 1st 2024
You should import your UA historical data into Plausible before Google deletes your data
:::

## Import multiple properties into the same Plausible dashboard

If you'd like to import multiple properties into the same Plausible dashboard, please go through the process above again and choose a different property to import. You can import a maximum of 5 different properties into one Plausible dashboard. 

In the "**Imports & Exports**" section, you can see the overview of all your existing imports to that specific Plausible dashboard. For each import, we list the property ID, the number of pageviews imported and the time range that the import covers.

## How much data is imported?

Data is imported in aggregate for each date, from your first Google Analytics visitor until your first Plausible Analytics visitor. This is to avoid double-counting visits. 

We also have measures in place to detect and avoid double-counting visitors if you import multiple properties into the same Plausible dashboard. Here's an example:

1. You started counting visitors with Plausible for a specific site on March 11th 2024
2. You do the first Google Analytics import into that Plausible dashboard and choose your old UA property. We automatically import the data from when you started using that UA property until you stopped using it (say Oct 25th 2008 to May 19th 2023)
3. You do another Google Analytics import into that same Plausible dashboard and this time choose your newer GA4 property. We automatically import the data from when you stopped using UA until you started using Plausible (May 19th 2023 to Mar 11th 2024)

This makes it easy and convenient to import all your historical stats without having any gaps in the data and without any double-counting. It also allows you the flexibility to choose the order in which you import your historical properties into Plausible. For instance, if you've used GA4 and UA simultanously for some time, you can choose which data you prefer to keep in Plausible and do that specific import first. The subsequent import will cover the missing date ranges.

:::tip Do you want your Google Analytics data to replace the native Plausible data up to today?
This isn't recommended as the native data is superior to the imported data but it's possible if you wish to do so. You can [reset the Plausible stats](reset-site-data.md) first and make the import after that
:::

### Google Analytics Data Retention limits

How long time frame we can import the data for also depends on the data retention limits in Google Analytics. If there are no data retention limits in your Google Analytics account, we can import all the data.

If you have strict data retention limits in place in Google Analytics (for instance GA4 properties have data retention limit of up to 14 months), we can only show the metrics in the top chart of your Plausible dashboard for periods outside of your data retention limit as Google automatically deletes all the other stats.

## How to import your historical stats via CSV files

This makes it possible to import data from various analytics tools and it allows you to migrate from the Plausible Community Edition (CE) to our managed hosting (or vice-versa).

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to import the data for.

2. If you'd like to migrate from Plausible CE to our managed hosting, go into the "**Imports & Exports**" tab, find the "**Export Data**" panel and click on the "**Export to CSV**" button to export all the data.

3. Also in the "**Imports & Exports**" tab, find the "**Import Data**" panel and click on the "**CSV**" button to import your CSV files.

4. Select all the CSV files that you'd like to import and click on the "**Confirm import**" button. If you're importing from different analytics tools, please ensure each file follows our CSV format guidelines.
   
## How do I view the imported data?

The imported data will be displayed alongside your native Plausible data in the same Plausible dashboard. An icon is shown in the top-right of the dashboard when imported data has been included.

<img alt="View Google Analytics data into Plausible" src={useBaseUrl('img/stats-with-google-import.png')} />

Clicking this icon will stop the imported data from being displayed and the icon will then appear with a strike-through.

<img alt="Hide Google Analytics data into Plausible" src={useBaseUrl('img/stats-without-google-import.png')} />

## How do I delete the imported data?

Data you have imported can be deleted by returning to your site's "**Imports & Exports**" settings page and clicking the "**Delete Import**" button in the "**Existing Imports**" section. This action won't affect the native data you have collected using our script directly.

<img alt="Delete Google Analytics data from Plausible" src={useBaseUrl('img/delete-google-analytics-data.png')} />

## My import has failed

This may be due to the user metric setting in your Google Analytics account. We found out that for some Universal Analytics properties, changing the user metric settings is necessary to get correct data out of the Google API.

You will have to take an extra step to make sure we can import the data smoothly. Please navigate to your Google Analytics admin, and in the "**Property Settings**", go to "**User Analysis**". In that section, you'll need to make sure that "**Enable Users Metric in Reporting**" is OFF. Then please try to do the import once again.

## Can I delete my Google Analytics account after a successful import?

We no longer need access to your Google Analytics account after the import has been completed successfully. If you're happy with the way your Google Analytics stats look in Plausible Analytics, you can safely delete your Google Analytics account. Your imported data will stay in your Plausible account. 

## How does imported data differ from Plausible native data?

We have taken many steps to make the imported data feel as fast, easy, and straightforward as the native data collected by Plausible directly. But it's important to note that imported data won't be as flexible as the native data that we collect using our script. Here are the differences:

### Filtering 

The Google Analytics data is imported using Google's Reporting API v4 which has limits on the number of dimensions that can be fetched in a single query. This means we can't fetch entries that contain all the dimensions we are interested in and instead need to fetch data for each dimension individually. 

Unfortunately, this means we are unable to look at how dimensions interact. For example, it isn't possible to use [our filters](filters-segments.md) with the imported data.

### Unique visitors

When you're looking at a longer period of time, you may see a discrepancy in the number of total unique visitors in your data in Google Analytics and in the Google Analytics data you imported to Plausible. This happens because we only import day-level aggregated data. 

To get the number of unique visitors in a longer period of time (say one month) we just sum up the daily unique visitor numbers. We can't do the proper unique visitors calculation like Google Analytics is doing. 

### UTM traffic

Google Analytics aggregates multiple dimensions under the name "**source**", including referral sources and the value of the UTM source parameter if that was present during a visit. 

If AdWords auto-tagging was enabled for a visit, then this takes the value "**google**". This means that we are unable to get the referrer for any visits that used a UTM source parameter. The compromise we have made with this problem is to save referrers - identified as being domain names - as "**sources**" and everything else as "**UTM sources**". 

In the case of AdWords tracking, this is saved as a "**UTM source**" with the value "**adwords**".

### Goals and browser/OS versions

We can import your traffic split between the different browsers and operating systems, but you can't drill down to see the imported data's exact browser versions and OS versions. 

It's also not possible to import your goals and custom event data.

### Day view graph

Another restriction of the imported data compared to the native data is that we can't display hourly graphs on the daily view.

### Export

It isn't possible to export the data imported from Google Analytics using our usual methods, such as the [CSV export](export-stats.md) and the [stats API](stats-api.md).
