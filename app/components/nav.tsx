import React from "react";
import { NavLink, useMatches } from "@remix-run/react";
import Me from "~/sources/images/me.png";
import { motion } from "framer-motion";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const draw = {
  tap: {
    pathLength: 0.1,
    transition: {
      pathLength: { type: "spring", duration: 0.2, bounce: 0 },
    },
  },
  hidden: { pathLength: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 1;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 0.6, bounce: 0 },
      },
    };
  },
};

const Link = ({ id, children }: { id: string; children: any }) => {
  const { pathname } = useMatches()?.[1] || { pathname: "" };
  const [hover, setHover] = React.useState(false);
  const [tap, setTap] = React.useState(false);

  const isActive = (id: string) => {
    const splitted = pathname.split("/")?.[1] || "";
    return id === splitted;
  };
  const active = isActive(id);

  return (
    <NavLink
      onMouseDown={() => {
        console.log("down");
        setTap(true);
      }}
      onMouseUp={() => setTap(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseOutCapture={() => setTap(false)}
      to={`/${id}`}
      className={`transition-text relative flex h-full items-center rounded-md py-2 px-4 font-ignazio ${
        active ? "text-white" : "text-black"
      }`}
    >
      <span className="z-10">{children}</span>
      {isActive(id) ? (
        <motion.svg
          initial="hidden"
          animate="visible"
          viewBox="0 0 971 328"
          fill="none"
          className="absolute left-0 w-full object-contain"
        >
          <motion.path
            d="M64.5 168C90.669 86.4088 827.831 19.7389 854 101.33C896.5 233.839 176.496 101.33 176.496 214.308C176.496 279.5 820 294 906.5 168"
            variants={draw}
            stroke={colors.indigo["800"]}
            strokeWidth="128"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ) : null}
      {hover && !active ? (
        <motion.svg
          width="100%"
          initial="hidden"
          animate={tap ? "tap" : "visible"}
          viewBox="0 0 1116 369"
          fill="none"
          className="absolute left-0 w-full object-contain"
        >
          <motion.path
            d="M46 102.924C46 102.924 216.674 46.0001 372 46C596.5 45.9999 48.6414 206.161 213.5 275.986C387.5 349.684 513.5 46.0005 798.5 52.8616C1030.25 58.4407 434.588 245.928 628 311.056C824.161 377.11 1070 147.652 1070 147.652"
            variants={draw}
            stroke="#281cae"
            strokeOpacity="0.14"
            strokeWidth="91"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ) : null}
    </NavLink>
  );
};

export const Nav = () => {
  return (
    <header className="lg:px-22 2xl:px-42 mt-2 flex h-[60px] w-full flex-row items-center justify-between px-2 text-sm backdrop-blur-sm md:mt-4 md:h-[70px] md:px-12 md:text-base">
      <nav className="flex h-full flex-row items-center gap-x-0.5 overflow-auto whitespace-nowrap md:gap-x-2">
        <Link id="">Home</Link>
        <Link id="bike">Bike Blog</Link>
        <Link id="art">Some work</Link>
      </nav>
      <NavLink to="/about">
        <motion.img
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          whileHover={{ scale: 1.2, padding: 0 }}
          initial={{ padding: "5px" }}
          src={Me}
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 45px, 60px`}
          className="transition-bg mr-2 w-[45px] rounded-full bg-white shadow-2xl hover:bg-indigo-800 md:w-[60px]"
        />
      </NavLink>
    </header>
  );
};
