import { useRouter } from "next/router";
import { renderBlocks, renderTitle } from "@9gustin/react-notion-render";

import { getDatabase, getPage, getBlocks } from "../lib/notion";
import { PATHS } from "../config/paths";
import ArticleWrapper from "../components/ArticleWrapper";

import { databaseId } from ".";

export default function Post({ page, blocks }) {
  const router = useRouter();

  if (!page || !blocks) {
    router.push(PATHS.home);
  }

  return (
    <ArticleWrapper title={renderTitle(page.properties.Name)}>
      {renderBlocks(blocks)}
    </ArticleWrapper>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
