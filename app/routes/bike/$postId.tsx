import { motion } from "framer-motion";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import { draw } from "~/components";
import React from "react";
import type { Post } from "~/types";
import { getPost } from "~/models/posts";
import { genImageUrl } from "~/utilities";

export const loader: LoaderFunction = async ({
  params,
}): Promise<{ post: Post; html: string }> => {
  const { content, ...post } = await getPost(Number(params.postId));
  const html = marked.parse(content || "");
  return {
    post,
    html,
  };
};

export default function BikePost() {
  const { post, html }: { post: Post; html: string } = useLoaderData();

  return (
    <>
      <motion.img
        src={genImageUrl(post.image)}
        className="-mt-[70px] h-[40%] max-h-[400px] min-h-[200px] w-full rounded-t-2xl object-cover"
        alt="Probably photo of my bike"
      />
      <div className="mx-auto p-6 md:p-12 md:px-12 md:pt-8">
        <motion.div className="flex flex-col gap-y-6">
          <motion.div className="flex flex-col">
            <motion.span className="font-monaWide text-lg font-semibold text-[#DB2877]">
              #{post.tag}
            </motion.span>
            <motion.span className="font-mona text-lg font-normal text-[#DB2877] md:text-xl">
              {post.createdAt}
            </motion.span>
          </motion.div>
          <motion.h1 className="mb-8 whitespace-normal font-monaWide text-4xl md:mb-12 md:w-max md:text-6xl">
            {post.title}
          </motion.h1>
        </motion.div>
        <motion.div
          className="content mx-auto  font-mona"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
}
