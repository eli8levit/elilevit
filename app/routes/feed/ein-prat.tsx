import React from "react";
import { genImageUrlById } from "~/utilities";
import { PostPage } from "~/components/post-page";

export { loader } from "../../use-mobile-loader";

export default function EinPrat() {
  return (
    <PostPage
      title={
        <>
          Ein Prat{" "}
          <span className="font-shantell text-2xl font-normal text-zinc-500">
            Nature Reserve
          </span>
        </>
      }
    >
      <div className="flex flex-col md:gap-6 2xl:gap-8">
        <p className="!mb-0 !mr-auto !ml-0 max-w-[600px] max-w-[800px] font-mona text-lg 2xl:text-2xl">
          Ein Prat is beautiful reserve which is located near Jerusalem. It has
          a lot of springs where you can take a dip. It's good for tracks and
          also for picking with children.{" "}
        </p>
        <img
          className="h-[400px] w-full rounded-md object-cover shadow-lg  md:max-h-[450px]"
          src={genImageUrlById("794b3a87-dfd9-4e0d-8cb4-2c8790da321c")}
          alt="Ein Prat entrance. Trees and tables for picknick"
        />
        <div className="hide-scrollbar relative flex w-full flex-row gap-4 overflow-auto md:grid md:grid-cols-[1fr_2fr_1fr] 2xl:gap-6">
          <img
            className="h-[300px] w-full rounded-md object-cover shadow-lg 2xl:h-[450px]"
            src={genImageUrlById("021cd876-f163-4095-8a8b-ad6f3eb19f4a")}
            alt="Open pool with view of reserve"
          />
          <img
            className="h-[300px] w-full rounded-md object-cover shadow-lg 2xl:h-[450px]"
            src={genImageUrlById("fd53479e-f577-442e-930f-a7274d6a6ade")}
            alt="Tiny natural waterfall under reeds"
          />
          <img
            className="h-[300px] w-full rounded-md object-cover shadow-lg 2xl:h-[450px]"
            src={genImageUrlById("beed224d-553c-40bc-8e7c-b971836c6266")}
            alt="Reeds on mountauns background"
          />
          <div className="sticky right-0 z-10 h-[300px] w-[0px] bg-transparent shadow-scrollable md:hidden" />
        </div>
        <img
          className="h-[500px] w-full rounded-md object-cover shadow-lg"
          src={genImageUrlById("637461c6-b097-491b-bfb1-61fef4bfa4da")}
          alt="Rocky hill close shot. Bushes from below"
        />
        <div className="hide-scrollbar relative flex w-full flex-row gap-4 overflow-auto md:grid md:grid-cols-[2fr_1fr_1fr] 2xl:gap-6">
          <img
            className="h-[400px] w-full rounded-md object-cover shadow-lg 2xl:h-[500px]"
            src={genImageUrlById("11380ed0-6aa1-4855-98eb-6917ebfa133c")}
            alt="Hand holding glass with black turkish coffee. Rocky hill on thee background"
          />
          <img
            className="h-[400px] w-full rounded-md object-cover shadow-lg 2xl:h-[500px]"
            src={genImageUrlById("55f676cd-3aa4-4a89-b520-4599fdca7b88")}
            alt="A stream running through a channel between two rock hills"
          />
          <img
            className="h-[400px] w-full rounded-md object-cover shadow-lg 2xl:h-[500px]"
            src={genImageUrlById("de0597d6-66a7-4fb5-907d-9a2a7e8d579b")}
            alt="Spring under rock hill. Blue sky with single white cloud from above"
          />
        </div>
        <div className="sticky right-0 z-10 h-[380px] w-[0px] bg-transparent shadow-scrollable md:hidden" />
      </div>
    </PostPage>
  );
}
