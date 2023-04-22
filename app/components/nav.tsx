import React from "react";
import { NavLink, useMatches } from "@remix-run/react";
import { motion } from "framer-motion";
import colors from "tailwindcss/colors";
import { MotionNavLink } from "~/components/motion-nav-link";
import config from "tailwind.config";

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

const Link = ({
  id,
  children,
  active,
  isMobile,
}: {
  id: string;
  children: any;
  active: boolean;
  isMobile: boolean;
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <MotionNavLink
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", duration: 0.2, bounce: 0 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to={`/${id}`}
      className={`transition-text relative flex w-24 items-center rounded-md font-mona font-normal md:w-32 ${
        active ? "text-white" : "text-gray-700 hover:text-pink-600"
      }`}
    >
      <span className="mx-auto inline-block">{children}</span>
      {hover && !active && !isMobile ? (
        <motion.svg
          fill="none"
          initial="hidden"
          viewBox="0 0 866 131"
          animate="visible"
          className="absolute left-2 -bottom-[80%] -z-10"
        >
          <motion.path
            d="M43 88s97.456-73.87 296.762-29.313C611.484 119.431 823 43 823 43"
            stroke={colors.pink["600"]}
            strokeWidth="40"
            strokeLinecap="round"
            variants={draw}
            strokeLinejoin="round"
          />
        </motion.svg>
      ) : null}{" "}
      {active ? (
        <motion.svg
          initial="hidden"
          animate="visible"
          viewBox="0 0 971 328"
          fill="none"
          className="absolute left-0 -z-10 w-full object-contain"
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
    </MotionNavLink>
  );
};

export const Nav = ({
  memojiId,
  isMobile,
}: {
  memojiId: string;
  isMobile: boolean;
}) => {
  const { pathname } = useMatches()?.[1] || { pathname: "" };
  const isActive = (id: string) => {
    const splitted = pathname.split("/")?.[1] || "";
    return id === splitted;
  };

  return (
    <header className="lg:px-22 2xl:px-42 h-[65px] px-2 text-xs md:mt-4 md:h-[70px] md:px-12 md:text-sm 2xl:h-[80px]">
      <nav className="flex h-full w-full flex-row items-center whitespace-nowrap md:gap-x-1">
        <Link isMobile={isMobile} id="" active={isActive("")}>
          Home
        </Link>
        <Link isMobile={isMobile} id="bike" active={isActive("bike")}>
          Bike Blog
        </Link>
        <Link isMobile={isMobile} id="art" active={isActive("art")}>
          Some work
        </Link>

        <NavLink to="/about" className="ml-auto">
          <motion.video
            playsInline
            src={`https://ucarecdn.com/${memojiId}/`}
            autoPlay
            width="300px"
            height="300px"
            muted
            transition={{
              scale: { type: "spring", stiffness: 500, damping: 20 },
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={
              isActive("about")
                ? {}
                : {
                    scale: 1.3,
                    border: `3px solid ${config.theme.extend.colors.primary}`,
                  }
            }
            style={isActive("about") ? { boxShadow: "0 0 0 3px #0000ff" } : {}}
            className="transition-bg mr-2 h-[55px] w-[55px] rounded-full bg-white shadow-2xl md:h-[70px] md:w-[70px] 2xl:h-[80px] 2xl:w-[80px]"
          ></motion.video>
          <span className="hidden">About me</span>
        </NavLink>
      </nav>
    </header>
  );
};
