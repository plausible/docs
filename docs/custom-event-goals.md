---
title: Custom events
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
If you use the custom events feature, then these count towards your billable monthly pageviews.
:::

Custom events let you measure button clicks, subscription signups or any other action you want visitors to take. There are two ways to set them up:

- **Using CSS class names**: add a class to any HTML element you want to track. No JavaScript required. This is the easiest approach for most use cases and is covered in the first section below.
- **Using JavaScript**: call the `plausible()` function directly for more advanced tracking needs such as dynamic values, conditional logic or tracking non-click interactions. See the [manual JavaScript approach](#trigger-custom-events-manually-with-a-javascript-function) section.

:::tip Quick start options
If you're using WordPress or Google Tag Manager, you can set up custom events with our [WordPress plugin](https://plausible.io/wordpress-analytics-plugin) or [GTM template](https://plausible.io/gtm-template) without writing code. Plausible also offers automated tracking for [outbound link clicks](outbound-link-click-tracking.md), [file downloads](file-downloads-tracking.md) and [form submissions](form-submissions-tracking.md) straight from your site settings, [pageview goals](pageview-goals.md) for tracking visits to specific pages and [404 error pages](error-pages-tracking-404.md) with a small snippet of code.
:::

## Add a CSS class name to the element you want to track on your site

Tag the site element you want to track with a CSS class name. How to do this varies depending on the site builder, CMS or framework you've used to build your site.

For instance, if you're using WordPress, you can click on any block element you want to track such as a button. This will open up the block menu on the right-hand side of your screen.

<img alt="Click on any WordPress block element you want to track such as a button" src={useBaseUrl('img/wordpress-button-css-class-name.png')} />

You can then click on "Advanced" and add a CSS class name in the "Additional CSS class(es)" field. Add the CSS class name in this format: `plausible-event-name=MyEventName`. For instance, if you want to track clicks on a button, you could use: `plausible-event-name=Button+Click`.

:::tip To represent a space character in the event names, you can use a `+` sign
For example: `plausible-event-name=Button+Click` will display as `Button Click` in your dashboard
:::

<img alt="Add a CSS class name in the 'Additional CSS class(es)' field" src={useBaseUrl('img/wordpress-css-class-name.png')} />

### You can also add class names directly in HTML

If you can edit the raw HTML code of the element you want to track, you can also add the classes directly in HTML. For example:

```html
<!-- before -->
<button>Click Me</button>

<!-- after -->
<button class="plausible-event-name=Button+Click">Click Me</button>
```

Or if your element already has a class attribute, just separate the new ones with a space:

```html
<!-- before -->
<button class="some-existing-class">Click Me</button>

<!-- after -->
<button class="some-existing-class plausible-event-name=Button+Click">Click Me</button>
```

### Verify that the CSS classes were added correctly

After adding the class, please go back to your site, and verify that the class attribute got added with the exact required format. You can check it by right-clicking the element and inspecting it. This will show you the HTML code of the element.

In some cases, the tracking classes might be added to a wrapper `<div>` element (parent to the element you want to track), but don't worry, Plausible will still be able to track clicks on the child element if its parent has the necessary classes.

Some CMSs like Webflow do not support an equals sign (`=`) in the classnames. If you add a class attribute with the value `plausible-event-name=Signup`, but when you go back to your page and inspect the element, it might have `class="plausible-event-name-Signup"` (equals sign replaced with a hyphen). If that's the case, use a double dash (`--`) instead of the equals sign. For example: `plausible-event-name--signup`.

If your CMS does not support adding CSS classes, please expand the following section of instructions.

<details>

<summary>

### My site builder does not support adding CSS classes

If you're unable to add the classnames in your page editor, there's still a way for you to track custom events. This method includes copying and pasting some JavaScript code onto your page. You can expand this section and follow step-by-step instructions.

</summary>

This approach will be using the `id` attribute of your element, to add the CSS classes dynamically with JavaScript. The `id` attribute should already be present on your element in most site builders.

<h3>

1. Verify that your element has an `id` attribute

</h3>

Go to your website, right-click and inspect the element you want to track, which will show you the HTML code of that element. If there is the `id="...."` attribute, no matter the value, you can proceed to step 3.

<h3>

2. Add an `id` attribute in your CMS

</h3>

If the element you want to track does not have an `id` attribute by default, you can try adding one in the edit mode of your CMS. However, if you don't have that option, then this approach will be impossible and you will have to check out the section at the bottom of this page - [implementing custom events manually with JavaScript](#trigger-custom-events-manually-with-a-javascript-function).

<h3>

3. Add the JavaScript code to your page

</h3>

Once you have the `id` attribute, you can use it to add the CSS classnames dynamically with JavaScript. Here's the code that does that:

```html
<script>
    var toTag = [
        {
            elementId: 'my-element-id',
            classes: 'plausible-event-name=<event_name>'
        }
    ]

    document.addEventListener('DOMContentLoaded', function (_e) {
        toTag.forEach(function (tagObject) {
            var element = document.getElementById(tagObject.elementId)
            tagObject.classes.split(' ').forEach(function (className) {
                if (element) { element.classList.add(className) }
            })
        })
    })
</script>
```

You should copy this code into the `<head>` section of your page, and make the following adjustments to it:

1. In the line that says `elementId: 'my-element-id`, replace `my-element-id` with the `id` value from step 2 or 3.
2. In the line that says `classes: 'plausible-event-name=Event+Name'`, replace `Event+Name` with your desired custom event name. This will be the goal name that will be displayed in your dashboard later.

Once you have this script inserted on your page, Plausible will be able to track your element.

<h3>

4. Want to track multiple elements?

</h3>

If you want to track multiple elements across your site, you can use the same code from step 3 on all of your pages. The only modification you will have to make, is list as many pairs of `elementId` and `classes` as you want. For example, if you want to track three elements:

```javascript
var toTag = [
    {
        elementId: 'id-1',
        classes: 'plausible-event-name=My+First+Goal'
    },
    {
        elementId: 'id-2',
        classes: 'plausible-event-name=My+Second+Goal'
    },
    {
        elementId: 'id-3',
        classes: 'plausible-event-name=My+Third+Goal'
    },
]
```

</details>

## Create a custom event goal in your Plausible account

When you send custom events to Plausible, they won't show up in your dashboard automatically. You'll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to [your website's settings](website-settings.md) in your Plausible account and visit the "**Goals**" section. You should see a list of current goals with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The name must match the one you added as a CSS class name on your site for conversions to appear in your analytics dashboard. So in our example where you added a CSS class name `plausible-event-name=Button+Click`, the goal to add to your Plausible account is `Button Click` (plus is replaced by a space).

<img alt="Add your custom event goal" src={useBaseUrl('img/add-custom-event-goal.png')} />

Next, click on the "**Add goal**" button and you'll be taken back to the Goals page. When you navigate back to your Plausible dashboard, you should see the number of visitors who triggered the custom event. Custom events are listed at the bottom of your dashboard and will appear as soon as the first conversion has been tracked.

If you happen to be sending events to Plausible already, you might see the following message under the "**Add goal**" button:

<img alt="Add all custom event goals in a single action" src={useBaseUrl('img/add-all-event-goals.png')} />

You can click the link to automatically add all the goals you've been sending so far. If you end up not wanting to see some of them on the dashboard, you can simply remove them from the list.

That's it. You can now check out your goal conversions on the dashboard.

## Edit a Custom Event Goal

To edit a custom event goal, start by locating the custom event goal you want to update in the Goals list. Click on the "Edit goal" button next to it, which will bring up the goal editing form.

<img alt="Edit goal button" src={useBaseUrl('img/edit-goal-button.png')} />

From the pop up, you can select a new custom event from the dropdown menu that matches the updated custom event you want to track. You can also edit the display name.

<img alt="Edit custom even goal popup" src={useBaseUrl('img/edit-custom-event-goal-popup.png')} />

Once you’ve made the necessary changes, simply click "Update goal," and your updated settings will be applied immediately. The changes will be reflected in your Plausible Analytics dashboard, with the goal now tracking based on the new settings you’ve configured.

## Enhanced goal conversion tracking

### Monetary values to track ecommerce revenue

You can also send dynamic monetary values alongside custom events to track revenue attribution. Here's how to set up the [ecommerce revenue tracking](ecommerce-revenue-tracking.md).

### Attach custom properties

Custom properties can be attached to events to capture dynamic elements and to further break down goal conversions. You can use custom properties to create your custom metrics to collect and analyze data that Plausible doesn't automatically track. [Learn more here](/custom-props/for-custom-events).

#### Automatically attached properties

##### `url`

For clicks on links (`<a>` elements) tagged with `plausible-event-name=...`, we automatically track where the link is pointing (its `href` property). 

:::note
This property is not automatically attached when the tagged `<a>` element is within `<svg>` tags.
:::

There's no additional processing on our side for this value and the value of `href` is stored in full. If you're tagging links that contain sensitive data, you may want to stop this value from being sent. You can do so by providing the following `transformRequest` option when initializing the tracker.

```javascript
function omitAutomaticUrlProperty(payload) {
  if (payload.p.url) {
    delete payload.p.url
  }
  return payload
}

plausible.init({
  transformRequest: omitAutomaticUrlProperty
  // ... your other init options
})
```

### Create funnels to optimize your conversion rate

After you have the custom events in place, you can start creating [marketing funnels](funnel-analysis.md) to uncover possible issues, optimize your site and increase the conversion rate.

<details>

<summary>

## Trigger custom events manually with a JavaScript function

</summary>

For more specific tracking needs, you will have to write the JavaScript yourself. Here's what triggering a custom event looks like:

```javascript
plausible('Signup')
```

The first argument to this function ("Signup" in this case) is the name of your custom event (i.e. the name of your goal).

The second (optional) argument to the `plausible` function is an object with that currently supports the following options:

* `callback` - a function that is called for every event after it's logged, ignored or errored.
* `props` - an object with custom properties. Read more and see examples [here](/custom-props/for-custom-events)
* `revenue` - an object with revenue tracking fields. Read more and see examples [here](ecommerce-revenue-tracking.md)
* `interactive` - whether to include the event in bounce rate calculations (defaults to true).

Here's an example of the options argument using the `callback` and `props` options.

```javascript
plausible('Download', {callback: callback, props: {method: 'HTTP'}})

function callback(result) {
  if (result && result.status) {
    console.debug("Request to plausible done. Status:", result.status)
  } else if (result && result.error) {
    console.log("Error handling request:", result.error)
  } else {
    console.log("Request was ignored")
  }
}
```

To mark an event as non-interactive, you can set the `interactive` argument to `false`. This will exclude the event from bounce rate calculations.

```js
plausible('Custom Event', {interactive: false})
```

<h3>

Example: Tracking audio and video elements

</h3>

1. Give your audio or video element an `id` attribute to use it with JavaScript. If it already has an `id`, feel free to use that instead of `trackedMedia` in this example.

```html
<audio id="trackedMedia" controls src="your_audio.mp3">
    Your browser doesn't support this audio element
</audio>
```

2. Add the below script to your HTML page with the media element. In order to be able to use the media element with JavaScript, the script should be inserted **after** the media element itself. It is safe to insert it at the end of the `<body>` section, just before the closing `</body>` tag.

```html
<script>
    var mediaElement = document.getElementById('trackedMedia')

    // Set a flag to ignore the case where playing has already started and is resumed from paused state
    var mediaAlreadyStarted = false

    // Listen to the 'play' event on the media element. Ignore if already started playing and not finished yet
    mediaElement.addEventListener('play', function (e) {
        if (!mediaAlreadyStarted) {
            mediaAlreadyStarted = true
            plausible('Media Played')
        }
    })

    // Listen to the 'ended' event on the media element to reset the flag and start listening again
    mediaElement.addEventListener('ended', function (e) {
        mediaAlreadyStarted = false
    })
</script>
```

The same code also applies for `<video>` elements. Feel free to replace `Media Played` with a more suitable name for your custom event.

</details>
