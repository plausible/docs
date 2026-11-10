---
title: Troubleshooting Plausible Analytics
sidebar_label: Troubleshooting
description: "Troubleshoot your Plausible Analytics installation. Diagnose why visits aren't being recorded, fix common snippet errors and confirm real-time data is flowing."
---

<head>
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is Plausible not recording any data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common causes are: the snippet has not been added to the site, the cache has not been cleared after adding the snippet, or a performance optimization plugin or ad blocker is interfering with the script. Use the built-in testing tool from your site settings to diagnose the issue."
          }
        },
        {
          "@type": "Question",
          "name": "Why are my own visits not showing in the dashboard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your visits may be blocked by a browser extension, ad blocker or VPN. The WordPress plugin also excludes logged-in admin visits by default. You can whitelist the Plausible script in your ad blocker settings, or set up a proxy to capture visits from users with blockers."
          }
        },
        {
          "@type": "Question",
          "name": "Why did tracking stop working after it was working before?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common causes are a stale cache after a snippet or plugin update, a performance optimization plugin altering the script, or a consent banner blocking the script from loading. Clear your cache and check your browser's developer tools Console and Network tabs for errors."
          }
        },
        {
          "@type": "Question",
          "name": "Why are some visitors not being counted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some visitors use browser extensions, privacy-focused browsers, network-level blockers such as Pi-hole, or corporate firewalls that block analytics scripts. You can accept this as a small share of traffic or set up a proxy to serve the Plausible script as a first-party request from your own domain."
          }
        },
        {
          "@type": "Question",
          "name": "Why are my Plausible numbers lower than Google Analytics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plausible and Google Analytics measure differently by design. Plausible counts unique visitors by IP and user agent without cookies, applies aggressive bot filtering, and is not affected by cookie consent losses. A 10-20% difference is normal. Larger gaps usually reflect GA4 counting bot traffic or consent-bypassed sessions that Plausible correctly excludes."
          }
        }
      ]
    }
  `}</script>
</head>

import useBaseUrl from '@docusaurus/useBaseUrl';

After you've [added the Plausible snippet to your site](plausible-script.md), the dashboard starts displaying stats in real-time as soon as the first visit is counted. There are no delays with data in Plausible.

After you add the snippet, your dashboard opens immediately. A banner at the top shows the progress and result of the installation check. Plausible first checks whether it can reach your site and detect the installation, then confirms if visits are being counted correctly.

Our testing tool launches automatically in the backgroundto send test traffic to your site. This test traffic won't be recorded in your dashboard. When the check finishes, the banner displays a status message indicating whether Plausible has been installed correctly.

If the check fails, the banner explains the problem and lets you check again, try another URL, review the installation instructions or verify the installation manually.

<div class="browser">
    <img alt="Successful installation status in the dashboard banner" src={useBaseUrl('img/v2/integration-verification-tool.webp')} />
</div>

Real visits appear in your stats as soon as they are recorded.

The testing tool does not affect your tracking. If real visits are being recorded correctly, you can safely ignore any error or warning the tool shows.

Have you made changes to your integration? You can launch our testing tool at any time from your [site settings](website-settings.md) to verify whether the changes you made have worked.

---

## Quick checklist

Before diving deeper, make sure you have done each of these:

- Added the Plausible snippet to your site's `<head>`
- Cleared the cache after adding or changing the snippet
- Confirmed no plugin (WP Rocket, a consent banner) is blocking or altering the script
- Confirmed there is only one Plausible snippet on each page
- Confirmed you are not testing on localhost

---

## What are you seeing?

Find your symptom and jump straight to the right section:

- **[Installation check is still running or shows an error](#no-data-recorded-yet)**: site unreachable, snippet not loading, cache issue or incorrect URL
- **[Tracking was working, then it stopped](#tracking-stopped-working)**: cache, plugin update or script change
- **[WordPress plugin issues](wordpress-integration.md#troubleshooting)**: admin exclusion, proxy not working, cache conflict or invalid/unresponsive token link
- **[My own visits are not showing](#my-own-visits-are-not-showing)**: ad blocker, VPN or WordPress admin exclusion
- **[Some visitors are not being counted](#some-visitors-are-not-being-counted)**: browser extensions or network-level blockers
- **[Numbers seem lower than expected](#numbers-seem-lower-than-expected)**: methodology differences, bot filtering or blockers
- **[UTM parameters not appearing in Campaigns](top-referrers.md#utm-parameters-not-appearing-in-campaigns)**: active session when UTM link was visited
- **[Referral source is missing](top-referrers.md#no-need-to-manually-exclude-unwanted-sources)**: session attribution logic
- **[Events API events not appearing](events-api.md#debugging)**: bot filtering or misconfigured IP forwarding

---

## No data recorded yet

### Have you added the snippet?

We've put together [many integration guides](integration-guides.md) covering WordPress, Ghost and other popular platforms. Check that the snippet is in the `<head>` of every page you want to track.

### Have you cleared your cache? {#have-you-cleared-the-cache-of-your-site}

If you use caching, visitors may still see an older version of your site without the snippet. Purge your cache after adding or changing the snippet.

### Are you using Google Tag Manager?

Follow [our GTM guide](google-tag-manager-integration.md) for the correct setup using our official template. It has its own [troubleshooting section](google-tag-manager-integration.md#troubleshooting).

### Are you using the NPM package?

The NPM package doesn't read your site settings. Outbound links, file downloads and form submissions only work once you turn them on in `init`. `init` also has to run in the browser, not during server-side rendering. [See the NPM package guide](npm-package.md).

### Does your site use a Content Security Policy? {#does-your-site-use-a-content-security-policy-csp}

If it does, add `plausible.io` to the allowed domains list. [More details here](https://github.com/plausible/docs/issues/20).

### Are you testing on localhost?

The Plausible script automatically disables itself on localhost. To enable tracking in local development, [see the configuration guide](script-extensions.md).

### Are you running a Google AMP page?

To track AMP pages you need to declare an AMP-analytics object. [See the instructions here](https://github.com/plausible/analytics/discussions/220#discussioncomment-904022).

### Do you have multiple Plausible snippets on the page?

Multiple snippets may cause stats to be counted twice. Make sure only one Plausible snippet is present on each page.

### Is your website on a different URL than the one you added?

Our testing tool visits the exact URL you added to your Plausible account. If your website is at a different address, the tool won't be able to reach it. Use [the manual verification process](#how-to-manually-check-your-integration) instead.

### Have you blocked traffic using Shields?

The [Shields feature](excluding.md) lets you block visits by IP address, hostname, country or page. Check your active Shields rules to make sure none of them are excluding the visits you expect to see.

---

## Tracking stopped working

### Is there an ongoing incident?

Check our [status page](https://plausible.io/status) to see if there's an outage affecting Plausible.

### Have you cleared your cache after a change?

After updating your snippet, proxy settings or plugin, clear your cache. On WordPress, the proxy requires a specific reset sequence. See [WordPress plugin issues](#wordpress-plugin-issues) below.

### Are you using an older version of the script?

If you use a custom proxy, you may not be serving the latest version of the tracking script. Tracking may still work, but the automated verification tool won't be able to confirm it. Update the proxied script to the latest version.

### Have you placed the script behind a GDPR consent banner?

Are you using Cookiebot or a similar consent management platform that only loads the Plausible script after the user gives consent? Our testing tool cannot verify the integration in that case. Use [the manual verification process](#how-to-manually-check-your-integration) instead.

Plausible is privacy-first and compliant with GDPR and ePrivacy regulations. Your legal team may confirm that consent is not required. See [our data policy](https://plausible.io/data-policy) and [this legal assessment](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) for details. To load Plausible for every visitor while your banner keeps other tools blocked, follow [our consent management platform guide](consent-management-platforms.md).

---

## WordPress plugin issues

Fixes for the WordPress plugin are on the [WordPress page](wordpress-integration.md#troubleshooting):

- <a id="admin-visits-are-not-showing"></a>[Admin visits are not showing](wordpress-integration.md#admin-visits-are-not-showing)
- <a id="proxy-not-recording-stats-after-setup"></a>[Proxy not recording stats after setup](wordpress-integration.md#proxy-not-recording-stats-after-setup)
- <a id="stats-stopped-after-migrating-or-cloning-your-wordpress-site"></a>[Stats stopped after migrating or cloning your WordPress site](wordpress-integration.md#stats-stopped-after-migrating-or-cloning-your-wordpress-site)
- <a id="proxy-script-is-slow"></a>[Proxy script is slow](wordpress-integration.md#proxy-script-is-slow)
- <a id="plugin-token-showing-as-invalid"></a>[Plugin token showing as invalid](wordpress-integration.md#plugin-token-showing-as-invalid)
- <a id="token-link-doesnt-do-anything"></a>[Token link doesn't do anything](wordpress-integration.md#token-link-doesnt-do-anything)
- <a id="wp-rocket-or-another-caching-plugin-is-interfering"></a>[WP Rocket or another caching plugin is interfering](wordpress-integration.md#wp-rocket-or-another-caching-plugin-is-interfering)

---

## My own visits are not showing

### Are you blocking the script on your own device?

A browser extension, ad blocker or VPN on your device may be blocking Plausible. Disable extensions or whitelist the Plausible script to start seeing your own visits.

If the verification tool has already confirmed that tracking is working, the rest of your visitors are being counted correctly. To count visitors who use ad blockers, [set up a proxy](/proxy/introduction.md).

### Are you on WordPress?

The plugin excludes logged-in administrators by default. See [WordPress troubleshooting](wordpress-integration.md#admin-visits-are-not-showing) to track your own visits.

### Is your visit being filtered out?

Open your browser’s developer tools, select **Network** and reload the page. Find the event request to `/api/event` or your proxy’s equivalent and check its response headers.

If you see `x-plausible-dropped: 1`, your event reached Plausible but was not recorded, even if the response says **202 Accepted**. Check your site’s exclusion rules. If you use a VPN, try temporarily disconnecting it: some VPN IP ranges overlap with data centers and are filtered out.

---

## Some visitors are not being counted

Some visitors use tools that block analytics scripts: browser extensions, privacy-focused browsers, Pi-hole and other network-level blockers, and corporate firewalls.

You have two options:

**Accept that some visitors won't be counted.** For most sites this is a small share of traffic. Plausible is blocked less than most analytics tools. Firefox and Safari have built-in tracking protection that blocks Google Analytics but not Plausible.

**Set up a proxy.** A proxy serves the Plausible script as a first-party request from your own domain, bypassing most blockers:

- The [WordPress plugin](wordpress-integration.md) has a one-click proxy built in
- Self-setup guides for [Cloudflare](proxy/guides/cloudflare.md), [Netlify](proxy/guides/netlify.md), [Vercel](proxy/guides/vercel.md) and [other platforms](proxy/introduction.md)
- A managed proxy where we handle the setup for you. See [proxy introduction](proxy/introduction.md) for details

### Are some VPN visitors being filtered as bots?

Some VPN and iCloud Private Relay IP ranges overlap with data centers, so those visits are filtered with bot traffic. See [VPN users and bot filtering](bot-traffic-filtering.md#vpn-users-and-bot-filtering).

---

## Numbers seem lower than expected

Plausible and Google Analytics will never show identical numbers. They measure differently by design, and that is not a sign that something is broken.

**Plausible counts differently from GA4.** GA4 uses cookies and sessions to stitch together user journeys, samples data on high-traffic properties, and has its own bot filtering. Plausible counts unique visitors by IP and user agent, does not use cookies and applies its own bot filtering. A 10-20% difference between the two is normal, and in some cases larger gaps are expected.

**Some visitors use blockers.** Ad blockers, privacy browsers and network-level tools like Pi-hole block some analytics scripts. Plausible is blocked far less than GA4, but not by zero. If you want to close this gap, [set up a proxy](/proxy/introduction.md).

**Bot filtering removes automated traffic.** Plausible excludes traffic from data center IP ranges and other automated sources before it reaches your stats. GA4 filters bots differently and is likely to record much of this traffic as real visits. 

In [a test we ran](https://plausible.io/blog/testing-bot-traffic-filtering-google-analytics), GA4 counted every bot scenario as legitimate traffic while Plausible rejected all of them. See [bot and spam traffic filtering](bot-traffic-filtering.md) for how our filtering works and [why analytics tools never show the same numbers](https://plausible.io/blog/why-analytics-numbers-dont-match) for the other common causes.

**Imported GA data behaves differently.** If you imported historical data from Google Analytics, that data was collected under GA's methodology and may show gaps or anomalies when viewed alongside native Plausible data. See [metrics definitions](metrics-definitions.md) for how each metric is calculated.

---

## UTM parameters not appearing in Campaigns

UTM parameters only count on the first pageview of a new visit, so testing in a browser that already has an active visit won't show them. See [UTM parameters not appearing in Campaigns](top-referrers.md#utm-parameters-not-appearing-in-campaigns) for how to test them reliably.

---

## Referral source is missing

Referral sources only count when they start a new visit, which also keeps payment gateways out of your sources. See [how referral attribution works](top-referrers.md#no-need-to-manually-exclude-unwanted-sources).

---

## Events API events not appearing

The Events API returns 202 Accepted even when an event is dropped, usually because `X-Forwarded-For` carries a server IP instead of the visitor's. See [debugging the Events API](events-api.md#debugging) for how to check.

---

<details>

<summary>

## How to manually check your integration {#how-to-manually-check-your-integration}

</summary>

In some cases, our automated testing tool may not be able to check your site. A manual check is needed in those cases. You can use the developer tools built into your browser ([Chrome](https://developer.chrome.com/docs/devtools/open/), [Safari](https://support.apple.com/en-gb/guide/safari/sfri20948/mac), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/)) to verify that Plausible is working.

### Check for the snippet in your source code

1. Visit any page on your site where Plausible is installed.
2. Right-click anywhere and click **View Page Source** (or press `Option+Command+U` on Mac, `Ctrl+U` on Linux and Windows).
3. Press `Command+F` on Mac or `Ctrl+F` on Linux and Windows and search for `plausible.init`.
4. If you see the snippet, confirm it matches the one we provided exactly with no unintended modifications.

<img alt="Ensure that the Plausible Analytics script is loading by checking the source code" src={useBaseUrl('img/data-domain-plausible-analytics-script.png')} />

### Check for the script in browser developer tools

1. Visit any page on your site where Plausible is installed.
2. Open developer tools: right-click and click **Inspect**, or press `F12` on Firefox or Chrome, or `Option+Command+I` on Safari.
3. In the **Console** tab, look for any errors related to Plausible.
4. In the **Network** tab, reload the page and look for a request from `plausible.io` starting with `pa-`. It should return status 200.

<img alt="Ensure that the Plausible Analytics script is loading in the 'Network' tab" src={useBaseUrl('img/network-check-if-plausible-is-working.png')} />

</details>
