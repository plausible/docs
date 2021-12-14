---
title: Locations
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Locations**" report shows where in the world your visitors are coming from. You can click on the "details" button to see the full list of countries ranked by the number of visitors. There you can also see the percentage of your total traffic the individual country stands for.

<img alt="Countries" src={useBaseUrl('img/countries.png')} />

## How it works

Plausible uses the [MaxMind GeoIP database](https://www.maxmind.com/en/home) to determine the visitor country based on their IP address. The IP address itself
is discarded to make sure we do not store any personal data. We never store IP addresses in our database, logs or anywhere on disk at all. Read more in [our data policy](https://plausible.io/data-policy).
