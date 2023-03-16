import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion } from "framer-motion";
import { AnimatedText, draw } from "~/components";
import { ModalContent } from "~/components/modal-content";
import { Link, useLoaderData } from "@remix-run/react";
import { getBikePosts } from "~/models/posts";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";
import { genImageUrl, getMobileDetect } from "~/utilities";
import config from "tailwind.config";

type Card = {
  image: string;
  title: string;
  description: string;
  cardClass?: string;
  tag?: string | null;
  id: number;
  isMobile: boolean;
  date: string;
  index: number;
};

const BikeCard = ({
  index,
  image,
  title,
  description,
  id,
  isMobile,
  date,
}: Card) => {
  const { blackTransparentLighter } = config.theme.extend.colors;

  return (
    <motion.li
      layoutId={id.toString()}
      className={`group flex h-[320px] w-[260px] flex-col flex-col rounded-[25px] bg-[rgba(18,18,18,0.85)] p-4 text-pinkLighter shadow-md backdrop-blur-md hover:text-white hover:shadow-xl active:backdrop-blur-sm md:h-[360px] md:w-[310px] md:p-8 md:hover:backdrop-blur-xl 2xl:h-[400px] 2xl:w-[350px]`}
      whileHover={
        !isMobile
          ? {
              backgroundColor: blackTransparentLighter,
              scale: 1.03,
            }
          : {}
      }
      whileTap={{ scale: 0.95 }}
      transition={{
        scale: { type: "spring", stiffness: 80, damping: 10 },
        backgroundColor: { type: "easeInOut" },
      }}
    >
      <motion.img
        src={image}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 15 },
        }}
        className="mb-4 h-[130px] w-full shrink-0 rounded-xl object-cover shadow-xl transition-opacity md:h-[130px] md:group-hover:opacity-50 2xl:h-[180px]"
      />
      <h3 className="font-monaWide text-lg font-bold transition-all md:text-xl md:group-hover:text-black 2xl:text-2xl">
        {title}
      </h3>
      <p className="font-mona text-base font-normal text-gray-400 transition-all md:text-lg md:group-hover:text-black">
        {description}
      </p>
      <div className="mt-auto flex flex-row items-center justify-between text-gray-400 transition-all md:group-hover:text-black">
        <span className="w-max font-monaWide text-sm font-medium">{date}</span>
        <span className="ml-auto w-max font-monaWide text-sm font-bold">
          # {index}
        </span>
      </div>
    </motion.li>
  );
};

export const loader: LoaderFunction = async (
  params: any
): Promise<{ posts: Post[]; isMobile: boolean }> => {
  const userAgent = params.request.headers.get("user-agent");
  const detect = getMobileDetect(userAgent);

  return {
    posts: (await getBikePosts({ isDetailed: false })) || [],
    isMobile: detect.isMobile(),
  };
};

export default function Bike() {
  const { posts = [], isMobile } = useLoaderData<{
    posts: Post[];
    isMobile: boolean;
  }>();

  const bikePosts = posts.filter((post) => post.tag === "rides");
  const upgradePosts = posts.filter((post) => post.tag === "upgrades");

  return (
    <FaidInMotionContainer className="overflow-hidden">
      <div className="content-container mb-12 md:mb-20 2xl:mb-28">
        <h1 className="heading shrink-0">
          <AnimatedText>Bike Blog</AnimatedText>
        </h1>
        <h2 className="subheading">
          This page is about my bike and stuff related to cycling: my rides,
          photos and{" "}
          <span className="font-monaWide font-semibold leading-8 text-[#0000FF]">
            upgrading evolution
          </span>
        </h2>
      </div>
      <div className="content-container relative mr-0 bg-gradient-to-r from-[rgba(0,0,255,0.2)] to-transparent py-12 pr-0 md:rounded-xl md:py-16 2xl:ml-[10vw]">
        <motion.svg
          viewBox="0 0 3394 2200"
          fill="none"
          className="absolute top-[50%] h-[400px] max-h-[700px] -translate-y-[50%]  md:h-[80vh] 2xl:left-[50%] 2xl:-translate-x-[50%]"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M163.5 1179S22 127.72 545.5 146.5c687.83 24.675 474.5 1867 474.5 1867s75.95-1867 841-1867c848.5 0 848.5 1867 848.5 1867S2773 825.5 3247 401"
            stroke="#00F"
            strokeWidth="290"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
          />
        </motion.svg>
        <section className="relative flex flex-col">
          <h2
            className="h-max w-max origin-left
             rounded-lg bg-[rgba(255,255,255,0.6)] p-2 font-apfel text-2xl font-bold text-black backdrop-blur-md md:text-4xl"
            id="rides"
          >
            # ride history
          </h2>
          <ModalContent route="bike" />
          <ul className="flex flex-row gap-4 overflow-x-auto p-6 md:gap-8 md:p-10">
            {bikePosts.map((post: Post, index) => {
              return (
                <Link key={post.id} to={`/bike/${post.id}`} preventScrollReset>
                  <BikeCard
                    isMobile={isMobile}
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
            })}
          </ul>
        </section>
        {upgradePosts.length ? (
          <section className="relative flex flex-col">
            <h2
              className="h-max w-max origin-left
             rounded-lg bg-[rgba(255,255,255,0.6)] p-2 font-apfel text-2xl font-bold text-black backdrop-blur-md md:text-4xl"
              id="upgrades"
            >
              # upgrades
            </h2>

            <ul className="flex flex-row gap-4 overflow-x-auto p-6 md:gap-8 md:p-10">
              {upgradePosts.map((post: Post, index) => {
                return (
                  <Link
                    key={post.id}
                    to={`/bike/${post.id}`}
                    preventScrollReset
                  >
                    <BikeCard
                      isMobile={isMobile}
                      image={
                        post?.image?.includes("ucarecdn.com")
                          ? genImageUrl(post.image, "600x600")
                          : post.image || ""
                      }
                      description={post.subtitle || ""}
                      title={post.title}
                      id={post.id}
                      date={post.createdAt}
                      index={index + 1}
                    />
                  </Link>
                );
              })}
            </ul>
          </section>
        ) : null}
      </div>
    </FaidInMotionContainer>
  );
}
