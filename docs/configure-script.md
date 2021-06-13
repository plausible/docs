---
title: Configure Script across calls
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you want to set options for your whole plausible use the special event `plausible_config`

## 1. Set your config 

```javascript
plausible('plausible_config', {allowLocalhost: true})
```

The supported options at the moment are:

* `callback` – a function that is called once the event is logged successfully.
* `props` – an object with custom properties for the event
* `allowLocalhost` – to let Plausible send events when localhost.host is localhost, usefull in Cordova, Capcitor env or for debug
