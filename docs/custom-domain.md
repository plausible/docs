---
title: Serve the script from your domain as a first-party connection
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
Custom domains are deprecated. They still work but we recommend those who use the custom domain to proxy the script instead. New to Plausible? Use the proxy instead of the custom domain. [Here are the proxy instructions](/proxy/introduction.md)
:::

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

In most cases this process takes a few minutes but it may take up to 4 hours for the DNS changes to propagate and for us to obtain an SSL certificate for your subdomain.

You can check whether the CNAME record is set up correctly by entering your subdomain (`yoursubdomain.yourdomain.com`) in an [online CNAME lookup tool](https://www.nslookup.io/cname-lookup/).

The setup is completed and ready to use when your subdomain loads our JavaScript file (`yoursubdomain.yourdomain.com/js/index.js`). Keep using the default snippet on your site until your subdomain loads the JavaScript file.

Don't worry if your subdomain (`yoursubdomain.yourdomain.com`) shows a 404 error. That's expected behaviour. The important part is that the script itself loads from your subdomain (`yoursubdomain.yourdomain.com/js/index.js`). That's when you can replace the snippet on your site.

:::note
Do you have a wildcard SSL configuration, so your subdomains automatically get the SSL certificate? Please disable it for the subdomain you want to serve Plausible script from. We will automatically get the SSL certificate from Let's Encrypt for your subdomain.
:::

:::note
Using Cloudflare for DNS and having your sites proxied behind Cloudflare? A proxy in front of your custom domain can override the remote IP which would lead to wrong geolocation data in your stats. Are you seeing some SSL or other errors? Cloudflare proxy may be the culprit because it doesn't allow our server to provision an SSL certificate to you. In both of these cases, removing the proxy and making it just a DNS record in your Cloudflare settings solves the issue.
:::

## Replace the tracking code on your website with the new code

When our JavaScript file loads from your subdomain, you can finish your setup by replacing the tracking code on your site with something that looks like the following code (your custom code will be shown on the confirmation page):

```html
<script defer data-domain="yourdomain.com" src="https://yoursubdomain.yourdomain.com/js/index.js"></script>
```

<img alt="Update the tracking code on your site" src={useBaseUrl('img/update-javascript-snippet.png')} />

:::note
Using CSP? Do not forget to add this new subdomain specifically to your Content Security Policy too.
:::

## Should I create a custom domain for each of the sites that I want to track?

This is not necessary. You could use one custom domain for all your sites.

This is convenient if you're running several sites as subdomains. In that case you could create plausible.yourdomain.com as your custom domain and use that for all the different subdomains you have as part of yourdomain.com (subdomain1.yourdomain.com, subdomain2.yourdomain.com etc).

You can use the same custom domain on your other domains too. The only difference is that in those cases you'll be making a call to plausible.yourdomain.com from yourotherdomain.com rather than having it all under the same domain. The functionality remains the same and everything still works fine.

## Remove the custom domain integration

If you'd like to remove the custom domain you have configured, click on the "**Remove custom domain**" button in the "**Custom domain**" section of your website settings.
