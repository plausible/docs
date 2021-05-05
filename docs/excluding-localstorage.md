---
title: Opt out and exclude your visits from the analytics by setting a localStorage flag in your browser
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To prevent counting your visits, you can set a special `localStorage` flag in the browser. Here's how.

## To exclude your visits from being counted

Visit the website you'd like to exclude your visits from and open the web console in your browser (press F12 in Firefox or Chrome). Then click the "Console" tab.

In Firefox, it looks like this:

<img alt="Browser web console" src={useBaseUrl('img/browser-console.png')} />

Then paste the following command and hit enter:

```html
localStorage.plausible_ignore=true
```

It will look something like this when you paste the command:

<img alt="Browser web console enter the command" src={useBaseUrl('img/exclude-yourself.png')} />

And you will get this message when you hit enter:

<img alt="Browser web console true" src={useBaseUrl('img/exclude-yourself-true.png')} />

Note that you have to follow this process for every domain and subdomain you'd like to exclude your visits from. If you use multiple browsers, you also need to follow the same process on every browser you'd like not to be counted.

## Return to your site to ensure the exclusion works

There are two ways you can check to ensure that you have excluded your visits:

* 1: Reload your site multiple times and make sure that the total page views number in your Plausible dashboard does not increase. This isn't very reliable if there are other people visiting your site at the same time.

* 2: Reload your site and open the browser console again. If you have excluded yourself, you should see a message saying "Ignoring Event: localStorage flag". You may need to ensure the "Warnings" filter (in the top right in Firefox and top-center under a dropdown in Chrome) is enabled before this message is visible.

<img alt="Browser web console check" src={useBaseUrl('img/check-the-exclusion.png')} />

## To re-enable counting of your visits

To re-enable counting of your visits, you need to visit the website you'd like to enable the counting of your visits for. Open the web console in your browser and then click the "Console" tab.

Then paste the following command and hit enter:

```html
delete localStorage.plausible_ignore
```

## Allow anyone on your site to exclude themselves

To allow anyone on your site (usually beta testers or internal users) to exclude themselves from analytics, you could have them follow the steps above on every device, or you could provide a page on your website to do this automatically.

We have created a downloadable version of such a page for you to use freely on your site. There are two versions of this example, one with a CSS stylesheet included if you want to use our style, and another without any styling if you'd like to bring your own.

*Note*: With this method, similar to above, the page would need to be visited and enabled per domain and per browser, for every user. (And the page must be made available on the same domain as that which you wish to exclude analytics for)
### Preview

<img alt="Exclusion page screenshot" src={useBaseUrl('img/exclusion-page-example.png')} />

### Download and Deploy

For the styled version of this page, you'll need to download a <a target="_blank" download="index.html" href="/exclusion-examples/exclude.html">HTML file</a> and a <a target="_blank" download="plausible-exclusion.css" href="/exclusion-examples/plausible-exclusion.css">CSS file</a> and make both available together on your website.

(If you'd prefer a light-theme for this page, you can delete the `dark` class from line 1 of the above HTML file)

For the unstyled/bare version, you'll just need to download a <a target="_blank" download="index.html" href="/exclusion-examples/exclude-bare.html">HTML file</a>, and make it available on your website with any CSS you choose to add.
