---
title: Ecommerce revenue and attribution tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can assign dynamic monetary values to custom event - goals to track revenue attribution. Revenue attribution helps you determine which marketing campaigns and landing pages result in the most revenue for your business or ecommerce store. Learn more [here](https://plausible.io/blog/ecommerce-revenue-attribution).

When you create a new custom event, you can now optionally assign a monetary value to it. Our revenue tracking supports multi-currencies too. You can send data in any local currency that the purchase is made in. When using revenue tracking, you'll be able to see these metrics in your dashboard:

* Unique conversions
* Total conversions
* Conversion rate
* Total revenue
* Average revenue

<img alt="Ecommerce revenue goal top graph" src={useBaseUrl('img/plausible-ecommerce-revenue-top-graph.png')} />

The revenue metrics are fully filterable. For instance, you can see the total or average revenue for a particular custom event per any dimension such as a specific date, referral source, marketing campaign, entry page, country or device. 

You can add multiple filters to [create audience segments](filters-segments.md) too. This allows you to see the conversions and revenue from for instance the audience segment that's located in Germany, Austria and Switzerland, that were referred by a particular UTM campaign and are using Mac OS.

Here's how to send revenue alongside custom events:

## 1. Change the Plausible snippet on your site

Please change the file name in the `src` attribute of your Plausible snippet from `script.js` to `script.revenue.js`. It should look like this:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.revenue.js"></script>
```

Or if you're using [a proxy](/proxy/introduction.md):

```html
<script defer data-domain="yourdomain.com" src="https://yourproxy.com/script.revenue.js"></script>
```

:::tip You can combine script extensions
If you're using any of our other script extensions, you can [combine them](script-extensions.md#you-can-combine-extensions-according-to-your-needs) by changing the `src` attribute in the snippet. If you want to track revenue goals and outbound link clicks simultaneously, change the script name to `script.revenue.outbound-links.js`
:::

## 2. Add a new custom event and specify the currency of your choice

Go to your [site settings](website-settings.md) and in the "**Goals**" section click on the "**Add goal**" button. Choose "**Custom event**" as the goal trigger, enter the goal name in the "**Event name**" field, switch to "**Enable Revenue Tracking**" and set the base currency of your choice. This currency will be used for total and average revenue metrics in the dashboard. Note that the currency for a specific event cannot be changed later.

<img alt="Add goal and choose your currency" src={useBaseUrl('img/plausible-ecommerce-currency-goal.png')} />

## 3. Start sending the revenue data from your site

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
This lets you track product names, coupon codes, if customers are logged in and more. [Learn more](/custom-props/introduction.md)
:::

## Integrating with WooCommerce

If you're running your ebusiness using WooCommerce, you can use our official WordPress plugin.

[Plausible Analytics WordPress plugin](https://wordpress.org/plugins/plausible-analytics/) has a built-in support for tracking of WooCommerce store activity. 

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Ecommerce revenue" option. This will automatically set up and start tracking several WooCommerce custom events:

* Add to Cart
* Remove from Cart
* Start Checkout
* Complete Purchase (including revenue)

Several custom properties (also known as custom dimensions in Google Analytics) will start being recorded as well for further analysis:

* product_type
* product_cat
* pa_color
* tax
* cart_total
* cart_total_items
* price
* product_id
* product_name
* quantity
* shipping
* subtotal
* subtotal_tax
* tax_class
* total
* total_tax
* variation_id

A purchase funnel will be created as well looking at the user journey all the way from viewing a product to completing a purchase. This will help you see the drop-off rates between the different steps and understand your cart abandonment rate.

All this is done automatically for you by our plugin and you don't need to manually set up any custom events nor make any changes to the code of your store.

Check here for [more details about our WordPress plugin](https://plausible.io/wordpress-analytics-plugin).

## Integrating with Shopify

If you're using Shopify, you can track sales by making a few changes to the order status page.

1. Integrate the regular Plausible snippet [into your Shopify store](shopify-integration.md) to start counting stats
2. To start tracking revenue stats, go to your Shopify admin page, click on Settings > Checkout > Order status page
3. Add the following code to 'Additional scripts'. Don't forget to replace `yourdomain.com` and `Purchase` with the goal name you created
4. Click 'Save' and you're done!

```liquid
{% if first_time_accessed == true and post_purchase_page_accessed == false %}
<script data-domain="yourdomain.com" src="https://plausible.io/js/script.manual.revenue.js"></script>
<script>
  const amount = "{{ total_price | money_without_currency | replace:',','.' }}"
  const currency = "{{ currency }}"
  window.plausible("Purchase", {revenue: {amount: amount, currency: currency}})
</script>
{% endif %}
```

You're now getting events on Plausible when a customer completes an order in your Shopify store.

If you want to track custom properties, such as order IDs or the number of items in an order, here's an example to get you started:

```
{% if first_time_accessed == true and post_purchase_page_accessed == false %}
<script data-domain="yourdomain.com" src="https://plausible.io/js/script.manual.revenue.pageview-props.js"></script>
<script>
  const amount = "{{ total_price | money_without_currency | replace:',','.' }}"
  const currency = "{{ currency }}"

  const orderId = "{{ order_number }}"
  const itemCount = {{ item_count }}

  window.plausible("Purchase", {
    revenue: {amount: amount, currency: currency},
    props: {orderId: orderId, itemCount: itemCount}
  })
</script>
{% endif %}
```

## Integrating with Magento

There's a third-party Plausible plugin for Magento that supports custom events and revenue goals tracking. [Take a look](https://github.com/Pixel-Open/magento-plausible).
