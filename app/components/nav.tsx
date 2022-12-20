import { Link } from "~/components/link";
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
    return `flex font-sligoil font-light h-full items-center rounded-md px-2.5 ${
      active ? "text-pinkLight text-md" : "text-white text-sm"
    }  transition hover:bg-white hover:text-black hover:shadow-lg hover:shadow-xl`;
  };

  return (
    <div className="mb-24 flex h-[70px] flex-row items-center justify-between bg-blueNoise bg-contain py-2 px-24 shadow-sm 2xl:mb-32 2xl:px-44">
      <nav className="flex h-full flex-row items-center gap-x-2">
        <a href="/" className={genLinkClassName("")}>
          <span className="mr-1 inline-block text-base">🏠</span>Home
        </a>
        <a href="/bike" className={genLinkClassName("bike")}>
          <span className="mr-1 inline-block text-base">🚲</span>Bike Blog
        </a>
        <a href="/about" className={genLinkClassName("about")}>
          <span className="mr-1 inline-block text-base">❓</span>What is it?
        </a>
        <a href="/art" className={genLinkClassName("art")}>
          <span className="mr-1 inline-block text-base">🖼️</span>Some art
        </a>
      </nav>
      <Clock />
    </div>
  );
};
