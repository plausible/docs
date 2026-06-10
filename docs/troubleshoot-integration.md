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
          "name": "Why are UTM parameters not appearing in the Campaigns tab?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UTM parameters are only attributed to the first pageview of a new session. If a visitor already has an active session on your site, UTM parameters will not update the attribution. A session stays active for 30 minutes after the last pageview."
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
          "name": "Why are Events API events not appearing in the dashboard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plausible always returns HTTP 202 Accepted, even when an event is not recorded. Check the response headers for x-plausible-dropped: 1. The most common cause is a misconfigured X-Forwarded-For header forwarding a server IP instead of the real visitor IP."
          }
        },
        {
          "@type": "Question",
          "name": "Why are my Plausible numbers lower than Google Analytics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plausible and Google Analytics measure differently by design. Plausible counts unique visitors by IP and user agent without cookies, applies aggressive bot filtering, and is not affected by cookie consent losses. A 10-20% difference is normal. Larger gaps usually reflect GA4 counting bot traffic or consent-bypassed sessions that Plausible correctly excludes."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the WordPress plugin proxy not recording stats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After enabling or changing the proxy, you must clear all caches. The correct sequence is: disable the proxy, clear all caches, re-enable the proxy, clear all caches again. If you recently migrated or cloned your WordPress site, the proxy file path may be stale. The same reset sequence will regenerate it."
          }
        }
      ]
    }
  `}</script>
</head>

import useBaseUrl from '@docusaurus/useBaseUrl';

After you've [added the Plausible snippet to your site](plausible-script.md), the dashboard starts displaying stats in real-time as soon as the first visit is counted. There are no delays with data in Plausible.

If you see the dashboard with graphs and numbers, everything is working. Do you keep seeing a blinking green dot instead? That means we're listening for incoming visits but haven't recorded any yet.

Our testing tool launches automatically from the blinking green dot screen to send test traffic to your site. This test traffic won't be recorded in your dashboard, but you'll see a status message indicating whether Plausible has been installed correctly.

<div class="browser">
    <img alt="Integration verification tool" src={useBaseUrl('img/v2/integration-verification-tool.webp')} />
</div>

As soon as the first visit is recorded, the verification screen disappears and your dashboard loads automatically.

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

- **[Blinking green dot, nothing recorded yet](#no-data-recorded-yet)**: snippet not loading, cache issue or site not reachable
- **[Tracking was working, then it stopped](#tracking-stopped-working)**: cache, plugin update or script change
- **[WordPress plugin issues](#wordpress-plugin-issues)**: admin exclusion, proxy not working or cache conflict
- **[My own visits are not showing](#my-own-visits-are-not-showing)**: ad blocker, VPN or WordPress admin exclusion
- **[Some visitors are not being counted](#some-visitors-are-not-being-counted)**: browser extensions or network-level blockers
- **[Numbers seem lower than expected](#numbers-seem-lower-than-expected)**: methodology differences, bot filtering or blockers
- **[UTM parameters not appearing in Campaigns](#utm-parameters-not-appearing-in-campaigns)**: active session when UTM link was visited
- **[Referral source is missing](#referral-source-is-missing)**: session attribution logic
- **[Events API events not appearing](#events-api-events-not-appearing)**: bot filtering or misconfigured IP forwarding

---

## No data recorded yet

### Have you added the snippet?

We've put together [many integration guides](integration-guides.md) covering WordPress, Ghost and other popular platforms. Check that the snippet is in the `<head>` of every page you want to track.

### Have you cleared your cache?

If you use caching, visitors may still see an older version of your site without the snippet. Purge your cache after adding or changing the snippet.

### Are you using Google Tag Manager?

Follow [our GTM guide](https://plausible.io/gtm-template) for the correct setup using our official template.

### Does your site use a Content Security Policy?

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

### Have you cleared your cache after a change?

After updating your snippet, proxy settings or plugin, clear your cache. On WordPress, the proxy requires a specific reset sequence. See [WordPress plugin issues](#wordpress-plugin-issues) below.

### Are you using an older version of the script?

If you use a custom proxy, you may not be serving the latest version of the tracking script. Tracking may still work, but the automated verification tool won't be able to confirm it. Update the proxied script to the latest version.

### Have you placed the script behind a GDPR consent banner?

Are you using Cookiebot or a similar consent management platform that only loads the Plausible script after the user gives consent? Our testing tool cannot verify the integration in that case. Use [the manual verification process](#how-to-manually-check-your-integration) instead.

Plausible is privacy-first and compliant with GDPR and ePrivacy regulations. Your legal team may confirm that consent is not required. See [our data policy](https://plausible.io/data-policy) and [this legal assessment](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) for details.

---

## WordPress plugin issues

These cover the most common plugin problems. For full setup and every plugin setting, see [Adding Plausible to WordPress](wordpress-integration.md).

### Admin visits are not showing

Our WordPress plugin excludes logged-in administrator visits by default. This is intentional. If you want to track your own visits, go to the "Track analytics for user roles" section in the plugin settings and enable the Administrator role.

### Proxy not recording stats after setup

After enabling or changing the proxy, you must clear your cache. The correct sequence is:

1. Disable the proxy
2. Clear all caches (WordPress, hosting, Cloudflare)
3. Re-enable the proxy
4. Clear all caches again

Skipping any step often leaves a stale script in place that the verification tool cannot confirm.

### Stats stopped after migrating or cloning your WordPress site

The proxy creates a randomly named file in `/wp-content/uploads/`. When you migrate or clone your site, that file path may no longer match what the plugin expects. To fix this, disable the proxy, clear all caches, re-enable the proxy and clear all caches again. This forces the plugin to generate a fresh proxy file at the correct path.

### Proxy script is slow

The plugin notifies you if the proxy takes too long (over 500ms) to send pageviews. This usually means the speed module failed to install automatically. To install it manually:

1. Access your server using (S)FTP, SSH or your host's file manager
2. Go to the plugin directory, usually `wp-content/plugins/plausible-analytics`
3. Open the `mu-plugin` directory inside it and copy `plausible-proxy-speed-module.php` to `wp-content/mu-plugins` (create the `mu-plugins` folder first if it doesn't exist)

### Plugin token showing as invalid

Plugin tokens are site-specific. Make sure the token you are pasting was created for the exact domain you are trying to connect. Tokens always start with `plausible-plugin-`. If in doubt, create a new token in your Plausible site settings and connect it again.

### WP Rocket or another caching plugin is interfering

Performance and caching plugins can minify, combine or delay the Plausible script in ways that break tracking. If you see errors in the browser console related to the Plausible script, add the script URL to the exclusion list in your caching plugin's settings. Our official WordPress plugin includes fixes for the most common conflicts, so make sure you are using it rather than the manual snippet.

---

## My own visits are not showing

### Are you blocking the script on your own device?

A browser extension, ad blocker or VPN on your device may be blocking Plausible. Disable extensions or whitelist the Plausible script to start seeing your own visits.

If the verification tool has already confirmed that tracking is working, the rest of your visitors are being counted correctly. To count visitors who use ad blockers, [set up a proxy](/proxy/introduction.md).

### Are you on WordPress?

See the [WordPress plugin issues](#wordpress-plugin-issues) section above for admin exclusion, proxy problems and cache conflicts.

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

Most VPN and Tor visitors are tracked normally and appear under "Anonymous VPN Service" in the [Countries report](countries.md). Some VPN IP ranges overlap with data center infrastructure, so those visits are filtered along with bot traffic. This is a tradeoff of aggressive bot filtering. See [bot and spam traffic filtering](bot-traffic-filtering.md) for details.

---

## Numbers seem lower than expected

Plausible and Google Analytics will never show identical numbers. They measure differently by design, and that is not a sign that something is broken.

**Plausible counts differently from GA4.** GA4 uses cookies and sessions to stitch together user journeys, samples data on high-traffic properties, and has its own bot filtering. Plausible counts unique visitors by IP and user agent, does not use cookies and applies its own bot filtering. A 10-20% difference between the two is normal, and in some cases larger gaps are expected.

**Some visitors use blockers.** Ad blockers, privacy browsers and network-level tools like Pi-hole block some analytics scripts. Plausible is blocked far less than GA4, but not by zero. If you want to close this gap, [set up a proxy](/proxy/introduction.md).

**Bot filtering removes automated traffic.** Plausible filters known bots and crawlers aggressively. If GA4 is counting traffic that Plausible is not, it is likely that GA4 is including automated traffic that Plausible correctly excludes. See [bot and spam traffic filtering](bot-traffic-filtering.md) for details.

**Imported GA data behaves differently.** If you imported historical data from Google Analytics, that data was collected under GA's methodology and may show gaps or anomalies when viewed alongside native Plausible data. See [metrics definitions](metrics-definitions.md) for how each metric is calculated.

---

## UTM parameters not appearing in Campaigns

UTM parameters are only attributed to the first pageview of a new session. If a visitor already has an active session on your site, pageviews with UTM parameters will not update the attribution. A session stays active for 30 minutes after the last pageview.

Common causes during testing:

- You visited the site earlier in the same browser, even without UTM parameters
- Another device on the same network visited the site recently
- You tested multiple UTM links without waiting 30 minutes between each

To test UTM attribution reliably, use a device and network combination that has not visited your site in the past 30 minutes. Mobile data on a phone that hasn't visited the site recently is the most reliable option. Check the **Campaigns** tab after the visit to confirm attribution.

---

## Referral source is missing

Referral sources are only counted when they start a new session. If you click several UTM-tagged links in the same session, only the first one is recorded. Wait 30 minutes or use a different device, browser or IP address to start a new session before testing again.

This same mechanism keeps payment gateways and other redirect domains out of your referral sources. [Learn more about how referral attribution works](top-referrers.md).

---

## Events API events not appearing

If you are using the [Events API](events-api.md) or a proxy for server-side tracking, Plausible always returns HTTP 202 Accepted, even when an event is not recorded. To check whether an event was actually counted, inspect the response headers for `x-plausible-dropped: 1`. When that header is present, the event was rejected by bot filtering.

The most common cause is a misconfigured `X-Forwarded-For` header. If your proxy or backend forwards its own server IP instead of the real visitor's IP, Plausible's bot filter will drop the event. Make sure `X-Forwarded-For` is set to the real client IP before the request reaches Plausible.

To confirm which IP address Plausible is seeing, add `X-Debug-Request: true` to your request. The API will return HTTP 200 with the IP it will use for unique visitor counting, so you can verify the header is being passed through correctly.

---

<details>

<summary>

## How to manually check your integration

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
