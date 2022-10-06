---
title: Outbound link click tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Outbound link click tracking" src={useBaseUrl('img/outbound-link-click-tracking.jpeg')} />

:::note
If you use the Outbound link click tracking feature, then these count towards your billable monthly pageviews.
:::

Outbound link click tracking is essential for many site owners and Plausible helps you automate this process. With our "**Outbound Link Click Tracking**" you can:

* See which external URLs are clicked the most
* See on which of your pages the particular outbound link gets the clicks
* Filter the dashboard by external URL to see what type of visitors click the most (referral source, country, device, browser, OS)

Check out this blog post for more details on the value of [tracking outbound link clicks](https://plausible.io/blog/track-outbound-link-clicks).

"**Outbound Link Click Tracking**" is an enhanced measurement and not included in our default script. This is because we want to keep the default script as simple and lightweight as possible. The [additional enhanced measurements](script-extensions.md) you can choose to add depending on your needs.

If you want to track external link clicks, here's what you need to do:

## Step 1: Change the Plausible script snippet

Change your Plausible script snippet `src` attribute from `https://plausible.io/js/script.js` to `https://plausible.io/js/script.outbound-links.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to Plausible):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.outbound-links.js"></script>
```

As usual, you need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Do this for all the websites where you'd like to enable outbound link click tracking. This is the only tracking script you need. You don't need to keep the old script. Your stats will keep tracking without interruption, and you won't lose any of your old data.

:::note
Do you want to use the outbound link clicks feature alongside the [file downloads feature](file-downloads-tracking.md)? You can combine any of our extensions by changing the `src` attribute in the snippet. In this case, change it to `script.outbound-links.file-downloads.js`.
:::

## Step 2: Create a custom event goal in your Plausible Analytics account

Outbound link clicks won’t show up automatically. You’ll have to configure the goal for them to show up on your dashboard.

To configure a goal, go to [your website’s settings](website-settings.md) in your Plausible Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `Outbound Link: Click`.

<img alt="Add Outbound Link Click goal" src={useBaseUrl('img/outbound-link-click-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. After you've completed this process, all the external link clicks will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see the "**Outbound Link: Click**" goal as soon as the first external link click has been tracked.

## See all the outbound link clicks in your dashboard

Click on "**Outbound Link: Click**" to see the full list of all clicks on all external links and have your dashboard filtered by external clicks only. You can see:

* The number of total external link clicks
* The number of unique external link clicks
* The conversion rate
* Top referral sources that lead to clicks
* Top pages that drive the clicks
* Countries that click on external links
* Devices (screen size, browser, OS) that click on external links

Click on a particular external URL to filter the dashboard by those clicks only and get the full overview of that specific URL.

:::note
Are you using cloaked affiliate links on your site? Here's how to automatically [track clicks on cloaked affiliate links](tracking-cloaked-affiliate-links.md)
:::
