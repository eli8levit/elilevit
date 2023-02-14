import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion } from "framer-motion";
import { AnimatedText, draw } from "~/components";
import { ModalContent } from "~/components/modal-content";
import { useMobileDetect } from "~/use-device-detect-hook";
import { Link, useLoaderData } from "@remix-run/react";
import { getBikePosts } from "~/models/posts";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";

type Card = {
  image: string;
  title: string;
  description: string;
  cardClass?: string;
  id?: string;
};

const BikeCard = ({ image, title, description, id }: Card) => {
  const mobileDetect = useMobileDetect();
  const isMobile = mobileDetect.isMobile();

  return (
    <motion.li
      layoutId={id}
      className="group flex w-[250px] shrink-0 flex-col rounded-2xl md:w-[300px]"
    >
      <motion.img
        src="https://ucarecdn.com/6314d60d-c721-4710-b2c7-abe35f32d5de/-/preview/600x600/-/quality/smart_retina/-/format/auto/"
        transition={{ scale: { type: "spring", stiffness: 200, damping: 10 } }}
        whileTap={{ scale: 0.9 }}
        whileHover={
          isMobile
            ? {}
            : {
                scale: 1.03,
                boxShadow: "0 2px 25px 0 rgba(0,0,0,0.6)",
              }
        }
        className={`mb-2 h-[250px] w-full shrink-0 rounded-2xl object-cover md:h-[300px]`}
      />
      <div className="flex h-full flex-col rounded-b-2xl px-1 text-white group-hover:text-pink-600">
        <h3 className="mb-1 flex flex-row flex-wrap items-center gap-x-2 font-ignazio text-2xl font-bold transition-all">
          {title}
        </h3>
        <p className="mb-2 font-apfel text-lg 2xl:text-lg">{description}</p>
      </div>
    </motion.li>
  );
};

const UpgradeCard = ({ title, description, image, cardClass }: Card) => {
  return (
    <li className="flex h-[200px] shrink-0 flex-row items-end gap-x-4 md:h-[300px]">
      <div className="w-[250px] shrink-0 flex-col font-ignazio md:w-[500px]">
        <h3 className="mb-1 text-xl font-bold text-indigo-400 md:text-2xl">
          {title}
        </h3>
        <p className="font-apfel text-base font-light text-gray-400 shadow-inner lg:text-lg">
          {description}
        </p>
      </div>
      <div
        className={`flex w-[200px] rounded-2xl md:w-[300px] ${image} h-full bg-cover bg-center bg-no-repeat shadow-2xl ${cardClass}`}
      />
    </li>
  );
};

export const loader: LoaderFunction = async (): Promise<{ posts: Post[] }> => {
  return {
    posts: await getBikePosts({ isDetailed: false }),
  };
};

export default function Bike() {
  const { posts } = useLoaderData();
  console.log("posts", posts[0]);

  return (
    <FaidInMotionContainer className="overflow-hidden">
      <div className="content-container relative">
        <h1 className="heading mb-4">
          <AnimatedText>Bike Blog</AnimatedText>
        </h1>
        <h2 className="mb-12 max-w-[600px] font-apfel text-xl text-black md:text-2xl">
          Here is about my bike and stuff related to cycling: my rides, photos
          and, most interesting,{" "}
          <strong className="highlight">the upgrading evolution</strong>
        </h2>
        <div className="relative">
          <motion.svg
            viewBox="0 0 3394 2160"
            fill="none"
            className="absolute -z-10"
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
          <img
            src="https://ucarecdn.com/7488269d-1ed6-493d-941f-c7d49acc05b6/-/preview/-/quality/smart_retina/-/format/png/"
            alt="Illustrated blue bicycle on blue and green brush lines background"
            className="mx-auto h-[250px] object-contain md:h-[650px]"
          />
        </div>
      </div>
      <div className="content-container px-0 pt-0 md:px-5">
        <section className="flex flex-col bg-gradient-to-b from-secondaryBg2 to-secondaryBg py-4 shadow-2xl md:rounded-t-2xl">
          <h2
            className="p-4 pb-0 font-apfel text-4xl font-bold text-white md:p-8 md:pb-0"
            id="rides"
          >
            Rides
          </h2>
          <ModalContent route="bike" />
          <ul className="flex flex-row gap-6 overflow-x-auto p-4 md:p-8">
            <Link to="/bike/first" preventScrollReset>
              <BikeCard
                image="bg-firstRide"
                description="Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431"
                title="#1"
                id="first"
              />
            </Link>
            <BikeCard
              id="second"
              image="bg-secondRide"
              description="National path in Ben Shemen Forest"
              title="#2"
            />
          </ul>
        </section>
        <section className="flex flex-col bg-secondaryBg py-16 shadow-2xl md:rounded-b-2xl md:px-8">
          <h2
            className="p-4 font-apfel text-4xl font-bold text-white md:p-8 md:pb-0"
            id="upgrades"
          >
            Upgrades
          </h2>
          <ul className="flex flex-row gap-6 overflow-x-auto p-4 md:p-8">
            <UpgradeCard
              image="bg-wheels"
              title="DT Swiss CR1600"
              description="Firstly I decided to tune my wheels. More precisely I broke my front wheel in some small accident and was forced to buy replacement. I thought why not to use opportunity to upgrade them. That's how I bought DT Swiss."
            />
          </ul>
        </section>
      </div>
    </FaidInMotionContainer>
  );
}
