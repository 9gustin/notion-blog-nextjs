import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import { StyledText } from '@9gustin/react-notion-render';

import user from "../../config/user";

import styles from "./styles.module.css";

interface Props {
  name: any;
  children: React.ReactNode
}

function ArticleWrapper({name, children}: Props) {
  return (
    <>
      <Head>
        <title>
          {name.title[0].plain_text}
          {user.pageTitle}
        </title>
      </Head>

      <article>
        <h1>
          {name.title.map((props, index) => (
            <StyledText key={index} {...props} />
          ))}
        </h1>
        <section>
          {children}
          <Link href="/">
            <a className={styles['go-back']}>← Go home</a>
          </Link>
        </section>
      </article>
    </>
  )
}

export default ArticleWrapper;
