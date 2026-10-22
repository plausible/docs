---
title: Import stats from Google Analytics
sidebar_label: Google Analytics
description: "Import historical Google Analytics 4 data into Plausible. Learn how to transfer your stats, manage date ranges and understand imported-data limitations."
---

<head>
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why are the numbers lower in Plausible than in Google Analytics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GA4 uses modeled data and consent mode to estimate traffic for users who declined cookies. Plausible does not use modeled data and only counts real visits it received. If consent mode was enabled in GA4, GA4 will show higher numbers for users who rejected tracking."
          }
        },
        {
          "@type": "Question",
          "name": "Why are the numbers higher in Plausible than in Google Analytics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plausible does not require cookie consent and is blocked far less often than Google Analytics by browser-level tracking protection. GA4 is blocked by Safari ITP, Firefox Enhanced Tracking Protection and many ad blockers. Plausible natively captures more traffic, particularly from privacy-conscious users."
          }
        },
        {
          "@type": "Question",
          "name": "Why is data missing after the import appears to complete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the selected GA4 property, the date range and the import status in your Plausible site settings. Compare the missing period with the standard reports in that GA4 property. Plausible can only import data returned by the Google Analytics Data API. The event-level retention setting alone does not tell you which aggregated historical stats are available."
          }
        },
        {
          "@type": "Question",
          "name": "Can I import multiple Google Analytics properties into the same Plausible dashboard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can import up to 5 different Google Analytics properties into the same Plausible dashboard. The import tool automatically handles date ranges to avoid double-counting."
          }
        }
      ]
    }
  `}</script>
</head>

import useBaseUrl from '@docusaurus/useBaseUrl';
import CtaBox from '@site/src/components/CtaBox';

Plausible Analytics allows you to import your historical stats from Google Analytics 4 (GA4). You can import multiple Google Analytics properties into the same Plausible dashboard. The importer adjusts date ranges to avoid double-counting, but cannot recover missing GA4 data or fill gaps after Plausible started collecting your traffic. You can apply basic filters to imported data and export it using our regular exporting methods ([CSV](export-stats.md) and [stats API](stats-api.md)). See [how imported data differs from native data](#how-does-imported-data-differ-from-plausible-native-data) for the limitations.

Here's how you can import your historical Google Analytics stats into your Plausible dashboard.

<CtaBox
  headline="Migrating from Google Analytics? Bring your historical data with you"
  link="https://plausible.io/migrate-from-google-analytics"
  linkText="Migration guide"
  secondaryLink="https://plausible.io/register"
  secondaryText="Start free trial"
/>

## How to import your historical stats from Google Analytics to Plausible Analytics 

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to import the data for.

2. In the **Imports & Exports** section, find the **Import Data** panel. You can link your Google account to your Plausible account by clicking on the **Google Analytics** button.

<div class="browser">
<img alt="Import Google Analytics data into Plausible" src={useBaseUrl('img/import-google-analytics-data.png')} />
</div>

3. After linking Plausible to your Google account, you'll see a drop-down selection menu listing all the existing Google Analytics properties associated with the connected Google account. Select the property that you'd like to import and click on the **Continue** button.

4. On the next screen, you can click on the **Confirm import** button to start the data import process. The import should take no more than a few minutes for most sites but if you have a site with a lot of historical data, it may take up to a couple of hours to complete due to Google's API limits. You'll receive an email when the import has been completed. 

5. Once you have received the email, the imported data will be visible in your Plausible dashboard alongside the native data. You can turn this off by opening the options menu (the **⋮** icon in the top right of the chart) and toggling off **Include imported data**.

## Import multiple Google Analytics properties into the same Plausible dashboard

If you'd like to import multiple Google Analytics properties into the same Plausible dashboard, please go through the process above again and choose a different property to import. You can import a maximum of 5 different properties into the same Plausible dashboard. 

In the **Imports & Exports** section, you can see the overview of all your existing imports to that specific Plausible dashboard. For each import, we list the Google Analytics property ID, the number of pageviews imported and the time range that the import covers.

Each import brings in the whole Google Analytics property. It can't be split by hostname, so if one property tracked several sites, the data for all of them goes into the one Plausible site you import it into.

## How much data is imported?

Data is imported in aggregate for each date, from your first Google Analytics visitor until your first Plausible Analytics visitor. This is to avoid double-counting visits. 

We also have measures in place to detect and avoid double-counting visitors if you import multiple GA properties into the same Plausible dashboard. Here's an example of how it works:

1. Say that you started counting visitors with Plausible for your site on March 11th 2024
2. You do the first Google Analytics import into that Plausible dashboard and choose your oldest GA property. We automatically import the data from when you started using that GA property until you stopped using it (say Oct 25th 2008 to May 19th 2023)
3. Then you do the second Google Analytics import into that Plausible dashboard and this time you choose your newer GA property. We automatically import the data from when you stopped using the first GA property until you started using Plausible (May 19th 2023 to Mar 11th 2024)

You can choose the order in which you import your historical properties into Plausible. For instance, if you've used different GA properties simultaneously for some time, import the property whose data you prefer first. A subsequent import uses the longest available date range that does not overlap existing imports, and will not overwrite them. This avoids double-counting, but does not guarantee a complete history: gaps can remain where data is unavailable or outside the import's date range.

:::tip Do you want your Google Analytics data to replace the native Plausible data up to today?
This isn't recommended as the native data is superior to the imported data but it's possible if you wish to do so. You can [reset the Plausible stats](reset-site-data.md) first and make the import after that
:::

### Google Analytics Data Retention limits

Standard GA4 properties offer 2- or 14-month retention for user-level and event-level data. Google applies separate restrictions to very large properties. These settings affect explorations and funnel reports, not standard aggregated reports. See [Google's data retention documentation](https://support.google.com/analytics/answer/7667196?hl=en).

Plausible imports aggregated reports through the Google Analytics Data API, rather than raw user-level or event-level records. The 2- or 14-month setting is therefore not a blanket cutoff for your import history. Older stats may still be available, depending on what the API returns for each report.

## How do I delete the imported data?

Data you have imported can be deleted by returning to your site's **Imports & Exports** settings page and clicking the bin icon in the Imports section. This action won't affect the native data you have collected using our script directly.

<div class="browser">
<img alt="Delete Google Analytics data from Plausible" src={useBaseUrl('img/delete-google-analytics-data.png')} />
</div>

## Can I delete my Google Analytics account after a successful import?

We no longer need access to your Google Analytics account after the import has been completed successfully. If you're happy with the way your Google Analytics stats look in your Plausible Analytics dashboard, you can safely delete your Google Analytics account. Your imported data will stay in your Plausible account. 

## How does imported data differ from Plausible native data?

We have taken many steps to make the imported data feel as fast, easy, and straightforward as the native data collected by Plausible directly. But it's important to note that imported data won't be as flexible as the native data that we collect using our script. Here are the differences:

### Filtering 

Simple filtering of imported data is possible but we're unable to look at how some metrics interact with each other which makes [the more advanced segmenting](filters-segments.md) limited. Whenever imported data cannot be included due to the applied filters, you will see a warning bubble stating “Imported data is excluded due to applied filters” in the corresponding report.

### Unique visitors

When you're looking at a longer period of time, you may see a discrepancy in the number of total unique visitors in your data in Google Analytics and in the Google Analytics data you imported to Plausible. This happens because we only import day-level aggregated data. 

To get the number of unique visitors in a longer period of time (say one month) we just sum up the daily unique visitor numbers. We can't do the proper unique visitors calculation like Google Analytics is doing.

### UTM sources

The GA4 importer uses GA4's session source for Plausible's **source** dimension. It does not populate a separate **UTM source** field, so imported traffic is not available in the UTM source report. Other campaign fields are imported where available; see [Traffic sources](#traffic-sources) below.

### Goals

It's possible to import your goal conversion data from Google Analytics 4. When your import finishes, you will not see your goal data show up automatically. You need to go to your site settings and [add the goals you want to show up on your dashboard](custom-event-goals.md#create-a-custom-event-goal-in-your-plausible-account). Note that ecommerce revenue numbers cannot be imported. 

### Browser versions

We can import your traffic split between the different browsers but you can't drill down to see the imported data's exact browser versions. 

### Exit pages

Google Analytics API does not expose this information so you cannot see the **Exit Pages** tab for imported data. 

### Scroll Depth

Google Analytics API does not expose this information so you cannot see the scroll depth metric for imported data. 

### Day view graph

We can't display hourly graph interval on the daily view.

### Consolidated view

Imported data is not included in the [consolidated view](consolidated-views.md) dashboard. The consolidated view only reflects data collected natively by Plausible.

## Before you import: migration planning

**Do you need to import at all?**

If you are starting fresh with Plausible and do not need to reference historical trends, you can skip the import entirely. Plausible will start building its own clean dataset from day one.

Import is most useful when you need to compare current performance against a historical baseline, report on year-over-year trends or fill in data for a period before you installed Plausible.

**Running GA and Plausible in parallel**

Install Plausible alongside your existing Google Analytics setup. Run both for at least 2-4 weeks before removing GA. This lets you verify that Plausible is tracking correctly and gives you a period of overlap to compare the two datasets. Do not import data that overlaps with your Plausible native data. The import tool handles date ranges to avoid double-counting, but the metrics from the two sources are calculated differently and will not match exactly.

**Mapping GA goals to Plausible goals**

GA4 custom events and conversions do not import directly as Plausible goals. After importing, you will need to recreate your goals in Plausible. Make a list of your key GA4 conversion events before you start, then set up equivalent [custom event goals](custom-event-goals.md) or [pageview goals](pageview-goals.md) in Plausible.

## What to expect from imported data

Imported GA4 data and native Plausible data use different counting methods. The numbers will not match, even for the same time period. This is expected.

**Unique visitors**

Plausible counts unique visitors using a daily hash of IP address and User-Agent. GA4 uses device-based identifiers and cookies. Imported data calculates unique visitors by summing daily uniques, which can overcount visitors who return across multiple days. For periods measured in weeks or months, this difference can be significant. See the [metrics definitions](metrics-definitions.md) page for how Plausible defines each metric.

**Sessions and bounce rate**

GA4 defines sessions and engagement differently from Plausible. GA4 uses an "engaged session" model; Plausible uses a simpler session model with a 30-minute inactivity timeout. Bounce rates from imported data will likely differ from what Plausible records natively.

**Traffic sources**

Imported data includes GA4's session source and default channel group. The importer also maps session medium, campaign name and manual ad content to Plausible's UTM medium, campaign and content fields where available. The UTM term field comes from GA4's Google Ads keyword dimension, rather than a general-purpose UTM term field. A separate UTM source is not imported. These fields are therefore not a like-for-like copy of the UTM parameters Plausible records directly from your URLs.

**What imported data does not support**

As noted in the import steps above, imported data does not appear in consolidated views, does not support advanced filtering by custom properties and does not include scroll depth, exit pages or hourly breakdown. Treat imported data as a rough historical reference, not a like-for-like comparison with native Plausible data.

## Troubleshooting data discrepancies

**Numbers are much lower in Plausible than in GA4**

GA4 uses modeled data and consent mode to estimate traffic for users who declined cookies. Plausible does not use modeled data. If you had consent mode enabled in GA4, GA4 will show higher numbers for users who rejected tracking. Plausible only counts real visits it received.

**Numbers are higher in Plausible than in GA4**

Plausible does not require cookie consent and is blocked far less often than Google Analytics by browser-level tracking protection. GA4 is blocked by Safari ITP, Firefox Enhanced Tracking Protection and many ad blockers. Plausible natively captures more traffic, particularly from privacy-conscious users.

**Import appears to complete but data is missing**

Check the selected GA4 property, the date range and the import status in your Plausible site settings. Compare the missing period with the standard reports in that GA4 property. Plausible can only import data returned by the Google Analytics Data API. The event-level retention setting alone does not tell you which aggregated historical stats are available.

**Imported data and native data show a gap or overlap**

The import tool sets the end date of the import to one day before your first Plausible native data point, so it can't fill a gap that comes after that date (months when the script wasn't installed between two periods of native stats, for example; see [CSV imports](csv-import.md#how-much-data-is-imported) for a way around it). If you see a gap, check that Plausible was correctly installed and recording data before you ran the import. If you see overlap, delete the import and re-run it after confirming your Plausible installation date.

## What's next?

- [Set up goals in Plausible](goal-conversions.md) to replace the GA4 conversions you were tracking. Imported goal data will appear once you recreate matching goals in your site settings
- [Compare date ranges](compare-stats.md) that span your imported history and your native Plausible data together
- [Filter and segment](filters-segments.md) your imported data by source, page or country to reproduce the key reports you used in GA4
- [Export to CSV](export-stats.md) or use the [Stats API](stats-api.md) for reporting outside the dashboard
