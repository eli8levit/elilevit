import React from "react";
import BikePhoto from "~/sources/images/bike-photo.jpeg";
import BikeCanvas from "~/sources/images/bike-canvas.png";
import FirstRide from "~/sources/images/first-ride.jpeg";
import SecondRide from "~/sources/images/second-ride.jpeg";
import { Nav } from "~/components";

export default function Bike() {
  return (
    <div>
      <img
        src={BikePhoto}
        height="600px"
        className="h-[600px] w-full border-b-4 border-primaryText object-cover object-center "
      />
      <Nav />
      <div className="content-container min-h-[1000px]">
        <h1 className="mt-12 mb-24 font-wremena text-9xl font-bold  text-primaryText">
          Welcome, <br />
          <span>To my bike's blog - </span>
          <span className="bg-pinkLight p-4 font-sligoil text-6xl text-casualBlue">
            Cannondale Topstone 4
          </span>
        </h1>
        <div className="mb-44 grid  grid-cols-[45%_55%] items-center gap-x-12">
          <p className="font-wremena text-5xl font-light leading-relaxed leading-1.2 text-casualBlue">
            This page is about my first bike and all that related to cycling: my
            rides, photos and, most interesting,{" "}
            <strong>the upgrading revolution</strong>
          </p>
          <img
            src={BikeCanvas}
            height="600px"
            className="mx-auto h-[600px] object-contain"
          />
        </div>
        <div className="mb-52 grid grid-cols-2 gap-x-12 font-sligoil text-xl text-primaryText">
          <section>
            <h2 className="mb-14 font-sligoil text-5xl ">Rides</h2>
            <ul className="flex flex-col gap-y-4">
              <li className="flex flex-row gap-x-4 bg-blueLight hover:shadow-bike">
                <img
                  src={FirstRide}
                  className="h-[200px] w-[200px] object-cover"
                />
                <div className="flex flex-col gap-y-6 p-6">
                  <h3 className="flex flex-row items-center gap-x-4 text-2xl">
                    first one{" "}
                    <span className="bg-casualBlue p-0.5 px-1 text-base text-pinkLighter ">
                      gravel
                    </span>
                  </h3>
                  <p className="text-lg opacity-80">
                    Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431
                  </p>
                </div>
              </li>
              <li className="flex flex-row gap-x-4  bg-blueLight hover:shadow-bike">
                <img
                  src={SecondRide}
                  height="200px"
                  width="200px"
                  className="h-[200px] w-[200px] object-cover"
                />
                <div className="flex flex-col gap-y-6 p-6">
                  <h3 className="flex flex-row items-center gap-x-4 text-2xl">
                    second one{" "}
                    <span className="bg-casualBlue p-0.5 px-1 text-base text-pinkLighter ">
                      gravel
                    </span>
                  </h3>
                  <p className="text-lg opacity-80">
                    Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-14 font-sligoil text-5xl text-primaryText">
              Upgrades
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className="bg-pinkLight p-6">first one</li>
              <li className="bg-pinkLight p-6">second one</li>
              <li className="bg-pinkLight p-6">third one</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
