module.exports = {
  title: 'Plausible docs',
  url: 'https://competent-benz-12aade.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'plausible',
  projectName: 'docs',
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Plausible analytics',
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
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Set this value to '/'.
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
