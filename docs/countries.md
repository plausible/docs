---
title: Countries
---

Your “Countries” report shows where in the world your visitors are coming from.

## How it works

Plausible servers sit behind Cloudflare, which is a global DNS and CDN provider. Their servers tag every request with a special header called `cf-ipcountry` which contains the ISO3166 country code of the visitor. We store this in our database and discard the ip address of the request.
