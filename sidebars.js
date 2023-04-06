module.exports = {
  someSidebar: {
    "Get Started": ['introduction', 'register-account', 'add-website', 'plausible-script', 'script-extensions', 'integration-guides', 'troubleshoot-integration', 'your-plausible-experience'],
    "Website Settings": ['landing-page', 'website-settings', 'change-domain-name', 'general', 'users-roles', 'visibility', 'shared-links', 'embed-dashboard', 'email-reports', 'traffic-spikes', 'slack-reports', 'excluding-pages', 'transfer-ownership', 'reset-site-data', 'delete-site-data', 'excluding'],
    "Stats Dashboard": ['guided-tour', 'realtime-dashboard', 'top-referrers', 'manual-link-tagging', 'google-search-console-integration', 'top-pages', 'countries', 'devices', 'filters-segments', 'google-analytics-import', 'export-stats', 'metrics-definitions', 'keyboard-shortcuts', 'dashboard-faq'],
    "Goals and Custom Events": ['goal-conversions', 'outbound-link-click-tracking', 'file-downloads-tracking', 'error-pages-tracking-404', 'pageview-goals', 'custom-event-goals',
      {
        type: 'category',
        label: 'Custom events CMS guides',
        items: ['webflow-integration', 'shopify-integration', 'carrd-integration'],
      }
    ],
    "API": ['stats-api',  'events-api', 'sites-api'],
    "Adblockers": ['proxy/introduction',
      {
        type: 'category',
        label: 'Guides',
        items: ['proxy/guides/cloudflare', 'proxy/guides/akamai', 'proxy/guides/netlify', 'proxy/guides/vercel', 'proxy/guides/nextjs', 'proxy/guides/cloudfront', 'proxy/guides/nginx', 'proxy/guides/caddy', 'proxy/guides/apache'],
      }
    ],
    "Account Settings": ['change-email', 'reset-password', 'dashboard-appearance', 'delete-account'],
    "Billing and Subscription": ['trial-to-paid', 'subscription-plans', 'change-plan', 'cancel-subscription', 'download-invoices', 'billing'],
    "Self-Hosting": ['self-hosting', 'self-hosting-configuration'],
    "Contribute": ['contribute', 'plausible-analytics-reviews', 'authors'],
  },
};
