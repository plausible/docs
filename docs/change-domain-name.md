---
title: Change your domain name
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Please follow these steps if you have changed the domain name of your site and would like your new domain name to be displayed in your Plausible dashboard. You won't lose any of your historical stats in this process.

:::tip Looking to transfer a site to a different Plausible account?
Use the [site ownership transfer](transfer-ownership.md) functionality instead
:::

## How to change your site domain in Plausible site settings?

:::important
Once you change the domain in your Plausible site settings, you may have to take additional steps to ensure your Plausible integration continues to work seamlessly. Please see the [list below](#domain-change-checklist).
:::

Here's how to change the domain name of a site in your Plausible account:

* Go to the "**General**" section of the [website settings](website-settings.md) in your Plausible account 

* Click on the "**Change domain**" button in the "**Site domain**" section

<img alt="Change domain name in Plausible" src={useBaseUrl('img/change-domain.png')} />

* Type in your new domain name. Please, remove `https` and `www` from the domain, just keep the hostname (`yourdomain.com`). For example, if your new domain is `https://www.yourdomain.com` then the part to enter in the "**Domain**" field is `yourdomain.com`

* Click on the "**Change domain**" button to proceed with the domain name change

* After a successful domain change, we will attempt to visit your new domain in order to advise you on the next steps (which depend on how you've set up Plausible). You should see a loading spinner while the process is ongoing, and a tailored recommendation once it finishes. Note that the same information is available in step 1 of the checklist below. We recommend you to go over that checklist to make sure your entire Plausible integration will continue working as before.

## Domain change checklist

In this section, we'll highlight everything that might need additional action after a successful domain change in Plausible.

### 1. Ensure your tracking is working

First and foremost, you'll need to make sure your stats are still tracking. Whether or not you need to take any action here depends on your setup.

| Tracking setup                                                                          | Required action to ensure continuous tracking  |
|-----------------------------------------------------------------------------------------|------------------------------------------------|
| V2 tracking snippet (i.e. a `<script>` tag with `src=".../pa-{UNIQUE_ID}.js"`)          | No action required                             |
| Legacy tracking snippet (i.e. a  `<script>`  tag with the  `data-domain`  attribute)    | Update the `data-domain` attribute value       |
| WordPress plugin                                                                        | Update the site domain in your plugin settings |
| NPM package                                                                             | Update the `domain` option passed to `init()`  |

:::important
To make the necessary changes to your tracking, you'll have a transition period of 72 hours, during which we will count your stats using both the old and the new domain. After 72 hours, the old domain is cleared from our database and any new traffic sent with the old domain will be rejected.
:::

### 2. Stats API integrations

Any Stats API request (both in the legacy, and the new API) takes a domain parameter. Make sure your existing integrations are querying the stats with the new domain.

### 3. Shared links

As soon as you change the domain of your Plausible site, all shared links change automatically. Make sure any saved links are updated accordingly

### 4. Bookmarked dashboard links

Same as shared links, dashboard links will stop working as soon as you update your domain. Make sure to update the domain in those as well.


