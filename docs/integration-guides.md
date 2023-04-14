---
title: Integration guides
---

Installing Plausible on a site can be a slightly different process depending on what tools you're using. 

We've put together several guides that cover popular website builders and content management systems (CMS). These can help you set up and start counting your site visitors in no time.

Thanks to the members of our community, there are also integrations and plugins for various frameworks. 

Here's the full list in alphabetical order:

## Airbyte connector

[Airbyte connector](https://docs.airbyte.com/integrations/sources/plausible/): A Plausible API connector for Airbyte, an open-source data integration platform. Built and maintained by [Scott Lee Chua](https://github.com/scottleechua).

## Android SDK

[Android SDK](https://github.com/wbrawner/plausible-android): An Android SDK for Plausible Analytics. Built and maintained by [William Brawner](https://github.com/wbrawner).

## BigQuery

[CloudQuery Plausible plugin](https://www.cloudquery.io/docs/plugins/sources/plausible/overview) extracts stats from Plausible stats API and loads them into BigQuery.

## Bridgetown

[Bridgetown](https://rubygems.org/gems/bridgetown-plausible-tag): A Liquid tag to add Plausible to your Bridgetown site. Built and maintained by [Andrew Mason](https://www.andrewm.codes/). Here's [the source code](https://github.com/andrewmcodes/bridgetown-plausible-tag).

## Bubble.io

[This simple plugin](https://bubble.io/plugin/plausible-analytics-1609143980013x318025391610265600) just adds the Plausible JS script loading to the header. You only need to provide your site url. Built and maintained by [Balthazar](https://bubble.io/contributor/balthazar-1608993775771x115633308365631340)

## Buttondown

[How to add the script to your Buttondown site](buttondown.md)

## Carrd

[How to add the script to your Carrd site](carrd-integration.md)

## CloudQuery

[CloudQuery Plausible plugin](https://www.cloudquery.io/docs/plugins/sources/plausible/overview) extracts stats from Plausible and loads them into any supported CloudQuery destination (PostgreSQL, Snowflake, BigQuery, S3...).

## Craft CMS

[Craft CMS plugin](https://plugins.craftcms.com/plausible): Gives you handy dashboard widgets to display analytics data from Plausible. Built and maintained by [Shorn](https://shorn.co.uk/).

## DatoCMS

[DatoCMS plugin](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-plausible): Provides a link to Plausible for the current record on the sidebar.  Built and maintained by [Odd Camp](https://www.oddcamp.com).

## DNT and offline functionality

You can use Plausible with [the analytics library](https://github.com/ian/analytics/tree/main/packages/plausible). Combine privacy first analytics with a tiny middleware layer to add features such as DNT (Do Not Track) and offline functionality. Built and maintained by [David Wells](https://github.com/DavidWells).

:::note
Plausible by default doesn't take DNT (Do Not Track) into consideration as we're a privacy first analytics tool and [DNT allows](https://www.eff.org/issues/do-not-track) "data analysis techniques that protect the anonymity of the users".
:::

## Discourse

[How to add the script to your Discourse community](discourse-integration.md)

## Django

* [Django-Plausible](https://pypi.org/project/django-plausible/): Django module to provide easy Plausible integration, with Wagtail support. Built and maintained by [Jake Howard](https://pypi.org/user/TheOrangeOne/).

* [Django-plausible-proxy](https://github.com/imankulov/django-plausible-proxy) is a module to proxy requests and send server-side events to Plausible Analytics. 

## Docusaurus

[How to add the script to your Docusaurus site](docusaurus-integration.md)

## Drupal

[Drupal](https://www.drupal.org/project/plausible): A Drupal module for Plausible. Allows you to ignore tracking on certain pages and by certain user roles. Built and maintained by Dane Rossenrode of [Touchdreams](https://touchdreams.co.za/).

## First party connection (proxy)

You can run Plausible as a first party connection from your domain name. [Learn more here](/proxy/introduction.md).

## Flatpak

[Plausible Flatpak App](https://flathub.org/apps/details/com.cassidyjames.plausible): Linux app for Plausible. Built and maintained by [Cassidy James Blaede](https://cassidyjames.com/).

## Flutter

[Flutter plugin](https://pub.dev/packages/plausible_analytics): Send pageviews and custom events to Plausible. Built and maintained by [Eric Trenkel](https://erictrenkel.com/).

## Gatsby

* [Gatsby](https://www.gatsbyjs.com/plugins/gatsby-plugin-plausible/): A Gatsby plugin for adding Plausible Analytics to your Gatsby site. Built and maintained by [Curtis Cummings](https://curtiscummings.me).

* In the post [Using Deferred Static Generation with Plausible Analytics](https://www.lekoarts.de/gatsby/using-deferred-static-generation-with-analytics-tools) you can learn how to build a source plugin for Plausible's API and use it together with Deferred Static Generation in Gatsby.

## Ghost

[How to add the script to your Ghost site](ghost-integration.md)


## GitBook

[The GitBook Plausible Analytics integration](https://docs.gitbook.com/product-tour/integrations/plausible) allows you to track traffic in your published spaces from your Plausible dashboard.

## Go

[go-plausible](https://github.com/andrerfcsantos/go-plausible): Golang wrapper for the Plausible API. Built and maintained by [André Santos](https://github.com/andrerfcsantos).

## Google AMP Pages

To track Google AMP pages with Plausible, you need to declare an AMP-analytics object on your AMP pages. [See the instructions here](https://github.com/plausible/analytics/discussions/220#discussioncomment-904022).

## Google Chrome extensions 

To track Google Chrome browser extensions with Plausible, you can [follow these instructions](https://gist.github.com/Joelkw/31b798f69c714c00e9e097b1fd4bb3c8).

## Google Data Studio

There is a Plausible connector for Google Data Studio. It's community built and a paid product, but for those that require GDS, it's [worth checking out](https://www.epilocal.com/products/plausible-data-studio-connector/).

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

## HubSpot

[How to add the script to your HubSpot site](hubspot-analytics.md).

## Hugo

[How to add the script to your Hugo site](hugo-integration.md)

## Jekyll

[Jekyll](https://github.com/hendrikschneider/jekyll-analytics): Webanalytics for Jekyll. Just install the plugin, configure it and you are done. Contribution by [David Schmitt](https://github.com/hendrikschneider/jekyll-analytics/pull/44).

## Kirby 

[Kirby 3 Plausible](https://github.com/rowdyrabouw/kirby3-plausible): Frontend snippet and Kirby panel. Contribution by [Rowdy Rabouw](https://github.com/rowdyrabouw).

## Laravel

* [Laravel Plausible](https://github.com/VincentBean/laravel-plausible): This package provides a blade view with the script tag for Plausible and a wrapper to easily send custom events to Plausible. Built and maintained by [Vincent Boon](https://github.com/VincentBean). 

* [Plausible Analytics for Laravel 10+](https://github.com/njoguamos/laravel-plausible): A Laravel package for interacting with the Plausible API. Built and maintained by [Njogu Amos](https://github.com/njoguamos).

* [Laravel Plausible Exclude Page](https://github.com/swiftmade/laravel-plausible-exclude): Quickly add a page to your Laravel application to exclude your visits from Plausible. Built and maintained by [Swiftmade](https://swiftmade.co/blog/2023-03-11-exclude-your-own-traffic-from-plausible-analytics/).

## Localhost for hybrid apps

You can enable Plausible to count visitors on localhost which is useful in Cordova, Capacitor and other hybrid apps. [Learn more here](script-extensions.md)

## MediaWiki

[MediaWiki Extension](https://github.com/octfx/mediawiki-extension-Plausible): MediaWiki extension to enable Plausible Analytics. Built and maintained by [Octfx](https://github.com/octfx).

## Micro.blog

[Micro.blog](https://micro.blog): Integrate Micro.blog with Plausible Analytics using a plugin. You can add it under Find Plug-ins in Micro.blog and then use the Settings button to configure it for your Plausible account. Built and maintained by [Lukas Rosenstock](https://lukasrosenstock.net/2020/07/24/ive-struggled-a.html). Here's [the source code](https://github.com/LukasRos/plugin-plausible).

## MkDocs

[Plausible Analytics for Material](https://material-plausible-plugin.ale.sh/): This plugin implements Plausible Analytics support in Material for MkDocs. Built and maintained by [Alexander Pushkov](https://github.com/notpushkin).

## Mobile apps for Android and iOS

If you'd like to count users on your Android and/or iOS mobile apps, you can use our events API to record views and custom events. [Learn more here](events-api.md)

## n8n

[An n8n community node](https://www.npmjs.com/package/n8n-nodes-plausible) for working with the Plausible API.

## npm package

[npm package](https://www.npmjs.com/package/plausible-tracker): Frontend library to interact with Plausible. Same features as the official script, but as an npm module. Works with React. Built and maintained by [Gustavo Maronato](https://github.com/plausible/plausible-tracker).

## Neos CMS

[Neos CMS](https://github.com/CarbonPackages/Carbon.Plausible): Add Plausible Analytics to your [Neos](https://www.neos.io/) site. Built and maintained by [Jon Uhlmann](https://github.com/jonnitto).

## NextJS

[NextJS](nextjs-integration.md): Simple integration for Plausible Analytics and [NextJS](https://nextjs.org). Provides custom events functionality. Built and maintained by [4lejandrito](https://github.com/4lejandrito).

## Notion website

To integrate Plausible Analytics into your Notion website, you'll need to use a third-party service such as Potion or Super (both are paid tools) that will allow you add custom code to your Notion website. 

## Podcastpage.io

Add Plausible to your [Podcastpage.io](https://podcastpage.io/) website. Just enable the Plausible script through the "Integrations" page of your dashboard to add the tracking script to all pages.

## Power BI

[CloudQuery Plausible plugin](https://www.cloudquery.io/docs/plugins/sources/plausible/overview) extracts stats from Plausible stats API and loads them into Power BI.

## Publii

[Plausible plugin](https://marketplace.getpublii.com/plugins/plausible-analytics/) for Publii. Built and maintained by [TidyCustom](https://tidycustoms.net/).

## Prestashop

* [Plausible module](https://github.com/mrdotb/prestashop_plausible/) for [Prestashop](https://www.prestashop.com/). Built and maintained by [mrdotb](https://mrdotb.com/).

* [Prestashop Plausible](https://pixel-open.org/projects/prestashop-plausible/): Add Plausible in Prestashop. Built and maintained by [PIXEL Open](https://pixel-open.org).

## Qt6 / QML

[Qt6 QML plugin](https://gitlab.com/kelteseth/qml-plausible) for Plausible. Built and maintained by [Elias Steurer](https://gitlab.com/kelteseth).

## R

[plausibler](https://github.com/giocomai/plausibler): R wrapper for the Plausible API. Built and maintained by [Giorgio Comai](https://github.com/giocomai/).

## Ruby

[Plausible API Ruby Gem](https://github.com/dailytics/plausible_api): This is a simple wrapper to read the Plausible API with Ruby. Built and maintained by [Dailytics](https://dailytics.com/).

## S3

[CloudQuery Plausible plugin](https://www.cloudquery.io/docs/plugins/sources/plausible/overview) extracts stats from Plausible stats API and loads them into S3.

## Sanity.io

[Plausible iframe dashboard widget](https://www.sanity.io/plugins/plausible-iframe): Simple plugin to show Plausible as an iframe inside of the Sanity dashboard. Built and maintained by [Ole Svennevig](https://olesvennevig.no/).

## Segment

There's no official Plausible integration with Segment but Segment allows you to integrate with Google Tag Manager. So you could integrate Plausible with Segment through Google Tag Manager. Here's how to use [Google Tag Manager](google-tag-manager.md).

## Server side tracking

We have the Plausible events API which can be used to record pageviews and custom events server side without the use of JavaScript. [Learn more here](events-api.md). 

## Shopify

[How to add the script to your Shopify store](shopify-integration.md)

## Single-page applications

Plausible integrates automatically with modern pushState based frontend routers. If you're running a single-page application with React, Angular, Vue or similar frameworks, you don't need to add any extra configuration to make analytics work. [Learn more here](spa-support.md).

## Snowflake

[CloudQuery Plausible plugin](https://www.cloudquery.io/docs/plugins/sources/plausible/overview) extracts stats from Plausible stats API and loads them into Snowflake.

## Sphinx / Read The Docs

This should place the script in the right place:

```python
html_js_files = [
    ('https://plausible.io/js/script.js', {"data-domain": "yourdomain.com", "defer": "defer"}),
]
```

If you need to override your theme, you need to use the `block extrahead` template instruction.  First, update the `conf.py` to include your `templates_path`. Then create a template (e.g. `_templates/layout.html`) and include the block in the template: `{% block extrahead %}<script ... >{% endblock %}`. See [Sphinx template](https://www.sphinx-doc.org/en/master/templating.html) documentation.

There is also a [Plausible Sphinx extension](https://pypi.org/project/sphinx-plausible/).

## Squarespace

[How to add the script to your Squarespace site](squarespace-integration.md)

## Statamic

[Plausible Wrapper](https://statamic.com/addons/jack-whiting/plausible): A wrapper around the Plausible API that fetches the analytics into your dashboard in a pretty way. Built and maintained by [Jack Whiting](https://jackwhiting.co.uk/).

## Turbo / Turbolinks

We offer a manual mode in case you want full control over when pageviews are triggered on your website. The most common use-case for this is when you use Turbo (formerly Turbolinks). [Learn more here](script-extensions.md#plausiblemanualjs)

## TYPO3

[TYPO3](https://extensions.typo3.org/extension/plausibleio) extension for Plausible. Built and maintained by Susanne Moog

## Vue.js & Nuxt.js

* [Vue.js & Nuxt.js](https://github.com/moritzsternemann/vue-plausible): A Vue.js plugin and NuxtJS module for Plausible. Exposes the functionality of [plausible-tracker](https://github.com/plausible/plausible-tracker) to Vue and Nuxt instances, Vue components, and Vuex stores. Built and maintained by [Moritz Sternemann](https://github.com/moritzsternemann).

* Support for Vue 3 ([plausible-vue](https://github.com/huntersofbook/huntersofbook/tree/main/packages/plausible-vue)) and for Nuxt 3 ([plausible-nuxt](https://github.com/huntersofbook/huntersofbook/tree/main/packages/plausible-nuxt)).

* There's also this [nuxt-plausible](https://github.com/johannschopplich/nuxt-plausible) Nuxt 3 module. 

## VuePress

[VuePress](https://github.com/spekulatius/vuepress-plugin-plausible): A VuePress-plugin allowing you to use Plausible for your documentation website. Built and maintained by [Peter Thaleikis](https://peterthaleikis.com).

## Webflow

[How to add the script to your Webflow site](webflow-integration.md)

## Wix

[How to add the script to your Wix site](wix-integration.md)

## WordPress

We have a WordPress plugin that makes the integration with WordPress nice and easy.

[Here's how to get started with our WordPress plugin](https://plausible.io/wordpress-analytics-plugin)

## iOS apps and widgets for quick overview of your stats

* [Glance for Plausible](https://testflight.apple.com/join/hG0MV7FC): A small app which lets you view your Plausible stats right on your iOS device. Built and maintained by Alexander Weiß.

* [Numerics Dashboards for Plausible](https://cynapse.com/numerics-integrations/plausible-dashboards/): Track your Plausible KPIs with Numerics Dashboards on your iPhone, iPad, Mac, Apple TV and Apple Watch.

* [iOS widget](https://gist.github.com/linuz90/ac969cdfe9bd92af0b306c43caee8d0c) to display the total visitors count for today and the live visitors count with Plausible and Scriptable. Built and maintained by [Fabrizio Rinaldi](https://gist.github.com/linuz90).

* [Metrics iOS Widget](https://santiviquez.gumroad.com/l/xLrcq) by Santiago Víquez

Let us know about any other integrations that you've built and we will feature them in this list. Thanks for your support!
