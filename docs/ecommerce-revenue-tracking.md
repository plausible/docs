---
title: Ecommerce revenue and attribution tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can assign dynamic monetary values to custom events to track revenue attribution. Revenue attribution helps you determine which marketing campaigns and landing pages result in the most revenue for your business or ecommerce store.

When you create a new custom event, you can optionally assign a monetary value to it. Our revenue tracking supports multi-currencies too. You can send data in any local currency that the purchase is made in. When using revenue tracking, you'll be able to see these metrics in your dashboard:

* Unique conversions
* Total conversions
* Conversion rate
* Total revenue
* Average revenue

<img alt="Ecommerce revenue goal top graph" src={useBaseUrl('img/plausible-ecommerce-revenue-top-graph.png')} />

The revenue metrics are fully filterable. For instance, you can see the total or average revenue for a particular custom event per any dimension such as a specific date, referral source, marketing campaign, entry page, country or device.

You can add multiple filters to [create audience segments](filters-segments.md) too. This allows you to see the conversions and revenue from for instance the audience segment that's located in Germany, Austria and Switzerland, that were referred by a particular UTM campaign and are using Mac OS.

"**Ecommerce revenue**" is an [optional enhanced measurement](script-extensions.md) that's not included in our default script. This is because we want to keep the default script as simple and lightweight as possible. If you want to track ecommerce revenue, here's how to enable it:

## Step 1: Add a new custom event and specify the currency of your choice

Go to your [site settings](website-settings.md) and in the "**Goals**" section click on the "**Add goal**" button. Choose "**Custom event**" as the goal trigger, enter the goal name in the "**Event name**" field, switch to "**Enable Revenue Tracking**" and set the base currency of your choice. This currency will be used for total and average revenue metrics in the dashboard. Note that the currency for a specific event cannot be changed later.

<img alt="Add goal and choose your currency" src={useBaseUrl('img/plausible-ecommerce-currency-goal.png')} />

## Step 2: Send the revenue data from your site

You can now start sending revenue data from your site alongside custom events. You can send the revenue data in the currency that the purchase was made in too and we'll convert it to your goal's base currency.

How to send revenue data depends on the way you've set up custom events. You can either use [the CSS class name approach](custom-event-goals.md):

```javascript
<button class="plausible-event-name=Purchase plausible-revenue-amount=10.29 plausible-revenue-currency=EUR"></button>
```

:::tip Using the CSS class name approach for custom events?
You should change the file name in the `src` attribute of your Plausible snippet to `script.revenue.tagged-events.js`
:::

Or [the JavaScript function approach](custom-event-goals.md#trigger-custom-events-manually-with-a-javascript-function):

```javascript
window.plausible("goal name", {revenue: {currency: "USD", amount: 10.29}})
```

Or using the [Events API](events-api.md) directly.

Custom events and revenue goals are listed at the bottom of your dashboard and will appear as soon as the first conversion has been tracked.

<img alt="Ecommerce revenue tracking goal" src={useBaseUrl('img/plausible-ecommerce-revenue-goal.png')} />

:::tip You can add more details to your revenue tracking by using custom properties
This lets you track product names, coupon codes, if customers are logged in and more. [Learn more](/custom-props/introduction.md).
:::

## Integrating with WooCommerce

If you're running WooCommerce, you can use our WordPress plugin. [Plausible WordPress plugin](https://wordpress.org/plugins/plausible-analytics/) has a built-in support for tracking of WooCommerce store activity including:

* Tracking of several custom events including actions such as add to cart, complete purchase and revenue
* Tracking of several custom properties including product name and product category
* A purchase funnel looking at the user journey from viewing a product to completing a purchase

All this is done automatically for you by our plugin and you don't need to manually set up any custom events nor make any changes to the code of your store. Check here for [more details about our WordPress plugin](https://plausible.io/wordpress-analytics-plugin). Check here to learn more about [WooCommerce site tracking with Plausible](https://plausible.io/blog/woocommerce-analytics-plugin).

## Integrating with Shopify

If you're using Shopify, you can track sales and revenue by making a few changes to the order status page. See [our complete Shopify guide here](shopify-integration.md).

## Integrating with Magento

There's a third-party Plausible plugin for Magento that supports custom events and revenue goals tracking. [Take a look](https://github.com/Pixel-Open/magento-plausible).

Learn more about tracking [ecommerce revenue attribution](https://plausible.io/blog/ecommerce-revenue-attribution) on our blog.
