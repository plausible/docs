---
title: Adding Plausible to Shopify (and tracking checkouts and order confirmations)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here's how to add Plausible Analytics to your Shopify store and set up the tracking of events such as button clicks, form submissions and order confirmations.

## How to add Plausible to your Shopify store 

* Log in to your Shopify account and click on Sales Channels > Online Store > Themes in the left-hand side menu.  

* Click on the hamburger menu icon next to your current theme and choose "Edit code" from the drop-down menu.

<img alt="Add Plausible to Shopify" src={useBaseUrl('img/add-custom-code-to-shopify.png')} />

* In the "Layout" folder, select your "theme.liquid" file and [paste your Plausible snippet](https://plausible.io/docs/plausible-script) in the "**Head Code**" section. Your Plausible tracking script code will look something like this (your exact code will be shown on the JavaScript snippet page in your Plausible account):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

<img alt="Add Plausible Analytics script to Shopify" src={useBaseUrl('img/add-plausible-script-to-shopify.png')} />

* Do click on the "**Save Changes**" to publish your changes. 

Now you can go to your Shopify website and verify that Plausible script has been added and to your Plausible account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## How to track checkouts and order confirmations

To track your overall checkouts and order confirmations, you will have to add your tracking script to the "checkout.liquid" file if you're on Shopify Plus.

If you're not a Shopify Plus merchant, you can go to "Settings" and "Checkout and accounts". You can add the Plausible script in the "Additional scripts" text field of the "Order status page" section.

<img alt="Track orders in shopify" src={useBaseUrl('img/order-status-page-shopify.png')} />

After doing that, you will start seeing pageviews for page paths that include "/checkouts/" and "/thank_you" in the "**Top Pages**" report of your Plausible Analytics dashboard. You can group all visits to checkout pages (or all order confirmations) into one set of pages in your Plausible dashboard to better analyze your marketing campaigns and performance.

Click on the "Filter" button on the top right of your dashboard and then choose "Page". Here you can combine URLs to analyze them as one group. Filter by `/**thank_you**` to combine all the purchase confirmations or by `/**checkouts**` to group all the checkouts. 

Doing this will segment your dashboard by the traffic that went through the checkout process and successfully placed orders. You'll be able to see the referral sources and landing pages that drove the most conversions. You'll also be able to see the location and device details of the buyers too.

If you'd like to see these grouped order confirmations or checkout page visits permanently in your dashboard, you can add them as [pageview goals](pageview-goals.md).

<img alt="Shopify thank you page tracking" src={useBaseUrl('img/shopify-thank-you-page-goal.png')} />

## How to track form submissions and button clicks on Shopify

Here's how you can track particular form submissions and button clicks on your Shopify site:

### 1. Change the Plausible snippet on your site

Please change the file name in the `src` attribute of your Plausible snippet from `script.js` to `script.tagged-events.js`. It should look like this:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.tagged-events.js"></script>
```

:::tip You can combined script extensions
If you're using outbound link clicks, file downloads or any of our other script extensions, you can [combine them](script-extensions.md#you-can-combine-extensions-according-to-your-needs) by changing the `src` attribute in the snippet. If you want to track custom events and outbound link clicks simultaneously, change the script name to `script.tagged-events.outbound-links.js`
:::

### 2. Find the ID attribute of the form or button you want to track

Your form or button element should have an ID attribute assigned by default. You can find this ID by selecting the element you want to track (do make sure you select your form element and not just the "Submit" button) and clicking on the settings gear.

<img alt="Shopify form ID" src={useBaseUrl('img/shopify-form-id.png')} />

### 3. Trigger custom events with JavaScript on your site

Here's the code you will need to insert in the `<head>` section of the page where the element ID that you want to track is located. You can do this the same way as you've inserted the Plausible snippet into your site.

Make sure to change the `elementId` line in the code below to include the ID attribute of the element you want to track (`ContactForm` in our example). 

Also do change the `classes` line to include the goal name in this format: `plausible-event-name=Goal+Name`. The goal name is completely up to you. It's the name under which the goal conversions will appear in your Plausible dashboard. We've used `Form+Submit` goal name in our example.

:::note
To represent a space character in goal names, you can use a `+` sign. For example: `plausible-event-name=Form+Submit` will display as `Form Submit` in your Plausible dashboard
:::

```html
<script>
    var toTag = [
        {
            elementId: 'ContactForm',
            classes: 'plausible-event-name=Form+Submit'
        }
    ]

    document.addEventListener('DOMContentLoaded', function (_e) {
        toTag.forEach(function (tagObject) {
            var element = document.getElementById(tagObject.elementId)
            tagObject.classes.split(' ').forEach(function (className) {
                if (element) { element.classList.add(className) }
            })
        })
    })
</script>
```

<img alt="Modify Plausible script webflow" src={useBaseUrl('img/modify-plausible-script-shopify.png')} />

Do click on the "**Save**" button to save your changes.

### 4. Create a custom event goal in your Plausible account

When you send custom events to Plausible, they won't show up in your dashboard automatically. You'll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to [your website's settings](website-settings.md) in your Plausible account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first Shopify goal" src={useBaseUrl('img/add-goal-shopify.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form. Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The name must be an exact match to the one you added to your site for the conversions to show up in your dashboard.

So in our example where we added a goal name `plausible-event-name=Form+Submit` to the Shopify site, the goal to add in the Plausible account is `Form Submit` (plus is replaced by a space).

<img alt="Add your custom event goal" src={useBaseUrl('img/form-submission-custom-event-goal-shopify.png')} />

Next, click on the "**Add goal**" button and you'll be taken back to the Goals page. 

### 5. Your goal should now be ready and tracking

Your goal should now be set up. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event. Goal conversions are listed at the very bottom of the dashboard. The goal will show up in your dashboard as soon as it has been completed at least once.

## Triggering multiple custom events on the same page

If you want to trigger multiple custom events on the same site, you don't need to add the script for each element that you want to track. Simply add all the elements in the same code. Make sure to **only add** the elements that already exist on your site. For example, if you want to track a form and a button, the code will look like this:

```html
<script>
    var toTag = [
        {
            elementId: 'ContactForm',
            classes: 'plausible-event-name=Form+Submit'
        },
		{
      		elementId: 'button-ID',
            classes: 'plausible-event-name=Button+Click'   
   		}
    ]

    document.addEventListener('DOMContentLoaded', function (_e) {
        toTag.forEach(function (tagObject) {
            var element = document.getElementById(tagObject.elementId)
            tagObject.classes.split(' ').forEach(function (className) {
                if (element) { element.classList.add(className) }
            })
        })
    })
</script>
```

<img alt="track multiple elements in Shopify" src={useBaseUrl('img/track-multiple-elements-shopify.png')} />

## Ecommerce revenue and attribution tracking 

You can [track sales](https://plausible.io/docs/ecommerce-revenue-tracking) by making a few changes to the order status page.

1. Go to your Shopify admin page
2. Click on Settings > Checkout > Order status page

<img alt="Shopify Settings" src={useBaseUrl('img/shopify-settings-revenue-metrics.png')} />
<img alt="Shopify Checkout menu" src={useBaseUrl('img/shopify-settings-checkout-revenue-metrics.png')} />

3. Add the following code to 'Additional scripts'. Don't forget to replace `yourdomain.com` and `Purchase` with the goal name you created

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

If you want to track custom properties, such as order IDs or the number of items in an order, here's an example to get you started.

Don't forget to add the custom properties `orderId` and `itemCount` in the Plausible UI, as well.

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

<img alt="Shopify Additional scripts box" src={useBaseUrl('img/shopify-additional-scripts-revenue-metrics.png')} />

5. Click 'Save' and you're done!

<img alt="Revenue goal custom props" src={useBaseUrl('img/revenue-goal-custom-props.png')} />
