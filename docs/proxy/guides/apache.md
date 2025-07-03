---
title: Proxying Plausible through Apache HTTP Server
---

If you're already running Apache HTTP Server as your main web server or reverse proxy, you can also configure it to proxy your analytics. Start by adjusting your configuration as shown in the next step.

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

## Step 1: Enable the required modules

```
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod ssl
```

## Step 2: Update your config
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

## Step 3: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script defer data-api="/api/event" data-domain="website.com" src="/js/script.js"></script>
```

That's it! You're now using a proxy.

## Alternative reverse proxy written in PHP for shared hosting on Apache

As an alternative to the above, there's also a reverse proxy for Plausible Analytics written in PHP for shared hostings on Apache. [See details here](https://github.com/Neoflow/ReverseProxy-PlausibleAnalytics).
