---
title: Where do I find my JavaScript snippet?
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To integrate your website with Plausible Analytics, you need to be able to update the HTML code of the website you want to track. Paste your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Your Plausible Analytics tracking script code will look something like this (your exact code will be shown on the JavaScript snippet page):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

## Find your JavaScript snippet

If you've lost your JavaScript snippet, you can find it by [logging into your Plausible Analytics account](https://plausible.io/sites). Here you'll find the list of websites you've added to Plausible Analytics.

<img alt="Plausible Analytics" src={useBaseUrl('img/list-of-sites.png')} />

Click on the "**Settings**" button on the right-hand side of the website you'd like to get the snippet for and scroll down to the "**Javascript snippet**" section on the following page.

<img alt="Your Plausible Analytics tracking script" src={useBaseUrl('img/your-javascipt-snippet.png')} />

## Verify if the script is installed on your site

After you've added the Plausible Analytics script to the HTML of your website, you should see the script installed on your site. You can verify this by viewing the HTML of your website in your favorite web browser. [Follow this process](verify-integration.md).
