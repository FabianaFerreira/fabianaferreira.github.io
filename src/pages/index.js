import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p>
          I'm an Electronic and Computer Engineer graduated from the Federal
          University of Rio de Janeiro (UFRJ), RJ, Brazil. Currently working on
          VTEX as a Software Engineer. Has previous experience with Computer
          Vision and Data Visualization. I am a person eager to learn new
          things, especially those related to Software Engineering and Data
          Science. Besides that, I love to study different languages, their
          literature and get to know more about linguistics facts.
        </p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

const Section = ({ img, title, link }) => (
  <div className={styles.section}>
    <img className={styles.sectionImg} src={`../static/home/${img}.png`} />
    <Link className={clsx("button button--primary", styles.buttons)} to={link}>
      {title}
    </Link>
  </div>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Software Engineer from Rio de Janeiro, Brazil"
    >
      <div className={styles.homeContainer}>
        <HomepageHeader />
        <div className={styles.sections}>
          <Section
            img={"ginger-cat-759"}
            title="Resume"
            link="https://www.linkedin.com/in/fabiana-ferreira-fonseca/"
          />
          <Section img={"ginger-cat-750"} title="Articles" link="/docs/intro" />
          <Section
            img={"ginger-cat-cat-is-reading"}
            title="Journal"
            link="/blog"
          />
        </div>
      </div>
    </Layout>
  );
}
