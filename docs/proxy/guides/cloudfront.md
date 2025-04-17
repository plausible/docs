---
title: Proxying Plausible through CloudFront
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use CloudFront to proxy your Plausible Analytics requests. Here's the step-by-step process for creating a proxy.

Step 0: Sign up for a free AWS account if you don't have an account already and create a CloudFront distribution. 

## Step 1: Create new origin

You need to create a new origin pointing to the Plausible server. In the CloudFront console, under your distribution, create a new origin by going into the "**Origins**" section and clicking on "**Create origin**".

1. Set "**Origin domain**" to: `plausible.io`
2. Set the "**Protocol**" policy to: `HTTPS Only`
3. You do not need to change any of the other options on this screen
4. Click on the "**Create origin**" button 

## Step 2: Create behaviors

Now you need to define two behaviors for when to use the new origin. In the CloudFront console, under your distribution, create a new behavior by going into the "**Behavior**" section and clicking on "**Create behavior**".

Create a behavior for the analytics script:

1. Set the "**Path pattern**" to: `/js/script.js` (you can also use `/js/script.*` to match [script extensions](https://plausible.io/docs/script-extensions))
2. In "**Origin and origin groups**", choose the origin that you created in step 1
3. Set "**Compress objects automatically**" to: `No`
4. Set the "**Viewer protocol policy**" to: `HTTPS Only`
5. Set the "**Allowed HTTP methods**" to: `GET, HEAD`
6. In "**Cache key and origin requests**", choose "**Legacy cache settings**"
7. You do not need to change any of the other options on this screen
8. Click on the "**Create behavior**" button 

And create a behavior for the event API:

1. Set the "**Path pattern**" to: `/api/event`
2. In "**Origin and origin groups**", choose the origin that you created in step 1
3. Set "**Compress objects automatically**" to: `No`
4. Set the "**Viewer protocol policy**" to: `HTTPS Only`
5. Set the "**Allowed HTTP methods**" to: `GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE`
6. In "**Cache key and origin requests**", use the "**Cache policy and origin request policy**"
7. Set the "**Cache policy**" to: `CachingDisabled`
8. Set the "**Origin request policy**" to: `UserAgentRefererHeaders`
9. Set the "**Response headers policy**" to: `SimpleCORS`
10. You do not need to change any of the other options on this screen
11. Click on the "**Create behavior**" button 

## Step 3: Integrate a new snippet into your site header

With the origin and behaviours in place, you can replace your Plausible Analytics script tag in the Header (`<head>`) section of your site with the proxied snippet. This is how the new snippet should look like (make sure to edit it to have the correct domain name of your site):

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

If you're not using the CloudFront CDN, you'll also need to add a `data-api` attribute to tell the script where the data should be sent. This is how the new snippet should look like in that case (do make sure to edit it to the correct URL of your CloudFront distribution)

```html
<script defer data-domain="yourdomain.com" data-api="https://YOURDISTRIBUTION.cloudfront.net/api/event" src="https://YOURDISTRIBUTION.cloudfront.net/js/script.js"></script>
```

Using our extensions such as hash-based routing, revenue or outbound link click tracking? Change the file name from `script.js` to the script you want to use: `script.hash.js`, `script.revenue.js` or `script.outbound-links.js`. Want to use more than one extension? You can chain them like this: `script.hash.revenue.outbound-links.js`.

Deploy these changes to your site. You can verify the proxy is working by opening your network tab. You should see a request to
`https://yourdomain.com/js/script.js` with status 200 and another one to `https://yourdomain.com/api/event` with status 202.

That's it! You're now counting your website stats using a proxy.

Thanks to [@thomasjsn](https://github.com/thomasjsn) for contributing these instructions!
