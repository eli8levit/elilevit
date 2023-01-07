import { Nav } from "~/components";
import React from "react";

type Card = {
  background: string;
  title: string;
  description: string;
  containerClass?: string;
  titleClass?: string;
  textClass?: string;
};

export const ArtCard = ({
  background,
  title,
  description,
  containerClass,
  titleClass,
  textClass,
}: Card) => {
  return (
    <a
      href="/bike/dd/#rides"
      className={`flex rounded-lg ${background} group h-[300px] w-full bg-cover bg-center shadow-lg shadow-indigo-200 md:h-full md:shadow-xl`}
    >
      <div
        className={`mx-2 mt-auto mb-1 w-full flex-col rounded-lg p-3 shadow-xl shadow-[rgba(0,0,0,0.4)] backdrop-blur-lg backdrop-brightness-50 group-hover:shadow-art md:mx-4 md:mb-3 md:p-6 2xl:p-5 ${containerClass}`}
      >
        <h3
          className={`mb-1 flex flex-row flex-wrap items-center gap-x-2 rounded-lg font-ignazio text-lg text-white group-hover:text-indigo-100 md:text-xl ${titleClass}`}
        >
          {title}{" "}
        </h3>
        <p
          className={`font-roboto text-sm font-normal text-gray-300 ${textClass}`}
        >
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
      <div className="content-container">
        <h1 className="mb-6 bg-gradient-to-r px-2 py-8 text-center font-satisfy text-7xl font-normal text-indigo-800 md:mb-24 md:min-h-[150px] md:to-red-500 md:p-0 md:text-left md:text-9xl">
          Art
        </h1>
        <div className="mx-2 mb-8 h-[250px] rounded-lg bg-art bg-cover p-8 shadow-md md:mx-0 md:mb-36 md:h-[500px] md:shadow-lg md:shadow-indigo-400"></div>
        <div className="mb-48">
          <h2 className="mx-auto mb-16 mt-20 max-w-[800px]  p-8 text-center font-apfel text-3xl text-indigo-800 md:mb-36 md:text-5xl 2xl:text-5xl">
            Here you can see my art like photos, illustrations along with my
            projects
          </h2>
          <div className="mx-auto grid items-center justify-center gap-8 px-2 md:grid-cols-5 md:p-12">
            <div className="flex h-full md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3">
              <ArtCard
                background="bg-oldSite"
                title="My old site"
                description="This is my previous web site, that I worked for 2 years on. It doesn't seem so, cause it's very minimalistic but trust me, I spent a lot of time building it."
                containerClass="backdrop-brightness-100 bg-gradient-to-r from-indigo-900 to-indigo-500"
              />
            </div>
            <div className="flex h-[300px] md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2">
              <ArtCard
                background="bg-wallpaper"
                title="Wallpapers"
                description="I love design and art, I don't have a lot of experience in it, but it's very fun so I play around with it in Affinity Designer and sometime it looks not bad...So here are some stuff you can use as a wallpapers."
              />
            </div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
            <div className="min-h-[200px] w-full bg-red-900"></div>
          </div>
        </div>
      </div>
    </>
  );
}
