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
};

const BikeCard = ({ image, title, description, id, tag, isMobile }: Card) => {
  const isRide = tag === "rides";
  const { blackTransparentLighter, pinkTransparentLighter } =
    config.theme.extend.colors;

  return (
    <motion.li
      layoutId={id.toString()}
      className={`flex h-[240px] w-[240px] flex-col rounded-[25px] border-4 md:h-[350px] md:w-[350px] ${
        isRide
          ? "border-[rgba(255,243,244,0.4)]"
          : "border-[rgba(227,227,227,0.4)]"
      } ${isRide ? "bg-pinkTransparent" : "bg-blackTransparent"} ${
        isRide ? "text-pinkText" : "text-grayText"
      } ${
        isRide ? "md:hover:text-white" : "md:hover:text-black"
      } shadow-md backdrop-blur-md hover:shadow-xl active:backdrop-blur-sm md:hover:backdrop-blur-xl`}
      whileHover={
        !isMobile
          ? {
              backgroundColor: isRide
                ? pinkTransparentLighter
                : blackTransparentLighter,
              scale: 1.03,
            }
          : {}
      }
      whileTap={{ scale: 0.9 }}
      transition={{
        scale: { type: "spring", stiffness: 200, damping: 10 },
        backgroundColor: { type: "easeInOut" },
      }}
    >
      <div className="row-flex flex items-center gap-x-4 pr-2">
        <motion.img
          src={image}
          transition={{
            scale: { type: "spring", stiffness: 200, damping: 15 },
          }}
          className={`-mt-4 -ml-4 h-[80px] w-[80px] shrink-0 rounded-[20px] object-cover shadow-xl md:h-[150px] md:w-[150px]`}
        />
        <div className="flex flex-col justify-start">
          <h3 className={`font-monaWide text-xl font-bold md:text-2xl`}>
            {title}
          </h3>
          <motion.svg
            fill="none"
            initial="hidden"
            width="100%"
            viewBox="0 0 866 120"
            animate="visible"
          >
            <motion.path
              d="M43 88s97.456-73.87 296.762-29.313C611.484 119.431 823 43 823 43"
              strokeWidth="24"
              strokeLinecap="round"
              variants={draw}
              strokeLinejoin="round"
              stroke={
                isRide ? "rgba(255,243,244,0.4)" : "rgba(227,227,227,0.4)"
              }
            />
          </motion.svg>
        </div>
      </div>
      <p className="mb-2 p-6 font-mona text-xl font-normal">{description}</p>
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
      <div className="content-container md:mb-32">
        <h1 className="heading mb-4 shrink-0">
          <AnimatedText className="text-7xl md:text-8xl 2xl:text-9xl">
            Bike Blog
          </AnimatedText>
        </h1>
        <h2 className="mb-12 max-w-[900px] font-apfel text-4xl font-normal text-black md:mb-2 md:text-5xl 2xl:max-w-[1000px] 2xl:text-5xl">
          Here is about my bike and stuff related to cycling: my rides, photos
          and{" "}
          <span className="font-monaWide font-semibold leading-8 text-[#0000FF]">
            upgrading evolution
          </span>
        </h2>
      </div>
      <div className="content-container relative pt-0 pr-0">
        <motion.svg
          viewBox="0 0 3394 2200"
          fill="none"
          className="absolute left-[50%] top-[50%] -z-10 h-[400px] max-h-[800px] -translate-y-[50%] -translate-x-[50%] pl-32 md:h-[70vh]"
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
            className="absolute left-2 bottom-4 h-max w-max origin-left -rotate-90 font-apfel text-3xl font-bold text-black md:bottom-0 md:left-0 md:text-6xl"
            id="rides"
          >
            # ride history
          </h2>
          <ModalContent route="bike" />
          <ul className="ml-2 flex flex-row gap-4 overflow-x-auto p-8 md:ml-8 md:gap-8 md:p-12">
            {bikePosts.map((post: Post) => {
              return (
                <Link key={post.id} to={`/bike/${post.id}`} preventScrollReset>
                  <BikeCard
                    isMobile={isMobile}
                    image={genImageUrl(post.image, "600x600")}
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
            # upgrades
          </h2>
          <ul className="ml-2 flex flex-row gap-4 overflow-x-auto p-8 md:ml-8 md:gap-8 md:p-12">
            {upgradePosts.map((post: Post) => {
              return (
                <Link key={post.id} to={`/bike/${post.id}`} preventScrollReset>
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
