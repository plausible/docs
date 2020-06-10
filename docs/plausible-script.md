---
title: Add the script to your website
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your Plausible Analytics tracking script code will look something like this:

```html
<script async defer data-domain=”yourdomain.com” src=”https://plausible.io/js/plausible.js”></script> 
```
<img alt="Your Plausible Analytics tracking script" src={useBaseUrl('img/javascript-snippet.png')} />

## Paste your Plausible Analytics script into your website header section

To integrate your website with Plausible Analytics, you need to be able to update the HTML code of the website you want to track. Paste your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

## Verify if the script is installed on your site

After you've added the Plausible Analytics script to the HTML of your website, you should see the script installed on your site. You can verify this by viewing the HTML of your website in your favorite web browser.

In a web browser such as Firefox, visit your website, right-click anywhere on the page and choose "**View Page Source**". Then press `cmd+f` on a Mac or `ctrl+f` on Linux and Windows to search. Type `plausible` to search for the Plausible Analytics script.

If you followed the previous steps correctly, you should see the Plausible Analytics tracking script in the source code of your website.
