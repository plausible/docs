---
title: Increase conversions using funnel analysis
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can follow the visitor journey from a landing page to a conversion with our multi-step funnel analysis. The insights from the marketing funnel allow you to uncover possible issues, optimize your site and increase the conversion rate.

* Funnels allow you to analyze the user flow through your website and the different pages
* You can also follow the user flow between your main domain and its subdomains ([see more](plausible-script.md#can-i-track-visitors-across-my-domain-and-subdomain))
* You can go beyond pageviews and use any custom events to build a funnel
* With the conversion rate you understand the percentage of visitors who started the user flow and ended with a conversion event
* With the percentage drop-off between the individual funnel steps, you can spot where you lose the most visitors
* You can get more granular by [using filters](filters-segments.md) to segment your audience. Filter conversion funnels by marketing campaign, referral source, landing page, device or location for more insights

<img alt="Funnels demo" src={useBaseUrl('img/funnels-demo.png')} />

## How to set up the conversion funnel analysis

It is quick and easy to create a funnel. Here's how:

* Go into your [site settings](website-settings.md) and click on "**Funnels**" in the left-hand sidebar

* Click on the "**Add funnel**" button to create a funnel

   <img alt="Add funnel" src={useBaseUrl('img/add-funnel.png')} />

* Give your funnel a name in the "**Funnel name**" field

* Define your funnel by adding a set of specific steps that you expect a visitor to take before a conversion, a purchase or a sign up. These steps consist of [pageviews goals](pageview-goals.md) and [custom events](custom-event-goals.md). You need to add a minimum of 2 steps and a maximum of 8 steps to create a funnel.

<img alt="Define funnel" src={useBaseUrl('img/define-funnel.png')} />

* Click on the "**Save**" button after you've specified the user journey you want to analyse

<img alt="Goals and funnels" src={useBaseUrl('img/goals-and-funnels.png')} />

:::tip How funnel conversions are counted
To be counted as converted, visitors need to complete all the steps you’ve defined in your funnel. They must take the steps in the correct order but they can also visit other pages or trigger other events in between those steps.
:::

That's it! Funnels are listed at the bottom of your dashboard and will appear as soon as the first visit has been tracked on the funnel steps. You can then make changes to your site or to your campaign, test different options and check the funnel again to see how your improvements have affected the conversions.

## How to edit existing funnels

It is also quick and easy to edit any of your existing funnels. Here's how:

* Go into your [site settings](website-settings.md) and click on "**Funnels**" in the left-hand sidebar

* Click on the edit icon on the right-hand side of the funnel that you'd like to edit

* Change the funnel name and/or edit the steps of your funnel

* Click on the "**Update Funnel**" button

To learn about in-depth funnel marketing, [head to our blog](https://plausible.io/blog/funnels-conversion-optimization).
