---
title: Verify that the integration is working
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

After you've added the [Plausible Analytics script](plausible-script.md) to your website, it's time to verify that the integration is working.

In your [Plausible Analytics account](https://plausible.io/sites), click on your website domain name. You should see a blinking green dot which indicates that we’re listening for incoming page views in real-time.

<img alt="Listening for incoming page views" src={useBaseUrl('img/waiting-for-pageview.png')} />

Once the first page view comes through, you'll be automatically taken to the stats dashboard. This is an indication that the integration is working, congrats!

If you didn't see the green blinking dot, there's nothing to worry about. It just means that someone visited your site already since you installed the Plausible Analytics script.

:::note
You're running Plausible on localhost? Our script automatically disables itself when running on localhost as the majority of people don't want those stats to be counted.
:::

If you see the dashboard with graphs and numbers, it means everything is working! Plausible Analytics is now tracking your website statistics while preserving the privacy of your visitors.
