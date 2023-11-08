---
title: Site provisioning API reference
---

import {Required, Optional} from '../src/js/api-helpers.js';

:::note
Sites API is part of the Plausible Enterprise plan. Please [contact us](https://plausible.io/contact) to discuss your needs and to get an API key with permissions for the endpoints listed in this document
:::

The Plausible Site provisioning API offers a way to create and manage sites in your Plausible account programmatically. This is useful if you run many websites or if you're [offering a web analytics dashboard powered by Plausible to your customers](https://plausible.io/white-label-web-analytics). The Site API allows these operations:

* Create a new site
* Delete an existing site
* Change a domain name
* Get a site by domain
* Find or create a shared link by name (to use for the [embed dashboard functionality](embed-dashboard.md))
* Find or create a goal by type and value (learn more about [goals and custom events](goal-conversions.md))
* Delete an existing goal

Each request must be authenticated with an API key using the Bearer Token method.

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

#### Post body parameters
<hr / >

**domain** <Required />

Domain of the site to be created in Plausible. Must be a globally unique, the request will fail if the domain is already taken.
<hr / >

**timezone** <Optional />

Timezone name according to the [IANA](https://www.iana.org/time-zones) database. Defaults to `Etc/UTC` when left blank.
<hr / >

### PUT /api/v1/sites/:site_id

Update an existing site in your Plausible account. Note: currently only `domain` change is allowed.

```bash title="Try it yourself"
curl -X PUT https://plausible.io/api/v1/sites/test-domain.com \
  -H "Authorization: Bearer ${TOKEN}" \
  -F 'domain="new-test-domain.com"'
```

```json title="Response 200 OK"
{
    "domain": "new-test-domain.com",
    "timezone": "Europe/London"
}
```

#### Post body parameters
<hr / >

**domain** <Required />

Domain of the site to be created in Plausible. Must be a globally unique, the request will fail if the domain is already taken.
<hr / >

### DELETE /api/v1/sites/:site_id

Deletes a site from your Plausible account along with all it's data and configuration. The API key must belong to the owner of the site.
Permanently deleting all your data may take up to 48 hours and you won't be able to immediately register the same site again until the process is complete.

```bash title="Try it yourself"
curl -X DELETE https://plausible.io/api/v1/sites/test-domain.com \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "deleted": "true"
}
```

### GET /api/v1/sites/:site_id

Gets a site from your Plausible account. The API key must belong to the owner of the site.

```bash title="Try it yourself"
curl -X GET https://plausible.io/api/v1/sites/test-domain.com \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "domain": "test-domain.com",
    "timezone": "Europe/London"
}
```

### PUT /api/v1/sites/shared-links

Finds or creates a shared link for a given `site_id` (use the site domain as the ID). This endpoint is idempotent, it won't fail if a shared link with the provided name already exists.


```bash title="Try it yourself"
curl -X PUT https://plausible.io/api/v1/sites/shared-links \
  -H "Authorization: Bearer ${TOKEN}" \
  -F 'site_id="test-domain.com"' \
  -F 'name="Wordpress"'
```

```json title="Response 200 OK"
{
    "name": "Wordpress",
    "url": "https://plausible.io/share/site.com?auth=<random>"
}
```

#### Body parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >

**name** <Required />

Name of the shared link.

<hr / >

### PUT /api/v1/sites/goals

Finds or creates a goal for a given `site_id` (use the site domain as the ID). This endpoint is idempotent, it won't fail if a goal with the provided name already exists.


```bash title="Try it yourself"
curl -X PUT https://plausible.io/api/v1/sites/goals \
  -H "Authorization: Bearer ${TOKEN}" \
  -F 'site_id="test-domain.com"' \
  -F 'goal_type="event"' \
  -F 'event_name="Signup"'
```

```json title="Response 200 OK"
{
    "domain": "test-domain.com",
    "id": "1",
    "goal_type": "event",
    "event_name": "Signup",
    "page_path": null
}
```

#### Body parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >

**goal_type** <Required />

Type of your goal, accepts only one of the following values: `event` or `page` 

<hr / >

**event_name** <Required /> only if _goal_type_ is set to `event`

Actual value of the event name of your goal 

<hr / >

**page_path** <Required /> only if _goal_type_ is set to `page`

Actual value of the page path of your goal, also accepts wildcards for type `page` 

<hr / >

### DELETE /api/v1/sites/goals/:goal_id

Deletes a goal from your Plausible account. The API key must belong to the owner of the site. The site must owned by the current user.

```bash title="Try it yourself"
curl -X DELETE https://plausible.io/api/v1/sites/goals/1 \
  -H "Authorization: Bearer ${TOKEN}" \
  -F 'site_id="test-domain.com"'
```

```json title="Response 200 OK"
{
    "deleted": "true"
}
```

#### Body parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >
