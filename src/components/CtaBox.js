import React from 'react';

export default function CtaBox({ headline, link, linkText, secondaryLink, secondaryText }) {
  const track = (button) => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('Inline CTA Click', { props: { page: window.location.pathname, button } });
    }
  };

  return (
    <div className="cta-box">
      <p>{headline}</p>
      <div className="cta-box-actions">
        <a href={link} className="cta-box-primary" style={{color: '#ffffff'}} onClick={() => track(linkText)}>
          {linkText}
        </a>
        {secondaryLink && (
          <a href={secondaryLink} className="cta-box-secondary" style={{color: 'var(--ifm-color-primary)'}} onClick={() => track(secondaryText)}>
            {secondaryText}
          </a>
        )}
      </div>
    </div>
  );
}
