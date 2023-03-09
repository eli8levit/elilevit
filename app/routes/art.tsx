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
        <h3 className="relative mb-4 w-max font-apfel text-2xl font-bold text-primary lg:text-4xl">
          {title}
          <motion.svg
            viewBox="0 0 1506 391"
            width="140%"
            className="absolute -left-[15%] -bottom-2 stroke-primary"
            fill="none"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.path
              d="M782.436 86.132S1296.48 5.737 1466.49 197.317C1574.55 319.089 1302.48 375 806.438 375c-496.04 0-931.985-48.859-747.06-164.854C346.403 30.112 1275.48 16 1275.48 16"
              strokeWidth="25"
              strokeLinecap="round"
              variants={draw}
            />
          </motion.svg>
        </h3>
        <p className="mb-2 max-w-[700px] font-mona text-base font-light text-gray-600 md:text-xl 2xl:text-2xl">
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
    <>
      <FaidInMotionContainer className="content-container flex flex-col md:pt-0 2xl:h-[100vh]">
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
        <h1 className="heading">
          <AnimatedText>Work & Art</AnimatedText>
        </h1>
        <h2 className="subheading mb-12 md:mb-[15vh]">
          Here you can see my art like photos, illustrations along with my
          projects
        </h2>
      </FaidInMotionContainer>
      <div className="bg-gradient-to-b from-[rgba(192,10,100,0.1)] to-transparent py-12 md:py-24">
        <div className="content-container mx-auto grid grid-rows-[600px_auto_400px_auto_400px_auto_400px] gap-8 pt-0 md:mb-20 md:grid-cols-5 md:grid-rows-[500px_500px_400px]">
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
              title="Turntable 3d"
              description="I'm in love with music and have turntable at home. When I heard about Spline I wanted to challenge myself to try it and build something beautiful. It was not fast but I think I succeed, it doesn't look bad."
              cardClass="bg-[length:300px] md:bg-[length:400px] bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
