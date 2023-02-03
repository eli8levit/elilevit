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
    return `flex py-2 px-4 font-ignazio h-full items-center rounded-md transition-all ${
      active
        ? "bg-blackBrush bg-contain bg-center bg-no-repeat text-white"
        : "text-black hover:bg-hoverNavBrush bg-contain bg-center bg-no-repeat"
    }`;
  };

  return (
    <header className="lg:px-22 2xl:px-42 mt-2 flex h-[60px] w-full flex-row items-center justify-between px-2 text-sm backdrop-blur-sm md:mt-4 md:h-[70px] md:px-12 md:text-base">
      <nav className="flex h-full flex-row items-center gap-x-0.5 overflow-auto whitespace-nowrap md:gap-x-2">
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
          className="transition-bg mr-2 w-[45px] rounded-full bg-white shadow-2xl hover:bg-secondaryBg md:w-[60px]"
        />
      </NavLink>
    </header>
  );
};
