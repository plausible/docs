---
displayed_sidebar: someSidebar
title: Use Plausible alongside a consent management platform
sidebar_label: Consent management platforms
description: "Plausible doesn't use cookies, so it can run for every visitor while your consent banner keeps other tools blocked. Here's how to set up Cookiebot, Usercentrics, OneTrust, Cookie Information and Google Tag Manager."
---

Plausible doesn't use cookies, doesn't store anything on your visitors' devices and doesn't collect personal data. That means there's nothing for your visitors to consent to, and Plausible can run outside your cookie banner. Your legal team may confirm that consent is not required. See [our data policy](https://plausible.io/data-policy) and [this legal assessment](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) for the details.

Many sites still need a consent management platform (CMP) for other things they embed, such as YouTube videos, social media widgets or ad pixels. You can keep your CMP for those and let Plausible count every visitor. The goal is simple: your CMP keeps blocking the tools that need consent, but doesn't block the Plausible script.

## Check whether your CMP blocks Plausible today

Many CMPs scan your site and automatically block third-party scripts until a visitor accepts. Some treat any analytics script as a "Statistics" or "Performance" tool, including ones that don't use cookies.

To check, open your site in a private browser window and don't touch the banner. Then look at your Plausible dashboard. If your own visit shows up in the realtime view, Plausible isn't blocked and you don't need to change anything. If it doesn't, follow the steps for your CMP below. You can also use our [manual verification steps](troubleshoot-integration.md#how-to-manually-check-your-integration).

Make sure you only exclude the Plausible script. Everything else your CMP blocks should stay blocked until visitors consent.

## Cookiebot

When Cookiebot runs with automatic cookie blocking, add the `data-cookieconsent="ignore"` attribute to the Plausible script tag:

```html
<script data-cookieconsent="ignore" async src="https://plausible.io/js/pa-XXXXX.js"></script>
```

If your visit still doesn't show up in the realtime view after that, add the same attribute to the short inline script that follows it in your snippet too. Cookiebot advises against adding it to scripts it wouldn't block, so add it there only when needed.

Use the script URL from your own snippet (**Site Settings → General → Site Installation**). In Cookiebot's manual blocking mode, scripts only wait for consent when you mark them, so leave the Plausible snippet as it is. More in [Cookiebot's guide](https://support.cookiebot.com/hc/en-us/articles/360009063660).

## Usercentrics

Usercentrics auto-blocking can be told to let a script load straight away in any of these ways:

* Add the `data-uc-allowed` attribute to the Plausible script tag: `<script data-uc-allowed async src="https://plausible.io/js/pa-XXXXX.js"></script>`
* In the Usercentrics Admin Interface, mark the Plausible service as **Essential** under **Data Processing Services**
* Add `plausible.io` to the **Whitelist** under **Implementation → Script Tag → Blocking third-party script**

Click **Save Draft** and then **Publish** so the change reaches your live site. More in [Usercentrics' guide](https://support.usercentrics.com/hc/en-us/articles/27378747068700-Essential-Scripts-and-Whitelisted-Domains-Load-Immediately-Without-Delay).

## OneTrust

OneTrust auto-blocking only blocks scripts that are linked to a non-essential category (Functional, Performance, Targeting, Social Media or a custom category). If your cookie scan has assigned the Plausible script to one of those, categorise it as **Strictly Necessary** or remove its source URL from auto-blocking. More in [OneTrust's auto-blocking guide](https://my.onetrust.com/articles/it/Knowledge/UUID-cdb2fcad-1640-fdbd-e432-73c5536f0bbd).

## Cookie Information

Cookie Information holds scripts back when you mark them with its `data-consent-src` and `data-category-consent` attributes. Leave these attributes off the Plausible snippet so it loads for every visitor, and keep them on the embeds and tools that need consent. More in [Cookie Information's guide](https://support.cookieinformation.com/?p=1108).

## Google Tag Manager

If you load Plausible through [Google Tag Manager](google-tag-manager-integration.md), open your Plausible tag and go to **Advanced Settings → Consent Settings**. Under **Additional Consent Checks**, choose **No additional consent required** and keep the **All Pages** trigger. Don't add a consent trigger or a CMP event to the Plausible tag. Your other tags keep their own consent settings. More in [Google's guide to consent settings](https://support.google.com/tagmanager/answer/10718549).

## Other CMPs

The setup is similar in most other tools. Look in your CMP's documentation for how to exclude a script from automatic blocking, whitelist a domain or mark a service as essential, and apply it to the Plausible script only. If you [proxy Plausible](/proxy/introduction) through your own domain, use that script URL and domain instead of `plausible.io`.

## Do you still need a banner?

If Plausible is the only tool on your site, you may not need a consent banner at all. Our guide on [cookie consent banners](https://plausible.io/blog/cookie-consent-banners) explains how to decide.
