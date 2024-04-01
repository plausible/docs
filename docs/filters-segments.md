---
title: Using filters to segment your audience
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible Analytics allows you to easily segment your audience to analyze and understand the different trends. A segment is made up of one or more filters. 

<img alt="Using filters to segment your audience" src={useBaseUrl('img/segmenting-your-audience.png')} />

## How to use filters 

Any metric you click on in your dashboard creates a new filter. Click on any referral source, any of your pages or on any country, device or goal and your dashboard will then show only the traffic for the metric you have selected.

You can mix and match filters too. So you can click on a referral source, then click on a country and then a goal to see all the traffic sent by the chosen referral source that is based in the selected country and that has converted on the selected goal.

<img alt="Mix and match filters" src={useBaseUrl('img/filter-by-source-and-country.png')} />

Your current filters will be displayed on the top of your dashboard. You can click on the name of the existing filter to edit it or on the `x` icon to remove it. 

You can remove all your filters by hitting the `Esc` key on your keyboard or by selecting `Clear all filters` in the filters menu that shows up when you're using multiple filters.

## Using the "Filter" button for extra functionality 

<img alt="Using the custom filter" src={useBaseUrl('img/custom-filter.png')} />

We also allow you to add filters without clicking on any specific metric in the dashboard. Click on the "**Filter**" button on the top right of your dashboard to start adding filters. Using the "Filter" menu makes filtering even more powerful:

### Filter by multiple sources, countries, pages and more

You can filter your stats by multiple sources, countries, pages and more, all at once. This is useful if you want to group specific geographical regions, separate organic search traffic from other sources or segment your audience to your needs.

<img alt="Multiple filters" src={useBaseUrl('img/filter-segments-multiple-filters.png')} />

### Search for any metric

You can search for any metric such as a particular country, referral source or page on your site. Start typing to discover the specific page (or another metric) you're looking for. No need to scroll through the long list of countries or pages.

<img alt="Search for any metric" src={useBaseUrl('img/filter-typing.png')} />

### Exclude specific segments of traffic

You can exclude specific segments of traffic and only display the traffic that isn't part of the excluded segment. You can, for instance, exclude traffic from the United States so your dashboard only shows the visitors that aren't based in the USA. 

Click on the "**Filter**" button, then select "**Country**" as your metric, choose "**Is Not**" and then select (or type) the name of the country you want to exclude. You can do the same for referral sources or any of the other metrics.

<img alt="Exclude traffic" src={useBaseUrl('img/exclude-traffic.png')} />

### Group your pages

Want to group all your blog posts and analyze the traffic to the blog separately from the rest of your site? Or exclude traffic that has visited a specific section of your site such as your logged in pages or your order confirmation page?

You can group pages by using the "**Filter**" button. The "**Page**" menu within the filter button includes option "**contains**". Put any specific keyword to group all of your pages that contain that keyword. 

You can also group dynamically created URLs with an asterisk `*`. For instance, you can track Woocommerce checkout pages for your ecommerce store like this: `/checkout/order-received/*`. 

:::note
Would you like your grouped pages to be permanently displayed in your dashboard? You can do so by using [pageview goals](pageview-goals.md).
:::

### Filter by subdomain or hostname

Want to filter your traffic by hostname so you can segment your traffic to a specific subdomain only? You can do so by using the "**Filter**" button and choosing the "**Hostname**" entry within menu. You can choose to segment by any one specific hostname in the list but you can also group your hostnames using wildcards:

1. `*.yourdomain.com` will match all subdomains of yourdomain.com but not yourdomain.com itself
2. `*yourdomain.com` will match subdomains of yourdomain.com and yourdomain.com itself

Learn more on how Plausible [handles cross-subdomain tracking here](subdomain-hostname-filter.md).
