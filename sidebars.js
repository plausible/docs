module.exports = {
  someSidebar: {
    "Welcome": ['introduction'],
    "Get Started": ['register-account', 'add-website', 'plausible-script', 'verify-integration'],
    "Website Settings": ['website-settings', 'general', 'visibility', 'shared-links', 'goal-conversions', 'google-search-console-integration', 'email-reports', 'custom-domain', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour',
    {
        type: 'category',
        label: 'Top Referrers',
        items: ['top-referrers', 'manual-link-tagging', 'twitter'],
      },
                  'top-pages', 'countries', 'devices',
                 {
        type: 'category',
        label: 'Goal Conversions',
        items: ['pageview-goals', 'custom-event-goals'],
      },
                 ],
    "Contribute": ['contribute'],
  },
};
