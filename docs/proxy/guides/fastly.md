---
title: Proxying Plausible through Fastly
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use Fastly to proxy your Plausible Analytics requests. Here's the step-by-step process for creating a proxy.

## Step 1: Create the Backend for Plausible

First, set up a Plausible backend:

1. Go to your Fastly service configuration
2. Click on "**Origins**" or "**Hosts**"
3. Click "**Create a host**"
4. Fill in:

* Name: `Plausible`
* Address: `plausible.io`
* Port: `443`
* Enable SSL: `Checked`
* Verify certificate: `Checked`
* SNI hostname: `plausible.io`

5. Set the timeouts:

* First byte timeout: `15000` (15 seconds)
* Between bytes timeout: `10000` (10 seconds)

6. Save

## Step 2: Create VCL Snippet

Snippet 1: Plausible Request Routing (`vcl_recv`)

1. Go to "**VCL Snippets**"
2. Click "**Create snippet**"
3. Fill in:

* Name: `Plausible Request Routing`
* Type: `recv (vcl_recv)`
* Priority: `100` (or any number that ensures this runs before your other recv snippets)

4. Add this VCL (Varnish Configuration Language):

```
vcl

if (req.url ~ "^/plsbl/.*") {

# Remove our prefix for the backend request
set req.url = regsub(req.url, "^/plsbl", "");

# Set the backend to Plausible
set req.backend = F_Plausible;

# Set host header to plausible.io
set req.http.host = "plausible.io";

return(pass);
}
```

5. Save

## Step 3: Integrate a new snippet into your site header

You can now replace your Plausible Analytics script tag in the Header (`<head>`) section of your site with the proxied snippet. This is how the new snippet should look like (make sure to edit it to have the correct domain name of your site):

```html
<script defer data-domain="yourdomain.com" data-api="/plsbl/api/event" src="/plsbl/js/script.js"></script>
```

Are you using our extensions such as hash-based routing, revenue or outbound link click tracking? Change the file name from `script.js` to the script you want to use: `script.hash.js`, `script.revenue.js` or `script.outbound-links.js`. Want to use more than one extension? You can chain them like this: `script.hash.revenue.outbound-links.js`.

That's it! You're now counting your website stats using a proxy.
