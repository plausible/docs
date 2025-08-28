---
title: Proxying Plausible through Caddy
---

If you're already running Caddy as your main web server or reverse proxy, you can also configure it to proxy your analytics. Start by adjusting your configuration as shown in the next step.

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::


## Step 1: Get your snippet

In the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md) you can see
the snippet specific for your site. It will look similar to the following:

```html
<script async src="https://plausible.io/js/pa-XXXXX.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>
```

Your snippet will have a different script location than the example above. Look for the `https://plausible.io/js/pa-XXXXX.js` part in your snippet - that's the personalized location for your site's script. Mark it down for subsequent steps.

## Step 2: Update your Caddyfile

Add the following to your Caddyfile:

```
@plausible path /js/script.js /api/event
handle @plausible {
	# Use path from step 1
	rewrite /js/script.js /js/pa-XXXXX.js
	reverse_proxy https://plausible.io {
		header_up Host {http.reverse_proxy.upstream.hostport}
	}
}
```

## Step 3: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script async src="/js/script.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init({
    endpoint: "/api/event"
  })
</script>
```

Courtesy: [Francis Lavoie](https://caddy.community/u/francislavoie/summary) (@francislavoie) on a [Caddy Community post](https://caddy.community/t/how-to-proxy-plausible-analytics/12679/5).
