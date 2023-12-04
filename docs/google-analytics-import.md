---
title: Import stats from Google Analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Universal Analytics, the third version of Google Analytics, was sunset and [stopped counting stats](https://plausible.io/blog/universal-google-analytics-is-dead) on July 1st 2023. 

There’s no way to import your historical Universal Analytics stats into the new Google Analytics 4. Further to this, Google will shut down the Universal Analytics user interface and the API on July 1st 2024. They recommend that you export your historical data before this date.

We've put a lot of effort into making a Google Analytics stats import tool ourselves. Here's how you can import your historical Google Analytics stats into your Plausible dashboard before Google deletes your data.

## How to import your historical stats from Google Analytics to Plausible Analytics 

Here's how to import your historical Google Analytics (Universal Analytics) stats into your Plausible Analytics account.

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to import the data for.

2. In the "**Integrations**" tab, find the "**Google Analytics Data Import**" panel. You can link your Google account to your Plausible account by clicking on the "**Continue With Google**" button.

<img alt="Import Google Analytics data into Plausible" src={useBaseUrl('img/import-google-analytics-data.png')} />

3. You will now see a drop-down selection menu listing Google Analytics properties associated with your Google account. Select the appropriate property. This will generally be the property with the same domain name as your Plausible site. Then click on the "**Continue**" button.

:::note
Cannot see your Google Analytics property in the list of properties? You may be trying to import a Google Analytics 4 (GA4) property rather than a Universal Analytics (UA) property. Our Google Analytics import works for UA properties only at the moment. We plan to build a GA4 import in the future.
:::

4. On the next screen, you can click on the "**Confirm import**" button to start the data import process. Depending on the amount of data you have, this may take some time. This is run in the background, so you will receive an email when the import has been completed. It should take no more than a couple of minutes for most sites.

5. Once you have received the email, the imported data will be visible in your Plausible dashboard. 

## How do I view the imported data?

The imported data will be displayed alongside your native Plausible data in the same Plausible dashboard. An icon is shown in the top-right of the dashboard when imported data has been included.

<img alt="View Google Analytics data into Plausible" src={useBaseUrl('img/stats-with-google-import.png')} />

Clicking this icon will stop the imported data from being displayed and the icon will then appear with a strike-through.

<img alt="Hide Google Analytics data into Plausible" src={useBaseUrl('img/stats-without-google-import.png')} />

## How do I delete the imported data?

Data you have imported can be deleted by returning to your site's "**Integrations**" settings page and clicking the "**Clear imported pageviews**" button in the "**Google Analytics Data Import**" panel. This action won't affect the native data you have collected using our script directly.

<img alt="Delete Google Analytics data from Plausible" src={useBaseUrl('img/delete-google-analytics-data.png')} />

## How much data is imported?

Data is imported in aggregate for each date, from your first Google Analytics visitor until your first Plausible Analytics visitor. This is to avoid double-counting visits. 

:::note
Do you want your imported Google Analytics data to replace the native Plausible Analytics data up to today? This isn't recommended as the native data is superior to the imported data, but it's possible if you wish to do so. You can [reset the Plausible stats](reset-site-data.md) first and make the import after that.
:::

How long time frame we can import the data for depends on your data retention limits in your Google Analytics settings. If you haven't set any data retention limits in your Google Analytics settings, we can import all the data from when you started using Google Analytics for the particular website.

You can check the data retention limit you have set for your Google Analytics property in your Google Analytics admin settings by visiting the "**Tracking Info**" section and clicking on "**Data Retention**". 

Do you have strict data retention limits in place in your Google Analytics? We can only show the metrics in the top chart of your Plausible dashboard for periods outside of your data retention limit as Google automatically deletes all the other stats.

## My import has failed

This may be due to the user metric setting in your Google Analytics account. We found out that for some accounts changing the user metric settings is necessary to get correct data out of the Google API.

You will have to take an extra step to make sure we can import the data smoothly. Please navigate to your Google Analytics admin, and in the "**Property Settings**", go to "**User Analysis**". In that section, you'll need to make sure that "**Enable Users Metric in Reporting**" is OFF. Then please try to do the import once again.

## Can I delete my Google Analytics account after a successful import?

We no longer need access to your Google Analytics account after the import has been completed successfully. If you're happy with the way your old Google Analytics stats look in Plausible Analytics, you can safely delete your Google Analytics account. Your imported data will stay in your Plausible account. 

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
