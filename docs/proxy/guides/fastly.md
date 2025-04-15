---
title: Proxying Plausible through Fastly
---

You can also configure Fastly to proxy your analytics. Here's how.

## Step 1: Create the Backend for Plausible

First, set up a Plausible backend:

* Go to your Fastly service configuration
* Click on "**Origins**" or "**Hosts**"
* Click "**Create a host**"

* Fill in:

- Name: Plausible
- Address: plausible.io
- Port: 443
- Enable SSL: Checked
- Verify certificate: Checked
- SNI hostname: plausible.io

* Set the timeouts:

- First byte timeout: 15000 (15 seconds)
- Between bytes timeout: 10000 (10 seconds)

* Save

## Step 2: Create VCL Snippet

Snippet 1: Plausible Request Routing (vcl_recv)

* Go to "**VCL Snippets**"
* Click "**Create snippet**"

* Fill in:

- Name: Plausible Request Routing
- Type: recv (vcl_recv)
- Priority: 100 (or any number that ensures this runs before your other recv snippets)

* Add this VCL:

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

* Save

## Step 3: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script defer data-api="/plsbl/api/event" data-domain="website.com" src="/plsbl/js/script.js"></script>
```

That's it! You're now using a proxy.
