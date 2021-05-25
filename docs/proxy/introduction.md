---
title: Adblockers and using a proxy for analytics
---

A frequently asked question we get is "why do adblockers block Plausible?". People think that by being privacy-first we would not be put in the same category as Google Analytics, Facebook Pixel and other surveillance capitalism tools.

It's a good question. We're not blocked to the same extent as Google Analytics (neither Firefox nor Safari blocks Plausible) but we're blocked by some blocklist maintainers who have taken the stance that they want to block every tracking script and don't want to have the responsibility to judge what's good and what's bad.

We have great respect for open source contributors and blocklist maintainers who in most cases offer their free time and coding skills to do something for the common good. We believe we're on the same side and have started a dialogue hoping that they will have a change of heart.

## Giving site owners a choice

Site owners feel unfairly targeted and an innocent casualty of this arms race between blocklist maintainers and the adtech industry. Site owners want some data to figure out what's going on and learn what they can do to improve. It's unfortunate for them to lose valuable, privacy-friendly insights that help them create a better user experience.

Plausible is not tracking people in the way that Google Analytics is so it's important not to confuse the two. We've put a lot of effort into giving site owners some actionable data in a [privacy-friendly way](https://plausible.io/privacy-focused-web-analytics). Plausible is simply doing web analytics the way it was at the start before surveillance capitalism became the default business model of the web.

This section has been introduced after hearing from so many site owners who expect privacy-first analytics not to be blocked. We wanted to give a choice to people that use Plausible Analytics.

## Options for dealing with adblockers as a site owner

### Not concerned about adblockers?

Simply run our default script. The easiest way to get started with Plausible Analytics is to install the script from our main domain as follows:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

This is the simplest way to install Plausible Analytics but it will also be blocked by a significant portion of your visitors. It will be counting all the major browsers fine but the Brave browser will block it by default. It will also be blocked by those visitors that run adblocker extensions that use the EasyPrivacy blocklist such as uBlock Origin.

In [our testing](https://markosaric.com/google-analytics-blocking/), between 6% and 26% of people use adblockers all depending on the type of the site and the audience.

### Are you worried about adblockers? Here's how proxying works

Proxy our script. This is the option for those that want to avoid the script being blocked by any adblocker including Brave browser, uBlock Origin and others. With our step-by-step instructions, the setup is straightforward even for those who don't have any coding experience.

A proxy basically maps certain URLs from your domain to the Plausible domain:

```
https://<yourdomain.com>/js/script.js -> https://plausible.io/js/plausible.js
https://<yourdomain.com>/api/event    -> https://plausible.io/api/event
```

When the browser request a file at `https://yourdomain.com/js/script.js` it will actually be fetched from `https://plausible.io/js/plausible.js`. The analytics will work exactly the same but since your domain most likely is not on any adblocker's list, it will not be blocked by any visitors.

There are many ways you can proxy requests to Plausible depending on your hosting situation. We've divided our guides to *standalone* and *integrated* proxies. A standalone proxy can be set up on its own and it does not matter what hosting provider or tech stack you are using. Integrated proxy setups are dependent on how you've deployed your app.

Standalone proxy setups:
* [Cloudflare Workers](/docs/proxy/guides/cloudflare)

Integrated proxy setups:
* [Netlify](/docs/proxy/guides/netlify)

:::note
Are you using something else? Please do help us crowdsource the proxy instructions by [submitting the step-by-step process](https://github.com/plausible/docs/) for the framework that you are familiar with. We're also looking for help to enable the proxy on the different [community-built plugins and extensions](integration-guides.md). Thanks for your contribution!
:::

:::note
Our CNAME custom domains are deprecated. They still work but we recommend those who use the custom domain to proxy the script instead. Custom domain is blocked by Brave and by people that use Firefox with uBlock Origin enabled. In addition to this, adblockers are manually crawling the web for connections and may put your custom domain on their lists if/when discovered which would also block it on Chrome and other browsers.
:::
