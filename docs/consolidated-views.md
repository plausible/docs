---
title: Consolidated View
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you have multiple websites in your Plausible account, the "**Consolidated View**" gives you an overview of traffic across all of them. This allows you to quickly see the total number of visitors and other key metrics across all your properties in one place.

It looks just like any other Plausible dashboard, but the data includes all your sites instead of just one. 

<img alt="Consolidated traffic view" src={useBaseUrl('img/consolidated-view.png')} />

## When a consolidated view is useful

- If you are managing several brands or domains, you will be able to check total visitors, top sources, and important trends across all your sites at once.

- It helps you oversee a network of blogs or microsites so you can spot which sites grow fastest, which ones slow down, and where to focus content or marketing effort.

- It's easier to share insights with leadership or clients. You can even send a single email report that summarises combined activity for an entire organisation.

## How to enable your consolidated view?

To have a consolidated view, you need to have a [team](/users-roles#creating-a-new-team) set up and at least two sites in that team.

Once your team meets these requirements, your consolidated view will appear automatically on [the /sites page](landing-page.md) (where all your dashboards are listed). You will be able to open the consolidated view dashboard from here.

## Configuration

Just like a regular site, a consolidated view has its own settings. You can access the settings directly from the [All Sites](https://plausible.io/sites) page, or the site picker menu on the top left of the consolidated dashboard.

<img alt="Consolidated traffic view" src={useBaseUrl('img/consolidated-view-settings.png')} />

#### Timezone

You can change the timezone used for your consolidated stats. By default, it uses the timezone set for the majority of your sites. It might be helpful to choose a timezone that matches how you normally review performance.

#### Goals

To see conversions on your consolidated dashboard, add your [goals](https://plausible.io/docs/goal-conversions) manually, just like you would on a regular site.

#### Custom properties

You can define custom properties that apply across all sites, such as brand, region, or product category. Just like goals, [custom properties](https://plausible.io/docs/custom-props/introduction) need to be added manually too.

#### Email reports

You can enable [email reports](https://plausible.io/docs/email-reports) that combine traffic from all your sites.

## Limitations

#### Imported data

Currently, consolidated views do not include any imported data.

#### Revenue goals

Revenue goals are currently not supported in consolidated views.
