---
title: Troubleshoot your integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

After you've added the Plausible Analytics script to your site, you can visit your site and the dashboard should update instantly with your visit. There are no delays in the data. The dashboard goes live and displays the data as soon as the first visitor is counted.

## Verify if the script is installed on your site

After you've added the Plausible Analytics script to the HTML of your website, you should be able to see the script installed. 

You can load your website, open the browser inspector (press F12 on Firefox or Chrome), and ensure that the Plausible Analytics script is loading in the "Network" tab.

<img alt="Ensure that the Plausible Analytics script is loading in the "Network" tab" src={useBaseUrl('img/dev-tools-troubleshoot.png')} />

Alternatively, you can verify this by viewing the HTML of your site in your browser. Visit your site, right-click anywhere on the page and choose "**View Page Source**". Then press `cmd+f` on a Mac or `ctrl+f` on Linux and Windows to search. Type `plausible` to search for the Plausible Analytics script.

## Is Plausible script not installed on your site? 

You should see the Plausible Analytics tracking script in the source code of your website. If you cannot see the script, please double check if you've inserted it correctly. Installing Plausible on a site can be a slightly different process depending on what tools you're using. 

We've put together several integration guides that cover popular website builders and content management systems (CMS) such as WordPress and Ghost. Thanks to the members of our community, there are also community integrations and plugins for several frameworks such as Hugo and GatsbyJS. These can help you set up and start counting your site visitors in no time. 

Here's [the full list of all integrations and guides](integration-guides.md).

## Plausible script is on your site but no stats on your dashboard?

* Are you using a Content Security Policy? Do not forget to add our domain specifically to your CSP.

* Running on localhost? Our script automatically disables itself when running on localhost.

* Using cache? Do purge the cache just in case.

## Would you like to exclude your own visits from being tracked?

You can do so by following the instructions [in this guide](excluding.md).

## Running an adblocker that blocks the Plausible script from being loaded?

You can enable our custom domain integration which allows you to run the Plausible script as a first-party connection from your domain name. [See the instructions here](custom-domain.md).
