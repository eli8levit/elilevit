import React from "react";
import { NavLink, useMatches } from "@remix-run/react";
import { motion } from "framer-motion";
import { MotionNavLink } from "~/components/motion-nav-link";

const Link = ({
  id,
  children,
  active,
}: {
  id: string;
  children: any;
  active: boolean;
  isMobile: boolean;
}) => {
  return (
    <MotionNavLink
      transition={{ type: "spring", duration: 0.2, bounce: 0 }}
      to={`/${id}`}
      className={`transition-text relative flex h-max w-max items-center rounded-lg p-2 font-hubot font-normal ${
        !active
          ? "hover:bg-lightGray hover:shadow-nav active:shadow-navActive"
          : ""
      } ${active ? "text-primary" : "text-zinc-700"}`}
    >
      {children}
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
      <nav className="flex h-full w-full flex-row items-center gap-1 whitespace-nowrap md:gap-2">
        <Link isMobile={isMobile} id="" active={isActive("")}>
          Home
        </Link>
        <Link isMobile={isMobile} id="bike" active={isActive("bike")}>
          Bike
        </Link>
        <Link isMobile={isMobile} id="art" active={isActive("art")}>
          Work
        </Link>
        <Link isMobile={isMobile} id="feed" active={isActive("feed")}>
          Feed
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
                  }
            }
            style={isActive("about") ? { border: "0.5px solid #0000ff" } : {}}
            className="transition-bg mr-2 h-[55px] w-[55px] rounded-full bg-white shadow-2xl md:h-[70px] md:w-[70px] 2xl:h-[80px] 2xl:w-[80px]"
          ></motion.video>
          <span className="hidden">About me</span>
        </NavLink>
      </nav>
    </header>
  );
};
