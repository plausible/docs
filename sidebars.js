module.exports = {
  someSidebar: {
    "Get Started": [
      'introduction',
      'register-account',
      'add-website',
      'plausible-script',
      'script-extensions',
      'integration-guides',
      'troubleshoot-integration',
      'your-plausible-experience'
    ],
    "Website Settings": [
      'landing-page',
      'website-settings',
      'change-domain-name',
      'general',
      'users-roles',
      'visibility',
      'shared-links',
      'embed-dashboard',
      'email-reports',
      'traffic-spikes',
      'slack-reports',
      'excluding-pages',
      'transfer-ownership',
      'reset-site-data',
      'delete-site-data',
      'excluding'
    ],
    "Stats Dashboard": [
      'guided-tour',
      'compare-stats',
      'filters-segments',
      'manual-link-tagging',
      'google-analytics-import',
      'google-search-console-integration',
      'realtime-dashboard',
      'top-referrers',
      'top-pages',
      'countries',
      'devices',
      'export-stats',
      'metrics-definitions',
      'keyboard-shortcuts',
      'dashboard-faq'
    ],
    "Events, Funnels and Ecommerce": [
      'goal-conversions',
      'funnel-analysis',
      'ecommerce-revenue-tracking',
      'outbound-link-click-tracking',
      'file-downloads-tracking',
      'error-pages-tracking-404',
      'pageview-goals',
      'custom-event-goals',
      {
        type: 'category',
        label: 'Custom properties',
        items: [
          'custom-props/introduction',
          'custom-props/for-pageviews',
          'custom-props/for-custom-events',
          'custom-props/props-dashboard',
        ]
      },
      {
        type: 'category',
        label: 'Custom events CMS guides',
        items: [
          'webflow-integration',
          'shopify-integration',
          'carrd-integration'
        ],
      }
    ],
    "API": [
      'stats-api',
      'events-api',
      'sites-api'
    ],
    "Adblockers": [
      'proxy/introduction',
      {
        type: 'category',
        label: 'Guides',
        items: [
          'proxy/guides/cloudflare',
          'proxy/guides/wordpress',
          'proxy/guides/akamai',
          'proxy/guides/netlify',
          'proxy/guides/vercel',
          'proxy/guides/nextjs',
          'proxy/guides/cloudfront',
          'proxy/guides/nginx',
          'proxy/guides/caddy',
          'proxy/guides/apache'
        ],
      }
    ],
    "Account Settings": [
      'change-email',
      'reset-password',
      'dashboard-appearance',
      'delete-account'
    ],
    "Billing and Subscription": [
      'trial-to-paid',
      'subscription-plans',
      'change-plan',
      'cancel-subscription',
      'download-invoices',
      'billing'
    ],
    "Self-Hosting": [
      'self-hosting',
      'self-hosting-configuration'
    ],
    "Contribute": [
      'contribute',
      'plausible-analytics-reviews',
      'authors'
    ],
  },
};
