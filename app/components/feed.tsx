import { Link } from "@remix-run/react";
import Arrow from "~/components/arrow";
import { genImageUrlById } from "~/utilities";
import Bamba from "~/sources/images/bamba-site.jpg";

import React from "react";
import { FaidInMotionContainer } from "~/components/layout";

import { PostCard } from "~/components/post-card";

export default function Feed() {
  return (
    <FaidInMotionContainer className="content-container mb-6 pt-6">
      <div className="relative rounded-2xl border-opacity-10 py-6 md:p-20 md:px-6 md:py-10">
        <h3
          id="latest-stuff"
          className="mb-10 flex w-max flex-row font-shantell text-3xl font-medium text-black opacity-60 md:text-4xl"
        >
          Latest stuff ↓
        </h3>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Link to="/feed/bamba">
            <PostCard
              className="!w-full max-w-none"
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
              className="!w-full max-w-none"
              image={genImageUrlById("24a1eddf-5136-4d94-9f8f-015d10c9e69e")}
              title="🇬🇪 Georgia. Tbilisi"
              description="Photos from beautiful Tbilisi"
              id={2}
              date="30.3.2023"
              index={2}
            />
          </Link>
        </div>
        <Link
          to="/feed"
          className="mx-auto mt-10 flex w-max flex-row items-center gap-x-3 whitespace-nowrap rounded-lg px-3 py-2 font-hubot text-sm text-secondary hover:bg-lightGray hover:shadow-nav active:shadow-navActive md:text-base"
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
