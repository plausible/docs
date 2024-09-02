---
title: Hashed page paths
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your site is using page paths with a `#` in the URL, you can use our "**Hashed page paths**" tracking to see the different pages your visitors have viewed. Here's how to enable it:

## Step 1: Enable "Hashed page paths" for your site

You can enable "**Hashed page paths**" tracking as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control how data is collected in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

## Step 2: Change the snippet on your site

The tracking snippet changes depending on your selection of optional measurements. When making changes to your optional measurements, do ensure to insert the newest snippet into your site for all tracking to work as expected. We display your snippet during the process of adding a new site to your account. You can also see the snippet within the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

Your Plausible tracking snippet should be inserted into [the Header (`<head>`) section of your site](plausible-script.md). Place the tracking script within the `<head> … </head>` tags.

After you change the tracking snippet on your site, all the hash-based page paths will start being tracked and will be displayed in the "**Top Pages**" report of your Plausible Analytics dashboard.
