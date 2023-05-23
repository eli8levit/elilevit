import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion } from "framer-motion";
import { ModalContent } from "~/components/modal-content";
import { Link, useLoaderData } from "@remix-run/react";
import { getBikePosts } from "~/models/posts";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";
import { genImageUrl } from "~/utilities";
import Circle2 from "~/sources/images/grad.svg";

type Card = {
  image: string;
  title: string;
  description: string;
  cardClass?: string;
  tag?: string | null;
  id: number;
  date: string;
  index: number;
};

const POST_TYPES = [
  { id: "rides", title: "ride history" },
  { id: "upgrades", title: "upgrades" },
];

const BikeCard = ({ index, image, title, description, id, date }: Card) => {
  return (
    <motion.li
      layoutId={id.toString()}
      className={`group flex h-[380px] w-[72vw] min-w-[200px] max-w-[400px] flex-col overflow-hidden rounded-xl bg-lightGray text-black shadow-bikeCard backdrop-blur-2xl active:backdrop-blur-sm md:h-[440px] md:w-[340px] 2xl:h-[480px] 2xl:w-[400px]`}
      whileTap={{ scale: 0.98 }}
      transition={{
        scale: { type: "spring", stiffness: 200, damping: 10 },
        backgroundColor: { type: "easeInOut" },
      }}
    >
      <motion.img
        alt="Probably photo of my bike"
        src={image}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 15 },
        }}
        className="h-[230px] w-full shrink-0 object-cover md:h-[260px] md:group-hover:grayscale 2xl:h-[260px]"
      />
      <div className="flex h-full flex-col p-6">
        <h3 className="mb-1 font-monaWide text-lg font-extrabold transition-all md:text-xl md:group-hover:text-black 2xl:text-2xl">
          {title}
        </h3>
        <p className="font-mona text-sm font-normal text-gray-700 transition-all md:text-base md:group-hover:text-black xl:text-lg">
          {description}
        </p>
        <div className="mt-auto flex flex-row items-center justify-between text-gray-700 transition-all md:group-hover:text-black">
          <span className="w-max font-hubot text-xs md:text-sm 2xl:text-base">
            {date}
          </span>
          <span className="ml-auto w-max font-hubot text-xs md:text-sm 2xl:text-base">
            # {index}
          </span>
        </div>
      </div>
    </motion.li>
  );
};

export const loader: LoaderFunction = async (): Promise<{ posts: Post[] }> => {
  return {
    posts: (await getBikePosts({ isDetailed: false })) || [],
  };
};

export default function Bike() {
  const { posts = [] } = useLoaderData<{
    posts: Post[];
  }>();

  const bikePosts = posts.filter((post) => post.tag === "rides");
  const upgradePosts = posts.filter((post) => post.tag === "upgrades");

  return (
    <FaidInMotionContainer>
      <div className="content-container pt-10">
        <div className="pb-4 md:p-20 md:pb-10">
          <h1 className="heading">Bike Blog</h1>
          <h2 className="subheading">
            This page is about my bike and stuff related to cycling: my rides,
            photos and{" "}
            <span className="font-monaWide font-semibold leading-8 text-[#0000FF]">
              upgrading evolution
            </span>
          </h2>
        </div>
      </div>
      <div className="md:content-container relative py-8 md:pt-6">
        <img
          src={Circle2}
          className="absolute left-[50%] top-[50%] -z-[10] h-[800px] w-[600px] max-w-[600px] -translate-y-[50%]  -translate-x-[50%] rotate-90 opacity-40 md:h-[1000px] md:w-full md:max-w-[unset] md:rotate-0"
        />
        <div className="mb-20 flex flex-col gap-y-4 rounded-2xl border-black border-opacity-10 bg-panel md:mb-40 md:gap-y-12 md:border-[0.5px] md:p-16 md:shadow-feed md:backdrop-blur-2xl">
          {POST_TYPES.map((type) => {
            return (
              <section className="flex flex-col">
                <h2 className="sticky left-0 ml-4 font-shantell text-2xl font-medium text-black opacity-80 md:opacity-60 lg:text-3xl">
                  # {type.title}
                </h2>
                <ul className="hide-scrollbar flex flex-row gap-4 overflow-auto p-6 pl-4 md:gap-8">
                  {(type.id === "rides" ? bikePosts : upgradePosts).map(
                    (post: Post, index) => {
                      return (
                        <Link
                          key={post.id}
                          to={`/bike/${post.id}`}
                          preventScrollReset
                        >
                          <BikeCard
                            image={genImageUrl(post.image, "600x600")}
                            description={post.subtitle || ""}
                            title={post.title}
                            id={post.id}
                            tag={post.tag}
                            date={post.createdAt}
                            index={index + 1}
                          />
                        </Link>
                      );
                    }
                  )}
                  <div className="h-12 min-w-[50px]" />
                </ul>
              </section>
            );
          })}
        </div>
        <ModalContent route="bike" />
      </div>
    </FaidInMotionContainer>
  );
}
