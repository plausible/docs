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

      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Plausible Analytics',
        src: 'img/plausible_logo_darkmode.svg',
        href: 'https://plausible.io',
        width: 176,
      },
      copyright: 'Made and hosted in the EU 🇪🇺 · Funded entirely by our subscribers.',
      links: [
        {
          title: 'Why Plausible?',
          items: [
            { label: 'Simple metrics', href: 'https://plausible.io/simple-web-analytics' },
            { label: 'Lightweight script', href: 'https://plausible.io/lightweight-web-analytics' },
            { label: 'Privacy focused', href: 'https://plausible.io/privacy-focused-web-analytics' },
            { label: 'Open source', href: 'https://plausible.io/open-source-website-analytics' },
            { label: 'Visitor segmentation', href: 'https://plausible.io/audience-segmentation' },
            { label: 'Ecommerce tracking', href: 'https://plausible.io/for-ecommerce-saas' },
            { label: 'Publishers', href: 'https://plausible.io/for-bloggers-creators' },
            { label: 'Agencies', href: 'https://plausible.io/for-freelancers-agencies' },
            { label: 'White label', href: 'https://plausible.io/white-label-web-analytics' },
            { label: 'Enterprise', href: 'https://plausible.io/enterprise-web-analytics' },
          ],
        },
        {
          title: 'Explore',
          items: [
            { label: 'vs Google Analytics', href: 'https://plausible.io/vs-google-analytics' },
            { label: 'Migrate from GA4', href: 'https://plausible.io/migrate-from-google-analytics' },
            { label: 'vs Matomo', href: 'https://plausible.io/vs-matomo' },
            { label: 'vs Cloudflare', href: 'https://plausible.io/vs-cloudflare-web-analytics' },
            { label: 'GA4 accuracy comparison', href: 'https://plausible.io/most-accurate-web-analytics' },
            { label: 'Why pay for analytics?', href: 'https://plausible.io/paid-analytics-vs-free-ga' },
            { label: 'WordPress plugin', href: 'https://plausible.io/wordpress-analytics-plugin' },
            { label: 'Google Tag Manager', href: 'https://plausible.io/gtm-template' },
            { label: 'Looker Studio', href: 'https://plausible.io/looker-studio-connector' },
            { label: 'NPM package', href: 'https://www.npmjs.com/package/@plausible-analytics/tracker' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Documentation', href: 'https://plausible.io/docs' },
            { label: 'Blog', href: 'https://plausible.io/blog' },
            { label: 'Tools', href: 'https://plausible.io/tools' },
            { label: "What's new", href: 'https://plausible.io/changelog' },
            { label: 'Status', href: 'https://plausible.io/status' },
            { label: 'GitHub', href: 'https://github.com/plausible/analytics' },
            { label: 'Twitter', href: 'https://twitter.com/plausiblehq' },
            { label: 'Bluesky', href: 'https://bsky.app/profile/plausible.io' },
            { label: 'Mastodon', href: 'https://fosstodon.org/@plausible' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/plausible-analytics/' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', href: 'https://plausible.io/about' },
            { label: 'Pricing', href: 'https://plausible.io/#pricing' },
            { label: 'Contact', href: 'https://plausible.io/contact' },
            { label: 'Privacy policy', href: 'https://plausible.io/privacy' },
            { label: 'Data policy', href: 'https://plausible.io/data-policy' },
            { label: 'Terms', href: 'https://plausible.io/terms' },
            { label: 'DPA', href: 'https://plausible.io/dpa' },
            { label: 'Security', href: 'https://plausible.io/security' },
            { label: 'Imprint', href: 'https://plausible.io/imprint' },
          ],
        },
      ],
    },
    image: 'img/plausible-analytics.png',
    metadata: [
      {name: 'twitter:site', content: '@PlausibleHQ'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
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
