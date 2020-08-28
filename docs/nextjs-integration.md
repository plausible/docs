---
title: How to add the script to your NextJS site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add the script directly to your head via "next/head" or react-helmet. However there is a simpler way that also provides custom events functionality:

"**[Next-Plausible](https://github.com/4lejandrito/next-plausible)**" built and maintained by [4lejandrito](https://github.com/4lejandrito). It supports:

## Serving the Plausible script

```jsx
import PlausibleProvider from 'next-plausible'

export default Home() {
    return (
        <PlausibleProvider domain="example.com">
            <h1>My Site</h1>
            ...
        </PlausibleProvider>
    )
}
```

## Sending custom events

```jsx
import {usePlausible} from 'next-plausible'

export default PlausibleButton() {
    const plausible = usePlausible()
    return (
        <button onClick={() => plausible('customEventName')}>
            Send
        </button>
    )
}
```
