import React, { useEffect } from "react";
import Head from 'next/head';

import { withRouter } from "next/router";
import Header from "../Header";
import { PATHS } from "../../config/paths";

import styles from "./styles.module.css";
import user from "../../config/user";

function LayoutWrapper({ router, children }) {
  useEffect(() => {
    if (user.theme) document.body.classList.add(`${user.theme}-theme`);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{user.mainTitle}{user.pageTitle}</title>
      </Head>
      <Header
        title={user.title}
        className={styles["adjust-content"]}
        description={router.pathname === PATHS.home ? user.description : undefined}
      />
      <main className={styles["adjust-content"]}>{children}</main>
    </>
  );
}

export default withRouter(LayoutWrapper);
