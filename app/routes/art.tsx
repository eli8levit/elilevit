import { Nav } from "~/components";
import React from "react";

type Card = {
  background: string;
  title: string;
  description: string;
};

export const ArtCard = ({ background, title, description }: Card) => {
  return (
    <a
      href="/bike/dd/#rides"
      className={`flex rounded-md ${background} group w-full bg-cover bg-center shadow-lg shadow-xl shadow-indigo-200`}
    >
      <div className="mx-auto mt-auto mb-2 w-[85%] max-w-[600px] flex-col rounded-md p-4 text-white shadow-md backdrop-blur-md backdrop-brightness-50 group-hover:shadow-bike">
        <h3 className="mb-1 flex flex-row flex-wrap items-center gap-x-2 rounded-lg font-ignazio text-xl group-hover:text-pink-200">
          {title}{" "}
        </h3>
        <p className="font-roboto text-xs font-normal text-pink-100 2xl:text-lg">
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
        <h1 className="mb-6 font-satisfy text-8xl text-indigo-800">Art</h1>
        <div className="mb-8 h-[500px] rounded-lg bg-art bg-cover p-8 shadow-2xl shadow-indigo-400"></div>
        <div className="content-container mb-48">
          <h2 className="mx-auto mb-36 mt-20 max-w-[800px] text-center font-apfel text-5xl text-indigo-800 2xl:text-6xl">
            Here you can see my art like photos, illustrations along with my
            projects
          </h2>
          <div className="mx-auto grid grid-cols-5 items-center justify-center gap-8 p-12">
            <div className="col-start-1 col-end-4 row-start-1 row-end-3 flex h-full">
              <ArtCard
                background="bg-oldSite"
                title="My old site"
                description="This is my previous web site, that I worked for 2 years on. It doesn't seem so, cause it's very minimalistic but trust me, I spent a lot of time building it."
              />
            </div>
            <div className="col-start-4 col-end-6 row-start-1 row-end-2 flex h-[300px]">
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
