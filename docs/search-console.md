---
title: Search Console integration
--- 

In 2012, [Google stopped including](https://webmasters.googleblog.com/2012/03/upcoming-changes-in-googles-http.html) search terms in the `Referer` header when people click through a Google search. They only send Google as the referrer source instead. This means that Plausible Analytics cannot automatically access search terms that lead users to your website.

However, you can still access your search terms by setting up your website on Google Search Console. Once you’ve done that, you can enable the Google Search Console integration in Plausible Analytics to get all of your important search results stats under one roof.

Note that we don’t yet have an integration with Bing Webmaster Tools. You can track the status of the integration [here](https://plausible.nolt.io/26).

Here’s how you can add your site to Google Search Console and then integrate the Search Console data into your Plausible Analytics dashboard:

## 1. Add your site to the Google Search Console

If your site is already set up on Google Search Console, you can skip to step 3.

* Head over to Google Search Console and click "Start now". If you don’t have any sites already set up on Google Search Console, you will be taken straight to the form to add a new domain. Otherwise, you can open the drop down on the top left and select "Add property".

You can either create a domain property or a URL prefix property on Google Search Console. Check out [their documentation](https://support.google.com/webmasters/answer/34592?hl=en) to understand the difference between these options. Plausible Analytics works with both options, so it’s completely up to you.

In this example, let’s create a URL prefix property.

## 2. Verify your ownership of the website

* You should see several options to verify to Google that you do indeed own this website. You’ll either need to be able to add HTML to your site or alternatively, you can add a DNS record to verify your ownership.

* Follow the provided instructions depending on which verification method you’ve chosen. Once you’ve successfully verified the site, head back to the Plausible Analytics website.

## 3. Allow Plausible Analytics to access your Search Console

* The next step is to open the settings for your website on your Plausible Analytics account. Scroll down to the section called "Google Integration":

Clicking on "Continue with Google" will take you through Google’s authentication flow to get the necessary permissions. You might notice that we also get the associated email address, this is because some users have multiple Google accounts and it’s useful to remember which one is integrated with the Plausible Analytics site.

## 4. Select property to pull keywords from

* Next up, you should see a select box where you can choose which property from Google Search Console to integrate with. Properties that start with `sc-domain:` represent domain properties and others are URL prefix properties in Search Console.

Once you’ve selected your property, click on the "Save" button. At that point, the integration should be fully functional. Head over to your site’s "Top Referrers" stats in Plausible Analytics, click on "Google" in the referrers list, and you should see the keywords coming through.

Google samples its keyword data heavily and it usually lags by about 24 hours. The sampling is why your keyword visitor numbers don’t add up to the total number of visitors from Google. Unfortunately, there’s nothing we can do about the quality of the keyword data. We show exactly the same data that you see in your Search Console.
