---
title: Custom event goals
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
If you use the Custom Events feature, then these count towards your billable monthly pageviews.
:::

If you want to track custom event goals like button clicks or form completions, you have to trigger these custom events from your website using JavaScript. Here are the steps you need to take to do that.

## 1. Trigger custom events with JavaScript on your site

First, make sure your tracking setup includes the second line as shown below

```html
<script async defer data-domain="<yourdomain.com>" src="https://plausible.io/js/plausible.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

This snippet creates a global function called `plausible` which can be used to trigger custom events from anywhere in your code.

Here’s what triggering a custom event looks like

```javascript
plausible('Signup')
```

The event name can be anything. As a second parameter, you can also send an object with options. The supported options at the moment are:

* `callback` – a function that is called once the event is logged successfully.
* `props` – an object with custom properties for the event

This is the whole extent of the API. It's intentionally very slim so as to keep the SDK small and quick to load.

If you want to trigger form submissions, button clicks etc. you need to implement the code for that yourself. This is an example of code we use to track custom events (trial signups) on our own website:

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

And here's an example of the code you need to insert if you're using the Contact Form 7 plugin on WordPress and want to see the number of visitors who use the contact form. In this example, there are two contact forms on two different pages and this is the code you should insert in the `head` section:

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

## 2. Create a custom event goal in your Plausible Analytics account

When you start sending custom events to Plausible Analytics, they won’t show up automatically. You’ll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering. The names must be an exact match to the one on your site for the conversions to show up in your analytics dashboard.

<img alt="Add your custom event goal" src={useBaseUrl('img/add-custom-event-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event. Goal conversions are listed at the very bottom of the dashboard.

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

Custom properties only accepts scalar values such as strings, numbers and booleans. Data structures such as objects, arrays etc. are not accepted.

Custom properties will show up automatically on your dashboard as long as you've added the goal itself. You don't need to manually add them in your settings.

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
