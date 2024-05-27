---
title: Stats API reference
---

import {Required, Optional} from '../src/js/api-helpers.js';

The Plausible Stats API offers a way to retrieve your stats programmatically. It's a read-only interface to present historical and real-time stats only. Take a look at our [events API](events-api.md) if you want to send pageviews or custom events to our backend and our [sites API](sites-api.md) if you want to manage your sites through the API.

The API accepts GET requests with query parameters and returns standard HTTP responses along with a JSON-encoded body. All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

Each request must be authenticated with an API key using the Bearer Token method. You can obtain an API key for your account by going to your user
settings page [plausible.io/settings](https://plausible.io/settings).

API keys have a rate limit of 600 requests per hour by default. If you have special needs for more requests, please contact us to request more capacity.

The easiest way to explore the API is by using our Postman collection. Just define your `TOKEN` and `SITE_ID` variables, and you'll have an executable API reference ready to go.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/32c111c4f6d2cccef9dd)

:::tip New to Postman?
We have [a step-by-step guide to set up the authorization and run your first queries with Postman](get-started-with-postman.md)
:::

## Concepts

Querying the Plausible API will feel familiar if you have used time-series databases before. You can't query individual records from
our stats database. You can only request aggregated metrics over a certain time period.

Each request requires a `site_id` parameter which is the domain of your site as configured in Plausible. If you're unsure, navigate to your site
settings in Plausible and grab the value of the `domain` field.

### Metrics

You can specify a `metrics` option in the query, to choose the metrics for each instance returned. See here for a full overview of [metrics and their definitions](/metrics-definitions). The metrics currently supported in Stats API are:

| Metric            | Description                                                                                                                                               |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `visitors`        | The number of unique visitors.                                                                                                                            |
| `visits`          | The number of visits/sessions                                                                                                                             |
| `pageviews`       | The number of pageview events                                                                                                                             |
| `views_per_visit` | The number of pageviews divided by the number of visits. Returns a floating point number. Currently only supported in Aggregate and Timeseries endpoints. |
| `bounce_rate`     | Bounce rate percentage                                                                                                                                    |
| `visit_duration`  | Visit duration in seconds                                                                                                                                 |
| `events`          | The number of events (pageviews + custom events). When filtering by a goal, this metric corresponds to "Total Conversions" in the dashboard.              |
| `conversion_rate` | The percentage of visitors who completed the goal. Requires an `event:goal` filter or `event:goal` property in the breakdown endpoint                     |
| `time_on_page`    | The average time users spend on viewing a single page. Requires an `event:page` filter or `event:page` property in the breakdown endpoint.                |

### Time periods

The options are identical for each endpoint that supports configurable time periods. Each period is relative to a `date` parameter. The date should follow the standard ISO-8601 format. When not specified, the `date` field defaults to `today(site.timezone)`.
All time calculations on our backend are done in the time zone that the site is configured in.

* `12mo,6mo` - Last n calendar months relative to `date`.
* `month` - The calendar month that `date` falls into.
* `30d,7d` - Last n days relative to `date`.
* `day` - Stats for the full day specified in `date`.
* `custom` - Provide a custom range in the `date` parameter.

When using a custom range, the `date` parameter expects two ISO-8601 formatted dates joined with a comma as follows `?period=custom&date=2021-01-01,2021-01-31`.
Stats will be returned for the whole date range inclusive of the start and end dates.

### Properties

Each pageview and custom event in our database has some predefined _properties_ associated with it. In other analytics tools, these
are often referred to as _dimensions_ as well. Properties can be used for filtering and breaking down your stats to drill into
more depth. Here's the full list of properties we collect automatically:

| Property                | Example                       | Description                                                                                                                             |
| ----------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `event:goal`            | Register                      | A custom action that you want your users to take. To use this property, you first need to configure some goals in the [site settings](/website-settings), or via the [Sites API](/sites-api). Learn more about goals [here](/goal-conversions).                            |
| `event:page`            | /blog/remove-google-analytics | Pathname of the page where the event is triggered. You can also use an asterisk to group multiple pages (`/blog*`)                      |
| `event:hostname`        | example.com                   | Hostname of the event. At this stage, breaking down on hostname is not supported and you can only use this property for filtering. Use an asterisk to filter by multiple hostnames at once, e.g. `*.example.com`.
| `visit:entry_page`      | /home                         | Page on which the visit session started (landing page).                                                                                 |
| `visit:exit_page`       | /home                         | Page on which the visit session ended (last page viewed).                                                                               |
| `visit:source`          | Twitter                       | Visit source, populated from an url query parameter tag (`utm_source`, `source` or `ref`) or the `Referer` HTTP header.                 |
| `visit:referrer`        | t.co/fzWTE9OTPt               | Raw `Referer` header without `http://`, `http://` or `www.`.                                                                            |
| `visit:utm_medium`      | social                        | Raw value of the `utm_medium` query param on the entry page.                                                                            |
| `visit:utm_source`      | twitter                       | Raw value of the `utm_source` query param on the entry page.                                                                            |
| `visit:utm_campaign`    | profile                       | Raw value of the `utm_campaign` query param on the entry page.                                                                          |
| `visit:utm_content`     | banner                        | Raw value of the `utm_content` query param on the entry page.                                                                           |
| `visit:utm_term`        | keyword                       | Raw value of the `utm_term` query param on the entry page.                                                                              |
| `visit:device`          | Desktop                       | Device type. Possible values are `Desktop`, `Laptop`, `Tablet` and `Mobile`.                                                            |
| `visit:browser`         | Chrome                        | Name of the browser vendor. Most popular ones are `Chrome`, `Safari` and `Firefox`.                                                     |
| `visit:browser_version` | 88.0.4324.146                 | Version number of the browser used by the visitor.                                                                                      |
| `visit:os`              | Mac                           | Name of the operating system. Most popular ones are `Mac`, `Windows`, `iOS` and `Android`. Linux distributions are reported separately. |
| `visit:os_version`      | 10.6                          | Version number of the operating system used by the visitor.                                                                             |
| `visit:country`         | US                            | ISO 3166-1 alpha-2 code of the visitor country.                                                                                         |
| `visit:region`          | US-MD                         | ISO 3166-2 code of the visitor region.                                                                                                  |
| `visit:city`            | 4347778                       | [GeoName ID](https://www.geonames.org/) of the visitor city.                                                                            |

#### Custom properties

In addition to properties that are collected automatically, you can also query for [custom properties](/custom-props/introduction).
To filter or break down by a custom property, use the key `event:props:<custom_prop_name>`. [See example](#breakdown-custom-event-by-custom-properties) for how to use it.

### Filtering

Most endpoints support a `filters` query parameter to drill down into your data. You can filter by all properties described in the [Properties table](#properties), using the following operators:

| Operator        | Usage example                              | Explanation                                                               |
|-----------------|--------------------------------------------|---------------------------------------------------------------------------|
| `==`            | `event:goal==Signup`                       | Simple equality - completed goal "Signup"                                 |
| `!=`            | `visit:country!=FR`                        | Simple inequality - country is not France                                 |
| <code>\|</code> | <code>visit:source==Github\|Twitter</code> | IN expression - visit source is Github or Twitter.                        |
| `;`             | `event:goal==Signup;visit:country==DE`     | AND expression - completed goal "Signup" and country is Germany           |
| `*`             | `event:page==/blog/*`                      | Wildcard - matches any character                                          |

:::tip Want to use the `|` character in a filter value?
You can escape it with a backslash. For example, `visit:utm_campaign==campaign\|one` will let you filter by the literal `campaign|one` value
:::

#### Limitations

* It is currently possible to exclude only one value at a time (e.g. `visit:browser!=Chrome|Safari` is not yet supported)
* Wildcard characters cannot be used in combination with an IN expression (except for pageview goals - e.g. `event:goal==Signup|Visit+/register` is supported)
* Inequality `!=` operator is currently not supported for goals

#### Filtering by goals

Unlike other properties you need to set up the goals in your [site settings](/website-settings), or via the [Sites API](/sites-api) first, before you can filter by them.

For custom event goals, the filter value is simply the name of your goal, e.g. `event:goal==Signup`.

For pageview goals, the value should contain the string `"Visit"` followed by a space character, and the pathname of your pageview goal. For example: `Visit /register`.

To include a space character in the query part of the URL, you can use `%20` (a URL encoded space character) or a `+` sign. For example:

* `event:goal==Visit%20/register`
* `event:goal==Outbound+Link:+Click`

### Imported stats

Aggregates, timeseries and breakdowns support including imported stats in the results using `with_imported` option, with limitations. Breakdowns for custom properties (`event:props:*`) are only supported for 2 properties: `url` and `path`. Additionally, these breakdowns will only work in combination with a [certain subset](/csv-import#goals-and-custom-properties) of `event:goal` filters.

#### Filtering imported stats

Filtering imported stats is currently not possible, except for very specific cases of filtering by `event:goal` in custom property breakdowns described earlier. When the applied combination of filters and property is not supported for imported stats, the results are still returned based only on native stats, with a warning.

## Endpoints

### GET /api/v1/stats/realtime/visitors

This endpoint returns the number of current visitors on your site. A current visitor is defined as a visitor who triggered a pageview on your site
in the last 5 minutes.

```bash title="Try it yourself"
curl "https://plausible.io/api/v1/stats/realtime/visitors?site_id=$SITE_ID" \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
21
```

#### Parameters
<hr / >

**site_id** <Required />

Domain of your site on Plausible.
<hr / >

### GET /api/v1/stats/aggregate

This endpoint aggregates metrics over a certain time period. If you are familiar with the Plausible dashboard, this endpoint corresponds to the top row of stats that include `Unique Visitors` Pageviews, `Bounce rate` and `Visit duration`. You can retrieve any number and combination of these metrics in one request.


```bash title="Try it yourself"
curl "https://plausible.io/api/v1/stats/aggregate?site_id=$SITE_ID&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration" \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
  "results": {
    "bounce_rate": {
        "value": 53.0
    },
    "pageviews": {
        "value": 673814
    },
    "visit_duration": {
        "value": 86.0
    },
    "visitors": {
        "value": 201524
    }
  }
}
```

#### Parameters
<hr / >

**site_id** <Required />

Domain of your site on Plausible.

<hr / >

**period** <Optional />

See [time periods](#time-periods). If not specified, it will default to `30d`.

<hr / >

**metrics** <Optional />

Comma-separated list of metrics to aggregate, e.g. `visitors,pageviews,bounce_rate`. See the [list of available metrics](#metrics) above.

If not specified, will default to `visitors`.

:::note
Some metrics can only be queried with a certain filter. For example, the `conversion_rate` metric can only be queried with a filter on `event:goal`. Similarly, `time_on_page` can only be queried with an `event:page` filter.
:::

<hr / >

**with_imported** <Optional />

A boolean determining whether to include imported stats in the returned results or not. If not specified, it will default to `false`. See [imported stats](#imported-stats) for more details.

<hr / >

**compare** <Optional />

Off by default. You can specify `compare=previous_period` to calculate the percent difference with the previous period for each metric. The previous period will be of the exact same length as specified in the `period` parameter.

<hr / >

**filters** <Optional />

See [filtering](#filtering)

### GET /api/v1/stats/timeseries

This endpoint provides timeseries data over a certain time period. If you are familiar with the Plausible dashboard, this endpoint corresponds to
the main visitor graph.


```bash title="Try it yourself"
curl "https://plausible.io/api/v1/stats/timeseries?site_id=$SITE_ID&period=6mo" \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
  "results": [
    {
      "date": "2020-08-01",
      "visitors": 36085
    },
    {
      "date": "2020-09-01",
      "visitors": 27688
    },
    {
      "date": "2020-10-01",
      "visitors": 71615
    },
    {
      "date": "2020-11-01",
      "visitors": 31440
    },
    {
      "date": "2020-12-01",
      "visitors": 35804
    },
    {
      "date": "2021-01-01",
      "visitors": 0
    }
  ]
}
```

#### Parameters
<hr / >

**site_id** <Required />

Domain of your site on Plausible.

<hr / >

**period** <Optional />

See [time periods](#time-periods). If not specified, it will default to `30d`.

<hr / >

**filters** <Optional />

See [filtering](#filtering)

<hr / >

**metrics** <Optional />

Comma-separated list of metrics to show for each time bucket. Valid options are `visitors`, `visits`, `pageviews`, `views_per_visit`, `bounce_rate`, `visit_duration`, `events` and `conversion_rate`. If not specified, it will default to `visitors`.

<hr / >

**with_imported** <Optional />

A boolean determining whether to include imported stats in the returned results or not. If not specified, it will default to `false`. See [imported stats](#imported-stats) for more details.

<hr / >

**interval** <Optional />

Choose your reporting interval. Valid options are `date` (always) and `month` (when specified period is longer than one calendar month). Defaults to
`month` for `6mo` and `12mo`, otherwise falls back to `date`.

### GET /api/v1/stats/breakdown

This endpoint allows you to break down your stats by some property. If you are familiar with SQL family databases, this endpoint corresponds to
running `GROUP BY` on a certain property in your stats, then ordering by the count.

Check out the [properties](#properties) section for a reference of all the properties you can use in this query.

This endpoint can be used to fetch data for `Top sources`, `Top pages`, `Top countries` and similar reports.


```bash title="Try it yourself"
curl "https://plausible.io/api/v1/stats/breakdown?site_id=$SITE_ID&period=6mo&property=visit:source&metrics=visitors,bounce_rate&limit=5" \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
  "results": [
    {
        "bounce_rate": 49.0,
        "source": "(Direct / None)",
        "visitors": 94932
    },
    {
        "bounce_rate": 75.0,
        "source": "Hacker News",
        "visitors": 22540
    },
    {
        "bounce_rate": 58.0,
        "source": "Google",
        "visitors": 16909
    },
    {
        "bounce_rate": 62.0,
        "source": "Twitter",
        "visitors": 7477
    },
    {
        "bounce_rate": 56.0,
        "source": "indiehackers.com",
        "visitors": 4518
    }
  ]
}
```

#### Parameters
<hr / >

**site_id** <Required />

Domain of your site on Plausible.

<hr / >

**property** <Required />

Which property to break down the stats by. Valid options are listed in the [properties](#properties) section above. Note that the `event:hostname` property is unsupported as a breakdown property at this stage.

<hr / >

**period** <Optional />

See [time periods](#time-periods). If not specified, it will default to `30d`.

<hr / >

**metrics** <Optional />

Comma-separated list of metrics to show for each item in breakdown. See the [list of available metrics](#metrics) above. If not specified, it will default to `visitors`.

:::note
Some metrics require a certain filter or breakdown property. For example `conversion_rate` can be queried with a filter on `event:goal` or in a breakdown by`event:goal`.
:::

<hr / >

**with_imported** <Optional />

A boolean determining whether to include imported stats in the returned results or not. If not specified, it will default to `false`. See [imported stats](#imported-stats) for more details.

<hr / >

**limit** <Optional />

Limit the number of results. Maximum value is 1000. Defaults to 100. If you want to get more than 1000 results, you can make multiple requests and paginate the results by specifying the `page` parameter (e.g. make the same request with `page=1`, then `page=2`, etc)

**page** <Optional />

Number of the page, used to paginate results. Importantly, the page numbers start from 1 not 0.

**filters** <Optional />

See [filtering](#filtering)

#### Breaking down by multiple properties at the same time

Currently, it is only possible to break down on one property at a time. Using a list of properties with one query is not supported. So if you want a breakdown by both `event:page` and `visit:source` for example, you would have to make multiple queries (break down on one property and filter on another) and then manually/programmatically group the results together in one report. This also applies for breaking down by time periods. To get a daily breakdown for every page, you would have to break down on `event:page` and make multiple queries for each date. For a simple time period breakdown, have a look at the Timeseries endpoint.

## Examples of common queries

### Top pages

Let's say you want to show a similar report to the `Top pages` report in the Plausible UI. You can do this by calling the
`/api/v1/stats/breakdown` endpoint and specify `event:page` as the property to group by.

```bash title="Top pages"
curl "https://plausible.io/api/v1/stats/breakdown?site_id=$SITE_ID&period=6mo&property=event:page&limit=5" \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
  "results": [
    {
      "page": "/",
      "visitors": 94298
    },
    {
      "page": "/blog/open-source-licenses",
      "visitors": 18803
    },
    {
      "page": "/plausible.io",
      "visitors": 20485
    },
    {
      "page": "/self-hosted-web-analytics",
      "visitors": 22236
    },
    {
      "page": "/sites",
      "visitors": 32386
    }
  ]
}
```

### Number of visitors to a specific page

Let's say you want to get the number of visitors to a specific page on your website like `/order/confirmation`. This can be achieved by
filtering your stats on the `event:page` property:

```bash title="Visitors to /order/confirmation"
curl "https://plausible.io/api/v1/stats/aggregate?site_id=$SITE_ID&period=6mo&filters=event:page%3D%3D%2Forder%2Fconfirmation" \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
  "results": {
    "visitors": {
        "value": 1480
    }
  }
}
```

### Monthly traffic from Google

As a second example, let's imagine we want to analyze our SEO efforts for the last half year.
To graph your traffic from Google over time, you can use the `timeseries` endpoint with a time period `6mo` and
filter expression `visit:source==Google`.

```bash title="Monthly traffic from Google"
curl "https://plausible.io/api/v1/stats/timeseries?site_id=$SITE_ID&period=6mo&filters=visit:source%3D%3DGoogle" \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
  "results": [
    {
        "date": "2020-09-01",
        "visitors": 2962
    },
    {
        "date": "2020-10-01",
        "visitors": 4974
    },
    {
        "date": "2020-11-01",
        "visitors": 5119
    },
    {
        "date": "2020-12-01",
        "visitors": 5397
    },
    {
        "date": "2021-01-01",
        "visitors": 7167
    },
    {
        "date": "2021-02-01",
        "visitors": 5802
    }
]
}
```

### Breakdown custom event by custom properties

A more advanced use-case where custom events are used along with custom properties. Let's say you have a `Download` custom event goal along with
a custom property called `method`. You can get a breakdown of download methods with the following query:

```bash title="Breakdown of download methods"
curl "https://plausible.io/api/v1/stats/breakdown?site_id=$SITE_ID&period=6mo&property=event:props:method&filters=event:goal%3D%3DDownload" \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
    "results": [
        {
            "method": "HTTP",
            "visitors": 1477
        },
        {
            "method": "Magnet",
            "visitors": 370
        }
    ]
}
```

:::tip Want to monitor the status of our API?
You can use GET https://plausible.io/api/health endpoint to do so
:::
