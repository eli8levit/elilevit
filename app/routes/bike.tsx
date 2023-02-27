import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion } from "framer-motion";
import { AnimatedText, draw } from "~/components";
import { ModalContent } from "~/components/modal-content";
import { Link, useLoaderData } from "@remix-run/react";
import { getBikePosts } from "~/models/posts";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";
import { genUploadCareUrl } from "~/utilities";

type Card = {
  image: string;
  title: string;
  description: string;
  cardClass?: string;
  id: number;
};

const BikeCard = ({ image, title, description, id }: Card) => {
  return (
    <motion.li
      layoutId={id.toString()}
      className="group flex h-[280px] w-[280px] shrink-0 flex-col rounded-2xl bg-[rgba(192,9,100,0.8)] p-6 shadow-sm backdrop-blur-sm hover:backdrop-blur-xl  md:shadow-lg"
      whileHover={{ backgroundColor: "rgba(192,9,100,0.5)" }}
    >
      <motion.img
        src={image}
        transition={{ scale: { type: "spring", stiffness: 200, damping: 10 } }}
        className={`mb-2 h-[100px] w-[100px] shrink-0 rounded-lg object-cover`}
      />
      <div className="flex h-full flex-col rounded-b-2xl text-white transition-all group-hover:text-black">
        <h3 className="mb-1 font-apfel text-xl font-bold">{title}</h3>
        <p className="mb-2 font-mona text-xl font-semibold">{description}</p>
      </div>
    </motion.li>
  );
};

export const loader: LoaderFunction = async (): Promise<{ posts: Post[] }> => {
  return {
    posts: await getBikePosts({ isDetailed: false }),
  };
};

export default function Bike() {
  const { posts } = useLoaderData();

  return (
    <FaidInMotionContainer className="overflow-hidden">
      <div className="content-container mb-32">
        <h1 className="heading mb-4 shrink-0">
          <AnimatedText className="text-8xl 2xl:text-9xl">
            Bike Blog
          </AnimatedText>
        </h1>
        <h2 className="mb-8 max-w-[800px] border-b-8 border-black pb-6 font-mona text-3xl font-medium font-normal text-black md:text-5xl 2xl:max-w-[1000px] 2xl:text-5xl">
          Here is about my bike and stuff related to cycling: my rides, photos
          and{" "}
          <span className="font-monaWide font-semibold">
            the upgrading evolution
          </span>
        </h2>
      </div>
      <div className="content-container relative py-0 pr-0">
        <motion.svg
          viewBox="0 0 3394 2160"
          fill="none"
          className="absolute left-[50%] top-[50%] -z-10 h-[400px] -translate-y-[50%] -translate-x-[50%] pl-32 md:h-[60vh]"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M163.5 1179S22 127.72 545.5 146.5c687.83 24.675 474.5 1867 474.5 1867s75.95-1867 841-1867c848.5 0 848.5 1867 848.5 1867S2773 825.5 3247 401"
            stroke="#00F"
            strokeWidth="292"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
          />
        </motion.svg>
        <section className="relative flex flex-col">
          <h2
            className="absolute bottom-[20px] left-0 h-max w-max origin-left -rotate-90 font-apfel text-5xl font-bold text-black md:bottom-0 md:text-6xl"
            id="rides"
          >
            Ride History
          </h2>
          <ModalContent route="bike" />
          <ul className="ml-8 mb-10 flex flex-row gap-6 overflow-x-auto pl-2 pt-2 pr-0 md:ml-12 md:mb-0 md:p-8 md:pt-2">
            {posts.map((post: Post) => {
              return (
                <Link key={post.id} to={`/bike/${post.id}`} preventScrollReset>
                  <BikeCard
                    image={
                      post?.image?.includes("ucarecdn.com")
                        ? genUploadCareUrl(post.image, "600x600")
                        : post.image || ""
                    }
                    description={post.subtitle || ""}
                    title={post.title}
                    id={post.id}
                  />
                </Link>
              );
            })}
          </ul>
        </section>
        <section className="relative flex flex-row">
          <h2
            className="absolute bottom-0 left-0 h-max w-max origin-left -rotate-90 font-apfel text-5xl font-bold text-black md:text-6xl"
            id="upgrades"
          >
            Upgrades
          </h2>
          <ul className="ml-8 flex flex-row gap-6 overflow-x-auto pl-2 pt-2 pr-0 md:ml-12 md:mb-0 md:p-8 md:pt-2">
            {posts.map((post: Post) => {
              return (
                <Link key={post.id} to={`/bike/${post.id}`} preventScrollReset>
                  <BikeCard
                    image={
                      post?.image?.includes("ucarecdn.com")
                        ? genUploadCareUrl(post.image, "600x600")
                        : post.image || ""
                    }
                    description={post.subtitle || ""}
                    title={post.title}
                    id={post.id}
                  />
                </Link>
              );
            })}
          </ul>
        </section>
      </div>
    </FaidInMotionContainer>
  );
}
