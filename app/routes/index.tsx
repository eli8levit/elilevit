import React from "react";
import Sotim from "~/sources/images/sotim.jpg";
import Cubes from "~/sources/images/3cubes.png";

import { Link, Nav } from "~/components";

export default function Index() {
  return (
    <div>
      <img
        src={Sotim}
        height="180px"
        className="h-[180px] w-full origin-bottom object-cover"
      />
      <Nav />
      <div className="content-container">
        <h1 className="font-ligh mb-48 font-butlerSt text-8xl font-bold text-primaryText">
          Hey, good to see you!
        </h1>
        <section className="mb-48 grid min-h-[580px] grid-cols-[40%_60%] justify-between gap-x-6">
          <div className="flex flex-col items-center justify-center gap-y-14">
            <h2 className="font-butler text-5xl font-light text-casualBlue 2xl:text-6xl">
              👋🏻 I'm Eli and this is my vinyl player. I created 3d model in
              Spline app to show how beautiful it is
            </h2>
            <p className="rounded-sm bg-primaryText px-8 py-6 font-sligoil text-base text-white shadow-sm 2xl:text-lg ">
              <strong className="mb-1 block font-butler text-xl text-blueLight">
                Project Essential 3 User Manual:
              </strong>
              <ul className="ml-6 list-disc text-sm">
                <li>You can orbit model with mouse</li>
                <li>Open cover by clicking on it</li>
                <li>
                  Start and stop record by clicking on switch button on the side
                </li>
              </ul>
            </p>
          </div>
          <iframe
            src="https://my.spline.design/project-cca4dc6de45717fed5ca979536aa6a41/"
            width="100%"
            height="100%"
          ></iframe>
        </section>
        <img
          src={Cubes}
          width="180px"
          className="mx-auto mb-48 2xl:w-[250px]"
        />
        <section className="mb-48 w-full rounded-sm bg-primaryText p-24 shadow-xl">
          <h3 className="mb-14 w-max border-primaryText font-butler text-6xl font-semibold text-blueLight text-white 2xl:text-8xl ">
            What to do here
          </h3>
          <ul className="grid grid-cols-2 items-end gap-10 text-xl">
            <li>
              <Link
                href="/bike"
                className="group flex h-[300px] rounded-sm bg-bike bg-cover bg-center shadow-xl"
              >
                <div className="mt-auto w-full rounded-sm bg-blueLight p-2 p-5 text-primaryText transition group-hover:bg-casualBlue group-hover:text-2xl group-hover:text-blueLight">
                  Checkout my bike blog
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="group flex h-[300px] rounded-sm bg-cubes bg-cover bg-center shadow-xl"
              >
                <div className="mt-auto w-full rounded-sm bg-blueLight p-2 p-5 text-primaryText transition group-hover:bg-casualBlue group-hover:text-2xl group-hover:text-blueLight">
                  Know me better
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/bike"
                className="group flex h-[300px] rounded-sm bg-art bg-cover bg-center shadow-xl"
              >
                <div className="mt-auto w-full rounded-sm bg-blueLight p-2  p-5 text-primaryText transition group-hover:bg-casualBlue group-hover:text-2xl group-hover:text-blueLight">
                  Look at my art & projects
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/bike"
                className="group flex h-[300px] rounded-sm bg-bikes bg-contain bg-center shadow-xl"
              >
                <div className="mt-auto w-full rounded-sm bg-blueLight p-2 p-5 text-primaryText transition group-hover:bg-casualBlue group-hover:text-2xl group-hover:text-blueLight">
                  Don't go here
                </div>
              </Link>
            </li>
          </ul>
        </section>
        <img
          src={Cubes}
          width="180px"
          className="mx-auto mb-48 2xl:w-[250px]"
        />
      </div>
    </div>
  );
}
