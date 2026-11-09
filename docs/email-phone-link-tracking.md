---
title: Track clicks on email and phone links
description: "Count clicks on your mailto: and tel: links in Plausible as goals, either by tagging the links or with a small snippet that tracks all of them."
---

:::note
If you track link clicks, then these count towards your billable monthly pageviews.
:::

[Outbound link tracking](outbound-link-click-tracking.md) counts clicks on links to other websites. Email links (`mailto:`) and phone links (`tel:`) don't lead to a website, so they aren't counted there. You can track them as [custom events](custom-event-goals.md) in one of two ways. Pick one, not both, or each click is counted twice.

## Option 1: Tag the links you want to track

Add a CSS class to each email or phone link, the same way as for any [custom event with CSS class names](custom-event-goals.md#add-a-css-class-name-to-the-element-you-want-to-track-on-your-site):

```html
<a href="mailto:hello@yoursite.com" class="plausible-event-name=Email+Link+Click">Email us</a>
<a href="tel:+15551234567" class="plausible-event-name=Phone+Link+Click">Call us</a>
```

This works well when you only have a few such links, and you can tag them from most site builders and CMSs without touching code.

## Option 2: Track every email and phone link automatically

Add this script to every page, right below your Plausible snippet:

```html
<script>
  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest('a[href^="mailto:"], a[href^="tel:"]')
    if (!link) return
    var name = link.href.indexOf("mailto:") === 0 ? "Email Link: Click" : "Phone Link: Click"
    plausible(name, { props: { url: link.href } })
  })
</script>
```

It catches clicks on all email and phone links on the page, including ones you add later, and sends the address that was clicked as the `url` property.

## Add the goals in your site settings

Go to your [site settings](website-settings.md), open **Goals**, click **+ Add goal**, choose **Custom event** and add the event names you used: `Email Link Click` and `Phone Link Click` for option 1, or `Email Link: Click` and `Phone Link: Click` for option 2.

## See the clicks in your dashboard

The goals appear in the **Goals** section of your dashboard. Click one to filter the dashboard by it and see which pages, sources and countries lead to those clicks.

With option 2, you can also see which address or number was clicked: in the **Properties** tab, choose `url`. Seeing custom properties needs a plan that includes them (see [custom properties](custom-props/introduction.md)).

A click means a visitor opened their email app or phone dialer, not that they sent the email or made the call.
