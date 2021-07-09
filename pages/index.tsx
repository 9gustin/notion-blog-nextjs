import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { StyledText } from '@9gustin/react-notion-render';
import styles from "./index.module.css";
import { dateToString } from "../utils/dateToString";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
      <h2 className={styles.heading}>All Posts</h2>
      <ol className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <h3 className={styles.postTitle}>
              <Link href={`/${post.id}`}>
                <a>
                  {post.properties.Name.title.map((props, index) => (<StyledText key={index} {...props} />))}
                </a>
              </Link>
            </h3>

            <p className={styles.postDescription}>{dateToString(post.last_edited_time)}</p>
            <Link href={`/${post.id}`}>
              <a> Read post →</a>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
