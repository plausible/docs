---
title: Pageview goals
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Pageview goals allow you to measure how many people visit a specific section of your site (for instance dynamically created checkout pages for ecommerce) and get referral sources and other details for those conversions. 

Since page views are collected automatically, you don’t need to change your website’s code to measure page URL goals.

To get started with "**Pageview Goals**", go to your website’s settings in Plausible Analytics and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Pageview` as the goal trigger and enter the pathname of the page you would like your visitors to hit. The pathname must match the page path you can see in your Plausible Analytics dashboard.

<img alt="Add your pageview goal" src={useBaseUrl('img/add-pageview-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who reached the specified page or group of pages. Goal conversions are listed at the very bottom of the dashboard.

## Pageview goals support wildcards

Pageview goals support wildcards in the following format:

- Asterisks (`*`) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but **cannot** be in the place of slashes.
- Double asterisks (`**`) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent **any** characters, even slashes.

You can use pageview rules in this format to group different pages or to create goals for dynamic URLs. 

You can for instance track all the blog posts by using `/blog**` (if your blog subdirectory is named `blog`) or track Woocommerce checkout pages for your ecommerce (`/checkout/order-received/*`). 

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
