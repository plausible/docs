---
title: How to use script extensions with the WordPress plugin
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our official WordPress plugin does currently not support specifying script extensions manually, but you can still use your desired [script extensions](/docs/script-extensions.md) with this little workaround.

## 1. Copy the following code to your `functions.php` file

```
function change_plausible_script($tag, $handle) {
        if ($handle === 'plausible-analytics') {
                $newTag = preg_replace("/data-domain='.*?'/i", "data-domain='YOUR_DOMAIN'",$tag);
                return str_replace('plausible.outbound-links.js', 'YOUR_DESIRED_EXTENSION_COMBINATION', $newTag);
        }
        return $tag;
}

add_filter('script_loader_tag',  'change_plausible_script',10,2);
```

The `functions.php` file is located in `wp-content/themes/YOUR_THEME`. You can also get to your `functions.php` file from inside WordPress by clicking Tools > Theme File Editor > functions.php.


## 2. Fill in your own domain and the extended filename

Make sure to replace `YOUR_DOMAIN` with your actual Plausible site name, and `YOUR_DESIRED_EXTENSION_COMBINATION` with the correct filename (for example: `script.file-downloads.hash.js`). Once done, save the file.

## 3. Return to your site and verify the integration

1. Open the developer tools by pressing the key F12 on Firefox or Chrome. Alternatively, you can right-click anywhere on your page and click "Inspect" (the wording may vary depending on your web browser).

2. Click on the "Network" tab in the developer tools. It will be empty, so you would need to reload the page. After you refresh the browser, you will start seeing some data in the "Network" tab. Go ahead and search for the script extension filename that you added in step 2. You should now see the request for the desired script with status 200.

Thanks to Brett Batie, the founder of [Clean Drive](https://cleandrive.app), for providing these instructions!
