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
    return `flex font-ignazio h-full drop-shadow-menu items-center rounded-md px-2.5 text-indigo-900 ${
      active
        ? "bg-cardBrush bg-[center_left_5px] bg-contain bg-no-repeat text-white drop-shadow-menuActive"
        : "hover:bg-indigo-700 hover:text-white hover:shadow-sm"
    }  transition`;
  };

  return (
    <div className="flex h-[60px] flex-row items-center justify-between gap-x-2 px-2 pl-0 text-sm shadow-sm shadow-nav backdrop-blur-sm md:h-[70px] md:px-24 md:text-base 2xl:px-44">
      <nav className="flex h-full flex-row items-center gap-x-2 overflow-auto whitespace-nowrap py-3 md:py-5">
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
          Some art
        </a>
      </nav>
      <Clock />
    </div>
  );
};
