---
title: Export your website stats
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are a couple of different ways you can export your stats.

## Export specific time ranges or audience segments

You can export your stats directly from the top chart of your Plausible dashboard. This is the quickest and most convenient option when you want to export specific audience segments or time ranges for reporting purposes. Here's how to do it:

1. Select the date range in the top right of your Plausible dashboard to view the specific time period.
2. [Filter your dashboard](filters-segments.md) by any metric that you wish to create a specific audience segment. Do include a goal in the filter (such as external link clicks, file downloads or custom events) if you're looking to export specific conversion metrics.
3. Click on the "**Download**" icon on the right-hand side of the top chart of your Plausible dashboard to download the stats for that view.

This will export a ZIP file which includes CSV files of the individual reports. You can then use these CSV files to import your stats into Excel or other data analysis tools.

Note that for the export to be as quick as possible, the individual CSV files are limited to 300 entries each, while page reports are limited to 100 entries each with this method.

<img alt="Exporting your website stats" src={useBaseUrl('img/download-website-stats.png')} />

## Use the stats API

If you want a programmatic way to export your stats, please take a look at our [stats API](stats-api.md).
