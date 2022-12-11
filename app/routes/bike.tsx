import React from "react";
import BikePhoto from "~/sources/images/bike-photo.jpeg";
import BikeCanvas from "~/sources/images/bike-canvas.png";
import FirstRide from "~/sources/images/first-ride.jpeg";
import SecondRide from "~/sources/images/second-ride.jpeg";
import Bikes from "~/sources/images/bikes.jpg";
import Wheels from "~/sources/images/wheels.jpeg";
import { Nav } from "~/components";
import BikePost from "~/routes/bike/$bikeId";
import { Outlet } from "@remix-run/react";

export default function Bike() {
  return (
    <div>
      <Nav />
      <div className="content-container">
        <h1 className="mb-24 font-butler text-8xl font-black text-primaryText">
          Bike blog
        </h1>
        <div className="mb-48 grid grid-cols-2 items-center justify-between gap-x-12">
          <p className="font-butler text-5xl font-light text-casualBlue 2xl:text-6xl">
            Here is about my bike and stuff related to cycling: my rides, photos
            and, most interesting,{" "}
            <strong className="font-bold">the upgrading revolution</strong>
          </p>
          <img
            src={BikeCanvas}
            height="600px"
            className="mx-auto h-[600px] object-contain"
          />
        </div>
        <Outlet />
        <div className="mb-52 grid grid-cols-2 gap-x-12 font-sligoil text-xl text-primaryText">
          <section>
            <h2 className="mb-4 font-sligoil text-3xl font-bold" id="rides">
              Rides
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li>
                <a
                  href="/bike/dd/#rides"
                  className="flex flex-row gap-x-4 rounded-sm bg-pinkLighterMedium shadow-md hover:shadow-bike"
                >
                  <img
                    height="200px"
                    width="200px"
                    src={FirstRide}
                    className="h-[200px] w-[200px] shrink-0 object-cover"
                  />
                  <div className="flex flex-col gap-y-2 p-6">
                    <h3 className="flex flex-row items-center gap-x-4 font-butler text-2xl font-bold text-primaryText">
                      First one{" "}
                      <span className="bg-casualBlue p-0.5 px-1 font-sligoil text-xs text-pinkLighterMedium">
                        gravel + road
                      </span>
                    </h3>
                    <p className="font-butler text-xl font-medium">
                      Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex flex-row gap-x-4 rounded-sm bg-pinkLighterMedium shadow-md hover:shadow-bike">
                <img
                  src={SecondRide}
                  height="200px"
                  width="200px"
                  className="h-[200px] w-[200px] object-cover"
                />
                <div className="flex flex-col gap-y-2 p-6">
                  <h3 className="flex flex-row items-center gap-x-4 font-butler text-2xl  font-bold text-primaryText">
                    Second one{" "}
                    <span className="bg-casualBlue p-0.5 px-1 font-sligoil text-xs text-pinkLighterMedium">
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
            <h2 className="mb-4 font-sligoil text-3xl font-bold text-primaryText">
              Upgrades
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className="flex flex-row gap-x-4 rounded-sm bg-blueLight shadow-md">
                <div className="flex flex-col gap-y-2 p-6">
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
                  height="200px"
                  width="200px"
                  className="h-[200px] w-[200px] object-cover"
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
