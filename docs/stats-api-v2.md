---
title: Stats API v2 reference
---

import ApiV2Example from '../src/js/apiv2-example.js';


:::warning

Please be advised that this feature is currently in its beta stage. Some functionality might change in the upcoming releases.

:::

The Plausible Stats API offers a way to retrieve your stats programmatically. It's a read-only interface to present historical and real-time stats only. Take a look at our [events API](events-api.md) if you want to send pageviews or custom events to our backend and our [sites API](sites-api.md) if you want to manage your sites through the API.

The API accepts POST requests with query parameters and returns standard HTTP responses along with a JSON-encoded body. All API requests must be made over HTTPS. Calls made over plain HTTP will fail.

## Authentication

You can obtain an API key for your account by going to your user settings page [plausible.io/settings](https://plausible.io/settings).

After creating a token, you can authenticate your request by sending the token in the Authorization header of your request. For example, in the following request, replace YOUR-TOKEN with a reference to your token and site_id value with your domain.

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

## Query API specification

## Examples

:::warning

The following example queries are interactive and can be edited as needed.
:::

### Simple aggregate query {#aggregate}

<ApiV2Example
  id="aggregate"
  request="apiv2-examples/aggregate-request.json"
  response="apiv2-examples/aggregate-response.json"
/>

### Best-performing UTM tags

### Filtering by utm

Event, visit and custom properties

### Filtering by regex

### Timeseries query {#timeseries}

<ApiV2Example
  id="timeseries-query"
  request="apiv2-examples/timeseries-request.json"
  response="apiv2-examples/timeseries-response.json"
/>

### Timeseries query with labels



### Multiple dimensions

### Including imported data

### Including imported data failed

### Explicit ordering of results

### Filtering by hostname

Custom behavior
