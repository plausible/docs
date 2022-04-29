---
title: How to get started with the Stats API using Postman
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Postman is a simple interface that you can use for [our stats API](stats-api.md). To help you get started, here are the step by step instructions:

1) Log in to your [Postman](https://www.postman.com/) account.

2) Go to "**My Workspace**" and then "**Collections**" to create a new collection. Feel free to give it a descriptive name such as "**Plausible Stats API**".

3) Once you've created the collection, you should have the authorization tab open in which you can select the Bearer Token type for authorization:

<img alt="Select the Bearer Token type for authorization" src={useBaseUrl('img/postman-authorization.png')} />

4) In the Token field, you should paste your Plausible Stats API key. You can obtain the Stats API key for your account by going to [your Plausible account settings](https://plausible.io/settings).

5) Once that's done, go ahead and save the collection at the top right:

<img alt="Save the collection at the top right" src={useBaseUrl('img/postman-save-authorization.png')} />

6) Then add a new request to this collection and again feel free to give it a descriptive name:

<img alt="Add a new request to this collection" src={useBaseUrl('img/postman-add-request.png')} />

7) Now, you can copy an example query from [our stats API documentation](stats-api.md), and paste it into the request field as follows:

<img alt="Copy an example query from our documentation, and paste it" src={useBaseUrl('img/postman-paste-query.png')} />

This will automatically read the different parameters and display them at the bottom. You can modify the parameters from the URL and in the bottom section too.

8) Hit send and you should see the response. This should be formatted as JSON by default. You can choose some other formatting if you like.

9) Now, you probably want to export this data. For that, you can either download the response as a .json file (Save Response), or copy it to your clipboard:

<img alt="Download the response as a .json file (Save Response)" src={useBaseUrl('img/postman-save-response.png')} />

10) To convert the data into the CSV format, you should copy the response to your clipboard, and paste it into a tool like [this one](https://www.convertcsv.com/json-to-csv.htm).

You can save the request to use it again in the future. You can also create new ones and save them as well. Have fun exploring!
