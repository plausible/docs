---
title: Introduction to goal conversions and behavior analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Adding or searching for Goals" src={useBaseUrl('img/goal-display.png')} />

Goals allow you to track actions that you want your visitors to take on your site. Actions such as signing up to a newsletter, clicking on a "**Download**" button, registering for a trial account, purchasing a product, clicking on an external link, downloading a file or completing a checkout form of an ecommerce store.

By setting up custom events or pageviews as goals, you can track the number of conversions, conversion rate, referrer sources and entry pages that are driving conversions and the top pages that people convert on. You can also follow the visitor journey using funnels. For definitions of conversion rate, unique conversions and total conversions, see the [metrics definitions page](metrics-definitions.md).

Once a goal is configured, it appears in the "**Goals**" section of your dashboard after the first conversion is recorded. Then you can click on the particular goal to filter your dashboard by it and get all the insights on the traffic that has converted on that specific goal.

There are two core goal types: **pageview goals** (no code changes required) and **custom event goals** (require a code snippet or script). Everything else below builds on top of one of those two.

Plausible supports the following goal types:

<table>
  <thead>
    <tr>
      <th style={{width: ‘220px’}}>Goal</th>
      <th>Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="pageview-goals">Pageview goals</a></td>
      <td>Measure how many people visit a specific page or section of your site. Use these to track the "thank you" page or the order confirmation page. Since pageviews are collected automatically, you don’t need to change your website’s code to measure pageview goals. This makes them the easiest way to start tracking conversions on your site</td>
    </tr>
    <tr>
      <td><a href="custom-event-goals">Custom event goals</a></td>
      <td>Measure button clicks, purchases, subscriptions, clicks on video or audio elements and pretty much any other action that you wish</td>
    </tr>
    <tr>
      <td><a href="funnel-analysis">Funnel analysis</a></td>
      <td>Follow the visitor journey from a landing page to a conversion in order to uncover possible issues, optimize your site and increase the conversion rate</td>
    </tr>
    <tr>
      <td><a href="ecommerce-revenue-tracking">Ecommerce revenue tracking</a></td>
      <td>Assign dynamic monetary values to goals and custom events to track revenue attribution</td>
    </tr>
    <tr>
      <td><a href="/custom-props/introduction">Custom properties</a></td>
      <td>Send custom data with pageviews and custom events to create custom metrics</td>
    </tr>
    <tr>
      <td><a href="outbound-link-click-tracking">Outbound link clicks</a></td>
      <td>Automatically measure clicks on external links</td>
    </tr>
    <tr>
      <td><a href="form-submissions-tracking">Form submissions</a></td>
      <td>Automatically measure when a visitor completes a form</td>
    </tr>
    <tr>
      <td><a href="file-downloads-tracking">File downloads</a></td>
      <td>Automatically measure when a visitor clicks a link leading to a file</td>
    </tr>
    <tr>
      <td><a href="error-pages-tracking-404">404 error pages</a></td>
      <td>Automatically measure page not found errors</td>
    </tr>
    <tr>
      <td><a href="custom-automatic-link-tracking">Pretty URLs clicks</a></td>
      <td>Automatically track clicks on cloaked affiliate links and other pretty URLs</td>
    </tr>
  </tbody>
</table>
