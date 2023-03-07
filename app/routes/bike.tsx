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
      className={`flex h-[240px] w-[240px] flex-col rounded-[25px] bg-[rgba(18,18,18,0.8)] text-pinkLighter shadow-md backdrop-blur-md hover:text-white hover:shadow-xl active:backdrop-blur-sm md:h-[320px] md:w-[320px] md:hover:backdrop-blur-xl 2xl:h-[350px] 2xl:w-[350px]`}
      whileHover={
        !isMobile
          ? {
              backgroundColor: blackTransparentLighter,
              scale: 1.03,
            }
          : {}
      }
      whileTap={{ scale: 0.9 }}
      transition={{
        scale: { type: "spring", stiffness: 100, damping: 10 },
        backgroundColor: { type: "easeInOut" },
      }}
    >
      <div className="row-flex flex gap-x-4 pr-2">
        <motion.img
          src={image}
          transition={{
            scale: { type: "spring", stiffness: 200, damping: 15 },
          }}
          className="-mt-4 -ml-4 h-[80px] w-[80px] shrink-0 rounded-[20px] object-cover shadow-xl md:h-[130px] md:w-[130px] 2xl:h-[150px] 2xl:w-[150px]"
        />
        <div className="flex flex-col justify-start">
          <h3 className="pt-4 font-monaWide text-lg font-medium md:text-xl md:text-xl 2xl:text-2xl">
            {title}
          </h3>
          <motion.svg
            fill="none"
            initial="hidden"
            width="95%"
            viewBox="0 0 866 120"
            animate="visible"
          >
            <motion.path
              d="M43 88s97.456-73.87 296.762-29.313C611.484 119.431 823 43 823 43"
              strokeWidth="40"
              strokeLinecap="round"
              variants={draw}
              strokeLinejoin="round"
              stroke="rgba(255,243,244,0.4)"
            />
          </motion.svg>
        </div>
      </div>
      <div className="flex h-full flex-col p-6 md:p-8">
        <p className="font-mona text-base font-normal md:text-lg 2xl:text-xl">
          {description}
        </p>
        <div className="mt-auto flex flex-row items-center justify-between">
          <span className="w-max rounded-lg bg-[rgba(255,243,244,0.1)] p-2 font-monaWide text-sm font-medium">
            {date}
          </span>
          <span className="ml-auto w-max rounded-lg bg-[rgba(255,243,244,0.1)] p-2 font-monaWide text-sm font-bold">
            # {index}
          </span>
        </div>
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
    posts: await getBikePosts({ isDetailed: false }),
    isMobile: detect.isMobile(),
  };
};

export default function Bike() {
  const { posts, isMobile } = useLoaderData<{
    posts: Post[];
    isMobile: boolean;
  }>();

  const bikePosts = posts.filter((post) => post.tag === "rides");
  const upgradePosts = posts.filter((post) => post.tag === "upgrades");

  return (
    <FaidInMotionContainer className="overflow-hidden">
      <div className="content-container mb-24 2xl:mb-[250px]">
        <h1 className="heading shrink-0">
          <AnimatedText>Bike Blog</AnimatedText>
        </h1>
        <h2 className="subheading">
          Here is about my bike and stuff related to cycling: my rides, photos
          and{" "}
          <span className="font-monaWide font-semibold leading-8 text-[#0000FF]">
            upgrading evolution
          </span>
        </h2>
      </div>
      <div className="content-container relative mr-0 bg-gradient-to-r from-[rgba(192,10,100,0.2)] to-[rgba(255,255,255,0.2)] py-12 pr-0 md:rounded-xl md:py-24 2xl:ml-[10vw]">
        <motion.svg
          viewBox="0 0 3394 2200"
          fill="none"
          className="absolute top-[50%] left-[60px] -z-10 h-[400px] max-h-[700px] -translate-y-[50%] md:left-[200px] md:h-[80vh] 2xl:left-[50%] 2xl:-translate-x-[50%]"
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
            className="absolute left-2 bottom-4 h-max w-max origin-left -rotate-90 font-apfel text-3xl font-bold text-black md:left-0 md:text-5xl"
            id="rides"
          >
            # ride history
          </h2>
          <ModalContent route="bike" />
          <ul className="ml-2 flex flex-row gap-4 overflow-x-auto p-8 md:ml-8 md:gap-8 md:p-12">
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
          <section className="relative flex flex-row">
            <h2
              className="absolute bottom-4 left-2 h-max w-max origin-left -rotate-90 font-apfel text-3xl font-bold text-black md:left-0 md:text-5xl"
              id="upgrades"
            >
              # upgrades
            </h2>

            <ul className="ml-2 flex flex-row gap-4 overflow-x-auto p-8 md:ml-8 md:gap-8 md:p-12">
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
