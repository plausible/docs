---
title: Proxying Plausible through Caddy
---

If you're already running Caddy as your main web server or reverse
proxy, you can also configure it to proxy your analytics. Start by adjusting your
configuration as shown in the next step.

## Step 1: Update your Caddyfile

Add the following block to your Caddyfile

```
@plausible path /js/script.js /api/event
handle @plausible {
  # Change this if you use a different variant of the script
  # e.g. rewrite /js/script.js /js/plausible.outbound-links.js
  rewrite /js/script.js /js/plausible.js
  reverse_proxy https://plausible.io {
    header_up Host {http.reverse_proxy.upstream.hostport}
  }
}
```

## Step 2: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script defer data-api="/api/event" data-domain="website.com" src="/js/script.js"></script>
```

Courtesy: [Francis Lavoie](https://caddy.community/u/francislavoie/summary) (@francislavoie) on a [Caddy Community post](https://caddy.community/t/how-to-proxy-plausible-analytics/12679/5).
