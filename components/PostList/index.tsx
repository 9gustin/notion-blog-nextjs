import { renderTitle } from "@9gustin/react-notion-render";
import Title from "@9gustin/react-notion-render/dist/types/Title";
import Link from "next/link";
import React from "react";
import { dateToString } from "../../utils/dateToString";

import styles from './styles.module.css';

interface Props {
  posts: {
    id: string;
    last_edited_time: string;
    properties: { Name: Title };
  }[];
}

function PostList({ posts }: Props) {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id} className={styles.post}>
          <h3 className={styles.postTitle}>
            <Link href={`/${post.id}`}>
              {renderTitle(post.properties.Name)}
            </Link>
          </h3>

          <p className={styles.postDescription}>
            {dateToString(post.last_edited_time)}
          </p>

          <Link href={`/${post.id}`}>
            <a> Leer →</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
