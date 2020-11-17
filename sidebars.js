module.exports = {
  someSidebar: {
    "Welcome": ['introduction'],
    "Get Started": ['register-account', 'add-website',
                    {
        type: 'category',
        label: 'How to add the script to your website',
        items: ['plausible-script', 'community-integrations', 'wordpress-integration', 'webflow-integration', 'squarespace-integration', 'wix-integration', 'docusaurus-integration', 'spa-support', 'hash-based-routing'],
      },
                ],
    "Website Settings": ['website-settings', 'general', 'visibility', 'shared-links', 'goal-conversions', 'google-search-console-integration', 'email-reports', 'custom-domain', 'export-stats', 'reset-site-data', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour',
    {
        type: 'category',
        label: 'Top Sources',
        items: ['top-referrers', 'manual-link-tagging', 'twitter'],
      },
                  'top-pages', 'countries', 'devices', 'metrics-definitions'],
    "Goal Conversions": ['pageview-goals', 'custom-event-goals', 'outbound-link-click-tracking'],
    "Account Settings": ['trial-to-paid', 'change-email', 'reset-password', 'change-plan', 'cancel-subscription', 'delete-account'],
    "Self-Hosting": ['self-hosting', 'self-hosting-configuration'],
    "Contribute": ['contribute', 'plausible-analytics-reviews', 'authors'],
  },
};
