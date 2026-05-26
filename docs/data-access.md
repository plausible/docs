---
title: Accessing your Plausible data
sidebar_label: Accessing your data
description: "Choose the right way to access your Plausible data outside the dashboard: Stats API, Events API, Sites API, CSV export, Looker Studio or data warehouse connectors."
---

Plausible gives you several ways to access your stats outside the dashboard. The right option depends on whether you want to query data, send data, manage sites or export for offline use.

## Quick reference

| I want to... | Option |
|---|---|
| Query stats programmatically or build a custom dashboard | [Stats API](#stats-api) |
| Send pageviews or events server-side (mobile app, no JS snippet) | [Events API](#events-api) |
| Create and manage sites programmatically | [Sites API](#sites-api) |
| Download stats as a spreadsheet, one-off | [CSV export](#csv-export) |
| Build a custom report in Google's visualization tool | [Looker Studio](#looker-studio) |
| Pipe data into a data warehouse or BI tool | [Warehouse connectors](#data-warehouse-connectors) |
| Get event-level data for warehousing or compliance | [Scheduled raw exports](#scheduled-raw-event-exports) |
| Query data in natural language through AI tools | [MCP server](#mcp-server) |
| View stats from a mobile or desktop app | [Mobile and desktop apps](data-pipelines.md) |

---

## Stats API

The Stats API lets you query your analytics data programmatically via a single HTTP endpoint. Send a POST request with your query and get back JSON with the metrics you asked for, covering any date range and dimension combination the dashboard supports.

**Use this when:**
- You want to build a custom dashboard or embed stats in your own product
- You need to automate reporting or pull data on a schedule
- You want to combine Plausible data with data from other sources

[Stats API reference](stats-api.md)

---

## Events API

The Events API lets you send pageviews and custom events to Plausible without the JavaScript snippet. This is useful for server-side tracking, mobile apps or any environment where loading a script is not possible.

**Use this when:**
- You are building an iOS or Android app
- You want to track server-side events or API interactions
- You are setting up a proxy that forwards events from your own backend

The Events API is for sending data to Plausible, not reading it. To query your stats programmatically, use the Stats API instead.

[Events API reference](events-api.md)

---

## Sites API

The Sites API lets you create, configure and delete Plausible sites programmatically. It also covers managing goals, custom properties, shared links and site access.

**Use this when:**
- You are an agency or SaaS platform that provisions analytics for multiple clients automatically
- You want to manage site settings without logging into the Plausible dashboard
- You are building a white-label analytics product on top of Plausible

[Sites API reference](sites-api.md)

---

## CSV export

You can export your stats directly from the Plausible dashboard as a ZIP of CSV files. Filter by date range, audience segment or goal before exporting to get exactly the slice you need.

**Use this when:**
- You need a one-off data extract for a report or spreadsheet
- You want to import data into Excel, Google Sheets or another tool
- You do not need to query data on a schedule or programmatically

The quick export is limited to 300 entries per report. For a full historical export of all your data, use the full export option in your site settings.

[Export your stats](export-stats.md)

---

## Looker Studio

The official Plausible connector for Google Looker Studio pulls your analytics data into Google's free data visualization platform. Use it to build custom reports, combine Plausible data with ad spend or CRM data and share branded dashboards with clients as a live link.

**Use this when:**
- You need custom report layouts beyond what the Plausible dashboard offers
- You want to share a client report without giving access to your Plausible account
- You want to blend Plausible data with data from Google Ads, Search Console or other sources

[Looker Studio connector](looker-studio.md)

---

## Data warehouse connectors

If you want to pipe your Plausible data into a data warehouse or BI tool, community-maintained connectors exist for Airbyte and Fivetran. Both use the Stats API under the hood. These connectors are not built or supported by Plausible.

**Use this when:**
- You want to store Plausible data in BigQuery, Snowflake, Redshift or another warehouse
- You are building a data pipeline that combines analytics with other business data

For the full list of community connectors, apps and integrations, see [Viewing Plausible stats elsewhere](data-pipelines.md).

---

## Scheduled raw event exports

For cases where aggregated stats are not enough, Plausible offers scheduled raw event data exports. These give you access to event-level data delivered automatically on an agreed schedule, in a format and schema configured with our team.

**Use this when:**
- You need event-level data for data warehousing, internal analytics or compliance reporting
- Aggregated stats from the CSV export or Stats API do not meet your needs

Raw event exports are not self-serve and are not real-time. They are part of our [Enterprise plans](https://plausible.io/enterprise-web-analytics). [Contact us](https://plausible.io/contact) to discuss your needs.

[Scheduled raw event exports](raw-data-export.md)

---

## MCP server

The [Plausible MCP server](https://github.com/getsentry/plausible-mcp), built by the Sentry team, lets you query your Plausible data through AI tools such as Claude. Ask natural language questions about traffic, top pages, conversions and goal performance without writing API queries. It requires a Stats API key to connect.

**Use this when:**
- You want to explore your analytics data conversationally through an AI tool
- You need quick answers without building a dashboard or writing code

This is a community-built tool, not an official Plausible integration.
