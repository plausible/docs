---
title: Analyze your traffic by custom properties
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
Custom properties is an upcoming premium feature that's free-to-use during the private preview. Pricing will be announced soon.
:::

## 1. Configure properties in your site settings

When you send properties to Plausible, they won't show up in your dashboard automatically. You'll have to configure the property for the numbers to show up.

To configure a property, go to the [site settings](website-settings.md) in your Plausible account and visit the "**Custom Properties**" section. You should see an empty list with a prompt to add a property. You also have the option to add all properties that you've already sent with one click.

<img alt="Configure custom props" src={useBaseUrl('img/add-custom-properties.png')} />

## 2. Filter by a custom property

As soon as you have at least one event or one pageview with a custom property attached to it, you will be able to see an option to filter by that property in your Plausible dashboard. 

At the bottom of your dashboard, in the "**Goal Conversions**" section you can switch to the "**Properties**" tab. There you can select a property to see the related data. You can also click on any of your custom events in the  "**Goals**" which will then display the properties attached to that event.

<img alt="Custom Property Filter" src={useBaseUrl('img/custom-props-breakdown.png')} />

You can also open the filter dropdown menu and select "**Property**". In that view you can interact with the dropdown fields, where Plausible will automatically provide filtering suggestions based on the custom properties that we have recorded. The suggestions also take into account the selected time period and other filters already applied.

<img alt="Custom Property Filter" src={useBaseUrl('img/custom-property-filter.png')} />

Choose the custom property that you want to analyze and click on "**Apply Filter**" to filter your dashboard. Note that you can only filter by one custom property at a time.

<img alt="Custom Property Filter" src={useBaseUrl('img/prop-filter-modal.png')} />
