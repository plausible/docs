---
title: How to add the script to Buttondown
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[Buttondown](https://buttondown.email/) is a minimal and elegant tool for producing newsletters. There's an easy integration with Plausible Analytics so you can track your Buttondown newsletter to see the traffic numbers of your archives, external link clicks and which of your archive pages drive the most new subscribers. 

## How to track newsletter signups

Newsletter signups won’t show up automatically in your Plausible dashboard. You’ll have to configure the goal for them to show up.

To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `Subscribe`.

<img alt="Add Subscribe goal" src={useBaseUrl('img/add-a-subscribe-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. After you've completed this process, all the newsletter signups will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. 

You'll see "**Subscribe**" goal as soon as the first subscriber has been tracked. That's all you need to do. Plausible will automatically record new goals (including which page your subscriber is on) whenever you get a new subscriber.

## How to track outbound link clicks

Outbound link clicks won’t show up automatically in your Plausible dashboard. You’ll have to configure the goal for them to show up.

To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "**Goals**" section like you just did above. Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `Outbound Link: Click`.

<img alt="Add Outbound Link Click goal" src={useBaseUrl('img/outbound-link-click-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. After you've completed this process, all the external link clicks will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. 

You'll see "**Outbound Link: Click**" goal as soon as the first external link click has been tracked. That's all you need to do. Plausible will automatically record new external link clicks.

## Verify that the stats are being tracked

And that's it. You are now using Plausible Analytics to count your Buttondown archive stats including outbound link clicks and new subscribers. 

Now you can go to your Buttondown site and verify whether Plausible Analytics script has been added and to your Plausible Analytics account to see whether the stats are being tracked. See here [how to verify the integration](troubleshoot-integration.md).

The stats will look like this:

<img alt="Plausible dashboard for your Buttondown newsletter" src={useBaseUrl('img/buttondown-dashboard.png')} />
