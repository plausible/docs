---
title: Using filters to segment your audience
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible Analytics allows you to easily segment your audience to analyze and understand the different trends. A segment is made up of one or more filters. 

Any metric you click on in your dashboard creates a new filter. Click on any referral source, any of your pages or any location, device or goal and your dashboard will then show only the traffic for the metric you have selected.

You can mix and match filters too. So you can click on a referral source, then click on a country and then a goal to see all the traffic sent by the chosen referral source that is based in the selected country and that has converted on the selected goal.

Your current filters will be displayed on the top of your dashboard. You can click on the name of the existing filter to edit it or on the `x` icon to remove it. 

You can remove all your filters by hitting the `Esc` key on your keyboard or by selecting `Clear all filters` in the filters menu that shows up when you're using multiple filters.

<img alt="Mix and match filters to segment your audience" src={useBaseUrl('img/filter-by-source-and-country.png')} />

## Use the "Filter" button for more powerful segmenting and matching

<img alt="Using the custom filter" src={useBaseUrl('img/custom-filter.png')} />

When you’re trying to understand and analyze your traffic, the "**Filter**" button is a powerful tool. It allows you to search, select multiple entries and it includes options "**is**", "**is_not**", and "**contains**" to give you more flexibility when matching and segmenting your audience. Click on the "**Filter**" button on the top right of your dashboard to start adding filters. 

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

### Group relevant pages, marketing campaigns and more

Want to group all your blog posts and analyze the traffic to the blog separately from the rest of your site? Or exclude traffic that has visited a specific section of your site such as your logged in pages or your order confirmation page? Or do you want to group all the traffic from a specific set of marketing camapigns?

You can group pages, sources, campaigns and more by using the "**Filter**" button. For instance, the "**Page**" menu within the filter button includes option "**contains**". Put any specific keyword to group all of your pages that contain that keyword.

:::note
Would you like your grouped pages to be permanently displayed in your dashboard? You can do so by using [pageview goals](pageview-goals.md).
:::

<img alt="Filter contains" src={useBaseUrl('img/filter-contains.png')} />

### Filter by subdomain or hostname

Want to filter by hostname so you can segment your stats to a specific subdomain only? You can do so by using the "**Filter**" button and choosing the "**Hostname**" entry within the menu.

You can choose to segment your traffic by any one specific hostname from the list, you can exclude any one specific hostname or even segment by hostnames that contain any specific word.

Learn more on how Plausible [handles cross-subdomain tracking here](subdomain-hostname-filter.md).

<img alt="List of subdomains" src={useBaseUrl('img/list-of-hostnames-and-subdomains.png')} />
