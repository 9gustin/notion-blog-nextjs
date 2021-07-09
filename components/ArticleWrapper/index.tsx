import React from "react";
import Link from "next/link";
import Head from "next/head";
import ReactDOMServer from 'react-dom/server'

import user from "../../config/user";

import styles from "./styles.module.css";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

function ArticleWrapper({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>
          {ReactDOMServer.renderToString(title)}
          {user.pageTitle}
        </title>
      </Head>

      <article>
        <h1>{title}</h1>
        <section>
          {children}
          <Link href="/">
            <a className={styles["go-back"]}>← Ir al inicio</a>
          </Link>
        </section>
      </article>
    </>
  );
}

export default ArticleWrapper;
