---
title: How to exclude internal traffic from your analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Plausible Analytics tracks every visitor to your website. You might not want your office traffic to be counted. Or when you're working on your site, you might not want to record your own visits and page views. Here's how to block your internal traffic from your Plausible Analytics stats dashboard.
 
:::tip Using WordPress?
You can use our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin) which excludes views coming from admins and other user roles
:::

## How to exclude your own visits from being counted

* Go into the [site settings](website-settings.md) of the website you'd like to block your activity from

* Click on the "**Shields**" section in the left-hand sidebar

<img alt="Shields exclude traffic by IP" src={useBaseUrl('img/shields-exclude-tracking-by-IP.png')} />

* Click on the "**Add IP Address**" button to add a new address to the block list

<img alt="Shields click to add IP address" src={useBaseUrl('img/shields-click-to-add-IP-address.png')} />

* You can manually insert an IP address (both IPv4 and IPv6 addresses are acceptable) or you can click to block your current public IP address which our system will find and display for you

<img alt="Shields add IP to blocklist" src={useBaseUrl('img/shields-add-ip-to-blocklist.png')} />

* You can also add a description to help you identify which device or location you have blocked

* You need to add one IP address at a time and it has to be the full IP address as IP ranges are not supported. You can block up to 30 different IP addresses per website
  
* Once added to the block list, we will start blocking traffic from that specific IP address within a few minutes

* You can see the list of all the IP addresses that you're blocking at the moment. The entry in the list which has the "**YOU**" tag is your current IP address 

<img alt="Shields IP blocked" src={useBaseUrl('img/shields-ip-blocked.png')} />

:::tip Do you use VPNs or often change your IP addresses?
You can set a special `localStorage` flag in your browser so you don't need to frequently block new IP addresses. [Here's how](excluding-localstorage.md)
:::
  
## How to remove an IP address from the blocklist

* In the list of all the IP addresses that you're blocking currently, find the IP address you want to remove

* Click on the "**Remove**" button next to that IP address to remove it from the blocklist
