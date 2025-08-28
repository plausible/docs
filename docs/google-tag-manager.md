---
title: How to add the script to your site using Google Tag Manager
---
This document walks through how you can set up Plausible Analytics using Google Tag Manager.

## Google Tag Manager Template

In order to make the process easier, we have published a template that makes setting up Plausible Analytics with Google Tag Manager simple and code free. (You can find the source code for the Google Tag Manager template used [here](https://github.com/plausible/plausible-gtm-template))

The simplest way to install the custom template is to locate it in the [Google Tag Manager template gallery](https://tagmanager.google.com/gallery/#/) where you can install it directly from your Google Tag Manager dashboard.

Once you’ve installed the template, you should create a new Tag that uses it. To do this:
* In the main Google Tag Manager dashboard, browse to Tags and click New to create a new tag
* From the list of available tag templates, choose the Plausible Analytics tag template you just installed
* The only mandatory field in the tag configuration is the Script ID that can be found in the Plausible Analytics dashboard under Site Settings > Site Installation > Google Tag Manager (other optional configuration options are described below in the section Tag Configuration)
* For the tag trigger, you should select All Pages - Page View, which will ensure that Plausible will capture data on all pages

## Tag Configuration

The tag has the following optional configuration options:

| **Optional Configuration** | **Explanation** |
|---------------------------|-----------------|
| **File Downloads**            | Automatically [track file downloads](/docs/file-downloads-tracking) (enabled by default) |
| **Form Submissions**          | Whether to [track form submissions](/docs/form-submission-tracking.md) (enabled by default) |
| **Outbound Links**            | Automatically [track clicks on outbound links](/docs/outbound-link-click-tracking) (enabled by default) |
| **Hash Based Routing**        | Automatically track page paths that use a `#` in the URL, [described here](/docs/hash-based-routing) (disabled by default) |
| **Custom Properties**         | Allows you to attach [custom properties](/docs/custom-props/introduction) (also known as custom dimensions in Google Analytics) when sending a pageview event. These can be configured using Google Tag Manager variables. |

<details>
<summary>Advanced configuration options</summary>

| **Optional Configuration** | **Explanation** |
|---------------------------|-----------------|
| **Auto Capture Pageviews**    | Whether to automatically capture pageviews (enabled by default) |
| **Capture on Localhost**      | Whether to capture events on localhost (disabled by default) |
| **Logging**                   | Whether to log to console on ignored events (enabled by default) |


</details>

## Troubleshooting

You can test that everything is working as expected by using Google Tag Manager’s Preview mode.  You can enter Preview mode by clicking the blue Preview button in the Google Tag Manager dashboard. This opens a new tab with your website running the GTM container where you can see if Plausible Analytics is running and capturing data properly. In the Tag Assistant Preview tab, you can see additional information about the events that trigger the tag and the data that is being sent.
