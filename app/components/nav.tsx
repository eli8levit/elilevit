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
      className={`transition-text relative flex h-full items-center rounded-md font-ignazio ${
        active
          ? "w-24 text-white md:w-32"
          : "w-24 text-black active:text-indigo-800 md:w-28"
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
          <g filter="url(#a)">
            <motion.path
              d="M64.5 168C90.669 86.409 827.831 19.739 854 101.33c42.5 132.509-677.504 0-677.504 112.978C176.496 279.5 820 294 906.5 168"
              stroke-width="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              variants={draw}
              stroke={colors.indigo["700"]}
              strokeWidth="128"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter
              id="a"
              x=".483"
              y="-19.821"
              width="970.023"
              height="349.175"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-20" />
              <feGaussianBlur stdDeviation="35" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
              <feBlend in2="shape" result="effect1_innerShadow_28_4" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix values="0 0 0 0 0.772549 0 0 0 0 0.792157 0 0 0 0 1 0 0 0 0.9 0" />
              <feBlend
                in2="effect1_innerShadow_28_4"
                result="effect2_innerShadow_28_4"
              />
            </filter>
          </defs>
        </motion.svg>
      ) : null}
      {hover && !active && !isMobile ? (
        <motion.svg
          width="100%"
          initial="hidden"
          animate="visible"
          viewBox="0 0 1116 369"
          fill="none"
          className="absolute left-0 w-full object-contain"
        >
          <motion.path
            d="M46 102.924C46 102.924 216.674 46.0001 372 46C596.5 45.9999 48.6414 206.161 213.5 275.986C387.5 349.684 513.5 46.0005 798.5 52.8616C1030.25 58.4407 434.588 245.928 628 311.056C824.161 377.11 1070 147.652 1070 147.652"
            variants={draw}
            stroke="#281cae"
            strokeWidth="90"
            strokeOpacity="0.14"
            strokeLinecap="round"
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
          whileHover={{ scale: 1.2, padding: "4px" }}
          initial={{ padding: "12px" }}
          src={Me}
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 50px, 70px`}
          className="transition-bg mr-2 h-[50px] w-[50px] rounded-full bg-white from-indigo-500 to-indigo-800 object-contain shadow-2xl hover:bg-green-800 hover:bg-gradient-to-b md:h-[70px] md:w-[70px]"
        />
      </NavLink>
    </header>
  );
};
