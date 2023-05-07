import { Link } from "@remix-run/react";
import React from "react";
import seven from "~/sources/images/Ein Prat/7.jpeg";
import eight from "~/sources/images/Ein Prat/8.jpeg";
import ten11 from "~/sources/images/Ein Prat/11.jpeg";
import { genImageUrlById } from "~/utilities";
import Arrow from "~/components/arrow";
import MeshGradient from "~/components/mesh-gradient";

export default function EinPrat() {
  return (
    <div className="content-container flex flex-col gap-6 pt-4 pb-40 md:gap-8">
      <Link
        to="/#latest-stuff"
        className="mb-4 flex w-max flex-row items-baseline gap-2 rounded-md px-2 py-2 font-hubot text-sm text-zinc-600 hover:bg-[rgba(1,1,1,.01)] hover:shadow-nav active:shadow-navActive 2xl:px-3 2xl:py-2 2xl:text-base"
        preventScrollReset
      >
        <Arrow className="rotate-180" />
        Back to home
      </Link>
      <div className="grid grid-cols-1 items-end gap-16 md:grid-cols-2 md:gap-8">
        <div className="relative h-[250px] w-full md:h-full">
          <MeshGradient className="absolute -z-10 h-full w-full scale-[3]" />
          <img
            src={genImageUrlById("d70c9d8d-75f6-417b-8823-43f1d55f794d")}
            className="h-full w-full shrink-0 rounded-md object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="heading !mb-0">
            Ein Prat{" "}
            <span className="font-hubot text-2xl text-zinc-500">
              Nature Reserve
            </span>
          </h1>
          <div className="content">
            <p className="!mb-0 font-mona text-lg">
              Ein Prat is beautiful reserve which is located near Jerusalem. It
              has a lot of springs where you can take a dip. It's good for
              tracks and also for picking with children.{" "}
            </p>
          </div>
          <img
            className="h-[450px] w-full rounded-md object-cover shadow-lg"
            src={genImageUrlById("794b3a87-dfd9-4e0d-8cb4-2c8790da321c")}
          />
        </div>
      </div>
      <div className="hide-scrollbar relative flex w-full flex-row gap-4 overflow-auto md:grid md:grid-cols-[1fr_2fr_1fr]">
        <img
          className="h-[300px] w-full rounded-md object-cover shadow-lg"
          src={seven}
        />
        <img
          className="h-[300px] w-full rounded-md object-cover shadow-lg"
          src={eight}
        />
        <img
          className="h-[300px] w-full rounded-md object-cover shadow-lg"
          src={genImageUrlById("beed224d-553c-40bc-8e7c-b971836c6266")}
        />
        <div className="sticky right-0 z-10 h-[300px] w-[0px] bg-transparent shadow-scrollable md:hidden" />
      </div>
      <img
        className="h-[500px] w-full rounded-md object-cover shadow-lg"
        src={ten11}
      />
      <div className="hide-scrollbar relative flex  w-full flex-row gap-4 overflow-auto md:grid md:grid-cols-[2fr_1fr_1fr]">
        <img
          className="h-[400px] w-full rounded-md object-cover shadow-lg"
          src={genImageUrlById("11380ed0-6aa1-4855-98eb-6917ebfa133c")}
        />
        <img
          className="h-[400px] w-full rounded-md object-cover shadow-lg"
          src={genImageUrlById("55f676cd-3aa4-4a89-b520-4599fdca7b88")}
        />
        <img
          className="h-[400px] w-full rounded-md object-cover shadow-lg"
          src={genImageUrlById("de0597d6-66a7-4fb5-907d-9a2a7e8d579b")}
        />
        <div className="sticky right-0 z-10 h-[380px] w-[0px] bg-transparent shadow-scrollable md:hidden" />
      </div>
    </div>
  );
}
