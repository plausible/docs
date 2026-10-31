---
title: Install Plausible with the NPM package
sidebar_label: NPM package
description: "Add Plausible to React, Vue, Next.js and other JavaScript apps with the official @plausible-analytics/tracker NPM package. Setup, configuration, custom events and version pinning."
---

The official [@plausible-analytics/tracker](https://www.npmjs.com/package/@plausible-analytics/tracker) package lets you install Plausible through your package manager instead of adding a script tag. It runs the same tracking code as our script and is built and maintained by the Plausible team.

The package is a good fit when:

* You want to control exactly which version of the tracker runs on your site and [review changes before they go live](#pin-a-version-and-review-updates)
* Your site is a JavaScript app (React, Vue, Svelte, Next.js, Nuxt and similar) and adding a script tag to the `<head>` is awkward
* You want the tracker to be part of your own build, with types and imports like any other dependency

If none of these apply to you, [the script tag](plausible-script.md) is simpler. It picks up changes you make in your site settings automatically.

## Install the package

```bash
npm install @plausible-analytics/tracker
```

## Start tracking

Call `init` once, when your app loads in the browser:

```javascript
import { init } from '@plausible-analytics/tracker'

init({
  domain: 'example.com'
})
```

Use the domain exactly as you added it to your Plausible account. Pageviews are now tracked automatically, including page changes in single-page apps that use `pushState` routing.

`init` can only be called once. A second call throws an error, so make sure it doesn't run again when your app re-renders.

### Server-side rendering

The tracker needs browser APIs, so `init` and `track` don't work on the server. If you use Next.js, Nuxt, SvelteKit or another framework with server-side rendering, only call them on the client. In Next.js, for example, call `init` inside a `useEffect` in a client component that is rendered once in your root layout.

## Enable optional measurements in your code

This is the main difference from the script tag. With the script tag, you enable optional measurements such as outbound links in your [site settings](website-settings.md) and the script picks them up automatically. The NPM package doesn't read your site settings. Everything is configured in `init` and all optional measurements are off by default:

```javascript
init({
  domain: 'example.com',
  outboundLinks: true,
  fileDownloads: true,
  formSubmissions: true
})
```

These send events named `Outbound Link: Click`, `File Download` and `Form: Submission`. Each one only shows up in your dashboard once a goal with that name exists. Turning on the matching toggle in the **Tracking** area of your site settings creates the goal for you. You can also [add it yourself](custom-event-goals.md#create-a-custom-event-goal-in-your-plausible-account).

All configuration options:

| Option | Default | Description |
| --- | --- | --- |
| `domain` | | **Required.** Your site's domain as added in your Plausible account |
| `endpoint` | `"https://plausible.io/api/event"` | Send events through [your own proxy](/proxy/introduction) |
| `autoCapturePageviews` | `true` | Track pageviews automatically. Set to `false` to [send pageviews manually](script-extensions.md#manual-pageviews) |
| `hashBasedRouting` | `false` | Track page paths that use a `#` in the URL ([hashed page paths](hash-based-routing.md)) |
| `outboundLinks` | `false` | [Track outbound link clicks](outbound-link-click-tracking.md) |
| `fileDownloads` | `false` | [Track file downloads](file-downloads-tracking.md). Pass `{ fileExtensions: ['pdf', 'zip'] }` to track your own list of file types |
| `formSubmissions` | `false` | [Track form submissions](form-submissions-tracking.md) |
| `customProperties` | `{}` | [Custom properties](/custom-props/introduction) to attach to every event. Can be an object or a function that receives the event name |
| `transformRequest` | | Change or drop events before they're sent (for example for [custom locations](/custom-locations)). Return `null` to drop the event |
| `captureOnLocalhost` | `false` | Track events on `localhost` during development |
| `logging` | `true` | Log a message in the console when an event is ignored |
| `bindToWindow` | `true` | Make `track` available as `window.plausible`. Our [installation check](troubleshoot-integration.md) uses this to detect the tracker, so leave it on unless you have a reason not to |

The package includes TypeScript types for all options.

## Track custom events

Import `track` and give it the name of a [custom event goal](custom-event-goals.md):

```javascript
import { track } from '@plausible-analytics/tracker'

track('Signup', { props: { plan: 'business' } })
```

The second argument is optional and takes:

* `props`: [custom properties](/custom-props/for-custom-events) for this event
* `revenue`: the amount and currency for [revenue tracking](ecommerce-revenue-tracking.md), for example `{ amount: 15.99, currency: 'USD' }`
* `interactive`: set to `false` so the event doesn't affect bounce rate, for example for a video that plays on its own
* `url`: track the event on a different URL than the current page
* `callback`: a function called once the event has been sent or ignored

[CSS class names](custom-event-goals.md#add-a-css-class-name-to-the-element-you-want-to-track-on-your-site) such as `plausible-event-name=Signup` work with the NPM package too.

## Exclude your own visits

[Block your IP addresses](excluding.md) in your site settings. This works the same as with the script tag. If your IP address changes often, set the [`localStorage` flag](excluding-localstorage.md#excluding-your-own-visits) in your browser instead. The NPM package respects it too.

## Pin a version and review updates

With the script tag, our servers deliver the latest version of the tracker to your site. With the NPM package, the tracker is part of your own build, so the code running on your site only changes when you update the package.

By default, npm saves a version range such as `^0.4.6` in your `package.json`, which allows newer versions on a fresh install. To pin an exact version, install with:

```bash
npm install --save-exact @plausible-analytics/tracker
```

Commit your lockfile as well. When a new version is released, read the [changelog](https://github.com/plausible/analytics/blob/master/tracker/npm_package/CHANGELOG.md), review the changes and update when you're ready. The package is open source like the rest of Plausible, so you can read [the code](https://github.com/plausible/analytics/tree/master/tracker) behind every release.

## Verify your installation

Open your site, then open the **Network** tab in your browser's developer tools. Each pageview sends a POST request to `https://plausible.io/api/event` (or to your proxy). Your visit also shows up on the [realtime dashboard](realtime-dashboard.md). See [troubleshooting](troubleshoot-integration.md) if nothing is tracked.
