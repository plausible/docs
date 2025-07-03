---
title: Proxying Plausible through Akamai
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here's how to proxy Plausible through your own property on Akamai. The instructions assume you use the default paths ``/js/script.js`` and ``/api/event``. You can change these based on your preferences.

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

## Step 1: Proxy Analytics Script

This Rule Group serves incoming requests matching ``/js/script.js`` directly from the Akamai edge caches. In case of a cache miss the request is forwarded to ``plausible.io`` in a privacy-friendly way.

### Add new Rule Group 

In Akamai Property Manager add a new Rule Group ``Plausible (Script)`` with these settings:

<img alt="In Akamai Property Manager add a new Rule Group" src={useBaseUrl('img/akamai-script-pm.jpg')} />

### Set Criteria

- Path matches one off: ``/js/script.js``

### Add Behaviour: Caching

- Caching Option: **Cache**
- Force revalidation of stale objects: **Serve stale if unable to validate**
- Maxage: ``6 hours``

### Add Behaviour: Origin Server

- Origin Type: **Your origin**
- Origin Server Hostname: ``plausible.io``
- Forward Host Header: **Origin Hostname**
- Cache Key Hostname: **Origin Hostname**
- Supports Gzip Compression: **Yes**
- Send True Client IP Header: **No** _(Privacy: No need to expose IP)_
- Verification Settings: **Choose your own**
- ... _(Other settings can be left as is)_

## Step 2: Proxy Event API

This Rule Group forwards incoming requests matching ``/api/event`` to plausible.io. It adds extra headers (``X-Forwarded-Proto``, ``X-Forwarded-Host`` and ``X-Forwarded-For``) to the outgoing request, so your Plausible statistics are complete. For privacy & security reasons incoming cookies are removed before sending to ``plausible.io``.

### Add new Rule Group 

In Akamai Property Manager add a new Rule Group ``Plausible (Event API)`` with these settings:

<img alt="Property Manager Rule to proxy the Event API" src={useBaseUrl('img/akamai-api-pm.jpg')} />

### Set Criteria

- Path matches one off: ``/api/event``

### Add Behaviour: Origin Server

- Origin Type: **Your origin**
- Origin Server Hostname: ``plausible.io``
- Forward Host Header: **Origin Hostname**
- Cache Key Hostname: **Origin Hostname**
- Supports Gzip Compression: **Yes**
- Send True Client IP Header: **Yes**
- True Client IP Header Name: ``X-Forwarded-For``
- Verification Settings: **Choose your own**
- ... _(Other settings can be left as is)_

<img alt="Property Manager Rules to remove outgoing request headers and cookies" src={useBaseUrl('img/akamai-api-pm-headers.jpg')} />

### Add Behaviour: Modify Outgoing Request Header

- Action: **Add**
- Header Name: ``X-Forwarded-Proto``
- Header Value: ``{{builtin.AK_SCHEME}}``

### Add Behaviour: Modify Outgoing Request Header

- Action: **Add**
- Header Name: ``X-Forwarded-Host``
- Header Value: ``{{builtin.AK_HOST}}``

### Add Behaviour: Modify Outgoing Request Header

- Action: **Remove**
- Header Name: ``cookie`` _(Privacy: No need to expose cookies to origin servers)_

### Optional: 

In case you are using SureRoute, please disable it:

<img alt="In case you are using SureRoute, please disable it" src={useBaseUrl('img/akamai-script-sureroute.jpg')} />

Thanks to [Tim Vereecke](https://www.scalemates.com/), Akamai's web performance architect, for these instructions!  
