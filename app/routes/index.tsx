import React from "react";
import Cubes from "~/sources/images/3cubes.png";
import Player from "~/sources/images/player.png";

import { Link } from "~/components";

export default function Index() {
  return (
    <>
      <div className="content-container">
        <h1 className="mb-32 font-butler text-8xl font-bold text-primaryText">
          Hey, good to see you!
        </h1>
        <section className="mb-24 grid grid-cols-2 justify-between gap-x-24">
          <div className="flex flex-col items-center justify-center gap-y-14">
            <h2 className="font-butler text-4xl font-light text-casualBlue">
              👋🏻 I'm Eli and this is my vinyl player. I created 3d model in
              Spline app to show how beautiful it is
            </h2>
            {/*<p className="rounded-sm bg-primaryText px-8 py-6 font-sligoil text-base text-white shadow-sm 2xl:text-lg ">*/}
            {/*  <strong className="mb-1 block font-butler text-xl text-blueLight">*/}
            {/*    Project Essential 3 User Manual:*/}
            {/*  </strong>*/}
            {/*  <ul className="ml-6 list-disc text-sm">*/}
            {/*    <li>You can orbit model with mouse</li>*/}
            {/*    <li>Open cover by clicking on it</li>*/}
            {/*    <li>*/}
            {/*      Start and stop record by clicking on switch button on the side*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</p>*/}
          </div>
          <img src={Player} />
          {/*<iframe*/}
          {/*  src="https://my.spline.design/project-cca4dc6de45717fed5ca979536aa6a41/"*/}
          {/*  width="100%"*/}
          {/*  height="100%"*/}
          {/*></iframe>*/}
        </section>
      </div>
      <section className="mb-48 w-full rounded-sm bg-blueNoise px-40 py-20 shadow-xl">
        <h3 className="mb-14 w-max border-primaryText font-butler text-5xl font-semibold text-pinkLight">
          What to do here
        </h3>
        <ul className="mx-auto grid max-w-[2000px] grid-cols-2 items-end gap-10 text-xl">
          <li>
            <Link
              href="/bike"
              className="group flex h-[300px] rounded-sm bg-river bg-cover bg-center shadow-xl"
            >
              <span className="mt-auto mr-2 mb-2 ml-2 rounded-md bg-primaryText p-1 font-sligoil text-sm text-white transition group-hover:bg-casualBlue group-hover:text-blueLight">
                Checkout my bike blog
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="group flex h-[300px] rounded-sm bg-david bg-cover bg-center shadow-xl"
            >
              <span className="mt-auto mr-2 mb-2 ml-2 rounded-md bg-primaryText p-1 font-sligoil text-sm text-white transition group-hover:bg-casualBlue group-hover:text-blueLight">
                Know me better
              </span>
            </Link>
          </li>
          <li className="col-span-full">
            <Link
              href="/bike"
              className="group flex h-[300px] rounded-sm bg-wall bg-cover bg-center shadow-xl"
            >
              <span className="mt-auto mr-2 mb-2 ml-2 rounded-md bg-primaryText p-1 font-sligoil text-sm text-white transition group-hover:bg-casualBlue group-hover:text-blueLight">
                Look at my art & projects
              </span>
            </Link>
          </li>
          {/*<li>*/}
          {/*  <Link*/}
          {/*    href="/bike"*/}
          {/*    className="group flex h-[300px] rounded-sm bg-hourse bg-cover bg-center shadow-xl"*/}
          {/*  >*/}
          {/*    <div className="mt-auto w-full rounded-sm bg-blueLight p-1 p-3 text-primaryText transition group-hover:bg-casualBlue group-hover:text-blueLight">*/}
          {/*      Don't go here*/}
          {/*    </div>*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </section>
      <img src={Cubes} width="180px" className="mx-auto mb-48 2xl:w-[250px]" />
    </>
  );
}
