---
title: Track what visitors search for on your site
description: "See the terms visitors type into your site's search box in Plausible, with a ready-made custom property snippet. Find the topics people look for and the content you're missing."
---

import PlanFeatureNote from '@site/src/components/PlanFeatureNote';

Plausible doesn't record what visitors type into your site's search box by default. Search terms usually sit in the address of your search results page, such as `yoursite.com/search?q=pricing`, and Plausible [leaves query parameters out of page paths](top-pages.md). You can send the search term yourself with a [custom property](custom-props/introduction.md), then see which terms visitors search for and filter your stats by them.

This guide is about the search box on your own site. To see what people searched on Google before they landed on your site, use the [Google Search Console integration](google-search-console-integration.md). On WordPress, our plugin can track site searches for you without any code: see [Search queries](wordpress-integration.md#search-queries).

<PlanFeatureNote feature="custom-properties" plan="business" label="Custom properties" />

## 1. Find the name of your search parameter

Search something on your site and look at the address of the results page. The search parameter is the part after the `?` and before the `=`. For example, if a search for "pricing" takes you to `yoursite.com/search?q=pricing`, the parameter is `q`. Common names are `q`, `s`, `query` and `search`.

## 2. Add the search term to your tracking snippet

In your Plausible snippet, add a `customProperties` option to the `plausible.init` call. Replace `q` with your parameter name:

```javascript
plausible.init({
  // ... Other initialization options
  customProperties: function() {
    var term = new URLSearchParams(location.search).get("q")
    return term ? { search_term: term.trim().toLowerCase() } : {}
  }
})
```

This sends the search term with each pageview of your search results page. Other pageviews are sent as usual, without the property. The term is lowercased so that "Pricing" and "pricing" are counted together.

Because the term rides along with the pageview of the results page, no extra events are sent and nothing extra counts towards your [billable pageviews](subscription-plans.md).

If you use our [NPM package](npm-package.md), pass the same `customProperties` option to `init`.

## 3. Add the property in your site settings

Go to your [site settings](website-settings.md), open the **Custom Properties** section and add `search_term`. You can also add it with one click once the first searches with it have come in.

## 4. See what visitors search for

At the bottom of your dashboard, in the **Goals** section, open the **Properties** tab and choose `search_term`. You see each term with the number of visitors who searched for it. Pageviews without a search term show as `(none)`.

Click a term to filter the whole dashboard by it, for example to see where the visitors who searched for it came from. More on [filtering by custom properties](custom-props/props-dashboard.md).

## If your search doesn't change the page address

Some search boxes show results without loading a new page, so the term never appears in the address. In that case, send a [custom event](custom-event-goals.md) from your search code when a search is made:

```javascript
plausible("Site Search", { props: { search_term: term } })
```

Replace `term` with the variable that holds what the visitor typed. Then add `Site Search` as a custom event goal in your site settings. Custom events count towards your billable pageviews.

## A note on privacy

Visitors sometimes type personal details into a search box, such as their name or email address. Plausible must not receive [personally identifiable information](custom-props/introduction.md#personally-identifiable-information), so if your search box invites that kind of search (an order lookup, say), leave those pages out or don't send the term.
