---
title: Change your reporting timezone
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Within the "**General**" section of your website settings you can change the timezone for your reports in the "**Site timezone**" field. This sets the day boundary of your reports regardless of where your traffic is coming from. 

For instance, if you select "**(GMT+01:00) Amsterdam, Berlin…**" then the beginning and the end of each day of your reporting is calculated based on the time in Amsterdam, even if your visitors come from London or New York. 

The best practice is to set the timezone that reflects the location of your audience. If the audience is very broad and spread across the world, it is best to use a timezone in which traffic near midnight is low. For example, let us consider a website with its traffic mainly coming from Spanish native speakers during the day time, i.e., mainly regions near Spain and South America. One ideal timezone would be GMT-5, because in the midnight of GMT-5, all regions with major Spanish native speakers have time between 9pm and 4am, which are well away from the day time.

<img alt="Plausible Analytics" src={useBaseUrl('img/reporting-timezone.png')} />
