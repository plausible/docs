---
title: Stats API v2 reference
toc_max_heading_level: 4
---

import ApiV2Example from '../src/js/apiv2-example.js';
import {Required, Optional} from '../src/js/api-helpers.js';


:::warning

Please be advised that this feature is currently in beta. Some functionality might be broken or change in the coming months.

:::

The Plausible Stats API offers a way to retrieve your stats programmatically. It's a read-only interface to present historical and real-time stats only. Take a look at our [events API](events-api.md) if you want to send pageviews or custom events to our backend and our [sites API](sites-api.md) if you want to manage your sites through the API.

`/api/v2/query` endpoint accepts POST requests with query parameters and returns standard HTTP responses along with a JSON-encoded body. All API requests must be made over HTTPS. Calls made over plain HTTP will fail.

## Authentication

You can obtain an API key for your account by going to your user settings page [plausible.io/settings](https://plausible.io/settings).

After creating a token, you can authenticate your request by sending the token in the Authorization header of your request.

### Example curl request

In the following request, replace YOUR-TOKEN with a reference to your token and site_id value with your domain.

```bash
curl \
--request POST \
# highlight-next-line
--header 'Authorization: Bearer YOUR-TOKEN' \
--header 'Content-Type: application/json' \
--url 'https://plausible.io/api/v2/query' \
--data '{ "site_id": "dummy.site", "metrics": ["visitors"], "date_range": "7d" }'
```

API keys have a rate limit of 600 requests per hour by default. If you have special needs for more requests, please contact us to request more capacity.

## Request structure

`/api/v2/query` endpoint accepts a `query` object. The following keys can be passed with a request.

### site_id <Required />

Domain of your site on Plausible to be queried.

### date_range <Required /> {#date_range}

Date range to be queried.

| Option | Description |
| --- | --- |
| `["2024-01-01", "2024-07-01"]` | Custom date range (ISO8601) |
| `"day"`  | Current day (e.g. 2024-07-01) |
| `"7d"` | Last 7 days relative to today |
| `"30d"` | Last 30 days relative to today |
| `"month"` | Since the start of the current month |
| `"6mo"` | Last 6 months relative to start of this month |
| `"12mo"` | Last 12 months relative to start of this month |
| `"year"` | Since the start of this year |
| `"all"` | Since the start of stats in Plausible |

### metrics <Required /> {#metrics}

Metrics represent values to be calculated with the query.

Valid metrics are:

| Metric name | Description |
| --- | --- |
| `visitors` | The number of unique visitors |
| `visits` | The number of visits/sessions |
| `pageviews` | The number of pageview events |
| `views_per_visit` | The number of pageviews divided by the number of visits. Returns a floating point number. |
| `bounce_rate` | Bounce rate percentage |
| `visit_duration` | Visit duration in seconds |
| `events` | The number of events (pageviews + custom events). When filtering by a goal, this metric corresponds to "Total Conversions" in the dashboard. |
| `percentage` | The percentage of visitors of total who fall into this category: Requires: dimension list |
| `conversion_rate` | The percentage of visitors who completed the goal. Requires: dimension list passed, an event:goal filter or event:goal dimension |
| `group_conversion_rate` | The percentage of visitors who completed the goal with the same dimension. Requires: dimension list passed, an event:goal filter or event:goal dimension |

### dimensions <Optional /> {#dimensions}

Default: `[]`

List of dimensions to group by.

Dimensions are attributes of your dataset. Using them in queries enables analyzing and compare multiple groups against each other.
Think of them as `GROUP BY` in SQL.

#### Event dimensions

Valid dimensions include:

| Dimension | Example | Description |
| --- | --- | --- |
| `event:goal` | Register | A custom action that you want your users to take. To use this dimension, you first need to configure some goals in the site settings, or via the Sites API. Learn more about goals here. |
| `event:page` | /blog/remove-google-analytics | Pathname of the page where the event is triggered. You can also use an asterisk to group multiple pages (/blog*) |
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
| `visit:source` | Twitter | Visit source, populated from an url query parameter tag (utm_source, source or ref) or the Referer HTTP header. |
| `visit:referrer` | t.co/fzWTE9OTPt | Raw Referer header without http://, http:// or www.. |
| `visit:utm_medium` | social | Raw value of the utm_medium query param on the entry page. |
| `visit:utm_source` | twitter | Raw value of the utm_source query param on the entry page. |
| `visit:utm_campaign` | profile | Raw value of the utm_campaign query param on the entry page. |
| `visit:utm_content` | banner | Raw value of the utm_content query param on the entry page. |
| `visit:utm_term` | keyword | Raw value of the utm_term query param on the entry page. |
| `visit:device` | Desktop | Device type. Possible values are Desktop, Laptop, Tablet and Mobile. |
| `visit:browser` | Chrome | Name of the browser vendor. Most popular ones are Chrome, Safari and Firefox. |
| `visit:browser_version` | 88.0.4324.146 | Version number of the browser used by the visitor. |
| `visit:os` | Mac | Name of the operating system. Most popular ones are Mac, Windows, iOS and Android. Linux distributions are reported separately. |
| `visit:os_version` | 10.6 | Version number of the operating system used by the visitor. |
| `visit:country` | US | ISO 3166-1 alpha-2 code of the visitor country. |
| `visit:region` | US-MD | ISO 3166-2 code of the visitor region. |
| `visit:city` | 4347778 | GeoName ID of the visitor city. |
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

[Custom properties](/custom-props/introduction) can also be used as dimensions with the form `event:props:<custom_prop_name>`. [See example](#custom-properties-example)

### filters <Optional />

Default: `[]`

Filters allow limiting the data analyzed in a query. Each filter takes the form of `[operator, dimension, clauses]`. [See example](#example-filtering).

**operators**

The following operators are currently supported:

| Operator | Example | Explanation |
| -- | -- | -- |
| `is` | `["is", "visit:country_name", ["Germany", "Poland"]]` | Sessions originating from Germany or Poland. |
| `is_not` | `["is_not", "event:page", ["/pricing"]]` | Events that did not visit /pricing page |
| `matches` | `["matches", "visit:browser_version", ["88.*", "89.*"]]` | Sessions from browser versions starting with 88 or 89 |
| `does_not_match` | `["does_not_match", "event:page", ["/login*"]]` | Events that did not visit any page starting with /login |

`matches` and `does_not_match` uses XXX system for matching. TODO

**dimension**

[All dimensions listed above](#dimensions) are valid except for time-related ones.

Note that only `is` operator is valid for `event:goal` dimension.

**clauses**

List of values to match against. A data point matches filter if _any_ of the clauses matches.

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

[See full query example](#example-order-by)

### include <Optional />

Default: `{}`

Additional options for the query as to what data to include.

#### include.imports

Default: `false`

If true, tries to include imported data in the result.

Not all queries support including imported data.

TODO: Examples, limitations

#### include.time_labels

Default: `false`

Requires a `time` dimension being set. If true, sets meta.time_labels in response containing all
time labels valid for `date_range`.

[See example](#example-time-labels)

## Examples

:::tip

The following example queries are interactive and can be edited and run against your own data.
:::

### Simple aggregate query {#example-aggregate}

<ApiV2Example
  request="apiv2-examples/aggregate-request.json"
  response="apiv2-examples/aggregate-response.json"
/>

### Custom date range {#example-custom-date-range}

<ApiV2Example
  request="apiv2-examples/custom-date-range-request.json"
  response="apiv2-examples/custom-date-range-response.json"
/>

### Best-performing UTM tags {#example-utm}

### Filtering by utm and country {#example-filtering}

Event, visit and custom properties

### Filtering by regex

### Timeseries query {#example-timeseries}

<ApiV2Example
  request="apiv2-examples/timeseries-request.json"
  response="apiv2-examples/timeseries-response.json"
/>

### Timeseries query hourly, with labels {#example-time-labels}

<ApiV2Example
  request="apiv2-examples/time-labels-request.json"
  response="apiv2-examples/time-labels-response.json"
/>


### Using custom properties {#custom-properties-example}

### Multiple dimensions

### Including imported data

### Including imported data failed

### Explicit ordering of results {#example-order-by}

### Filtering by hostname

Custom behavior
