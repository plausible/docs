---
title: Pageview goals
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Pageview goals allow you to measure how many people visit a specific section of your site (for instance dynamically created checkout pages for ecommerce) and get referral sources and other details for those conversions. 

Since pageviews are collected automatically, you don’t need to change your website’s code to measure pageview goals. This makes pageview goals the easiest way to start tracking any type of conversion on your site. 

Do you run a store and want to track purchases? Do you have a contact form and want to track form submissions? Use pageview goals to track the "thank you" page or the order confirmation page.

To get started with "**Pageview Goals**", go to [your website's settings](website-settings.md) in Plausible Analytics and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Pageview` as the goal trigger and enter the pathname of the page you would like your visitors to hit. The pathname must match the page path you can see in your Plausible Analytics dashboard.

<img alt="Add your pageview goal" src={useBaseUrl('img/add-pageview-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who reached the specified page or group of pages. Goal conversions are listed at the very bottom of the dashboard.

## Group your pages using wildcards

Do you want to analyze the total traffic to specific sections of your site or to group your dynamically created pages? You can use wildcards to match patterns in your page path URLs.

You can use one asterisk (`*`) to represent any number of characters. Asterisks can be placed on either end or in the middle of any page path URL.

You can for instance group all of your blog posts by creating a pageview goal `/blog*` (if your blog subdirectory is named `blog`) or track Woocommerce checkout pages for your ecommerce by creating a pageview goal `/checkout/order-received/*`. Or you could use asterisks in front and back (`*keyword*`) to group any URLs containing a specific keyword.

:::tip Would you like to group your pages at any time without using pageview goals?
You can do so by using [the "Filter" button](filters-segments.md) on the top of your dashboard
:::

See below for more examples of common use cases and how they would function.

| Input | Includes pages with a URL path of: |
| ------------- | ------------- |
| `*keyword*` | use asterisks in front and back in the same way that you would use "Contains". It finds any URL containing a specific keyword |
| `/blog*` | use this to for instance group all your blog posts |
| `/rule/*` | `/rule/<anything>`, with `<anything>` being any set of characters - for example, `/rule/1`, `/rule/general-rule-14` as well as `/rule/4/details` |
| `/how-to-*` | `/how-to-<anything>` - for example, `/how-to-play`, `/how-to-succeed` or `how-to-/blog` |
| `/*/admin` | `/<anything>/admin` - for example, `/sites/admin`, but not `/sites/admin/page-2` nor `/admin` |
| `/*/priv/*` | `/<anything>/priv/<anything>` - for example, `/admin/priv/sites`, but not `/priv` nor `/priv/page` nor `/admin/priv` |
| `/rule/*/*` | `/rule/<anything>/<anything>` - for example, `/rule/4/new/` or `/rule/10/edit`, but not `/rule` nor `/rule/10/new/save` |
| `/wp/*` | `/wp/<anything, even slashes>` - for example, `/wp/assets/subdirectory/another/image.png`, `/wp/admin`, or `/page/wp` and everything in between |

<br />

<img alt="Add a wildcard pageview goal" src={useBaseUrl('img/add-wildcard-pageview-goal.png')} />
