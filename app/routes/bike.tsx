import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion } from "framer-motion";
import { AnimatedText } from "~/components";
import { ModalContent } from "~/components/modal-content";
import { Link, useLoaderData } from "@remix-run/react";
import { getBikePosts } from "~/models/posts";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";
import { genImageUrl, getMobileDetect } from "~/utilities";
import Circle from "~/sources/images/grad2.svg";

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

const POST_TYPES = [
  { id: "rides", title: "ride history" },
  { id: "upgrades", title: "upgrades" },
];

const BikeCard = ({
  index,
  image,
  title,
  description,
  id,
  isMobile,
  date,
}: Card) => {
  return (
    <motion.li
      layoutId={id.toString()}
      className={`group flex h-[380px] w-[72vw] min-w-[200px] max-w-[400px] flex-col overflow-hidden rounded-xl bg-blackTransparentLighter text-black shadow-bikeCardSm backdrop-blur-sm active:backdrop-blur-sm md:h-[440px] md:w-[340px] md:shadow-bikeCard 2xl:h-[480px] 2xl:w-[400px]`}
      whileHover={
        !isMobile
          ? {
              scale: 1.03,
            }
          : {}
      }
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
          <span className="w-max font-mona text-xs md:text-sm 2xl:text-base">
            {date}
          </span>
          <span className="ml-auto w-max font-mona text-xs md:text-sm 2xl:text-base">
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
      <div className="content-container pt-10">
        <div className="pb-4 md:p-20 md:pb-10">
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
      </div>
      <div className="content-container relative pt-6">
        <img
          src={Circle}
          className="absolute left-[50%] top-[50%] -z-[10] h-[1200px] -translate-x-[50%] -translate-y-[50%] opacity-80"
        />
        <div className="mb-20 rounded-2xl border-[0.5px] border-black border-opacity-10 bg-[rgba(0,0,255,0.02)] !p-0 backdrop-blur-2xl md:mb-40">
          <div>
            {POST_TYPES.map((type) => {
              return (
                <section className="hide-scrollbar flex flex-col overflow-auto p-8 md:p-20">
                  <h2 className="sticky left-0 mb-4 font-mona text-3xl font-extralight text-black md:mb-6 lg:text-4xl">
                    # {type.title}
                  </h2>
                  <ul className="flex snap-x snap-mandatory flex-row gap-4 md:gap-8">
                    {(type.id === "rides" ? bikePosts : upgradePosts).map(
                      (post: Post, index) => {
                        return (
                          <Link
                            className="snap-start"
                            key={post.id}
                            to={`/bike/${post.id}`}
                            preventScrollReset
                          >
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
      </div>
    </FaidInMotionContainer>
  );
}
