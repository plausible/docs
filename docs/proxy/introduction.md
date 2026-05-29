---
title: Bypass adblockers with a proxy
description: "Some adblockers block Plausible. A proxy routes analytics through your own domain to capture those visits. Choose between one-click, self-setup and managed options."
---

import CtaBox from '@site/src/components/CtaBox';

Some visitors use adblockers or privacy tools that block analytics scripts. Plausible is blocked far less than Google Analytics. Firefox and Safari do not block it by default, but some blocklist maintainers block all analytics regardless of privacy practices.

A proxy routes the Plausible script through your own domain as a first-party request, making it indistinguishable from your own files. This bypasses most blockers and lets you count visits that would otherwise be missed.

<CtaBox
  headline="Need proxying without managing it yourself? Ask about the managed proxy option"
  link="https://plausible.io/enterprise-web-analytics"
  linkText="Enterprise plan"
  secondaryLink="https://plausible.io/contact"
  secondaryText="Contact us"
/>

## Which option fits you

### No proxy (default)

Run the default script from plausible.io. This is the simplest setup and works well for most sites. Expect some visitors with strict blockers to be missed, typically between 5% and 25% depending on your audience.

**Use this when:** accuracy gaps from adblockers are acceptable for your use case.

[Script installation →](../plausible-script.md)

---

### WordPress one-click proxy

The official WordPress plugin includes a built-in proxy you can enable with a single toggle in your plugin settings. No CNAME records, no server configuration, no maintenance.

**Use this when:** your site runs on WordPress.

[WordPress plugin →](../wordpress-integration.md)

---

### Self-setup proxy

Route requests through your own infrastructure using a Cloudflare Worker, Vercel rewrite, Netlify redirect or reverse proxy. Requires developer access but is free and gives you full control.

**Use this when:** you are not on WordPress, have developer access, and want to manage the proxy yourself.

Guides: [Cloudflare](guides/cloudflare.md) · [Vercel](guides/vercel.md) · [Netlify](guides/netlify.md) · [Nginx](guides/nginx.md) · [Apache](guides/apache.md) · [Caddy](guides/caddy.md) · [Laravel](guides/laravel.md)

---

### Managed proxy (Enterprise)

We handle the proxy for you. You set up a CNAME record pointing to our infrastructure, update the snippet on your site, and we take care of everything else. No ongoing maintenance on your end.

**Use this when:** you are not on WordPress and want the proxy without managing it yourself, or your infrastructure makes self-setup impractical.

Available on [Enterprise plans](https://plausible.io/enterprise-web-analytics). [Contact us to discuss →](https://plausible.io/contact)

---

## A note on IP forwarding

When your proxy forwards requests to Plausible, the real visitor IP must be passed in the `X-Forwarded-For` header. If this header is missing or contains your server's IP instead of the visitor's, Plausible's bot filter will drop the event silently. The API returns HTTP 202 either way.

Most CDN-level proxies such as Cloudflare Workers or Vercel rewrites handle this automatically. If you are writing a custom proxy function, set the header explicitly. See the [Events API reference](../events-api.md#request-headers) for how to verify which IP Plausible is receiving.
