---
title: Proxying Plausible through PHP and Apache
---

## Step 1: Edit your .htaccess file

``` title=".htaccess"
<IfModule mod_rewrite.c>
  RewriteEngine On

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  RewriteRule ^ index.php [QSA,L]
</IfModule>
```

## Step 2: Edit your index.php file

``` title="index.php"
<?php

include 'options.php';

$requestUri = str_replace($relativeUri, '', $_SERVER['REQUEST_URI']);

if (in_array($requestUri, $whitelist)) {

    $url = $backendUrl . $requestUri;

    if (array_key_exists($requestUri, $mapping)) {
        $url = $backendUrl . $mapping[$requestUri];
    }

    $ch = curl_init($url);
    $headers = [];

    foreach (getallheaders() as $key => $value) {
        if (!in_array($key, ['Host', 'Accept-Encoding'])) {
            $headers[] = $key . ': ' . $value;
        }
    }

    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    if (strtolower($_SERVER['REQUEST_METHOD']) === 'post') {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, file_get_contents('php://input'));
    }

    $content = curl_exec($ch);

    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

    curl_close($ch);
} else {
    $code = 404;
    $content = 'Not found';
}

http_response_code($code);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

if (isset($contentType)) {
    header('content-type: ' . $contentType);
}

echo $content;
```

## Step 3: Edit your options.php file

``` title="options.php"
<?php

// Set the relative URI when the reverse proxy is running in a folder.
// If your proxy runs under https://example.com/stats, then set /stats as relative URI and otherwise just leave it blank.
$relativeUri = '/stats';

// Set all allowed URI which should be accessible trough the proxy
$whitelist = [
    '/js/script.js',
    '/api/event'
];

// Optional, map allowed URI to another for sanitizing any proofs of Plausible Analytics in the URI
$mapping = [
    '/js/script.js' => '/js/plausible.outbound-links.js'
];

// Set URL of Plausible Analytics
$backendUrl = "https://plausible.io";

// Script when running under a folder:
// <script defer data-domain="example.com" data-api="/stats/api/event" src="/stats/js/script.js"></script>

// Script when running in the root:
// <script defer data-domain="example.com" src="/js/script.js"></script>
```

## Step 4: Adjust your deployed script

With the URL rewrites in place, you can change your script tag as follows:

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

In case of a subdirectory installation, you'll also need to add a `data-api` attribute to tell the script where
the data should be sent.

```html
<script defer data-domain="yourdomain.com" data-api="/stats/api/event" src="/stats/js/script.js"></script>
```
