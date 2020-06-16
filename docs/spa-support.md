---
title: Single-page application support
---

Plausible integrates automatically with modern `pushState` based frontend routers. If you're running a single-page application
with React, Angular, Vue or similar frameworks, you don't need to add any extra configuration to make analytics work.

You can verify this by installing the Plausible script and checking the 'network' tab in your devtools. Each time you navigate to a new page,
 an HTTP POST request to `https://plausible.io/api/event` should be triggered.

We do not yet have support for hash-based SPA routers but we're planning to add it. Follow the feature request [here](https://plausible.nolt.io/84)

:::note
Using Next.js? It has [a bug](https://github.com/zeit/next.js/issues/9070) that loads async scripts twice, causing double counting in Plausible.
Use [workarounds](https://github.com/zeit/next.js/issues/9070#issuecomment-552981178) mentioned in the Github issue to load the Plausible script just once.
:::
