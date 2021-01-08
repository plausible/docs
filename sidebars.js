module.exports = {
  someSidebar: {
    "Welcome": ['introduction'],
    "Get Started": ['register-account', 'add-website', 'plausible-script', 'your-plausible-experience',
                    {
        type: 'category',
        label: 'Integration guides',
        items: ['integration-guides', 'wordpress-integration', 'ghost-integration', 'webflow-integration', 'squarespace-integration', 'wix-integration', 'discourse-integration', 'docusaurus-integration', 'carrd-integration', 'spa-support', 'hash-based-routing', 'community-integrations'],
      },
                ],
    "Website Settings": ['website-settings', 'general', 'visibility', 'shared-links', 'goal-conversions', 'google-search-console-integration', 'email-reports', 'traffic-spikes', 'slack-reports', 'custom-domain', 'export-stats', 'reset-site-data', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour',
    {
        type: 'category',
        label: 'Top Sources',
        items: ['top-referrers', 'manual-link-tagging', 'twitter'],
      },
                  'top-pages', 'countries', 'devices', 'metrics-definitions'],
    "Goal Conversions": ['pageview-goals', 'custom-event-goals', 'outbound-link-click-tracking', `404-error-pages-tracking`],
    "Account Settings": ['trial-to-paid', 'change-email', 'reset-password', 'change-plan', 'subscription-plans', 'dashboard-appearance', 'cancel-subscription', 'delete-account'],
    "Self-Hosting": ['self-hosting', 'self-hosting-configuration'],
    "Contribute": ['contribute', 'plausible-analytics-reviews', 'authors'],
  },
};
