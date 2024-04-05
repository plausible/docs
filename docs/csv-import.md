---
title: Import stats using CSV files
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible Analytics allows you to import your historical stats from various analytics tools using CSV files. This also makes it possible to migrate your stats [from Plausible Community Edition (CE) to our official managed hosting (or vice-versa)](https://plausible.io/self-hosted-web-analytics). 

You can import multiple different properties into the same Plausible dashboard using CSVs. In addition to CSV file imports, you can also import your Google Analytics stats to the same Plausible dashboard.

Do you want to import your Google Analytics (UA and GA4) stats into Plausible? We have a simple [Google Analytics import tool](google-analytics-import.md).

The rest of this article is focused importing your historical stats into Plausible using CSV files.

## How to import your historical stats via CSV files

Here's how you can import your historical stats into your Plausible dashboard by using CSV files.

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to import the data to.

2. Go into the "**Imports & Exports**" section, find the "**Import Data**" panel and click on the "**CSV**" button to import your CSV files.

4. Select all the CSV files that you'd like to import and click on the "**Confirm import**" button. When importing your stats from different analytics tools, please ensure that each CSV file follows our CSV format guidelines. The guidelines are listed at the end of this document. 

:::tip Want to transfer a site ownership to another Plausible account?
No data export/import is needed in this case. We have a way to [transfer site ownership](transfer-ownership.md) with a couple of clicks.
:::

:::tip Or want to change the domain name of your Plausible site?
No data export/import is needed in this case either. We have an easy way to [change your domain name](change-domain-name.md).
:::

## How to migrate from Plausible CE to our managed hosting (or vice-versa)

:::note
Make sure to upgrade your self-hosted instance to Plausible CE version 2.1 or higher to get access to the export/import functionality
:::

1. First you need to export your stats. Go to the Plausible [site settings](website-settings.md) for the website you'd like to export the data for.

2. Go into the "**Imports & Exports**" section, find the "**Export Data**" panel and click on the "**Export to CSV**" button to export all the data. 

3. Then go to the site you'd like to import the data to. In the "**Imports & Exports**" section, find the "**Import Data**" panel and click on the "**CSV**" button to import your CSV files.

4. Make sure to select all the CSV files that you've exported and click on the "**Confirm import**" button. If you don't select all the exported files, some data may be missing from your import.

5. Imported data will be displayed alongside your native Plausible data in the same Plausible dashboard. An icon is shown in the top-right of the dashboard when imported data has been included. Clicking this icon will stop the imported data from being displayed and the icon will then appear with a strike-through.

## Multiple imports into the same Plausible dashboard

If you'd like to make several imports into the same Plausible dashboard, please go through the process above again and choose different CSV files to import. You can import a maximum of 5 different properties into one Plausible dashboard. You can import using both of our import methods (CSV files and Google Analytics import) into the same Plausible dashboard. 

In the "**Imports & Exports**" section, you can see the overview of all your existing imports to that specific Plausible dashboard. For each import, we list the ID, the number of pageviews imported and the time range that the import covers.

## How much data is imported?

Data is imported in aggregate for each date, from your first import visitor until your first Plausible Analytics visitor. This is to avoid double-counting visits. We also have measures in place to detect and avoid double-counting visitors if you import multiple properties into the same Plausible dashboard. 

## How can I delete imported data?

Data you have imported can be deleted by returning to your site's "**Imports & Exports**" settings page and clicking the "**Delete Import**" button in the "**Existing Imports**" section. This action won't affect the native data you have collected using our script directly.

## How does imported data differ from native data?

We have taken many steps to make the imported data feel as fast, easy, and straightforward as the native data. But it's important to note that imported data won't be as flexible as the native data that we collect using our script. Here are the differences:

### Filtering 

It isn't possible to use [our filters](filters-segments.md) with the imported data.

## CSV format guidelines

If you're importing data from different analytics tools then please ensure that your CSV files follow our format guidelines.
