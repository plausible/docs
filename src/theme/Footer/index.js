import React from 'react';
import OriginalFooter from '@theme-original/Footer';
import styles from './styles.module.css';

export default function Footer(props) {
  return (
    <>
      <div className={styles.ctaBanner}>
        <p className={styles.ctaText}>
          Haven't tried Plausible yet?{' '}
          <a href="https://plausible.io/register" onClick={() => window.plausible && window.plausible('CTA Click', {props: {position: 'Bottom', type: 'Docs', button: 'Start free trial'}})} className={styles.ctaLink}>Start a free trial</a>
          {' '}or{' '}
          <a href="https://plausible.io/plausible.io" onClick={() => window.plausible && window.plausible('CTA Click', {props: {position: 'Bottom', type: 'Docs', button: 'View live demo'}})} className={styles.ctaLink}>view the live demo</a>.
        </p>
      </div>
      <OriginalFooter {...props} />
    </>
  );
}
