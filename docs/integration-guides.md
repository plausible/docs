---
title: Integration guides
---

Installing Plausible on a site can be a slightly different process depending on what tools you're using. 

We've put together several guides that cover popular website builders and content management systems (CMS). These can help you set up and start counting your site visitors in no time.

Thanks to the members of our community, there are also integrations and plugins for various frameworks. 

Here's the full list in alphabetical order:

## Bridgetown

[Bridgetown](https://rubygems.org/gems/bridgetown-plausible-tag): A Liquid tag to add Plausible to your Bridgetown site. Built and maintained by [Andrew Mason](https://www.andrewm.codes/). Here's [the source code](https://github.com/andrewmcodes/bridgetown-plausible-tag).

## Buttondown

[How to add the script to your Buttondown site](buttondown.md)

## Carrd

[How to add the script to your Carrd site](carrd-integration.md)

## Craft CMS

[Craft CMS plugin](https://plugins.craftcms.com/plausible): Gives you handy dashboard widgets to display analytics data from Plausible. Built and maintained by [Shorn](https://shorn.co.uk/).

## DNT and offline functionality

You can use Plausible with [the analytics library](https://github.com/ian/analytics/tree/main/packages/plausible). Combine privacy first analytics with a tiny middleware layer to add features such as DNT (Do Not Track) and offline functionality. Built and maintained by [David Wells](https://github.com/DavidWells).

:::note
Plausible by default doesn't take DNT (Do Not Track) into consideration as we're a privacy first analytics tool and [DNT allows](https://www.eff.org/issues/do-not-track) "data analysis techniques that protect the anonymity of the users".
:::

## Discourse

[How to add the script to your Discourse community](discourse-integration.md)

## Django / Wagtail

[Django-Plausible](https://pypi.org/project/django-plausible/): Django module to provide easy Plausible integration, with Wagtail support. Built and maintained by [Jake Howard](https://pypi.org/user/TheOrangeOne/).

## Docusaurus

[How to add the script to your Docusaurus site](docusaurus-integration.md)

## Drupal

[Drupal](https://www.drupal.org/project/plausible): A Drupal module for Plausible. Allows you to ignore tracking on certain pages and by certain user roles. Built and maintained by Dane Rossenrode of [Touchdreams](https://touchdreams.co.za/).

## First party connection (proxy)

You can run Plausible as a first party connection from your domain name. [Learn more here](/proxy/introduction.md).

## Flatpak

[Plausible Flatpak App](https://flathub.org/apps/details/com.cassidyjames.plausible): Linux app for Plausible. Built and maintained by [Cassidy James Blaede](https://cassidyjames.com/).

## GatsbyJS

[GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-plugin-plausible/): A Gatsby plugin for adding Plausible Analytics to your Gatsby site. Built and maintained by Curtis Cummings of [https://aquil.io/](https://aquil.io/).

## Ghost

[How to add the script to your Ghost site](ghost-integration.md)

## Go

[go-plausible](https://github.com/andrerfcsantos/go-plausible): Golang wrapper for the Plausible API. Built and maintained by [André Santos](https://github.com/andrerfcsantos).

## Google AMP Pages

To track Google AMP pages with Plausible, you need to declare an AMP-analytics object on your AMP pages. [See the instructions here](https://github.com/plausible/analytics/discussions/220#discussioncomment-904022).

## Google Chrome extensions 

To track Google Chrome browser extensions with Plausible, you can [follow these instructions](https://gist.github.com/Joelkw/31b798f69c714c00e9e097b1fd4bb3c8).

## Google Tag Manager (GTM)

You can integrate Plausible into your site by using [Google Tag Manager](google-tag-manager.md).

## Grav

[Grav](https://github.com/iainsgillis/grav-plugin-plausible): Add Plausible Analytics to your [Grav CMS](https://getgrav.org/) site and configure it from the admin panel. Built and maintained by [Iain Gillis](https://www.iainsgillis.com).

## Gridsome

[Gridsome](https://github.com/svendroid/gridsome-plugin-plausible-analytics): A plugin to add Plausible Analytics to your [Gridsome](https://gridsome.org/) site. Built and maintained by [Sven Adolph](https://svenadolph.net).

## Hash-based routing

If you're using a frontend framework that uses the URL hash for routing, you need to use our hash-based tracker instead of the default one. [See more here](hash-based-routing.md)

## Hexo

[Hego plugin](https://github.com/maaaaarco/hexo-plausible-analytics): A simple Hexo plugin to inject Plausible script into your pages. Built and maintained by [Marco](https://spaghetti.dev/).

## Hugo

[How to add the script to your Hugo site](hugo-integration.md)

## Jekyll

[Jekyll](https://github.com/hendrikschneider/jekyll-analytics): Webanalytics for Jekyll. Just install the plugin, configure it and you are done. Contribution by [David Schmitt](https://github.com/hendrikschneider/jekyll-analytics/pull/44).

## Kirby 

[Kirby 3 Plausible](https://github.com/rowdyrabouw/kirby3-plausible): Frontend snippet and Kirby panel. Contribution by [Rowdy Rabouw](https://github.com/rowdyrabouw).

## Localhost for hybrid apps

You can enable Plausible to count visitors on localhost which is useful in Cordova, Capacitor and other hybrid apps. [Learn more here](script-extensions.md)

## MediaWiki

[MediaWiki Extension](https://github.com/octfx/mediawiki-extension-Plausible): MediaWiki extension to enable Plausible Analytics. Built and maintained by [Octfx](https://github.com/octfx).

## Micro.blog

[Micro.blog](https://micro.blog): Integrate Micro.blog with Plausible Analytics using a plugin. You can add it under Find Plug-ins in Micro.blog and then use the Settings button to configure it for your Plausible account. Built and maintained by [Lukas Rosenstock](https://lukasrosenstock.net/2020/07/24/ive-struggled-a.html). Here's [the source code](https://github.com/LukasRos/plugin-plausible).

## Mobile apps for Android and iOS

If you'd like to count users on your Android and/or iOS mobile apps, you can use our events API to record views and custom events. [Learn more here](events-api.md)

## NPM package

[NPM package](https://www.npmjs.com/package/plausible-tracker): Frontend library to interact with Plausible. Same features as the official script, but as an NPM module. Works with React. Built and maintained by [Gustavo Maronato](https://github.com/plausible/plausible-tracker).

## Neos CMS

[Neos CMS](https://github.com/CarbonPackages/Carbon.Plausible): Add Plausible Analytics to your [Neos](https://www.neos.io/) site. Built and maintained by [Jon Uhlmann](https://github.com/jonnitto).

## NextJS

[NextJS](nextjs-integration.md): Simple integration for Plausible Analytics and [NextJS](https://nextjs.org). Provides custom events functionality. Built and maintained by [4lejandrito](https://github.com/4lejandrito).

## Podcastpage.io

Add Plausible to your [Podcastpage.io](https://podcastpage.io/) website. Just enable the Plausible script via the "Integrations" page of your dashboard to add the tracking script to all pages.

## R

[plausibler](https://github.com/giocomai/plausibler): R wrapper for the Plausible API. Built and maintained by [Giorgio Comai](https://github.com/giocomai/).

## Ruby

[Plausible API Ruby Gem](https://github.com/dailytics/plausible_api): This is a simple wrapper to read the Plausible API with Ruby. Built and maintained by [Dailytics](https://dailytics.com/).

## Server side tracking

We have the Plausible events API which can be used to record pageviews and custom events server side without the use of JavaScript. [Learn more here](events-api.md). 

## Shopify

[How to add the script to your Shopify store](shopify-integration.md)

## Single-page applications

Plausible integrates automatically with modern pushState based frontend routers. If you're running a single-page application with React, Angular, Vue or similar frameworks, you don't need to add any extra configuration to make analytics work. [Learn more here](spa-support.md).

## Squarespace

[How to add the script to your Squarespace site](squarespace-integration.md)

## Statamic

* [Statamic](https://statamic.com/addons/visuellverstehen/plausible): Let your [Statamic](https://statamic.com) users easily navigate to their shared Plausible link from inside the control panel. Built and maintained by [visuellverstehen](https://visuellverstehen.de).

* [Plausible Wrapper](https://statamic.com/addons/jack-whiting/plausible): A wrapper around the Plausible API that fetches the analytics into your dashboard in a pretty way. Built and maintained by [Jack Whiting](https://jackwhiting.co.uk/).

## Turbo / Turbolinks

We offer a manual mode in case you want full control over when pageviews are triggered on your website. The most common use-case for this is when you use Turbo (formerly Turbolinks). [Learn more here](script-extensions.md#plausiblemanualjs)

## TYPO3

[TYPO3](https://extensions.typo3.org/extension/plausibleio) extension for Plausible. Built and maintained by Susanne Moog

## Vue.js & Nuxt.js

[Vue.js & Nuxt.js](https://github.com/moritzsternemann/vue-plausible): A Vue.js plugin and NuxtJS module for Plausible. Exposes the functionality of [plausible-tracker](https://github.com/plausible/plausible-tracker) to Vue and Nuxt instances, Vue components, and Vuex stores. Built and maintained by [Moritz Sternemann](https://github.com/moritzsternemann).

## VuePress

[VuePress](https://github.com/spekulatius/vuepress-plugin-plausible): A VuePress-plugin allowing you to use Plausible for your documentation website. Built and maintained by [Peter Thaleikis](https://peterthaleikis.com).

## Webflow

[How to add the script to your Webflow site](webflow-integration.md)

## Wix

[How to add the script to your Wix site](wix-integration.md)

## WordPress

We have a WordPress plugin that makes the integration with WordPress nice and easy.

[Here's how to get started with our WordPress plugin](https://plausible.io/wordpress-analytics-plugin)

## iOS widget for quick overview of your stats

[iOS widget](https://gist.github.com/linuz90/ac969cdfe9bd92af0b306c43caee8d0c) to display the total visitors count for today and the live visitors count with Plausible and Scriptable. Built and maintained by [Fabrizio Rinaldi](https://gist.github.com/linuz90).

Let us know about any other integrations that you've built and we will feature them in this list. Thanks for your support!
