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

<table>
  <tr>
    <th>Installation type</th>
    <th>How do I know if I'm using this?</th>
    <th>Required action to ensure continuous tracking</th>
  </tr>
  <tr>
    <td><b>Script tag installation</b></td>
    <td>
      The snippet on your website contains the word `plausible.init`. This is also the case when you're using our official [Google Tag Manager template](https://tagmanager.google.com/gallery/#/owners/plausible/templates/plausible-gtm-template).
    </td>
    <td>No action required</td>
  </tr>
  <tr>
    <td><b>WordPress plugin</b></td>
    <td>If your website is on WordPress, you're most likely using the plugin as that's the recommended installation method.</td>
    <td>Update the site domain in your plugin settings</td>
  </tr>
  <tr>
    <td><b>NPM package</b></td>
    <td>You're using the [@plausible-analytics/tracker](https://www.npmjs.com/package/@plausible-analytics/tracker) library</td>
    <td>Update the init options, e.g. `init({ domain: "your_new_domain.com", ... })`</td>
  </tr>
  <tr>
    <td><b>Legacy tracking snippet</b></td>
    <td>The Plausible snippet on your website includes the `data-domain` attribute.</td>
    <td>Update the snippet's data-domain attribute value, e.g. <code>&lt;script src="https://plausible.io/js/plausible.js" data-domain="your_new_domain.com" ...&gt;</code></td>
  </tr>
</table>

:::important
To make the necessary changes to your tracking, you'll have a transition period of 72 hours, during which we will count your stats using both the old and the new domain. After 72 hours, the old domain is cleared from our database and any new traffic sent with the old domain will be rejected.
:::

### 2. Update Stats API integrations

Stats API requests depend on the domain as an argument. API requests made after a domain change with the old domain will fail. Update any Stats API based integrations to use the new domain.

### 3. Ensure you update bookmarked and shared links

As soon as you change the domain in Plausible, any links to your site analytics dashboard or site settings that you might have bookmarked or shared will stop working. These will be available at the new root URL `https://plausible.io/<your_new_domain>`. There is no automatic redirect in place from the old root URL to the new one.

