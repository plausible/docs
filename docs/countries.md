---
title: Locations
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Locations**" report shows where in the world your visitors are coming from. You can click on the "**Details**" button to see the full list of countries ranked by the number of visitors. There you can also see the percentage of your total traffic the individual country stands for.

Click on any country to see the list of regions within that country where your visitors are coming from. Click on any region to see the list of cities within that region. You can also use the "**Countries**", "**Regions**" and "**Cities**" tabs on the top of the report.

<img alt="Countries" src={useBaseUrl('img/countries.png')} />

You can also use the "**Filter**" button on the top of your dashboard to segment the traffic by multiple countries, regions or cities at the same time. This allows you to group specific geographical regions and display only that traffic. You can also filter out traffic from particular countries, regions or cities using the "**Filter**" button.

<img alt="Countries - multiple filters" src={useBaseUrl('img/countries-filtering-multiple-filters.png')} />

## How it works

Plausible uses the [MaxMind database](https://www.maxmind.com) to determine the visitor location based on the IP address. This lookup happens on our servers and no data is ever sent to MaxMind. The IP address itself is discarded to make sure we don't store any personal data. We never store IP addresses in our database, logs or anywhere on disk at all. Read more in [our data policy](https://plausible.io/data-policy).
