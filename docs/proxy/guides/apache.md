---
title: Proxying Plausible through Apache HTTP Server
---

If you're already running Apache HTTP Server as your main web server or reverse
proxy, you can also configure it to proxy your analytics. Start by adjusting your configuration as shown in the next step.

## Step 1: Enable the required modules

```
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod ssl
```

## Step 1: Update your config
```
<VirtualHost *:80>
  ServerName website.com

  ProxyRequests off
  ProxyPreserveHost off
  SSLProxyEngine on

  <Location /js/script.js>
    ProxyPass https://plausible.io/js/script.js
    ProxyPassReverse https://plausible.io/js/script.js
  </Location>

  <Location /api/event>
    ProxyPass https://plausible.io/api/event
    ProxyPassReverse https://plausible.io/api/event
  </Location>

</VirtualHost>
```

In case you host a plausible instance(self-hosting setup) update the `ProxyPass` and `ProxyPassReverse` directives to point to your instance.


## Step 2: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script defer data-api="/api/event" data-domain="website.com" src="/js/script.js"></script>
```
