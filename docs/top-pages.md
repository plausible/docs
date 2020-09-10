---
title: Top Pages
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Top Pages**" report shows which pages your visitors are visiting the most often. You can use it to identify the most popular content on your site. Click on any page to see the page drilldown with further details.

<img alt="Top Pages" src={useBaseUrl('img/top-pages.png')} />

## How it works

Plausible Analytics records the URL path of each page view as the visitors are browsing your site. Query parameters are discarded from the path to make sure they don't show up as different pages in Plausible Analytics.

If your website is a single-page application with `pushState` routing, Plausible Analytics will track page views automatically with no extra work.
