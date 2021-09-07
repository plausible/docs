---
title: Events API reference
---

import {Required, Optional} from '../src/js/api-helpers.js';

The Plausible Events API can be used to record pageviews and custom events.

In most cases we recommend installing Plausible via our provided [script](/docs/plausible-script) or one of the many
ingeration packages listed [here](/docs/integration-guides). However, if there's no easy way for you to integrate with Plausible, you can still do so by sending events directly to our API.

## Endpoints
### POST /api/event

Records a pageview or custom event. When using this endpoint, make sure you're sending the correct headers:

**User-agent** is used to determine the user's device<br />
**X-Forwarded-For** is used to determine the client's IP address

In combination, these two values are used for unique user counting. If you have problems with uniqueness counting, please make sure you are sending
**User Agent** and **X-Forwarded-For** correctly.

```bash title="Try it yourself"
curl -X POST https://plausible.io/api/event \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.284' \
  -H 'X-Forwarded-For: 127.0.0.1' \
  -H 'accept: */*' \
  --data-binary '{"name":"pageview","url":"http://dummy.site","domain":"dummy.site","width":1666}'
```

```json title="Response 202 OK"
{}
```

#### Post body JSON parameters
<hr / >

**domain** <Required />

Domain name of the site in Plausible
<hr / >

**name** <Required />

Name of the event. Can specify `pageview` which is a special type of event in Plausible. All other names will be treated as
custom events.
<hr / >

**url** <Required />

URL of the page where the event was triggered. If the URL contains UTM parameters, they will be extracted and stored. When using the script,
this is set to `window.location.href`
<hr / >

**referrer** <Optional />

Referrer for this event. When using the script, this is set to `document.referrer`
<hr / >

**screen_width** <Optional />

Width of the screen. When usign the script, this is set to `window.innerWidth`
<hr / >
