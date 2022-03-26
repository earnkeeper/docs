import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src='/img/logo.png' width={120}></img>
        <h6 className="hero__subtitle">Welcome to the Earn Keeper Docs. </h6>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/user-guide/welcome">
             📙 Get Started Here
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Docs. ${siteConfig.title}`}
      description="EarnKeeper documentation">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
