---
title: Proxying Plausible through Nginx
---

## Step 1: In the Nginx config

```
# Only needed if you cache the plausible script. Speeds things up.
proxy_cache_path /var/run/nginx-cache/jscache levels=1:2 keys_zone=jscache:100m inactive=30d  use_temp_path=off max_size=100m;

server {
    ...
    location = /js/script.js {
        # Change this if you use a different variant of the script
        proxy_pass https://plausible.io/js/plausible.js;

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
        proxy_pass https://plausible.io/api/event;
        proxy_buffering on;
        proxy_http_version 1.1;

        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host  $host;
    }
```

## Step 2: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script defer data-api="https://website.com/api/event" data-domain="website.com" src="https://website.com/js/script.js"></script>
```
