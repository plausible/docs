---
title: Search Console integration
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

In 2012, [Google stopped including](https://webmasters.googleblog.com/2012/03/upcoming-changes-in-googles-http.html) search terms in the `Referer` header when people click through a Google search. They only send Google as the referrer source instead. This means that Plausible Analytics cannot automatically access search terms that lead users to your website.

However, you can still access your search terms by setting up your website on Google Search Console. Once you’ve done that, you can enable the Google Search Console integration in Plausible Analytics to get all of your important search results stats under one roof.

Here’s how you can add your site to Google Search Console and then integrate the Search Console data into your Plausible Analytics dashboard:

## Add your site to the Google Search Console

_If your site is already set up on Google Search Console, you can skip to the "**[Allow Plausible Analytics to access your Search Console](#allow-plausible-analytics-to-access-your-search-console)**" step._

Head over to [Google Search Console](https://search.google.com/search-console/) and click on the "**Start now**" button. If you don’t have any sites set up on Google Search Console already, you will be taken straight to the form to add a new domain. Otherwise, you can open the drop down on the top left and select "**Add property**".

You can either create a domain property or a URL prefix property on Google Search Console. Check out [their documentation](https://support.google.com/webmasters/answer/34592?hl=en) to understand the difference between these options. Plausible Analytics works with both options, so it’s completely up to you.

<img alt="Plausible Analytics" src={useBaseUrl('img/select-property-type.png')} />

## Verify your ownership of the website

You should see several options to verify to Google that you do indeed own this website. You’ll either need to be able to add HTML to your site or alternatively, you can add a DNS record to verify your ownership.

Follow the provided instructions depending on which verification method you’ve chosen. Once you’ve successfully verified the site, head back to the Plausible Analytics website.

<img alt="Plausible Analytics" src={useBaseUrl('img/verify-ownership.png')} />

## Allow Plausible Analytics to access your Search Console

Open the settings for your website on [your Plausible Analytics account](https://plausible.io/sites) and go into the settings section called "**Search Console**":

Clicking on the "**Continue with Google**" button will take you through to Google’s authentication flow to get the necessary permissions.

<img alt="Continue with Google" src={useBaseUrl('img/continue-with-google.png')} />

Choose your Google account to continue with the authentication. Google will share your name, email address, language preference and profile picture with Plausible Analytics. We've set it so we get the absolutely minimum amount of information possible that Google allows us. 

We really only need and use the email address from this. Email address is useful because some Plausible Analytics users have multiple Google accounts so we can remember which one is integrated with the Plausible Analytics site.

<img alt="Choose your Google account" src={useBaseUrl('img/choose-google-account.png')} />

You also need to grant Plausible Analytics a permission to view your Search Console website data.

<img alt="Grant Plausible Analytics a permission to view your Search Console website data" src={useBaseUrl('img/grant-permission.png')} />

And you also need to confirm all these choices once again.

<img alt="Confirm all the choices once again" src={useBaseUrl('img/confirm-choices.png')} />

## Select property to pull keywords from

Next up, you are back in Plausible Analytics settings where you should see a select box where you can choose which property from Google Search Console to integrate your Plausible Analytics dashboard with. Properties that start with `sc-domain:` represent domain properties and others are URL prefix properties in Search Console.

Once you’ve selected your property, click on the "**Save**" button. At that point, the integration should be fully functional.

<img alt="Choose which property from Google Search Console to integrate with" src={useBaseUrl('img/choose-property.png')} />

### I get the "Invalid Grant" error

Google may return the "**invalid_grant**" error message for several reasons:

* Google has a limit of 50 live tokens. When you try to add the 51st site, the site you added first will be disconnected from your Plausible account and so on. This is a limitation on Google's side so if you have more than 50 different sites in your Search Console, you will need to split them between different Google accounts in order to get them into Plausible at the same time
* Your permissions for the specific site may have been changed or revoked in your Google account. Please check your Search Console account and make sure you still have the user permission to the site in question
* Your token is inactive as your account has expired or your site is not active. Please check your Search Console account and make sure you still have the account and are still tracking the site in question correctly
* You may have changed the permissions or the password in your Google account since you gave us the access. Please make sure to reconnect your Google account again to Plausible with the correct account details

## Check your search query data in Plausible Analytics

Look at your site’s "**Top Sources**" stats in your Plausible Analytics dashboard, click on "**Google**" in the referrers list, and you should see the keywords coming through.

<img alt="Google search query data in Plausible Analytics" src={useBaseUrl('img/google-search-query-referrers.png')} />

### I don't see Google search query data in my dashboard

Search query data is not live. It is delayed by approximately 24-36 hours even on Google Search Console itself. 

So if you go back two days in your Plausible Analytics dashboard and click on Google in the referral sources you should be able to see the search queries for that day. We get the search query data directly from Google Search Console so as soon as they show up there they show up in Plausible Analytics too.

:::note
Note that "**Top Sources**" will only show keywords that have sent visitors to your site. We do not display keywords that have had impressions in Google's search results but no clicks to your site. Search phrases and keywords must have at least one click for them to show up in Plausible.
:::

### Search query number doesn't add up to the total number of Google visitors

Google samples its keyword data heavily. The sampling is why your keyword visitor numbers don’t add up to the total number of visitors from Google. Unfortunately, there’s nothing we can do about the quality of the keyword data. We show exactly the same data that you see in your Search Console.

## Plausible Analytics will be listed in your Google account settings

You can always view your Plausible Analytics integration in your Google account within the section "**Third-party apps with account access**". Here's how it looks like.

<img alt="Third-party apps with account access" src={useBaseUrl('img/third-party-apps.png')} />

## Remove the Google Search Console integration

If you'd like to remove the Google Search Console integration, click on the "**Unlink Google account**" button in the "**Search Console**" section of your website settings.
