---
title: Stats API reference
toc_max_heading_level: 4
---

import { ApiV2Example, ExamplesTip } from '../src/js/apiv2-example.tsx';
import { Required, Optional } from '../src/js/api-helpers.tsx';
import { getExampleCode, EXAMPLE_RESPONSE_META } from '../src/js/examples.tsx';
import CodeBlock from '@theme/CodeBlock';
import { SiteContextProvider } from '../src/js/sites.tsx';

Plausible Stats API is a powerful single endpoint HTTP interface to **view historical and real-time stats**. In a nutshell, the endpoint `/api/v2/query` accepts both simple and complex stats queries in the POST request body and returns the metrics as JSON.

[Try it now for your own site!](#examples)

:::tip[Not what you need?]
Take a look at our [Events API Reference](events-api.md) if you want to record pageviews or custom events for your sites, or [Sites API Reference](sites-api.md) if you want to manage your sites over the API.
:::

## Authentication

You can create a new stats API key by going to your Plausible Analytics account, navigating to "**Account Settings**" and clicking on the section called "**API Keys**". The key will be valid for all sites that you own.

Click "**New API Key**" and be sure you save the result as you will only see the key once. However, you can always delete the key and create a new one if you no longer remember what it is.

After creating an API key, you can authenticate your request by sending the key in the Authorization header of your request.

### Example curl request

In the following request, replace `YOUR-KEY` with a reference to your stats API key and `site_id` value with your domain as you've added it to your Plausible account.

```bash
curl \
--request POST \
# highlight-next-line
--header 'Authorization: Bearer YOUR-KEY' \
--header 'Content-Type: application/json' \
--url 'https://plausible.io/api/v2/query' \
--data '{ "site_id": "dummy.site", "metrics": ["visitors"], "date_range": "7d" }'
```

API keys have a rate limit of 600 requests per hour by default. If you have special needs for more requests, [please contact us](https://plausible.io/contact) to request more capacity.

## Request structure

`/api/v2/query` endpoint accepts a `query` object. Example:

<CodeBlock language="json">{getExampleCode("query", "example-country-and-city", null)}</CodeBlock>


Query can contain the following keys:

### site_id <Required />

Domain of your site on Plausible to be queried.

### date_range <Required /> {#date_range}

Date range to be queried.

| Option | Description |
| --- | --- |
| `["2024-01-01", "2024-07-01"]` | Custom date range (ISO8601) |
| `["2024-01-01T12:00:00+02:00", "2024-01-01T15:59:59+02:00"]` | Custom date-time range (ISO8601) |
| `"day"`  | Current day (e.g. 2024-07-01) |
| `"7d"` | Last 7 days relative to today |
| `"28d"` | Last 28 days relative to today |
| `"30d"` | Last 30 days relative to today |
| `"90d"` | Last 90 days relative to today |
| `"month"` | Since the start of the current month |
| `"6mo"` | Last 6 months relative to start of this month |
| `"12mo"` | Last 12 months relative to start of this month |
| `"year"` | Since the start of this year |
| `"all"` | Since the start of stats in Plausible |

### metrics <Required /> {#metrics}

Metrics represent values to be calculated with the query.

Valid metrics are:

| Metric name | Type | Description | Requirements |
| --- | --- | --- | --- |
| `visitors` | `int` | The number of unique visitors | |
| `visits` | `int` | The number of visits/sessions | |
| `pageviews` | `int` | The number of pageview events | |
| `views_per_visit` | `float` | The number of pageviews divided by the number of visits. | |
| `bounce_rate` | `float` | Bounce rate percentage | |
| `visit_duration` | `int` | Visit duration in seconds | |
| `events` | `int` | The number of events (pageviews + custom events). When filtering by a goal, this metric corresponds to "Total Conversions" in the dashboard. | |
| `scroll_depth` | `int` | Page scroll depth averaged per session | Requires `event:page` filter or dimension being set |
| `percentage` | `float` | The percentage of visitors of total who fall into this category | Requires non-empty `dimensions` |
| `conversion_rate` | `float` | The percentage of visitors who completed the goal. The number of total visitors (divisor) gets calculated across all dimensions. | Requires `event:goal` filter or dimension being set. |
| `group_conversion_rate` | `float` | The percentage of visitors who completed the goal with the same dimension. The number of total visitors (divisor) gets calculated for each dimension group individually. | Requires `event:goal` filter or dimension being set. |
| `average_revenue` | `Revenue` or null | Average revenue per revenue goal conversion | Requires [revenue goals](docs/ecommerce-revenue-tracking.md), `event:goal` filter or dimension for a relevant revenue goal. |
| `total_revenue` | `Revenue` or null | Total revenue from revenue goal conversions | Requires [revenue goals](docs/ecommerce-revenue-tracking.md), `event:goal` filter or dimension for a relevant revenue goal. |


<details>
  <summary>Read more about revenue metrics</summary>

  To use revenue metrics, users should configure [revenue goals](docs/ecommerce-revenue-tracking.md).

  Revenue metric response type has the following structure:

  ```js
  {
    value: float,
    currency: string, // e.g. "USD" or "EUR"
    short: string, // e.g. "€500.2M"
    long: string, // e.g. "€500,200,700.25"
  }
  ```

  `long` and `short` options are human-friendly formatted results.

  There are scenarios where revenue metrics can't be calculated. For example:
  1. When no revenue goals are configured
  2. No `event:goal` filter or dimension
  3. No revenue goal matches `event:goal` filter
  4. No `event:goal` dimension and filtered revenue goals have different currencies.

  In these cases, revenue is returned as `null`s and `response.meta.metric_warning` value will have a warning for why the metric could not
  be calculated. See [response.meta structure](#meta) and [example](#example-revenue-warning)
</details>

### dimensions <Optional /> {#dimensions}

Default: `[]`

List of dimensions to group by. [See example](#example-utm)

Dimensions are attributes of your dataset. Using them in queries enables analyzing and compare multiple groups against each other.
Think of them as `GROUP BY` in SQL.

#### Event dimensions

Valid dimensions include:

| Dimension | Example | Description |
| --- | --- | --- |
| `event:goal` | Register | A custom action that you want your users to take. To use this property, you first need to configure some goals in the [site settings](/website-settings), or via the [Sites API](/sites-api). The value is the goal's `display_name`. Learn more about goals [here](/goal-conversions). |
| `event:page` | /blog/remove-google-analytics | Pathname of the page where the event is triggered. You can also use an asterisk to group multiple pages (`/blog*`) |
| `event:hostname` | example.com | Hostname of the event. |

:::warning

Mixing session metrics `bounce_rate`, `views_per_visit` and `visit_duration` with event dimensions is not allowed.
:::


#### Visit dimensions

Values of these dimensions are determined by the first pageview in a session.


| Dimension | Example | Description |
| --- | --- | --- |
| `visit:entry_page` | /home | Page on which the visit session started (landing page). |
| `visit:exit_page` | /home | Page on which the visit session ended (last page viewed). |
| `visit:source` | Twitter | Visit source, populated from an url query parameter tag (`utm_source`, `source` or `ref`) or the Referer HTTP header. |
| `visit:referrer` | t.co/fzWTE9OTPt | Raw `Referer` header without `http://`, `http://` or `www.`. |
| `visit:channel` | Organic Search | Acquisition channel for visit. |
| `visit:utm_medium` | social | Raw value of the `utm_medium` query param on the entry page. |
| `visit:utm_source` | twitter | Raw value of the `utm_source` query param on the entry page. |
| `visit:utm_campaign` | profile | Raw value of the `utm_campaign` query param on the entry page. |
| `visit:utm_content` | banner | Raw value of the `utm_content` query param on the entry page. |
| `visit:utm_term` | keyword | Raw value of the `utm_term` query param on the entry page. |
| `visit:device` | Desktop | Device type. Possible values are `Desktop`, `Laptop`, `Tablet` and `Mobile`. |
| `visit:browser` | Chrome | Name of the browser vendor. Most popular ones are `Chrome`, `Safari` and `Firefox`. |
| `visit:browser_version` | 88.0.4324.146 | Version number of the browser used by the visitor. |
| `visit:os` | Mac | Name of the operating system. Most popular ones are `Mac`, `Windows`, `iOS` and `Android`. Linux distributions are reported separately. |
| `visit:os_version` | 10.6 | Version number of the operating system used by the visitor. |
| `visit:country` | US | ISO 3166-1 alpha-2 code of the visitor country. |
| `visit:region` | US-MD | ISO 3166-2 code of the visitor region. |
| `visit:city` | 4347778 | [GeoName ID](https://www.geonames.org/) of the visitor. |
| `visit:country_name` | United States | Name of the visitor country. |
| `visit:region_name` | California | Name of the visitor region. |
| `visit:city_name` | San Francisco | Name of the visitor city. |

#### Time dimensions {#time-dimensions}

It's useful to be able to group data by time, which can be done via the following dimensions.

| Dimension | Example | Description |
| -- | -- | -- |
| `time` | 2024-01-01 | Time or date to group by. Automatically figures out the appropriate time:bucket value from date range. Response is a valid ISO8601 date or timestamp |
| `time:hour` | 2021-01-27T23:43:10Z | Time grouped by hour. ISO8601 timestamp |
| `time:day` | 2021-01-27 | Time grouped by date. ISO8601 date |
| `time:week` | 2021-01-04 | Time grouped by start of the week. ISO8601 date |
| `time:month` | 2021-01-01 | Time grouped by start of month. ISO8601 date |

Note that:
- `time` dimensions are not usable in filters. Set [`date_range`](#date_range) instead.
- If no data falls into a given time bucket, no values are returned. [See `include.time_labels` option](#time-labels) for a workaround.

[See example](#example-timeseries)

#### Custom properties

[Custom properties](/custom-props/introduction) can also be used as dimensions with the form `event:props:<custom_prop_name>`. [See example](#example-custom-properties)

### filters <Optional />

Default: `[]`

Filters allow limiting the data analyzed in a query. [See example](#example-filtering).

#### Simple filters

Each simple filter is an array with three or four elements `[operator, dimension, clauses]` or `[operator, dimension, clauses, modifiers]`.

##### operators

The following operators are currently supported:

| Operator | Example | Explanation |
| -- | -- | -- |
| `is` | `["is", "visit:country_name", ["Germany", "Poland"]]` | Sessions originating from Germany or Poland. |
| `is_not` | `["is_not", "event:page", ["/pricing"]]` | Events that did not visit /pricing page |
| `contains` | `["contains", "event:page", ["/login"]]` | Events visited any page containing /login |
| `contains_not` | `["contains_not", "event:page", ["docs", "pricing"]]` | Events that did not visit any page containing docs or pricing |
| `matches` | `["matches", "event:page", ["^/user/\d+$"]]` | Events where page matches regular expression `^/user/\d+$`. [Uses re2 syntax](https://github.com/google/re2/wiki/Syntax) |
| `matches_not` | `["matches", "event:page", ["^/user/\d+$"]]` | Events where page does not match regular expression `^/user/\d+$`. [Uses re2 syntax](https://github.com/google/re2/wiki/Syntax) |


##### dimension

[Event and visit dimensions](#dimensions) are valid for filters.

Note that only `is` operator is valid for `event:goal` dimension.

##### clauses

List of values to match against. A data point matches filter if _any_ of the clauses matches.

##### modifiers <Optional />

`contains` and `is` filters also support a 4th, modifier argument. For example, to match countries ignoring casing, you can use the following filter:

`["contains", "event:country", ["united", "EST], { "case_sensitive": false }]`. [See full example](#example-filtering-case-insensitive)

#### Segments

[Segments](/filters-segments/#how-to-save-a-segment) can be used in filters, in the form `["is", "segment", [<segment_id>]]`. [See example](#example-filtering-by-segment)

#### Logical operations

Filters can be combined using `and`, `or` and `not` operators.

| Operator | Example | Explanation |
| -- | -- | -- |
| `and` | `["and", [["is", "visit:country_name", ["Germany"]], ["is", "visit:city_name", ["Berlin"]]]]` | Sessions originating from Berlin, Germany |
| `or` | `["or", [["is", "visit:country_name", ["Germany"]], ["is", "visit:city_name", ["Tallinn"]]]]` | Sessions originating from Germany or city of Tallinn |
| `not` | `["not", ["is", "visit:country_name", ["Germany"]]]` | Sessions not originating from Germany |

Note that top level filters is wrapped in an implicit `and`.

### order_by <Optional />

Allows for custom ordering of query results.

List of tuples `[dimension_or_metric, direction]`, where:
- `dimension_or_metric` needs to be listed in query [`metrics`](#metrics) or [`dimensions`](#dimensions) respectively.
- `direction` can be one of `"asc"` or `"desc"`

For example:

```json
[["visitors", "desc"], ["visit:country_name", "asc"]]
```

When not specified, the default ordering is:

1. If a [time dimensions](#time-dimensions) is present, `[time_dimension, "asc"]`
2. By the first metric specified, descending.

[See full query example](#example-custom-properties)

### include <Optional />

Default: `{}`

Additional options for the query as to what data to include.

#### include.imports {#include.imports}

Default: `false`

If true, tries to include imported data in the result. See [imported stats](#imported-stats) for more details, [query example](#example-imports).

<details>
  <summary>Read more on limitations of including imported data</summary>

  Using custom property dimensions (`event:props:*`) are only supported for 2 properties: `url` and `path`. Additionally, these breakdowns will only work in combination with a [certain subset](/csv-import#goals-and-custom-properties) of `event:goal` filters.

  ##### Filtering imported stats

  Filtering by imported data is limited. The general rule is that you cannot filter by two different properties at the same time.
  For example, `event:page==/;visit:source==Twitter` is not able to return any imported results. The same happens when you try to filter by one dimension and set another as a dimension.

  There are some exceptions though. The following dimensions are aggregated and grouped together and can be combined in a query:

  * Countries, regions, cities
  * Operating systems and their versions
  * Hostnames and pages
  * Specific custom events and their properties
    * `Outbound Link: Click` and `File Download` goals with the `url` property
    * `404` goals with the `path` property

  For example, you can set a `country` dimension and filter by both `city` and `region`.
</details>

If set, `meta.imports_included` field will be set as a boolean.

If the applied combination of filters and dimensions is not supported for imported stats, the results are still returned based only on native stats. Additionally, `meta.imports_skip_reason` and `meta.imports_warning` response fields will contain more information on why including imported data failed. [See example](#example-imports-warning)

#### include.time_labels {#include.time_labels}

Default: `false`

Requires a `time` dimension being set. If true, sets `meta.time_labels` in response containing all
time labels valid for `date_range`.

[See example](#example-time-labels)

#### include.total_rows {#include.total_rows}

Default: `false`

Should be used for [pagination](#pagination). If true, sets `meta.total_rows` in response containing the total number of
rows for this query.

[See example](#example-pagination)

### pagination <Optional />

Default: `{ "limit": 10000, "offset: 0 }`

[See example](#example-pagination)

## Response structure

Example response:

<CodeBlock language="json">{getExampleCode("exampleResponse", "example-country-and-city", null)}</CodeBlock>

### results

Results is an ordered list query results.

Each result row contains:
- `dimensions` - values for each `dimension` listed in query. In the same order as query `dimensions`, empty if no dimensions requested.
- `metrics` - List of metric values, in the same order as query `metrics`

### meta

Meta information about this query, including warnings and auxiliary data. Related: [include](#include).

<CodeBlock language="javascript">{EXAMPLE_RESPONSE_META}</CodeBlock>

### query

The query that was executed, after manipulations performed on the backend.

:::tip Looking for legacy stats API v1 docs?
Take a look [here](stats-api-v1)
:::

## Examples

The following examples are interactive and can be edited and run against your own data if you're logged in.

<SiteContextProvider>

### Simple aggregate query {#example-aggregate}

<ApiV2Example id="example-aggregate" />

### Custom date range {#example-custom-date-range}

<ApiV2Example id="example-custom-date-range" />

### Country and city analysis {#example-country-and-city}

<ApiV2Example id="example-country-and-city" />

### UTM medium, source analysis {#example-utm}

<ApiV2Example id="example-utm" />

### Filtering by page and country {#example-filtering}

<ApiV2Example id="example-filtering" />

### Case insensitive filtering {#example-filtering-case-insensitive}

<ApiV2Example id="example-filtering-case-insensitive" />

### Filtering by segment {#example-filtering-by-segment}

<ApiV2Example id="example-filtering-by-segment" />

### Timeseries query {#example-timeseries}

<ApiV2Example id="example-timeseries" />

### Timeseries query hourly, with labels {#example-time-labels}

<ApiV2Example id="example-time-labels" />

### Using custom properties {#example-custom-properties}

<ApiV2Example id="example-custom-properties" />

### Pagination {#example-pagination}

<ApiV2Example id="example-pagination" />

### Including imported data {#example-imports}

<ApiV2Example id="example-imports" />

### Including imported data failed {#example-imports-warning}

In this example, imported data could not be included due to dimension and filter combination not supporting imports. [More information](#include.imports)

<ApiV2Example id="example-imports-warning" />


### Revenue metrics {#example-revenue-metrics}

<ApiV2Example id="example-revenue-metrics" />

### Revenue metrics could not be calculated {#example-revenue-warning}

In this example, revenue metrics could not be calculated due to different currency filters. [More information](#metrics)

<ApiV2Example id="example-revenue-warning" />

</SiteContextProvider>
