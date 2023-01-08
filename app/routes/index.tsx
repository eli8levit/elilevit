import React from "react";
import Player from "~/sources/images/player.png";

import { Link, Nav } from "~/components";
import BikeCanvas from "~/sources/images/bike-canvas.png";

type Card = {
  href: string;
  background: string;
  text: string;
};

const IndexCard = ({ href, background, text }: Card) => {
  return (
    <Link
      href={href}
      className={`group flex h-[200px] w-full rounded-lg md:h-[350px] ${background} bg-cover bg-center shadow-xl`}
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
      <div className="">
        <Nav />
        <div className="content-container py-32 md:min-h-[500px]">
          <h1 className="mb-6 bg-gradient-to-r from-indigo-800 to-indigo-400 bg-clip-text px-2 text-left font-apfel text-6xl text-6xl font-bold text-transparent md:mb-0 md:min-h-[80px] md:p-0">
            <span>Hey,</span> good to see you!
          </h1>
          <h2 className="mb-16 max-w-[500px] px-2 text-left font-apfel text-xl font-normal text-black md:mb-12 md:p-0 md:text-2xl lg:mb-0">
            I'm Eli and this is my vinyl player. I created 3d model in Spline
            app to show how beautiful it is
          </h2>
          <div className="ml-auto h-[150px] bg-indexBg bg-contain bg-center bg-no-repeat md:h-[350px]"></div>
          {/*<section className="mx-4 mb-8 flex grid grid-cols-1 items-center justify-between gap-x-4 gap-y-12 rounded-xl border-gray-300 p-2  py-12 shadow-sm backdrop-blur-2xl md:mx-0 md:mb-24 md:grid-cols-[40%_50%] md:border-none md:p-0 md:shadow-none md:backdrop-blur-none">*/}
          {/*  <h2 className="px-8 text-center font-apfel text-2xl font-normal text-white md:p-0 md:text-left md:text-3xl md:leading-snug ">*/}
          {/*    I'm Eli and this is my vinyl player. I created 3d model in Spline*/}
          {/*    app to show how beautiful it is*/}
          {/*  </h2>*/}
          {/*  /!*<img src={Player} />*!/*/}
          {/*</section>*/}
        </div>
      </div>
      <div className="content-container pt-0 md:px-10">
        <section className="mb-10 rounded-lg bg-[#091223] px-5 py-8 shadow-xl shadow-indigo-300 md:p-16">
          <h3 className="mb-1 border-primaryText font-apfel text-6xl font-bold text-white md:mb-6 md:text-5xl">
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
