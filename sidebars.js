module.exports = {
  someSidebar: {
    "Get Started": ['introduction', 'register-account', 'add-website', 'plausible-script', 'script-extensions', 'integration-guides', 'troubleshoot-integration', 'your-plausible-experience'],
    "Website Settings": ['website-settings', 'general', 'users-roles', 'visibility', 'shared-links', 'embed-dashboard', 'google-analytics-import', 'email-reports', 'traffic-spikes', 'slack-reports', 'excluding-pages', 'transfer-ownership', 'reset-site-data', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour', 'top-referrers', 'manual-link-tagging', 'google-search-console-integration', 'top-pages', 'countries', 'devices', 'filters-segments', 'export-stats', 'metrics-definitions', 'keyboard-shortcuts', 'dashboard-faq'],
    "Goal Conversions": ['goal-conversions', 'pageview-goals', 'custom-event-goals', 'outbound-link-click-tracking', 'error-pages-tracking-404'],
    "Adblockers": ['proxy/introduction',
      {
        type: 'category',
        label: 'Guides',
        items: ['proxy/guides/cloudflare', 'proxy/guides/akamai', 'proxy/guides/netlify', 'proxy/guides/vercel', 'proxy/guides/nextjs', 'proxy/guides/cloudfront', 'proxy/guides/nginx', 'proxy/guides/caddy'],
      }
    ],
    "API": ['stats-api',  'events-api', 'sites-api'],
    "Account Settings": ['change-email', 'reset-password', 'dashboard-appearance', 'delete-account'],
    "Manage Subscription": ['trial-to-paid', 'subscription-plans', 'change-plan', 'cancel-subscription', 'download-invoices', 'billing'],
    "Self-Hosting": ['self-hosting', 'self-hosting-configuration'],
    "Contribute": ['contribute', 'plausible-analytics-reviews', 'authors'],
  },
};
