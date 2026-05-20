---
displayed_sidebar: someSidebar
title: How to add Plausible Analytics to your HubSpot site
description: "Add Plausible Analytics to your HubSpot website by injecting the tracking script site-wide. Works across all pages without cookies."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add Plausible Analytics tracking code to your HubSpot website same way you would add Google Analytics code or any other JavaScript code. 

In HubSpot you can inject code across your entire site or on an individual post or page. Since Plausible needs to track analytics across your entire site, use the option to add our script to all content hosted on a specific domain. Here's how:

* You have to be a SuperAdmin to do this. In your HubSpot account, click on the settings icon in the main navigation bar.

<img alt="HubSpot settings icon in the nav bar" src={useBaseUrl('img/hubspot-site-settings.png')} />

* In the left sidebar menu, navigate to **Website** > **Pages**.
    
* At the top of this page, click the **Choose a domain to edit its settings** dropdown menu and select a domain you'd like to track using Plausible.

* In the **Site header HTML** field, enter your Plausible Analytics tracking code.

* After adding your code, click on the **Save** button.

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

## What's next?

- [Set up pageview goals](pageview-goals.md) for your thank-you pages to track form submission conversions without writing any code
- [Set up custom event goals](custom-event-goals.md) to track button clicks and other interactions across your HubSpot pages
- [Invite your team](users-roles.md) so marketing colleagues can access the dashboard directly
