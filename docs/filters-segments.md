---
title: Using filters to segment your audience
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible Analytics allows you to easily segment your website audience to better analyze and understand the different trends. A segment is made up of one or more filters. 

Any metric you click on in your dashboard creates a new filter. Click on any referral source, any of your pages or on any country, device or goal and your dashboard will then show only the traffic for the metric you have selected.

You can even mix and match as many filters as you want. So you can click on a specific referral source, then add a particular country and then add a goal to see all the traffic sent by that particular referral source that has converted to that specific goal and is based in the country you have selected.

This ease of use of filtering and segmenting is one of the things people love the most about Plausible.

## Using the custom filter 

We also allow you to quickly add filters without clicking on any specific metric in your dashboard. Click on the "Filter" button on the top right of your dashboard to add filters using our custom filter functionality.

Using the custom filter allows you to do even more, such as to exclude specific segments of your audience. For example, you can exclude traffic from the United States so your dashboard only displays the traffic coming to your site outside the USA.

Using the custom filter also allows you more functionality in the filtering of your pages and other content. You can segment all the traffic that has visited any of your blog posts. Or you can exclude any of the traffic that has visited a specific section of your site.

### Custom filter for pages supports wildcards

Custom filter for pages supports wildcards in the following format:

- Asterisks (`*`) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but **cannot** be in the place of slashes.
- Double asterisks (`**`) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent **any** characters, even slashes.

You can use rules in this format to group different pages or dynamic URLs. You can track all the blog posts by using `/blog**` (if your blog subdirectory is named `blog`) or track Woocommerce checkout pages for your ecommerce (`/checkout/order-received/*`). 

See below for more examples of common use cases and how they would function.

| Input | Includes pages with a URL path of: |
| ------------- | ------------- |
| `/blog4` | `/blog4` and exactly `/blog4` with nothing before or after it, so not `/blog45` nor `/blog4/new` nor `/blog` |
| `/rule/*` | `/rule/<anything>`, with `<anything>` being any set of characters (length >=0), but not a forward slash - for example, both `/rule/1` as well as `/rule/general-rule-14`, but not `/rule/4/details` nor `/rules` |
| `/how-to-*` | `/how-to-<anything>` - for example, `/how-to-play` or `/how-to-succeed`, but not `how-to-/blog` |
| `/*/admin` | `/<anything>/admin` - for example, `/sites/admin`, but not `/sites/admin/page-2` nor `/sites/2/admin` nor `/admin` |
| `/*/priv/*` | `/<anything>/priv/<anything>` - for example, `/admin/priv/sites`, but not `/priv` nor `/priv/page` nor `/admin/priv` |
| `/rule/*/*` | `/rule/<anything>/<anything>` - for example, `/rule/4/new/` or `/rule/10/edit`, but not `/rule` nor `/rule/10/new/save` |
| `/wp/**` | `/wp/<anything, even slashes>` - for example, `/wp/assets/subdirectory/another/image.png` or `/wp/admin`, and everything in between, but not `/page/wp`

<br />
