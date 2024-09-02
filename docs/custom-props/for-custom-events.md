---
title: Attach custom properties to custom events
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Step 1: Enable "Custom events" for your site

You can enable "**Custom events**" as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control what data is collected in the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

Note that the tracking snippet changes depending on your selection of optional measurements. When making changes to your optional measurements, do ensure to insert the newest snippet into your site for all tracking to work as expected. 

## Step 2. Tag properties to custom events you want to track

Now, let's say you have a contact form both in the header and footer of your site. In addition to tracking submissions, you might want to know which section of your site the form was submitted on. Instead of creating separate goals for each form, you can send a custom property instead:

Similarly to how you define an event name inside the `class` attribute, you can use the format `plausible-event-<property>=<value>` to define custom properties. Following the same example, your code might look something like this:

```html
<body>
  <!-- header -->
  <form class="plausible-event-name=Form+Submit plausible-event-position=header">...</form>

  <!-- footer -->
  <form class="plausible-event-name=Form+Submit plausible-event-position=footer">...</form>
</body>
```

Now, both form submissions would trigger the same `Form Submit` event, but the `position` property will be different.

:::tip To represent a space character in property values, you can use a `+` sign
This is because you can't include the space character in the `class` attribute
:::

You can add up to 30 classes for custom properties. Simply separate them with a space character like in the above example.

<details>

<summary>
  
## Tag custom properties using the manual method

</summary>

This is an alternative option for those who are sending custom events manually with JavaScript, for example:

```js
plausible('Download')
```

All you have to do is add the second argument to this function call with the custom properties as follows:

```js
plausible('Download', {props: {method: 'HTTP', position: 'footer'}})
```

</details>
