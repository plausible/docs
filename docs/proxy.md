---
title: Adblockers and how to proxy our script
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A frequently asked question we get is "why do adblockers block Plausible?". People think that by being privacy-first we would not be put in the same category as Google Analytics, Facebook Pixel and other surveillance capitalism tools.

It's a good question. We're blocked because some blocklist maintainers have taken the stance that they want to block every tracking script and don't want to have the responsibility to judge what's good and what's bad.

We have great respect for open source contributors and blocklist maintainers who in most cases offer their free time and coding skills to do something for the common good. We believe we're on the same side and have started a dialogue hoping that they will have a change of heart.

Site owners feel unfairly targeted and an innocent casualty of this arms race between blocklist maintainers and the adtech industry. Site owners want some data to figure out what's going on and learn what they can do to improve. It's unfortunate for them to lose valuable, privacy-friendly insights that help them create a better user experience.

Plausible is not tracking people in the way that Google Analytics is so it's important not to confuse the two. We've put a lot of effort into giving site owners some actionable data in a [privacy-friendly way](https://plausible.io/privacy-focused-web-analytics). Plausible is simply doing web analytics the way it was at the start before surveillance capitalism became the default business model of the web.

This section has been introduced after hearing from so many site owners who expect privacy-first analytics not to be blocked. We wanted to give a choice to people that use Plausible Analytics. Here it is:

* Are you not concerned about adblockers at all? Simply run our default script. It will be counting all the major browsers fine but the Brave browser will block it by default. It will also be blocked by those visitors that run adblocker extensions that use the EasyPrivacy blocklist such as uBlock Origin. In [our testing](https://markosaric.com/google-analytics-blocking/), between 6% and 26% of people use adblockers all depending on the type of the site and the audience.

* Are you worried about adblockers and want more accurate stats? Proxy our script. This is the option for those that want to avoid the script being blocked by any adblocker including Brave, Firefox when used with uBlock Origin and others. With our step-by-step instructions, the setup is straightforward even for those who don't have any coding experience.

* Proxy instructions for Cloudflare

* Proxy instructions for Netlify

:::note
Are you using a different framework? Please do help us crowdsource the proxy instructions by submitting the step-by-step process for the framework that you are familiar with. We're also looking for help to enable the proxy on the different [community created plugins and extensions](integration-guides.md). Thank you for your contribution!
:::

:::note
Our CNAME custom domains are now in legacy mode. They still work but we recommend those who use the custom domain to proxy the script instead. Custom domain is blocked by Brave and it is also blocked by people that use Firefox with uBlock Origin enabled. In addition to this, adblockers are manually crawling the web for connections and may put your custom domain on their lists if/when discovered which would also block it on Chrome and other browsers.
:::
