const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  title: 'Plausible docs',
  url: 'https://plausible.io',
  baseUrl: '/docs/',
  favicon: 'img/favicon.png',
  organizationName: 'plausible',
  trailingSlash: false,
  projectName: 'docs',
  scripts: [
    {src: '/docs/js/tracking.js', defer: true}
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    algolia: {
      appId: '7M80VX1X5C',
      apiKey: '00c4f9109050cbf666dd95a6e6ca373a',
      indexName: 'plausible',
    },
    navbar: {
      logo: {
        alt: 'Plausible logo',
        src: 'img/plausible_logo.svg',
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
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/plausible-analytics/',
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
  plugins: [
    function enableMonacoEditorPlugin() {
      return {
        name: 'enableMonacoEditorPlugin',
        configureWebpack() {
          return {
            // https://stackoverflow.com/questions/69265357/monaco-editor-worker
            plugins: [new MonacoWebpackPlugin()],
          };
        },
      };
    },
  ],
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
