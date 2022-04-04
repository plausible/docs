---
title: File downloads tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
If you use the File downloads tracking feature, then these count towards your billable monthly pageviews.
:::

File downloads tracking is essential for many site owners and Plausible helps you automate this process. With our "**File Downloads Tracking**" you can:

* See which files are clicked the most
* See on which of your pages the particular file gets the clicks
* Filter the dashboard by a file URL to see what type of visitors click the most (referral source, location, device, browser, OS)

"**File Downloads Tracking**" is an enhanced measurement and not included in our default script. This is because we want to keep the default script as simple and lightweight as possible. The additional enhanced measurements you can choose to add depending on your needs.

If you want to track file downloads, here's what you need to do:

## Step 1: Change the Plausible script snippet

Change your Plausible script snippet `src` attribute from `https://plausible.io/js/script.js` to `https://plausible.io/js/script.file-downloads.js`

The new snippet will look like this (make sure to change the `data-domain` attribute to the domain you added to Plausible):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.file-downloads.js"></script>
```

As usual, you need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Do this for all the websites where you'd like to enable file downloads tracking. This is the only tracking script you need. You don't need to keep the old script. Your stats will keep tracking without interruption and you will not lose any of your old data.

## Step 2: Create a custom event goal in your Plausible Analytics account

File downloads clicks won’t show up automatically. You’ll have to configure the goal for them to show up on your dashboard.

To configure a goal, go to [your website’s settings](website-settings.md) in your Plausible Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.

<img alt="Add your first goal" src={useBaseUrl('img/goal-conversions.png')} />

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `File Download`.

<img alt="Add File Download goal" src={useBaseUrl('img/file-downloads-goal-event.png')} />

Next, click on the "**Add goal**" button and you’ll be taken back to the Goals page. After you've completed this process, all the file download clicks will start being tracked and will be displayed in the "**Goal Conversions**" report of your Plausible Analytics dashboard. You'll see the "**File Download**" goal as soon as the first file download click has been tracked.

## See all the file download clicks in your dashboard

Click on "**File Download**" to see the full list of all clicks on all files and have your dashboard filtered by file download clicks only. You can see:

* The number of total file download clicks
* The number of unique file download clicks
* The conversion rate
* Top referral sources that lead to clicks
* Top pages that drive the clicks
* Countries, regions and cities that click on file download 
* Devices (screen size, browser, OS) that click on file download 

Click on a particular file URL to filter the dashboard by those clicks only and get the full overview of that specific file.

## Which file formats are tracked?

Our "**File Downloads Tracking**" captures a file download event each time a link is clicked with a document, presentation, text file, compressed file, video, audio or other common file format. These file types are tracked by default: 

`.pdf`, `.xlsx`, `.docx`, `.txt`, `.rtf`, `.csv`, `.exe`, `.key`, `.pps`, `.ppt`, `.pptx`, `.7z`, `.pkg`, `.rar`, `.gz`, `.zip`, `.avi`, `.mov`, `.mp4`, `.mpeg`, `.wmv`, `.midi`, `.mp3`, `.wav`, `.wma`

Both internal and external files downloads are tracked.

## What if I want to track a file format that you don't support by default?

You can also specify a custom list of file types to track with a `file-types` attribute tag. With this, you can also track other downloads not present in the default list. Say you only want to track `.js` and `.py` files, you can use a snippet like this:

```html
<script defer file-types="js,py" data-domain="yourdomain.com" src="https://plausible.io/js/script.file-downloads.js"></script>
```

Using the `file-types` attribute will override the default list and only the custom file-type downloads will be tracked.
