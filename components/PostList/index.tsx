import { renderTitle } from "@9gustin/react-notion-render";
import Title from "@9gustin/react-notion-render/dist/types/Title";
import Link from "next/link";
import React from "react";
import { dateToString } from "../../utils/dateToString";

import styles from "./styles.module.scss";

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
        <li key={post.id}>
          <Link href={`/${post.id}`}>
            <a className={styles.post}>
              <h3 className={styles.title}>
                <Link href={`/${post.id}`}>
                  {renderTitle(post.properties.Name)}
                </Link>
              </h3>

              <p className={styles.subtitle}>
                {dateToString(post.last_edited_time)}
              </p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
