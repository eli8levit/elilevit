import React from "react";
import Waves from "~/sources/images/art.jpg";
import { FaidInMotionContainer } from "~/components/layout";
import { motion, useWillChange } from "framer-motion";
import { useMobileDetect } from "~/use-device-detect-hook";
import defaultTheme from "tailwindcss/defaultTheme";

type Card = {
  background: string;
  title: string;
  description: string;
  cardClass?: string;
  href?: string;
};

const ArtCard = ({ background, title, description, cardClass, href }: Card) => {
  const willChange = useWillChange();
  const mobileDetect = useMobileDetect();
  const isMobile = mobileDetect.isMobile();

  return (
    <motion.a
      layout
      whileHover={{ padding: isMobile ? 0 : "20px" }}
      transition={{ type: "spring", stiffness: 250, damping: 17 }}
      href={href}
      className="flex w-full flex-col rounded-xl md:hover:shadow-art"
      style={{ willChange }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-5 flex-col font-apfel">
        <h3 className="mb-1 text-lg font-bold text-black md:text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="max-w-[850px] text-base font-normal text-black opacity-50 lg:text-lg">
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
    <FaidInMotionContainer className="content-container grid items-center gap-14 pt-8 md:gap-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          src={Waves}
          alt="Illustrated colored lines in waves form on black background"
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 300px, 480px`}
          className="h-[300px] w-full rounded-2xl object-cover shadow-2xl md:h-[480px]"
        />
      </motion.div>
      <div>
        <h1 className="heading mb-4">Work & Art</h1>
        <h2 className="max-w-[500px] text-left font-apfel text-xl text-black md:text-2xl">
          Here you can see my art like photos, illustrations along with my
          projects
        </h2>
      </div>
      <div className="mx-auto grid grid-rows-[600px_auto_400px_auto_400px_auto_400px] gap-12 md:mb-20 md:grid-cols-5 md:grid-rows-[500px_500px_400px] md:gap-12">
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
            description="I'm in love with music and have turntable at home. When I heard about Spline I wanted to challenge myself to try it and build something beautiful to me. It was not fast but I think I succeed, it doesn't look bad."
            cardClass="bg-[length:300px] md:bg-[length:400px] bg-white"
          />
        </div>
      </div>
    </FaidInMotionContainer>
  );
}
