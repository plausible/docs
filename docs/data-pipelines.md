---
title: Viewing Plausible stats elsewhere
---

If you're looking to access your Plausible dashboard, metrics and stats outside of the plausible.io website itself, here are some options:

## Stats API

The Plausible Stats API offers a way to retrieve your stats programmatically. [Learn more here](stats-api.md).

## Embedded dashboard

You can embed your Plausible stats dashboard into any other website using an iFrame. This is useful in case you want to showcase your stats on your own website or if you want to offer Plausible-powered web analytics dashboard (without our branding) directly in your user interface. [Learn more here](embed-dashboard.md).

## WordPress plugin

By using our official WordPress plugin, you can view your Plausible stats dashboard directly in your WordPress dashboard without needing to visit our website. [Learn more here](https://plausible.io/wordpress-analytics-plugin).

## Looker Studio

We have an official Plausible connector for [Looker Studio (formerly Google Data Studio)](looker-studio.md).

And thanks to the members of our community, there are also some third-party solutions:

## Airbyte connector

[Airbyte connector](https://docs.airbyte.com/integrations/sources/plausible/): A Plausible API connector for Airbyte, an open-source data integration platform.

## CloudQuery for BigQuery, Power BI, S3, Snowflake and more

[CloudQuery Plausible plugin](https://www.cloudquery.io/docs/plugins/sources/plausible/overview) extracts stats from Plausible and loads them into any supported CloudQuery destination (PostgreSQL, Snowflake, BigQuery, S3...).

## Fivetran connector

[Fivetran Plausible Connector](https://github.com/imgly/fivetran-plausible-connector): A Google Cloud Function–based solution for ingesting Plausible data into Fivetran. This custom connector pulls hourly stats from the Plausible API and creates a `timeseries` table in any destination supported by Fivetran.

## GA Insights

[GA Insights](https://www.ga-insights.com/plausible-slack) allows you to extend Plausible Analytics with automated reporting, monitoring and goal tracking straight in Slack.

## Apple platforms (iOS, iPadOS, macOS, tvOS, etc.)

* [Charsible](https://charsible.app): Charsible is an iOS app offering a range of widgets to help you keep an eye on your Plausible Analytics data wherever you are.

* [Numerics Dashboards for Plausible](https://cynapse.com/numerics-integrations/plausible-dashboards/): Track your Plausible KPIs with Numerics Dashboards on your iPhone, iPad, Mac, Apple TV and Apple Watch.

* [Staat](https://apps.apple.com/app/staat/id6451257773)

* [Applausible](https://apps.apple.com/us/app/applausible/id6737839249): Instantly view Plausible Analytics' visitor counts, top pages, and more data on your iOS app or home widgets. Optimized for both iPhone and iPad.

## Linux

[Tally](https://flathub.org/apps/com.cassidyjames.plausible): hybrid native + web app that wraps the Plausible web app in a native UI, integrating better with desktop operating systems.

---

Let us know about any other connectors, apps or widgets that you've built and we will feature them in this list. Thanks for your support!
