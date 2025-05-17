import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import announcementStyles from './FixedAnnouncement.module.css'; // Import the new CSS module

// Fixed Announcement Component
function FixedAnnouncement() {
  return (
    <div className={announcementStyles.announcement}>
      🎉 <span className={announcementStyles.title}>
          kubectl-ai guide is out now! Check it out 
        </span>{' '}
          <a
            href="/kubernetes/docs/ai/kubectl-ai"
            rel="noopener noreferrer"
            className={announcementStyles.link}
          >
        here
      </a>🥳
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Start Kubernetes Hands-On - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Master Kubernetes with hands-on tutorials, blogs, and tools."
    >
      <FixedAnnouncement /> {/* Add the fixed announcement here */}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
