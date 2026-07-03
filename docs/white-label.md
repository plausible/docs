---
title: Building a white-label analytics integration
sidebar_label: White-label integration guide
description: "Step-by-step guide to embedding Plausible analytics into your own product. Covers Sites API, embedded dashboards, Stats API and proxy setup for white-label and OEM integrations."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CtaBox from '@site/src/components/CtaBox';

This guide is for teams embedding Plausible into their own product: SaaS platforms that want to give their users an analytics dashboard, agencies building client portals, or any product where analytics is a feature rather than an internal tool.

<CtaBox
  headline="Overview of white-label analytics options"
  link="https://plausible.io/white-label-web-analytics"
  linkText="White-label analytics"
/>

## Before you start: plan requirements

The right plan depends on how automated your integration is:

| What you need | Plan |
|---|---|
| Embed dashboard, Stats API, Consolidated View | Trial or Business |
| Sites API, managed proxy, more than 10 sites | Enterprise |

Start with a [free 30-day trial](https://plausible.io/register) to explore the product and test your integration. If your product needs to create a Plausible site automatically whenever a new customer signs up, you need the Sites API and therefore an Enterprise plan. [Contact us](https://plausible.io/contact) and we can scope the right setup.

---

## Step 1: Provision sites with the Sites API

For automated integrations, the Sites API is where you start. It lets you create a Plausible site for each of your customers programmatically, configure goals and custom events, and generate the shared links you need to embed dashboards.

The domain you register with Plausible does not have to match where the tracking script is installed. Treat it as a site identifier, not a real hostname. This gives you flexibility for multi-tenant setups where the same domain might serve multiple customers.

Key operations for a white-label integration:

- **Create a site**: one API call per customer you onboard
- **Create a shared link**: required to embed the dashboard; can be scoped to a segment
- **Add goals and custom events**: set these up automatically so customers can track conversions without extra configuration
- **Delete a site**: clean up when a customer offboards

See the full [Sites API reference](sites-api.md) for all available operations and authentication details.

---

## Step 2: Choose how to surface analytics to your users

You have two options. Use one or combine them.

### Option A: Embed the dashboard

The fastest integration. Embed the Plausible dashboard directly into your UI as an iframe, with no Plausible branding visible to your customers. You get a complete, production-ready analytics product without building a dashboard yourself.

The embedded dashboard supports light, dark or system themes, a custom background color and custom CSS overrides to match your product's design.

**How it works:**

1. Create a shared link for the site via the Sites API (or manually from the Plausible dashboard)
2. Optionally scope the shared link to a segment if you want to filter what the customer sees
3. Generate the embed code in your site's Visibility settings, or construct the iframe URL directly
4. Embed the iframe in your product

:::info Keep the shared link password field blank
Password-protected shared links cannot be embedded. The browser will refuse to load them in an iframe.
:::

See [embed dashboard](embed-dashboard.md) for full details and CSS customization options.

### Option B: Stats API for a fully custom UI

If you want complete control over the presentation, the Stats API lets you query any metric and build your own interface. This takes more development time but you are not constrained by the Plausible dashboard layout.

You can also combine both options: embed the full dashboard in one view while pulling individual metrics (a single chart, a headline number) into other parts of your UI using the Stats API.

See the [Stats API reference](stats-api.md) for query syntax, available metrics and dimensions.

---

## Step 3: Set up a proxy for better data accuracy

By default, the Plausible script is a third-party request from your customer's domain to Plausible's servers. Ad blockers and privacy-focused browsers can block these requests, which means some traffic goes untracked.

Running a proxy routes the script and the event collection through your own domain as a first-party connection. Ad blockers do not typically block first-party scripts, so you collect more accurate data for your customers.

Two options:

**Self-managed proxy:** You configure a proxy on your infrastructure to forward requests to Plausible. This works at the platform level, so it applies automatically to every customer site you provision.

**Managed proxy:** Plausible handles the proxy for you. No setup or maintenance required on your end. Available on Enterprise plans.

See the [proxy overview](proxy/introduction.md) for setup guides across different hosting environments.

---

## Step 4: Use Consolidated View for your own monitoring

Consolidated View gives you a single dashboard aggregating traffic across all the sites you manage. You can see overall volume and trends across your entire customer base in one place, while individual customer dashboards stay separate.

This is useful for internal monitoring. Your customers only see their own data; you see everything.

See [Consolidated views](consolidated-views.md) for setup.

---

## How a typical integration comes together

1. Customer signs up to your product
2. Your backend calls the Sites API to create a Plausible site and a shared link for that customer
3. Your backend stores the shared link URL
4. When the customer visits the analytics section of your product, you render the embedded dashboard using their shared link (or query the Stats API to render your own UI)
5. The Plausible tracking script is installed on the customer's site, routing through your proxy
6. Your internal monitoring uses the Consolidated View to see activity across all customer sites

---

## More resources

- [Sites API reference](sites-api.md)
- [Embed dashboard](embed-dashboard.md)
- [Stats API reference](stats-api.md)
- [Proxy overview](proxy/introduction.md)
- [Consolidated views](consolidated-views.md)
- [White-label analytics overview](https://plausible.io/white-label-web-analytics)
