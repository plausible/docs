---
title: Funnel analysis
description: "Measure drop-off across multi-step conversion paths with Plausible's funnel analytics. Define a sequence of steps and see exactly how many visitors complete each one."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

Define a sequence of steps and measure how many visitors complete each one. Use funnel analysis to find where people drop off and improve your conversion rate.

<PlanFeatureNote feature="funnel-analysis" plan="business" label="Funnel analysis" />

- You can go beyond pageviews and use any custom events to build a funnel
- Choose between three funnel types: sequential (all steps are required, with other activity allowed between them), flexible (only the first and last steps are required) or strict (all steps must happen in exact consecutive order)
- With the conversion rate you understand the percentage of visitors who started the user flow and ended with a conversion event
- With the percentage drop-off between the individual funnel steps, you can spot where you lose the most visitors. A step with an unusually large drop-off is usually the best place to start optimizing
- Revenue-enabled goals show the revenue generated at the relevant funnel steps, including revenue per visitor in the step details
- Enable a date comparison to compare step completion and the overall funnel conversion rate against a previous or custom period
- You can get more granular by [using filters](filters-segments.md) to segment your audience. Filter conversion funnels by marketing campaign, referral source, landing page, device or location

<div class="browser">
<img alt="Funnel analysis with revenue and a previous-period comparison" src={useBaseUrl('img/funnel-analysis-revenue-comparison.png')} />
</div>

## How funnel conversions are counted

Your funnel type determines which steps visitors need to complete to count as converted

**Sequential funnel (default):** Visitors must complete all the steps in order, but they can visit other pages or trigger other events in between.

**Flexible funnel:** Visitors must complete the first step and then the last step, but can skip any or all of the middle steps. Other pages and events are allowed in between. For example, in a "View product → View details → Purchase" funnel, visitors who view a product and then purchase count as converted whether or not they view the details. Use this to measure conversion from start to finish while accounting for visitors who take different paths along the way.

**Strict funnel:** Every step must happen in exact consecutive order with no other actions in between. Use this when you want to measure a tightly defined path and any detour should disqualify the visitor.

Each funnel has one defined list of steps. Flexible funnels let visitors skip middle steps, but branching or conditional paths are not supported. If you need to compare two different paths, create two separate funnels.

Funnels also work across your main domain and its subdomains ([see more](subdomain-hostname-filter.md)), and you don't need to worry about visitors briefly leaving your site to complete actions on external services like Stripe's payment page or other third-party gateways. Plausible treats the returning visit as part of the same session, so your funnel will accurately track the complete conversion sequence.

## How to set up the conversion funnel analysis

- Go into your [site settings](website-settings.md) and click on **Funnels** in the left-hand sidebar

- Click the **Add funnel** button to create a funnel.

- Give your funnel a name in the **Funnel name** field.

- Define your funnel by adding the steps you expect a visitor to take before a conversion, a purchase or a sign up. These steps consist of [pageview goals](pageview-goals.md) and [custom event goals](custom-event-goals.md), including revenue-enabled goals. You need to add a minimum of 2 steps and a maximum of 8 steps to create a funnel. If you want a step to match only a specific variation of a custom event, use a [property-filtered goal](/custom-props/for-custom-events#create-property-filtered-goals).

- Under **Funnel type**, choose **Sequential**, **Flexible** or **Strict**. Sequential is selected by default. Choose Flexible if visitors can skip middle steps, or Strict if every step must follow the previous one without other activity in between.

- Click on the **Save** button after you've defined the steps you want to measure

Funnels appear at the bottom of your dashboard as soon as the first visit is tracked on the funnel steps.

## How to edit existing funnels

- Go into your [site settings](website-settings.md) and click on **Funnels** in the left-hand sidebar

- Click on the edit icon on the right-hand side of the funnel that you'd like to edit.

- Change the funnel name, edit the steps of your funnel or choose **Sequential**, **Flexible** or **Strict** under **Funnel type**

- Click on the **Update Funnel** button

## When to use funnel analysis

Use funnels when you want to measure how many visitors complete a specific multi-step sequence and where most of them drop off. Good candidates:

- A signup or onboarding flow (landing page → signup form → confirmation)
- An ecommerce checkout (product page → cart → checkout → order confirmation)
- A content conversion (blog post → email capture → thank you page)
- A trial-to-paid flow (trial signup → feature usage → upgrade page)

If you just want to count how many people reached a single page or clicked a button, a [pageview goal](pageview-goals.md) or [custom event goal](custom-event-goals.md) is simpler. Funnels are most useful when the sequence of steps matters. If you do not have a specific path in mind and want to discover what visitors actually do, use [user journeys](user-journeys.md) instead.

## Funnel examples

**SaaS trial signup**

A typical SaaS funnel might look like:

1. Pricing page (`/pricing`)
2. Registration page (`/register`)
3. Onboarding step one (`/onboarding/step-1`)
4. Dashboard (`/app/dashboard`)

This shows you how many visitors who viewed pricing actually made it to the dashboard. A big drop between step 1 and 2 means the pricing page is not convincing. A big drop between 3 and 4 means onboarding is losing people.

**Ecommerce checkout**

1. Product page (use a wildcard like `/products/*`)
2. Cart (`/cart`)
3. Checkout (`/checkout`)
4. Order confirmation (`/checkout/order-confirmed`)

Choose **Flexible** if visitors might skip the cart and go directly to checkout. Visitors who view a product and then reach the order confirmation count as converted, even if they skip the cart or checkout steps in your funnel.

**Content to email signup**

1. Blog post (use `/blog/*` to cover all posts)
2. Email signup page (`/newsletter`)
3. Thank you page (`/newsletter/confirmed`)

## Interpreting funnel results

**Drop-off rate by step**

In sequential and strict funnels, the drop-off between steps helps you spot possible friction. Focus on the step with the _largest proportional_ drop rather than the lowest absolute number.

In a flexible funnel, the overall conversion rate measures how many visitors completed the first step and then the last, regardless of the middle steps. Middle-step counts still show visitors who followed the defined sequence up to that point. The last step can therefore have more visitors than a middle step. A visitor missing from a middle step may have skipped it and still converted, so a drop there does not necessarily mean a lost conversion.

**What counts as a normal drop-off**

There is no universal benchmark. A pricing → signup funnel might convert at 5-15%. A cart → purchase funnel might be 40-70%. Compare your current funnel against previous periods using the date range selector rather than industry averages.

**Revenue in funnels**

If a funnel contains a [revenue-enabled goal](ecommerce-revenue-tracking.md), the relevant step shows the revenue generated by visitors who reached it. Hover over the step for the exact revenue and revenue per visitor. When comparing date ranges, revenue is shown for both periods.

**Using filters to diagnose drop-off**

Filter your funnel by traffic source, country or device to see whether drop-off is concentrated in a specific segment. For example: if mobile users drop off at step 2 at twice the rate of desktop users, the issue is likely a UX problem on mobile at that step.

**Zero conversions on a step**

If a step shows 0 conversions, check that the goal for that step is set up correctly and that the page URL in the funnel matches exactly what Plausible records. Use the Top Pages report to confirm the exact URL format being recorded.

## Troubleshooting funnels

### Funnel shows no data

The funnel only counts visitors after it was created. If the goals used as funnel steps have not been triggered since you saved the funnel, the funnel will show no data. Trigger each step on your site, then check the dashboard.

Also confirm that each goal used as a step is set up correctly in your site settings. A goal with a name mismatch or a page URL that does not match what Plausible records will produce zero entries at that step. Use the Top Pages or Goals reports to verify the exact values being recorded.

### Numbers seem lower than expected

Check your **Funnel type**. In a strict funnel, any other page load or event between two steps breaks the required sequence. Choose **Sequential** if visitors should complete every step but can do other things in between.

Sequential funnels still require every step. If visitors can convert without completing the middle steps, choose **Flexible** to include them in the final conversion count.

### You need more than 8 steps

Funnels are limited to 8 steps. If your flow is longer, split it into two funnels at a logical midpoint. For example, an acquisition-to-activation flow can be split into an acquisition funnel (landing page to signup) and an activation funnel (signup to first key action). Compare the two completion rates to find where the bigger drop-off is.

### A step shows zero conversions

If one step shows zero while earlier steps have data, the goal for that step is likely misconfigured or has not fired yet since the funnel was created. See the [custom event troubleshooting guide](custom-event-goals.md#custom-event-not-showing-up) for how to verify events are firing correctly.

---

## What's next?

- Track [ecommerce revenue](ecommerce-revenue-tracking.md) alongside your funnels to see which paths generate the most sales
- Use [filters and segments](filters-segments.md) to compare funnel performance across different traffic sources or campaigns
- Use [property-filtered goals](/custom-props/for-custom-events#create-property-filtered-goals) as funnel steps to track specific event variations, such as a sign-up for a particular plan
- Explore open-ended visitor paths with [user journeys](user-journeys.md): useful when you want to discover flows rather than measure a predefined sequence

To learn more about conversion funnel optimization, [head to our blog](https://plausible.io/blog/funnels-conversion-optimization).
