---
title: Add the script to your website
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your Plausible Analytics tracking script code will look something like this (your exact code will be shown on the JavaScript snippet page):

```html
<script async defer data-domain=”yourdomain.com” src=”https://plausible.io/js/plausible.js”></script> 
```
## Paste your Plausible Analytics script into your website header section

To integrate your website with Plausible Analytics, you need to be able to update the HTML code of the website you want to track. Paste your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

## Verify if the script is installed on your site

After you've added the Plausible Analytics script to the HTML of your website, you should see the script installed on your site. You can verify this by viewing the HTML of your website in your favorite web browser.

In a web browser such as Firefox, visit your website, right-click anywhere on the page and choose "**View Page Source**". Then press `cmd+f` on a Mac or `ctrl+f` on Linux and Windows to search. Type `plausible` to search for the Plausible Analytics script.

You should see the Plausible Analytics tracking script in the source code of your website. If you cannot see the script, please double check if you've inserted it correctly. Contact **hello@plausible.io** if the problem persists.

<img alt="Your Plausible Analytics tracking script" src={useBaseUrl('img/javascript-snippet.png')} />

## Alternatively you can serve the script from your domain as a first-party connection

We offer a quick and easy way to serve the Plausible Analytics script from your domain name as a first-party connection. See the full instructions on [how to setup a custom subdomain and serve the Plausible Analytics script as a first-party connection](custom-domain.md).

## You can also use our community integrations

Thanks to the members of our community, there are now Plausible Analytics community integrations for several frameworks. See the [full list](community-integrations.md) and choose your framework.
