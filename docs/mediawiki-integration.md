---
displayed_sidebar: someSidebar
title: Adding Plausible to MediaWiki
sidebar_label: MediaWiki
description: "Install the Plausible extension for MediaWiki to add privacy-first, cookie-free analytics tracking to your wiki."
---

import CtaBox from '@site/src/components/CtaBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

You can add the Plausible Analytics tracking code to your MediaWiki instance by downloading and activating the [Plausible](https://github.com/octfx/mediawiki-extension-Plausible) extension.

Clone `https://github.com/octfx/mediawiki-extension-Plausible` to your `/extensions` folder:

```shell
git clone https://github.com/octfx/mediawiki-extension-Plausible extensions/Plausible
```

Add `wfLoadExtension( 'Plausible' );` to your `LocalSettings.php`.

Configure as needed.

A more expanded integration document can be found at the extensions [README.md](https://github.com/octfx/mediawiki-extension-Plausible/blob/master/README.md)

<CtaBox
  headline="Add privacy-first analytics to your MediaWiki site"
  link="https://plausible.io/register"
  linkText="Start free trial"
/>
