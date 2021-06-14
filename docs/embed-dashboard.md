---
title: Embed your dashboard on another website using an iFrame
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can embed your Plausible stats dashboard into any other website using an iFrame. This is useful in case you want to showcase your stats on your own website or if you want to integrate Plausible into your custom built client area.

## 1. Create a shared link

<img alt="Plausible Analytics" src={useBaseUrl('img/shared-stats.png')} />

You need to create a shared link in order to embed your dashboard into another website. The shared link is secure and impossible to guess. 

In the "**Visibility**" area of your website settings there's a "**Shared links**" section where you can create your shared link. Click on the "**+ new link**" button to do so. 

Do keep the password field blank as it's not possible to embed a password-protected dashboard. Click the "**Create shared link**" button and your new shared link will be displayed.

## 2. Generate the embed code

In the "**Visibility**" area of your website settings there's the "**Embed dashboard**" section where you can generate the embed code. 

Enter your shared link URL, select the theme of the embed dashboard (light, dark or system), optionally choose a custom background color and click on the "**Generate embed code**" button.

:::note
You can set the background color as `transparent` in the embed code. It's much more convenient than figuring out the hex code for your background color.
:::

<img alt="Generate embed code" src={useBaseUrl('img/embed-dashboard-code.png')} />

## 3. Paste the embed code into your website

Copy the embed code that's been generated and paste it wherever you want your Plausible stats dashboard to be embedded.
