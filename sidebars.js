module.exports = {
  someSidebar: {
    "Welcome": ['introduction'],
    "Get Started": ['register-account', 'add-website', 'plausible-script', 'your-plausible-experience', 'integration-guides'],
    "Website Settings": ['website-settings', 'general', 'visibility', 'shared-links', 'goal-conversions', 'google-search-console-integration', 'email-reports', 'traffic-spikes', 'slack-reports', 'custom-domain', 'excluding-pages', 'export-stats', 'reset-site-data', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour',
    {
        type: 'category',
        label: 'Top Sources',
        items: ['top-referrers', 'manual-link-tagging', 'twitter'],
      },
                  'top-pages', 'countries', 'devices', 'metrics-definitions', 'keyboard-shortcuts'],
    "Goal Conversions": ['pageview-goals', 'custom-event-goals', 'outbound-link-click-tracking', '404-error-pages-tracking'],
    "Account Settings": ['change-email', 'reset-password', 'dashboard-appearance', 'delete-account'],
    "Manage Subscription": ['trial-to-paid', 'subscription-plans', 'change-plan', 'cancel-subscription'],
    "Self-Hosting": ['self-hosting', 'self-hosting-configuration'],
    "Contribute": ['contribute', 'plausible-analytics-reviews', 'authors'],
  },
};
