import React, { useState, useEffect } from 'react';

export default function CtaBox({ headline, link, linkText, secondaryLink, secondaryText, platform }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(document.cookie.includes('logged_in=true'));
  }, []);

  if (loggedIn) return null;

  return (
    <div className="cta-box">
      <p>{headline}</p>
      <div className="cta-box-actions">
        <a href={link} className="cta-box-primary" style={{color: '#ffffff'}} data-cta-position="Inline" data-cta-platform={platform}>
          {linkText}
        </a>
        {secondaryLink && (
          <a href={secondaryLink} className="cta-box-secondary" style={{color: 'var(--ifm-color-primary)'}} data-cta-position="Inline" data-cta-platform={platform}>
            {secondaryText}
          </a>
        )}
      </div>
    </div>
  );
}
