import { Link } from "@remix-run/react";
import Arrow from "~/components/arrow";
import { genImageUrlById } from "~/utilities";

import React, { ReactElement } from "react";
import { FaidInMotionContainer } from "~/components/layout";

interface IFeedRow {
  date: string;
  title: string | ReactElement;
  linkProps: {
    to: string;
    text: string;
  };
  children: ReactElement | ReactElement[];
}

const FeedRow = ({ date, title, linkProps, children }: IFeedRow) => {
  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-2 md:flex-row">
        <p className="font-hubot text-base font-bold text-zinc-700 md:mb-1">
          {date}
        </p>
        <Link
          to={linkProps.to}
          className="ml-auto flex w-auto flex-row items-center gap-x-3 whitespace-nowrap rounded-lg px-3 py-2 font-hubot text-sm text-secondary hover:bg-lightGray hover:shadow-nav active:shadow-navActive md:text-base"
        >
          {linkProps.text}
          <Arrow
            className="h-[10px] fill-secondary md:h-[15px]"
            height="15px"
          />
        </Link>
      </div>
      <p className="mb-4 flex-row items-center gap-x-2 fill-zinc-600 font-mona text-lg font-light text-zinc-600 md:text-xl">
        {title}
      </p>
      {children}
    </div>
  );
};

export default function Feed() {
  return (
    <FaidInMotionContainer className="content-container mb-6 pt-6">
      <div className="relative rounded-2xl border-[0.5px] border-black border-opacity-10 bg-panel p-6 shadow-feed backdrop-blur-2xl md:p-16">
        <h3
          id="latest-stuff"
          className="mb-6 flex flex-row font-mona text-2xl font-semibold text-black opacity-40 md:text-4xl"
        >
          Latest stuff
        </h3>
        <div className="flex flex-col gap-8 md:gap-20">
          <FeedRow
            title="🇬🇪 Georgia. Tbilisi"
            date="30.3.2023"
            linkProps={{ to: "/feed/georgia", text: "Read more" }}
          >
            <div className="hide-scrollbar relative grid grid-cols-[300px_450px_auto] gap-2 overflow-x-auto md:grid-cols-[6fr_4fr]">
              <img
                src={genImageUrlById("24a1eddf-5136-4d94-9f8f-015d10c9e69e")}
                height="45vh"
                className="h-[250px]  w-full rounded-md object-cover shadow-lg md:h-[380px] 2xl:h-[450px]"
                alt="Open pool with view of reserve"
              />
              <img
                src={genImageUrlById("4966445b-b4b0-4872-af96-82d30e3c9129")}
                height="450px"
                className="h-[250px]  w-full rounded-md object-cover shadow-lg md:h-[380px] 2xl:h-[450px]"
                alt="High rock hills from right and left, blue sky with clouds"
              />
            </div>
          </FeedRow>
          <div className="mx-auto h-[1px] w-[50%] bg-black opacity-10" />
          <FeedRow
            date="21.4.2023"
            title={
              <>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15.4889 24.6191"
                  className="mb-auto w-[15px]"
                  width="15px"
                >
                  <g>
                    <rect
                      height="24.6191"
                      opacity="0"
                      width="15.4889"
                      x="0"
                      y="0"
                    />
                    <path d="M8.05299 4.26758C9.22487 4.26758 10.1721 3.31055 10.1721 2.11914C10.1721 0.947266 9.22487 0 8.05299 0C6.86158 0 5.90455 0.947266 5.90455 2.11914C5.90455 3.31055 6.86158 4.26758 8.05299 4.26758ZM11.6956 24.3848C12.2229 24.2285 12.4963 23.6426 12.3206 23.1152L10.7678 18.4375C10.719 18.291 10.6702 18.2324 10.5823 18.1055L7.97487 15.1172L8.52174 9.16992C8.53151 8.97461 8.76588 8.91602 8.8733 9.08203L10.1331 11.0254C10.3186 11.2988 10.5921 11.543 10.8655 11.6992L14.0198 13.3984C14.5081 13.6523 15.1038 13.4766 15.3772 12.998C15.6213 12.5098 15.4553 11.9043 14.9768 11.6406L11.8128 9.95117L9.71315 6.70898C9.13697 5.82031 8.29713 5.29297 7.13502 5.29297L5.05494 5.29297L4.2444 12.998C4.13697 13.9941 4.32252 14.6387 5.13307 15.4688L8.94166 19.2969L10.4358 23.7402C10.6506 24.3848 11.2268 24.5117 11.6956 24.3848ZM3.01393 12.998L4.61549 12.998C5.47487 12.998 6.13893 12.3633 6.13893 11.543L6.13893 5.71289C6.13893 4.89258 5.47487 4.24805 4.61549 4.24805L3.52174 4.24805C2.28151 4.24805 1.55885 4.98047 1.55885 6.24023L1.55885 11.543C1.55885 12.4023 2.15455 12.998 3.01393 12.998ZM0.289318 24.1211C0.689709 24.5312 1.29518 24.5117 1.6858 24.1211L5.33815 20.4883C5.40651 20.4102 5.48463 20.3418 5.52369 20.2539L6.52955 18.2129L4.78151 16.4648L3.76588 19.248L0.289318 22.7441C-0.0915411 23.1348-0.101307 23.7402 0.289318 24.1211ZM14.4299 7.96875C14.1272 7.96875 13.8928 8.20312 13.8928 8.50586L13.8928 9.99023L14.9768 10.5762L14.9768 8.50586C14.9768 8.20312 14.7327 7.96875 14.4299 7.96875ZM14.4299 24.4141C14.7327 24.4141 14.9768 24.1699 14.9768 23.8672L14.9768 14.3945C14.6253 14.4922 14.2542 14.4824 13.8928 14.3652L13.8928 23.8672C13.8928 24.1699 14.1272 24.4141 14.4299 24.4141Z" />
                  </g>
                </svg>
                Photos from Ein Prat Nature Reserve trip
              </>
            }
            linkProps={{ to: "/feed/ein-prat", text: "See All" }}
          >
            <div className="hide-scrollbar relative grid grid-cols-[repeat(4,200px)_auto] gap-2 overflow-x-auto md:grid-cols-[3fr_2fr_2fr_3fr]">
              <img
                src={genImageUrlById("021cd876-f163-4095-8a8b-ad6f3eb19f4a")}
                height="45vh"
                className="h-[250px] w-full rounded-md object-cover shadow-lg md:h-[380px] 2xl:h-[450px]"
                alt="Open pool with view of reserve"
              />
              <img
                src={genImageUrlById("fd53479e-f577-442e-930f-a7274d6a6ade")}
                height="450px"
                className="h-[250px] w-full rounded-md object-cover shadow-lg md:h-[380px] 2xl:h-[450px]"
                alt="Tiny natural waterfall under reeds"
              />
              <img
                src={genImageUrlById("f33f5640-5db1-4007-bfef-610ba62b0199")}
                height="450px"
                className="h-[250px] w-full rounded-md object-cover shadow-lg md:h-[380px] 2xl:h-[450px]"
                alt="High rock hills from right and left, blue sky with clouds"
              />
              <img
                src={genImageUrlById("47a24a50-ff7c-4016-9d05-e4800342cce7")}
                height="450px"
                className="h-[250px] w-full rounded-md object-cover shadow-lg md:h-[380px] 2xl:h-[450px]"
                alt="A stream running through a channel between two rock hills"
              />
            </div>
          </FeedRow>
        </div>
        {/*<div className="absolute -bottom-[30px] z-10 h-[0] w-[calc(100%-10rem)] bg-transparent shadow-cloud" />*/}
      </div>
      {/*<Link*/}
      {/*  to="/feed/ein-prat"*/}
      {/*  className="absolute left-[50%] z-20 flex -translate-x-[50%] flex-row items-center gap-x-3 whitespace-nowrap rounded-lg px-3 py-2 font-hubot text-base text-secondary hover:bg-lightGray hover:shadow-nav active:shadow-navActive md:text-lg"*/}
      {/*>*/}
      {/*  To all feed*/}
      {/*  <Arrow className="fill-secondary" height="15px" />*/}
      {/*</Link>*/}
    </FaidInMotionContainer>
  );
}
