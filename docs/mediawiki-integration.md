---
title: How to add Plausible to your MediaWiki instance
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add the Plausible Analytics tracking code to your MediaWiki instance by downloading and activating the [Plausible](https://github.com/octfx/mediawiki-extension-Plausible) extension.

Clone `https://github.com/octfx/mediawiki-extension-Plausible` to your `/extensions` folder:

```shell
git clone https://github.com/octfx/mediawiki-extension-Plausible extensions/Plausible
```

Add `wfLoadExtension( 'Plausible' );` to your `LocalSettings.php`.

Configure as needed.

A more expanded integration document can be found at the extenions [README.md](https://github.com/octfx/mediawiki-extension-Plausible/blob/master/README.md)