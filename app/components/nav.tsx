import React from "react";
import { useMatches } from "@remix-run/react";
import Clock from "~/components/clock";

export const Nav = () => {
  const { pathname } = useMatches()?.[1] || { pathname: "" };

  const isActive = (id: string) => {
    const splitted = pathname.split("/")?.[1] || "";
    return id === splitted;
  };

  const genLinkClassName = (id: string) => {
    const active = isActive(id);
    return `flex font-ignazio h-full items-center rounded-md px-2.5 ${
      active
        ? "bg-cardBrush bg-[length:90%_100%] bg-no-repeat text-white"
        : "md:hover:bg-black text-black md:hover:text-white md:hover:shadow-sm"
    } transition`;
  };

  return (
    <div className="lg:px-22 2xl:px-42 flex h-[60px] w-full flex-row items-center justify-between gap-x-2 px-2 text-sm backdrop-blur-sm md:h-[70px] md:px-12 md:text-base ">
      <nav className="flex h-full flex-row items-center gap-x-2 overflow-auto whitespace-nowrap py-3 md:w-full md:px-6 md:py-5">
        <a href="/" className={genLinkClassName("")}>
          Home
        </a>
        <a href="/bike" className={genLinkClassName("bike")}>
          Bike Blog
        </a>
        <a href="/about" className={genLinkClassName("about")}>
          What is it?
        </a>
        <a href="/art" className={genLinkClassName("art")}>
          Some work
        </a>
      </nav>
      <Clock />
    </div>
  );
};
