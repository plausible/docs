---
title: Proxying Plausible through Nginx
---

If you're already running Nginx as your main web server or reverse proxy, you can also configure it to proxy your analytics. Start by adjusting your configuration as shown in the next step.

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

## Step 2: Update your Nginx config

```
# Only needed if you cache the plausible script. Speeds things up.
#
# Note: to use the `proxy_cache` setup, you'll need to make sure the `/var/run/nginx-cache`
# directory exists (e.g. creating it in a build step with `mkdir -p /var/run/nginx-cache`)
# and is readable (including all its parent directories) by your nginx worker user.
#
# To make `/var/run/nginx-cache` persist during reboots of your server
# make sure to run `echo "D /var/run/nginx-cache 0755 root root -" > /usr/lib/tmpfiles.d/nginx-cache.conf`
proxy_cache_path /var/run/nginx-cache/jscache levels=1:2 keys_zone=jscache:100m inactive=30d  use_temp_path=off max_size=100m;

server {

    resolver 9.9.9.9; # Use quad9 DNS resolver. Remove this line if you've already configured a DNS resolver.
    set $plausible_script_url https://plausible.io/js/pa-XXXXX.js; # Change this to path from step 1
    set $plausible_event_url https://plausible.io/api/event;
    ...
    location = /js/script.js {
        proxy_pass $plausible_script_url;
        proxy_set_header Host plausible.io;


        # Tiny, negligible performance improvement. Very optional.
        proxy_buffering on;

        # Cache the script for 5 minutes, as long as plausible.io returns a valid response
        proxy_cache jscache;
        proxy_cache_valid 200 5m;
        proxy_cache_use_stale updating error timeout invalid_header http_500;

        # Optional. Adds a header to tell if you got a cache hit or miss
        add_header X-Cache $upstream_cache_status;
    }

    location = /api/event {
        proxy_pass $plausible_event_url;
        proxy_set_header Host plausible.io;
        proxy_buffering on;
        proxy_http_version 1.1;

        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host  $host;
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
