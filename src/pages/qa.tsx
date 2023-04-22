import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./qa.module.css";

function QaPage() {
  const [question, setQuestion] = useState("");
  function submit() {}
  return (
    <>
      <div className={styles.inputBar}>
        <input
          className={styles.inputBox}
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <button className={styles.askButton} onClick={submit}>问问看</button>
      </div>
      <div></div>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <QaPage />
    </Layout>
  );
}
