import React from "react";
import { NavLink, useMatches } from "@remix-run/react";
import { motion } from "framer-motion";
import { MotionNavLink } from "~/components/motion-nav-link";
import config from "tailwind.config";

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
  const [hover, setHover] = React.useState(false);

  return (
    <MotionNavLink
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", duration: 0.2, bounce: 0 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to={`/${id}`}
      className={`transition-text relative flex h-max w-max items-center rounded-lg ${
        hover && !active ? "bg-[rgba(1,1,1,.01)] shadow-nav" : ""
      } ${
        active ? "font-semibold text-primary" : ""
      } p-2 font-mona font-normal`}
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
