import React, { useState, useEffect } from 'react';

export default function CtaBox({ headline, link, linkText, secondaryLink, secondaryText }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(document.cookie.includes('logged_in=true'));
  }, []);

  const canonicalButton = (href) => {
    if (href && href.includes('/register')) return 'Start free trial';
    if (href && href.includes('/plausible.io')) return 'View live demo';
    return null;
  };

  const track = (href) => {
    const button = canonicalButton(href);
    if (button && typeof window !== 'undefined' && window.plausible) {
      window.plausible('CTA Click', { props: { position: 'Inline', type: 'Docs', button } });
    }
  };

  if (loggedIn) return null;

  return (
    <div className="cta-box">
      <p>{headline}</p>
      <div className="cta-box-actions">
        <a href={link} className="cta-box-primary" style={{color: '#ffffff'}} onClick={() => track(link)}>
          {linkText}
        </a>
        {secondaryLink && (
          <a href={secondaryLink} className="cta-box-secondary" style={{color: 'var(--ifm-color-primary)'}} onClick={() => track(secondaryLink)}>
            {secondaryText}
          </a>
        )}
      </div>
    </div>
  );
}
