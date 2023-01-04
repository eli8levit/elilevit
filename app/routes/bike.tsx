import React from "react";
import BikeCanvas from "~/sources/images/bike-canvas.png";
import { Outlet } from "@remix-run/react";
import { Nav } from "~/components";
import End from "~/sources/images/end.png";

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
      className={`flex h-[300px] rounded-md ${background} group bg-cover bg-center shadow-lg`}
    >
      <div className="mx-auto mt-auto mb-2 w-[85%] max-w-[600px] flex-col rounded-md p-4 text-white shadow-lg backdrop-blur-lg backdrop-brightness-50 group-hover:shadow-bike">
        <h3 className="mb-1 flex flex-row flex-wrap items-center gap-x-2 rounded-md font-ignazio text-xl group-hover:text-indigo-100">
          {title}{" "}
          {type && (
            <span className="rounded-md bg-indigo-600 p-0.5 font-ignazio text-xs">
              {type}
            </span>
          )}
        </h3>
        <p className="font-roboto text-xs font-normal text-indigo-200 2xl:text-lg">
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
        <h1 className="mb-16 font-satisfy text-8xl text-indigo-800">
          Bike blog
        </h1>
        <div className="mx-auto mb-16 grid max-w-[2000px] grid-cols-2 items-center justify-between gap-x-12">
          <p className="p-8 font-apfel text-3xl text-indigo-800">
            Here is about my bike and stuff related to cycling: my rides, photos
            and, most interesting,{" "}
            <strong className="font-bold">the upgrading revolution</strong>
          </p>
          <img src={BikeCanvas} className="mx-auto w-full object-contain" />
        </div>
      </div>
      <Outlet />
      <div className="content-container">
        <div className="mb-48 grid grid-cols-2 justify-center gap-8 rounded-lg bg-blueNoise py-16 px-16 shadow-2xl shadow-indigo-400">
          <section>
            <h2
              className="mb-4 font-satisfy text-4xl font-bold text-pink-200"
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
            <h2 className="mb-4 font-satisfy text-4xl font-bold text-pink-200">
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
      <img src={End} width="250px" className="mx-auto mb-48" />
    </>
  );
}
