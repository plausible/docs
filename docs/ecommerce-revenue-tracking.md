---
title: Ecommerce revenue and attribution tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can assign dynamic monetary values to goals and custom events to track revenue attribution. Revenue attribution helps you determine which marketing campaigns and landing pages result in the most revenue for your business or ecommerce store.

When you create a new custom event, you can now optionally assign a monetary value to it. Our revenue tracking supports multi-currencies too. You can send data in any local currency that the purchase is made in. When doing that, you'll be able to see these metrics in your dashboard:

* Unique conversions
* Total conversions
* Conversion rate
* Total revenue
* Average revenue

The revenue metrics are fully filterable. For instance, you can see the total or average revenue for a particular custom event per any dimension such as a specific date, referral source, marketing campaign, entry page, country or device. 

You can add multiple filters to [create audience segments](filters-segments.md) too. This allows you to see the conversions and revenue from for instance the audience segment that's located in Germany, Austria and Switzerland, that were referred by a particular UTM campaign and are using Mac OS.

Here's how to send revenue alongside custom events:

## 1. Change the Plausible snippet on your site

Please change the file name in the `src` attribute of your Plausible snippet from `script.js` to `script.revenue.js`. It should look like this:

```html
<script defer data-domain="<yourdomain.com>" src="https://plausible.io/js/script.revenue.js"></script>
```

Or if you're using [a proxy](/proxy/introduction.md):

```html
<script defer data-domain="<yourdomain.com>" src="https://yourproxy.com/script.revenue.js"></script>
```

:::note
If you're using any of our other script extensions, you can [combine them](script-extensions.md#you-can-combine-extensions-according-to-your-needs) by changing the `src` attribute in the snippet. If you want to track revenue goals and outbound link clicks simultaneously, change the script name to `script.revenue.outbound-links.js`.
:::

## 2. Add a new custom event and specify the currency of your choice

Go to your [site settings](website-settings.md) and in the "**Goals**" section click on the "**Add goal**" button. Choose "**Custom event**" as the goal trigger, enter the goal name in the "**Event name**" field and set the currency of your choice in the "**Reporting currency for revenue tracking**". 

This currency will be used for total and average revenue metrics in the dashboard. Note that the currency for a specific event cannot be changed later.

## 3. Start sending the revenue data from your site

In the page where you want to track revenue, call the Plausible function with revenue data. For example: 

```javascript
window.plausible("goal name", {revenue: {currency: "USD", amount: 10.29}})
```

Custom events and revenue goals are listed at the bottom of your dashboard and will appear as soon as the first conversion has been tracked. 
