import { Link } from "@remix-run/react";
import Arrow from "~/components/arrow";
import { genImageUrlById } from "~/utilities";
import Bamba from "~/sources/images/bamba-site.jpg";

import React from "react";
import { FaidInMotionContainer } from "~/components/layout";

import { PostCard } from "~/components/post-card";

export default function Feed() {
  return (
    <FaidInMotionContainer className="content-container mb-6 pt-6 md:mb-12">
      <div className="relative rounded-2xl py-6 md:p-20 md:px-6 md:py-10">
        <h3
          id="latest-stuff"
          className="mx-auto mb-6 flex w-max flex-row font-shantell text-2xl text-primary md:mb-12"
        >
          Latest stuff ↓
        </h3>
        <div className="flex flex-row items-center gap-8 overflow-auto py-4 md:overflow-visible">
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
      </div>
    </FaidInMotionContainer>
  );
}
