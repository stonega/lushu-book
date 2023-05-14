import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./qa.module.css";

function QaPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    setAnswer("");
    setLoading(true);
    const url = "https://lushu-book-bot-production.up.railway.app/ask";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ question: question + ',请使用简体中文回答' }),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const result = await response.json();
      setAnswer(result.answer);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className={styles.content}>
        <div className={styles.inputBar}>
          <input
            className={styles.inputBox}
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button className={styles.askButton} onClick={submit}>
            {loading ? (
              <span className={styles.loader}></span>
            ) : (
              <span>提问题</span>
            )}
          </button>
        </div>
        {answer && <div className={styles.answer}>{answer}</div>}
      </div>
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
