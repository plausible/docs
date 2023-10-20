---
title: Introduction to custom properties
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
Custom properties is an upcoming premium feature that's free-to-use during the private preview. Pricing will be announced soon.
:::

You can attach custom properties (also known as custom dimensions in Google Analytics) when sending pageviews or custom events to Plausible in order to create custom metrics. Custom properties allow you to collect and analyze metrics that we don't track automatically. 

For example, say you want to track your blog posts by `author`. Every time a visitor lands on one of the posts, you can send a pageview with the property `author=...`. You can then filter your Plausible dashboard by a specific author to see all the relevant stats for the posts published by that particular writer.

Some other examples of stats you can get by sending custom properties:

* Filter content by the publication date, page type, ID, tag or category
* Filter visitors by login status or user role
* Filter visitors by language they're viewing your website in
* Filter visitors by how many prefer or use the dark mode
* Filter visitors by level completions or high score if you're a game developer
* Filter by the segment that saw a particular variation of your site which is useful for A/B testing

## Personally identifiable information

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

## `(none)` values

Plausible will display `(none)` in your dashboard when you send a custom property key with no value, or `null`/`undefined` as a value. Also, when you send one event with a property (e.g. `author`) and another event with the same name, but without the `author` property, then you will also see the `(none)` value because the property has not been sent with every event.

When you filter your dashboard by a particular custom event and look at the "**Properties**" tab, you shouldn't see the `(none)` value there if all the relevant events have been sent with the property included. However, if you're viewing the "**Properties**" tab without any custom event filter, it returns all the events in your dashboard (including all regular pageviews) and many of these events may not have a property attached. Hence you see the `(none)` value.

## Accepted values

Custom properties only accept scalar values such as strings, numbers and booleans. Data structures such as objects, arrays etc. aren't accepted.

## Limits

* You can send up to 30 different custom properties per event
* The number of allowed characters for a property name is 300
* The limit for custom property values is 2000 characters 

## Set up custom property tracking

Please check out the following sections of instructions for setting up the tracking and analyzing the data in your dashboard:

* [Attach custom properties to pageviews](/custom-props/for-pageviews)
* [Attach custom properties to custom events](/custom-props/for-custom-events)
* [Analyze your traffic by custom properties](/custom-props/props-dashboard)

