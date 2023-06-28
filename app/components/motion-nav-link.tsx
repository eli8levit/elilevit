import { motion } from "framer-motion";
import { Link, NavLink } from "@remix-run/react";
import React, { ReactNode } from "react";
import Arrow from "~/components/arrow";

// @ts-ignore
export const MotionNavLink = motion(NavLink);
export const MotionLink = motion(Link);

export const ArrowLink = ({
  to,
  className,
  children,
  isMobile = false,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  isMobile?: boolean;
}) => {
  return (
    <MotionLink
      {...(!isMobile && {
        whileHover: { scale: 1.05 },
      })}
      whileTap={{ scale: 0.96 }}
      transition={{
        scale: { type: "spring", stiffness: 500, damping: 20 },
        backgroundColor: { type: "easeInOut" },
      }}
      to={to}
      className={`flex h-max w-max flex-row items-center gap-x-3 whitespace-nowrap rounded-lg px-3 py-2 font-shantell text-sm text-secondary hover:bg-lightGray hover:shadow-nav active:shadow-navActive dark:hover:shadow-navDark md:text-base ${className}`}
    >
      {children}
      <Arrow className="h-[10px] fill-secondary md:h-[15px]" height="15px" />
    </MotionLink>
  );
};

export const BackHomeLink = ({
  to,
  className,
  isMobile = false,
}: {
  to: string;
  className?: string;
  isMobile?: boolean;
}) => {
  return (
    <MotionLink
      to={to}
      className={`mb-4 flex w-max flex-row items-baseline gap-2 rounded-md px-2 py-2 font-hubot text-sm text-zinc-600 hover:bg-lightGray hover:shadow-nav active:shadow-navActive 2xl:px-3 2xl:py-2 2xl:text-base ${className}`}
      preventScrollReset
      {...(!isMobile && {
        whileHover: { scale: 1.05 },
      })}
      whileTap={{ scale: 0.96 }}
      transition={{
        scale: { type: "spring", stiffness: 500, damping: 20 },
        backgroundColor: { type: "easeInOut" },
      }}
    >
      <Arrow className="rotate-180" />
      Back to home
    </MotionLink>
  );
};
