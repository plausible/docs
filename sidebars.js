module.exports = {
  someSidebar: {
    "Welcome": ['introduction'],
    "Get Started": ['register-account', 'add-website', 'plausible-script',  'spa-support', 'verify-integration'],
    "Website Settings": ['website-settings', 'general', 'visibility', 'shared-links', 'goal-conversions', 'google-search-console-integration', 'email-reports', 'custom-domain', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour',
    {
        type: 'category',
        label: 'Top Referrers',
        items: ['top-referrers', 'manual-link-tagging', 'twitter'],
      },
                  'top-pages', 'countries', 'devices'],
    "Goal Conversions": ['pageview-goals', 'custom-event-goals'],
    "Account Settings": ['trial-to-paid', 'change-email', 'reset-password', 'change-plan', 'cancel-subscription', 'delete-account'],
    "Contribute": ['contribute'],
  },
};
