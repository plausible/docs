---
title: Custom properties for pageviews
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
Custom properties is an upcoming premium feature that's free-to-use during the private preview. Pricing will be announced soon.
:::

You can attach custom properties (also known as custom dimensions in Google Analytics) when sending a pageview to Plausible in order to create custom metrics. Custom properties for pageviews allow you to collect and analyze metrics that we don't track automatically. 

For example, say you want to track your blog posts by `author`. Every time a visitor lands on one of the posts, you can send a pageview with the property `author=...`. You can then filter your Plausible dashboard by a specific author to see all the relevant stats for the posts published by that particular writer.

Some other examples of stats you can get by sending custom properties alongside pageviews:

* Filter content by the publication date, page type, ID, tag or category
* Filter visitors by login status or user role
* Filter visitors by language they're viewing your website in
* Filter visitors by how many prefer or use the dark mode
* Filter visitors by level completions or high score if you're a game developer
* Filter by the segment that saw a particular variation of your site which is useful for A/B testing
 
In order to use this feature you have to start sending custom properties with pageviews from your website. Here's how you can do that:

## 1. Change the Plausible snippet on your site

The easiest option to get started is to use the `script.pageview-props.js` script extension. Please change the file name in the `src` attribute of your Plausible snippet from `script.js` to `script.pageview-props.js`. It should look like this:

```html
<script defer data-domain="<yourdomain.com>" src="https://plausible.io/js/script.pageview-props.js"></script>
```

Or if you're using [a proxy](/proxy/introduction.md):

```html
<script defer data-domain="<yourdomain.com>" src="https://yourproxy.com/script.pageview-props.js"></script>
```

:::note
If you're using any of our other script extensions, you can [combine them](script-extensions.md#you-can-combine-extensions-according-to-your-needs) by changing the `src` attribute in the snippet. If you want to track pageview props and outbound link clicks simultaneously, change the script name to `script.pageview-props.outbound-links.js`.
:::

## 2. Add your custom properties to your Plausible snippet

You should now add the custom properties as HTML attributes to your Plausible snippet (the `<script>` element). The attributes must follow the format `event-<property>="<value>"`. For example, if you want to track the `author` property with a value of `John Doe`, you should do that as follows:

```html
<script defer event-author="John Doe" data-domain="<yourdomain.com>" src="https://plausible.io/js/script.pageview-props.js"></script>
```

You can add up to 30 custom properties alongside a pageview by adding multiple attributes:

```html
<script defer event-author="John Doe" event-logged_in="true" event-darkmode="true" data-domain="<yourdomain.com>" src="https://plausible.io/js/script.pageview-props.js"></script>
```

All properties provided in the snippet will automatically be attached to any [custom event conversions](custom-event-goals.md) as well.

That's it! You're now tracking custom properties alongside pageviews.

## 3. Filter your dashboard by custom properties

As soon as you have at least one pageview sent with a custom property, you will be able to see an option to filter by that property in your Plausible dashboard. To do that, open up the filter dropdown menu and select "**Property**".

<img alt="Custom Property Filter" src={useBaseUrl('img/custom-property-filter.png')} />

In that view you can interact with the dropdown fields, where Plausible will automatically provide filtering suggestions based on the custom properties for pageviews that we have recorded. The suggestions also take into account the selected time period and other filters already applied.

Choose the custom property that you want to analyze and click on "**Apply Filter**" to filter your dashboard. Note that you can only filter by one custom property at a time.

<img alt="Custom Property Filter" src={useBaseUrl('img/prop-filter-modal.png')} />

## Using `script.manual.js` as an alternative

As an alternative, you can also use our `manual` script extension to send custom properties for pageviews. It works exactly the same way as with [custom properties for custom events](custom-event-goals.md#using-custom-props). For example:

```javascript
plausible('pageview', {props: {author: 'John Doe', logged_in: 'false'}})
```

This will send a pageview with properties `author` and `logged_in`.

## Using a combination of `script.manual.pageview-props.js`

You can also combine the `manual` extension with the `pageview-props` extension. For example, if you're using this snippet:

```html
<script defer event-logged_in="false" data-domain="<yourdomain.com>" src="https://plausible.io/js/script.manual.pageview-props.js"></script>
```

and also calling the `plausible` function manually like this:

```javascript
plausible('pageview', {props: {author: 'John Doe'}})
```

Then the pageview will be sent with two properties - `author` and `logged_in`. If you provide the exact same property name in the snippet and in sending the pageview manually, the value from the manual `plausible` function call will take precedence. For example, if you do this:

```html
<script defer event-logged_in="false" data-domain="<yourdomain.com>" src="https://plausible.io/js/script.manual.pageview-props.js"></script>
<script>plausible('pageview', {props: {logged_in: 'true'}})</script>
```

Then the pageview will be sent with `logged_in = true`.
