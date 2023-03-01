import { motion } from "framer-motion";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import { draw } from "~/components";
import React from "react";
import type { Post } from "~/types";
import { getPost } from "~/models/posts";
import { genUploadCareUrl } from "~/utilities";
import { FaidInMotionContainer } from "~/components/layout";

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
        src={genUploadCareUrl(post.image)}
        className="-mt-[70px] h-[40%] max-h-[400px] min-h-[200px] w-full rounded-t-2xl object-cover"
      />
      <FaidInMotionContainer className="p-6 md:p-16 md:pt-8">
        <motion.div className="flex flex-col gap-y-6">
          <motion.div className="flex flex-col">
            <motion.span className="font-monaWide text-lg font-semibold text-[#DB2877]">
              #{post.tag}
            </motion.span>
            <motion.span className="font-mona text-lg font-normal text-[#0000ff] md:text-xl">
              {post.createdAt}
            </motion.span>
          </motion.div>
          <motion.h1 className="font-apfel text-6xl font-bold text-[#0000ff]">
            {post.title}
          </motion.h1>
        </motion.div>
        <motion.svg
          fill="none"
          initial="hidden"
          width="250px"
          viewBox="0 0 866 131"
          animate="visible"
          className="mb-12"
        >
          <motion.path
            d="M43 88s97.456-73.87 296.762-29.313C611.484 119.431 823 43 823 43"
            stroke="#0000ff"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
            strokeLinejoin="round"
          />
        </motion.svg>
        <motion.div
          className="text-md content font-mona md:text-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </FaidInMotionContainer>
    </>
  );
}
