---
displayed_sidebar: someSidebar
title: Adding Plausible to WordPress
sidebar_label: WordPress
description: "Install and configure the official Plausible WordPress plugin: token setup, enhanced measurements, ecommerce revenue, proxy and viewing stats inside WordPress."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CtaBox from '@site/src/components/CtaBox';

The best way to add Plausible to your WordPress site is our official plugin. It gives you a Plausible configuration page directly in your WordPress dashboard, with one-click options for goal tracking, ecommerce revenue, the proxy and more. No code required.

This page covers everything the plugin can do. If you only want a quick start, the first two sections (install and connect) are all you need.

<CtaBox
  headline="Privacy-first analytics for your WordPress site, no cookies and no consent banner"
  link="https://plausible.io/register"
  linkText="Start free trial"
/>

## Install the plugin

You need a Plausible account before the plugin can send data. [Register your account](register-account.md) and [add your website](add-website.md) first. Enter your domain without `https` or `www`, so `https://www.yourdomain.com` becomes `yourdomain.com`.

Then install the plugin from your WordPress dashboard:

1. Go to the **Plugins** section in the left-hand navigation.
2. Click **Add Plugin** and search for "Plausible Analytics".
3. Open the official listing, then **Install** and **Activate**.

<div class="browser">
  <img alt="Search and install the official Plausible Analytics WordPress plugin" src={useBaseUrl('img/search-for-plugin.png')} />
</div>

You can also install it from the [official plugin directory](https://wordpress.org/plugins/plausible-analytics/). After activation, the plugin walks you through a Get Started guide. Every option there is also available later in the plugin settings screen, described below.

<div class="browser">
  <img alt="Activate the Plausible Analytics WordPress plugin" src={useBaseUrl('img/activate-our-wordpress-plugin.png')} />
</div>

## Connect with a plugin token

In the **Domain Name** field, enter your domain exactly as added to your Plausible account (no `https` or `www`).

To manage everything from WordPress without visiting your Plausible account, generate a plugin token:

1. Click the token link in the plugin settings. It takes you to plausible.io.
2. Click **Create Plugin Token** and copy the token.
3. Back in the plugin, paste it into the **Plugin Token** field and click **Connect**.

<div class="browser">
  <img alt="Add your Plausible plugin token in WordPress" src={useBaseUrl('img/add-wordpress-token.png')} />
</div>

Your site is now being tracked. You can confirm tracking from your [site settings](website-settings.md) at any time.

:::note Seeing an "invalid token" error?
Plugin tokens are site-specific and always start with `plausible-plugin-`. Make sure the token was created for the exact site you are connecting, and generate a new one if in doubt.
:::

## The settings screen

The full settings screen has a few options pre-enabled. Keep them as-is or turn off anything you don't need.

<div class="browser">
  <img alt="Plausible Analytics WordPress plugin settings" src={useBaseUrl('img/plausible-analytics-wordpress-plugin-settings.png')} />
</div>

## Enhanced measurements

The **Enhanced measurements** section is where you enable automatic tracking for common actions. Toggle one on and tracking starts immediately. Each goal or property appears in your dashboard as soon as its first event is recorded. [Ecommerce revenue](#track-ecommerce-revenue) has its own section below.

### 404 error pages

Enable **404 error pages** to track visits to missing pages. A **404** goal appears, with the missing path recorded as a property. [Full reference](error-pages-tracking-404.md).

### File downloads

Enable **File downloads** to track downloads of PDFs, documents, media and other common file types. A **File Download** goal appears. [Full reference](file-downloads-tracking.md).

### Outbound links

Enable **Outbound links** to track clicks on links pointing to other sites. An **Outbound Link: Click** goal appears. [Full reference](outbound-link-click-tracking.md).

### Cloaked affiliate links

Enable **Cloaked affiliate links** and enter the URL slugs you use for cloaked links, such as `/recommends/`. Clicks appear as a **Cloaked Link: Click** goal. [Full reference](custom-automatic-link-tracking.md).

### Form completions

Enable **Form completions** to track successful form submissions. Tested with Contact Form 7, WPForms, Ninja Forms and Elementor, and works with most other form plugins. A **WP Form Completions** goal appears. [Full reference](form-submissions-tracking.md).

### Search queries

Enable **Search queries** to track what people search for on your site. A **WP Search Queries** goal appears, with the search term, result count and source page recorded as properties.

### Authors and categories

Enable **Authors and categories** to send post authors, categories and custom taxonomies as [custom properties](/custom-props/introduction). You can then filter the dashboard by a specific author or category.

### Logged-in user status

Enable **Logged-in user status** to record whether a visitor is logged in, as a `user_logged_in` property available across your dashboard filters.

### Hash-based routing

Enable **Hash-based routing** if your site uses hash URLs such as `/#contact`. The hash is preserved in your **Top Pages** report. [Full reference](hash-based-routing.md).

### Query parameters

Enable **Query parameters** and enter the parameters you want to keep, such as `lang`. Matching values appear in the **Properties** tab. [Full reference](custom-query-params.md).

## Track custom events with CSS class names

You can track any button or element click as a goal without writing JavaScript. Tag the element with a CSS class directly in the WordPress editor.

1. Select the block you want to track to open the block menu.
2. Under **Advanced**, add a class in the **Additional CSS class(es)** field using the format `plausible-event-name=YourEventName`. For a signup button: `plausible-event-name=Signup+Submit` (a `+` becomes a space).

<div class="browser">
  <img alt="Add a CSS class name to a WordPress block" src={useBaseUrl('img/wordpress-css-class-name.png')} />
</div>

The event won't appear until you add a matching goal. In your [site settings](website-settings.md), open **Goals**, click **+ Add goal**, choose **Custom event** and enter the event name (`Signup Submit` for the example above). See [custom event goals](custom-event-goals.md) for the full reference.

### Send custom properties with events

Add custom properties to segment an event further. To record where a shared button was clicked, append `plausible-event-position=footer` to the class:

```
plausible-event-name=Signup+Submit plausible-event-position=footer
```

Properties show up automatically once the goal exists. See [custom properties](/custom-props/introduction) for more.

## Track ecommerce revenue

The plugin has built-in support for [WooCommerce](https://plausible.io/blog/woocommerce-analytics-plugin) and Easy Digital Downloads. Enable **Ecommerce revenue** in **Enhanced measurements** and the plugin automatically tracks these events:

- Add to Cart
- Remove from Cart
- Start Checkout
- Complete Purchase (including revenue)
- Visit `/product*`

It also records product properties (`product_name`, `product_cat`, `price`, `cart_total`, `quantity` and more) and builds a purchase funnel from product view to completed purchase, so you can see where customers drop off. No code or custom event setup is required.

<div class="browser">
  <img alt="Ecommerce revenue goal in Plausible" src={useBaseUrl('img/plausible-ecommerce-revenue-goal.png')} />
</div>

If your store doesn't run on WooCommerce or Easy Digital Downloads, you can send revenue manually. See [ecommerce revenue tracking](ecommerce-revenue-tracking.md) for the full reference.

## View your stats inside WordPress

You can see your Plausible dashboard inside WordPress without visiting our website. Enable **View stats in WordPress** in the plugin settings, then open **Dashboard → Analytics** in the WordPress admin menu.

Stats are visible to administrators by default. Under **Show stats dashboard to additional user roles**, you can also grant access to editors, authors and contributors.

## Exclude specific pages from tracking

In **Exclude specific pages from being tracked**, add a comma-separated list of page paths to leave out of your stats. Each entry must start with `/` and omit the trailing slash. Use `*` as a wildcard, for example `/subdirectory-to-exclude*` to exclude everything under a directory.

## Exclude admins and other roles

By default the plugin excludes logged-in **administrator** visits so your own activity stays out of the stats. In **Track analytics for user roles**, you can also exclude editors, authors and contributors, or enable any role you do want to count. See [excluding visitors](excluding.md) for other ways to filter internal traffic.

## Disable the toolbar menu

By default the plugin adds a shortcut to the WordPress toolbar so you can jump to analytics for the page you're viewing. Toggle it off in the settings if you prefer a cleaner toolbar.

## Bypass adblockers with the proxy

Plausible's script is blocked far less than Google Analytics, but some blocklists block every analytics script regardless of privacy practices. The proxy serves our script as a first-party request from your own domain so you keep complete data.

In the **Bypass adblockers** section, turn on **Enable proxy**. If you use a caching plugin, clear its cache afterward.

<div class="browser">
  <img alt="Enable the proxy in the Plausible WordPress plugin" src={useBaseUrl('img/plausible-wordpress-plugin-proxy.png')} />
</div>

The proxy uses WordPress' API with a randomly generated endpoint under `yourdomain.com/wp-json` and creates a randomly named file in `/wp-content/uploads/`. If stats stop after enabling the proxy or after a site migration, see [WordPress plugin issues](troubleshoot-integration.md#wordpress-plugin-issues).

## Troubleshooting

Most plugin problems come down to caching, admin exclusion, an invalid token or a proxy reset. For step-by-step fixes, see [WordPress plugin issues](troubleshoot-integration.md#wordpress-plugin-issues).

## What's next?

- [Set up goals](goal-conversions.md) to measure signups, purchases or any other key action
- [Import your Google Analytics history](google-analytics-import.md) to keep your stats continuous if you're switching from GA
- [Connect Looker Studio](looker-studio.md) for custom reporting across your data sources
