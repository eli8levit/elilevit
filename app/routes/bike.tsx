import React from "react";
import BikeCanvas from "~/sources/images/bike-canvas.png";
import { Nav } from "~/components";

export default function Bike() {
  return (
    <div>
      <img
        src={BikeCanvas}
        height="400px"
        className="h-[400px] w-full object-cover object-center"
      />
      <Nav />

      <h1 className="font-wremena text-9xl font-bold text-primaryText">
        Welcome to the life of my bike - Cannondale Topstone 4
      </h1>
    </div>
  );
}
