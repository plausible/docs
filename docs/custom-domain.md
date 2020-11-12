---
title: Serve the script from your domain as a first-party connection
---

import useBaseUrl from '@docusaurus/useBaseUrl';

We offer a quick and easy way to serve the Plausible Analytics script from your domain name as a first-party connection. Click on the "**Add custom domain**" button in the "**Custom domain**" section of your website settings to get started.

<img alt="Serve the script from your domain as a first-party connection" src={useBaseUrl('img/custom-domain.png')} />

## Type in your chosen subdomain

We recommend using a subdomain of the website you're running Plausible Analytics on. If your site is on `yourdomain.com` you can use `plausible.yourdomain.com`. The name of the subdomain can be anything that you want. Type in your subdomain in the "**Domain**" field and click on the "**DNS setup**" button.

<img alt="Type in your chosen subdomain" src={useBaseUrl('img/setup-custom-domain.png')} />

## Create a new CNAME record for your chosen subdomain

Next, you need to go to your DNS provider’s website and create a new CNAME record for your chosen subdomain. Please check with your DNS provider's documentation on how you can create a new CNAME record.

Point the CNAME record to `custom.plausible.io.` (including the last dot) and then click on the "**Done**" button on the Plausible Analytics website. 

:::note
Some domain registrars such as GoDaddy don't accept CNAME values with a dot at the end while others require it. If your registrar doesn't accept your CNAME records, please delete the dot at the end and try again.
:::

<img alt="Create a new CNAME record for your chosen subdomain" src={useBaseUrl('img/dns-cname-record.png')} />

## It may take up to 4 hours for the DNS changes to propagate

It may take up to 4 hours for the DNS changes to propagate and for us to obtain an SSL certificate for your subdomain. The setup is working when your subdomain loads our JavaScript file (`yoursubdomain.yourdomain.com/js/plausible.js`).

:::note
Do you have a wildcard SSL configuration, so your subdomains automatically get the SSL certificate? Please disable it for the subdomain you want to serve Plausible script from. We will automatically get the SSL certificate from Let's Encrypt for your subdomain. 
:::

:::note
Using Cloudflare for DNS and having your sites proxied behind Cloudflare? A proxy in front of your custom domain can override the remote IP which would lead to wrong geolocation data in your stats. Are you seeing some SSL or other errors? Cloudflare proxy may be the culprit because it doesn't allow our server to provision an SSL certificate to you. In both of these cases, removing the proxy and making it just a DNS record in your Cloudflare settings solves the issue.
:::

## Replace the tracking code on your website with the new code

When our JavaScript file loads from your subdomain, you can finish your setup by replacing the tracking code on your site with something that looks like the following code (your custom code will be shown on the confirmation page):

```html
<script async defer data-domain="yourdomain.com" src="https://yoursubdomain.yourdomain.com/js/index.js"></script>
```

<img alt="Update the tracking code on your site" src={useBaseUrl('img/update-javascript-snippet.png')} />

:::note
Using CSP? Do not forget to add this new subdomain specifically to your Content Security Policy too.
:::

## Remove the custom domain integration

If you'd like to remove the custom domain you have configured, click on the "**Remove custom domain**" button in the "**Custom domain**" section of your website settings.
