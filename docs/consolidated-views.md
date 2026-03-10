---
title: Consolidated View
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you have multiple websites in your Plausible account, the "**Consolidated View**" gives you an overview of traffic across all of them. This allows you to quickly see the total number of visitors and other key metrics across all your properties in one place.

It looks just like any other Plausible dashboard, but the data includes all your sites instead of just one. This way you can get detailed insights into individual site performance and a holistic view of your whole network too. 

<img alt="Consolidated traffic view" src={useBaseUrl('img/consolidated-view.png')} />

## When a consolidated view is useful

- If you're building multi-tenant applications, offering [a white label analytics dashboard](https://plausible.io/white-label-web-analytics) or a similar service.
  
- If you are managing several brands or domains, you will be able to check total visitors, top sources, and important trends across all your sites at once.

- It helps you oversee a network of blogs or microsites so you can spot which sites grow fastest, which ones slow down, and where to focus content or marketing effort.

- It's easier to share insights with leadership or clients. You can even send a single email report that summarises combined activity for an entire organisation.

## A holistic view of your whole network

Your consolidated view will appear automatically on [the /sites page](landing-page.md) if you have a [team](/users-roles#creating-a-new-team) with at least two sites.

The consolidated view requires no setup, configuration or ongoing maintenance. Your consolidated dashboard automatically includes the stats from all of the sites in your team.

When you add a new site to your team, it will automatically be included in the consolidated view. When you remove a site from your team, all the data from that site including historical stats will automatically be removed from the consolidated view too.

Just like a regular site, a consolidated view has its own settings. You can access the settings directly from the /sites page, or the site picker menu on the top left of the consolidated dashboard.

<img alt="Consolidated traffic view" src={useBaseUrl('img/consolidated-view-settings.png')} />

### Timezone

You can change the timezone used for your consolidated stats. By default, it uses the timezone set for the majority of your sites. It might be helpful to choose a timezone that matches how you normally review performance.

### Goals

To see conversions on your consolidated dashboard, add your [goals](https://plausible.io/docs/goal-conversions) manually, just like you would on a regular site. 

### Custom properties

You can define custom properties that apply across all sites, such as brand, region, or product category. Just like goals, [custom properties](https://plausible.io/docs/custom-props/introduction) need to be added manually too.

### Email reports

You can enable [email reports](https://plausible.io/docs/email-reports) that combine traffic from all your sites.

### Data not included in the consolidated view

- **Imported data** such as stats imported from Google Analytics or other sources is not included. Only data collected natively by Plausible is reflected in your consolidated stats.

- **Revenue goals** are not supported because different sites may track revenue in different currencies making it impossible to accurately combine revenue data across sites.
