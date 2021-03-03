---
title: Top Pages
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Top Pages**" report shows which pages your visitors are visiting the most often. You can use it to identify the most popular content on your site. Click on any page to see the page drilldown with further details.

You can also see the traffic flow by looking at the "**Entry Pages**" and "**Exit Pages**" reports. You can click on the "**details**" button to see the full list with additional details. For entry pages details include visit duration for visits that started on a specific page and for exit pages details include the exit rate percentage.

<img alt="Top Pages" src={useBaseUrl('img/top-pages.png')} />

## How it works

Plausible Analytics records the URL path of each page view as the visitors are browsing your site. Query parameters are discarded from the path to make sure they don't show up as different pages in Plausible Analytics.

If your website is a single-page application with `pushState` routing, Plausible Analytics will track page views automatically with no extra work.
