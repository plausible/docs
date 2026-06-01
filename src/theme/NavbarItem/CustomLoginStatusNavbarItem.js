import React, { useState, useEffect } from 'react';

export default function CustomLoginStatusNavbarItem({ mobile }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(document.cookie.includes('logged_in=true'));
  }, []);

  if (mobile) {
    if (loggedIn) {
      return (
        <a href="https://plausible.io/sites" className="navbar__item navbar__link">
          My dashboard
        </a>
      );
    }
    return (
      <>
        <a href="https://plausible.io/register" className="navbar__item navbar__link"
          onClick={() => window.plausible && window.plausible('CTA Click', { props: { position: 'Nav', type: 'Docs', button: 'Start free trial' } })}>
          Start free trial
        </a>
        <a href="https://plausible.io/login" className="navbar__item navbar__link">
          Log in
        </a>
      </>
    );
  }

  const btnStyle = {
    color: '#ffffff',
    padding: '0.5rem 1.25rem',
    fontSize: '0.95rem',
    fontWeight: 500,
    borderRadius: '6px',
  };

  if (loggedIn) {
    return (
      <a
        href="https://plausible.io/sites"
        className="button button--primary"
        style={{ ...btnStyle, order: 999, marginLeft: '1rem' }}
      >
        My dashboard
      </a>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', order: 999, marginLeft: '1rem' }}>
      <a href="https://plausible.io/login" className="navbar__item navbar__link" style={{ fontWeight: 500 }}>
        Log in
      </a>
      <a
        href="https://plausible.io/register"
        className="button button--primary"
        style={btnStyle}
        onClick={() => window.plausible && window.plausible('CTA Click', { props: { position: 'Nav', type: 'Docs', button: 'Start free trial' } })}
      >
        Start free trial
      </a>
    </div>
  );
}
