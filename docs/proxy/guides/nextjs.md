---
title: Proxying Plausible through Next.js
---

## Step 1: Add URL rewrite rules

If you don't already a `next.config.js` file at the root of your repository, create one. You can learn
more about Next.js rewrites [here](https://nextjs.org/docs/api-reference/next.config.js/rewrites). Here's
the setup for proxying Plausible Analytics:

``` title="next.config.js"
module.exports = {
  async rewrites() {
      return [
          {
              source: '/js/script.js',
              destination: 'https://plausible.io/js/plausible.js'
          },
          {
              source: '/api/event',
              destination: 'https://plausible.io/api/event'
          }
      ];
  },
}
```

You can also choose a subdirectory to install Plausible under to make sure it doesn't shadow any routes
that you may already have in your application:

``` title="next.config.js"
module.exports = {
  async rewrites() {
      return [
          {
              source: '/your-subdirectory/js/script.js',
              destination: 'https://plausible.io/js/plausible.js'
          },
          {
              source: '/your-subdirectory/api/event',
              destination: 'https://plausible.io/api/event'
          }
      ];
  },
}
```

Choose a generic or irrelevant name for the subdirectory. If you choose something like `analytics` or `plausible`,
it might get blocked in the future.

Using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Edit your `next.config.js` and change the name from `plausible.js` to the script you want to use: `plausible.hash.js`, `plausible.exclusions.js` or `plausible.outbound-links.js`. Want to use more than one extension? You can chain them like this: `plausible.hash.exclusions.outbound-links.js`

## Step 2: Adjust your deployed script

With the URL rewrites in place, you can change your script tag as follows:

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

In case of a subdirectory installation, you'll also need to add a `data-api` attribute to tell the script where
the data should be sent.

```html
<script defer data-domain="yourdomain.com" data-api="/subdirectory/api/event" src="/subdirectory/js/script.js"></script>
```


Deploy these changes to your Next.js site. You can verify the proxy is working by opening your network tab. You should see a request to
`https://yourdomain.com/js/script.js` with status 200 and another one to `https://yourdomain.com/api/event` with status 202.
