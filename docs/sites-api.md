---
title: Site provisioning API reference
---

import {Required, Optional} from '../src/js/api-helpers.tsx';

The Plausible Site provisioning API offers a way to create and manage sites in your Plausible account programmatically. This is useful if you run many websites or if you're [offering a web analytics dashboard powered by Plausible to your customers](https://plausible.io/white-label-web-analytics). The Site API allows these operations:

* List existing sites
* List teams
* Create a new site
* Delete an existing site
* Change a domain name
* Configure tracker script settings
* Get a site by domain
* Find or create a shared link by name (to use for the [embed dashboard functionality](embed-dashboard.md))
* List existing goals
* Find or create a goal by type and value (learn more about [goals and custom events](goal-conversions.md))
* Delete an existing goal
* List existing custom properties
* Create a custom property
* Delete an existing custom property
* List site guests/invitations
* Create site guest invitations
* Delete site guests/invitations

Each request must be authenticated with an API key using the Bearer Token method. Please [contact us](https://plausible.io/contact) to discuss your needs and to get an API key with permissions for the endpoints listed in this document.

## Authentication

To create a new sites API key, log in to your Plausible Analytics account. In the top-right menu, click on your account name and go to settings.

Next, go to the "**API Keys**" section in the left-hand sidebar. Click the "**New API Key**" button, choose "**Sites API**" and save the key as it will only be shown once. After saving the key, click on "**Create API Key**" to confirm its creation.

After creating an API key, you can authenticate your request by sending the key in the Authorization header of your request.

## Endpoints

### GET /api/v1/sites

Gets a list of existing sites your Plausible account can access.

```bash title="Try it yourself"
curl -X GET https://plausible.io/api/v1/sites \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "sites": [
        {
            "domain": "test-domain1.com",
            "timezone": "Europe/London",
        },
        {
            "domain": "test-domain2.com",
            "timezone": "Europe/London",
        },
        {
            "domain": "test-domain3.com",
            "timezone": "Europe/London",
        }
    ],
    "meta": {
        "after": null,
        "before": null,
        "limit": 100
    }
}
```

#### Query parameters
<hr / >

**after** <Optional />

Pagination cursor. See [Pagination](#pagination).

<hr / >

**before** <Optional />

Pagination cursor. See [Pagination](#pagination).

<hr / >

**limit** <Optional />

Pagination limit. Defaults to 100. See [Pagination](#pagination).

**team_id** <Optional />

ID of the team to scope the list of sites by. All sites including the ones accessible via guest membership are listed when no ID provided.

<hr / >

### GET /api/v1/sites/teams

Gets a list of teams your Plausible account can access. The `api_available` attribute determines if the API is available for a given team.

```bash title="Try it yourself"
curl -X GET https://plausible.io/api/v1/sites/teams \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "teams": [
        {
            "id": "4d3dae3b-2a44-4aaa-baac-6bb55234a435",
            "name": "My Personal Sites",
            "api_available": false,
        },
        {
            "id": "ef828bca-8a1b-49f6-b829-dee1c9f7d628",
            "name": "Some Team",
            "api_available": true,
        },
        {
            "id": "59e4d5b3-fc1c-464d-95f2-dbe6983396be",
            "name": "Another Team",
            "api_available": true,
        }
    ],
    "meta": {
        "after": null,
        "before": null,
        "limit": 100
    }
}
```

#### Query parameters
<hr / >

**after** <Optional />

Pagination cursor. See [Pagination](#pagination).

<hr / >

**before** <Optional />

Pagination cursor. See [Pagination](#pagination).

<hr / >

**limit** <Optional />

Pagination limit. Defaults to 100. See [Pagination](#pagination).

<hr / >

### POST /api/v1/sites

Creates a site in your Plausible account.

```bash title="Try it yourself"
curl -X POST https://plausible.io/api/v1/sites \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "domain": "test-domain.com",
    "timezone": "Europe/London",
    "tracker_script_configuration": {
      "file_downloads": true,
      "form_submissions": true,
      "outbound_links": true
    }
  }'
```

```json title="Response 200 OK"
{
    "domain": "test-domain.com",
    "timezone": "Europe/London",
    "custom_properties": [],
    "tracker_script_configuration": {
        "id": "pa-1iQepzD1J73BaHey2csUp",
        "installation_type": null,
        "track_404_pages": false,
        "hash_based_routing": false,
        "outbound_links": true,
        "file_downloads": true,
        "revenue_tracking": false,
        "tagged_events": false,
        "form_submissions": true,
        "pageview_props": false
    }
}
```

#### Body parameters
<hr / >

**domain** <Required />

Domain of the site to be created in Plausible. Must be a globally unique, the request will fail if the domain is already taken.
<hr / >

**timezone** <Optional />

Timezone name according to the [IANA](https://www.iana.org/time-zones) database. Defaults to `Etc/UTC` when left blank.
<hr / >

**team_id** <Optional />

ID of the team under which the created site is to be put. Defaults to the ID of "My Personal Sites".

<hr / >

**tracker_script_configuration** <Optional />

Configuration object for the tracker script for this site. When not provided, the default configuration is set. When provided or provided partially (all options are optional), allows you to customize tracking features (any option that is not specified is set to the default value). See [Tracker script configuration](#tracker-script-configuration).

<hr />

### PUT /api/v1/sites/:site_id

Update an existing site in your Plausible account. You can change the domain name and/or update tracker script configuration.

```bash title="Try it yourself"
curl -X PUT https://plausible.io/api/v1/sites/test-domain.com \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "domain": "new-test-domain.com",
    "tracker_script_configuration": {
      "form_submissions": true
    }
  }'
```

```json title="Response 200 OK"
{
    "domain": "new-test-domain.com",
    "timezone": "Europe/London",
    "custom_properties": [],
    "tracker_script_configuration": {
        "id": "pa-1iQepzD1J73BaHey2csUp",
        "installation_type": null,
        "track_404_pages": false,
        "hash_based_routing": false,
        "outbound_links": false,
        "file_downloads": false,
        "revenue_tracking": false,
        "tagged_events": false,
        "form_submissions": true,
        "pageview_props": false
    }
}
```

#### Body parameters
<hr / >

**domain** <Optional />

Domain of the site to be created in Plausible. Must be a globally unique, the request will fail if the domain is already taken.
<hr / >

**tracker_script_configuration** <Optional />

Configuration object for the tracker script for this site. When not provided, the current configuration is kept. When provided or provided partially, allows you to update settings for tracking features (any option that is not specified is kept at the current value). See [Tracker script configuration](#tracker-script-configuration).

<hr />

### DELETE /api/v1/sites/:site_id

Deletes a site from your Plausible account along with all its data and configuration. The API key must belong to the owner of the site.
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

Gets details of a site. Your Plausible account must have access to it. The response includes the tracker script configuration for the site and its ID, which you can use to request the tracker script for this site. See [Tracker script URL](#tracker-script-url).

```bash title="Try it yourself"
curl -X GET https://plausible.io/api/v1/sites/test-domain.com \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "domain": "test-domain.com",
    "timezone": "Europe/London",
    "custom_properties": ["logged_in"],
    "tracker_script_configuration": {
        "id": "pa-1iQepzD1J73BaHey2csUp",
        "installation_type": null,
        "track_404_pages": false,
        "hash_based_routing": false,
        "outbound_links": false,
        "file_downloads": false,
        "revenue_tracking": false,
        "tagged_events": false,
        "form_submissions": false,
        "pageview_props": false
    }
}
```

### PUT /api/v1/sites/shared-links

Finds or creates a shared link for a given `site_id` (use the site domain as the ID). This endpoint is idempotent, it won't fail if a shared link with the provided name already exists.


```bash title="Try it yourself"
curl -X PUT https://plausible.io/api/v1/sites/shared-links \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "site_id": "test-domain.com",
    "name": "Wordpress"
  }'

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

### GET /api/v1/sites/goals

Gets a list of existing goals for a given `site_id` (use the site domain as the ID).

```bash title="Try it yourself"
curl -X GET https://plausible.io/api/v1/sites/goals?site_id=test-domain.com \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "goals": [
        {
            "id": "1",
            "goal_type": "event",
            "display_name": "Signup",
            "event_name": "Signup",
            "page_path": null
        },
        {
            "id": "2",
            "goal_type": "page",
            "display_name": "Visit /register",
            "event_name": null,
            "page_path": "/register"
        }
    ],
    "meta": {
        "after": null,
        "before": null,
        "limit": 100
    }
}
```

#### Query parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >

**after** <Optional />

Pagination cursor. See [Pagination](#pagination).

<hr / >

**before** <Optional />

Pagination cursor. See [Pagination](#pagination).

<hr / >

**limit** <Optional />

Pagination limit. Defaults to 100. See [Pagination](#pagination).

<hr / >

### PUT /api/v1/sites/goals

Finds or creates a goal for a given `site_id` (use the site domain as the ID). This endpoint is idempotent, it won't fail if a goal with the provided name already exists.


```bash title="Try it yourself"
curl -X PUT https://plausible.io/api/v1/sites/goals \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "site_id": "test-domain.com",
    "goal_type": "event",
    "event_name": "Signup"
  }'

```json title="Response 200 OK"
{
    "domain": "test-domain.com",
    "id": "1",
    "display_name": "Signup",
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

**display_name**

The value under which the goal is available in the dashboard, as well as in the [Stats API](/stats-api). If not provided, for custom events the `display_name` becomes `event_name` and `Visit {page_path}` in case of pageview goals.

<hr / >

### DELETE /api/v1/sites/goals/:goal_id

Deletes a goal from your Plausible account. The API key must belong to the owner of the site. The site must owned by the current user.

```bash title="Try it yourself"
curl -X DELETE https://plausible.io/api/v1/sites/goals/1 \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "site_id": "test-domain.com"
  }'

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

### GET /api/v1/sites/custom-props

Gets a list of existing custom properties for a given `site_id` (use the site domain as the ID).

```bash title="Try it yourself"
curl -X GET https://plausible.io/api/v1/sites/custom-props?site_id=test-domain.com \
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "custom_properties": [
        {
            "property": "author"
        },
        {
            "property": "title"
        }
    ]
}
```

#### Query parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >

### PUT /api/v1/sites/custom-props

Creates a custom property for a given `site_id` (use the site domain as the ID). This endpoint is idempotent, it won't fail if a custom property with the provided name already exists.

```bash title="Try it yourself"
curl -X PUT https://plausible.io/api/v1/sites/custom-props \
  -H "Authorization: Bearer ${TOKEN}" \
  -F 'site_id="test-domain.com"' \
  -F 'property="title"' 
```

```json title="Response 200 OK"
{
    "created": true
}
```

#### Body parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >

**property** <Required />

Name of the custom property

<hr / >

### DELETE /api/v1/sites/custom-props/:property

Deletes a custom property from your Plausible account. The API key must belong to the owner of the site. The site must owned by the current user.

```bash title="Try it yourself"
curl -X DELETE https://plausible.io/api/v1/sites/custom-props/title \
  -H "Authorization: Bearer ${TOKEN}" \
  -F 'site_id="test-domain.com"'
```

```json title="Response 200 OK"
{
    "deleted": true
}
```

#### Body parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >

### GET /api/v1/sites/guests

Gets a list of guests for a given `site_id` (use the site domain as the ID).

```bash title="Try it yourself"
curl -X GET https://plausible.io/api/v1/sites/guests?site_id=test-domain.com \
         -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "guests": [
        {
            "email": "alice@example.com",
            "role": "viewer",
            "status": "accepted"
        },
        {
            "email": "bob@example.com",
            "role": "editor",
            "status": "invited"
        }
    ],
    "meta": {
        "after": null,
        "before": null,
        "limit": 100
    }
}
```


#### Query parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >

**after** <Optional />

Pagination cursor. See [Pagination](#pagination).

<hr / >

**before** <Optional />

Pagination cursor. See [Pagination](#pagination).

<hr / >

**limit** <Optional />

Pagination limit. Defaults to 100. See [Pagination](#pagination).

<hr / >

### PUT /api/v1/sites/guests

For a given `site_id` (use the site domain as the ID), finds an invitation or existing guest membership or sends a new invitation to a given `email`. This endpoint is idempotent, it won't fail if guest/invitation with the provided e-mail already exists.


```bash title="Try it yourself"
curl -X PUT https://plausible.io/api/v1/sites/guests \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "site_id": "test-domain.com",
    "role": "viewer",
    "email": "alice@example.com"
  }'
```

```json title="Response 200 OK"
{
    "email": "alice@example.com",
    "role": "viewer",
    "status": "invited"
}
```

#### Body parameters
<hr / >

**site_id** <Required />

Id of your site in Plausible.

<hr / >

**email** <Required />

Guest's e-mail address.

**role** <Required />

Either `editor` or `viewer`.

<hr / >

### DELETE /api/v1/sites/guests/:email

Deletes an invitation or guest membership from the given site. Does not delete associated user account, if any.

```bash title="Try it yourself"
curl -X DELETE https://plausible.io/api/v1/sites/guests/test@example.com \
         -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response 200 OK"
{
    "deleted": "true"
}
```

## Pagination

All list endpoints implement cursor based pagination. They accept following URL query parameters: `before`, `after` and `limit`. The response payload always contains pagination metadata under `meta`:

```json title="Example list response"
{
  "sites": [...],
  "meta": {
    "after": "Z2xc...",
    "before": null,
    "limit": 100
  }
}
```

After the initial request, previous and next pages can be retrieved by repeating the same request with either `before` or `after` query parameter passed over from the last response:

```bash title="Try it yourself"
curl -X GET https://plausible.io/api/v1/sites?after=AFTER_VALUE_FROM_LAST_RESPONSE \
  -H "Authorization: Bearer ${TOKEN}"
```

The `limit` parameter must remain the same when paginating, either by leaving it at a default value or passing the same value each time explicitly. The `null` value in `before` or `after` means there are no more previous or next pages to navigate to, respectively.

## Tracker script configuration

This parameter is used to configure the tracker script for a site. It is a JSON object with the following parameters, all of which are optional.

- **installation_type**: Type of installation (`"wordpress"`, `"manual"`, `"gtm"`, `null`). Defaults to `null`.
- **track_404_pages**: Whether to track 404 page visits. Defaults to `false`.
- **hash_based_routing**: Whether to track hash-based routing changes. Defaults to `false`.
- **outbound_links**: Whether to track outbound link clicks. Defaults to `false`.
- **file_downloads**: Whether to track file downloads. Defaults to `false`.
- **revenue_tracking**: Whether to enable revenue tracking. Defaults to `false`.
- **tagged_events**: Whether to enable tagged events. Defaults to `false`.
- **form_submissions**: Whether to track form submissions. Defaults to `false`.
- **pageview_props**: Whether to enable pageview properties. Defaults to `false`.

### Tracker script URL

The resolved configuration is returned in GET/PUT/POST site endpoints response along with an ID. This ID can be used to request the tracker script for this site from the URL `https://plausible.io/js/{id}.js`.
