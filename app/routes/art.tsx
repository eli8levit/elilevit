import { Nav } from "~/components";
import React from "react";
import Waves from "~/sources/images/art.png";

type Card = {
  background: string;
  title: string;
  description: string;
  containerClass?: string;
  titleClass?: string;
  textClass?: string;
  cardClass?: string;
};

export const ArtCard = ({
  background,
  title,
  description,
  containerClass,
  cardClass,
  titleClass,
  textClass,
}: Card) => {
  return (
    <a
      href="/bike/dd/#rides"
      className={`flex rounded-lg ${background} group h-[300px] w-full bg-cover bg-center bg-center bg-no-repeat shadow-2xl md:h-full md:shadow-xl ${cardClass}`}
    >
      <div
        className={`mx-1 mt-auto mb-2 w-full flex-col rounded-md p-4 text-white shadow-lg backdrop-blur-2xl backdrop-brightness-50 group-hover:shadow-art md:mx-2 ${containerClass}`}
      >
        <h3
          className={`mb-1 flex flex-row flex-wrap items-center gap-x-2 rounded-lg font-ignazio text-lg text-white group-hover:text-indigo-200 md:text-xl ${titleClass}`}
        >
          {title}{" "}
        </h3>
        <p className={`text-sm font-normal text-gray-300 ${textClass}`}>
          {description}
        </p>
      </div>
    </a>
  );
};

export default function Art() {
  return (
    <>
      <Nav />
      <div className="content-container grid items-center gap-36 pt-12">
        <img src={Waves} className="w-full rounded-lg" />

        <div>
          <h1 className="mb-4 text-left font-apfel text-6xl font-bold text-indigo-800 md:mb-0 md:min-h-[80px]">
            Work & Art
          </h1>
          <h2 className="max-w-[500px] text-left font-apfel text-xl text-black md:text-2xl">
            Here you can see my art like photos, illustrations along with my
            projects
          </h2>
        </div>
        <div className="mx-auto grid items-center justify-center gap-8  md:grid-cols-5">
          <div className="flex h-full md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3">
            <ArtCard
              background="bg-haIsh"
              title="Ha Ish Project"
              description="I love design and art, I don't have a lot of experience in it, but it's very fun so I play around with it in Affinity Designer and sometime it looks not bad...So here are some stuff you can use as a wallpapers."
            />
          </div>
          <div className="flex h-[300px] md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2">
            <ArtCard
              background="bg-wallpaper"
              title="Wallpapers"
              description="I love design and art, I don't have a lot of experience in it, but it's very fun so I play around with it in Affinity Designer and sometime it looks not bad...So here are some stuff you can use as a wallpapers."
            />
          </div>
          <div className="flex h-[300px] md:col-start-4 md:col-end-6 md:row-start-2 md:row-end-3">
            <ArtCard
              background="bg-oldSite"
              title="My old site"
              description="This is my previous web site, that I worked for 2 years on. It doesn't seem so, cause it's very minimalistic but trust me, I spent a lot of time building it."
            />
          </div>
          <div className="flex h-[500px] md:col-span-full md:row-start-3 md:row-end-5">
            <ArtCard
              background="bg-player"
              title="Turnable 3d Model"
              description="This is my previous web site, that I worked for 2 years on. It doesn't seem so, cause it's very minimalistic but trust me, I spent a lot of time building it."
              cardClass="bg-contain bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
