---
displayed_sidebar: someSidebar
title: Paid campaigns, UTM tags and conversion attribution
description: "How to use UTM parameters to track paid campaigns, email links and other traffic sources in Plausible. Includes naming conventions, a link builder and troubleshooting."
---

UTM parameters are query string tags you add to URLs so Plausible can tell you which campaign, channel or source sent a visitor. Without them, traffic from newsletters, paid ads and social posts often shows up as Direct or under a referrer domain with no further detail.

## The five UTM parameters Plausible supports

| Parameter | What it tracks | Example value |
|---|---|---|
| `utm_source` | Which site or platform sent the traffic | `newsletter`, `google`, `twitter` |
| `utm_medium` | The marketing channel | `email`, `cpc`, `social` |
| `utm_campaign` | The campaign name | `spring-sale`, `product-launch` |
| `utm_content` | Distinguishes multiple links within the same campaign | `banner-top`, `text-link` |
| `utm_term` | The paid search keyword | `analytics+tool` |

`utm_source`, `utm_medium` and `utm_campaign` are the most commonly used. `utm_content` and `utm_term` are optional and useful mainly for paid search or campaigns with multiple link placements.

A tagged URL looks like this:

```
https://yourdomain.com/landing?utm_source=newsletter&utm_medium=email&utm_campaign=may-2025
```

## Where to view UTM data in Plausible

- **Top Sources** shows `utm_source` values alongside referrer domains. See [how the Sources and Campaigns tabs work](top-referrers.md) for more detail on filtering and channel groupings.
- **Campaigns** shows `utm_campaign` values and their traffic
- All five parameters are available as filters so you can slice any metric by campaign, medium or source
- Attribution is first-touch within a session: the UTM from the first pageview of a session is credited. If a visitor arrives from a tagged link mid-session, it is ignored.

A session stays active for 30 minutes after the last pageview. To measure which campaigns actually lead to signups or purchases, combine UTM tracking with [goal conversions](goal-conversions.md).

## Naming best practices

**Use lowercase consistently.** Plausible treats `Google` and `google` as two different sources. Pick one casing and stick to it across your team.

**Use hyphens as separators.** Spaces get URL-encoded as `%20` and underscores are easy to misread in reports. `spring-sale` is cleaner than `spring_sale` or `spring sale`.

**Be consistent across campaigns.** If you used `email` as the medium in January, do not switch to `e-mail` in March. Inconsistent values split your data into separate rows.

**Tag every link in paid campaigns.** Untagged links from ads or emails show up as Direct traffic or under the referrer domain with no campaign detail.

## Building UTM links

Use [Plausible's UTM builder](https://plausible.io/utm-builder) to construct tagged URLs without typos. Any spreadsheet template or other tool works just as well as long as the output follows the standard query string format.

## Troubleshooting: UTM not showing in Plausible

**UTMs only attribute on the first pageview of a new session.** If the visitor already has an active session when they click your tagged link, the UTM is recorded in the URL but not attributed. Test with a fresh browser profile or after 30+ minutes of inactivity.

**Check for redirects that strip query parameters.** Some landing page platforms, link shorteners or server-side redirects drop query strings before the final URL loads. Open the tagged link in a browser and confirm the UTM parameters are still present in the address bar on the destination page.

**Check your Plausible script settings.** If you have the `stop-tracking-utm-tags` option enabled, Plausible strips UTM parameters before recording the pageview. This is a privacy feature and means UTM data will not appear in your dashboard.
