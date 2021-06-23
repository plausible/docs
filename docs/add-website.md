---
title: Add your website details
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Enter the domain name of the website you want to track

Once you have an account, you can enter the domain name of the website you want to track. Please, remove `https` and `www` from the URL, just keep the `hostname` (yourdomain.com).

For example, if your site is `https://www.yourdomain.com` then the part to enter in the "**Domain**" field is `yourdomain.com`.

If you'd like to track a specific subfolder only, you can also add a subfolder (yourdomain.com/subfolder).

<img alt="Add your website details to Plausible Analytics" src={useBaseUrl('img/website-details.png')} />

### Do you want to track a subdomain?

If you would like to track a subdomain such as `blog.yourdomain.com` then please include the subdomain. Plausible Analytics essentially sees different subdomains as different sites.

For example, if your subdomain is `https://blog.yourdomain.com` then the part to enter in the "**Domain**" field is `blog.yourdomain.com`.

:::note
You don't necessarily need to install the script on the same domain as the domain you have added to your Plausible account. This allows you more flexibility in your setup all depending on your situation. It also means that Plausible can work with domains that feature special characters. Just spell out the domain without using special characters when adding it to Plausible
:::

## Select your reporting timezone

You need to select your reporting timezone too. This sets the day boundary of your reports regardless of where your traffic is coming from.

For instance, if you select "**(GMT+01:00) Amsterdam, Berlin…**" then the beginning and the end of each day of your reporting is calculated based on the time in Amsterdam, even if your visitors come from London or New York.

The best practice is to set the timezone that reflects the location of your audience or if the audience is very broad and spread across the world to set the timezone of your location.

Click on the "**Add snippet**" button to go to the next step.
