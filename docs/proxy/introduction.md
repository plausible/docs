---
title: Adblockers and using a proxy for analytics
---

A frequently asked question we get is "why do adblockers block Plausible?". People think that by being privacy-first we would not be put in the same category as Google Analytics, Facebook Pixel and other surveillance capitalism tools.

It's a good question. We're not blocked to the same extent as Google Analytics (neither Firefox nor Safari blocks Plausible) but we're blocked by some blocklist maintainers who have taken the stance that they want to block every tracking script and don't want to have the responsibility to judge what's good and what's bad.

We have great respect for open source contributors and blocklist maintainers who in most cases offer their free time and coding skills to do something for the common good. We believe we're on the same side and have started a dialogue hoping that they will have a change of heart.

## Giving site owners a choice

Site owners feel unfairly targeted and an innocent casualty of this arms race between blocklist maintainers and the adtech industry. Site owners want some data to figure out what's going on and learn what they can do to improve. It's unfortunate for them to lose valuable, privacy-friendly insights that help them create a better user experience.

Plausible is not tracking people in the way that Google Analytics is so it's important not to confuse the two. We've put a lot of effort into giving site owners some actionable data in a [privacy-friendly way](https://plausible.io/privacy-focused-web-analytics). Plausible is simply doing web analytics the way it was at the start before surveillance capitalism became the default business model of the web:

* No cookies and other persistent identifiers
* No connection to the adtech and surveillance capitalism
* No personal data is collected and all stats are in aggregate only
* No cross-site or cross-device tracking
* You 100% own your website data and it is not sent to, shared with or sold to any third-parties
* Fully open source web analytics software that can be self-hosted
* You can see [how the dashboard looks like](https://plausible.io/plausible.io)

## Options for dealing with missing data as a site owner

This section has been introduced after hearing from so many site owners who expect privacy-first analytics not to be blocked. We wanted to give a choice to people that use Plausible Analytics.

### Not concerned about missing data?

Simply run our default script. The easiest way to get started with Plausible Analytics is to install the script from our main domain as follows:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

This is the simplest way to install Plausible Analytics but it will also be blocked by a portion of your visitors. In [our testing](https://markosaric.com/google-analytics-blocking/), between 6% and 26% of people block scripts all depending on the type of the site and the audience. In more extreme cases, with very tech-savvy referral sources these numbers can get [up to 60%](https://plausible.io/blog/google-analytics-adblockers-missing-data).

### Are you concerned about missing data?

Proxy our script. This is the option for those who want to get more accurate stats. With our step-by-step instructions, the setup is straightforward even for those who don't have any coding experience.

A proxy basically maps certain URLs from your domain to the Plausible domain:

```
https://<yourdomain.com>/js/script.js -> https://plausible.io/js/plausible.js
https://<yourdomain.com>/api/event    -> https://plausible.io/api/event
```

When the browser request a file at `https://yourdomain.com/js/script.js` it will actually be fetched from `https://plausible.io/js/plausible.js`. The analytics will work exactly the same but the script will be served without being flagged.

There are many ways you can proxy requests to Plausible depending on your hosting situation. We've divided our guides to *standalone* and *integrated* proxies. A standalone proxy can be set up on its own and it does not matter what hosting provider or tech stack you are using. Integrated proxy setups are dependent on how you've deployed your app.

Standalone proxy setups:
* [Cloudflare Workers](/docs/proxy/guides/cloudflare)
* [CloudFront](/docs/proxy/guides/cloudfront)

Integrated proxy setups:
* [Netlify](/docs/proxy/guides/netlify)
* [Next.JS / Vercel](/docs/proxy/guides/nextjs)
* [Nginx](/docs/proxy/guides/nginx)
* [Caddy](/docs/proxy/guides/caddy)
* [Shared hosting on Apache](https://github.com/Neoflow/ReverseProxy-PlausibleAnalytics)

Events API as a server side alternative:
* [How to send events directly to our API](/docs/events-api)

NPM package as another alternative:
* [NPM standalone package](https://github.com/plausible/plausible-tracker)

:::note
Are you using something else? Please do help us crowdsource the proxy instructions by [submitting the step-by-step process](https://github.com/plausible/docs/) for the framework that you are familiar with. We're also looking for help to enable the proxy on the different [community-built plugins and extensions](integration-guides.md). Thanks for your contribution!
:::
