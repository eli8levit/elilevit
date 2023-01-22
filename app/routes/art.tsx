import React from "react";
import Waves from "~/sources/images/art.png";

type Card = {
  background: string;
  title: string;
  description: string;
  cardClass?: string;
};

const ArtCard = ({ background, title, description, cardClass }: Card) => {
  return (
    <a
      href="/bike/dd/#rides"
      className="group flex w-full flex-col rounded-lg transition-all md:hover:shadow-art"
    >
      <div className="mb-5 flex-col font-ignazio transition-all md:group-hover:px-4 md:group-hover:pt-4">
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
    </a>
  );
};

export default function Art() {
  return (
    <div className="content-container grid items-center gap-20 pt-12 md:gap-36">
      <img
        src={Waves}
        className="h-[300px] w-full rounded-xl object-cover md:h-full"
      />
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
    </div>
  );
}
