---
title: Transfer ownership of a site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible allows you to transfer ownership of a site to a different user or to a [team](users-roles.md) you're part of.

This is useful for consultants and agencies working with clients. You set up the site, add custom events, email reports, traffic spike notifications and so on. When your job is done, you transfer ownership to your client.

Note that subscriptions are not transferred with the site. The new owner is responsible for having an active [Plausible subscription](subscription-plans.md).

:::tip Leaving the company?
Use [teams](users-roles.md) to invite another team owner, then have them remove you from the team.
:::

## Transfer to a different user

<img alt="Transfer ownership of a site to a different user" src={useBaseUrl('img/new-transfer-ownership-different-user.png')} />

1. Go to [site settings](website-settings.md) for the site you want to transfer
2. Click "**Danger Zone**" in the left sidebar
3. Under "**Transfer Site Ownership**", enter the recipient's email address
4. Click "**Request transfer**"

The recipient will get an email notification. They need to log in (or register for a Plausible account) and accept the request within 48 hours. If they don't have an active subscription, they'll need to upgrade before accepting.

After the transfer, you keep "**Guest Editor**" access to the site. The new owner can [change your role or remove your access](users-roles.md) at any time.

## Transfer to a team

<img alt="Transfer ownership of a site to a team" src={useBaseUrl('img/new-transfer-site-ownership-team.png')} />

1. Go to [site settings](website-settings.md) for the site you want to transfer
2. Click "**Danger Zone**" in the left sidebar
3. Under "**Change Teams**", select the destination team
4. Click "**Change team**"

The destination team must have an active subscription with a plan that supports the transfer.
