---
title: Integration guides
---

Installing Plausible on a site can be a slightly different process depending on what tools you're using. We've put together several guides that cover popular website builders and content management systems (CMS). These can help you set up and start counting your site visitors in no time.

Thanks to the members of our community, there are also integrations and plugins for various frameworks. Let us know about any other integrations that you've built and we will feature them. Thanks for your support!

Here's how to get Plausible Analytics up and running on your site.

## WordPress

We have a WordPress plugin that makes the integration with WordPress nice and easy.

[Here's how to get started with our WordPress plugin](https://plausible.io/wordpress-analytics-plugin)

## Ghost

[How to add the script to your Ghost site](ghost-integration.md)

## Webflow

[How to add the script to your Webflow site](webflow-integration.md)

## Buttondown

[How to add the script to your Buttondown site](buttondown.md)

## Squarespace

[How to add the script to your Squarespace site](squarespace-integration.md)

## Wix

[How to add the script to your Wix site](wix-integration.md)

## Discourse

[How to add the script to your Discourse community](discourse-integration.md)

## Docusaurus

[How to add the script to your Docusaurus site](docusaurus-integration.md)

## Carrd

[How to add the script to your Carrd site](carrd-integration.md)

## Shopify

[How to add the script to your Shopify store](shopify-integration.md)

## Single-page applications

[Single-page applications](spa-support.md)

## Hash-based routing

[Hash-based routing](hash-based-routing.md)

## Google Tag Manager (GTM)

Plausible can even be integrated using the Google Tag Manager. Add the Plausible snippet to the "**Custom HTML Tag**" and set the trigger to be "**All Pages**" if you want to count traffic on all of your pages.

Note that you cannot use Google Tag Manager if you want to track a subfolder. Only naked domain (yoursite.com) or subdomain (subdomain.yoursite.com) will work as the data-domain attribute while a subfolder (yoursite.com/subfolder) will not.

## GatsbyJS

[GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-plugin-plausible/): A Gatsby plugin for adding Plausible Analytics to your Gatsby site. Built and maintained by Curtis Cummings of [https://aquil.io/](https://aquil.io/).

## Micro.blog

[Micro.blog](https://micro.blog): Integrate Micro.blog with Plausible Analytics using a plugin. You can add it under Find Plug-ins in Micro.blog and then use the Settings button to configure it for your Plausible Analytics account. Built and maintained by [Lukas Rosenstock](https://lukasrosenstock.net/2020/07/24/ive-struggled-a.html). Here's [the source code](https://github.com/LukasRos/plugin-plausible).

## Drupal

[Drupal](https://www.drupal.org/project/plausible): A Drupal module for Plausible Analytics. Allows you to ignore tracking on certain pages and by certain user roles. Built and maintained by Dane Rossenrode of [Touchdreams](https://touchdreams.co.za/).

## Bridgetown

[Bridgetown](https://rubygems.org/gems/bridgetown-plausible-tag): A Liquid tag to add Plausible Analytics to your Bridgetown site. Built and maintained by [Andrew Mason](https://www.andrewm.codes/). Here's [the source code](https://github.com/andrewmcodes/bridgetown-plausible-tag).

## Hugo

[Hugo](https://github.com/divinerites/plausible-hugo): A theme component to easily add Plausible Analytics to your [Hugo](https://www.gohugo.io/) site. You can add custom goals, Outbound link custom goals, ignore tracking on certain pages and manage CSP rules. You also can embed your dashboard with 1 line of code. It works for both Plausible Analytics Cloud and Self-Hosted. Debug mode available. Can be used as Hugo Module. Built and maintained by Divinerites.

## AUR package for Arch Linux

[AUR package for Arch Linux](https://aur.archlinux.org/packages/plausible-git/): Start it using ``systemctl start plausible``, enable it at boot with ``systemctl enable plausible`` and change the environment variables by editing ``/etc/plausible.conf``. Built and maintained by [Rhys Perry](https://github.com/plausible/analytics/issues/263).

## NextJS 

[NextJS](nextjs-integration.md): Simple integration for Plausible Analytics and https://nextjs.org. Provides custom events functionality. Built and maintained by [4lejandrito](https://github.com/4lejandrito).

## Vue.js & Nuxt.js

[Vue.js & Nuxt.js](https://github.com/moritzsternemann/vue-plausible): A Vue.js plugin and NuxtJS module for Plausible Analytics. Exposes the functionality of [plausible-tracker](https://github.com/plausible/plausible-tracker) to Vue and Nuxt instances, Vue components, and Vuex stores. Built and maintained by [Moritz Sternemann](https://github.com/moritzsternemann).

## VuePress

[VuePress](https://github.com/spekulatius/vuepress-plugin-plausible): A VuePress-plugin allowing you to use Plausible for your documentation website. Built and maintained by [Peter Thaleikis](https://peterthaleikis.com).

## Hybrid native + web app

[Hybrid native + web app](https://github.com/cassidyjames/plausible): Built and maintained by [Cassidy James Blaede](https://cassidyjames.com/).

## NPM package
[NPM package](https://www.npmjs.com/package/plausible-tracker): Frontend library to interact with Plausible. Same features as the official script, but as an NPM module. Works with React. Built and maintained by [Gustavo Maronato](https://github.com/plausible/plausible-tracker).

## Jekyll

[Jekyll](https://github.com/hendrikschneider/jekyll-analytics): Webanalytics for Jekyll. Just install the plugin, configure it and you are done. Contribution by [David Schmitt](https://github.com/hendrikschneider/jekyll-analytics/pull/44).

## Gridsome

[Gridsome](https://github.com/svendroid/gridsome-plugin-plausible-analytics): A plugin to add Plausible Analytics to your [Gridsome](https://gridsome.org/) site. Built and maintained by [Sven Adolph](https://svenadolph.net).

## Grav

[Grav](https://github.com/iainsgillis/grav-plugin-plausible): Add Plausible Analytics to your [Grav CMS](https://getgrav.org/) site and configure it from the admin panel. Built and maintained by [Iain Gillis](https://www.iainsgillis.com).

## Neos CMS

[Neos CMS](https://github.com/CarbonPackages/Carbon.Plausible): Add Plausible Analytics to your [Neos](https://www.neos.io/) site. Built and maintained by [Jon Uhlmann](https://github.com/jonnitto).

## Statamic

* [Statamic](https://statamic.com/addons/visuellverstehen/plausible): Let your [Statamic](https://statamic.com) users easily navigate to their shared Plausible link from inside the control panel. Built and maintained by [visuellverstehen](https://visuellverstehen.de).

* [Plausible Wrapper](https://statamic.com/addons/jack-whiting/plausible): A wrapper around the Plausible API that fetches the analytics into your dashboard in a pretty way. Built and maintained by [Jack Whiting](https://jackwhiting.co.uk/).

## Ruby

[Plausible API Ruby Gem](https://github.com/dailytics/plausible_api): This is a simple wrapper to read the Plausible API with Ruby. Built and maintained by [Dailytics](https://dailytics.com/).

## Flatpak

[Plausible Flatpak App](https://flathub.org/apps/details/com.cassidyjames.plausible): Linux app for Plausible. Built and maintained by [Cassidy James Blaede](https://cassidyjames.com/).

## Craft CMS

[Craft CMS plugin](https://plugins.craftcms.com/plausible): Gives you handy dashboard widgets to display analytics data from Plausible. Built and maintained by [Shorn](https://shorn.co.uk/).

## Hexo

[Hego plugin](https://github.com/maaaaarco/hexo-plausible-analytics): A simple Hexo plugin to inject Plausible script into your pages. Built and maintained by [Marco](https://spaghetti.dev/).

## MediaWiki

[MediaWiki Extension](https://github.com/octfx/mediawiki-extension-Plausible): MediaWiki extension to enable Plausible Analytics. Built and maintained by [Octfx](https://github.com/octfx).

## Podcastpage.io

Add Plausible Analytics to your [Podcastpage.io](https://podcastpage.io/) website. Just enable the Plausible Analytic script via the "Integrations" page of your dashboard to add the tracking script to all pages.

## iOS widget for quick overview of your stats

[iOS widget](https://gist.github.com/linuz90/ac969cdfe9bd92af0b306c43caee8d0c) to display the total visitors count for today and the live visitors count with Plausible and Scriptable. Built and maintained by [Fabrizio Rinaldi](https://gist.github.com/linuz90).

## Analytics Plausible Plugin that adds DNT and offline functionality 

You can now use Plausible with [the analytics library](https://github.com/ian/analytics/tree/main/packages/plausible). Combine privacy first analytics with a tiny middleware layer to add features such as DNT (Do Not Track) and offline functionality. Built and maintained by [David Wells](https://github.com/DavidWells).
 
:::note
Plausible by default doesn't take DNT into consideration as we're a privacy first analytics tool and [DNT allows](https://www.eff.org/issues/do-not-track) data analysis techniques that protect the anonymity of the users
:::

## Paste the script into the header section

Alternatively, you can [integrate Plausible into your site manually](plausible-script.md) by pasting the Plausible Analytics tracking script code into the Header (`<head>`) section of your site.

Don't see your favorite tool in this list? We're always working on new guides so please [add a request](https://github.com/plausible/docs/issues/new) or contribute to this list with the guide to your favorite tool. Thanks!
