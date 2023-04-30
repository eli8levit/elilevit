import { motion } from "framer-motion";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
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
      <div className="mx-auto max-w-[1000px] p-6 md:p-20">
        <motion.div className="flex flex-col">
          <motion.span className="font-mona text-xl font-light text-black">
            {post.createdAt}
          </motion.span>
          <motion.h1 className="mb-8 whitespace-normal pb-0 font-apfel text-5xl font-bold md:mb-12">
            {post.title}
            <motion.span className="ml-2 inline-block font-mona text-lg font-light text-primary">
              #{post.tag}
            </motion.span>
          </motion.h1>
        </motion.div>
        <motion.div
          className="content mx-auto font-mona"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
}
