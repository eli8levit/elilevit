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
import config from "tailwind.config";

type Card = {
  image: string;
  title: string;
  description: string;
  cardClass?: string;
  tag?: string | null;
  id: number;
};

const BikeCard = ({ image, title, description, id, tag }: Card) => {
  const isRide = tag === "rides";
  const { blackTransparentLighter, pinkTransparentLighter } =
    config.theme.extend.colors;

  return (
    <motion.li
      layoutId={id.toString()}
      className={`flex h-[240px] w-[240px] flex-col rounded-2xl border-mini border-gray-500 md:h-[280px] md:w-[280px]  ${
        isRide ? "bg-pinkTransparent" : "bg-blackTransparent"
      } ${isRide ? "text-pinkText" : "text-grayText"} ${
        isRide ? "hover:text-white" : "hover:text-black"
      } shadow-sm backdrop-blur-md hover:backdrop-blur-xl active:backdrop-blur-sm md:shadow-xl`}
      whileHover={{
        backgroundColor: isRide
          ? pinkTransparentLighter
          : blackTransparentLighter,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "easeInOut" }}
    >
      <div className="row-flex flex items-center gap-x-2 pr-2">
        <motion.img
          src={image}
          transition={{
            scale: { type: "spring", stiffness: 200, damping: 10 },
          }}
          className="-mt-2 -ml-1 h-[80px] w-[80px] shrink-0 rounded-lg object-cover shadow-xl md:h-[120px] md:w-[120px]"
        />
        <h3
          className={`mx-auto border-b-2 font-monaWide ${
            isRide ? "border-pinkText" : "border-grayText"
          } text-xl font-bold md:text-2xl`}
        >
          {title + " Hi from"}
        </h3>
      </div>
      <p className="mb-2 p-6  font-mona text-lg font-normal">{description}</p>
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
      <div className="content-container md:mb-32">
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
      <div className="content-container relative pr-0">
        <motion.svg
          viewBox="0 0 3394 2160"
          fill="none"
          className="absolute left-[50%] top-[50%] -z-10 h-[400px] -translate-y-[50%] -translate-x-[50%] pl-32 md:h-[70vh]"
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
            className="absolute left-2 bottom-4 h-max w-max origin-left -rotate-90 font-apfel text-3xl font-bold text-black md:bottom-0 md:left-0 md:text-6xl"
            id="rides"
          >
            Ride History
          </h2>
          <ModalContent route="bike" />
          <ul className="ml-2 flex flex-row gap-4 overflow-x-auto p-8 md:ml-8 md:gap-6 md:p-12 md:pt-2">
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
                    tag={post.tag}
                  />
                </Link>
              );
            })}
          </ul>
        </section>
        <section className="relative flex flex-row">
          <h2
            className="absolute bottom-4 left-2 h-max w-max origin-left -rotate-90 font-apfel text-3xl font-bold text-black md:bottom-0 md:left-0 md:text-6xl"
            id="upgrades"
          >
            Upgrades
          </h2>
          <ul className="ml-2 flex flex-row gap-4 overflow-x-auto p-8 md:ml-8 md:gap-6 md:p-12">
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
