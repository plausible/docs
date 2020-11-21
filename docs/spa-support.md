---
title: Single-page application support
---

Plausible Analytics integrates automatically with modern `pushState` based frontend routers. If you're running a single-page application
with React, Angular, Vue or similar frameworks, you don't need to add any extra configuration to make analytics work.

You can verify this by installing the Plausible Analytics script and checking the "**Network**" tab in your devtools. Each time you navigate to a new page, an HTTP POST request to `https://plausible.io/api/event` should be triggered.

If you're using a frontend framework that uses the URL hash for routing, you need to take an extra step to install the hash-based tracker instead of the default one. [See details here](hash-based-routing.md).

:::note
Using Next.js or Gatsby.js? Next.js has [a bug](https://github.com/zeit/next.js/issues/9070) that loads async scripts twice, causing double counting in Plausible. Gatsby.js exhibits the same behavior. Use [workarounds](https://github.com/zeit/next.js/issues/9070#issuecomment-552981178) mentioned in the Github issue to load the Plausible script just once.
:::
