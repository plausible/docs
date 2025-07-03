---
title: Proxying Plausible through Caddy
---

If you're already running Caddy as your main web server or reverse proxy, you can also configure it to proxy your analytics. Start by adjusting your configuration as shown in the next step.

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

## Step 1: Update your Caddyfile

Add the following to your Caddyfile:

```
@plausible path /js/script.js /api/event
handle @plausible {
	# Change this if you use a different variant of the script
	# e.g. rewrite /js/script.js /js/script.outbound-links.js
	rewrite /js/script.js /js/script.js
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
