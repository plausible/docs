---
title: Upgrade your Plausible script
---

In July 2025, Plausible released a new version of their tracking script. This document outlines
the differences from the old script and how to migrate.

## Why a new script?

Our previous approach with various script extensions could be uncomfortable to Plausible users
to manage. A new script also allows Plausible developers to build out new features.

## Getting the new snippet

You can see the new snippet within the "**Site Installation**" area of the "**General** section in your [site settings](website-settings.md).

Your Plausible tracking snippet should be inserted into [the Header (`<head>`) section of your site](plausible-script.md). Place the tracking script within the `<head> … </head>` tags.

## What has changed?

This section outlines what has changed in the new snippet and how to adjust your setup.1

### 1. Each site has a unique snippet

As a result, selecting new optional enhanced measurements no longer requires updating the snippet.

### 2. New feature: Form submission tracking

Tracking form submissions can now be toggled on and off in **Site Installation** settings.

### 3. Changed: Custom properties

If you were using data-attributes for custom properties, you will need to add `customProperties` option with your custom properties

```javascript
plausible.init({
  customProperties: {
    author: "John Doe"
  }
})
```

Read more about custom properties in [custom pageview properties](/custom-props/for-pageviews) documentation.

### 4. Changed: Custom tracking endpoint

The new script no longer supports the `data-api` attribute to send events to a custom endpoint. Set `endpoint` option instead:

```javascript
plausible.init({
  // Replace with your custom endpoint
  endpoint: "https://plausible.io/api/event"
})
```

### 5. Changed: custom file download types

To track file downloads only for certain file types, you will need to set `fileDownloads` option:

```javascript
plausible.init({
  fileDownloads: {
    fileExtensions: ["pdf"]
  }
})
```

By default, plausible tracks the following file types: pdf, xlsx, docx, txt, rtf, csv, exe, key, pps, ppt, pptx, 7z, pkg, rar, gz, zip, avi, mov, mp4, mpeg, wmv, midi, mp3, wav, wma, dmg

### 6. Changed: Tracking pageviews manually

If you were previously using the `manual` extension to track pageviews manually, you will need to set `autoCapturePageviews` option to `false`:

```javascript
plausible.init({
  autoCapturePageviews: false
})
```

### 7. Changed: Tracking on localhost

If you were previously using `local` extension to track events on localhost, you will need to set `captureOnLocalhost` option to `true`:

```javascript
plausible.init({
  captureOnLocalhost: true
})
```

### 8. Changed: Custom events and revenue features are automatically enabled

If you were already using these features, no additional steps are required. Documentation links:
- [Custom events](/custom-event-goals)
- [Ecommerce revenue and attribution tracking](docs/ecommerce-revenue-tracking.md)

### 9. Removed: `data-exclude`

The new script no longer supports the `data-exclude` and `data-include` attributes. See [alternative guide](/excluding.md) instead.

### 10. Removed: multiple domain support

The new script does not support sending stats to multiple dashboards at once anymore. Keep using the old script for this functionality.
