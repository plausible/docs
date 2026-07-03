---
title: Export your website stats
description: "Export your Plausible stats as CSV files directly from the dashboard. Filter by date range, audience segment or goal, including data imported from other tools."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are a couple of different ways you can export your stats.

## Export specific time ranges or audience segments

You can export your stats directly from the top chart of your Plausible dashboard. This is the quickest and most convenient option when you want to export specific audience segments or time ranges for reporting purposes. It also allows you to export any of the data that you imported into Plausible from external sources such as Google Analytics. Here's how to do it:

1. Select the date range in the top right of your Plausible dashboard to view the specific time period
2. [Filter your dashboard](filters-segments.md) by any metric that you wish to create a specific audience segment. Do include a goal in the filter (such as external link clicks, file downloads or custom events) if you're looking to export specific conversion metrics
3. If applicable, open the options menu (the **⋮** icon in the top right of the chart) and toggle **Include imported data** to choose whether you want your imported data to be included in the export
4. Then open the options menu and click **Export stats** to download the stats for your chosen view and segment

<div class="browser">
<img alt="Exporting your website stats" src={useBaseUrl('img/download-website-stats.png')} />
</div>

This will export a ZIP file which includes CSV files of the individual reports. You can then use these CSV files to import your stats into Excel or other data analysis tools.

:::tip
If you exported data for outbound link clicks, file downloads, or 404 errors and want details like URLs, visitors, events, and conversion rates, check the "custom_props.csv" file. The "conversions.csv" file only shows summary data.
:::

Note that for the export to be as quick as possible, the individual CSV files are limited to 300 entries each, while page reports are limited to 100 entries each with this method. For a full data export, refer to the instructions below.

## Export all stats to date

Here's how to export all the native data collected for a particular Plausible dashboard to date. This export method is slower, cannot be segmented and is best suited for data portability purposes. It also doesn't include any data that you imported from external sources.

1. Go to the Plausible Analytics [site settings](website-settings.md) for the website for which you'd like to export the data
2. In the **Imports & Exports** section, find the **Export Data** panel and click on the **Export to CSV** button
3. Your export will be queued and we'll email you when it's ready for download. You'll have 24 hours to download the data after the export is ready

## Use the stats API

As an alternative to exporting as CSV files or if you prefer a programmatic way to access your stats, please take a look at our [stats API](stats-api.md).

## Scheduled raw event data exports

If you need event-level data rather than aggregated stats, Plausible offers scheduled raw event exports as part of our [Enterprise plans](https://plausible.io/enterprise-web-analytics). These cover advanced use cases such as data warehousing, internal analytics and compliance reporting.

[See full details, use cases and how to get started →](raw-data-export.md)
