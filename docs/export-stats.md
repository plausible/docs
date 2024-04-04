---
title: Export your website stats
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are a couple of different ways you can export your stats.

## Export specific time ranges or audience segments

You can export your stats directly from the top chart of your Plausible dashboard. This is the quickest and most convenient option when you want to export specific audience segments or time ranges for reporting purposes. Here's how to do it:

1. Select the date range in the top right to view the specific time period.
2. [Filter your dashboard](filters-segments.md) by any metric to create a specific segment of your audience. Filter by any goal such as external link clicks, 404 error pages or custom events if you're looking for specific conversion metrics.
3. Click on the "**Download**" icon on the right-hand side of the top chart of your Plausible dashboard to download the stats for that particular view.

This will export a ZIP file which includes CSV files of the individual reports. You can then use these CSV files to import your stats into Excel or other data analysis tools.

Note that in order for the export to be as quick as possible, the individual CSV files are limited to 300 entries each while page reports are limited to 100 entries each with this method. For the full data export, please look at the next option.

<img alt="Exporting your website stats" src={useBaseUrl('img/download-website-stats.png')} />

## Export all stats to date

Here's how to export all the data collected for a particular dashboard from day one. This export is best used for data portability purposes. 

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website you'd like to export the data for.
2. In the "**Imports & Exports**" tab, find the "**Export Data**" panel and click on the "**Export to CSV**" button to export all the data.
3. Your export will be queued and we'll send you an email once it's ready for download. After the export is ready, you'll have 24 hours to download the data.

## Use the stats API

If you want a programatic way to export your stats, please take a look at our [stats API](stats-api.md).
