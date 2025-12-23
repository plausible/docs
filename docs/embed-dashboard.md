---
title: Embed the dashboard without our branding into your user interface
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can embed your Plausible stats dashboard into any other website using an HTML iframe. This is useful in case you want to showcase your stats on your own website or if you want to [offer Plausible-powered web analytics dashboard (without our branding)](https://plausible.io/white-label-web-analytics) directly in your user interface.

## 1. Create a shared link

You need to create a shared link to embed your dashboard into another website. See our [shared link docs](shared-links.md#how-to-create-a-shared-link) to see how.

:::info Make sure to keep the password field blank
It's technically not possible to embed a password-protected dashboard. When you try to embed a password-protected dashboard, the browser will show a "refused to connect" error message.
:::

## 2. Generate the embed code

In the "**Visibility**" area of your website settings there's the "**Embed dashboard**" section where you can generate the embed code.

Enter your shared link URL, select the theme of the embed dashboard (light, dark or system), optionally choose a custom background color and click on the "**Generate embed code**" button.

:::tip You can set the background color as `transparent` in the embed code
It's much more convenient than figuring out the hex code for your background color
:::

Want your embed to have default filters or time period? Instead of using the default shared link URL for generating the embed, you can open the shared link, apply filters to your dashboard and use the URL with the applied filters. Those filters will then be automatically added to your embed dashboard every time it's loaded. Note that these are [our regular filters](filters-segments.md) and your visitors can remove or change them to view other stats as well.

<img alt="Generate embed code" src={useBaseUrl('img/embed-dashboard.png')} />

## 3. Paste the embed code into your website

Copy the embed code that's been generated and paste it wherever you want your Plausible stats dashboard to be embedded.

## Manual width mode

Normally, the embedded dashboard will render with a couple internal CSS rules that contain the dashboard:

```css
max-width: 1024px;
margin: 0 auto;
```

This gives a usable max width and centers the dashboard, but may not work with your site design. If you want manual control over these rules, you can
add `&width=manual` to the end of your shared link URL. For instance, if your shared link is `https://plausible.io/share/yourdomain.com?auth=O38--W2DDc75s0GJodlCV`, it would look like this `https://plausible.io/share/yourdomain.com?auth=O38--W2DDc75s0GJodlCV&width=manual`.

In that case, the iframe will not set any CSS rules to contain and center itself, it will grow to whatever
container you create for it. This way you can choose your own max-width and to align the dashboard as you wish. It would look like this if you wish to set the max width to 400px:

```html
<body>
  <div style="width: 400px;">
    <!-- the wrapping container lets you control the width -->
    <!-- below the embed code generated for &width=manual shared link -->
  </div>
</body>
```

:::tip Prefer to build a completely custom dashboard?
[Our stats API](stats-api.md) allows you to take individual metrics and create a custom-built dashboard within your UI in whichever shape or form you want. This requires more development time from your side but you get full flexibility
:::
