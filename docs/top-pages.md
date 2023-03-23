---
title: Top Pages
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Top Pages**" report shows which pages your visitors are visiting the most often. You can use it to identify the most popular content on your site. Click on any page to segment your audience by those who visited that particular page. You can also click on the "**Details**" button to see the full list of pages with additional metrics. The number of pageviews, bounce rate, and time on page for the individual pages are included too.

You can also see the traffic flow by looking at the "**Entry Pages**" and "**Exit Pages**" reports. You can click on the "**Details**" button to see the full list with additional details. For entry pages details include visit duration for visits that started on a specific page and for exit pages details include the exit rate percentage.

<img alt="Top Pages" src={useBaseUrl('img/top-pages.png')} />

## Searching for and grouping pages

Do you want to group all your blog posts and analyze the traffic to the blog separately from the rest of your site? Or exclude traffic that has visited a specific section of your site such as your logged in pages or your order confirmation page?

You can search for pages, exclude pages and group pages by using the "**Filter**" button on the top of your dashboard. The "**Page**" menu within the filter button includes options for "**is**", "**is not**" and "**contains**". The "**Filter**" button also allows you to segment the dashboard by multiple pages at the same time.

Filter for pages also supports wildcards in the following format:

- Asterisks (`*`) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but **cannot** be in the place of slashes.
- Double asterisks (`**`) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent **any** characters, even slashes.
- For page-based metrics, "contains" is also available as a filter type. This has the same effect of adding double asterisks (`**`) before and after your entry.

You can use rules in this format to group different pages or dynamic URLs. You can track all the blog posts by using `/blog**` (if your blog subdirectory is named `blog`) or track Woocommerce checkout pages for your ecommerce (`/checkout/order-received/*`). 

<img alt="Group pages" src={useBaseUrl('img/group-pages-filter.png')} />

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
Do you prefer to display your page groupings permanently in your dashboard? You can do so using [our pageview goals](pageview-goals.md).
:::

### How it works

Plausible Analytics records the URL path of each page view as the visitors are browsing your site. Query parameters are discarded from the path to make sure they don't show up as different pages in Plausible Analytics.

If your website is a single-page application with `pushState` routing, Plausible Analytics will track page views automatically with no extra work. If you're using a frontend framework that uses the URL hash for routing, we also have a special [hash-based script](hash-based-routing.md).
