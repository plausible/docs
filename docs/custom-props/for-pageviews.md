---
title: Attach custom properties to pageviews
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::tip Using WordPress?
The quickest way to start tracking custom properties is to use our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin)
:::

## Add your custom properties to your Plausible snippet

You can add custom properties by updating your Plausible snippet.

To add properties that attach to every tracked event, update the `plausible.init` call to pass `customProperties` option:

```javascript
plausible.init({
  // ... Other initialization options
  customProperties: {
    author: "John Doe",
    type: "blog-post"
  }
})
```

That's it! You're now tracking custom properties alongside pageviews.

:::note
If you don't see a `plausible.init` call in your snippet, [upgrade your script](/script-update-guide)
:::

<details>

<summary>

## Advanced: Dynamically setting custom properties

</summary>

To include dynamic data for custom properties, set `customProperties` to be a function. This function will be called for every event.

For example:

```js
plausible.init({
  // ... Other initialization options
  customProperties: function(eventName) {
    if (eventName == "pageview") {
      return {
        author: "John Doe",
        title: document.title
      }
    }

    return {}
  }
})
```

</details>
