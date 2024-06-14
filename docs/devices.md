---
title: Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Devices**" report shows the screen size, the browser and the operating system (OS) of your visitors. It helps you identify and understand the type of device your visitors use the most often so you can optimize your website experience to them. Click on any particular entry to filter the dashboard by that traffic and see further details such as the browser or OS version.

You can use the "**Filter**" button on the top of your dashboard to segment the traffic by multiple devices at the same time. Filter button also allows you to filter out traffic from specific devices.

<img alt="Screen sizes - multiple filters" src={useBaseUrl('img/devices-filtering-multiple-filters.png')} />
	
## Screen size

Your "**Screen size**" report shows the devices used by your website visitors. Devices are categorized into desktop, mobile or tablet. This is derived from the User-Agent HTTP header. The full User-Agent is discarded.

## Browser

Your "**Browser**" report shows what browsers people use when visiting your website. We only show the brand of the browser and when you click on the brand you can see the version number too. This is derived from the User-Agent HTTP header. The full User-Agent is discarded.

## Operating system

Your "**Operating system**" report shows what operating systems people use when visiting your website. We show the brand of the operating system and when you click on the brand you can see the version numbers too. This is derived from the User-Agent HTTP header. The full User-Agent is discarded.

:::info Windows and macOS have stopped reporting their latest versions
This means that Plausible and other analytics tools are not able to report the latest versions, which for Windows are above 10, and for macOS above 10.15. Visitors with the new versions will be grouped in the last known version
:::
