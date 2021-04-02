---
title: How to add the script to your PHP site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can add the  script directly to your php files, as you would do when [integrating Plausible into your site manually](https://plausible.io/docs/plausible-script):

```php
<?php
echo '<html>';
echo '<head>
	<title>Your webpage</title>
	<meta name="description" content="Example">
	<script async defer data-domain="example.com" src="https://plausible.io/js/plausible.js"></script>
	<link rel="stylesheet" href="CSS/main.css" type="text/css">
</head>'; 
echo '<body>';
// ...
echo '</body>';
echo '</html>';
?>
```

Note that if you want each page to register as a new event, this will have to be added to every page.