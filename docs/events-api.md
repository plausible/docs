---
title: Events API reference
---

import {Required, Optional} from '../src/js/api-helpers.js';

The Plausible Events API can be used to record pageviews and custom events. This is useful when tracking Android or iOS mobile apps, or for server side tracking.

In most cases we recommend installing Plausible via our provided [script](/docs/plausible-script) or one of the many
integration packages listed [here](/docs/integration-guides). However, if there's no easy way for you to integrate with Plausible, you can still do so by sending events directly to our API.

In addition, the Plausible Stats API offers a way to retrieve all defined goals/events with their properties.

## Endpoints
### POST /api/event

Records a pageview or custom event. When using this endpoint, make sure you're sending the correct headers:

**User-Agent** is used to determine the user's device<br />
**X-Forwarded-For** is used to determine the client's IP address<br />
**Content-Type** must be either *application/json* or *text/plain*

In combination, these two values are used for unique user counting. If you have problems with uniqueness counting, please make sure you are sending
**User-Agent** and **X-Forwarded-For** correctly.

```bash title="Try it yourself"
curl -i -X POST https://plausible.io/api/event \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.284' \
  -H 'X-Forwarded-For: 127.0.0.1' \
  -H 'Content-Type: application/json' \
  --data '{"name":"pageview","url":"http://dummy.site","domain":"dummy.site","screen_width":1666}'
```

```json title="Response 202 Accepted"
{}
```

#### Post body JSON parameters
<hr / >

**domain** <Required />

Domain name of the site in Plausible

:::note
This is the domain name you used when you added your site to your Plausible account. It doesn't need to be an actual domain name, so when adding your mobile app to Plausible, you could insert the mobile app name in the domain name field
:::
<hr / >

**name** <Required />

Name of the event. Can specify `pageview` which is a special type of event in Plausible. All other names will be treated as
custom events.
<hr / >

**url** <Required />

URL of the page where the event was triggered. If the URL contains UTM parameters, they will be extracted and stored. When using the script,
this is set to `window.location.href`

:::note
The URL parameter will feel strange in a mobile app but you can manufacture something that looks like a web URL. If you name your mobile app screens like page URLs, Plausible will know how to handle it. So for example, on your login screen you could send something like:  

event: pageview  
url: app://localhost/login  

The pathname (/login) is what will be shown as the page value in the Plausible dashboard.  
:::
<hr / >

**referrer** <Optional />

Referrer for this event. When using the script, this is set to `document.referrer`
<hr / >

**screen_width** <Optional />

Width of the screen. When using the script, this is set to `window.innerWidth`
<hr / >

**props** <Optional />

Custom properties for the event. See: https://plausible.io/docs/custom-event-goals#using-custom-props
<hr / >

### GET /api/v1/events/

This endpoint returns all defined goals/events for a specific site with their properties. See: https://plausible.io/docs/custom-event-goals#using-custom-props

```bash title="Try it yourself"
curl "https://plausible.io/api/v1/events/?site_id=$SITE_ID"
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
  "results": [
    {
      "event_type": "custom",
      "id": 1,
      "name": "404",
      "props": [
        "path",
        "method",
        "version"
      ]
    },
    {
      "event_type": "pageview",
      "id": 2,
      "name": "Visit /x",
      "props": []
    },
    {
      "event_type": "custom",
      "id": 3,
      "name": "Signup",
      "props": []
    }
  ]
}
```

#### Parameters
<hr / >

**site_id** <Required />

Domain of your site on Plausible.
<hr / >

### GET /api/v1/events/:event_id/properties

This endpoint returns all properties for a single goal/event. See: https://plausible.io/docs/custom-event-goals#using-custom-props

```bash title="Try it yourself"
curl "https://plausible.io/api/v1/events/1/properties?site_id=$SITE_ID"
  -H "Authorization: Bearer ${TOKEN}"
```

```json title="Response"
{
  "results": ["path", "method", "version"]
}
```

#### Parameters
<hr / >

**site_id** <Required />

Domain of your site on Plausible.
<hr / >

:::note
You can can use GET https://plausible.io/api/health endpoint to monitor the status of our API
:::
