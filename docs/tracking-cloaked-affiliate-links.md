---
title: Affiliate link cloaking click tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
If you use the affiliate link cloaking click tracking feature, then these count towards your billable monthly pageviews.
:::

Many websites use affiliate link cloacking to make their affiliate links cleaner and easier to manage. So rather than linking to `youraffiliatepartner.com/youraffiliateid` you would be linking to a page on your own domain name such as `yourdomain.com/go/youraffiliatepartner`. If you're using affiliate link cloacking on your website, here are the steps you need to take to automatically track clicks on cloaked affiliate links.

## 1. Trigger custom events with JavaScript on your site

First, make sure your tracking setup includes the second line as shown below:

```html
<script defer data-domain="<yourdomain.com>" src="https://plausible.io/js/script.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```
## 2. Add the JavaScript that will be sending the link click events to Plausible

You need to add the code below to all of the pages where you want to track cloaked affiliate link clicks. Make sure to change the script in the line that says `var urlStringToMatch = '/go/'`. Replace `/go/` with whatever is the name of the subfolder that you use to cloak your links. You should insert the code below on your HTML page. The script will work nicely in both `<body>` and `<head>` sections.

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

    function handleAffiliateLinkClick(event) {
        if (event.type === 'auxclick' && event.button !== MIDDLE_MOUSE_BUTTON) { return }

        var link = getLinkEl(event.target)

        if (isAffiliateLink(link)) {
            var eventName = 'Affiliate Link: Click'
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

    function isAffiliateLink(link) {
        var urlStringToMatch = '/go/'
        return link && link.href.includes(urlStringToMatch)
    }

    document.addEventListener('click', handleAffiliateLinkClick)
    document.addEventListener('auxclick', handleAffiliateLinkClick)
</script>
```
:::note
To keep things cleaner in your code, you can also copy the code above into a new `.js` file and load it onto every page via `<script src="the_file.js"></script>`. If you do this, make sure to copy the code into the `.js` file without the surrounding `<script>` tags.
:::

## 3. Create a custom event goal in your Plausible Analytics account

You’ll have to configure the goal for the click numbers to show up in your Plausible dashboard. To configure a goal, go to [your website’s settings](website-settings.md) in your Plausible Analytics account and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter `Affiliate Link: Click` as the custom event name. 

<img alt="Add your custom event goal" src={useBaseUrl('img/add-custom-event-goal.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who clicked on cloaked affiliate links. Goal conversions are listed at the very bottom of the dashboard. Note that at least one click is required for this to show in your dashboard. 
