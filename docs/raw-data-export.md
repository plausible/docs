---
displayed_sidebar: someSidebar
title: Scheduled raw event exports
description: "Get event-level data from Plausible delivered automatically on a schedule. For data warehousing, compliance and internal analytics where aggregated stats are not enough."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

<PlanFeatureNote feature="raw-data-export" plan="enterprise" label="Scheduled raw event exports" />

The Stats API and CSV export give you aggregated data: totals, breakdowns and time series across your sites. For cases where you need the underlying event-level data, Plausible offers scheduled raw event exports.

## What it is

A scheduled raw export delivers event-level data from your Plausible account automatically, on an agreed schedule. Setup is configured with our team: we agree on the event data fields and schema, the export format (CSV or Parquet), the delivery interval (daily, weekly or other) and the delivery destination. We support uploading directly to your S3 bucket or Google Cloud Storage bucket. Once configured, exports are delivered automatically with no action needed on your end.

Unlike the Stats API, which returns pre-aggregated results, raw exports give you individual event records. This lets you run your own aggregations, apply custom attribution models, join analytics data with other business data, and meet compliance requirements that call for event-level audit trails.

Raw exports are intentionally scoped to keep Plausible fast, privacy-friendly and predictable. They are not real-time and not self-serve.

## When to use it

Raw exports are the right choice when:

- You need to load event-level analytics data into a warehouse such as BigQuery, Snowflake or Redshift and the [community connectors](data-pipelines.md) do not meet your needs
- You need individual event records for compliance, auditing or internal reporting
- You want to run custom aggregations or attribution models that the Stats API cannot express
- You are building internal analytics tooling that requires raw event data as input

## When alternatives are enough

Before requesting raw exports, check whether a simpler option covers your needs:

| Need | Better option |
|---|---|
| Query stats programmatically | [Stats API](stats-api.md) |
| Build a custom dashboard or embed stats | [Stats API](stats-api.md) |
| Download data for a spreadsheet | [CSV export](export-stats.md) |
| Visualize in Google's tools | [Looker Studio](looker-studio.md) |
| Pipe aggregated stats into a warehouse | [Airbyte or Fivetran connectors](data-pipelines.md) |

## How to get it

Raw event exports are part of our [Enterprise plans](https://plausible.io/enterprise-web-analytics) and are not self-serve. [Contact us](https://plausible.io/contact) to discuss your data volume, delivery schedule and format requirements.
