---
title: Proxying Plausible through Next.js / Vercel
---

There are two ways you can proxy Plausible through Next.js / Vercel. One is using the next-plausible npm package and the other is using the raw Next.js config. Here are the instructions:

## Using next-plausible

[next-plausible](https://github.com/4lejandrito/next-plausible) is an npm package that makes it easier to include Plausible Analytics in your Next.js site.

It provides out of the box support for proxying the script, you just need to wrap your `next.config.js` with the `withPlausibleProxy` function:

```js
const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  // ...your next js config, if any
})
```

This will set up the necessary rewrites and configure `PlausibleProvider` to use the local URLs so you can keep using it like this:

```jsx
  <PlausibleProvider domain="example.com">
    ...
  </PlausibleProvider>
}
```

Read more in [the next-plausible documentation](https://github.com/4lejandrito/next-plausible#proxy-the-analytics-script).

## Using raw Next.js config

### Step 1: Add URL rewrite rules

If you don't already have a `next.config.js` file at the root of your repository, create one. You can learn
more about Next.js rewrites [here](https://nextjs.org/docs/api-reference/next.config.js/rewrites). Here's
the setup for proxying Plausible Analytics:

```js title="next.config.js"
module.exports = {
  async rewrites() {
      return [
          {
              source: '/js/script.js',
              destination: 'https://plausible.io/js/plausible.js'
          },
          {
              source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
              destination: 'https://plausible.io/api/event'
          }
      ];
  },
}
```

You can also choose a subdirectory to install Plausible under to make sure it doesn't shadow any routes
that you may already have in your application:

```js title="next.config.js"
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

### Step 2: Adjust your deployed script

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

Thanks to [sp3n](https://github.com/sp3n) for contributing these instructions!
