---
title: How to add the script to your Ghost site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use the "**[Ghost code injection](https://ghost.org/integrations/plausible/)**" feature to add Plausible Analytics tracking code to your Ghost website same way you would add Google Analytics code or any other JavaScript code. 

In Ghost you can inject code across your entire site or on an individual post or page. Since Plausible needs to track analytics across your entire site, use the global code injection feature which can be found in the Ghost Admin settings menu.

* In the "**Menu**", click "**Settings**", and then "**Code Injection**".

<img alt="Ghost code injection" src={useBaseUrl('img/ghost-code-injection.png')} />

* Add your Plausible Analytics script to the "**Site Header**" text box. Code added into the "**Site Header**" field is injected into the `<head>` tag on every page of your site.

<img alt="Add Plausible script to Ghost" src={useBaseUrl('img/add-plausible-script-to-ghosts.png')} />

* After adding your code, click on the "**Save**" button.

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

<img alt="Ghost Portal flows" src={useBaseUrl('img/portal-ghost.png')} />

The Sign In/Sign up flows are part of Ghost's [Portal](https://ghost.org/help/setting-up-portal/) app and it's an unified experience for all Ghost sites. You cannot customize these flows by adding an ID or CSS class.

However, you can bypass this and customize your sign up flows by using a custom theme on the "[Creator plan](https://ghost.org/pricing/)" or higher. 

If you're using a custom theme, you can simply add the tagged events extension to your script and CSS class to the element that you want to track as explained in [this doc](https://plausible.io/docs/custom-event-goals).
