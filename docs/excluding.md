---
title: Opt out and exclude your visits from the analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible counts every visitor to your website. When you are working on your site, you might not want to record your visits and page views.

Most analytics tools do this by excluding specific IP addresses from being counted. However, we do not store the visitors' IP addresses in our database for privacy reasons as we are a [GDPR compliant web analytics](https://plausible.io/data-policy) tool.

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
