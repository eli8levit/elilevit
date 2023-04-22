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
      className={`group flex h-[380px] w-[72vw] min-w-[200px] max-w-[400px] flex-col overflow-hidden rounded-xl bg-blackTransparentLighter text-black shadow-bikeCard backdrop-blur-sm active:backdrop-blur-sm md:h-[440px] md:w-[340px] 2xl:h-[480px] 2xl:w-[400px]`}
      whileHover={
        !isMobile
          ? {
              scale: 1.03,
            }
          : {}
      }
      whileTap={{ scale: 0.95 }}
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
      <div className="content-container mb-20 2xl:mb-28">
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
      <div className="content-container radial-center relative max-w-full !p-0">
        <motion.svg
          viewBox="0 0 4707 3462"
          className="absolute top-0 left-0 -z-10 h-full w-full"
          fill="none"
        >
          <motion.g
            filter="url(#a)"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              delay: 2,
              type: "linear",
            }}
          >
            <motion.circle
              cx="1778.41"
              cy="1683.41"
              r="750"
              fill="url(#b)"
              animate={{ translateX: "200px", translateY: "-100px" }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 8,
                delay: 2,
                type: "linear",
              }}
            />
            <motion.circle
              cx="2929"
              cy="1677"
              r="750"
              fill="url(#c)"
              animate={{ translateX: "-300px", translateY: "100px" }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
                delay: 2,
                type: "linear",
              }}
            />
          </motion.g>
          <defs>
            <radialGradient
              id="b"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(.00209 1196.26 -1831.22 .0032 1778.42 1683.41)"
            >
              <stop stopColor="#DB2877" stopOpacity=".4" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <radialGradient
              id="c"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(.00209 1196.26 -1831.22 .0032 2929 1677)"
            >
              <stop stopColor="#00F" stopOpacity=".25" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <filter
              id="a"
              x="-427.604"
              y="-544.604"
              width="5555.21"
              height="4455.21"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="400"
                result="effect1_foregroundBlur_111_4"
              />
            </filter>
          </defs>
        </motion.svg>
        <div className="px-0 pb-12 md:py-20 md:pb-36 2xl:pb-52">
          {POST_TYPES.map((type) => {
            return (
              <section className="hide-scrollbar flex flex-col overflow-auto p-12 px-6 md:p-16 md:px-12 lg:px-28 2xl:px-44">
                <h2
                  className="sticky left-0 mb-2 font-mona text-3xl font-extralight text-black md:mb-6 lg:text-4xl"
                  id="rides"
                >
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
    </FaidInMotionContainer>
  );
}
