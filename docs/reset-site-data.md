---
title: Reset your site data
description: "How to reset all collected stats for a site in Plausible Analytics. The site and its settings stay in your account and the dashboard starts from scratch."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Within the **Danger zone** section of [your website settings](website-settings.md), find **Reset stats** and click **Reset [your domain] stats**. Confirm the reset when prompted.

<div class="browser screenshot-padded">
  <img alt="Plausible site settings: Reset stats clears collected stats from the dashboard while keeping the site configuration" src={useBaseUrl('img/plausible-reset-stats.webp')} width="1622" height="340" decoding="async" />
</div>

This clears all the stats you've collected until that point from your dashboard, while keeping the site and its configuration in your account, so the stats start from scratch. Resetting isn't a permanent deletion of your site's data. To permanently delete a site's stats, use [Delete site](delete-site-data.md) instead, which removes both the stats and the site settings.

Stats for a single page, a single goal or specific custom property values can't be deleted on their own once they've been recorded. If you want to keep test conversions out of a new goal, see [how to test a goal](goal-conversions.md#test-a-goal-without-counting-your-test-conversions).
