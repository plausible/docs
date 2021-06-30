---
title: How to add the script to your Ghost site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use the "**[Ghost code injection](https://ghost.org/integrations/plausible/)**" feature to add Plausible Analytics tracking code to your Ghost website same way you would add Google Analytics code or any other JavaScript code. 

In Ghost you can inject code across your entire site or on an individual post or page. Since Plausible needs to track analytics across your entire site, use the global code injection feature which can be found in the Ghost Admin settings menu.

* In the "**Menu**", click "**Settings**", and then "**Code Injection**".

<img alt="Ghost code injection" src={useBaseUrl('img/ghost-code-injection.png')} />

* Add your Plausible Analytics script to the "**Site Header**" text box. Code added into the "**Site Header**" field is injected into the `<head>` tag on every page of your site.

* After adding your code, click on the "**Save**" button.

Now you can go to your website and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).
