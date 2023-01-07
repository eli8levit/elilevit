import React from "react";
import Player from "~/sources/images/player.png";

import { Link, Nav } from "~/components";

type Card = {
  href: string;
  background: string;
  text: string;
};

const IndexCard = ({ href, background, text }: Card) => {
  return (
    <Link
      href={href}
      className={`group flex h-[200px] w-full rounded-md md:h-[350px] ${background} bg-cover bg-center shadow-xl`}
    >
      <span className="font-bolds mt-auto mr-2 mb-2 ml-2 rounded-md rounded-md py-2 px-3 font-ignazio text-base font-light text-white backdrop-blur-md backdrop-brightness-50 transition group-hover:text-indigo-300 group-hover:shadow-indexCard 2xl:text-lg">
        {text}
      </span>
    </Link>
  );
};

export default function Index() {
  return (
    <>
      <div className="bg-indexBg bg-cover bg-top bg-no-repeat">
        <Nav />
        <div className="content-container">
          <h1 className="mb-12 bg-gradient-to-r from-indigo-800 to-pink-700 bg-clip-text px-2 py-14 text-center font-satisfy text-8xl font-normal text-transparent md:mb-24 md:min-h-[150px] md:to-red-500 md:p-0 md:text-left md:text-9xl">
            <span>Hey,</span> good to see you!
          </h1>
          <section className="mx-4 mb-8 flex grid grid-cols-1 items-center justify-between gap-x-4 gap-y-12 rounded-xl border-gray-300 p-2  py-12 shadow-sm backdrop-blur-2xl md:mx-0 md:mb-24 md:grid-cols-[40%_50%] md:border-none md:p-0 md:shadow-none md:backdrop-blur-none">
            <h2 className="px-8 text-center font-roboto text-2xl font-normal text-indigo-800 md:p-0 md:text-left md:text-3xl md:leading-snug ">
              I'm Eli and this is my vinyl player. I created 3d model in Spline
              app to show how beautiful it is
            </h2>
            <img src={Player} />
          </section>
        </div>
      </div>
      <div className="content-container pt-0 md:px-10">
        <section className="mb-10 rounded-lg bg-blueNoise px-5 py-8 shadow-2xl shadow-indigo-400 md:p-16">
          <h3 className="mb-4 border-primaryText font-satisfy text-5xl text-pinkLight md:mb-14 md:text-6xl">
            What to do here
          </h3>
          <ul className="grid items-end gap-6 text-xl md:grid-cols-2">
            <li>
              <IndexCard
                background="bg-river"
                text="Checkout my bike blog"
                href="/bike"
              />
            </li>
            <li>
              <IndexCard
                background="bg-david"
                text="Know me better"
                href="/about"
              />
            </li>
            <li className="col-span-full">
              <IndexCard
                background="bg-wall"
                text="Look at my art & projects"
                href="/bike"
              />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
