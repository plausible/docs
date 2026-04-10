---
title: All metrics and their definitions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

These are the metrics you'll find across your Plausible dashboard. They're grouped by category to help you understand how they relate to each other.

---

## Traffic

### Unique Visitors

The number of people who visited your site. We are privacy-friendly so we don't use cookies and other persistent identifiers. If a person visits from multiple devices or on multiple days, they are counted as separate visitors. Within the same day, a person counts as one unique visitor even if they have multiple sessions. You can learn more about [how we count unique visitors](https://plausible.io/data-policy).

### Total Visits (or Sessions)

A session (also known as a visit) is a set of actions a user takes on your site. A visit starts when a visitor first lands on your page and ends when no action is taken for 30 minutes.

Think of it like a shopping trip. It begins when you walk in and ends when you leave or when you haven't been active for 30 minutes. One person can have multiple sessions if they return later in the day or on another day. This is why Total Visits is often higher than Unique Visitors.

### Total Pageviews

The total number of times your pages were loaded by your visitors. A single visitor loading 5 pages counts as 5 pageviews but 1 unique visitor. The ratio between the two gives you a rough sense of how much people explore beyond their landing page.

### Current Visitors

The number of people currently on your site. This metric does not depend on the filters applied to the dashboard. It includes all visitors who have loaded a page in the last 5 minutes. You can click on the number to see what pages they are viewing.

---

## Engagement

### Bounce Rate

The percentage of visitors who land on a page and leave without meaningfully engaging with your site. By default, Plausible marks a visit as a bounce unless the visitor does at least one of the following:

* Views more than one page
* Triggers a [custom event](custom-event-goals.md)

Think of a bounce like someone walking into a shop, glancing around and walking straight back out without picking anything up or speaking to anyone.

**Typical ranges:** Below 40% is excellent. 40-60% is common for most sites. Above 70% may suggest visitors aren't finding what they expected.

Content-heavy sites and blogs naturally trend higher. Single-page apps and landing pages often need [custom events](custom-event-goals.md) to produce an accurate bounce rate since there are no additional page loads to signal engagement. If your bounce rate seems high, setting up custom events for meaningful actions visitors can take (button clicks, video plays, form interactions) is the recommended approach. Any custom event a visitor triggers counts as engagement and removes them from the bounce count.

If you use custom events for broader tracking purposes and don't want them to affect the bounce rate, you can mark them as non-interactive:

```js
plausible('Custom Event', {interactive: false})
```

Non-interactive events are still tracked and recorded normally, but visitors who only trigger them will still be counted as bounced unless they also view another page.

### Visit Duration

The amount of time visitors spend on your site. Visitors who only view one page are counted with a duration of 0 seconds rather than excluded. Average visit duration is the sum of all session lengths divided by the number of sessions, which includes those 0 second visits (bounces).

**Typical ranges:** 1-3 minutes is common for most sites. Documentation and content-heavy sites often run higher.

### Views Per Visit (or Pages / Session)

Views per visit (also known as pages per session) shows the average number of pageviews per visit. Repeated views of a single page are included.

**Typical ranges:** 1.5-3 pages per visit is average for most sites. Higher numbers suggest visitors are exploring broadly beyond their entry page.

### Time on Page

The average amount of time spent per visitor viewing a particular page on your site.

Unlike visit duration which measures the whole session, time on page is scoped to a single page. It's useful for understanding which specific pages hold attention and which ones people abandon quickly.

To measure this accurately, our script sends an `engagement` event each time a visitor navigates to a new page or switches tabs. This means time spent on a page in an inactive tab is not counted, and visitors who bounce are included rather than ignored.

### Scroll Depth

Measures how far visitors scroll down a webpage. It represents the percentage of a page's total height that visitors have reached on average. You can learn how we calculate it [here](http://plausible.io/docs/scroll-depth).

A scroll depth of 50% means visitors reach halfway down the page on average. If a key call-to-action sits below that point, low scroll depth is a signal to either move it higher or improve the content above it.

### Exit Rate

Shows how often people exit from a specific page. It's calculated as the number of exits divided by the number of total pageviews for that specific page.

A high exit rate on a checkout or signup page is more concerning than a high exit rate on an order confirmation page where leaving is expected.

---

## Sources & Campaigns

### Source

See all referral sources that are sending you traffic. A source is reported when a person clicks through to your site from another site.

### Channels

Channels group your traffic sources into high-level categories such as "Organic Social", "Paid Search" and "Email". Think of Channels as the category and Source as the specific referrer within it. Learn more [here](top-referrers.md).

### Direct / None

Includes visitors who typed your URL into their browser or clicked a link in an email. It also includes visitors who arrived via links shared in messaging apps like WhatsApp, Slack or Discord, since those apps don't pass a referrer header. This is known as dark social and is a common reason for a higher-than-expected Direct/None share. It also includes other visitors who were [missing a referrer header](https://plausible.io/blog/referrer-policy).

### UTM Parameters

To minimize the amount of traffic that falls within the "Direct / None" category, you can add special query parameters (UTMs) to your links. UTMs help you better understand where your traffic is coming from. Plausible Analytics supports `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`.

For example, a link in your email newsletter might look like:

```
https://yoursite.com/blog/post?utm_source=newsletter&utm_medium=email&utm_campaign=april-launch
```

Read more about [tagging your links](top-referrers.md).

### Referrer Drilldown

You can click on any source to drill down and view the individual pages linking to your site and the traffic they've sent over time.

---

## Goals & Conversions

### Goals (or Events)

You can use goals to track desired actions people take on your site. Goals can be based on people [visiting a particular page](pageview-goals.md) or [triggering a particular event](custom-event-goals.md) such as subscribing to a newsletter or signing up for an account. You can even use custom properties to create your own metrics to collect and analyze data that Plausible doesn't automatically track.

### Conversion Rate (or CR)

The percentage of visitors that take a desired action such as subscribing to a newsletter or signing up for an account. Calculated as follows: unique conversions for a goal / unique visitors, where both values depend on the filters applied to the dashboard.

**Typical ranges:** These vary widely by goal type. E-commerce purchase rates often sit at 1-3%. Newsletter signups on content sites typically run 1-5%. Free trial signups for SaaS products often range from 2-10%. These are rough reference points. The most useful comparison is your own rate over time.

### Unique Conversions

When a visitor converts for a particular goal they'll be counted as a unique conversion.

### Total Conversions

If the same goal is completed multiple times by the same visitor, all the completed conversions will be counted within the total conversions.

### Funnels

Funnel analysis lets you follow the visitor journey across multiple steps and see exactly where visitors drop off. You can use pageview goals or custom events as steps, and choose between sequential or strict order mode. See [funnel analysis](funnel-analysis.md) for details.

### Custom Properties (or Custom Dimensions)

You can attach custom data when sending pageviews and custom events in order to create custom metrics. For example, you could track which pricing plan a user signed up for, which author wrote a post that was read, or which product variant was viewed. Learn more [here](/custom-props/introduction).

---

## Revenue

### Total Revenue

The total revenue of orders tracked. This is a part of the [revenue attribution tracking](ecommerce-revenue-tracking.md).

### Average Revenue

The average revenue of orders tracked. This is a part of the [revenue attribution tracking](ecommerce-revenue-tracking.md).

---

## Dimensions

### Locations

Shows the list of countries, regions and cities your visitors are based in.

### Browser

Shows the browsers used by your visitors. We only show the brand of the browser and when you click on the brand you can see the version number too. Metrics are shown as a percentage of all visitors and the total number of unique visitors.

### Operating System

Shows the operating systems used by your visitors. We show the brand of the operating system and when you click on the brand you can see the version numbers too. Metrics are shown as the total number of unique visitors and as a percentage of all visitors.

### Screen Size

Shows the devices used by your visitors. Devices are categorized into desktop, mobile or tablet. This is derived from the User-Agent HTTP header. The full User-Agent is discarded. Metrics are shown as the total number of unique visitors and as a percentage of all visitors.

### Entry Pages

Shows the first page people view on your site. High-traffic entry pages are your most important landing pages since they set the first impression for new visitors.

### Exit Pages

Shows the last page people view on your site. Some pages naturally have high exit rates, such as order confirmation or contact success pages. Others, like pricing or checkout pages, may warrant a closer look if visitors frequently leave from them.

---

## Auto-tracked features

These features are available in Plausible but are not enabled by default. Each requires a short setup step.

### 404 Error Pages

Automatically track the 404 error pages on your site. This helps you find broken links or mistyped URLs that are sending visitors to dead ends. [Follow these steps](error-pages-tracking-404.md) to enable it.

### File Downloads

Automatically track the number of file downloads. [Follow these steps](file-downloads-tracking.md) to enable it.

### Outbound Link Clicks

Automatically track the number of clicks on external links. [Follow these steps](outbound-link-click-tracking.md) to enable it.

### Form Submissions

Automatically track form submissions on your site. All submissions are recorded under a single goal called `Form: Submission`, which you can then break down by page, referrer, location and device. [Follow these steps](form-submissions-tracking.md) to enable it.

---

## Other

### (Not set)

When it is not possible to identify a specific metric such as a browser name, we will group those visits under the `(not set)` entry in our reports. Chances are you won't see this entry in your reports as it stands for a very tiny percentage of all traffic.

---

You can read more about how you can use these metrics to [measure your website's or startup's progress and make better decisions](https://plausible.io/blog/analytics-metrics-definitions).
