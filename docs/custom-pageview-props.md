---
title: Custom properties for pageviews and events
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can attach custom properties (also known as custom dimensions in Google Analytics) when sending a pageview or an event to Plausible. This allows you to capture dynamic elements to further break down goal conversions or to create custom metrics to collect and analyze data that we don't track automatically. 

Let's say you have a call to action to register for an account both in the header and footer of your site. In addition to tracking registrations, you might want to know which section of your site this call to action was clicked on. Instead of creating separate goals for each CTA, you can send custom properties instead. For example `plausible-event-signup=footer`. 

Or let's say you want to track your blog posts by `author`. Every time a visitor lands on one of the posts, you can send a pageview with the property `author=...`. You can then filter your Plausible dashboard by a specific author to see all the relevant stats for the posts published by that particular writer.

In order to use this feature you have to start sending custom properties with pageviews or events from your website. Here's how you can do that:

## Custom properties for pageviews 

### 1. Change the Plausible snippet on your site

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

### 2. Add your custom properties to your Plausible snippet

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

### 3. Filter your dashboard by custom properties

As soon as you have at least one pageview sent with a custom property, you will be able to see an option to filter by that property in your Plausible dashboard. To do that, open up the filter dropdown menu and select "**Property**".

<img alt="Custom Property Filter" src={useBaseUrl('img/custom-property-filter.png')} />

In that view you can interact with the dropdown fields, where Plausible will automatically provide filtering suggestions based on the custom properties for pageviews that we have recorded. The suggestions also take into account the selected time period and other filters already applied.

Choose the custom property that you want to analyze and click on "**Apply Filter**" to filter your dashboard. Note that you can only filter by one custom property at a time.

<img alt="Custom Property Filter" src={useBaseUrl('img/prop-filter-modal.png')} />

### Using `script.manual.js` as an alternative

As an alternative, you can also use our `manual` script extension to send custom properties for pageviews. It works exactly the same way as with [custom properties for custom events](custom-event-goals.md#using-custom-props). For example:

```javascript
plausible('pageview', {props: {author: 'John Doe', logged_in: 'false'}})
```

This will send a pageview with properties `author` and `logged_in`.

### Using a combination of `script.manual.pageview-props.js`

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

## Custom properties for events

Take a look at [our custom events guide](custom-event-goals.md) for instructions on how to set up custom events. You can then send custom properties alongside those events.

`plausible-event-<property>=<value>` allows you to define custom properties that are sent with your custom event. For example `plausible-event-position=footer`. The full CSS class name for the custom event and the custom property would look like this:

`plausible-event-name=Form+Submit plausible-event-position=footer`

:::note
To represent a space character in property values, you can use a `+` sign. For example: `plausible-event-author=John+Doe`. Spaces in custom property names (`author` in this example) are not allowed.
:::

You can have up to 30 custom props classes. And the names can be anything that you want.

Custom properties only accept scalar values such as strings, numbers and booleans. Data structures such as objects, arrays etc. aren't accepted.

Custom properties will show up automatically on your dashboard as long as you've added the goal itself. You don't need to manually add them in your settings.

Plausible will display `(none)` in your dashboard when you send a custom property key with no value, or `null`/`undefined` as a value.

Note that you must ensure that no personally identifiable information (PII) is sent to Plausible with custom properties. PII is information that could be used on its own to identify, contact, or precisely locate an individual. This includes:

* full names or usernames
* email addresses
* mailing addresses
* phone numbers
* credit card information
* passport numbers
* precise locations
* IP addresses
* pseudonymous cookie IDs, advertising IDs or other pseudonymous end user identifiers
