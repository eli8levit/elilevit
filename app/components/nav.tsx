import { Link } from "~/components/link";
import React from "react";
import Home from "~/sources/images/home.svg";

export const Nav = () => {
  return (
    <nav className="flex flex-row items-center gap-x-8 px-24 pt-12 pb-16 text-lg 2xl:px-44">
      <Link
        href="/"
        className="inline-flex flex-row items-center gap-x-2 font-sligoil text-secondaryText underline hover:text-primaryText"
      >
        <img src={Home} height="20px" className="h-[20px]" /> Home
      </Link>
      <Link href="#">Stuff</Link>
      <Link href="#">Archive</Link>
      <Link href="/bike">
        <span className="mb-2 inline-block text-3xl">🚲</span> Bike Blog
      </Link>
    </nav>
  );
};
