---
title: Update your Plausible script
---

In October 2025, we introduced an updated version of the Plausible tracking script. This guide walks you through what’s new and how to smoothly transition from the old script.

## Why a new script?

Previously, managing different script extensions could be cumbersome for Plausible users. The new script streamlines the process and makes it easier for our developers to introduce new features as well.

## Getting the new snippet

You can see the new snippet within the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

Your Plausible tracking snippet should be inserted into [the Header (`<head>`) section of your site](plausible-script.md). Place the tracking script within the `<head> … </head>` tags.

## What has changed?

This section outlines what has changed in the new snippet and how to adjust your setup.

### 1. Unique snippet per site

Each site now has its own snippet. This means you no longer need to update the snippet when enabling new optional enhanced measurements.

### 2. New: Form submission tracking

You can now enable or disable [form submission tracking](https://plausible.io/docs/form-submissions-tracking) directly from the **Site Installation** settings.

### 3. Updated: Custom properties

If you previously used data-attributes for custom properties, you will need to add `customProperties` option with your custom properties

```javascript
plausible.init({
  customProperties: {
    author: "John Doe"
  }
})
```

Read more about custom properties in [custom pageview properties](/custom-props/for-pageviews) documentation.

### 4. Updated: Custom tracking endpoint

The new script no longer supports the `data-api` attribute to send events to a custom endpoint. Set `endpoint` option instead:

```javascript
plausible.init({
  // Replace with your custom endpoint
  endpoint: "https://plausible.io/api/event"
})
```

### 5. Updated: custom file download types

To track file downloads only for certain file types, you will need to set `fileDownloads` option:

```javascript
plausible.init({
  fileDownloads: {
    fileExtensions: ["pdf"]
  }
})
```

By default, Plausible tracks the following file types: `pdf`, `xlsx`, `docx`, `txt`, `rtf`, `csv`, `exe`, `key`, `pps`, `ppt`, `pptx`, `7z`, `pkg`, `rar`, `gz`, `zip`, `avi`, `mov`, `mp4`, `mpeg`, `wmv`, `midi`, `mp3`, `wav`, `wma`, `dmg` 

### 6. Updated: Hashed page paths

If you were previously using a hash based routing and had a `.hash` in your script path, you will need to set `hashBasedRouting` option:

```javascript
plausible.init({
  hashBasedRouting: true
})
```

See [Hashed page paths guide](/hash-based-routing.md) for details.

### 7. Updated: Tracking pageviews manually

If you were previously using the `manual` extension to track pageviews manually, you will need to set `autoCapturePageviews` option to `false`:

```javascript
plausible.init({
  autoCapturePageviews: false
})
```

See [Custom locations guide](/custom-locations) for details.

### 8. Updated: Tracking on localhost

If you were previously using `local` extension to track events on localhost, you will need to set `captureOnLocalhost` option to `true`:

```javascript
plausible.init({
  captureOnLocalhost: true
})
```

### 9. Simplified: Custom events and revenue features are automatically enabled

If you were already using these features, no additional steps are required. See:
- [Custom events](/custom-event-goals)
- [Ecommerce revenue and attribution tracking](docs/ecommerce-revenue-tracking.md)

### 10. Removed: `data-exclude` and `data-include`

The new script no longer supports the `data-exclude` and `data-include` attributes. See [alternative guide](/excluding.md) instead.

### 11. Removed: multiple domain support

The new script no longer supports sending stats to multiple dashboards simultaneously. Continue using the old script if you need this functionality.

## Google tag manager {#gtm}

If you previously installed Plausible through Google Tag Manager, remove the old tag and reinstall it [using tag manager gallery](/docs/google-tag-manager.md) instructions.
