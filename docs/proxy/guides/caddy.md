# Caddy

```
@plausible path /js/script.js /api/event
handle @plausible {
	rewrite /js/script.js /js/plausible.outbound-links.js
	reverse_proxy https://plausible.io {
		header_up Host {http.reverse_proxy.upstream.hostport}
	}
}
```

Courtesy: [Francis Lavoie](https://caddy.community/u/francislavoie/summary) (@francislavoie) on a [Caddy Community post](https://caddy.community/t/how-to-proxy-plausible-analytics/12679/5).
