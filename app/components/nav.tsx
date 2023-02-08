import React from "react";
import { NavLink, useMatches } from "@remix-run/react";
import Me from "~/sources/images/me-memoji.png";
import { motion } from "framer-motion";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import { useMobileDetect } from "~/use-device-detect-hook";
import AboutMe from "~/sources/images/aboutme.svg";
import { MotionNavLink } from "~/components/motion-nav-link";

const draw = {
  tap: {
    scale: 0.7,
    pathLength: 1,
    transition: {
      scale: { type: "spring", duration: 0.6, bounce: 0 },
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
  const mobileDetect = useMobileDetect();
  const isMobile = mobileDetect.isMobile();

  const isActive = (id: string) => {
    const splitted = pathname.split("/")?.[1] || "";
    return id === splitted;
  };
  const active = isActive(id);

  return (
    <MotionNavLink
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", duration: 0.2, bounce: 0 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to={`/${id}`}
      className={`transition-text relative flex items-center rounded-md font-ignazio ${
        active
          ? "w-24 text-white md:w-32"
          : "w-24 text-black hover:text-pink-600 md:w-28"
      }`}
    >
      <span className="z-10 mx-auto inline-block">{children}</span>
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
            stroke="#1313ff"
            strokeWidth="128"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ) : null}
      {hover && !active && !isMobile ? (
        <motion.svg
          fill="none"
          initial="hidden"
          viewBox="0 0 866 131"
          animate="visible"
          className="absolute left-2 -bottom-[60%]"
        >
          <motion.path
            d="M43 88s97.456-73.87 296.762-29.313C611.484 119.431 823 43 823 43"
            stroke={colors.pink["600"]}
            strokeWidth="50"
            strokeLinecap="round"
            variants={draw}
            strokeLinejoin="round"
          />
        </motion.svg>
      ) : null}
    </MotionNavLink>
  );
};

export const Nav = () => {
  return (
    <header className="lg:px-22 2xl:px-42 flex h-[60px] w-full flex-row items-center justify-between px-2 text-xs md:mt-4 md:h-[70px] md:px-12 md:text-base">
      <label>
        <img
          alt="'About me' handwriting text + arrow pointing to memoji avatar"
          src={AboutMe}
          className="md-[200px] absolute top-12 right-14 w-[120px] md:right-32 md:top-12 md:w-[150px] 2xl:w-[200px]"
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 120px, 200px`}
        />
        <span className="hidden">About me</span>
      </label>
      <nav className="flex h-full w-full flex-row items-center overflow-auto whitespace-nowrap md:gap-x-1">
        <Link id="">Home</Link>
        <Link id="bike">Bike Blog</Link>
        <Link id="art">Some work</Link>
      </nav>
      <NavLink to="/about">
        <motion.img
          alt="Memoji - embarrassing face width black cycling helmet"
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          whileHover={{ scale: 1.2, padding: "6px" }}
          initial={{ padding: "12px" }}
          src={Me}
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 50px, 70px`}
          className="transition-bg mr-2 h-[50px] w-[50px] rounded-full bg-white object-contain shadow-2xl hover:bg-[#1313ff] md:h-[70px] md:w-[70px]"
        />
      </NavLink>
    </header>
  );
};
