---
title: Proxying Plausible through CloudFront
---

## Step 1: Create new origin

First we need to create a new origin pointing to the Plausible server. In the CloudFront console, under your distribution; create a new origin:

-   Origin Domain Name: `plausible.io`
-   Origin Protocol Policy: `HTTPS Only`

## Step 2: Create custom behaviors

Now we need to define some custom behavior for when to use our new origin. In the CloudFront console, under your distribution; create new behavior.

First for the analytics script:

- Path Pattern: `/js/script.js` (you can use `/js/script.*` to also match [script extensions](https://plausible.io/docs/script-extensions))
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

With the custom origin and behaviors in place, you can change your script tag as follows:

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

Deploy these changes to your CloudFront site. You can verify the proxy is working by opening your network tab. You should see a request to
`https://yourdomain.com/js/script.js` with status 200 and another one to `https://yourdomain.com/api/event` with status 202.

Using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Change the file name from script.js to the script you want to use: script.hash.js, script.exclusions.js or script.outbound-links.js. Want to use more than one extension? You can chain them like this: script.hash.exclusions.outbound-links.js.

# Using Cloudfront with Nextjs
If your Nextjs site is deployed to AWS Cloudfront with OpenNext:

## Step 1: Create new origin
Create a new origin in your stack using aws-cdk-lib.
```
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins"

const plausibleOrigin = new HttpOrigin("plausible.io", {
    protocolPolicy: OriginProtocolPolicy.HTTPS_ONLY,
})
```

## Step 2: Add custom behaviors
We need to modify our NextjsSite Cloudfront distribution to include the behaviors shown above. Here we are modifying an SST NextjsSite construct.


>Note that our `/api/event` custom behavior has been renamed to `/plausible/event`

The event path `/api/event` conflicts with the `/api*` path created by OpenNext in our Cloudfront distribution so we use a different path name.

```
import {
  ViewerProtocolPolicy,
  OriginRequestPolicy,
  AllowedMethods,
  OriginProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront"

const site = new NextjsSite(stack, "site", {
  cdk: {
    distribution: {
      additionalBehaviors: {
        "/js/script.js": {
          origin: plausibleOrigin
          viewerProtocolPolicy: ViewerProtocolPolicy.HTTPS_ONLY,
        },
        "/plausible/event": {
          origin: plausibleOrigin
          originRequestPolicy: new OriginRequestPolicy(
            stack,
            "Managed-UserAgentRefererHeaders"
          ),
          allowedMethods: AllowedMethods.ALLOW_ALL,
          viewerProtocolPolicy: ViewerProtocolPolicy.HTTPS_ONLY,
        },
      },
    },
  },
})
```
      
      
## Step 3: Replace the path name to `/api/event`
Plausible requires our events to be sent to `/api/event` but are currently routed to `/plausible/event`
- Create a Cloudfront function that replaces `/plausible/event` with `/api/event`
```
import * as cloudfront from "aws-cdk-lib/aws-cloudfront"
      
const cfFunction = new cloudfront.Function(stack, "Function", {
  code: cloudfront.FunctionCode.fromInline(
    `function handler(event) {
      var request = event.request;
      var uri = request.uri;
      uri = uri.replace('/plausible/event', '/api/event');
      request.uri = uri;
      return request;
    }`
  ),
})
```

- Add the Cloudfront function to the `"/plausible/event"` behavior created in Step 2
```
"/plausible/event": {
  ... other behaviors,
  functionAssociations: [
    {
      function: cfFunction,
      eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
    },
  ],
},
```

## Step 4: Adjust your deployed script
- Add `data-api="/plausible/event"` to your frontend script to overwrite the default event path
```        
<script defer data-domain="yourdomain.com" data-api="/plausible/event" src="/js/script.js"></script>
```
Deploy your Nextjs site and verify your proxy is working by opening your network tab. You should see a request to `https://yourdomain.com/js/script.js` with status 200 and another one to `https://yourdomain.com/plausible/event` with status 202.

Thanks to [@thomasjsn](https://github.com/thomasjsn) and [@gty3](https://github.com/gty3) for contributing these instructions!
