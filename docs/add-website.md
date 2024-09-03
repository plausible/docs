---
title: Add your website details
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Once you have an account, you can enter the domain name of the website you want to track. Umlauts and other special characters (including numbers, dots and slashes) are supported so you can add international domain names too.

Please, remove `https` and `www` from the URL, just keep the `hostname`. For example, if your site is `https://www.yourdomain.com` then the part to enter in the "**Domain**" field is `yourdomain.com`.

After you add your domain, we will provide you with the tracking snippet that you need to [insert into your site](plausible-script.md) to start counting your stats.

Does your site operate on multiple subdomains such as `docs.yourdomain.com` and `app.yourdomain.com`? Simply add your main domain name (`yourdomain.com`) to your Plausible account and use that tracking snippet on all your subdomains too. This keeps the visitor session [active between the main site and its subdomains](subdomain-hostname-filter.md).

If you'd like to track a particular subdomain independently from the rest of your site, you can do that too. For example, if the subdomain you want to track on its own is `https://blog.yourdomain.com` then the part to enter in the "**Domain**" field is `blog.yourdomain.com`.

:::tip Domain doesn't necessarily need to match the actual domain
You don't necessarily need to install our snippet on the same domain as the domain you have added to your Plausible account. Think of the domain field in Plausible more like a site ID rather than an exact match. This allows you more flexibility in your setup all depending on your situation.
:::

<img alt="Add your website details to Plausible Analytics" src={useBaseUrl('img/website-details.png')} />

## Select your reporting timezone

You need to select your reporting timezone too. This sets the day boundary of your reports regardless of where your traffic is coming from.

For instance, if you select "**(GMT+01:00) Amsterdam, Berlin…**" then the beginning and the end of each day of your reporting is calculated based on the time in Amsterdam, even if your visitors come from London or New York.

The best practice is to set the timezone that reflects the location of your audience or if the audience is very broad and spread across the world to set the timezone of your location.

Click on the "**Add snippet**" button to go to the next step.
