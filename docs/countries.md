---
title: Top countries, regions and cities
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Locations**" report shows where in the world your visitors are coming from. You can click the "**Details**" button to see the full list ranked by the number of visitors. There you can also see the percentage of your total traffic the individual location stands for. Click on any such metric heading to sort and arrange your data in ascending or descending order. 

Click on any country to see the list of regions within that country where your visitors are coming from. Click on any region to see the list of cities within that region. You can also use the "**Countries**", "**Regions**" and "**Cities**" tabs on the top of the report.

## Visitors using VPNs and similar services 

To improve the location accuracy, visitors using VPN services or the Tor browser are grouped under the "**Anonymous VPN Service**" entry in the "**Countries**" tab. This method reduces the noise caused by analytics tools recording VPN server locations instead of actual user locations, while also making it easier to view the percentage of visitors using VPNs.
 
You can use the "**Filter**" button on the top of your dashboard to segment the traffic by multiple countries, regions or cities at the same time. This allows you to group specific geographical regions and display only that traffic.

<img alt="Countries - multiple filters" src={useBaseUrl('img/countries-filtering-multiple-filters.png')} />

## How to block traffic from specific countries

You can use [the "**Filter**" button](filters-segments.md) to temporarily filter out traffic from particular countries, regions or cities when doing your reporting and analysis.

If you prefer to permanently block traffic from specific countries from being recorded in your dashboard, you can do so in your site settings: 

* Visit the [site settings area](website-settings.md) for the dashboard in question
* Choose "**Countries**" in the "**Shields**" entry in the left-hand menu
* Then click on the "**Add Country**" button to add a new country to your block list

<img alt="Block countries" src={useBaseUrl('img/block-countries.png')} />

Once added to the block list, we will start blocking traffic from that specific country within a few minutes. You can block up to 30 different countries. 

You can see the list of all the countries that you're blocking the traffic from. Click on the "Remove" button next to that country to remove it from the blocklist.

## How location reporting works

Plausible uses the [MaxMind database](https://www.maxmind.com) to determine the visitor location based on the IP address. This lookup happens on our servers and no data is ever sent to MaxMind. The IP address itself is discarded to make sure we don't store any personal data. We never store IP addresses in our database, logs or anywhere on disk at all. Read more in [our data policy](https://plausible.io/data-policy).
