---
title: Plausible Looker Studio connector
description: "Connect Plausible Analytics to Google Looker Studio using the official connector. Build custom reports and branded dashboards on the Business plan."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible keeps its dashboard intentionally simple. For cases where you need more flexibility, such as custom client reports, branded dashboards or views that combine Plausible data with ad spend or CRM data, we have an official connector for Google Looker Studio (formerly Data Studio).

Looker Studio is Google's free data visualization tool. The Plausible connector lets you pull your analytics data directly into Looker Studio and build any report layout you need.

The connector is available on the Business plan. Here's how to get started.

<div class="browser">
<img alt="Plausible Analytics Looker Studio template" src={useBaseUrl('img/plausible-looker-studio.png')} />
</div>

## Connect to Looker Studio

Connecting your Plausible Analytics account to Looker Studio is simple and can be done in a matter of minutes. First, you select our connector as a new data source in Looker Studio. Our connector is called Plausible Analytics and it is made by us (Plausible Analytics). You can find our connector in the Looker Studio public gallery, the in-product gallery or by visiting on [this direct link](https://lookerstudio.google.com/datasources/create?connectorId=AKfycbz88iSK4B6V-VoaiwocFu2dDp3CBRM0arAZoDjQ97SroAt9RtzgS6z3UCxpjJDi0ieVjQ).

Once you have selected the data source, you will be prompted to authorize the connector to access your Google account.

<div class="browser">
<img alt="Authorize the Plausible connector" src={useBaseUrl('img/source-looker.png')} />
</div>

The only permission that will be asked for is to make an external API request, which is how the connector pulls data from [the Plausible Analytics Stats API](stats-api.md).

## Insert your Plausible Stats API key

After authorizing your Google account, you will be prompted to enter your Plausible Analytics Stats API key. You can create a new API key for our Stats API by going to your Plausible Analytics account, navigating to **Account Settings** and clicking on the section called **API Keys**.

Click the **New API Key** button and be sure to save the result as you will only see the key once. However, you can always delete the key and create a new one if you no longer remember what it is.

<div class="browser">
<img alt="Create your Plausible stats API key" src={useBaseUrl('img/create-stats-api-key-looker.png')} />
</div>

Simply paste your API key into Looker Studio when prompted. After that, you'll see a dropdown menu showing all the sites linked to your Plausible account.

<div class="browser">
<img alt="Insert your Plausible API key" src={useBaseUrl('img/plausible-api-looker.png')} />
</div>

This means you have successfully linked your Plausible Analytics account to Looker Studio.

## Configure the Plausible Looker Studio connector

You can select one or more of your Plausible sites to create a custom report. Simply tick the box next to each site that you want to include data for.

At this stage, you can check **Allow "Plausible Site(s)" to be modified in reports**. This default option in Looker Studio lets you add a dropdown in your report to switch between your Plausible sites. If you don’t check it, you won’t have this feature.

You also have the ability to choose whether or not you want to constantly pull data in real-time by checking the **Data Refreshed in Real-time** box. Looker Studio doesn’t refresh automatically, so this option ensures it fetches fresh data whenever you make changes to your report, like reordering tables or adding metrics.

If this box is not checked, the connector will by default cache data for 6 hours. This will make your reports quicker and will limit the number of API requests used by the connector which for most Plausible plans are limited to 600 per hour. If you have special needs for more API requests per hour, please [contact us](https://plausible.io/contact) to request more capacity.

Once these options are configured, you can click **Connect** and you will see a list of all available fields for data and metrics that you can pull from Plausible.

<div class="browser">
<img alt="Configure the Plausible Looker Studio connector" src={useBaseUrl('img/choose-site-and-connect-looker.png')} />
</div>

## Create your custom reports

Finally, you can either click on **Create Report** or **Explore** to begin using your Plausible data in Looker Studio. Explore is best for ad-hoc data exploration while reports are best for creating set reports that you can share with others.

That's it! You're ready to start creating your custom reports using the Plausible Analytics data.

You can explore this [simple report](https://lookerstudio.google.com/s/gm8gS_IpBiQ) and this [advanced report](https://lookerstudio.google.com/s/ltrWC2jaK4Q) that we’ve created in Looker Studio which you can use as a template to start building your own custom reports.

If you need some help on how to use Looker Studio, take a look at [our Looker Studio beginner's guide](https://plausible.io/blog/google-looker-studio-guide).
