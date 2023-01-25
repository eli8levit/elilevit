import React, { useRef } from "react";
import Waves from "~/sources/images/art.png";
import { FaidInMotionContainer } from "~/components/layout";
import { motion, useInView, useWillChange } from "framer-motion";

type Card = {
  background: string;
  title: string;
  description: string;
  cardClass?: string;
};

const ArtCard = ({ background, title, description, cardClass }: Card) => {
  const willChange = useWillChange();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        display: "flex",
        width: "100%",
      }}
    >
      <motion.a
        layout
        whileHover={{ padding: "30px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        href="/bike/dd/#rides"
        className="flex w-full flex-col rounded-xl md:hover:shadow-art"
        style={{ willChange }}
      >
        <div className="mb-5 flex-col font-ignazio">
          <h3 className="mb-1 text-lg text-black md:text-xl lg:text-2xl">
            {title}
          </h3>
          <p className="max-w-[850px] font-apfel text-base font-normal text-zinc-500 lg:text-lg">
            {description}
          </p>
        </div>
        <div
          className={`flex rounded-md ${background} h-full bg-cover bg-center bg-no-repeat shadow-2xl ${cardClass}`}
        />
      </motion.a>
    </div>
  );
};

export default function Art() {
  return (
    <FaidInMotionContainer className="content-container grid items-center gap-20 pt-12 md:gap-36">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.03,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          src={Waves}
          height="300px"
          className="h-[300px] w-full rounded-xl object-cover md:h-full"
        />
      </motion.div>
      <div>
        <h1 className="mb-4 text-left font-apfel text-6xl font-bold text-indigo-800 md:mb-0 md:min-h-[80px]">
          Work & Art
        </h1>
        <h2 className="max-w-[500px] text-left font-apfel text-xl text-black md:text-2xl">
          Here you can see my art like photos, illustrations along with my
          projects
        </h2>
      </div>
      <div className="mx-auto grid grid-rows-[400px_auto_400px_auto_400px_auto_400px] gap-12 md:grid-cols-5 md:grid-rows-[400px_400px_400px_400px] md:grid-rows-5 md:gap-8">
        <div className="flex md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3">
          <ArtCard
            background="bg-haIsh"
            title="Ha Ish Project"
            description="I love design and art, I don't have a lot of experience in it, but it's very fun so I play around with it in Affinity Designer and sometime it looks not bad...So here are some stuff you can use as a wallpapers."
          />
        </div>
        <div className="mx-6 h-[1px] bg-zinc-300 md:hidden" />
        <div className="flex md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2">
          <ArtCard
            background="bg-wallpaper"
            title="Wallpapers"
            description="I love design and art, I don't have a lot of experience in it, but it's very fun so I play around with it in Affinity Designer and sometime it looks not bad...So here are some stuff you can use as a wallpapers."
          />
        </div>
        <div className="mx-6 h-[1px] bg-zinc-300 md:hidden" />
        <div className="flex md:col-start-4 md:col-end-6">
          <ArtCard
            background="bg-oldSite"
            title="My old site"
            description="This is my previous web site, that I worked for 2 years on. It doesn't seem so, cause it's very minimalistic but trust me, I spent a lot of time building it."
          />
        </div>
        <div className="mx-6 h-[1px] bg-zinc-300 md:hidden" />
        <div className="flex md:col-span-full md:h-[500px]">
          <ArtCard
            background="bg-player"
            title="Turnable 3d Model"
            description="This is my previous web site, that I worked for 2 years on. It doesn't seem so, cause it's very minimalistic but trust me, I spent a lot of time building it."
            cardClass="bg-contain bg-white"
          />
        </div>
      </div>
    </FaidInMotionContainer>
  );
}
