import React, { useState, useEffect } from 'react';

export default function PlanFeatureNote({ feature, plan, label }) {
  // Logged-in users go straight to the plan picker in their account instead of the public pricing section.
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(document.cookie.includes('logged_in=true'));
  }, []);

  const isBusiness = plan === 'business';
  const planLabel = isBusiness ? 'Business' : 'Enterprise';
  const article = isBusiness ? 'a' : 'an';
  const pricingLink = loggedIn ? 'https://plausible.io/billing/choose-plan' : 'https://plausible.io/#pricing';
  const link = isBusiness ? pricingLink : 'https://plausible.io/contact';
  const linkText = isBusiness ? 'Compare plans →' : 'Contact us →';

  return (
    <div className="plan-feature-note">
      <span className="plan-feature-badge">{planLabel}</span>
      <span className="plan-feature-text">
        {label} is {article} {planLabel} plan feature.
      </span>
      <a
        href={link}
        className="plan-feature-link"
        style={{ color: 'var(--ifm-color-primary)' }}
        data-cta-position="Inline"
      >
        {linkText}
      </a>
    </div>
  );
}
