import React from 'react';
import Image from 'next/image'
import { Render, withContentValidation } from "@9gustin/react-notion-render";
import prism from "../assets/prism";

import { getDatabase, getPage, getBlocks } from "../lib/notion";
import ArticleWrapper from "../components/ArticleWrapper";

import { databaseId } from ".";

const myMapper = {
  image: withContentValidation(({ media }) => <Image src={media.src} width="300" height="300" />),
}

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }

  React.useEffect(() => {
    prism.highlightAll();
  }, [])

  return (
    <ArticleWrapper title={<Render blocks={[page.properties.Name]} />}>
      <Render
        blocks={blocks}
        blockComponentsMapper={myMapper as any}
        useStyles
        classNames
      />
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
