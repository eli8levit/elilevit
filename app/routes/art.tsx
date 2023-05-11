import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion, useWillChange } from "framer-motion";
import Circle from "~/sources/images/grad.svg";
import { useLoaderData } from "@remix-run/react";
import defaultTheme from "tailwindcss/defaultTheme";

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
              scale: 1.03,
              boxShadow: defaultTheme.boxShadow["2xl"],
              zIndex: 10,
              backgroundColor: "rgba(0,0,255,0.1)",
            }
          : {}
      }
      transition={{ type: "ease-in", duration: 0.2 }}
      href={href}
      className="flex w-full flex-col rounded-xl bg-lightGray p-6 shadow-nav backdrop-blur-2xl 2xl:p-12"
      style={{ willChange }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-5 flex-col">
        <h3 className="relative mb-4 w-max font-apfel text-2xl font-bold text-gray-900 lg:text-3xl">
          {title}
        </h3>
        <p className="mb-2 max-w-[700px] font-hubot text-base font-normal text-gray-600 md:text-lg">
          {description}
        </p>
      </div>
      <div
        className={`flex rounded-lg ${background} h-full bg-cover bg-center bg-no-repeat ${cardClass}`}
      />
    </motion.a>
  );
};

export default function Art() {
  return (
    <>
      <FaidInMotionContainer className="content-container flex flex-col pb-4 md:p-10 md:pt-0">
        <div>
          <h1 className="heading">Work & Art</h1>
          <h2 className="subheading">
            Here you can see my art like photos, illustrations along with my
            projects
          </h2>
        </div>
      </FaidInMotionContainer>
      <div className="relative mb-44 py-12 !pt-0 md:py-24">
        <img
          src={Circle}
          className="absolute left-[50%] top-[10%] -z-[10] h-[1000px] -translate-x-[50%] opacity-80 blur-lg"
        />
        <div className="content-container mx-auto grid grid-rows-[500px_500px_400px] gap-4 pt-6 md:mb-20 md:grid-cols-5">
          <div className="flex md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3">
            <ArtCard
              background="bg-haIsh"
              href="https://ha-ish.com"
              title="Ha Ish Project"
              description="Here you can see very very young project about Israel. I love my country and want to share things that bother me. Wish it could help make this place better."
            />
          </div>
          <div className="flex md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2">
            <ArtCard
              background="bg-wallpaper"
              title="Wallpapers"
              description="I love design and art. I don't have much of experience, but it's very fun so I play around with it in Affinity Designer and sometimes it looks not bad...So here are some stuff you can use as a wallpapers. (soon gallery will be available)"
            />
          </div>
          <div className="flex md:col-start-4 md:col-end-6">
            <ArtCard
              background="bg-oldSite"
              href="https://youthful-raman-3c9318.netlify.app/en/"
              title="My old site"
              description="This is my previous web site, that I worked for 2 years on. I know that it doesn't seem so...it's unmaintained but I learned a lot about design and understood how to beat my perfectionism."
            />
          </div>
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
