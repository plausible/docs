---
title: Site provisioning API reference
---

import TOCInline from '@theme/TOCInline';
import {Required, Optional} from '../src/js/api-helpers.js';

The Plausible Site provisioning API offers a way to create and manage your sites in Plausible programmatically. It's
a work in progress but currently it allows 2 basic operations:

* Create a new site
* Find or create a shared link by name

Each request must be authenticated with an API key using the Bearer Token method. Currently, this API is in private preview and therefore it's not
possible to acquire an API key through the dashboard. Please contact uku@plausible.io to get an API key with permissions for the endpoints listed in this document.

The easiest way to explore the API is by using our Postman collection. Just define your `TOKEN` variable and you'll have an executable API reference ready to go.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/32c111c4f6d2cccef9dd)

## Endpoints

### POST /api/v1/sites

Creates a site in your Plausible account.

```bash title="Try it yourself"
curl -X POST https://plausible.io/api/v1/sites \
  -H "Authorization: Bearer ${TOKEN}" \
  -F 'domain="test-domain.com"' \
  -F 'timezone="Europe/London"'
```

```json title="Response 200 OK"
{
    "domain": "test-domain.com",
    "timezone": "Europe/London"
}
```

#### Parameters
<hr / >

**domain** <Required />

Domain of the site to be created in Plausible. Must be a globally unique, the request will fail if the domain is already taken.
<hr / >

**timezone** <Optional />

Timezone name according to the [IANA](https://www.iana.org/time-zones) database. Defaults to `Etc/UTC` when left blank.
<hr / >

### PUT /api/v1/shared-links/:name

Finds or creates a shared link for a given `site_id` (use the site domain as the ID). This endpoint is idempotent, it will not fail
if a shared link with the provided name already exists.


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

**site_id** <Required />

Domain of your site on Plausible.

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

**period** <Required />

See [time periods](#time-periods)

<hr / >

**filters** <Optional />

See [filtering](#filtering)

<hr / >

**interval** <Optional />

Choose your reporting interval. Valid options are `date` (always) and `month` (when specified period is longer than one calendar month). Defaults to
`month` for `6mo` and `12mo`, otherwise falls back to `date`.

### GET /api/v1/stats/breakdown

This endpoint allows you to breakdown your stats by some property. If you are familiar with SQL family databases, this endpoint corresponds to
running `GROUP BY` on a certain property in your stats.

Check out the [properties](#properties) section for a reference of all the properties you can use in this query.

This endpoint can be used to fetch data for `Top sources`, `Top pages`, `Top countries` and similar reports.


```bash title="Try it yourself"
curl https://plausible.io/api/v1/stats/breakdown?site_id=$SITE_ID&period=6mo&property=visit:source&metrics=visitors,bounce_rate&limit=5 \
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

Which property to break down the stats by. Valid options are listed in the [properties](#properties) section above.

<hr / >

**period** <Required />

See [time periods](#time-periods)

<hr / >

**metrics** <Optional />

List of metrics to show for each item in breakdown. Valid options are `visitors`, `pageviews`, `bounce_rate` and `visit_duration`. If not
specified, it will default to `visitors`.

<hr / >

**limit** <Optional />

Limit the number of results. Defaults to 100.

**page** <Optional />

Number of the page, used to paginate results. Importantly, the page numbers start from 1 not 0.

**filters** <Optional />

See [filtering](#filtering)
