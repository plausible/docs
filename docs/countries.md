---
title: Locations
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Locations**" report shows where in the world your visitors are coming from. You can click on the "details" button to see the full list of countries ranked by the number of visitors. There you can also see the percentage of your total traffic the individual country stands for.

Click on any country to see the list of regions within that country where your visitors are coming from. Click on any region to see the list of cities within that region. You can also use the "Countries", "Regions" and "Cities" tabs on the top of the report.

<img alt="Countries" src={useBaseUrl('img/countries.png')} />

## How it works

Plausible uses the [DB-IP database](https://db-ip.com/) to determine the visitor location based on their IP address. The IP address itself
is discarded to make sure we do not store any personal data. We never store IP addresses in our database, logs or anywhere on disk at all. Read more in [our data policy](https://plausible.io/data-policy).
