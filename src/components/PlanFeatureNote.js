import React from 'react';

export default function PlanFeatureNote({ feature, plan, label }) {
  const isBusiness = plan === 'business';
  const planLabel = isBusiness ? 'Business' : 'Enterprise';
  const article = isBusiness ? 'a' : 'an';
  const link = isBusiness ? 'https://plausible.io/#pricing' : 'https://plausible.io/contact';
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
