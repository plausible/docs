Proxying Plausible (Analytics script and/or the Event API) via your own property on Akamai is easy, fast and privacy friendly. 

> Note: The instructions assume you use the default paths ``/js/script.js`` and ``/api/event``. You can change these based on your preferences.

# Rule group 1: Proxy Analytics Script
This Rule Group serves incoming requests matching /js/script.js directly from the Akamai edge caches. In case of a cache miss the request is forwarded to plausible.io in a privacy friendly way.

#### Set Criteria
- Path matches one off: ``/js/script.js``

#### Add Behaviour: Caching
- Caching Option: **Cache**
- Force revalidation of stale objects: **Serve stale if unable to validate**
- Maxage: ``6 hours``

#### Add Behaviour: Origin Server
- Origin Type: **Your origin**
- Origin Server Hostname: ``plausible.io``
- Forward Host Header: **Origin Hostname**
- Cache Key Hostname: **Origin Hostname**
- Supports Gzip Compression: **Yes**
- Send True Client IP Header: **No** _(Privacy: No need to expose IP)_
- Verification Settings: **Choose your own**
- ... _(Other settings can be left as is)_

If you are using JSON to manage your Akamai property via the API or CLI, here is Rule JSON for Step 1

# Step 2 Proxy Event API
This rule group forwards incoming requests matching ``/api/event`` to plausible.io. 
It adds 3 extra request headers (``X-Forwarded-Proto``, ``X-Forwarded-Host`` and ``X-Forwarded-For``) to the outgoing request so plausible statistics are complete. 
For privacy and security reasons any incoming cookies are removed before sending to plausible.io.

#### Set Criteria
- Path matches one off: ``/api/event``

#### Add Behaviour: Modify Outgoing Request Header
- Action: **Add**
- Header Name: ``X-Forwarded-Proto``
- Header Value: ``{{builtin.AK_SCHEME}}``

#### Add Behaviour: Modify Outgoing Request Header
- Action: **Add**
- Header Name: ``X-Forwarded-Host``
- Header Value: ``{{builtin.AK_HOST}}``

#### Add Behaviour: Modify Outgoing Request Header
- Action: **Remove**
- Header Name: ``cookie`` _(Privacy: No need to expose cookie values to origin servers)_

#### Add Behaviour: Origin Server
- Origin Type: **Your origin**
- Origin Server Hostname: ``plausible.io``
- Forward Host Header: **Origin Hostname**
- Cache Key Hostname: **Origin Hostname**
- Supports Gzip Compression: **Yes**
- Send True Client IP Header: **Yes**
- True Client IP Header Name: ``X-Forwarded-For``
- Verification Settings: **Choose your own**
- ... _(Other settings can be left as is)_

#### Optional: 
In case you are using SureRoute, please disable it

If you are using JSON to manage your Akamai property via the API or CLI, here is the Rule JSON for Step 1

