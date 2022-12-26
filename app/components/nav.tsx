import React from "react";
import { useMatches } from "@remix-run/react";
import Clock from "~/components/clock";

export const Nav = () => {
  const { pathname } = useMatches()?.[1] || { pathname: "" };

  console.log(pathname, "pathname");

  const isActive = (id: string) => {
    const splitted = pathname.split("/")?.[1] || "";
    return id === splitted;
  };

  const genLinkClassName = (id: string) => {
    const active = isActive(id);
    return `flex font-sligoil font-light h-full text-sm items-center rounded-md px-2.5 ${
      active ? "text-pinkLight" : "text-white"
    }  transition hover:bg-white hover:text-black hover:shadow-lg hover:shadow-xl`;
  };

  return (
    <div className="flex h-[70px] flex-row items-center justify-between bg-blueNoise bg-contain py-4 px-24 shadow-sm 2xl:px-44">
      <nav className="flex h-full flex-row items-center gap-x-2">
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
