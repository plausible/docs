---
displayed_sidebar: someSidebar
title: Adding Plausible to Wix
sidebar_label: Wix
description: "Add Plausible Analytics to a Wix site using the Custom Code feature. Cookie-free visitor tracking that works across all pages."
---

import CtaBox from '@site/src/components/CtaBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

You can use the **[Custom Code](https://support.wix.com/en/article/wix-editor-embedding-custom-code-on-your-site)** feature to add Plausible Analytics tracking code to your Wix website the same way you would add Google Analytics code or any other JavaScript code.

Site-wide JavaScript code injection is a premium Wix feature so you need to upgrade your Wix account to a paid subscription plan.

* In your site's dashboard, click on **Settings**, and under **Development & Integrations** click on **Custom Code**.

* Click the **+ Add Custom Code** button in the top right.

* Paste your Plausible tracking code, give it a name, choose which pages to add the code to (**All Pages**), select **Load code once per visit** ([read more about this here](https://support.wix.com/en/article/custom-code-loading-options)), select **Head** as the place for the code and click the **Apply** button.

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

<CtaBox
  headline="Add privacy-first analytics to your Wix site"
  link="https://plausible.io/register"
  linkText="Start free trial"
/>

## What's next?

- [Set up goals](goal-conversions.md) to track form submissions, button clicks or any conversion that matters to your site
- [Invite your team](users-roles.md) or [share the dashboard](shared-links.md) with your clients or collaborators
- [Import your Google Analytics history](google-analytics-import.md) if you're switching from GA and want to keep your historical data
