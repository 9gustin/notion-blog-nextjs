import PostList from "../components/PostList";
import { getDatabase } from "../lib/notion";
import styles from "./index.module.css";
export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
      <h2 className={styles.heading}>Publicaciones</h2>
      <PostList posts={posts}/>
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
