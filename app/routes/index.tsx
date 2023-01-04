import React from "react";
import End from "~/sources/images/end.png";
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
      <div className="bg-indexBg bg-[length:190%_36%] bg-[left_top_20px] bg-no-repeat md:bg-cover md:bg-center">
        <Nav />
        <div className="content-container">
          <h1 className="mb-28 h-[160px] bg-gradient-to-r from-indigo-800 to-red-500 bg-clip-text text-center font-satisfy text-7xl text-transparent drop-shadow-sm md:mb-24 md:h-[120px] md:text-left md:text-8xl">
            <span>Hey,</span> good to see you!
          </h1>
          <section className="mb-12 grid grid-cols-1 justify-between gap-x-24 gap-y-10  md:mb-24 md:grid-cols-[40%_50%]">
            <div className="flex flex-col items-center justify-center gap-y-14">
              <h2 className="text-center font-apfel text-2xl text-indigo-700 md:text-left md:text-4xl md:leading-snug">
                I'm Eli and this is my vinyl player. I created 3d model in
                Spline app to show how beautiful it is
              </h2>
            </div>
            <img src={Player} />
          </section>
        </div>
      </div>
      <div className="content-container pt-0 md:px-10">
        <section className="mb-10 rounded-lg bg-blueNoise px-5 py-6 shadow-2xl shadow-indigo-400 md:p-16">
          <h3 className="mb-4 border-primaryText font-satisfy text-4xl text-pinkLight md:mb-14 md:text-6xl">
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
      <img src={End} width="250px" className="mx-auto mb-16 md:mb-48" />
    </>
  );
}
