---
title: Funnel analysis
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can follow the visitor journey from a landing page to a conversion with our multi-step funnel analysis. Use it to find where visitors drop off and improve your conversion rate.

* You can go beyond pageviews and use any custom events to build a funnel
* Choose between two funnel types: sequential (visitors can take other actions between steps) or strict order (steps must happen in exact consecutive order)
* With the conversion rate you understand the percentage of visitors who started the user flow and ended with a conversion event
* With the percentage drop-off between the individual funnel steps, you can spot where you lose the most visitors. A step with an unusually large drop-off is usually the best place to start optimizing
* You can get more granular by [using filters](filters-segments.md) to segment your audience. Filter conversion funnels by marketing campaign, referral source, landing page, device or location

<img alt="Funnels demo" src={useBaseUrl('img/funnels-demo.png')} />

## How funnel conversions are counted

To be counted as converted, visitors need to complete all the steps you've defined in your funnel, in the correct order. Plausible offers two funnel types that differ in how strictly that order is enforced.

**Sequential funnel (default):** Visitors must complete the steps in order, but they can visit other pages or trigger other events in between. This is the more flexible option.

**Strict order funnel:** Every step must happen in exact consecutive order with no other actions in between. Use this when you want to measure a tightly defined path and any detour should disqualify the visitor.

Funnels in Plausible are always linear. Each funnel follows one defined path from start to finish. Branching or conditional paths are not supported. If you need to compare two different paths, create two separate funnels.

Funnels also work across your main domain and its subdomains ([see more](subdomain-hostname-filter.md)), and you don't need to worry about visitors briefly leaving your site to complete actions on external services like Stripe's payment page or other third-party gateways. Plausible treats the returning visit as part of the same session, so your funnel will accurately track the full visitor journey.

## How to set up the conversion funnel analysis

* Go into your [site settings](website-settings.md) and click on "**Funnels**" in the left-hand sidebar

* Click the "**Add funnel**" button to create a funnel.

* Give your funnel a name in the "**Funnel name**" field.

* Define your funnel by adding the steps you expect a visitor to take before a conversion, a purchase or a sign up. These steps consist of [pageviews goals](pageview-goals.md) and [custom events](custom-event-goals.md). You need to add a minimum of 2 steps and a maximum of 8 steps to create a funnel.

* By default, the "**Allow other activity in between funnel steps**" option is enabled, which creates a sequential funnel. Disable it to use strict order mode instead.

* Click on the "**Save**" button after you've specified the user journey you want to analyse

Funnels appear at the bottom of your dashboard as soon as the first visit is tracked on the funnel steps.

## How to edit existing funnels

* Go into your [site settings](website-settings.md) and click on "**Funnels**" in the left-hand sidebar

* Click on the edit icon on the right-hand side of the funnel that you'd like to edit.

* Change the funnel name, edit the steps of your funnel and switch between sequential and strict order by toggling the "**Allow other activity in between funnel steps**" option

* Click on the "**Update Funnel**" button

## What's next?

- Track [ecommerce revenue](ecommerce-revenue-tracking.md) alongside your funnels to see which paths generate the most sales
- Use [filters and segments](filters-segments.md) to compare funnel performance across different traffic sources or campaigns
- Add [custom properties](custom-props/introduction.md) to your events for deeper breakdowns within each funnel step

To learn more about conversion funnel optimization, [head to our blog](https://plausible.io/blog/funnels-conversion-optimization).
