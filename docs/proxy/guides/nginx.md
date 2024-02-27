---
title: Proxying Plausible through Nginx
---

If you're already running Nginx as your main web server or reverse
proxy, you can also configure it to proxy your analytics. Start by adjusting your configuration as shown in the next step.

## Step 1: Update your Nginx config

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
    set $plausible_script_url https://plausible.io/js/script.js; # Change this if you use a different variant of the script
    set $plausible_event_url https://plausible.io/api/event;
    ...
    location = /js/script.js {
        proxy_pass $plausible_script_url;
        proxy_set_header Host plausible.io;


        # Tiny, negligible performance improvement. Very optional.
        proxy_buffering on;

        # Cache the script for 6 hours, as long as plausible.io returns a valid response
        proxy_cache jscache;
        proxy_cache_valid 200 6h;
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

## Step 2: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script defer data-api="/api/event" data-domain="website.com" src="/js/script.js"></script>
```
