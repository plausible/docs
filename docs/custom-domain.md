# Custom domain

Some browsers and extensions may block all analytics services including privacy-friendly ones like Plausible Analytics.
  
If you have issues with blockers, we offer a quick and easy way to serve the script from your domain name as a first-party connection. As a result, your stats are never blocked by clients because they are proxied through your subdomain.

1. Click on the "Add custom domain" name to get started.

2. We recommend using a subdomain of the website you're running Plausible Analytics on. If your site is on `yourdomain.com` you can use `plausible.yourdomain.com`. The name of the subdomain can be anything that you want. Type in your subdomain and click on the "DNS setup" button.

3. Next, you need to go to your DNS provider’s website and create a new CNAME record for your chosen subdomain. Point the CNAME record to `custom.plausible.io.` (including the last dot) and then click on the "Done" button on the Plausible Analytics website.

4. It may take up to 4 hours for DNS changes to propagate and for us to obtain an SSL certificate for your subdomain. The setup is working when your subdomain loads our JavaScript file (plausible.yourdomain.com/js/plausible.js in our example here when the chosen subdomain is "plausible").

5. When our JavaScript file loads from your subdomain, you can finish your setup by replacing the tracking snippet on your site with the following code (your custom code will be shown on the confirmation page):

``` <script async defer data-domain=”yourdomain.com” src=”https://plausible.yourdomain.com/js/index.js”></script> ```
