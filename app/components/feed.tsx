import { Link } from "@remix-run/react";
import Arrow from "~/components/arrow";
import { genImageUrlById } from "~/utilities";
import Bamba from "~/sources/images/bamba-site.jpg";

import React from "react";
import { FaidInMotionContainer } from "~/components/layout";

import { PostCard } from "~/components/post-card";

export default function Feed() {
  return (
    <FaidInMotionContainer className="content-container mb-6 !pr-0 md:mb-12">
      <div className="relative rounded-2xl">
        <h3
          id="latest-stuff"
          className="flexflex-row mb-6 font-shantell text-2xl text-primary 2xl:text-3xl"
        >
          Latest stuff ↓
        </h3>
        <div className="-ml-10 flex flex-row items-center gap-8 overflow-auto py-8 pl-10 md:px-10">
          <Link to="/feed/bamba">
            <PostCard
              image={Bamba}
              title="🦮 Bamba"
              description="Tiny website that I made for new little friend"
              id={3}
              date="15.6.2023"
              index={3}
            />
          </Link>
          <Link to="/feed/georgia">
            <PostCard
              image={genImageUrlById("24a1eddf-5136-4d94-9f8f-015d10c9e69e")}
              title="🇬🇪 Georgia. Tbilisi"
              description="Photos from beautiful Tbilisi"
              id={2}
              date="30.3.2023"
              index={2}
            />
          </Link>
          <Link to="/feed/georgia">
            <PostCard
              image={genImageUrlById("021cd876-f163-4095-8a8b-ad6f3eb19f4a")}
              title={
                <div className="flex flex-row gap-2">
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
                  Ein Prat Nature Reserve trip
                </div>
              }
              description="Weekend morning trip to natural reserve"
              id={3}
              date="21.4.2023"
              index={3}
            />
          </Link>
        </div>
        <Link
          to="/feed"
          className="flex h-max w-max flex-row items-center gap-x-3 whitespace-nowrap rounded-lg px-3 py-2 font-shantell text-sm text-secondary hover:bg-lightGray hover:shadow-nav active:shadow-navActive md:text-base"
        >
          To all feed
          <Arrow
            className="h-[10px] fill-secondary md:h-[15px]"
            height="15px"
          />
        </Link>
      </div>
    </FaidInMotionContainer>
  );
}
