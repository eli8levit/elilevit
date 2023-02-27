import { motion } from "framer-motion";
import { draw } from "~/components";
import React from "react";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";
import { getPost } from "~/models/posts";
import { useLoaderData } from "@remix-run/react";
import { genUploadCareUrl } from "~/utilities";
import { FaidInMotionContainer } from "~/components/layout";

export const loader: LoaderFunction = async ({
  params,
}): Promise<{ post: Post }> => {
  return {
    post: await getPost(Number(params.postId)),
  };
};

export default function BikePost() {
  const { post }: { post: Post } = useLoaderData();

  return (
    <>
      <motion.img
        src={genUploadCareUrl(post.image)}
        height="20%"
        className="-mt-[70px] h-[50%] w-full rounded-t-2xl object-cover"
      />
      <FaidInMotionContainer className="p-6 md:p-16">
        <motion.div className="flex flex-col-reverse items-center justify-between gap-y-4 md:flex-row">
          <motion.h1 className="font-monaWide text-6xl font-bold text-[#0000ff]">
            {post.title}
          </motion.h1>
          <motion.div className="flex flex-col">
            <motion.span className="font-apfel text-xs font-semibold text-[#DB2877] md:text-lg">
              #{post.tag}
            </motion.span>
            <motion.span className="font-mona text-sm font-bold text-[#0000ff] md:text-3xl">
              {post.createdAt}
            </motion.span>
          </motion.div>
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
        <motion.p className="text-md font-mona md:text-lg">
          {post.content}
        </motion.p>
      </FaidInMotionContainer>
    </>
  );
}
