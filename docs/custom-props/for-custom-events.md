---
title: Attach custom properties to custom events
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The process of attaching custom properties to your custom events is different depending on how you're sending your events to Plausible.

## 1. Using the `tagged-events` script extension

Here's how you can attach custom properties if you're tracking your custom events with the `tagged-events` script extension.

In this case, your tracking script should already include the `tagged-events`` script extension:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.tagged-events.js"></script>
```

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

:::note
To represent a space character in property values, you can use a `+` sign. This is because you can't include the space character in the `class` attribute.
:::

You can add up to 30 classes for custom properties. Simply separate them with a space character like in the above example.

## 2. Using the manual method

If you're sending your custom events manually with JavaScript, for example:

```js
plausible('Download')
```

All you have to do is add the second argument to this function call with the custom properties as follows:

```js
plausible('Download', {props: {method: 'HTTP', position: 'footer'}})
```

