---
title: Your /sites landing page
---

import useBaseUrl from '@docusaurus/useBaseUrl';

When you log into your Plausible Analytics account, you are met with the ["**/sites**" landing page](https://plausible.io/sites), where we list all the websites you have access to in your account.

<img alt="Plausible Analytics" src={useBaseUrl('img/list-of-sites.png')} />

In the top right, you can access your account settings or log out of your account. Further down the page, on the right-hand side, you have the "**+ Add a website**" button, which allows you to [add a new site](add-website.md) to your account.

:::note
We use [Gravatar](https://gravatar.com) to get your account profile picture. If your picture doesn't display, please add the email address associated with your Plausible account to your Gravatar profile. We use a proxy for this request to ensure your information is not exposed to Gravatar. This method prevents the IP address, user agent and referrer header from being sent.
:::

The rest of the "**/sites**" landing page features all your sites. To give you a quick overview, we display the number of visitors in the last 24 hours next to each site. You can click on any website to enter [its stats dashboard](guided-tour.md), or you can click on the "**Settings**" icon on the right-hand side of the domain name to enter the [website settings section](website-settings.md).

:::note
We use pagination to keep the loading time fast if you have many sites in your Plausible account. Do you prefer to see all your sites on one page? You can use the "**?per_page=**" parameter like this: [https://plausible.io/sites?per_page=1000](https://plausible.io/sites?per_page=1000). With that link, all your sites will be listed on one page without pagination. You can then use the search functionality in your browser (press `cmd+f` on a Mac or `ctrl+f` on Linux and Windows) to instantly find the site you're looking for.
:::
