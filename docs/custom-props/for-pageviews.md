---
title: Attach custom properties to pageviews
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Step 1: Enable "Custom properties" for your site

You can enable "**Custom properties**" as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control what data is collected in the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

Note that the tracking snippet changes depending on your selection of optional measurements. When making changes to your optional measurements, do ensure to insert the newest snippet into your site for all tracking to work as expected.

## Step 2: Add your custom properties to your Plausible snippet

You should now add the custom properties as HTML attributes to your Plausible snippet (the `<script>` element). The attributes must follow the format `event-<property>="<value>"`. For example, if you want to track the `author` property with a value of `John Doe`, you should do that as follows:

```html
<script defer event-author="John Doe" data-domain="yourdomain.com" src="https://plausible.io/js/script.pageview-props.js"></script>
```

You can add up to 30 custom properties alongside a pageview by adding multiple attributes:

```html
<script defer event-author="John Doe" event-logged_in="true" event-darkmode="true" data-domain="yourdomain.com" src="https://plausible.io/js/script.pageview-props.js"></script>
```

All properties provided in the snippet will automatically be attached to any [custom event conversions](custom-event-goals.md) as well.

Your Plausible tracking snippet should be inserted into [the Header (`<head>`) section of your site](plausible-script.md). Place the tracking script within the `<head> … </head>` tags.

That's it! You're now tracking custom properties alongside pageviews.

:::tip Using WordPress?
The quickest way to start tracking custom properties is to use our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin) 
:::

<details>

<summary>

## Using `script.manual.js` as an alternative

</summary>

As an alternative, you can also use our `manual` script extension to send custom properties for pageviews. It works exactly the same way as with [custom properties for custom events](/custom-props/for-custom-events#2-using-the-manual-method). Make sure to write `pageview` exactly the same as in the following example:

```javascript
plausible('pageview', {props: {author: 'John Doe', logged_in: 'false'}})
```

This will send a pageview with properties `author` and `logged_in`.

## Using a combination of `script.manual.pageview-props.js`

You can also combine the `manual` extension with the `pageview-props` extension. For example, if you're using this snippet:

```html
<script defer event-logged_in="false" data-domain="yourdomain.com" src="https://plausible.io/js/script.manual.pageview-props.js"></script>
```

and also calling the `plausible` function manually like this:

```javascript
plausible('pageview', {props: {author: 'John Doe'}})
```

Then the pageview will be sent with two properties - `author` and `logged_in`. If you provide the exact same property name in the snippet and in sending the pageview manually, the value from the manual `plausible` function call will take precedence. For example, if you do this:

```html
<script defer event-logged_in="false" data-domain="yourdomain.com" src="https://plausible.io/js/script.manual.pageview-props.js"></script>
<script>plausible('pageview', {props: {logged_in: 'true'}})</script>
```

Then the pageview will be sent with `logged_in = true`.

</details>
