---
title: Internal link click tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
This is an example of a simple JavaScript that you can use to track clicks on internal links. It is experimental and not the most accurate way but we present it here as an easy to use example for those without much JavaScript experience and those that don't have any developer help. It may not track all clicks. For best accuracy, add `target="_blank"` to open the tracked links in new window.
:::

Goals make it easy to track internal link clicks. Here's how you can set it up:

## 1. Trigger custom events with JavaScript on your site

First, make sure to add the second line as shown below to the tracking snippet in the `<head>` section of your site:

```html
<script defer data-domain="<yourdomain.com>" src="https://plausible.io/js/plausible.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

This snippet creates a global function called `plausible` which can be used to trigger custom events such as link clicks from anywhere in your code.

## 2. Add the onclick element to the links you want to track

Here's an example of HTML that tracks all the clicks on a link with the goal name being "**About Us**":

```html
<a href="/about" onclick="plausible('About Us')">learn more about us</a>
```

And you can use our custom properties to split different clicks. For instance if you have two different links to your about page, you can see which of these makes a bigger difference and gets more clicks.

Here's an example of HTML that tracks all the clicks with the goal name being "**About Us**" and the clicks from the "**Header Menu**":

```html
<a href="/about" onclick="plausible('About Us', {props: {method: 'Header Menu'}})">learn more about us</a>
```

Here's an example of HTML that tracks all the clicks with the goal name being "**About Us**" and the clicks from the "**Footer Menu**":

```html
<a href="/about" onclick="plausible('About Us', {props: {method: 'Footer Menu'}})">learn more about us</a>
```

This is completely flexible and you can track whatever links you want and you can name the goals and custom properties whatever you wish.

## 3. Create a custom event goal in your Plausible Analytics account

When you start sending custom events to Plausible Analytics, they won’t show up automatically. You’ll have to configure the goal for the conversion numbers to show up.

To configure a goal, go to your website’s settings in your Plausible Analytics account and scroll down to the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter the name of the custom event you are triggering.

The names must be an exact match to the one in your HTML code for the conversions to show up in your analytics dashboard (in the example above the goal name would be "**About Us**").

You don't need to add all the custom properties themselves (header menu and footer menu in the example above). They will show up in your dashboard automatically as long as you've added the main goal name ("**About Us**" in this example).

<img alt="Add your custom event goal" src={useBaseUrl('img/internal-link-click-tracking.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page.

When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who triggered the custom event by clicking on the link you're tracking. Goal conversions are listed at the very bottom of the dashboard.

By clicking on the goal name itself, you will see the overview with the number of clicks on the different custom properties you have set (header menu and footer menu in the example above).
