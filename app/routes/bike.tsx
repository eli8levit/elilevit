import React from "react";
import BikeCanvas from "~/sources/images/bike-canvas.png";
import FirstRide from "~/sources/images/first-ride.jpeg";
import SecondRide from "~/sources/images/second-ride.jpeg";
import Wheels from "~/sources/images/wheels.jpeg";
import { Outlet } from "@remix-run/react";
import { Nav } from "~/components";
import End from "~/sources/images/end.png";

export default function Bike() {
  return (
    <>
      <Nav />
      <div className="content-container mx-auto">
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
      <div className="m-10 mb-48 rounded-lg bg-blueNoise py-16 px-16 shadow-2xl">
        <div className="mx-auto grid max-w-[2000px] grid-cols-2 justify-center gap-x-12">
          <section>
            <h2
              className="mb-4 font-satisfy text-4xl font-bold text-pinkLight"
              id="rides"
            >
              Rides
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className="flex h-[250px] flex-row gap-x-4 rounded-sm bg-pinkLight shadow-md hover:shadow-bike">
                <a
                  href="/bike/dd/#rides"
                  className="bg flex flex-row gap-x-4 rounded-sm bg-pinkLight shadow-md hover:shadow-bike"
                >
                  <img
                    src={FirstRide}
                    className="h-full w-1/2 shrink-0 object-cover"
                  />
                  <div className="flex flex-col gap-y-2 p-4">
                    <h3 className="font-butler flex flex-row flex-wrap items-center gap-x-4 text-2xl font-bold text-primaryText">
                      First one{" "}
                      <span className="bg-casualBlue p-0.5 px-1 font-ignazio text-xs text-pinkLight">
                        gravel + road
                      </span>
                    </h3>
                    <p className="font-butler text-xl font-medium">
                      Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex h-[250px] flex-row gap-x-4 rounded-sm bg-pinkLight shadow-md hover:shadow-bike">
                <img
                  src={SecondRide}
                  className="h-full w-1/2 shrink-0 object-cover"
                />
                <div className="flex flex-col gap-y-2 p-4">
                  <h3 className="font-butler flex flex-row flex-wrap items-center gap-x-4 text-2xl  font-bold text-primaryText">
                    Second one{" "}
                    <span className="bg-casualBlue p-0.5 px-1 font-ignazio text-xs text-pinkLight">
                      gravel
                    </span>
                  </h3>
                  <div>
                    <p className="font-butler text-xl font-medium">
                      Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-4 font-satisfy text-4xl font-bold text-pinkLight">
              Upgrades
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className="flex h-[250px] flex-row rounded-sm bg-blueLight shadow-md">
                <div className="flex flex-col gap-y-2 p-4">
                  <h3 className="font-butler text-2xl font-bold text-primaryText">
                    DT Swiss CR1600
                  </h3>
                  <p className="font-butler text-lg font-normal text-primaryText">
                    Firstly I decided to tune my wheels. More precisely I broke
                    my front wheel in some small accident. Exercitation eu
                  </p>
                </div>
                <img
                  src={Wheels}
                  className="h-full w-1/2 shrink-0 object-cover"
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
