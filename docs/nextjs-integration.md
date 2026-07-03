---
displayed_sidebar: someSidebar
title: Adding Plausible to Next.js
sidebar_label: Next.js
description: "Add Plausible Analytics to a Next.js app using the next-plausible package. Covers script setup, custom events and proxying."
---

import CtaBox from '@site/src/components/CtaBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

You can add the script directly to your head through "next/head" or react-helmet. However there is a simpler way that also provides custom events functionality:

**[Next-Plausible](https://github.com/4lejandrito/next-plausible)** built and maintained by [4lejandrito](https://github.com/4lejandrito). It supports:

<CtaBox
  headline="Add privacy-first analytics to your Next.js app"
  link="https://plausible.io/register"
  linkText="Start free trial"
/>

## Serving the Plausible script

```jsx title="pages/index.jsx"
import PlausibleProvider from 'next-plausible'

export default Home() {
    return (
        <PlausibleProvider src="https://plausible.io/js/pa-XXXXX.js">
            <h1>My Site</h1>
            ...
        </PlausibleProvider>
    )
}
```

## Sending custom events

```jsx title="components/PlausibleButton.jsx"
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
