import React from "react";
import BikeCanvas from "~/sources/images/bike-canvas.png";
import { Outlet } from "@remix-run/react";
import { Nav } from "~/components";

type Card = {
  background: string;
  title: string;
  type?: string;
  description: string;
};

export const BikeCard = ({
  background,
  title,
  type = "",
  description,
}: Card) => {
  return (
    <a
      href="/bike/dd/#rides"
      className={`flex h-[300px] rounded-lg ${background} group bg-cover bg-center shadow-lg`}
    >
      <div className="mx-1 mt-auto mb-2 w-full max-w-[600px] flex-col rounded-md p-4 text-white shadow-lg backdrop-blur-lg backdrop-brightness-50 group-hover:shadow-bike md:mx-auto md:w-[70%]">
        <h3 className="mb-1 flex flex-row flex-wrap items-center gap-x-2 font-ignazio text-xl group-hover:text-indigo-100">
          {title}{" "}
          {type && (
            <span className="rounded-md bg-indigo-600 p-0.5 font-ignazio text-xs">
              {type}
            </span>
          )}
        </h3>
        <p className="font-roboto text-sm font-normal text-indigo-200 2xl:text-lg">
          {description}
        </p>
      </div>
    </a>
  );
};

export default function Bike() {
  return (
    <>
      <Nav />
      <div className="content-container">
        <h1 className="mb-12 bg-gradient-to-r px-2 py-8 text-center font-satisfy text-7xl font-normal text-indigo-800 md:mb-24 md:min-h-[150px] md:to-red-500 md:p-0 md:text-left md:text-9xl">
          Bike Blog
        </h1>
        <div className="mx-auto mb-16 grid max-w-[2000px] items-center justify-between gap-x-12 md:grid-cols-2">
          <p className="p-8 font-roboto text-3xl text-indigo-800">
            Here is about my bike and stuff related to cycling: my rides, photos
            and, most interesting,{" "}
            <strong className="font-bold">the upgrading revolution</strong>
          </p>
          <img src={BikeCanvas} className="mx-auto w-full object-contain" />
        </div>
      </div>
      <Outlet />
      <div className="content-container pt-0">
        <div className="mb-48 grid justify-center gap-8 rounded-lg bg-blueNoise py-8 px-4 shadow-2xl shadow-indigo-400 md:grid-cols-2 md:py-16 md:px-16">
          <section>
            <h2
              className="mb-4 font-satisfy text-5xl font-bold text-pink-200"
              id="rides"
            >
              Rides
            </h2>
            <ul className="flex flex-col gap-y-8">
              <li>
                <BikeCard
                  type="gravel + road"
                  background="bg-firstRide"
                  description="Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431"
                  title="First one"
                />
              </li>
              <li>
                <BikeCard
                  type="gravel"
                  background="bg-secondRide"
                  description="Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431"
                  title="Second one"
                />
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-4 font-satisfy text-5xl font-bold text-pink-200">
              Upgrades
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li>
                <BikeCard
                  background="bg-wheels"
                  title="DT Swiss CR1600"
                  description="Firstly I decided to tune my wheels. More precisely I broke my front wheel in some small accident."
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
