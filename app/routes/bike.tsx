import React from "react";
import BikePhoto from "~/sources/images/bike-photo.jpeg";
import BikeCanvas from "~/sources/images/bike-canvas.png";
import { Nav } from "~/components";

export default function Bike() {
  return (
    <div>
      <img
        src={BikePhoto}
        height="400px"
        className="h-[600px] w-full border-b-4 border-primaryText object-cover object-center "
      />
      <Nav />
      <div className="content-container min-h-[1000px]">
        <h1 className="mt-12 mb-32 font-wremena text-9xl font-bold  text-primaryText">
          Welcome, <br />
          <span>To my bike's blog - </span>
          <span className="bg-pinkLight p-4 font-sligoil text-6xl text-casualBlue">
            Cannondale Topstone 4
          </span>
        </h1>
        <div className="grid min-h-[750px] grid-cols-[45%_55%] items-center gap-x-12">
          <p className="font-wremena text-5xl font-light leading-relaxed leading-1.2 text-casualBlue">
            This page is about my first bike and all that related to cycling: my
            rides, photos and, most interesting my upgrading revolution of it
          </p>
          <img
            src={BikeCanvas}
            height="600px"
            className="mx-auto h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
