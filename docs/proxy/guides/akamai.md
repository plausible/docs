---
title: Proxying Plausible through Akamai
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Proxying Plausible via your own property on Akamai is easy, fast and privacy friendly. 

> Note: The instructions assume you use the default paths ``/js/script.js`` and ``/api/event``. You can change these based on your preferences.

## Step 1: Proxy Analytics Script
This Rule Group serves incoming requests matching ``/js/script.js`` directly from the Akamai edge caches. In case of a cache miss the request is forwarded to ``plausible.io`` in a privacy friendly way.

<img style="max-width:500px" alt="Screenshot of the Propert Manager Rule to proxy the Analytics Script" src={useBaseUrl('img/akamai-script-pm.jpg')} />

##### Set Criteria
- Path matches one off: ``/js/script.js``

##### Add Behaviour: Caching
- Caching Option: **Cache**
- Force revalidation of stale objects: **Serve stale if unable to validate**
- Maxage: ``6 hours``

##### Add Behaviour: Origin Server
- Origin Type: **Your origin**
- Origin Server Hostname: ``plausible.io``
- Forward Host Header: **Origin Hostname**
- Cache Key Hostname: **Origin Hostname**
- Supports Gzip Compression: **Yes**
- Send True Client IP Header: **No** _(Privacy: No need to expose IP)_
- Verification Settings: **Choose your own**
- ... _(Other settings can be left as is)_

## Step 2: Proxy Event API
This Rule Group forwards incoming requests matching ``/api/event`` to plausible.io. It adds extra headers (``X-Forwarded-Proto``, ``X-Forwarded-Host`` and ``X-Forwarded-For``) to the outgoing request so your Plausible statistics are complete. For privacy & security reasons incoming cookies are removed before sending to ``plausible.io``.

##### Set Criteria
- Path matches one off: ``/api/event``

<img style="max-width:500px" alt="Screenshot of the Propert Manager Rule to proxy the Event API" src={useBaseUrl('img/akamai-api-pm.jpg')} />

##### Add Behaviour: Origin Server
- Origin Type: **Your origin**
- Origin Server Hostname: ``plausible.io``
- Forward Host Header: **Origin Hostname**
- Cache Key Hostname: **Origin Hostname**
- Supports Gzip Compression: **Yes**
- Send True Client IP Header: **Yes**
- True Client IP Header Name: ``X-Forwarded-For``
- Verification Settings: **Choose your own**
- ... _(Other settings can be left as is)_

<img style="max-width:500px" alt="Screenshot of the Propert Manager Rules to remove outgoing request headers" src={useBaseUrl('img/akamai-api-pm.jpg')} />

##### Add Behaviour: Modify Outgoing Request Header
- Action: **Add**
- Header Name: ``X-Forwarded-Proto``
- Header Value: ``{{builtin.AK_SCHEME}}``

##### Add Behaviour: Modify Outgoing Request Header
- Action: **Add**
- Header Name: ``X-Forwarded-Host``
- Header Value: ``{{builtin.AK_HOST}}``

##### Add Behaviour: Modify Outgoing Request Header
- Action: **Remove**
- Header Name: ``cookie`` _(Privacy: No need to expose cookie values to origin servers)_

##### Optional: 
In case you are using SureRoute, please disable it



