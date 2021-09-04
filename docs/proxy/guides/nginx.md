---
title: Proxying Plausible through Nginx
---

If you're already running Nginx as your main web server or reverse
proxy, you can also configure it to proxy your analytics. Start by adjusting your configuration as shown in the next step.

## Step 1: Update your Nginx config

```
# Only needed if you cache the plausible script. Speeds things up.
# Note: to use the `proxy_cache` setup, you'll need to make sure the `/var/run/nginx-cache`
# directory exists (e.g. creating it in a build step with `mkdir -p /var/run/nginx-cache`)
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
### Step 1.5: In case you host a plausible instance(self-hosting setup, doesn't apply to the cloud version)

Add the following configuration instructions at both `location`s
```
    proxy_set_header Host <your>.<plausible>.<instance>;
    proxy_ssl_name <your>.<plausible>.<instance>;
    proxy_ssl_server_name on;
    proxy_ssl_session_reuse off;
```

## Step 2: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script defer data-api="/api/event" data-domain="website.com" src="/js/script.js"></script>
```
