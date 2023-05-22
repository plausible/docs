---
title: Proxying Plausible through WordPress
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use our official WordPress plugin to proxy your Plausible Analytics requests. Here's the step-by-step process for enabling a proxy. It takes only a few minutes and requires no tech know-how or prior experience.

## Step 1: Install and activate our WordPress plugin

Here's how you can install the Plausible Analytics plugin on your WordPress site:

* Go into the "Plugins" section in the left-hand side navigation within your WordPress dashboard
* Click on "Add New"
* In the search box in the top right, type "Plausible Analytics" and press enter

![Search and install the "Plausible Analytics" WordPress plugin](https://plausible.io/uploads/wordpress-plugin-search.png)

* Click on the "Install Now" button on the listing of [our official "Plausible Analytics" plugin](https://wordpress.org/plugins/plausible-analytics/)
* After the installation is finished, click on the "Activate" button

![Activate our WordPress plugin](https://plausible.io/uploads/activate-our-wordpress-plugin.png)

* If you have a caching plugin activated, do purge the cache just in case

![Plausible Analytics WordPress plugin settings](/uploads/plausible-analytics-wordpress-plugin-settings.png)

## Step 2: Enable the proxy in our WordPress plugin settings

"Plausible Analytics" entry will now show up in the "Settings" section in the left-hand side navigation of your WordPress dashboard. Click on it to explore the various options available.

* In the "Bypass adblockers" section of our WordPress plugin settings, tick the "Enable proxy"
* Then click on the "Save Changes" button
* Enabling the proxy will make our script run as a first-party connection from your domain name. The proxy uses WordPress' API with a randomly generated endpoint, starting with `yourdomain.com/wp-json`

## Stats not being recorded after enabling the proxy?

We've put a lot of effort to ensure that the proxy works smoothly and have taken measures to prevent conflicts with popular performance optimization and caching plugins such as the WP Rocket, SG Optimizer, WP Optimize and LiteSpeed Cache. However, sometimes things might not go as planned.

In case plugin conflicts arise with your WordPress, it might cause the stats not to be recorded properly. So please give your integration [a quick double-check](https://plausible.io/docs/troubleshoot-integration) after you enable the proxy to make sure the stats are being recorded. And if you notice anything weird, don't hesitate to [reach out to us](https://plausible.io/contact). We're here to help!

## If the proxy script is slow

We will send you a notification if the proxy takes too long (>500ms) to send pageviews. This probably means the speed module failed to install automatically. To resolve this:

* Access your server using (S)FTP, SSH or your host
* Navigate to the directory of the Plausible plugin, usually `wp-content/plugins/plausible-analytics`
* Open the `mu-plugin` directory withing the plugin directory and copy the `plausible-proxy-speed-module.php` file to the `wp-content/mu-plugins` folder (if the `mu-plugins` folder doesn't exist within `wp-content`, create it before copying the file)

Check here for full instructions and details on the other features of our [WordPress plugin](https://plausible.io/wordpress-analytics-plugin).
