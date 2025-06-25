---
title: Tracking clicks on cloaked affiliate links and other pretty URLs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
If you track link clicks, then these count towards your billable monthly pageviews.
:::

Many sites use link cloaking to make affiliate links cleaner and easier to manage. So rather than linking to `affiliatepartner.com/affiliateid` you link to a page on your domain name such as `yourdomain.com/go/affiliatepartner` and the visitor gets redirected to the actual affiliate link after clicking.

The same system is used to make pretty URLs for file names. You have links to `yourdomain.com/product/download/productname` that actually redirect to `yourdomain.com/123456/Product2.3.exe`.

Instructions below can be used to start tracking every `<a>` (i.e. link) element on your site with some specified rules. It's very similar to our automated tracking of [outbound link clicks](outbound-link-click-tracking.md) and [file downloads](file-downloads-tracking.md) but you can choose based on the link URL (`href` attribute) which links to track.

Here's how to automatically track clicks on cloaked affiliate links and other pretty URLs:

:::tip Our WordPress plugin can track cloaked affiliate links automatically
On WordPress? Check out our WordPress plugin which can track cloaked affiliate links automatically. [See more here](https://plausible.io/wordpress-analytics-plugin).
:::

## 1. Add the JavaScript that will be sending the link click events to Plausible

You need to add the following code to all of the pages where you want to track your links. You should insert the code below into your HTML page `<head>` section just under the custom event snippet.

On the line that says `var toBeTracked = '/go/'` change `/go/` to what you want to match with. With this example, any link with a URL that contains `/go/` will be tracked. If simply containing a string value is not enough, see [more flexible URL matching below](#more-flexible-url-matching).

```html
<script>
    function getLinkEl(link) {
        while (link && (typeof link.tagName === 'undefined' || link.tagName.toLowerCase() !== 'a' || !link.href)) {
            link = link.parentNode
        }
        return link
    }

    function shouldFollowLink(event, link) {
        // If default has been prevented by an external script, Plausible should not intercept navigation.
        if (event.defaultPrevented) { return false }

        var targetsCurrentWindow = !link.target || link.target.match(/^_(self|parent|top)$/i)
        var isRegularClick = !(event.ctrlKey || event.metaKey || event.shiftKey) && event.type === 'click'
        return targetsCurrentWindow && isRegularClick
    }

    var MIDDLE_MOUSE_BUTTON = 1

    function handleLinkClick(event) {
        if (event.type === 'auxclick' && event.button !== MIDDLE_MOUSE_BUTTON) { return }

        var link = getLinkEl(event.target)

        if (link && shouldTrackLink(link)) {
            var eventName = 'Cloaked Link: Click'
            var eventProps = { url: link.href }
            return sendLinkClickEvent(event, link, eventName, eventProps)
        }
    }

    function sendLinkClickEvent(event, link, eventName, eventProps) {
        var followedLink = false

        function followLink() {
            if (!followedLink) {
                followedLink = true
                window.location = link.href
            }
        }

        if (shouldFollowLink(event, link)) {
            plausible(eventName, { props: eventProps, callback: followLink })
            setTimeout(followLink, 5000)
            event.preventDefault()
        } else {
            plausible(eventName, { props: eventProps })
        }
    }

    function shouldTrackLink(link) {
        var toBeTracked = '/go/'
        return !!link.href.match(toBeTracked)
    }

    document.addEventListener('click', handleLinkClick)
    document.addEventListener('auxclick', handleLinkClick)
</script>
```

:::note
To keep things cleaner in your code, you can also copy the code above into a new `.js` file and load it onto every page via the script `src` attribute. `<script src="path/to/your/file.js"></script>`. If you do this, make sure to copy the code into the `.js` file without the surrounding `<script>` tags.
:::

### More flexible URL matching

If simply containing a substring is not enough to differentiate between links you want and do not want to track, you can also use a [JavaScript regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) as the `toBeTracked` value. For example, say you want to track links like `yourdomain.com/products/123/details`, but not links like `yourdomain.com/123/details`. In this case, you can do:

```javascript
  var toBeTracked = /products\/.*\/details/
```

where `\/` stands for a forward slash (escaped with `\`) and `.*` will match any (or empty) string in the middle. It will basically match anything that contains the format `products/<anything>/details`.

## 2. Create a custom event goal in your Plausible Analytics account

You'll have to configure the goal for the click numbers to show up in your Plausible dashboard. To configure a goal, go to [your website's settings](website-settings.md) in your Plausible Analytics account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `Cloaked Link: Click`.

Next, click on the "**Add goal**" button and you'll be taken back to the Goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who have completed your new custom event. Goal conversions are listed at the very bottom of the dashboard. Note that at least one click is required for this to show in your dashboard.

That's it. You're now tracking all link clicks on your site with custom URL matching rules!
