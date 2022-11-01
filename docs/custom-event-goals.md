---
title: Custom event goals
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
If you use the Custom Events feature, then these count towards your billable monthly pageviews.
:::

# Out-of-the-box custom event tracking

Plausible provides an easy way to track custom events such as:

- Link clicks
- Form submits
- Any other HTML element (`<button>`, `<div>`, etc...) clicks

through CSS classes. For a quick overview of how these elements are tracked, see the [Tracking behavior depends on the element type](#tracking-behavior-depends-on-the-element-type) section. To start tracking any of the above custom events on your site, please go through the steps below.

## 1. Change your Plausible snippet

You will need to use the `tagged-events` script extension. All you have to do is change the JavaScript filename in the `src` attribute of your Plausible snippet. For example:

- `https://plausible.io/js/script.js` &rarr; `https://plausible.io/js/script.tagged-events.js`, or
- `https://yourproxy.com/script.manual.js` &rarr; `https://yourproxy.com/script.manual.tagged-events.js` (if you're using a proxy)

## 2. Add special classes to the elements you want to track

In order to hook up a custom event to your chosen element, you will need to tag it with some special class names. In addition to telling Plausible that the element should be tracked, these class names also determine the name and properties of your custom event.

### Options for class names

| Class name                           | Description                                                                                                                                            |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `plausible-event-name=<event_name>`  | **Required** for Plausible to track the element, as you cannot have a custom event without a name. Example: `plausible-event-name=Signup`                               |
| `plausible-event-<property>=<value>` | **Optional**. It allows you to define custom properties that are sent with your custom event. For example `plausible-event-position=footer`. <br /><br />You can add as many of these classes as you want. All the properties will then be added to your custom event. |

:::note
To represent a space character in event names or property values, you can use a `+` sign. For example:

- `plausible-event-name=Subscribe+Newsletter`
- `plausible-event-author=John+Doe`

Spaces in custom property names (`author` in the above example) are not allowed.
:::

### Adding classes to HTML elements

Depending on the technologies your site is built with, the process of adding classes to elements is different. 

#### Can you change the HTML code?

If you can, just add the classes to the elements you want to track. For example:

```html
<!-- before -->
<button>Click Me</button>

<!-- after -->
<button class="plausible-event-name=Button+Click plausible-event-position=Footer">Click Me</button>
```

Or if your element already has a class attribute, just separate the new ones with a space:

```html
<!-- before -->
<button class="some-existing-class">Click Me</button>

<!-- after -->
<button class="some-existing-class plausible-event-name=Button+Click plausible-event-position=Footer">Click Me</button>
```

#### Can you add custom (CSS) classes from your CMS page editor?

In this case, you can just add the necessary classes to the element you want to track. After adding the class, please go back to your site, and verify that the class attribute got added with the exact required format. You can check it by right-clicking the element and inspecting it. This will show you the HTML code of the element.

In some cases, the tracking classes might be added to a wrapper `<div>` element (parent to the element you want to track), but don't worry, Plausible will still be able to track clicks on the child element if its parent has the necessary classes. 

If the class name format has been changed by your CMS, Plausible will most likely not be able to track it. If that's the case, please keep reading the below instructions.

#### Does the element you want to track have an `id` attribute, or can you add one?

If the element already has an `id` you can use that. If it doesn't, go ahead and add a unique `id` attribute.

You can use this `id` to add the class names to your element dynamically with JavaScript. Here's the code you will have to insert in the `<head>` section of the page with the element you want to track:

```html
<script>
    var toTag = [
        {
            elementId: 'my-custom-event-element',
            classes: 'plausible-event-name=<event_name> plausible-event-<property>=<value>'
        }
    ]

    document.addEventListener('DOMContentLoaded', function (_e) {
        toTag.forEach(function (tagObject) {
            var element = document.getElementById(tagObject.elementId)
            tagObject.classes.split(' ').forEach(function (className) {
                element.classList.add(className)
            })
        })
    })
</script>
```

In this code, you will have to change the `elementId` and `classes` keys in the `toTag` variable. If you want to track multiple elements on one page, you can do it like this:

```javascript
var toTag = [
    {
        elementId: 'my-custom-event-element',
        classes: 'plausible-event-name=<event_name> plausible-event-<property>=<value>'
    },
    {
        elementId: 'another-custom-event-element',
        classes: 'plausible-event-name=<event_name> plausible-event-<property>=<value>'
    },
    // ...
]
```

Once you have this script running on your site, it will add your class names as soon as the HTML content is loaded on the page, and Plausible will be able to track your element.

## 3. Create a custom event goal in your Plausible Analytics account

When you start sending custom events to Plausible Analytics, they won’t show up automatically. You’ll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to [your website’s settings](website-settings.md) in your Plausible Analytics account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The names must be an exact match to the one on your site for the conversions to show up in your analytics dashboard.

<img alt="Add your custom event goal" src={useBaseUrl('img/add-custom-event-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event. Goal conversions are listed at the very bottom of the dashboard and they will show up automatically as soon as there has been at least one goal completion.

## Tracking behavior depends on the element type

#### Link - `<a>`

- Triggers events when the link is clicked/middle-clicked with a mouse, or touched on mobile.
- A property called `url` is automatically added as a custom event property with the `href` value of the link (that is the URL where the link points to.

#### Form - `<form>`

- Triggers events when a `submit` event happens on the `<form>` element. This means that Plausible captures not only clicking a submit button, but also pressing the `enter` key to submit the form.

#### All other elements - `<div>`, `<button>`, `<h1>`, `<span>`, ...

- Triggers events when the element is clicked/middle-clicked with a mouse, or touched on mobile.

<br />
<details>
<summary>

## Want to trigger events manually with custom JavaScript?

</summary>

## Triggering events

First, make sure your tracking setup includes the second line as shown below:

```html
<script defer data-domain="<yourdomain.com>" src="https://plausible.io/js/script.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

This snippet creates a global function called `plausible` which can be used to trigger custom events from anywhere in your code.

Here’s what triggering a custom event looks like:

```javascript
plausible('Signup')
```

The event name can be anything. As a second parameter, you can also send an object with options. The supported options at the moment are:

* `callback` – a function that is called once the event is logged successfully.
* `props` – an object with custom properties for the event

This is the whole extent of the API. It's intentionally very slim so as to keep the SDK small and quick to load.

## Using custom props

Custom properties can be attached to events to capture dynamic elements and to further break down goal conversions. You can use custom properties to create your custom metrics to collect and analyze data that Plausible doesn’t automatically track.

You can then filter and sort your goals by custom event properties in your Plausible dashboard. For those coming from Google Analytics, custom properties are roughly the same concept as _custom dimensions_ in GA.

For example, in addition to tracking file downloads you might want to know which supported download method your visitors are using. Instead of creating separate goals for each download method, you can send a custom property instead:

```javascript
plausible('Download', {props: {method: 'HTTP'}})
```

This way you can neatly track total downloads and also break them down by the method without cluttering your dashboard. Here's how it will look like:

<img alt="Custom property breakdown" src={useBaseUrl('img/custom-property-breakdown.png')} />

Want to have multiple custom properties for the same event? You can do it like this:

```javascript
plausible('Download', {props: {method: 'HTTP', Region: 'Europe'}})
```

The number of custom properties you can add per event is unlimited. And the names can be anything that you want. In our example, there are 4 properties that have been set up for segmenting: `Version, Region, OS, Method`.

Custom properties only accepts scalar values such as strings, numbers and booleans. Data structures such as objects, arrays etc. aren't accepted.

Custom properties will show up automatically on your dashboard as long as you've added the goal itself. You don't need to manually add them in your settings.

Plausible will display `(none)` in your dashboard when you send a custom property key with no value, or `null`/`undefined` as a value.

Note that you must ensure that no personally identifiable information (PII) is sent to Plausible Analytics with custom properties. PII is information that could be used on its own to identify, contact, or precisely locate an individual. This includes:

* full names or usernames
* email addresses
* mailing addresses
* phone numbers
* credit card information
* passport numbers
* precise locations
* IP addresses
* pseudonymous cookie IDs, advertising IDs or other pseudonymous end user identifiers

## Code examples

### Tracking form submits

This is an example of code we use to track custom events (trial signups) on our own website:

```javascript
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  setTimeout(submitForm, 1000);
  var formSubmitted = false;

  function submitForm() {
    if (!formSubmitted) {
      formSubmitted = true;
      registerForm.submit();
    }
  }

  plausible('Signup', {callback: submitForm});
})
```

### Contact Form 7 plugin on WordPress

Here's an example of the code you need to insert if you're using the Contact Form 7 plugin on WordPress and want to see the number of visitors who use the contact form. In this example, there are two contact forms on two different pages and this is the code you should insert in the `head` section:

```html
<script>
document.addEventListener( 'wpcf7mailsent', function( event ) {
  if ( '1174' == event.detail.contactFormId ) {
    plausible('FormProject')}
  if ( '464' == event.detail.contactFormId ) {
    plausible('FormContact')}
}, false );
</script>
```

### Tracking audio and video elements

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
