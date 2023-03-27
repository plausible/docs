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

<details>

<summary>

### Filter for pages also supports wildcards

The "**Page**" menu within the filter button also supports wildcards format that makes filtering even more powerful. 

You can use rules in the following format to group different pages or dynamic URLs. You can track all the blog posts by using `/blog**` (if your blog subdirectory is named `blog`) or track Woocommerce checkout pages for your ecommerce (`/checkout/order-received/*`). 

Here are the supported formats:

</summary>

- Asterisks (`*`) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but **cannot** be in the place of slashes.
- Double asterisks (`**`) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent **any** characters, even slashes.

<img alt="Group pages" src={useBaseUrl('img/group-pages-filter.png')} />

You can use rules in this format to group different pages or dynamic URLs. You can track all the blog posts by using `/blog**` (if your blog subdirectory is named `blog`) or track Woocommerce checkout pages for your ecommerce (`/checkout/order-received/*`). 

See below for more examples of common use cases and how they would function.

| Input | Includes pages with a URL path of: |
| ------------- | ------------- |
| `**keyword**` | use double asterisks in front and back in the same way that you would use "contain". It finds any URL containing a specific keyword |
| `/blog**` | use this to for instance group all your blog posts |
| `/blog4` | `/blog4` and exactly `/blog4` with nothing before or after it, so not `/blog45` nor `/blog4/new` nor `/blog` |
| `/rule/*` | `/rule/<anything>`, with `<anything>` being any set of characters (length >=0), but not a forward slash - for example, both `/rule/1` as well as `/rule/general-rule-14`, but not `/rule/4/details` nor `/rules` |
| `/how-to-*` | `/how-to-<anything>` - for example, `/how-to-play` or `/how-to-succeed`, but not `how-to-/blog` |
| `/*/admin` | `/<anything>/admin` - for example, `/sites/admin`, but not `/sites/admin/page-2` nor `/sites/2/admin` nor `/admin` |
| `/*/priv/*` | `/<anything>/priv/<anything>` - for example, `/admin/priv/sites`, but not `/priv` nor `/priv/page` nor `/admin/priv` |
| `/rule/*/*` | `/rule/<anything>/<anything>` - for example, `/rule/4/new/` or `/rule/10/edit`, but not `/rule` nor `/rule/10/new/save` |
| `/wp/**` | `/wp/<anything, even slashes>` - for example, `/wp/assets/subdirectory/another/image.png` or `/wp/admin`, and everything in between, but not `/page/wp`

<br />

:::note
Would you like your grouped pages to be permanently displayed in your dashboard? You can do so by using [pageview goals](pageview-goals.md).
:::

</details>
