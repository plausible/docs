---
title: Importing data from Google Analytics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you have already collected data for your website using Google Analytics (GA)
and want to import that data into Plausible, you can do this as follows:

1. Go to the general settings page for your site.
2. In the **Data Import** panel, link your Google account to your Plausible account.
3. You will now see a dropdown selection menu listing GA profiles that were
   found associated with your Google account. Select the appropriate profile;
   this will generally be the profile with the same domain name as this
   Plausible site. The selection also displays the profile's permissions which
   should say "All Web Site Data". If you do not have a profile for your domain
   name with those permissions, for example if your Google Account only has
   access to a view of another account's data, you may need to obtain greater
   permissions for your Google account.

<img alt="Select GA profile" src={useBaseUrl('img/import-select-profile.png')} />

4. Clicking **Import** will schedule the data import. Depending on the amount
   of data you have, this may take some time. This is run in the background, so
   you will receive an email when the import has completed.
5. Once you have received the email, the imported data will be visible in your
   Plausible dashboard.

## What is imported?

Data is imported in aggregate for each date, and only from dates up to your
first Plausible-collected data to avoid double-counting visits.

The GA data is imported using Google's Reporting API v4, which has limits on
the number of dimensions that can be fetched in a single query. This means we
cannot fetch entries that contain all of the dimensions we are interested in,
and instead need to fetch data for each dimension individually. Unfortunately,
this means we are unable to look at how dimensions interact. For example, we
cannot apply a filter to the dashboard while still including imported data.

An indicator is displayed near the top of the dashboard when imported data has
been included:

<img alt="Imported data indicator" src={useBaseUrl('img/imported-data-included.png')} />

Clicking this indicator will toggle the inclusion of imported data. If data has
been excluded manually rather than because it is incompatible with the current
view (i.e. while a filter is in use), the indicator will appear with a
strikethrough:

<img alt="Imported data being excluded" src={useBaseUrl('img/imported-data-excluded.png')} />

### Sources

GA aggregates multiple dimensions under the name **source**, including referral
sources and the value of the UTM source parameter if that was present during a
visit. If AdWords autotagging was enabled for a visit then this takes the value
"google". This means that for any visits that used a UTM source parameter we
are unable to get the referrer. The compromise we have made with this problem
is to save referrers - identified as being domain names - as **sources** and
everything else as **UTM sources**. In the case of AdWord tracking, this is
saved as a **UTM source** with the value "adwords".

### Locations

While the Reporting API lets us fetch data about which countries visitors
connect from, it does not give us access to region and city location data in a
standard format. For each visit recorded by GA, we will have its country but
that visit will have an unknown region and city.

## Deleting imported data

Data that you have imported can be deleted by returning to your site's general
settings page and clicking the "Forget imported stats" button:

<img alt="Forget imported data" src={useBaseUrl('img/imported-data-forget.png')} />
