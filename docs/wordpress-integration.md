---
displayed_sidebar: someSidebar
title: Adding Plausible to WordPress
sidebar_label: WordPress
description: "Add Plausible Analytics to your WordPress site using the official plugin. Cookie-free, privacy-first tracking with proxy and goal tracking support."
---

The best way to add Plausible to your WordPress site is our official WordPress plugin. It gives you a Plausible configuration page directly in your WordPress dashboard, with options for the proxy, goal tracking and more.

For full installation instructions, setup options and feature details, visit the [Plausible WordPress plugin page](https://plausible.io/wordpress-analytics-plugin).

## Common issues

Having trouble with the plugin? Jump to the relevant section:

- **No data being recorded**: check that the plugin is activated, the domain name matches your Plausible account exactly and all caches have been cleared
- **Admin visits not showing**: the plugin excludes logged-in administrators by default; enable your user role in the plugin settings to track your own visits
- **Proxy not working after setup or site migration**: the proxy requires a specific reset sequence; [see WordPress plugin issues](troubleshoot-integration.md#wordpress-plugin-issues) for the full steps
- **Plugin token showing as invalid**: tokens are site-specific and start with `plausible-plugin-`; generate a new one from your Plausible site settings if in doubt
- **WP Rocket or another caching plugin is interfering**: add the Plausible script to the exclusion list in your caching plugin's settings

For a full diagnostic walkthrough, see the [troubleshooting guide](troubleshoot-integration.md).

## What's next?

- [Enable enhanced measurements](script-extensions.md) in the plugin settings to automatically track outbound links, file downloads and form submissions without writing code
- [Set up goals](goal-conversions.md) to measure signups, purchases or any other key action on your site
- [Import your Google Analytics history](google-analytics-import.md) to keep your stats continuous if you're switching from GA
