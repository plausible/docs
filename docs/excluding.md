---
title: Exclude internal traffic from your analytics
description: "Block your own visits and office traffic from Plausible Analytics by excluding specific IP addresses, hostnames, countries, or pages from being recorded."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::tip Bot traffic is filtered automatically
Plausible automatically filters out bots, crawlers and referrer spam. You don't need to configure anything for this. See [bot and spam traffic filtering](bot-traffic-filtering.md) for details.
:::

By default, Plausible Analytics tracks every visitor to your website. You might not want your office traffic to be counted. Or when you're working on your site, you might not want to record your own visits and page views.

Here's how to block your internal traffic from your Plausible Analytics stats dashboard. You can block recording visitors from specific IP addresses, hostnames, countries or pages. If you're on WordPress, our [official WordPress plugin](wordpress-integration.md#exclude-admins-and-other-roles) can exclude views from admins and other user roles without any manual configuration.

## Exclude visits by IP address

* Go into the [site settings](website-settings.md) of the website you'd like to block your activity from

* Choose **IP Addresses** in the **Shields** entry in the left-hand menu

* Click on the **Add IP Address** button to add a new address to the block list

* You can manually insert an IP address (both IPv4 and IPv6 addresses are acceptable) or you can click to block your current public IP address which our system will find and display for you

<div class="browser">
<img alt="Shields add IP to blocklist" src={useBaseUrl('img/shields-add-ip-to-blocklist.png')} />
</div>

* You can also add a description to help you identify which device or location you have blocked

* You need to add one IP address at a time and it has to be the full IP address as IP ranges are not supported. You can block up to 30 different IP addresses per website

:::note Block both IPv4 and IPv6 if your device uses both
Most modern devices and networks have both an IPv4 address (e.g. `203.0.113.5`) and an IPv6 address (e.g. `2001:db8::1`). Your browser or network proxy may send visits using either one depending on the connection.

If you block only your IPv4 address but your browser sends a request over IPv6, that visit will still be recorded. To reliably exclude your traffic, check whether your device has both address types and add each one separately.

The **block your current IP** button captures whichever address your browser is currently using. Click it, then visit a site like [whatismyipaddress.com](https://whatismyipaddress.com) to check whether you also have a second address type, and add that manually if so.
:::
  
* Once added to the block list, we will start blocking traffic from that specific IP address within a few minutes

* You can see the list of all the IP addresses that you're blocking at the moment. The entry in the list which has the **YOU** tag is your current IP address 

* You can click on the **Remove** button next to that IP address to remove it from the blocklist

<div class="browser">
<img alt="Shields IP blocked" src={useBaseUrl('img/shields-ip-blocked.png')} />
</div>
 
## Exclude visits by country

If you prefer to block traffic from specific countries from being recorded in your dashboard, you can do so in your site settings as well: 

* Visit the site settings area for the dashboard in question
* Choose **Countries** in the **Shields** entry in the left-hand menu
* Then click on the **Add Country** button to add a new country to your block list

<div class="browser">
<img alt="Shields country blocked" src={useBaseUrl('img/block-traffic-from-countries-from-being-recorded.png')} />
</div>

Once added to the block list, we will start blocking traffic from that specific country within a few minutes. You can block up to 30 different countries. 

You can see the list of all the countries that you're blocking the traffic from. Click on the "Remove" button next to that country to remove it from the blocklist.

## Exclude visits by page or section

If you prefer to permanently block traffic from specific pages or sections of your site from being recorded in your dashboard, you can do so in your site settings: 

* Visit the site settings area for the dashboard in question
* Choose **Pages** in the **Shields** entry in the left-hand menu
* Then click on the **Add Page** button to add a new page to your block list
* You can group different pages or dynamic URLs by using asterisks. For instance, if you'd like to block all the blog traffic from being recorded you can add something like (`/blog/*`)

<div class="browser">
<img alt="Shields pages blocked" src={useBaseUrl('img/block-traffic-from-pages-from-being-recorded.png')} />
</div>

Once added to the block list, we will start blocking traffic from that specific page within a few minutes. You can block up to 30 different pages. 

You can see the list of all the pages that you're blocking the traffic from. Click on the "Remove" button next to that page to remove it from the blocklist.

## Exclude visits by hostname

If you prefer to only record traffic from specific hostnames (and block all the other traffic), you can do so in your site settings: 

* Visit the site settings area for the dashboard in question
* Choose **Hostnames** in the **Shields** entry in the left-hand menu
* Then click on the **Add Hostname** button to add a new hostname to your allow list

You can group your hostnames when adding them to the allow list:

* `*.yourdomain.com` will record all traffic on all subdomains of `yourdomain.com` but won't record traffic of `yourdomain.com` itself
* `*yourdomain.com` will record all traffic on all subdomains of `yourdomain.com` and `yourdomain.com` traffic itself will be recorded too

<div class="browser">
<img alt="Shields hostnames allowed" src={useBaseUrl('img/allowlist-hostname-traffic-to-record-in-analytics.png')} />
</div>

Once added to the allow list, we will start blocking traffic from all the other hostnames within a few minutes. You can add up to 30 different hostnames. 

You can see the list of all the hostnames that you're allowing the traffic from at any time. Click on the "Remove" button next to a hostname to remove it from the allow list.

## Exclude visits by browser

Do you use VPNs or often change your IP addresses? And do none of our other blocking options work for your use case? 

You can then set a special `localStorage` flag in your browser so you don't need to frequently block new IP addresses. [Here's how](excluding-localstorage.md).
