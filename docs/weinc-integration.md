---
displayed_sidebar: someSidebar
title: Adding Plausible to WeInc
sidebar_label: WeInc
description: "Add Plausible Analytics to a WeInc site from the built-in Add-ons panel. No code to paste, cookie-free tracking on every page."
---

import CtaBox from '@site/src/components/CtaBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

[WeInc](https://we.inc) is an AI website builder with a built-in Plausible add-on, so you don't need to paste the tracking snippet yourself. You only need your site's script ID.

* In Plausible, open your site's **Settings** and find your tracking snippet. Copy the script ID: the `pa-XXXXX` part of the script address `https://plausible.io/js/pa-XXXXX.js`.

* In WeInc, open your site in the **Editor** and open the **Add-ons** panel.

* Find **Plausible Analytics** under Analytics and click **Turn on**.

* Paste your script ID into the **Script ID** field and click **Save**.

* Publish your site. The Plausible snippet is added to the `<head>` of every page on the published site.

Now you can go to your website and verify whether the Plausible Analytics script has been added, and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

<CtaBox
  headline="Add privacy-first analytics to your WeInc site"
  link="https://plausible.io/register"
  linkText="Start free trial"
/>

## What's next?

- [Set up goals](goal-conversions.md) to track form submissions, button clicks or any conversion that matters to your site
- [Invite your team](users-roles.md) or [share the dashboard](shared-links.md) with your clients or collaborators
- [Import your Google Analytics history](google-analytics-import.md) if you're switching from GA and want to keep your historical data
