module.exports = {
  title: 'Plausible docs',
  url: 'https://plausible.io',
  baseUrl: '/docs/',
  favicon: 'img/favicon.png',
  organizationName: 'plausible',
  projectName: 'docs',
  scripts: [
    {src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'plausible.io'},
    {src: 'https://testing-plausible-io-proxy.uku-taht.workers.dev/js/script.js', defer: true, 'data-domain': 'plausible.io'}
  ],
  themeConfig: {
    colorMode: {disableSwitch: true},
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
      items: [
        {
          href: '/',
          label: 'Docs',
          position: 'left',
          target: '_self',
          activeBasePath: '/docs'
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
              to: 'https://plausible.io/docs',
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
              href: 'https://plausible.io/status',
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
