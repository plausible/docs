import React from 'react';

export default function PlanFeatureNote({ feature, plan, label }) {
  const isBusiness = plan === 'business';
  const planLabel = isBusiness ? 'Business' : 'Enterprise';
  const article = isBusiness ? 'a' : 'an';
  const link = isBusiness ? 'https://plausible.io/#pricing' : 'https://plausible.io/contact';
  const linkText = isBusiness ? 'Compare plans →' : 'Contact us →';

  const track = () => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('Plan Feature Click', { props: { feature } });
    }
  };

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
        onClick={track}
      >
        {linkText}
      </a>
    </div>
  );
}
