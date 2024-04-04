---
title: Import stats using CSV files
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible Analytics allows you to import your historical stats using CSV files. This makes it possible to import your data from various analytics tools and allows you to migrate from the Plausible Community Edition (CE) to our official managed hosting (or vice-versa). You can import multiple properties into the same Plausible dashboard too.

:::tip Want to import your Google Analytics (UA and GA4) stats into Plausible?
We also have a Google Analytics import tool. See [how it works here](google-analytics-import.md).
:::

## How to migrate from Plausible CE to our managed hosting (or vice-versa)

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to export the data for.

2. Go into the "**Imports & Exports**" tab, find the "**Export Data**" panel and click on the "**Export to CSV**" button to export all the data from your self-hosted instance. Plausible CE v2.1 or higher is required for the ability to export your data.

3. Then go to the site you'd like to import the data to and in the "**Imports & Exports**" tab, find the "**Import Data**" panel and click on the "**CSV**" button to import your CSV files.

4. Make sure to select all the CSV files that you exported and click on the "**Confirm import**" button. 

The imported data will be displayed alongside your native Plausible data in the same Plausible dashboard. An icon is shown in the top-right of the dashboard when imported data has been included. Clicking this icon will stop the imported data from being displayed and the icon will then appear with a strike-through.

## How to import your historical stats via CSV files

Here's how you can import your historical stats into your Plausible dashboard by using CSV files.

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to import the data to.

2. Go into the "**Imports & Exports**" tab, find the "**Import Data**" panel and click on the "**CSV**" button to import your CSV files.

4. Select all the CSV files that you'd like to import and click on the "**Confirm import**" button. Please ensure each file follows our CSV format guidelines.

:::tip Want to simply transfer a site ownership to another account?
No data export or import is needed in this case. We have an easy way to [transfer site ownership here](transfer-ownership.md).
:::

## Multiple imports into the same Plausible dashboard

If you'd like to make several imports into the same Plausible dashboard, please go through the process above again and choose different files to import. You can import a maximum of 5 different properties into one Plausible dashboard. 

In the "**Imports & Exports**" section, you can see the overview of all your existing imports to that specific Plausible dashboard. For each import, we list the property ID, the number of pageviews imported and the time range that the import covers.

## How much data is imported?

Data is imported in aggregate for each date, from your first import visitor until your first Plausible Analytics visitor. This is to avoid double-counting visits. We also have measures in place to detect and avoid double-counting visitors if you import multiple properties into the same Plausible dashboard. 

Data you have imported can be deleted by returning to your site's "**Imports & Exports**" settings page and clicking the "**Delete Import**" button in the "**Existing Imports**" section. This action won't affect the native data you have collected using our script directly.

## How does imported data differ from native data?

We have taken many steps to make the imported data feel as fast, easy, and straightforward as the native data. But it's important to note that imported data won't be as flexible as the native data that we collect using our script. Here are the differences:

### Filtering 

It isn't possible to use [our filters](filters-segments.md) with the imported data.
