---
title: Looker Studio Connector
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In order to focus on simplicity and speed, Plausible Analytics does not support the native ability to create custom reports directly in our dashboard. However, there are some advanced uses where creating custom reports is necessary.

For this reason, we have created an official integration with the free data visualization tool, Google Looker Studio (formerly known as Data Studio). You can use our Looker Studio connector to build custom reports with your Plausible Analytics data.

<img alt="Plausible Analytics Looker Studio template" src={useBaseUrl('img/plausible-looker-studio.png')} />

Here's how to get started with our official Looker Studio connector.

## Connect to Looker Studio

Connecting your Plausible Analytics account to Looker Studio is simple and can be done in a matter of minutes. First, you select our connector as a new data source in Looker Studio. You can either select it from the [Looker Studio connector gallery](https://lookerstudio.google.com/data) or you can follow [this direct link](https://lookerstudio.google.com/datasources/create?connectorId=AKfycbz88iSK4B6V-VoaiwocFu2dDp3CBRM0arAZoDjQ97SroAt9RtzgS6z3UCxpjJDi0ieVjQ).

Once you have selected the data source, you will be prompted to authorize the connector to access your Google account.

<img alt="Authorize the Plausible connector" src={useBaseUrl('img/source-looker.png')} />

The only permission that will be asked for is to make an external API request, which is how the connector pulls data from [the Plausible Analytics Stats API](stats-api.md).

## Insert your Plausible stats API key

After authorizing your Google account, you will be prompted to enter your Plausible Analytics stats API key. You can create a new API key for our stats API by going to your Plausible Analytics account, navigating to "**Account Settings**" and clicking on the section called "**API Keys**".

Click "**New API Key**" and be sure you save the result as you will only see the key once. However, you can always delete the key and create a new one if you no longer remember what it is.

<img alt="Create your Plausible stats API key" src={useBaseUrl('img/create-stats-api-key-looker.png')} />

Then you will just need to paste your API key into Looker Studio where you are prompted to enter your key. Once you do this, you will see a dropdown menu with all of the Plausible Sites connected to your account.

<img alt="Insert your Plausible API key" src={useBaseUrl('img/plausible-api-looker.png')} />

This means you have successfully linked your Plausible Analytics account to Looker Studio.

## Configure the Plausible Looker Studio connector

:::note
Our connector is currently in beta and undergoing a review by Google. This is why you see the note stating: "This connector has not been verified or reviewed"
:::

You can select one or more of your Plausible sites to create a custom report. Simply tick the box next to each site that you want to include data for.

At this stage, you can check to "**Allow "Plausible Site(s)" to be modified in reports**". This option is something Looker Studio presents by default. It enables you to have a report with a drop-down to toggle your Plausible site(s) directly in the report. Not checking this box would disable that ability.

You also have the ability to choose whether or not you want to constantly pull data in real-time by checking the "**Data Refreshed in Real-time**" box. Looker Studio does not refresh automatically but what this does is it will force Looker Studio to pull fresh data whenever you make a change to your report, say changing the order of a table or adding new metrics.

If this box is not checked, the connector will by default cache data for 6 hours. This will make your reports quicker and will limit the number of API requests used by the connector which for most Plausible plans are limited to 600 per hour. If you have special needs for more API requests per hour, please [contact us](https://plausible.io/contact) to request more capacity.

Once these options are configured, you can click "**Connect**" and you will see a list of all available fields for data and metrics that you can pull from Plausible.

<img alt="Configure the Plausible Looker Studio connector" src={useBaseUrl('img/choose-site-and-connect-looker.png')} />

## Create your custom reports

Finally, you can either click on "**Create Report**" or "**Explore**" to begin using your Plausible data in Looker Studio. Explore is best for ad-hoc data exploration while reports are best for creating set reports that you can share with others.

That's it! You're ready to start creating your custom reports using the Plausible Analytics data.

You can explore this [simple report](https://lookerstudio.google.com/s/gm8gS_IpBiQ) and this [advanced report](https://lookerstudio.google.com/s/ltrWC2jaK4Q) that we’ve created in Looker Studio which you can use as a template to start building your own custom reports.

If you need some help on how to use Looker Studio, take a look at [our Looker Studio beginner's guide](https://plausible.io/blog/google-looker-studio-guide).

<img alt="Create your custom reports" src={useBaseUrl('img/create-report-looker.png')} />
