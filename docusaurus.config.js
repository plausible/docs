module.exports = {
  title: 'Plausible docs',
  url: 'https://competent-benz-12aade.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'plausible',
  projectName: 'docs',
  scripts: [{src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'docs.plausible.io'}],
  themeConfig: {
    disableDarkMode: true,
        algolia: {
      apiKey: '6c8274af5bc972f5ca4fad48f08eb4d9',
      indexName: 'plausible',
    },
    navbar: {
      title: 'Plausible Analytics',
      logo: {
        alt: 'Plausible logo',
        src: 'img/logo.svg',
        href: 'https://plausible.io/',
        target: '_self',
      },
      links: [
        {
          href: '/',
          label: 'Docs',
          position: 'left',
          target: '_self',
          activeBasePath: '/'
        },
        {
          href: 'https://github.com/plausible/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Study',
          items: [
            {
              label: 'About Plausible',
              to: 'https://plausible.io/about',
            },
            {
              label: 'Read our blog',
              to: 'https://plausible.io/blog',
            },
            {
              label: 'Study the documentation',
              to: 'https://docs.plausible.io/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/plausible/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/plausiblehq',
            },
             {
              label: 'Mastodon',
              href: 'https://fosstodon.org/@plausible',
            },
            {
              label: 'Forum',
              href: 'https://plausible.io/forum',
            },
          ],
        },
        {
          title: 'Explore',
          items: [
            {
              label: 'Give us feedback',
              href: 'https://plausible.io/feedback',
            },
            {
              label: 'We have a public roadmap',
              to: 'https://plausible.io/roadmap',
            },
            {
              label: 'Check out the live demo',
              href: 'https://plausible.io/plausible.io',
            },
            {
              label: 'Status',
              href: 'https://plausible.instatus.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Plausible Analytics. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/plausible/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
