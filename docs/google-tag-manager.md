---
title: How to add the script to your site using Google Tag Manager
---
This document walks through how you can set up Plausible Analytics using Google Tag Manager.

## Google Tag Manager Template

In order to make the process easier, we have published a template that makes setting up Plausible Analytics with Google Tag Manager simple and code free.

The simplest way to install the custom template is to locate it in the [Google Tag Manager template gallery](https://tagmanager.google.com/gallery/#/) where you can install it directly from your Google Tag Manager dashboard. Here's the direct link to the [Plausible Analytics GTM template](https://tagmanager.google.com/gallery/#/owners/plausible/templates/plausible-gtm-template). 

<img alt="Plausible GTM Template" src={useBaseUrl('img/plausible-gtm-template.png')}/>

Once you’ve installed the template, you should create a new Tag that uses it. To do this:

* In the main Google Tag Manager dashboard, browse to "**Tags**" and click "**New**" to create a new tag

<img alt="Plausible GTM Template New Tag" src={useBaseUrl('img/plausible-gtm-template-new-tag.png')}/>

* From the list of available tag templates, choose the Plausible Analytics tag template you just installed

<img alt="Plausible GTM Template New Tag Template" src={useBaseUrl('img/plausible-gtm-template-new-tag-template.png')}/>

* The only mandatory field in the tag configuration is the "**Script ID**" that can be found in the Plausible Analytics dashboard under "**Site Settings**" > "**Site Installation**" > "**Google Tag Manager**"

<img alt="Plausible GTM Template New Tag Script ID" src={useBaseUrl('img/plausible-gtm-template-new-tag-script-id.png')}/>

* Other optional configuration options are described below in the section "**Tag Configuration**"

<img alt="Plausible GTM Template New Tag Script ID" src={useBaseUrl('img/plausible-gtm-template-new-tag-configuration-options.png')}/>

* For the tag trigger, you should select "**All Pages**" - "**Page View**", which will ensure that Plausible will capture data on all pages

<img alt="Plausible GTM Template New Tag Trigger" src={useBaseUrl('img/plausible-gtm-template-trigger.png')}/>

## Tag Configuration

The tag has the following optional configuration options:

| **Optional Configuration** | **Explanation** |
|---------------------------|-----------------|
| **File Downloads**            | Automatically [track file downloads](/docs/file-downloads-tracking) |
| **Form Submissions**          | Whether to [track form submissions](/docs/form-submissions-tracking.md)  |
| **Outbound Links**            | Automatically [track clicks on outbound links](/docs/outbound-link-click-tracking) |
| **Hash Based Routing**        | Automatically track page paths that use a `#` in the URL, [described here](/docs/hash-based-routing) |
| **Custom Properties**         | Allows you to attach [custom properties](/docs/custom-props/introduction) (also known as custom dimensions in Google Analytics) when sending a pageview event. These can be configured using Google Tag Manager variables |

<details>
<summary>Advanced configuration options</summary>

| **Optional Configuration** | **Explanation** |
|---------------------------|-----------------|
| **Auto Capture Pageviews**    | Whether to automatically capture pageviews. If this is unchecked, the script will be loaded and ready to receive events but no pageviews will be sent. You would need to recreate pageview events by creating another tag with the trigger Page View or similar to send the event manually |
| **Capture on Localhost**      | Whether to capture events on localhost |
| **Logging**                   | Whether to log to console on ignored events. When enabled, any ignored events are logged to the browser console with a warning |


</details>

## Troubleshooting

You can test that everything is working as expected by using Google Tag Manager’s Preview mode. You can enter Preview mode by clicking the blue Preview button in the Google Tag Manager dashboard. This opens a new tab with your website running the GTM container where you can see if Plausible Analytics is running and capturing data properly. In the Tag Assistant Preview tab, you can see additional information about the events that trigger the tag and the data that is being sent.

For more details on the Plausible Analytics Google Tag Manager template, please [see our guide](https://plausible.io/gtm-template). 
