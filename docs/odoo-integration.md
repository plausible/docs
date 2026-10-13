---
title: Using Plausible Cloud with Odoo
sidebar_label: Odoo
description: "Connect your Odoo website to Plausible Cloud, view analytics inside Odoo and check that your tracking works."
---

import CtaBox from '@site/src/components/CtaBox';

Use Plausible Cloud to see where your Odoo website visitors come from, which pages they visit and which actions they take. Plausible handles the analytics hosting and updates for you.

This guide focuses on connecting your website to your account at **plausible.io**, whether you use Odoo Online, Odoo.sh or an on-premise installation. Menu names and installation steps can vary by Odoo version.

## 1. Create your account and add your website

<CtaBox
  headline="Connect your Odoo website to Plausible Cloud. Try it free for 30 days, no credit card required."
  link="https://plausible.io/register"
  linkText="Start free trial"
  platform="Odoo"
/>

Already have an account? [Sign in](https://plausible.io/login) and [add your website](add-website.md). Use the domain people visit, such as `example.com`.

## 2. Connect Odoo to Plausible Cloud

For Odoo Online, Odoo documents these system parameters for connecting to Plausible Cloud. Enable developer mode, then open **Settings → Technical → System Parameters** and set:

| Key | Value |
| --- | --- |
| `website.plausible_server` | `https://plausible.io` |
| `website.plausible_script` | `https://plausible.io/js/plausible.js` |

For the installation sequence that applies to your environment, follow Odoo's website analytics instructions: [Odoo 19](https://www.odoo.com/documentation/19.0/applications/websites/website/reporting/analytics.html), [Odoo 18](https://www.odoo.com/documentation/18.0/applications/websites/website/reporting/analytics.html) or [Odoo 16](https://www.odoo.com/documentation/16.0/applications/websites/website/reporting/analytics.html). Select your version in Odoo's documentation if it isn't listed here.

When using Odoo’s built-in integration, configure it to use Plausible Cloud and your Cloud shared link. This changes the integration’s destination; you do not need to add a second Plausible snippet manually or through Google Tag Manager. If you previously added a separate snippet that sends to the same Plausible Cloud site, remove that extra installation to avoid duplicate pageviews and events.

## 3. View your dashboard inside Odoo

In Plausible, open your website's **Settings → Visibility** and create a [shared link](shared-links.md). Leave password protection off: Odoo's embedded dashboard does not support it.

In Odoo, open **Website → Configuration → Settings**, select the correct website, enable **Plausible Analytics**, paste the link into **Shared Link Auth** and save. You can then open **Website → Reporting → Analytics**.

Shared links require a plan that includes them. Your trial includes Business features; see [plans](subscription-plans.md). Anyone with the shared link can view that site's dashboard, so keep it out of public posts and screenshots.

## 4. Check that visits appear

Open your website and check its dashboard in Plausible Cloud. Confirm that you're looking at the same domain in both systems. If visits don't appear, check the configured server and installation before adding another script. See [troubleshooting](troubleshoot-integration.md) for more checks.
