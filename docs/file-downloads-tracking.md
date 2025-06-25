---
title: File downloads tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Track file downloads" src={useBaseUrl('img/track-file-downloads.png')} />

:::note
If you use the file downloads tracking feature, then these count towards your billable monthly pageviews.
:::

File downloads tracking is essential for many site owners and Plausible helps you automate this process. Plausible can capture a file download event each time a link is clicked and that link contains a file extension. All the most common file extensions are tracked by default but you can also specify a custom list of file types to track. With our "**File downloads**" tracking you can:

* See which files are clicked the most
* See on which of your pages the particular file gets the clicks
* Filter the dashboard by a file URL to see what type of visitors click the most (referral source, entry page, location, device, browser, OS)
* Group your file downloads by any domain name or keyword

"**File downloads**" is an [optional enhanced measurement](script-extensions.md) that's not included in our default script. This is because we want to keep the default script as simple and lightweight as possible. If you want to track file downloads, here's how to enable it:

## Enable "File downloads" for your site

You can enable "**File downloads**" as an optional measurement when adding a new site to your Plausible account. If the site has already been added to your account, you can control what data is collected in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

<img alt="Enable outbound file downloads tracking during onboarding" src={useBaseUrl('img/onboarding-enable-file-downloads-tracking.png')} />

After you enable file downloads tracking on your site, all the file downloads will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see the "**File Download**" goal as soon as the first file download has been tracked.

:::tip Using WordPress?
The quickest way to start tracking file downloads is to use our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin)
:::

## See all the file download clicks in your dashboard

Click on "**File Download**" goal in the "**Goal Conversions**" report of your Plausible dashboard to see the full list of all clicks on all files and have your dashboard filtered by file download clicks only. You can see:

* The number of total file download clicks
* The number of unique file download clicks
* The conversion rate
* Top referral sources that lead to clicks
* Top pages that drive the clicks
* Countries, regions and cities that click on file download
* Devices (screen size, browser, OS) that click on file download

Click on a particular file URL to filter the dashboard by those clicks only and get the full overview of that specific file.

Want to group file downloads by the domain name or any other keyword? In the "**Filter**" button in the top right of your dashboard, choose "**Property**". Then select "**url**" (this includes all the file download URLs we have recorded) and use the "**contains**" option. Add whatever domain or keyword you want to group the file downloads by and click on the "**Apply Filter**" button.

## Which file types are tracked?

Our "**File downloads**" tracking captures a file download event each time a link is clicked with a document, presentation, text file, compressed file, video, audio or other common file type. Both internal and external files downloads are tracked. These file extensions are tracked by default:

`.pdf`, `.xlsx`, `.docx`, `.txt`, `.rtf`, `.csv`, `.exe`, `.key`, `.pps`, `.ppt`, `.pptx`, `.7z`, `.pkg`, `.rar`, `.gz`, `.zip`, `.avi`, `.mov`, `.mp4`, `.mpeg`, `.wmv`, `.midi`, `.mp3`, `.wav`, `.wma`, `.dmg`

## What if I want to track a different file type?

You can also specify a custom list of file types to track with a `file-types` attribute tag. With this, you can track other file types not present in our default list. Say you only want to track `.js` and `.py` files, you can pass the following argument to `plausible.init`:

```javascript
plausible.init({
  fileDownloads: {
    fileExtensions: ["pdf", "js"]
  }
})
```

Using the `fileExtensions` option will override our default list and only your custom file type downloads will be tracked.

Learn more about [effectively optimizing for file downloads](https://plausible.io/blog/track-file-downloads-in-web-analytics) on our blog.

## How to disable "File downloads" tracking for your site

You can control what data is collected in the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md).

After you disable file downloads tracking, we will automatically remove the goal called `File Download` from your site.
