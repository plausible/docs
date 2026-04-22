---
title: Attach custom properties to custom events
---

## Send custom properties with custom events

When you track a custom event, you can include property key-value pairs alongside it. This lets you capture additional context about the event, for example which pricing plan a visitor selected when clicking a sign-up button, or which content variation they were shown.

### Using HTML class attributes

If you're using Plausible's class-based event tracking, add properties using the format `plausible-event-<property>=<value>` on the same element:

```html
<button class="plausible-event-name=Sign+Up plausible-event-plan=starter">...</button>
<button class="plausible-event-name=Sign+Up plausible-event-plan=pro">...</button>
```

Both buttons trigger the same `Sign Up` event, but the `plan` property will differ between them.

:::tip
To represent a space in a property value, use a `+` sign. Space characters are not valid in class attributes.
:::

You can add up to 30 properties per event by separating each class with a space.

## Using the JavaScript method

If you're triggering events manually with JavaScript, pass properties as a second argument:

```js
plausible('Sign Up', {props: {plan: 'pro', variation: 'homepage-cta'}})
```

---

## Create property-filtered goals

When you [create a goal from a custom event](goal-conversions.md) in your site settings, you can optionally attach up to three property constraints to that goal definition.

A property-filtered goal only counts an event when both the event name and the property values match. For example, you can create a `Pro Sign Up` goal that only fires when a `Sign Up` event includes `plan=pro`. A separate `Starter Sign Up` goal would match `plan=starter`.

This is distinct from simply sending properties with your events:

- **Sending a property with an event** records raw data. You can filter and analyze it in the dashboard after the fact.
- **Attaching a property to a goal** makes the property part of the goal's definition. The goal only counts when that specific property value is present. It becomes a discrete conversion metric, not a filtered view of existing data.

---

## Use property-filtered goals in funnels

Funnels in Plausible are built from goals, not raw events. Each funnel step must map to a defined goal.

If you want a funnel step to represent a specific variation of an event rather than all instances of it, you need a goal with the property constraint built in.

For example, a funnel that tracks:

1. Visitor views the pricing page
2. Visitor clicks the Pro plan sign-up button
3. Visitor completes registration

Step 2 requires a goal that matches only `Sign Up` events where `plan=pro`. Without the property constraint on the goal, that step would count any sign-up button click on the site regardless of which plan was selected.

Once you've created property-filtered goals, you can [add them as funnel steps](funnel-analysis.md) the same way as any other goal.
