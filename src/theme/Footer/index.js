import React, { useState, useEffect } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FooterLinks({ links }) {
  const pairs = [
    [links[0], links[1]],
    [links[2], links[3]],
  ];
  return (
    <div className={styles.footerLinkGroups}>
      {pairs.map((pair, i) => (
        <div key={i} className={styles.footerLinkPair}>
          {pair.map((col) => col && (
            <div key={col.title} className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>{col.title}</h4>
              <ul className={styles.footerColList}>
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={styles.footerLink}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(document.cookie.includes('logged_in=true'));
  }, []);

  const { footer } = useThemeConfig();
  const { logo, copyright, links } = footer;
  const logoSrc = useBaseUrl(logo.src);

  return (
    <>
      {!loggedIn && (
        <div className={styles.ctaBanner}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaHeading}>Ready to ditch Google Analytics?</h2>
              <span className={styles.ctaAccent}>Start your free trial today</span>
            </div>
            <div className={styles.ctaButtons}>
              <a
                href="https://plausible.io/register"
                className={styles.ctaPrimary}
                onClick={() => window.plausible && window.plausible('CTA Click', {props: {position: 'Bottom', type: 'Docs', button: 'Start free trial'}})}
              >
                Start free trial
              </a>
              <a
                href="https://plausible.io/plausible.io"
                className={styles.ctaSecondary}
                onClick={() => window.plausible && window.plausible('CTA Click', {props: {position: 'Bottom', type: 'Docs', button: 'View live demo'}})}
              >
                View live demo
              </a>
            </div>
          </div>
        </div>
      )}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <a href={logo.href} className={styles.footerLogoLink}>
              <img src={logoSrc} alt={logo.alt} width={logo.width} className={styles.footerLogo} />
            </a>
            <p className={styles.footerTagline}>
              <a href="https://plausible.io/eu-hosted-web-analytics" className={styles.footerTaglineLink}>Made and hosted in the EU 🇪🇺</a><br />
              Funded entirely by our subscribers.
            </p>
          </div>
          <FooterLinks links={links} />
        </div>
      </footer>
    </>
  );
}
