---
title: How to add the script to your Discourse community
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add Plausible Analytics tracking code to your Discourse community by adding a component. Since Discourse uses hash-based routing for the post threads, you should to use [our special hash-based script](hash-based-routing.md) on Discourse forums. You may also want to add some of the other options like file-downloads.

## Step 1: Get your Plausible snippet

We display your snippet during the process of adding a new site to your account. You can also see the snippet within the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

## Step 2: Install snippet in Discourse

* Go to Admin > Customize > Appearance > Components in your Discourse admin to create a new component.

* Click 'Install' and then 'Create New +'. Give it a friendly name like 'Plausible Analytics', make sure the Type shows 'Component', and click 'Create'.

* For the 'Include Component...' section, click the 'Add All Themes' button to ensure that this tracker is enabled across all themes. However, you may have themes that you don't want to track (maybe a special theme for Admins) in which case you can use the drop-down to select the specific themes where you want the Plausible script added.

* Then click on the 'Edit CSS/HTML' button. Make sure you're in the 'Common' section (not 'Desktop' or 'Mobile'). Go to the `<head>` section (not the 'header' but the 'head') and paste in your Plausible Analytics script tag from step 1.

* In the snippet, update `plausible.init()` to `plausible.init({ hashBasedRouting: true })`. This allows plausible to track hashed page paths that Discourse uses during navigation.

* Note: If you're using a proxy, see [relevant instructions](/proxy/introduction.md).

* After adding your code, click on the "**Save**" button at the bottom and go back to the component screen. If it saved properly, you should see the `head` section called out as a 'custom section' under the CSS/HTML header.

Discourse will automatically add a nonce to the script to satisfy the Content Security Policy headers so no further action is necessary for that.

Now you can go to your Discourse community and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).
