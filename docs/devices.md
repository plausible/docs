---
title: Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your "**Devices**" report shows the screen size, the browser and the operating system (OS) of your visitors. It helps you identify and understand the type of device your visitors use the most often so you can optimize your website experience to them.
	
## Screen size

Your "**Screen size**" report shows the width of the screens used by your website visitors. It's useful to understand whether to optimize more for mobile or desktop visitors. Visitors are categorized into one of four categories based on their device width.

For the most accurate reporting, we use `window.innerWidth` to collect the screen size. It measures the width of the browser window where your website is actually rendered, rather than the full screen width. The actual width of the browser in pixels is discarded.

<img alt="Screen sizes" src={useBaseUrl('img/devices-size.png')} />

## Browser

Your "**Browser**" report shows what browsers people use when visiting your website. We only show the brand of the browser and when you click on the brand you can see the version number too. This is derived from the User-Agent HTTP header. The full User-Agent is discarded.

<img alt="Browser" src={useBaseUrl('img/devices-browser.png')} />

## Operating system

Your "**Operating system**" report shows what operating systems people use when visiting your website. We show the brand of the operating system and when you click on the brand you can see the version numbers too. This is derived from the User-Agent HTTP header. The full User-Agent is discarded.

<img alt="Operating system" src={useBaseUrl('img/devices-os.png')} />
