---
title: Proxying Plausible through CloudFront
---

## Step 1: Create new origin

First we need to create a new origin pointing to the Plausible server. In the CloudFront console, under your distribution; create a new origin:

-   Origin Domain Name: `plausible.io`
-   Origin Protocol Policy: `HTTPS Only`

## Step 2: Create custom behaviours

Now we need to define some custom behaviour for when to use our new origin. In the CloudFront console, under your distribution; create new behaviour.

First for the analytics script:

- Path Pattern: `/js/script.js`
- Origin or Origin Group: The origin we created in step 1
- Viewer Protocol Policy: `HTTPS Only`
- Allowed HTTP Methods: `GET, HEAD`

And another for the event API:

- Path Pattern: `/api/event`
- Origin or Origin Group: The origin we created in step 1
- Viewer Protocol Policy: `HTTPS Only`
- Allowed HTTP Methods: `GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE`
- Origin Request Policy: `Managed-UserAgentRefererHeaders`

## Step 3: Adjust your deployed script

With the custom origin and behaviours in place, you can change your script tag as follows:

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

In case of a subdirectory installation, you'll also need to add a `data-api` attribute to tell the script where the data should be sent.

```html
<script defer data-domain="yourdomain.com" data-api="/subdirectory/api/event" src="/subdirectory/js/script.js"></script>
```

Deploy these changes to your CloudFront site. You can verify the proxy is working by opening your network tab. You should see a request to
`https://yourdomain.com/js/script.js` with status 200 and another one to `https://yourdomain.com/api/event` with status 202.

Using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Change the file name from script.js to the script you want to use: script.hash.js, script.exclusions.js or script.outbound-links.js. Want to use more than one extension? You can chain them like this: script.hash.exclusions.outbound-links.js.

Thanks to [@thomasjsn](https://github.com/thomasjsn) for contributing these instructions!
