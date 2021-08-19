---
title: Top Pages
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Top Pages**" report shows which pages your visitors are visiting the most often. You can use it to identify the most popular content on your site. Click on any page to see the page drilldown with further details. You can also click on the "**details**" button to see the full list of pages with additional metrics. The number of pageviews, bounce rate, and time on page for the individual pages are included too.

You can also see the traffic flow by looking at the "**Entry Pages**" and "**Exit Pages**" reports. You can click on the "**details**" button to see the full list with additional details. For entry pages details include visit duration for visits that started on a specific page and for exit pages details include the exit rate percentage.

<img alt="Top Pages" src={useBaseUrl('img/top-pages.png')} />

## How it works

Plausible Analytics records the URL path of each page view as the visitors are browsing your site. Query parameters are discarded from the path to make sure they don't show up as different pages in Plausible Analytics.

If your website is a single-page application with `pushState` routing, Plausible Analytics will track page views automatically with no extra work. If you're using a frontend framework that uses the URL hash for routing, we also have a special [hash-based script](hash-based-routing.md).

:::note
Would you like to aggregate your visitors per path to get a breakdown of visits to a specific section of your site such as your blog posts? You can do that using [our pageview goals](pageview-goals.md) or by [filtering the dashboard](filters-segments.md).
:::
