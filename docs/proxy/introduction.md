---
title: Adblockers and using a proxy for analytics
---

A frequently asked question we get is, "why do adblockers block Plausible?". It's assumed that by being privacy-first, we would not be placed in the same category as Google Analytics, Facebook Pixel, or other _surveillance capitalism_ tools.

It's a good question. We're not blocked to the same extent as Google Analytics (neither Firefox nor Safari blocks Plausible), but we're blocked by some blocklist maintainers who have taken the stance that they want to block every tracking script and don't want to have the responsibility to judge what's good and what's bad.

We have great respect for open source contributors and blocklist maintainers who usually offer their free time and coding skills to do something for the common good. We believe we're on the same side and have started a dialogue hoping that they will have a change of heart.

## Giving site owners a choice

Site owners feel unfairly targeted and an innocent casualty of this arms race between blocklist maintainers and the adtech industry. Site owners want some data to figure out what's going on and learn what they can do to improve. It's unfortunate for them to lose valuable, privacy-friendly insights that help them create a better user experience.

Plausible isn't tracking people in the way that Google Analytics is, so it's important not to confuse the two. We've put a lot of effort into giving site owners some actionable data in a [privacy-friendly way](https://plausible.io/privacy-focused-web-analytics). Plausible is simply doing web analytics the way it was at the start before surveillance capitalism became the default business model of the web:

* No cookies and other persistent identifiers.
* No connection to the adtech, and surveillance capitalism.
* No personal data is collected, and all stats are in aggregate only.
* No cross-site or cross-device tracking.
* You 100% own your website data, and it isn't sent to, shared with or sold to any third-parties.
* Open source web analytics software that can be self-hosted.
* You can see [how the dashboard looks like](https://plausible.io/plausible.io).

## Options for dealing with missing data as a site owner

This section has been introduced after hearing from so many site owners who expect privacy-first analytics not to be blocked. We wanted to give a choice to people that use Plausible Analytics.

### Not concerned about missing data?

Simply run our default script. The easiest way to get started with Plausible Analytics is to [install the script](/docs/plausible-script.md) from our main domain.

This is the simplest way to install Plausible Analytics but it will also be blocked by a portion of your visitors. In [our testing](https://markosaric.com/google-analytics-blocking/), between 6% and 26% of people block scripts all depending on the type of the site and the audience. In more extreme cases, with very tech-savvy referral sources these numbers can get [up to 60%](https://plausible.io/blog/google-analytics-adblockers-missing-data).

### Are you concerned about missing data?

Proxy our script. This is the option for those who want to get more accurate stats. A proxy basically maps certain URLs from your domain to the Plausible domain:

```
https://<yourdomain.com>/js/script.js -> https://plausible.io/js/pa-XXXX.js
https://<yourdomain.com>/api/event    -> https://plausible.io/api/event
```

When the browser requests a file at `https://yourdomain.com/js/script.js` it will actually be fetched from `https://plausible.io/js/pa-XXXXX.js`. The analytics will work exactly the same but the script will be served without being flagged.

In this case, `/js/pa-XXXXX.js` is the script location specific for your site. You can find it in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

:::tip Using WordPress?
The quickest way to enable a proxy is to use our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin)
:::

## How to proxy requests to Plausible

You can proxy requests to Plausible in several ways depending on your setup. If you'd rather not handle it yourself, we also offer a managed proxy option.

### Managed proxy

Don't want to manage your own proxy? We can handle it for you. Our managed proxy lets you send analytics through your own domain name as a first-party connection. This helps bypass adblockers and count more traffic without any setup or maintenance on your end.

All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else.

Managed proxy is available on our [Enterprise plans](https://plausible.io/enterprise-web-analytics). [Contact us for details](https://plausible.io/contact).

### Manual proxy

* [Cloudflare](/docs/proxy/guides/cloudflare)
* [Vercel](/docs/proxy/guides/vercel)
* [Netlify](/docs/proxy/guides/netlify)
* [Fresh](/docs/proxy/guides/fresh)
* [Nginx](/docs/proxy/guides/nginx)
* [Apache](/docs/proxy/guides/apache)
* [Caddy](/docs/proxy/guides/caddy)
* [Laravel](/docs/proxy/guides/laravel)
* [Send events directly to our API](/docs/events-api)
