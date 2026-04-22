---
title: Introduction to custom properties
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Custom properties let you collect and analyze metrics that Plausible doesn't track automatically. You can attach them to pageviews or custom events to create your own segments and filters. If you're coming from Google Analytics, custom properties are equivalent to [custom dimensions](https://plausible.io/blog/custom-dimensions-analytics).

For example, say you want to track your blog posts by `author`. Every time a visitor lands on one of the posts, you can send a pageview with the property `author=...`. You can then filter your Plausible dashboard by a specific author to see all the relevant stats for the posts published by that particular writer.

Other examples:

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

When you filter your dashboard by a particular custom event and look at the "**Properties**" tab, you should only see `(none)` if some of those events were sent without the property. However, if you're viewing the "**Properties**" tab without any custom event filter, it returns all the events in your dashboard (including all regular pageviews) and many of these events may not have a property attached. This is why you see the `(none)` value.

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

