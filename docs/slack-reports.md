---
title: Get reports and traffic spike notifications into your Slack channel
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can enable your Plausible Analytics weekly and/or monthly reports and traffic spike notifications to be sent directly into your Slack channel.

## Go to Slack and generate an email address for your Slack channel

Slack allows you to create email addresses for channels in your workspace and send emails to those channels whenever you'd like. 

In Slack, click on the "**i**" details icon in the top right, then click on "**More**", select "**Send emails to channel**" and click "**Get channel email address**". Slack will then automatically generate an email address for your channel. 

You can read about additional options [Slack gives you for your email here](https://slack.com/intl/en-gb/help/articles/206819278-Send-emails-to-Slack).

## Enable weekly and/or monthly reports to be sent to your Slack channel email address

Now go into your Plausible account. 

Within the "**Email reports**" section of your website settings you can decide to enable weekly (every Monday) and/or monthly (every 1st day of the month) reports to be sent to your new Slack channel email address. 

Add your Slack channel email address as an individual recipient into the "**Report recipients**" field and click on the "**Add recipient**" button. 

You can set the reports to be sent to as many Slack email addresses as you want. You can remove individual report recipients or completely stop the scheduled reports at any time.

All the stats will display in your Slack channel and there's no need to go to the Plausible Analytics website to view them.

<img alt="Set reports to be sent to your new Slack channel email address" src={useBaseUrl('img/email-reports.png')} />

## Enable traffic spike notifications to be sent to your Slack channel email address

Within the "**Email reports**" section of your website settings in your Plausible account, you can decide to enable traffic spike notifications to be sent directly to your Slack channel email address. 

This will help notify you when your site has an unusually high number of current visitors. The email will include the number of current visitors and the top referral sources of current visitors. 

Add your newly created Slack channel email address as an individual recipient into the "**Notification recipients**" field and click on the "**Add recipient**" button. 

You can set the traffic spike notifications to be sent to as many Slack email addresses as you want. You can remove individual recipients or completely stop the traffic spike notifications at any time.

All the stats will display in your Slack channel and there's no need to go to the Plausible Analytics website to view them.

You also need to set the "**Current visitor threshold**" for your traffic spike notifications and click on the "**Save threshold**" button. The default treshold is at 10 current visitors but you can set it as low or as high as you want depending on your usual traffic numbers. 

You will get the traffic spike notification when your site reaches the threshold you've set. You'll get the notification for an individual website no more than twice in a 24 hour period.

<img alt="Get traffic spike notifications to your Slack channel email address" src={useBaseUrl('img/traffic-spike-notifications.png')} />
