---
title: Change your domain name
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Please follow the following steps if you have changed the domain name of your site and would like your new domain name to be displayed in your Plausible dashboard. You won't lose any of your historical stats in this process.

Note that once you change the domain in your Plausible site settings, you must update the JavaScript snippet on your site within 72 hours to guarantee continuous tracking. If you're using our APIs, you must also make sure to update your API credentials.

Here's how to change the domain name of your site:

* Go to the "**General**" section of the [website settings](website-settings.md) in your Plausible account 

* Click on the "**Change domain**" button in the "**Site domain**" section

* Type in your new domain name. Please, remove `https` and `www` from the domain, just keep the hostname (`yourdomain.com`). For example, if your new domain is `https://www.yourdomain.com` then the part to enter in the "**Domain**" field is `yourdomain.com`

* Click on the "**Change domain and add new snippet**" button to confirm the domain name change

* Your new snippet will be displayed on the following screen. You need to update the script on your site to use the snippet with the new domain name as opposed to the old domain name within 72 hours to guarantee continuous tracking. If you're using our APIs, you must also make sure to update your API credentials.

* During this 72 hour transition period, we will allow counting of the stats using both old and new snippets. After 72 hours the old domain is cleared from our database and any new traffic sent to the old snippet will be rejected. Once you change your domain you won't be able to change it back to the original domain during this transition period either

* Click on the "**I understand, I'll change my snippet**" button to go to your new dashboard

:::note
Are you looking to transfer a site from your account to a different account such as an account owned by your client? Use our [site ownership transfer functionality](transfer-ownership.md).
:::
