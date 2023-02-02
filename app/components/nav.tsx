import React from "react";
import { NavLink, useMatches } from "@remix-run/react";
import Me from "~/sources/images/me.png";
import { motion } from "framer-motion";
import defaultTheme from "tailwindcss/defaultTheme";

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
        ? "bg-blackBrush bg-[length:90%_100%] bg-no-repeat text-white"
        : "md:hover:bg-black text-black md:hover:text-white md:hover:shadow-sm"
    } transition`;
  };

  return (
    <header className="lg:px-22 2xl:px-42 mt-2 flex h-[60px] w-full flex-row items-center justify-between px-2 text-sm backdrop-blur-sm md:mt-4 md:h-[70px] md:px-12 md:text-base">
      <nav className="flex h-full flex-row items-center gap-x-0.5 overflow-auto whitespace-nowrap py-3 md:gap-x-2 md:py-5">
        <NavLink to="/" className={genLinkClassName("")}>
          Home
        </NavLink>
        <NavLink to="/bike" className={genLinkClassName("bike")}>
          Bike Blog
        </NavLink>
        <NavLink to="/art" className={genLinkClassName("art")}>
          Some work
        </NavLink>
      </nav>
      <NavLink to="/about">
        <motion.img
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          whileHover={{ scale: 1.2, padding: 0 }}
          initial={{ padding: "5px" }}
          src={Me}
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 45px, 60px`}
          className="transition-bg mr-2 w-[45px] rounded-full bg-white shadow-2xl hover:bg-primaryText md:w-[60px]"
        />
      </NavLink>
    </header>
  );
};
