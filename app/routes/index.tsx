import React from "react";
import End from "~/sources/images/end.png";
import Player from "~/sources/images/player.png";

import { Link, Nav } from "~/components";

export default function Index() {
  return (
    <>
      <div className="bg-indexBg bg-cover bg-center bg-no-repeat">
        <Nav />
        <div className="content-container">
          <h1 className="mb-24 h-[120px] bg-gradient-to-r from-indigo-800 to-red-600 bg-clip-text font-satisfy text-8xl text-transparent drop-shadow-sm ">
            <span>Hey,</span> good to see you!
          </h1>
          <section className="mb-24 grid grid-cols-[40%_50%] justify-between gap-x-24">
            <div className="flex flex-col items-center justify-center gap-y-14">
              <h2 className="font-apfel text-4xl leading-snug text-indigo-700">
                I'm Eli and this is my vinyl player. I created 3d model in
                Spline app to show how beautiful it is
              </h2>
            </div>
            <img src={Player} />
          </section>
        </div>
      </div>
      <div className="content-container px-10 pt-0">
        <section className="mb-48 rounded-lg bg-blueNoise p-16 shadow-2xl shadow-indigo-400">
          <h3 className="mb-14 border-primaryText font-satisfy text-6xl text-pinkLight">
            What to do here
          </h3>
          <ul className="grid grid-cols-2 items-end gap-10 text-xl">
            <li>
              <Link
                href="/bike"
                className="group flex h-[350px] w-full rounded-sm bg-river bg-cover bg-center shadow-xl"
              >
                <span className="mt-auto mr-2 mb-2 ml-2 rounded-md bg-primaryText p-1 font-ignazio text-base text-white transition group-hover:bg-casualBlue group-hover:text-blueLight 2xl:text-lg">
                  Checkout my bike blog
                </span>
              </Link>
            </li>
            <li>
              `
              <Link
                href="/about"
                className="group flex h-[350px] w-full rounded-sm bg-david bg-cover bg-center shadow-xl"
              >
                <span className="mt-auto mr-2 mb-2 ml-2 rounded-md bg-labelBg bg-cover bg-bottom bg-top bg-no-repeat p-1 font-ignazio text-base text-white transition group-hover:bg-casualBlue group-hover:text-blueLight 2xl:text-lg">
                  Know me better
                </span>
              </Link>
            </li>
            <li className="col-span-full">
              <Link
                href="/bike"
                className="group flex h-[350px] rounded-sm bg-wall bg-cover bg-center shadow-xl"
              >
                <span className="mt-auto mr-2 mb-2 ml-2 rounded-md bg-primaryText p-1 font-ignazio text-base text-white transition group-hover:bg-casualBlue group-hover:text-blueLight 2xl:text-lg">
                  Look at my art & projects
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <img src={End} width="250px" className="mx-auto mb-48" />
    </>
  );
}
