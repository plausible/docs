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

- Path Pattern: `/js/script.js` (you can use `/js/script.*` to also match [script extensions](https://plausible.io/docs/script-extensions))
- Origin or Origin Group: The origin we created in step 1
- Viewer Protocol Policy: `HTTPS Only`
- Allowed HTTP Methods: `GET, HEAD`
- Cache policy: `Managed-CachingOptimized`

And another for the event API:

- Path Pattern: `/api/event`
- Origin or Origin Group: The origin we created in step 1
- Viewer Protocol Policy: `HTTPS Only`
- Allowed HTTP Methods: `GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE`
- Cache policy: `Managed-CachingDisabled`
- Origin Request Policy: `Managed-UserAgentRefererHeaders`

## Step 3: Adjust your deployed script

With the custom origin and behaviours in place, you can change your script tag as follows:

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

Deploy these changes to your CloudFront site. You can verify the proxy is working by opening your network tab. You should see a request to
`https://yourdomain.com/js/script.js` with status 200 and another one to `https://yourdomain.com/api/event` with status 202.

Using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Change the file name from script.js to the script you want to use: script.hash.js, script.exclusions.js or script.outbound-links.js. Want to use more than one extension? You can chain them like this: script.hash.exclusions.outbound-links.js.

## (Optional) Configure CloudFront Distribution using CloudFormation template

This template has been abbreviated to only include fields that are relevant to proxy Plausible script and API requests and is not fully functional. It would at least include origins for serving your actual website content and cache behaviours for it.

```yaml
AWSTemplateFormatVersion: 2010-09-09

Resources:
  MyDistributionName:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        CacheBehaviors:
          - AllowedMethods: ['GET', 'HEAD']
            # Or use /js/script.* to match script extensions
            PathPattern: '/js/script.js'
            TargetOriginId: plausible
            ViewerProtocolPolicy: 'https-only'
            # Managed-CachingOptimized policy
            CachePolicyId: 658327ea-f89d-4fab-a63d-7e88639e58f6
          - AllowedMethods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'POST', 'PATCH', 'DELETE']
            PathPattern: '/api/event'
            TargetOriginId: plausible
            ViewerProtocolPolicy: 'https-only'
            # Managed-CachingDisabled policy
            CachePolicyId: 4135ea2d-6df8-44a3-9df3-4b5a84be39ad
            # Managed-UserAgentRefererHeaders policy
            OriginRequestPolicyId: acba4595-bd28-49b8-b9fe-13317c0390fa
        Origins:
          - DomainName: 'plausible.io'
            Id: plausible
            CustomOriginConfig:
              OriginProtocolPolicy: 'https-only'
```

*Note:* Managed policies in CloudFormation templates are referred to using their UUIDs. To find out more read the documentation for [Managed Cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) and [Managed Origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html).

Thanks to [@thomasjsn](https://github.com/thomasjsn) for contributing these instructions!
