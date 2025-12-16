---
title: Share your stats with a private and secure link
---

Shared links are useful for specific use cases such as if you want to share your stats with (potential) partners or advertisers. Or if you're an agency or working as a freelancer and want to share the stats [with your clients](https://plausible.io/for-freelancers-agencies). You can also use shared links to [embed the unbranded Plausible dashboard](embed-dashboard.md) directly into your site or product.

:::tip Want to share the stats with your team members instead?
See how to [invite team members and set user roles](users-roles.md)
:::

## How to create a shared link

In the "**Visibility**" area of your website settings there's a "**Shared links**" section. This is where you can decide to share your dashboard by generating a shared link. Click on the "**Add shared link**" button to do so. The shared link is secure and impossible to guess by default.

People that you send your shared link to can view the stats dashboard without having a Plausible Analytics account and without needing to log in. They can only view the specific dashboard that you shared and can't see any other sites that you have added to your Plausible account.

### Options

#### Name

This won't be visible to anyone viewing the link.

#### Password

If you add password protection to the shared link, people that you send your shared link to can only view the stats if they enter the password.

You can only set the password when creating the shared link, and you won't be able to see, edit, or remove the password from this link later on. If you forget it, you'll have to delete the link and create a new one.

#### Limit to segment

If you enable this option, anyone who opens the dashboard using the shared link will always see data filtered by the [selected segment](https://plausible.io/docs/filters-segments#how-to-save-a-segment) only. Only site segments (i.e. segments that anyone on your team can use) can be used.

Viewers won't be able to remove that segment from the dashboard. They can see which filters are included in it and they can add more filters on top of it.

This makes it possible to share only the part of your analytics that matters to a specific audience. For example, you might want to share data only for visitors from a certain country or only for traffic related to a campaign. It prevents viewers from changing the base filters and seeing data you did not intend to share.

:::info
As an example, if the selected segment contains the filters "Country is Estonia or Poland" and "Page is not /private", visitors will be able to drill down further by adding "Country is Estonia" filter, but if they try to break out with an additional "Country is Italy" filter, they will see no data.
:::

## How to edit a shared link

Click on the pencil icon next to the link in the links list if you want to edit the shared link.

## How to remove a shared link

Click on the trash can icon next to the link in the links list if you want to remove the shared link.
