---
title: Installation guides
---

Installing Plausible on a website can be a slightly different process depending on what tools you're using to manage your site.

We've put together several guides that cover popular website builders and content management systems (CMS). These can help you set up and start counting your site visitors in no time.

Thanks to the members of our community, there are also integrations and plugins for various frameworks.

Here's the full list:

## Add the snippet to the header of your site

To integrate your website with Plausible, you can manually insert our tracking snippet into the header section of your site. See [the details here](plausible-script.md).

## WordPress plugin

Using WordPress? We have a WordPress plugin that makes the integration nice and easy. [Here's how to get started with our WordPress plugin](https://plausible.io/wordpress-analytics-plugin).

## Google Tag Manager (GTM)

Using GTM? You need to use a GTM-specific snippet instead of our default snippet. See how to integrate Plausible into your site by using [Google Tag Manager](google-tag-manager.md).

## Run Plausible as a first-party connection

You can run Plausible script as a first-party connection from your domain name in order to bypass adblockers. [Learn more here](/proxy/introduction.md).

## Server side tracking and mobile apps tracking

Our events API can be used to record pageviews and custom events server side without the use of JavaScript. You can use the events API to count users on your Android and/or iOS mobile apps too. [Learn more here](events-api.md)

## Android SDK

[Android SDK](https://github.com/wbrawner/plausible-android): An Android SDK for Plausible Analytics. Built and maintained by [William Brawner](https://github.com/wbrawner).

## Bridgetown

[Bridgetown](https://rubygems.org/gems/bridgetown-plausible): this plugin provides the plausible Liquid tag & ERB helper to your Bridgetown site. Built and maintained by [Andrew Mason](https://www.andrewm.codes/) and the Bridgetown Community. Here's [the source code](https://github.com/bt-rb/bridgetown-plausible).

## Bubble.io

[This plugin](https://bubble.io/plugin/plausible-1676637257786x508745208583421950) helps you integrate Plausible into Bubble. Built and maintained by [AlderHam](https://bubble.io/contributor/1635756684643x102125470408982670)

## Buttondown

[How to add the script to your Buttondown site](buttondown.md)

## Carrd

[How to add the script to your Carrd site](carrd-integration.md)

## Craft CMS

[Craft CMS plugin](https://plugins.craftcms.com/plausible): Gives you handy dashboard widgets to display analytics data from Plausible. Built and maintained by [Shorn](https://shorn.co.uk/).

## DatoCMS

[DatoCMS plugin](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-plausible): Provides a link to Plausible for the current record on the sidebar.  Built and maintained by [Odd Camp](https://www.oddcamp.com).

## Doctave

[How to add Plausible to your Doctave project](https://docs.doctave.com/docs/integrations/plausible)

## DNT and offline functionality

Plausible doesn't take DNT (Do Not Track) into consideration by default as [DNT has been](https://www.eff.org/issues/do-not-track) abandoned by standards bodies such as the W3C. You can use [the analytics library](https://github.com/ian/analytics/tree/main/packages/plausible) to add features such as DNT (Do Not Track) and offline functionality. Built and maintained by [David Wells](https://github.com/DavidWells).

## Discourse

[How to add the script to your Discourse community](discourse-integration.md)

## Django

* [Django-Plausible](https://pypi.org/project/django-plausible/): Django module to provide easy Plausible integration, with Wagtail support. Built and maintained by [Jake Howard](https://pypi.org/user/TheOrangeOne/).

* [Django-plausible-proxy](https://github.com/imankulov/django-plausible-proxy) is a module to proxy requests and send server-side events to Plausible Analytics.

## Docusaurus

[How to add the script to your Docusaurus site](docusaurus-integration.md)

## Drupal

[New Drupal module](https://www.drupal.org/project/plausible_tracking): A new drupal module for Plausible. Allows you to integrate Plausible, track custom events, block IPs from tracking, enable file download tracking, track custom query params as pageview events, track outbound link clicks. Built and maintained by [Reload](https://reload.dk/)

[Drupal](https://www.drupal.org/project/plausible): A Drupal module for Plausible. Allows you to ignore tracking on certain pages and by certain user roles. Built and maintained by Dane Rossenrode of [Touchdreams](https://touchdreams.co.za/).

## Elixir

[Elixir library](https://hex.pm/packages/plausible) to push events to Plausible. Built and maintained by [Suracheth Chawla](https://hex.pm/users/blisscs).

## Flipsite

[Flipsite settings](https://flipsite.io/blog/plausible-analytics/): Include Plausible in your Flipsite settings and score 100% on Lighthouse and all other speed tests. Open Source compiler at [Github](https://github.com/flipsite/flipsite). Only possible with Plausible.

## Flutter

[Flutter plugin](https://pub.dev/packages/plausible_analytics): Send pageviews and custom events to Plausible. Built and maintained by [Eric Trenkel](https://erictrenkel.com/).

## Gatsby

[Gatsby](https://www.gatsbyjs.com/plugins/gatsby-plugin-plausible/): A Gatsby plugin for adding Plausible Analytics to your Gatsby site. Built and maintained by [Curtis Cummings](https://curtiscummings.me).

## Ghost

[How to add the script to your Ghost site](ghost-integration.md).

## GitBook

[The GitBook Plausible Analytics integration](https://www.gitbook.com/integrations/plausible) allows you to track traffic in your published spaces from your Plausible dashboard.

## Go

[go-plausible](https://github.com/andrerfcsantos/go-plausible): Golang wrapper for the Plausible API. Built and maintained by [André Santos](https://github.com/andrerfcsantos).

## Google AMP Pages

To track Google AMP pages with Plausible, you need to declare an AMP-analytics object on your AMP pages. [See the instructions here](https://github.com/plausible/analytics/discussions/220#discussioncomment-904022).

## Google Chrome extensions

To track Google Chrome browser extensions with Plausible, you can [follow these instructions](https://gist.github.com/Joelkw/31b798f69c714c00e9e097b1fd4bb3c8).

## Grafana

To observe Plausible records from [Prometheus](#prometheus) in [Grafana](https://grafana.com), you can use [this Dashboard](https://github.com/netservicedev/grafana-plausible-dashboard). Created by [Marks Bogdanovs](https://www.ezitisitis.com) and maintained by [Net service](https://www.netservice.lv)

## Grav

[Grav](https://github.com/iainsgillis/grav-plugin-plausible): Add Plausible Analytics to your [Grav CMS](https://getgrav.org/) site and configure it from the admin panel. Built and maintained by [Iain Gillis](https://www.iainsgillis.com).

## Gridsome

[Gridsome](https://github.com/svendroid/gridsome-plugin-plausible-analytics): A plugin to add Plausible Analytics to your [Gridsome](https://gridsome.org/) site. Built and maintained by [Sven Adolph](https://svenadolph.net).

## Hash-based routing

If you're using a frontend framework that uses the URL hash for routing, you need to use our hash-based tracker instead of the default one. [See more here](hash-based-routing.md)

## HelpDocs

[HelpDocs](https://support.helpdocs.io/article/63zwj1o9vy-connecting-plausible-analytics): Native Plausible integration to make it easy for you to work out how customers are behaving on your Knowledge Base, in a secure and privacy-compliant way.

## Hexo

[Hego plugin](https://github.com/maaaaarco/hexo-plausible-analytics): A simple Hexo plugin to inject Plausible script into your pages. Built and maintained by [Marco](https://spaghetti.dev/).

## HubSpot

[How to add the script to your HubSpot site](hubspot-analytics.md).

## Hugo

[How to add the script to your Hugo site](hugo-integration.md).

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

## Magento / Adobe Commerce

[Magento Plausible](https://github.com/Pixel-Open/magento-plausible): Add Plausible to Magento to save visited pages, access analytics in Magento admin area, manage goals on specific actions and more. Built and maintained by [PIXEL Open](https://pixel-open.org).

## MediaWiki

[MediaWiki Extension](https://github.com/octfx/mediawiki-extension-Plausible): MediaWiki extension to enable Plausible Analytics. Built and maintained by [Octfx](https://github.com/octfx).

## Micro.blog

[Micro.blog](https://micro.blog): Integrate Micro.blog with Plausible Analytics using a plugin. You can add it under Find Plug-ins in Micro.blog and then use the Settings button to configure it for your Plausible account. Built and maintained by [Lukas Rosenstock](https://lukasrosenstock.net/2020/07/24/ive-struggled-a.html). Here's [the source code](https://github.com/LukasRos/plugin-plausible).

## MkDocs

[Plausible Analytics for Material](https://material-plausible-plugin.ale.sh/): This plugin implements Plausible Analytics support in Material for MkDocs. Built and maintained by [Alexander Pushkov](https://github.com/notpushkin).

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

## Nuxt

[Nuxt module](https://nuxt.com/modules/plausible) to natively integrate Plausible Analytics.

## Open Journal Systems (OJS)

The [OJS Site Usage plugin](https://gitlab.com/ubiquitypress/ojs-plugin-site-usage) inserts a new page into the editor dashboard for a journal that displays the Plausible dashboard, allowing journal editors and managers to access and filter their site data in real time.

## PayloadCMS

[Dashboard Analytics plugin for PayloadCMS](https://nouance.io/articles/announcing-the-dashboard-analytics-plugin): You can add charts and statistics widgets directly in your admin interface.

## Podcastpage.io

Add Plausible to your [Podcastpage.io](https://podcastpage.io/) website. Just enable the Plausible script through the "Integrations" page of your dashboard to add the tracking script to all pages.

## Prometheus 

Add Plausible records to [Prometheus](https://prometheus.io) to use with [Grafana](#grafana). Add [Plausible exporter](https://github.com/riesinger/plausible-exporter) and start collecting data. Created and maintained by [Pascal Riesinger](https://riesinger.dev).

## Publii

[Plausible plugin](https://marketplace.getpublii.com/plugins/plausible-analytics/) for Publii. Built and maintained by [TidyCustom](https://tidycustoms.net/).

## Prestashop

* [Plausible module](https://github.com/mrdotb/prestashop_plausible/) for [Prestashop](https://www.prestashop.com/). Built and maintained by [mrdotb](https://mrdotb.com/).

* [Prestashop Plausible](https://pixel-open.org/projects/prestashop-plausible/): Add Plausible in Prestashop. Built and maintained by [PIXEL Open](https://pixel-open.org).

## Qt6 / QML

[Qt6 QML plugin](https://gitlab.com/kelteseth/qml-plausible) for Plausible. Built and maintained by [Elias Steurer](https://gitlab.com/kelteseth).

## R

[plausibler](https://github.com/giocomai/plausibler): R wrapper for the Plausible API. Built and maintained by [Giorgio Comai](https://github.com/giocomai/).

## Readymag

Here's [how to add the script to your Readymag website](https://help.readymag.com/hc/en-us/articles/26933451909019-Plausible)

## Ruby

[Plausible API Ruby Gem](https://github.com/dailytics/plausible_api): This is a simple wrapper to read the Plausible API with Ruby. Built and maintained by [Dailytics](https://dailytics.com/).

## Sanity.io

[Plausible iframe dashboard widget](https://www.sanity.io/plugins/plausible-iframe): Simple plugin to show Plausible as an iframe inside of the Sanity dashboard. Built and maintained by [Ole Svennevig](https://olesvennevig.no/).

## Segment

There's no official Plausible integration with Segment but Segment allows you to integrate with Google Tag Manager. So you could integrate Plausible with Segment through Google Tag Manager. Here's how to use [Google Tag Manager](google-tag-manager.md).

## Shopify

[How to add the script to your Shopify store](shopify-integration.md).

## Shopware

[Plausible Tracking and Ecommerce](https://store.shopware.com/en/campi10096862362m/plausible-tracking-and-ecommerce-cloud.html): Add Plausible Analytics to Shopware 6. Track custom events and ecommerce data. Built and maintained by [Campit](https://campit.be/).

## Single-page applications

Plausible integrates automatically with modern pushState based frontend routers. If you're running a single-page application with React, Angular, Vue or similar frameworks, you don't need to add any extra configuration to make analytics work. [Learn more here](spa-support.md).

## Sphinx / Read The Docs

There is a [Plausible Sphinx extension](https://pypi.org/project/sphinx-plausible/)

## Squarespace

[How to add the script to your Squarespace site](squarespace-integration.md)

## Statamic

[Plausible Wrapper](https://statamic.com/addons/jack-whiting/plausible): A wrapper around the Plausible API that fetches the analytics into your dashboard in a pretty way. Built and maintained by [Jack Whiting](https://jackwhiting.co.uk/)

## Swift

* [PlausibleSwift](https://github.com/nickoneill/PlausibleSwift) - An implementation of Plausible Analytics pageview and event tracking for Swift. Built and maintained by [Nick O'neill](https://github.com/nickoneill)

* [AviaryInsights](https://github.com/brightdigit/AviaryInsights): Easy to use Swift package for recording pageviews and custom events for Plausible. Built and maintained by [Leo Dion](https://github.com/leogdion)

## Sylius

A [Sylius Plausible plugin](https://github.com/Setono/sylius-plausible-plugin) that integrates Plausible seamlessly into your store. Built and maintained by [Setono](https://github.com/Setono).

## Turbo / Turbolinks

We offer a manual mode in case you want full control over when pageviews are triggered on your website. The most common use-case for this is when you use Turbo (formerly Turbolinks). [Learn more here](script-extensions.md#plausiblemanualjs)

## TYPO3

[TYPO3](https://extensions.typo3.org/extension/plausibleio) extension for Plausible. Built and maintained by Susanne Moog

## TypeDoc

A [TypeDoc Plausible plugin](https://typedoc-plausible.8hob.io/) that integrates Plausible into your built html docs. Built and maintained by [8 Hobbies](https://8hob.io).

## Vue.js

* [Vue.js & Nuxt.js](https://github.com/moritzsternemann/vue-plausible): A Vue.js plugin and NuxtJS module for Plausible. Exposes the functionality of [plausible-tracker](https://github.com/plausible/plausible-tracker) to Vue and Nuxt instances, Vue components, and Vuex stores. Built and maintained by [Moritz Sternemann](https://github.com/moritzsternemann).

* Plausible module [for Nuxt 3 and Vue 3](https://github.com/productdevbookcom/v-plausible)

## VuePress

[VuePress](https://github.com/spekulatius/vuepress-plugin-plausible): A VuePress-plugin allowing you to use Plausible for your documentation website. Built and maintained by [Peter Thaleikis](https://peterthaleikis.com).

## Webflow

[How to add the script to your Webflow site](webflow-integration.md)

## Wix

[How to add the script to your Wix site](wix-integration.md)

## Data pipelines, warehouses and other ways of viewing Plausible stats elsewhere

[See this list](data-pipelines.md) for data pipelines, warehouses and other ways of viewing Plausible stats elsewhere. For instance, our [stats API](stats-api.md), [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin) and [official Google Looker Studio connector](looker-studio.md).

---

Let us know about any other integrations that you've built and we will feature them in this list. Thanks for your support!
