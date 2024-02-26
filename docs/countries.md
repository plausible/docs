---
title: Locations
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Locations**" report shows where in the world your visitors are coming from. You can click on the "**Details**" button to see the full list of countries ranked by the number of visitors. There you can also see the percentage of your total traffic the individual country stands for.

Click on any country to see the list of regions within that country where your visitors are coming from. Click on any region to see the list of cities within that region. You can also use the "**Countries**", "**Regions**" and "**Cities**" tabs on the top of the report.

<img alt="Countries" src={useBaseUrl('img/countries.png')} />

You can also use the "**Filter**" button on the top of your dashboard to segment the traffic by multiple countries, regions or cities at the same time. This allows you to group specific geographical regions and display only that traffic. 

<img alt="Countries - multiple filters" src={useBaseUrl('img/countries-filtering-multiple-filters.png')} />

## How to block traffic from specific countries

You can also use the "**Filter**" button to temporarily filter out traffic from particular countries, regions or cities when doing your reporting and analysis.

If you prefer to permanently block traffic from specific countries from being recorded in your dashboard, you can do so in your site settings: 

* Visit the [site settings area](website-settings.md) for the dashboard in question
* Choose "**Countries**" in the "**Shields**" entry in the left-hand menu
* Then click on the "**Add Country**" button to add a new country to your block list

Once added to the block list, we will start blocking traffic from that specific country within a few minutes.

You can also see the list of all the countries that you're blocking the traffic from at the moment. Click on the "Remove" button next to that country to remove it from the blocklist.

## How location reporting works

Plausible uses the [MaxMind database](https://www.maxmind.com) to determine the visitor location based on the IP address. This lookup happens on our servers and no data is ever sent to MaxMind. The IP address itself is discarded to make sure we don't store any personal data. We never store IP addresses in our database, logs or anywhere on disk at all. Read more in [our data policy](https://plausible.io/data-policy).
