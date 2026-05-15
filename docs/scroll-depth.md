---
title: Scroll depth tracking
description: "See how far visitors scroll on your pages. Plausible tracks scroll depth by default at every percentage point. No setup or extra snippets required."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Scroll depth tracking is built into Plausible Analytics by default, allowing you to measure how far visitors scroll down your pages, expressed as a percentage.

This data provides insights into user engagement and helps optimize content placement, calls-to-action (CTAs) and page layouts.

## Scroll Depth percentage for your pages

You can find scroll depth data in:

1.  **The top row of metrics** when a page filter is applied. Click on it to see trends over time.

<div class="browser">
<img alt="Scroll depth metric in Plausible" src={useBaseUrl('img/scroll-depth-top-graph.png')} />
</div>

2.  **The expanded Top Pages tab**, where pages can be sorted by scroll depth for deeper analysis.

<div class="browser">
<img alt="Scroll depth metric in Top Pages details" src={useBaseUrl('img/scroll-depth-top-pages-details.png')} />
</div>

If there's insufficient data, scroll depth will display as "-" until more traffic is recorded.

You can also use [the Filters feature](filters-segments.md) to group similar pages and analyze their average scroll depth. For example, filter URLs containing "blog" to see average engagement for blog posts.

Plausible tracks scrolling at all percentages (1% to 100%), unlike many other tools that limit tracking to specific points such as 25%, 50%, and 75%. If you also want to track a specific scroll depth threshold for some of your pages, you can set up scroll depth goals.

## Scroll Depth goals

You can also set up a Scroll Depth goal with a specific scroll depth percentage threshold to see how many visitors scroll to and beyond your desired scroll depth mark.

To get started with **Scroll Depth Goals**, go to [your website's settings](website-settings.md) in Plausible Analytics and visit the **Goals** section. You should see an empty list with a prompt to add a goal.

Click on the **+ Add goal** button to go to the goal creation form.

Select `Scroll Depth` as the goal trigger, select the scroll depth percentage threshold (from 1% to 100%) and enter the pathname of the page you would like to track. The pathname must match the page path you can see in your Plausible Analytics dashboard.

When creating a scroll depth goal, you can optionally narrow it down using custom properties. This lets you turn a broad goal into a more specific one by matching only events with certain property values. For example, you could create a 75% scroll depth goal for blog posts that only counts when author = jane_doe, letting you measure deep engagement specifically with that author’s content.

<div class="browser">
<img alt="Scroll depth goals" src={useBaseUrl('img/scroll-depth-goal.png')} />
</div>

Do you want to analyze the scroll depth for a specific section of your site? You can use an asterisk (`*`) to match patterns in your page path URLs. Asterisks can be placed on either end or in the middle of any page path URL.

You can for instance group all of your blog posts by using `/blog*` (if your blog subdirectory is named `blog`) or your Woocommerce checkout pages by using `/checkout/order-received/*`. 

Next, click on the **Add goal** button to return to the goals page. When you navigate back to your Plausible Analytics dashboard, you should see the number of visitors who reached the particular scroll depth on the specified pages. Goals are listed at the bottom of your dashboard.

Scroll Depth goals only display the "Uniques" and "CR (conversion rate)" metrics, and not the "Total" metric like the [pageview goals](pageview-goals.md) and custom event goals do. This is because scrolling is an action that gets measured continuously during a pageview and it's not possible to count the total number of "scroll depth events" that occurred. For definitions of conversion rate and unique conversions, see the [metrics definitions](metrics-definitions.md) page.

## What's a good scroll depth?

This varies by content type and page length. For most pages, an average above 50% suggests visitors are engaging meaningfully with your content. Blog posts and long-form articles typically see 50-70%. Landing pages often run lower since visitors make quick decisions near the top of the page.

If your scroll depth is low on a page with an important call-to-action, the most direct fix is moving that element higher. If it's low on a long article, the content itself may not be holding attention past the introduction.

If you'd like to learn more about what scroll depth is, what's a good metric to have, and more, you can check out our blog post [here](https://plausible.io/blog/scroll-depth-tracking).

## Interpreting scroll depth by device and content type

Scroll depth means different things depending on the device and the type of page.

**Mobile vs. desktop**

Mobile screens are smaller, so users scroll more to consume the same content. A mobile visitor reaching 70% may have seen less of the page than a desktop visitor at 70%. Filter your scroll depth data by device type (using the Devices report) to compare mobile and desktop separately. If mobile scroll depth is consistently low, the likely cause is content layout rather than content quality.

**Page type differences**

- Blog posts and long-form content: 50-70% is a reasonable baseline. Readers who find the content relevant tend to scroll deep; those who do not leave early.
- Landing pages: 30-50% is common. Most conversions happen above the fold, so low scroll depth does not necessarily mean a problem.
- Documentation pages: varies widely. Technical reference pages are often scanned rather than read, so low average scroll depth with high repeat visits is normal.

Compare scroll depth within a content category rather than across your whole site. A blog post averaging 30% scroll depth warrants attention. A pricing page at 30% probably does not.

## Using scroll depth to improve your content

Scroll depth data is most useful when combined with other signals in your Plausible dashboard.

**Finding underperforming pages**

Open the Top Pages report and sort by scroll depth. Pages with unexpectedly low scroll depth relative to their traffic volume are candidates for review. A page with 500 visits but 20% average scroll depth is likely losing readers early. Check whether the drop happens because:

- The introduction does not match what the title or search snippet promises
- The page is slow to load on mobile
- A key CTA or important content is below a point where most readers stop

**Moving CTAs based on scroll data**

If your most important call to action sits at 80% of the page but most readers stop at 40%, move the CTA higher. You can verify the change worked by comparing scroll depth before and after using Plausible's date range comparison feature.

**Scroll depth alongside time on page**

High scroll depth with very low time on page suggests skimming rather than reading. Low scroll depth with high time on page suggests readers engage with the top of the page but rarely continue. Use both metrics together to distinguish between content that is genuinely engaging and content that just gets scrolled through quickly.

## Scroll depth goal patterns and examples

When creating scroll depth goals, the page path field supports wildcards. Here are common patterns:

**All pages:**
Leave the page path blank or use `**` to track scroll depth across your entire site.

**All blog posts:**
Use `/blog/**` to match any URL under your blog directory.

**A specific page:**
Use the exact path, such as `/pricing`, to track scroll depth only on that page.

**Multiple directories:**
Create separate goals for `/blog/**` and `/docs/**` to compare scroll behavior across content types.

**Threshold selection**

Create goals at multiple thresholds on the same page to see the full distribution. For example, set goals at 25%, 50%, 75% and 100% on a key landing page. This shows you where readers drop off across the page, not just whether they reached a single threshold.

**Combining with custom properties**

If you use [custom properties](custom-props/introduction.md) to tag your pages (for example, by author or category), you can filter scroll depth goals by those properties. This lets you compare scroll depth across content categories without creating separate goals for each category.
