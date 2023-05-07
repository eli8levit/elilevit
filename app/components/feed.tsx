import { Link } from "@remix-run/react";
import Arrow from "~/components/arrow";
import { genImageUrlById } from "~/utilities";
import React from "react";

export default function Feed() {
  return (
    <div className="content-container bg-transparent pb-20">
      <h3
        id="latest-stuff"
        className="mb-8  w-max border-b-2 border-primary font-apfel text-2xl font-bold text-primary md:mb-16 md:text-4xl"
      >
        Latest stuff
      </h3>
      <p className="font-hubot text-sm font-bold text-zinc-700 md:-mb-2 md:text-base">
        21.4.2023
      </p>
      <div className="mb-4 flex flex-wrap items-center justify-between md:flex-row">
        <p className="mr-4 w-max font-mona text-base font-light text-zinc-600 md:text-xl">
          Photos from{" "}
          <span className="font-hubot md:text-lg">
            "Ein Prat Nature Reserve"
          </span>{" "}
          trip
        </p>
        <Link
          to="/feed/ein-prat"
          className="ml-auto flex w-auto flex-row items-center gap-x-3 whitespace-nowrap rounded-lg px-3 py-2 font-hubot text-sm text-secondary hover:bg-lightGray hover:shadow-nav active:shadow-navActive md:text-base"
        >
          See All
          <Arrow className="fill-secondary" height="15px" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[3fr_2fr_2fr_3fr]">
        <img
          src={genImageUrlById("021cd876-f163-4095-8a8b-ad6f3eb19f4a")}
          height="45vh"
          className="h-[200px] max-h-[600px] min-h-[200px] w-full -rotate-1 rounded-md object-cover shadow-lg md:h-[45vh]"
          alt="Open pool with view of reserve"
        />
        <img
          src={genImageUrlById("fd53479e-f577-442e-930f-a7274d6a6ade")}
          height="45vh"
          className="h-[200px] max-h-[600px] min-h-[200px] w-full rotate-2 rounded-md object-cover shadow-lg md:h-[45vh]"
          alt="Tiny natural waterfall under reeds"
        />
        <img
          src={genImageUrlById("f33f5640-5db1-4007-bfef-610ba62b0199")}
          height="45vh"
          className="h-[200px] max-h-[600px] min-h-[200px] w-full rounded-md object-cover shadow-lg md:h-[45vh]"
          alt="High rock hills from right and left, blue sky with clouds"
        />
        <img
          src={genImageUrlById("47a24a50-ff7c-4016-9d05-e4800342cce7")}
          height="45vh"
          className="h-[200px] max-h-[600px] min-h-[200px] w-full -rotate-1 rounded-md object-cover shadow-lg md:h-[45vh]"
          alt="A stream running through a channel between two rock hills"
        />
      </div>
    </div>
  );
}
