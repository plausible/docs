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

<img alt="Import CSV" src={useBaseUrl('img/import-csv.png')} />

3. Select all the CSV files that you'd like to import and click on the "**Confirm import**" button. When importing your stats from different analytics tools, please ensure that each CSV file follows our CSV format guidelines. The guidelines are listed at the end of this document.

<img alt="Select CSV and import" src={useBaseUrl('img/select-csv-to-import.png')} />

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

### Goals and custom properties

You can import your goals and custom events. However, there is a limited support for importing custom properties along with them.

A single custom property is supported in combination with particular goals:

- `url` property (imported as `link_url`) with "Outbound Link: Click", "File Download" and "Cloaked Link: Click" goals
- `path` property (imported as `path`) with "404" goal

Ecommerce revenue data are not supported.

Due to our current imported data model, we are unfortunately unable to show exact aggregated visitor counts for special goals such as "Outbound Link: Click", "404" and "File Download". For example, if one visitor completed a "File Download" event two times with a different `url` property, they'll be counted as two visitors from re-imported data, while native query would count them as a single visitor. The same applies for pageview goals.

## CSV format guidelines

If you're importing data from different analytics tools then please ensure that your CSV files follow our format guidelines.

### File naming convention

Each CSV file must follow a specific naming convention to be recognized by the import system:

```
{table_name}_{start_date}_{end_date}.csv
```

- `table_name` refers to the specific table you are importing data into. There are ten tables available for import:
  - `imported_visitors`
  - `imported_sources`
  - `imported_pages`
  - `imported_entry_pages`
  - `imported_exit_pages`
  - `imported_custom_events`
  - `imported_locations`
  - `imported_devices`
  - `imported_browsers`
  - `imported_operating_systems`
- `start_date` and `end_date` specify the date range of the data contained in the file, formatted as `{YYYY}{0M}{0D}`

For example, a file named `imported_devices_20230209_20240123.csv` includes data from Feb 9, 2023, to Jan 23, 2024.

### CSV structure

Below, you'll find the structure for each CSV file to be imported into Plausible Analytics. It's important to note that while all files and columns within those files are optional, to maintain completeness and avoid gaps in your dashboard, it's recommended that all files be present and fully populated according to the structures outlined here. For metric definitions, please refer to [this document](https://plausible.io/docs/metrics-definitions).

It's important to note that metrics such as `visitors`, `visits`, `bounces`, `pageviews`, and similar are intended to represent total counts within the specified dimension, not averages. And metrics such as `visit_duration` represent total duration in seconds.

#### imported_browsers

| date | browser | browser_version | visitors | visits | visit_duration | bounces | pageviews |
| ---- | ------- | --------------- | -------- | ------ | -------------- | ------- | --------- |
| Date | String  | String          | UInt64   | UInt64 | UInt64         | UInt32  | UInt64    |
|      |         |                 | count    | count  | seconds        | count   | count     |

Example:

```console
$ head imported_browsers_20230209_20240123.csv
"date","browser","browser_version","visitors","visits","visit_duration","bounces","pageviews"
"2023-02-09","Safari","16.3",5,6,512,2,10
"2023-02-09","Chrome","109.0",54,60,6627,40,128
"2023-02-09","Chrome","108.0",2,3,47,2,6
"2023-02-09","Chrome","47.0",1,1,82,0,2
"2023-02-09","Safari","16.2",2,2,21,1,3
"2023-02-09","Microsoft Edge","111.0",1,1,987,0,3
"2023-02-09","Chrome","110.0",11,14,5145,6,37
"2023-02-09","Firefox","109.0",24,26,5284,16,51
"2023-02-09","Firefox","110.0",4,4,690,1,8
```

#### imported_devices

| date | device | visitors | visits | visit_duration | bounces | pageviews |
| ---- | ------ | -------- | ------ | -------------- | ------- | --------- |
| Date | String | UInt64   | UInt64 | UInt64         | UInt32  | UInt64    |
|      |        | count    | count  | seconds        | count   | count     |

Example:

```console
$ head imported_devices_20230209_20240123.csv
"date","device","visitors","visits","visit_duration","bounces","pageviews"
"2023-02-09","Mobile",12,13,140,10,17
"2023-02-09","Laptop",19,21,3545,11,36
"2023-02-09","Desktop",89,100,17385,56,251
"2023-02-10","Mobile",13,12,1089,7,26
"2023-02-10","Tablet",1,1,65,0,4
"2023-02-10","Desktop",135,146,16374,98,246
"2023-02-10","Laptop",17,21,3939,12,49
"2023-02-11","Desktop",78,86,9678,63,148
"2023-02-11","Mobile",14,15,140,12,18
```

#### imported_entry_pages

| date | entry_page | visitors | entrances | visit_duration | bounces | pageviews |
| ---- | ---------- | -------- | --------- | -------------- | ------- | --------- |
| Date | String     | UInt64   | UInt64    | UInt64         | UInt32  | UInt64    |
|      |            | count    | count     | seconds        | count   | count     |

Example:

```console
$ head imported_entry_pages_20230209_20240123.csv
"date","entry_page","visitors","entrances","visit_duration","bounces","pageviews"
"2023-02-09","/docs/proxy/guides/nginx",1,1,922,0,7
"2023-02-09","/docs/goal-conversions",3,3,1072,1,6
"2023-02-09","/docs/webflow-integration",2,2,224,1,11
"2023-02-09","/docs/google-search-console-integration",7,7,114,6,8
"2023-02-09","/docs/proxy/introduction",3,3,0,3,3
"2023-02-09","/docs/script-extensions",4,4,393,2,7
"2023-02-09","/docs/troubleshoot-integration",3,3,2372,1,10
"2023-02-09","/docs/outbound-link-click-tracking",1,1,0,1,1
"2023-02-09","/docs",28,29,3573,13,64
```

#### imported_exit_pages

| date | exit_page | visitors | visit_duration | exits  | bounces | pageviews |
| ---- | --------- | -------- | -------------- | ------ | ------- | --------- |
| Date | String    | UInt64   | UInt64         | UInt64 | UInt32  | UInt64    |
|      |           | count    | seconds        | count  | count   | count     |

Example:

```console
$ head imported_exit_pages_20230209_20240123.csv
"date","exit_page","visitors","visit_duration","exits","bounces","pageviews"
"2023-02-09","/docs/your-plausible-experience",1,0,1,1,1
"2023-02-09","/docs/ghost-integration",1,0,1,1,1
"2023-02-09","/",1,8,1,0,24
"2023-02-09","/docs/visibility",1,0,1,1,1
"2023-02-09","/docs",14,224,14,13,23
"2023-02-09","/docs/google-tag-manager",5,0,5,4,6
"2023-02-09","/docs/script-extensions",4,138,4,2,6
"2023-02-09","/docs/excluding",1,0,1,1,1
"2023-02-09","/docs/change-plan",2,0,2,2,2
```

#### imported_custom_events

| date | name   | link_url | path   | visitors | events |
| ---- | ------ | -------- | ------ |--------- | ------ |
| Date | String | String   | String | UInt64   | UInt64 |
|      |        |          |        | count    | count  |

Example:

```console
$ head imported_custom_events_20230209_20240123.csv
"date","name","link_url","path","visitors","events"
"2023-02-09","Outbound Link: Click","https://one.example.com/","",1,1
"2023-02-09","Outbound Link: Click","https://two.example.com/","",1,1
"2023-02-09","Outbound Link: Click","https://three.example.com/news","",1,1
"2023-02-09","Outbound Link: Click","https://social.example.com/someone/status/1231233456","",2,2
"2023-02-09","404","","/no-such-site",1,1
"2023-02-09","Outbound Link: Click","https://blog.example.com/","",1,1
"2023-02-09","Signup","","",3,3
```

#### imported_locations

| date | country | region | city   | visitors | visits | visit_duration | bounces | pageviews |
| ---- | ------- | ------ | ------ | -------- | ------ | -------------- | ------- | --------- |
| Date | String  | String | UInt64 | UInt64   | UInt64 | UInt64         | UInt32  | UInt64    |
|      |         |        |        | count    | count  | seconds        | count   | count     |

- `country` is the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code
- `region` is the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) country and subdivision code
- `city` is the city [GeoName ID](http://www.geonames.org)

Example:

```console
$ head imported_locations_20230209_20240123.csv
"date","country","region","city","visitors","visits","visit_duration","bounces","pageviews"
"2023-02-09","FR","FR-PAC",3027647,1,1,4,0,2
"2023-02-09","GB","GB-ENG",2634910,1,1,0,1,1
"2023-02-09","IT","IT-34",3164527,1,1,0,1,1
"2023-02-09","DE","DE-BW",2929831,1,2,3132,0,13
"2023-02-09","IN","IN-TG",1269843,1,1,8,0,2
"2023-02-09","GB","GB-ENG",2644688,1,1,0,1,1
"2023-02-09","FR","FR-CVL",3032213,1,1,0,1,1
"2023-02-09","NL","NL-LI",2745641,2,2,1054,0,9
"2023-02-09","SE","SE-AB",2675397,1,1,338,0,2
```

#### imported_operating_systems

| date | operating_system | operating_system_version | visitors | visits | visit_duration | bounces | pageviews |
| ---- | ---------------- | ------------------------ | -------- | ------ | -------------- | ------- | --------- |
| Date | String           | String                   | UInt64   | UInt64 | UInt64         | UInt32  | UInt64    |
|      |                  |                          | count    | count  | seconds        | count   | count     |

Example:

```console
$ head imported_operating_systems_20230209_20240123.csv
"date","operating_system","operating_system_version","visitors","visits","visit_duration","bounces","pageviews"
"2023-02-09","Tizen","3.0",1,1,82,0,2
"2023-02-09","Android","11",1,1,19,0,2
"2023-02-09","iOS","16.2",1,1,0,1,1
"2023-02-09","Windows","7",1,1,0,1,1
"2023-02-09","Mac","10.14",1,1,19,0,2
"2023-02-09","iOS","16.3",1,1,0,1,1
"2023-02-09","","",1,1,8,0,24
"2023-02-09","Android","12",2,2,0,2,2
"2023-02-09","iOS","16.1",5,6,39,5,8
```

#### imported_pages

| date | hostname | page   | visits | visitors | pageviews |
| ---- | -------- | ------ | ------ | -------- | --------- |
| Date | String   | String | UInt64 | UInt64   | UInt64    |
|      |          |        | count  | count    | count     |

Example:

```console
$ head imported_pages_20230209_20240123.csv
"date","hostname","page","visits","visitors","pageviews"
"2023-02-09","plausible.io","/docs/script-extensions",8,8,9
"2023-02-09","plausible.io","/docs/spa-support",1,1,1
"2023-02-09","plausible.io","/docs/stats-api",8,7,11
"2023-02-09","plausible.io","/docs/goal-conversions",9,9,10
"2023-02-09","plausible.io","/docs/visibility",1,1,1
"2023-02-09","plausible.io","/docs/sites-api",3,3,3
"2023-02-09","plausible.io","/docs/error-pages-tracking-404",3,3,3
"2023-02-09","plausible.io","/docs/webflow-integration-draft",1,1,2
"2023-02-09","plausible.io","/docs/guided-tour",5,5,5
```

#### imported_sources

| date | source | referrer | utm_source | utm_medium | utm_campaign | utm_content | utm_term | pageviews | visitors | visits | visit_duration | bounces |
| ---- | ------ | -------- | ---------- | ---------- | ------------ | ----------- | -------- | --------- | -------- | ------ | -------------- | ------- |
| Date | String | String   | String     | String     | String       | String      | String   | UInt64    | UInt64   | UInt64 | UInt64         | UInt32  |
|      |        |          |            |            |              |             |          | count     | count    | count  | seconds        | count   |

Example:

```console
$ head imported_sources_20230209_20240123.csv
"date","source","referrer","utm_source","utm_medium","utm_campaign","utm_content","utm_term","pageviews","visitors","visits","visit_duration","bounces"
"2023-02-09","DuckDuckGo","duckduckgo.com","","","","","",2,1,1,19,0
"2023-02-09","support","secure.helpscout.net","support","email","","","",2,1,1,11,0
"2023-02-09","GitHub","github.com","","","","","",3,3,3,0,3
"2023-02-09","npmjs.com","npmjs.com","","","","","",13,1,1,1119,0
"2023-02-09","GitHub","github.com/4lejandrito/next-plausible","","","","","",1,1,1,0,1
"2023-02-09","plausible.kaas.pw","plausible.kaas.pw","","","","","",8,1,1,793,0
"2023-02-09","Gmail","mail.google.com","","","","","",1,1,1,0,1
"2023-02-09","plausible.kloude.fr","plausible.kloude.fr","","","","","",1,1,1,0,1
"2023-02-09","Google","google.com","","","","","",70,23,25,8249,13
```

#### imported_visitors

| date | visitors | pageviews | bounces | visits | visit_duration |
| ---- | -------- | --------- | ------- | ------ | -------------- |
| Date | UInt64   | UInt64    | UInt64  | UInt64 | UInt64         |
|      | count    | count     | count   | count  | seconds        |

Example:

```console
$ head imported_visitors_20230209_20240123.csv
"date","visitors","pageviews","bounces","visits","visit_duration"
"2023-02-09",119,304,77,134,21070
"2023-02-10",166,325,117,180,21467
"2023-02-11",117,233,92,128,16506
"2023-02-12",221,356,187,237,13673
"2023-02-13",1449,2681,1306,1722,207955
"2023-02-14",1724,3075,1440,1962,211402
"2023-02-15",4226,13653,3559,5915,1043890
"2023-02-16",5793,18555,4796,7969,1496917
"2023-02-17",4941,16870,4098,6987,1444726
```
