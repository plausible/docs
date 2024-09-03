---
title: Stats API v2 playground
---

import { ApiV2Playground, ExamplesTip } from '../src/js/apiv2-playground.tsx';
import { SiteContextProvider } from '../src/js/sites.tsx';

<SiteContextProvider>
  <ExamplesTip>
    This is an interactive playground for building queries for [Stats API v2](/stats-api-v2).

    The code below can be edited and run against your own data if you're logged in.
  </ExamplesTip>
  <ApiV2Playground />
</SiteContextProvider>
