---
displayed_sidebar: someSidebar
title: Adding Plausible with Google Tag Manager
sidebar_label: Google Tag Manager
description: "Set up Plausible through the official Google Tag Manager template: initialization tag, enhanced measurements, custom events, data layer events, revenue and custom properties."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you already use Google Tag Manager, you can add Plausible with our official template from the GTM template gallery. It handles pageviews, custom events, file downloads, form submissions and more, with no changes to your site's code.

GTM is optional. You can also add [the Plausible script](plausible-script.md) to your site directly, or check our [integration guides](integration-guides.md) for instructions specific to your platform.

## Before you begin

You'll need:

* Access to your Google Tag Manager account, with permission to edit and publish containers
* A Plausible account with your site added. [Register here](register-account.md) and then [add your site](add-website.md)

## Copy your script ID

When you add a site, Plausible shows the installation screen. Choose the **Tag Manager** tab and copy the script ID. You'll need it in a minute.

<div class="browser">
<img alt="Tag Manager installation tab in Plausible with the site's script ID" src={useBaseUrl('img/gtm-tag-manager-installation.png')} />
</div>

For a site you've already added, you'll find the same screen in your [site settings](website-settings.md) under **General** > **Site installation** > **Tag Manager**.

## Install the Plausible template in GTM

Add the [Plausible Analytics template](https://tagmanager.google.com/gallery/#/owners/plausible/templates/plausible-gtm-template) from the GTM template gallery to your container.

<div class="browser">
<img alt="Plausible Analytics template in the Google Tag Manager template gallery" src={useBaseUrl('img/plausible-gtm-template.png')} />
</div>

### Create a new tag

In your GTM workspace, go to **Tags** and click **New**.

<div class="browser">
<img alt="New tag button in Google Tag Manager" src={useBaseUrl('img/plausible-gtm-template-new-tag.png')} />
</div>

Choose the Plausible Analytics template you just installed.

<div class="browser">
<img alt="Choosing the Plausible Analytics tag template" src={useBaseUrl('img/plausible-gtm-template-new-tag-template.png')} />
</div>

The tag has a **Type** option with two choices:

* **Initialization** loads Plausible on your site. You need exactly one tag of this type.
* **Custom Event** sends a custom event to Plausible when a GTM trigger fires. This is optional and you can create as many as you like.

<div class="browser">
<img alt="Type option in the Plausible tag with Initialization and Custom Event" src={useBaseUrl('img/gtm-tag-basic-settings.png')} />
</div>

## Set up the initialization tag

Create a tag with the type **Initialization** and paste your script ID into the **Script ID** field.

Under **Triggering**, choose **All Pages** (Page View) so Plausible loads on every page.

That's all a basic installation needs. Save the tag, then [test](#test-your-setup) and [publish](#publish-your-container) your container.

### Optional measurements

The initialization tag also has options for enhanced measurements. Some are ticked by default. Untick the ones you don't need and tick the ones you want.

<div class="browser">
<img alt="Optional settings in the Plausible initialization tag" src={useBaseUrl('img/gtm-init-tag-settings.png')} />
</div>

| Option | What it does |
| --- | --- |
| **File Downloads** | Automatically [tracks file downloads](file-downloads-tracking.md) |
| **Form Submissions** | Automatically [tracks form submissions](form-submissions-tracking.md) |
| **Outbound Links** | Automatically [tracks clicks on outbound links](outbound-link-click-tracking.md) |
| **Hash Based Routing** | Tracks page paths that use a `#` in the URL. See [hash-based routing](hash-based-routing.md) |
| **404 Tracking** | Tracks [404 error pages](error-pages-tracking-404.md). Tick the box and enter the title of your site's 404 page |
| **Custom Props** | Attaches [custom properties](custom-props/introduction.md) to pageviews. See [Add custom properties](#add-custom-properties) |
| **Capture on Localhost** | Records events on localhost |
| **Logging** | Logs ignored events to the browser console with a warning |
| **Auto Capture Pageviews** | Sends pageviews automatically. If you untick it, the script loads but sends no pageviews until you send them yourself with another tag, for example one with a **Page View** trigger |
| **Custom File Download Types** | Replaces the default file extensions for file download tracking, so only the types you list are tracked |

## Create custom event tags

Custom event tags send a [custom event](custom-event-goals.md) to Plausible whenever a GTM trigger fires. Add the event as a custom event goal in your site settings first so it shows in your dashboard.

Create a tag with the type **Custom Event** and enter the **Event Name**. It must match the goal name in Plausible. You can also set it from a GTM variable with the icon next to the field.

Then choose a trigger. Two useful ones are **Click - All Elements**, which fires on any click on your site, and **Click - Just Links**, which fires on link clicks. You'll find them under **Triggers** > **New** > **Trigger Configuration**.

For example, to send an event called "Login Click" whenever someone clicks a button with the text "Login", the tag looks like this:

<div class="browser">
<img alt="Plausible custom event tag for a Login Click event" src={useBaseUrl('img/gtm-setting-up-a-custom-event.png')} />
</div>

And the trigger, using **Click - All Elements**, like this:

<div class="browser">
<img alt="Click trigger that fires when the clicked text is Login" src={useBaseUrl('img/gtm-trigger-for-custom-event.png')} />
</div>

### Send revenue with a custom event

To attach revenue to an event, tick **Revenue Tracking** in the custom event tag and enter the currency and amount. For an amount of $10.29 it looks like this:

<div class="browser">
<img alt="Revenue Tracking settings in a Plausible custom event tag" src={useBaseUrl('img/gtm-revenue-tracking.png')} />
</div>

The goal needs revenue tracking turned on in Plausible. See [ecommerce revenue tracking](ecommerce-revenue-tracking.md) for the details.

## Reuse events from your data layer

If your site already sends events to Google Analytics 4 through GTM, you don't need to change anything on your site. Those events are already in the data layer and the Plausible tag can listen for them too.

This works for any event your site pushes, such as `sign_up`, `generate_lead`, `add_to_cart`, `begin_checkout` or `purchase`. For each one you want in Plausible:

1. **Create the goal.** In your [site settings](website-settings.md) add a custom event goal, for example "Add to Cart".
2. **Create the trigger.** In GTM go to **Triggers** > **New** > **Custom Event** and enter the data layer event name, for example `add_to_cart`. It needs to match exactly what your site pushes.
3. **Create the tag.** Add a new Plausible Analytics tag, choose **Custom Event** and enter the goal name from step 1. Select the trigger from step 2 and save.

To send extra details with the event, such as a product category or a form name, create a Data Layer Variable for that field and add it as a [custom property](#add-custom-properties).

Signups and lead forms are often covered by the **Form Submissions** option without any extra setup, so check that before recreating them from the data layer.

### Example: purchases with revenue

GA4 ecommerce setups push a `purchase` event that includes the order value and currency, so you can send revenue to Plausible as well:

1. In Plausible, add a custom event goal called "Purchase", turn on revenue tracking and choose your base currency.
2. In GTM go to **Variables** > **New** > **Data Layer Variable**. Create one with the name `ecommerce.value` and another one with `ecommerce.currency`. Leave the Data Layer Version on Version 2.
3. Create a **Custom Event** trigger for `purchase`.
4. Create a Plausible Analytics **Custom Event** tag called "Purchase" with that trigger. Tick **Revenue Tracking**, click the icon next to **Currency** and pick your currency variable, then do the same next to **Amount** with your value variable.

To test it, place a test order in Preview mode and check in Tag Assistant that the Plausible tag fired with the amount and currency filled in.

## Add custom properties

Both tag types can send [custom properties](custom-props/introduction.md). On the initialization tag they're attached to pageviews. On a custom event tag they're attached to that event. The setup is the same for both.

For example, to send the full URL of every page as a property, click **Add Custom Property** in the initialization tag. Enter a **Custom Property Name**, such as `page_url`. Click the icon next to **Custom Property Value** and choose the built-in **Page URL** variable. The field then shows `{{Page URL}}`.

<div class="browser">
<img alt="Custom property page_url set to the Page URL variable" src={useBaseUrl('img/gtm-new-custom-property.png')} />
</div>

If you know the name of a GTM variable, you can also type it straight into the field.

You can use your own variables too. To send the page title, create a new variable with the plus icon, name it "Page Title" and choose **JavaScript Variable** as the type.

<div class="browser">
<img alt="Choosing JavaScript Variable as the variable type in GTM" src={useBaseUrl('img/gtm-choose-variable-type.png')} />
</div>

Under **Global Variable Name**, enter `document.title`.

<div class="browser">
<img alt="JavaScript Variable configured with document.title" src={useBaseUrl('img/gtm-variable-configuration.png')} />
</div>

Then add it as a custom property, for example as `page_title`. With both properties set up, the configuration looks like this:

<div class="browser">
<img alt="Plausible tag with page_url and page_title custom properties" src={useBaseUrl('img/gtm-custom-props-configured-template.png')} />
</div>

## Test your setup

1. Click **Preview** in your GTM workspace.
2. Your site opens in a new tab with the GTM container active.
3. In the Tag Assistant panel, check that the Plausible tag fires. You can see which events triggered it and what data was sent.

If the tag fires and the visit shows in your Plausible dashboard, your setup works.

## Publish your container

Preview mode only runs in your own browser session. To start tracking real visitors, publish the container:

1. Click **Submit** in the top-right corner of your GTM workspace.
2. Add a version name and description if you like. It helps you keep track of changes.
3. Click **Publish**.

Until you publish, no data is collected from visitors to your site.

## Troubleshooting

### No stats after setting up

Make sure the container is published, not only saved, and that the initialization tag uses the **All Pages** trigger. Then check that the script ID matches the one in your Plausible site settings. For other causes, see [troubleshoot your integration](troubleshoot-integration.md).

### Custom events not firing

Use GTM's **Preview** mode to confirm the tag fires. Check that the trigger conditions match the actual interaction, that the event name matches your goal in Plausible exactly, and that the container is published. See [custom events troubleshooting](custom-event-goals.md#custom-event-not-showing-up) for more.

## What's next?

* [Get the most out of Plausible](your-plausible-experience.md)
* [Connect Google Search Console](google-search-console-integration.md) to see the search terms bringing you traffic
* Build custom reports with the [Data Studio connector](looker-studio.md)
