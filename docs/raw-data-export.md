---
displayed_sidebar: someSidebar
title: Scheduled raw event data exports
description: "Get event-level data from Plausible delivered automatically every day. For data warehousing, compliance and internal analytics where aggregated stats are not enough."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

<PlanFeatureNote feature="raw-data-export" plan="enterprise" label="Scheduled raw event data exports" />

The Stats API and CSV export give you aggregated data: totals, breakdowns and time series across your sites. For cases where you need the underlying event-level data, Plausible offers scheduled raw event data exports.

## What it is

A scheduled raw export delivers event- and session-level data from your Plausible account to your object storage every day.

Setup is configured with our team: we agree on the data fields and schema, the delivery destination and whether the export uses CSV, Parquet or JSON Lines (JSONL).

We can deliver to any S3-compatible object storage service, including AWS S3 and Google Cloud Storage. Once configured, exports are delivered daily with no action needed on your end.

Unlike the Stats API, which returns pre-aggregated results, raw exports give you individual event records.

This lets you run your own aggregations, apply custom attribution models, join analytics data with other business data, and meet compliance requirements that call for event-level audit trails.

Raw exports are intentionally scoped to keep Plausible fast, privacy-friendly and predictable. They are not real-time and not self-serve.

## Explore an example export

Download an example export for plausible.io covering July 2026:

- [events.parquet](https://edlvc.upcloudobjects.com/plausible-io-example/2026-07/events.parquet) contains the individual event records
- [sessions.parquet](https://edlvc.upcloudobjects.com/plausible-io-example/2026-07/sessions.parquet) contains the sessions those events belong to

Use these files to inspect the Parquet schema and example values before planning how you will load the data into your own systems.

## What's included

Alongside the event-level file, exports include a companion session-level file, so you get both individual events and the sessions they belong to.

Custom properties are delivered as a single JSON object per row rather than a fixed set of columns, so you don't need to declare property names in advance and can change your instrumentation over time without breaking the export schema.

Plausible-generated identifiers are an anonymous session ID and a daily-rotating anonymous user ID used for unique-visitor calculations.

Delivery to Google Cloud Storage goes through GCS's S3-compatible endpoint using static (HMAC) credentials, the same as an S3 bucket. Authenticating with a native GCP service account isn't supported out of the box.

## Historical data and backfills

Daily exports start after setup. During setup, we can include a one-time backfill covering up to the 30 days immediately before the first scheduled export. Earlier historical data cannot be included.

If you need this backfill, include the requested start date when contacting us.

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
| Visualize in Google's tools | [Data Studio](looker-studio.md) |
| Pipe aggregated stats into a warehouse | [Airbyte or Fivetran connectors](data-pipelines.md) |

## How to get it

Raw event data exports are part of our [Enterprise plans](https://plausible.io/enterprise-web-analytics) and are not self-serve. [Contact us](https://plausible.io/contact) to discuss your data volume, export format, storage provider and whether you need the optional 30-day backfill.
