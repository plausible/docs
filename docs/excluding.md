# Excluding yourself from your analytics

By default, Plausible Analytics tracks every visitor to your website. When working on your site, you might not want to record your visits and page views.

Most web analytics tools do this by excluding certain IP addresses from being counted. However, we do not store the visitors’ IP addresses in our database for privacy reasons as we are a GDPR compliant web analytics tool.

Instead, you can use any standard ad or script-blocking browser extension to filter out your traffic. Here’s how.

## 1. Install an adblocker plugin to your browser

To block your page views from your Plausible Analytics stats dashboard, start by downloading a standard ad-blocking browser extension. This method has been tested with [Adblock Plus](https://adblockplus.org/), [AdBlock](https://getadblock.com/) and [uBlock Origin](https://github.com/gorhill/uBlock/#installation). For this guide, we’ll work with Adblock Plus and it works on all the major browsers.

## 2. Locate the manual filter list

* Click the "Adblock Plus" icon and then click the "gear" icon in the upper-right corner. The "Adblock Plus Settings" tab opens.
* Select the "Advanced" tab and scroll to the "Create and edit your filter list" section.
* Click "Start creating my filter list".

## 3. Block the Plausible script on your domain

Enter the following rule in the box. Remember to change `yourdomain.com` to your website’s domain.

``` plausible.io/js/plausible.js$domain=yourdomain.com ```

If you want to block Plausible on multiple domains, you can use the `|` separator to enumerate the domains:

``` plausible.io/js/plausible.js$domain=yourdomain1.com|yourdomain2.com ```

Once you’ve entered the correct filter, click save and return to your website.

## 4. Ensure it works

You can test your filter by

- Reloading the page multiple times and making sure that the total page views number does not increase. This isn’t very reliable if there are other people using the site simultaneously.

- Opening the browser inspector, and ensuring that the script is blocked in the network tab.
