---
title: How to add the script to your Hugo site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are several simple ways to integrate Plausible Analytics with your Hugo documentation site. Let's take a look at them:

## Option 1 - recommanded setup: Plausible Analytics community plugin

* "**[A Hugo plugin for Plausible Analytics](https://github.com/divinerites/plausible-hugo)**". Built and maintained by Divinerites.

You'll find included a [detailed documentation](https://github.com/divinerites/plausible-hugo/blob/master/README.md) for using it.

It works for both :

- Plausible Analytics Cloud version
- Self-Hosted version.

You can use it as :

- a hugo module (recommanded setup)
- a simple theme

And you can choose and manage all the Plausible functions :

- add custom goals
- add outbound link goal
- manage automatically 404 custom goal
- ignore tracking on certain pages
- proxy the script (or use deprecated custom cname)
- manage CSP rules
- embed your dashboard with 1 line of code
- eventually write public URL information in Web page source

Plus you can :

- debug your code
- avoid bloating your statistics while developping/debugging

## Option 2 - basic setup:

- [Add the script to your website](https://plausible.io/docs/plausible-script)
