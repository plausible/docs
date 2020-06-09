# Your Plausible Analytics website settings

## General

In "Reporting Timezone" you can change the timezone for your reports. This sets the day boundary of your reports regardless of where your traffic is coming from. 

For instance, if you select “(GMT+01:00) Amsterdam…” then the beginning and the end of each day of your reporting is calculated based on the time in Amsterdam, even if your visitors come from London or New York. 

The best practice is to set the timezone that reflects the location of your audience or if the audience is very broad and spread across the world to set the timezone of your location.

## Visibility

Your website stats are private by default but you can choose to be transparent and make them public so anyone with your custom link can view them. Click on the "Make stats public" to do so. This will then display your public stats URL so you can share it. Some website owners link to their public stats from their footer, or their "About" page. It is really up to you.

If you wish to make your website stats private again, click on the "Make stats private" button.

## Shared links

You can share your stats privately by generating a shared link. Click on the "+ new link" button to do so. This link is impossible to guess but you can add password protection for extra security on the following screen. Or if you prefer to share using the secure link without the password protection you can keep the password field blank. Then click the "Create shared link" button and your new shared link will be displayed.

You can click on the trash can icon if you want to remove the particular shared link.

## Goals

See the "Goals" section of the documentation for more information on the goals.

## Google integration

See the "Google Search Console" section of the documentation for more information on the Google Search Console integration.

## Email reports

Here you can decide to enable weekly (every Monday) and/or monthly (every 1st of the month) reports to be sent directly into your email inbox. 

These email reports can be scheduled to be sent to multiple recipients. Enable the weekly or monthly report, add an individual recipient into the email field and click on the "Add recipient" button.

All the stats are embedded directly in the email and there's no need to go to the Plausible Analytics website to view them. There are no attachments, no PDFs and no links to click on in the email report either.

## Custom domain

Some browsers and extensions may block all analytics services including privacy-friendly ones like Plausible Analytics.
  
If you have issues with blockers, we offer a quick and easy way to serve the script from your domain name as a first-party connection. As a result, your stats are never blocked by clients because they are proxied through your subdomain.

1. Click on the "Add custom domain" name to get started.

2. We recommend using a subdomain of the website you're running Plausible Analytics on. If your site is on `yourdomain.com` you can use `plausible.yourdomain.com`. The name of the subdomain can be anything that you want. Type in your subdomain and click on the "DNS setup" button.

3. Next, you need to go to your DNS provider’s website and create a new CNAME record for your chosen subdomain. Point the CNAME record to `custom.plausible.io.` (including the last dot) and then click on the "Done" button on the Plausible Analytics website.

4. It may take up to 4 hours for DNS changes to propagate and for us to obtain an SSL certificate for your subdomain. The setup is working when your subdomain loads our JavaScript file (plausible.yourdomain.com/js/plausible.js in our example here when the chosen subdomain is "plausible").

5. When our JavaScript file loads from your subdomain, you can finish your setup by replacing the tracking snippet on your site with the following code (your custom code will be shown on the confirmation page):

``` <script async defer data-domain=”yourdomain.com” src=”https://plausible.yourdomain.com/js/index.js”></script> ```

## JavaScript snippet

This is where you can see the Plausible Analytics code that you need to paste into the `<head>` section of your website to activate tracking.

## Delete site data

Here you can delete your site from Plausible Analytics which also removes all stats you've collected until that point. Click on the big red "Delete" button to delete your site from Plausible Analytics.
