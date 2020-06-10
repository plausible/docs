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
              label: 'Give us feedback',
              href: 'https://plausible.io/feedback',
            },
            {
              label: 'On GitHub',
              href: 'https://github.com/plausible/analytics/',
            },
            {
              label: 'On Twitter',
              href: 'https://twitter.com/plausiblehq',
            },
          ],
        },
        {
          title: 'Explore',
          items: [
            {
              label: 'We have a public roadmap',
              to: 'https://plausible.io/roadmap',
            },
            {
              label: 'Check out the live demo',
              href: 'https://plausible.io/plausible.io',
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
            'https://github.com/plausible/docs/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
