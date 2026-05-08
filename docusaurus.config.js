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
  plugins: ['@docsearch/docusaurus-adapter'],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
    },
    docsearch: {
      appId: '7M80VX1X5C',
      apiKey: '4efe2db213efafd96489778446fceb76',
      indexName: 'plausible',
      askAi: {
        assistantId: 'b481521d-d374-4dec-b344-12d1ceaf3b6c',
        agentStudio: true,
      },
    },
    navbar: {
      logo: {
        alt: 'Plausible logo',
        src: 'img/plausible_logo.svg',
        srcDark: 'img/plausible_logo_darkmode.svg',
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
    },
    prism: {
      additionalLanguages: ['bash', 'json'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
