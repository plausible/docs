module.exports = {
  someSidebar: {
    "Get Started": ['introduction', 'register-account', 'add-website', 'plausible-script', 'configure-script', 'integration-guides', 'troubleshoot-integration', 'your-plausible-experience'],
    "Website Settings": ['website-settings', 'general', 'visibility', 'shared-links', 'embed-dashboard', 'google-search-console-integration', 'email-reports', 'traffic-spikes', 'slack-reports', 'excluding-pages', 'export-stats', 'reset-site-data', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour',
    {
        type: 'category',
        label: 'Top Sources',
        items: ['top-referrers', 'manual-link-tagging', 'twitter'],
      },
                  'top-pages', 'countries', 'devices', 'metrics-definitions', 'keyboard-shortcuts'],
    "Goal Conversions": ['goal-conversions', 'pageview-goals', 'custom-event-goals', 'outbound-link-click-tracking', '404-error-pages-tracking'],
    "Proxy": ['proxy/introduction', 'proxy/guides/cloudflare', 'proxy/guides/netlify', 'proxy/guides/nextjs', 'proxy/guides/cloudfront'],
    "API": ['stats-api', 'sites-api'],
    "Account Settings": ['change-email', 'reset-password', 'dashboard-appearance', 'delete-account'],
    "Manage Subscription": ['trial-to-paid', 'subscription-plans', 'change-plan', 'cancel-subscription'],
    "Self-Hosting": ['self-hosting', 'self-hosting-configuration'],
    "Contribute": ['contribute', 'plausible-analytics-reviews', 'authors'],
  },
};
