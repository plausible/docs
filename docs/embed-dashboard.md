---
title: Embed your dashboard on another website using an iFrame
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can embed your Plausible stats dashboard into any other website using an iFrame. This is useful in case you want to showcase your stats on your own website or if you want to integrate Plausible into your custom built client area.

## 1. Create a shared link

<img alt="Plausible Analytics" src={useBaseUrl('img/shared-stats.png')} />

You need to create a shared link to embed your dashboard into another website. The shared link is secure and impossible to guess. 

In the "**Visibility**" area of your website settings there's a "**Shared links**" section where you can create your shared link. Click on the "**+ new link**" button to do so. 

Click the "**Create shared link**" button and your new shared link will be displayed.

:::note
Make sure to keep the password field blank as it's technically not possible to embed a password-protected dashboard. When you try to embed a password-protected dashboard, the browser will show a "refused to connect" error message.
:::

## 2. Generate the embed code

In the "**Visibility**" area of your website settings there's the "**Embed dashboard**" section where you can generate the embed code. 

Enter your shared link URL, select the theme of the embed dashboard (light, dark or system), optionally choose a custom background color and click on the "**Generate embed code**" button.

:::note
You can set the background color as `transparent` in the embed code. It's much more convenient than figuring out the hex code for your background color.
:::

<img alt="Generate embed code" src={useBaseUrl('img/embed-dashboard-code.png')} />

### Want your embed to have default filters or time period?

Instead of using the default shared link URL for generating the embed, you can open the shared link, apply filters to your dashboard and use the URL with the applied filters. Those filters will then be automatically added to your embed dashboard every time it's loaded. Note that these are [our regular filters](filters-segments.md) and your visitors can remove or change them to view other stats as well.

:::note
Do you prefer to build a custom dashboard with only a selection of metrics accessible to your visitors? [Our stats API](stats-api.md) allows you to take individual metrics and create a custom-built dashboard within your UI in whichever shape or form you want. This requires more development time from your side but you get full flexibility.
:::

## 3. Paste the embed code into your website

Copy the embed code that's been generated and paste it wherever you want your Plausible stats dashboard to be embedded.

## Manual width mode

Normally, the embedded dashboard will render with a couple internal CSS rules that contain the dashboard:
```css
max-width: 1024px;
margin: 0 auto;
```

This gives a usable max width and centers the dashboard, but may not work with your design. If you want manual control over these rules, you can
set `?width=manual` in the shared link URL. In that case, the iframe will not set any CSS rules to contain and center itself, it will grow to whatever
container you create for it. This way you can choose your own max-width and to align the dashboard as you wish.
