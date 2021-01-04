---
title: Countries
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Countries**" report shows where in the world your visitors are coming from.

<img alt="Countries" src={useBaseUrl('img/countries.png')} />

## How it works

Plausible uses the [MaxMind GeoIP database](https://www.maxmind.com/en/home) to determine the visitor country based on their IP address. The IP address itself
is discarded to make sure we do not store any personal data.
