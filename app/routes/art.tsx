import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion, useWillChange } from "framer-motion";
import { AnimatedText, draw } from "~/components";
import defaultTheme from "tailwindcss/defaultTheme";
import { draw2 } from "~/components/utils";
import { useLoaderData } from "@remix-run/react";
export { loader } from "../use-mobile-loader";

type Card = {
  background: string;
  title: string;
  description: string;
  cardClass?: string;
  href?: string;
};

const ArtCard = ({ background, title, description, cardClass, href }: Card) => {
  const willChange = useWillChange();
  const { isMobile } = useLoaderData();

  return (
    <motion.a
      layout
      whileHover={
        !isMobile
          ? {
              padding: "28px",
              boxShadow: defaultTheme.boxShadow["2xl"],
            }
          : {}
      }
      transition={{ type: "ease-in", duration: 0.2 }}
      href={href}
      className="flex w-full flex-col rounded-xl"
      style={{ willChange }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-5 flex-col">
        <h3 className="mb-1 font-apfel text-lg font-bold text-secondary md:text-xl lg:text-4xl">
          {title}
        </h3>
        <p className="max-w-[650px] font-mona text-base font-normal text-black lg:text-lg">
          {description}
        </p>
      </div>
      <div
        className={`flex rounded-xl ${background} h-full bg-cover bg-center bg-no-repeat shadow-2xl ${cardClass}`}
      />
    </motion.a>
  );
};

export default function Art() {
  return (
    <FaidInMotionContainer className="content-container grid items-center pt-0">
      <motion.svg
        viewBox="0 0 3341 1557"
        className="mb-12"
        fill="none"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          variants={draw}
          d="M282 809.5s357.5 306 452 278C881.27 1043.86 412.459 432 546 432c160.5 0 640.2 745 706 608.5 80.07-166.1-167.88-589.793 52-448.5 131.5 84.5 376.5 495.5 565 495.5 278.55 0-407.65-810.34-42.5-622.5 329.5 169.5 498.9 996.61 744 622.5 180.81-275.99-534.66-781.639-297-762.5 565 45.5 871.5 780 932.5 563.5 58.15-206.375-183.5-640 0-762.5"
          stroke="#DB2877"
          strokeWidth="230"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          variants={draw2}
          d="M126 1063s357.5 306 452 278c147.27-43.64-227.541-433-94-433 160.5 0 546.2 522.5 612 386 80.07-166.1-339-546-99-442.5 99 42.694 527.5 489.5 716 489.5 278.55 0-467.05-536.5-188.5-536.5 489.5 0 644.9 910.61 890 536.5 180.81-275.99-593.91-762.5-297-762.5 461.5 0 725.5 786 786.5 569.5 58.15-206.375 99-569.5 282.5-692"
          stroke="#00F"
          strokeWidth="200"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      <h1 className="heading mb-4">
        <AnimatedText className="text-7xl md:text-8xl 2xl:text-9xl">
          Work & Art
        </AnimatedText>
      </h1>
      <h2 className="mb-[15vh] max-w-[1000px] font-apfel text-2xl font-normal text-black md:text-5xl">
        Here you can see my art like photos, illustrations along with my
        projects
      </h2>
      <div className="mx-auto grid grid-rows-[600px_auto_400px_auto_400px_auto_400px] gap-12 md:mb-20 md:grid-cols-5 md:grid-rows-[500px_500px_400px] md:gap-14">
        <div className="flex md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3">
          <ArtCard
            background="bg-haIsh"
            href="https://ha-ish.com"
            title="Ha Ish Project"
            description="Here you can see very very young project about Israel. I love my country and want to share things that bother me. Wish it could help make this place better."
          />
        </div>
        <div className="mx-6 h-[1px] bg-zinc-300 md:hidden" />
        <div className="flex md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2">
          <ArtCard
            background="bg-wallpaper"
            title="Wallpapers"
            description="I love design and art. I don't have much of experience, but it's very fun so I play around with it in Affinity Designer and sometimes it looks not bad...So here are some stuff you can use as a wallpapers. (soon gallery will be available)"
          />
        </div>
        <div className="mx-6 h-[1px] bg-zinc-300 md:hidden" />
        <div className="flex md:col-start-4 md:col-end-6">
          <ArtCard
            background="bg-oldSite"
            href="https://youthful-raman-3c9318.netlify.app/en/"
            title="My old site"
            description="This is my previous web site, that I worked for 2 years on. I know that it doesn't seem so...it's unmaintained but I learned a lot about design and understood how to beat my perfectionism."
          />
        </div>
        <div className="mx-6 h-[1px] bg-zinc-300 md:hidden" />
        <div className="flex md:col-span-full md:h-[500px]">
          <ArtCard
            href="https://my.spline.design/project-cca4dc6de45717fed5ca979536aa6a41/"
            background="bg-player"
            title="Turntable 3d Model"
            description="I'm in love with music and have turntable at home. When I heard about Spline I wanted to challenge myself to try it and build something beautiful. It was not fast but I think I succeed, it doesn't look bad."
            cardClass="bg-[length:300px] md:bg-[length:400px] bg-white"
          />
        </div>
      </div>
    </FaidInMotionContainer>
  );
}
