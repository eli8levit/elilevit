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
        <h1 className="mt-12 mb-52 font-wremena text-9xl font-bold  text-primaryText">
          Welcome, <br />
          <span>To my bike's blog - </span>
          <span className="bg-pinkLight p-4 font-sligoil text-6xl text-casualBlue">
            Cannondale Topstone 4
          </span>
        </h1>
        <div className="mb-52 grid  grid-cols-[45%_55%] items-center gap-x-12">
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
            <h2 className="mb-4 font-sligoil text-5xl ">Rides</h2>
            <ul className="flex flex-col gap-y-4">
              <li className="flex flex-row gap-x-4 rounded-sm bg-blueLight drop-shadow-xl hover:shadow-bike">
                <img
                  height="200px"
                  width="200px"
                  src={FirstRide}
                  className="h-[200px] w-[200px] shrink-0 object-cover"
                />
                <div className="flex flex-col gap-y-4 p-6">
                  <h3 className="flex flex-row items-center gap-x-4 font-butler text-2xl font-bold text-casualBlue">
                    first one{" "}
                    <span className="bg-casualBlue p-0.5 px-1 font-sligoil text-base text-pinkLighter ">
                      gravel + road
                    </span>
                  </h3>
                  <p className="font-butler text-xl font-medium">
                    Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431
                  </p>
                </div>
              </li>
              <li className="flex flex-row gap-x-4 rounded-sm bg-blueLight drop-shadow-xl hover:shadow-bike">
                <img
                  src={SecondRide}
                  height="200px"
                  width="200px"
                  className="h-[200px] w-[200px] object-cover"
                />
                <div className="flex flex-col gap-y-2 p-6">
                  <h3 className="flex flex-row items-center gap-x-4 font-butler text-2xl  font-bold text-casualBlue">
                    second one{" "}
                    <span className="bg-casualBlue p-0.5 px-1 font-sligoil text-base text-pinkLighter">
                      gravel
                    </span>
                  </h3>
                  <div>
                    <p className="font-butler text-xl font-medium">
                      <span className="bg-gray-300 p-1 font-sligoil text-sm font-bold uppercase text-primaryText">
                        Location
                      </span>{" "}
                      Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431
                    </p>
                    <p className="font-butler text-xl font-medium">
                      <span className="bg-gray-300 p-1 font-sligoil text-sm font-bold uppercase text-primaryText">
                        Distance
                      </span>{" "}
                      13 km
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-4 font-sligoil text-5xl text-primaryText">
              Upgrades
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className="rounded-sm bg-pinkLight p-8 drop-shadow-xl">
                <h3 className="mb-4 flex flex-row items-center gap-x-4 font-butler text-3xl font-bold text-casualBlue">
                  DT Swiss CR1600
                </h3>
                <p className="font-butler text-2xl font-normal text-primaryText">
                  Firstly I decided to tune my wheels. More precisely I broke my
                  front wheel in some small accident. Exercitation eu veniam ad
                  enim fugiat ut exercitation cupidatat amet ex nulla consequat
                  quis dolor. Aliquip ex pariatur duis qui cillum eu magna duis
                  ad. Cillum aliquip magna laborum minim.{" "}
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
