---
title: Stats API reference
---

export const Required = ({children, color}) => (
  <span
    style={{
      color: '#ED8936',
      fontSize: '0.7rem',
      fontWeight: 'bold',
      position: 'relative',
      bottom: '4px'
    }}>
    REQUIRED
  </span>
);

export const Optional = ({children, color}) => (
  <span
    style={{
      color: '#718096',
      fontSize: '0.7rem',
      fontWeight: 'bold',
      position: 'relative',
      bottom: '4px'
    }}>
    optional
  </span>
);


:::caution Beta warning
The API feature is in early access beta. Feel free to use it, but we do not guarantee the stability of the API. We might
make some breaking changes based on the feedback we receive from beta users.
:::

The Plausible Stats API offers a way to retrieve your stats programmatically. It is a read-only interface to present historical
and real-time stats only. At the moment there is no API to send pageviews or custom events to our backend nor can you manage your sites through
the API.

The API accepts GET requests with query parameters and returns standard HTTP responses along with a JSON-encoded body. All API requests must be made over HTTPS.
Calls made over plain HTTP will fail. API requests without authentication will also fail.

Each request must be authenticated with an API key using the Bearer Token method. You can obtain an API key for your account by going to your user
settings page [plausible.io/settings](https://plausible.io/settings).

The easiest way to explore the API is by using our Postman collection. Just define your `TOKEN` and `SITE_ID` variables and you'll have an exectuable API reference
ready to go.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/32c111c4f6d2cccef9dd)

## Concepts

Querying the Plausible API will feel familiar if you have used time-series databases before. You cannot query individual records from
our stats database. You can only request aggregated metrics over a certain time period.

### Time periods

The options are identical for each endpoint that supports configurable time periods. Each period
is relative to a `date` parameter. When not specified, the `date` field defaults to `today(site.timezone)`.
All time calculations on our backend are done in the timezone that the site is configured in.

* `12mo,6mo` - Last n calendar months relative to `date`
* `month` - The calendar month that `date` falls into
* `30d,7d` - Last n days relative to `date`
* `day` - Stats for the full day specified in `date`

### Properties

Each pageview and custom event in our database has some predefined _properties_ associated with it. In other analytics tools, these
are often referred to as _dimensions_ as well. Properties can be used for filtering and breaking down your stats to drill into
more depth. Here's the full list of properties we collect automatically:

| Property              | Example                       | Description                                                                                                                           |
|-----------------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| event:page            | /blog/remove-google-analytics | Pathname of the page where the event is triggered                                                                                     |
| visit:source          | Twitter                       | Visit source, populated from an url query parameter tag (`utm_source`, `source` or `ref`) or the `Referer` HTTP header.               |
| visit:referrer        | t.co/fzWTE9OTPt               | Raw `Referer` header without `http://`, `http://` or `www.`                                                                           |
| visit:utm_medium      | social                        | Raw value of the `utm_medium` query param on the entry page                                                                           |
| visit:utm_source      | twitter                       | Raw value of the `utm_source` query param on the entry page                                                                           |
| visit:utm_campaign    | profile                       | Raw value of the `utm_campaign` query param on the entry page                                                                         |
| visit:device          | Desktop                       | Device type. Possible values are `Desktop`, `Laptop`, `Tablet` and `Mobile`                                                           |
| visit:browser         | Chrome                        | Name of the browser vendor. Most popular ones are `Chrome`, `Safari` and `Firefox`                                                    |
| visit:browser_version | 88.0.4324.146                 | Version number of the browser used by the visitor                                                                                     |
| visit:os              | Mac                           | Name of the operating system. Most popular ones are `Mac`, `Windows`, `iOS` and `Android`. Linux distrubtions are reported separately |
| visit:os_version      | 10.6                          | Version number of the operating system used by the visitor                                                                            |
| visit:country         | US                            | ISO 3166-1 alpha-2 code of the visitor country                                                                                        |

### Filtering

Most endpoints support a `filter` query parameter to drill down into your data. Currently, only simple equality filters are supported.

An equality filter can be specified with url-encoded `==`. Filters can be joined together with `;` which applies a logical
`AND` operator to the filters. Here's a filter expression combining two filters:

```
visit:browser==Firefox;visit:country==Estonia
```

## Endpoints

### GET /api/v1/realtime/visitors

This endpoint returns the number of current visitors on your site. A current visitor is defined as a visitor who triggered a pageview on your site
in the last 5 minutes.

```bash title="Try it yourself"
curl https://plausible.io/api/v1/realtime/visitors?site_id=$SITE_ID
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
21
```

This endpoint is very simplistic. There are no options or filters you can provide.

### GET /api/v1/stats/aggregate

This endpoint aggregates metrics over a certain time period. If you are familiar with the Plausible dashboard, this endpoint corresponds to
the top row of stats that include `Unique Visitors`, `Pageviews`, `Bounce rate` and `Visit duration`. You can retrieve any number and combination
of these metrics in one request.


```bash title="Try it yourself"
curl https://plausible.io/api/v1/stats/aggregate?site_id=$SITE_ID&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
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
```


#### Parameters
<hr / >

**period** <Required />

See [time periods](#time-periods)

<hr / >

**metrics** <Required />

List of metrics to aggregate. Valid options are `visitors`, `pageviews`, `bounce_rate` and `visit_duration`.

<hr / >

**compare** <Optional />

Off by default. You can specify `previous_period` to calculate percent difference with previous period for each metric.

<hr / >

**filters** <Optional />

See [filtering](#filtering)


### GET /api/v1/stats/timeseries

This endpoint provides timeseries data over a certain time period. If you are familiar with the Plausible dashboard, this endpoint corresponds to
the main visitor graph.


```bash title="Try it yourself"
curl https://plausible.io/api/v1/stats/timeseries?site_id=$SITE_ID&period=6mo
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
[
    {
        "date": "2020-08-01",
        "value": 36085
    },
    {
        "date": "2020-09-01",
        "value": 27688
    },
    {
        "date": "2020-10-01",
        "value": 71615
    },
    {
        "date": "2020-11-01",
        "value": 31440
    },
    {
        "date": "2020-12-01",
        "value": 35804
    },
    {
        "date": "2021-01-01",
        "value": 0
    }
]
```


#### Parameters
<hr / >

**period** <Required />

See [time periods](#time-periods)

<hr / >

**filters** <Optional />

See [filtering](#filtering)

<hr / >

**interval** <Optional />

Choose your reporting interval. Valid options are `date` (always) and `month` (when specified period is longer than one calendar month). Defaults to
`month` for `6mo` and `12mo`, otherwise falls back to `date`.

## Examples of common queries

### Number of visitors to a specific page

Let's say you want to get the number of visitors to a specific page on your website like `/order/confirmation`. This can be achieved by
filtering your stats on the `event:page` property:

```bash title="Visitors to /order/confirmation"
curl https://plausible.io/api/v1/stats/aggregate?site_id=$SITE_ID&period=6mo&filters=event:page%3D%3D%2Forder%2Fconfirmation
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
    "visitors": {
        "value": 1480
    }
}
```

### Monthly traffic from Google

As a second example, let's imagine we want to analyze our SEO efforts for the last year.
To graph your traffic from Google over time, you can use the `timeseries` endpoint with a time period `12mo` and
filter expression `visit:source==Google`.


```bash title="Monthly traffic from Google"
curl https://plausible.io/api/v1/stats/timeseries?site_id=$SITE_ID&period=12mo&filters=visit:browser%3D%3DChrome \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
// response
```


