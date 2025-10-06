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

## Step 2: Get your snippet

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

## Step 3: Update your config
```
<VirtualHost *:80>
  ServerName website.com

  ProxyRequests off
  ProxyPreserveHost off
  SSLProxyEngine on

  <Location /js/script.js>
    ProxyPass https://plausible.io/js/pa-XXXXX.js
    ProxyPassReverse https://plausible.io/js/pa-XXXXX.js
  </Location>

  <Location /api/event>
    ProxyPass https://plausible.io/api/event
    ProxyPassReverse https://plausible.io/api/event
  </Location>

</VirtualHost>
```

Replace `https://plausible.io/js/pa-XXXXX.js` in this config with script location from step 2.

## Step 4: Adjust your deployed script

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

That's it! You're now using a proxy.
