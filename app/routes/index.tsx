import React from "react";
import { ArrowLink, draw } from "~/components";
import { motion } from "framer-motion";
import Circle2 from "~/sources/images/grad.svg";
import Feed from "~/components/feed";
import { FaidInMotionContainer } from "~/components/layout";

export { loader } from "../use-mobile-loader";

export default function Index() {
  return (
    <>
      <FaidInMotionContainer className="content-container flex items-center pt-0 md:h-[500px] 2xl:h-[650px]">
        <div className="mb-10 grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-20 md:px-14 2xl:mb-20">
          <div className="md:mx-auto">
            <h1 className="z-10 mb-1 font-shantell text-2xl font-normal text-primary md:text-3xl 2xl:text-4xl">
              Hey, good to see you ♡
            </h1>
            <h2 className="heading mb-6 font-bold text-black dark:text-white">
              I'm Eli, Developer & Creator
            </h2>
            <p className="subheading max-w-[450px] leading-relaxed 2xl:max-w-[650px]">
              Here is my place to learn to beat my perfectionism and to tell
              about some things I like.
            </p>
          </div>
          <motion.svg
            className="-z-[10] row-start-1 ml-[50%] w-[500px] max-w-none -translate-x-[50%] md:mx-auto md:-translate-x-[100px] lg:w-[750px] lg:-translate-x-[200px] 2xl:w-[900px]"
            viewBox="0 0 2351 1537"
            fill="none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <g filter="url(#a)">
              <motion.path
                variants={draw}
                d="M1590.78 694.078s-55.88 62.764-102.4 61.159c-50.99-1.76-83.43-33.796-102.53-81.249-22.19-55.116-20.49-126.154 34.55-148.166 52.58-21.032 118.98 2.998 131.95 58.276 17.61 75.088-114.3 76.439-191.01 82.096-34.91 2.575-78.88-9.384-136.57 19.674-44.51 22.417-77.23 64.228-61.96 111.783 14.4 44.845 59.51 66.986 105.59 57.821 51.81-10.306 75.45-61.279 72.95-114.194-3.57-75.589-130.33-34.064-164.65-101.47-29.31-57.571-61.55-141.189-1.84-165.486 48.44-19.708 126.08 8.816 119.37 60.805-15.73 121.975-206.62 36.117-250.61 139.299-32.98 77.347 35.16 147.002-3.55 217.065m0 0c-52.874 70.457-175.624 74.289-247.695 81.477m247.695-81.477c38.25-69.229-90.769-94.918-156.63-90.06-42.055 3.102-93.839 14.922-112.682 51.516-19.356 37.59-23.532 124.524 21.617 120.021m247.695-81.477c-53.028 70.662-177.593 74.151-247.695 81.477m0 0c-46.816 3.453 19.287 472.262 19.287 472.262m-19.287-472.262c-45.149 4.503 72.071-7.188 0 0Z"
                stroke="url(#b)"
                strokeWidth="50"
                strokeLinecap="round"
                shapeRendering="crispEdges"
                className="opacity-90 dark:stroke-white dark:opacity-100"
              />
            </g>
            <g filter="url(#c)">
              <ellipse
                cx="464.614"
                cy="412.372"
                rx="464.614"
                ry="412.372"
                transform="scale(1.18098 .778) rotate(-45 1275.722 304.49)"
                fill="url(#d)"
              />
              <ellipse
                cx="1608.42"
                cy="941.566"
                rx="342.577"
                ry="194.605"
                fill="url(#e)"
              />
            </g>
            <defs>
              <radialGradient
                id="d"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(0 412.372 -464.614 0 464.614 412.372)"
              >
                <stop stopColor="#2C2CFE" stopOpacity=".9" />
                <stop offset="1" stopColor="#DB2877" stopOpacity=".41" />
                <stop offset="1" stopColor="#DB2877" />
              </radialGradient>
              <radialGradient
                id="e"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(0 194.605 -342.577 0 1608.42 941.566)"
              >
                <stop stopColor="#00F" />
                <stop offset="1" stopColor="#6060FF" />
              </radialGradient>
              <filter
                id="a"
                x="707.926"
                y="425.05"
                width="931.85"
                height="1075.18"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_439_18"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_439_18"
                  result="shape"
                />
              </filter>
              <filter
                id="c"
                x=".578"
                y=".699"
                width="2350.42"
                height="1535.47"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_439_18"
                />
              </filter>
              <linearGradient
                id="b"
                x1="1639.5"
                y1="679"
                x2="728.788"
                y2="684.937"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A9A9A9" />
                <stop offset=".082" />
                <stop offset=".939" />
                <stop offset="1" stopColor="#7E7E7E" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </FaidInMotionContainer>
      <Feed />
      <div className="content-container overflow-hidden pb-20 pt-0 md:mb-28 md:overflow-visible">
        <div className="relative rounded-2xl py-10 md:border-[0.5px] md:border-black md:border-opacity-10 md:bg-panel md:p-20 md:shadow-feed md:backdrop-blur-2xl">
          <img
            src={Circle2}
            className="absolute top-0 left-0 bottom-0 right-0 -z-[10] h-full w-full -translate-y-[100px] scale-[2] opacity-80 md:translate-y-0 md:scale-[1]"
          />
          <h3 className="mb-2 max-w-[700px] font-apfel text-3xl font-bold text-zinc-900 dark:text-zinc-300 2xl:text-4xl">
            Here you can feel save, no cookie popup will destruct you, no one
            will know you have been here 🤐
          </h3>
          <h3 className="font-mona text-xl font-light text-gray-500 md:text-2xl">
            Also I care about user privacy and don't use any analytic service
          </h3>
          <motion.svg
            className="mx-auto my-[100px] w-[200px] -translate-y-[20px] stroke-black md:my-[200px] md:w-[400px] 2xl:w-[600px]"
            fill="none"
            strokeOpacity="0.7"
            width="100%"
            initial="hidden"
            whileInView="visible"
            viewBox="0 0 884 325"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.path
              d="M34.5 260s22.5 18 71.5 4.5c40.92-11.274 51.5-30.826 74.5-33.5 19.877-2.311-8.645 27.628 17.017 52.538.311.302.673.586 1.042.815 26.366 16.366 56.437-3.546 82.941-30.853 15.77-16.248 31.034-58.996 44.625-60.991 1.221-.18 2.486-.342 3.7-.566C348.26 188.54 294.833 281 340 281c74 0 88-95 115-95 26.575 0-29.679 85.735-7.619 98.447.7.404 1.545.577 2.353.61C555.042 289.395 624.368 148.074 590.5 167c-34 19-44 86.5 20.5 98 58 6 144-156 113-143s-50 147.022 6 152.5c27.5 2.69 48.038-11.5 90.5-99.5S847 35 847 35"
              strokeWidth="58"
              strokeLinecap="round"
              variants={draw}
            />
          </motion.svg>
          <h4 className="ml-auto max-w-[700px] pb-2 text-right font-mona text-3xl font-bold text-zinc-900 dark:text-zinc-300 2xl:text-4xl">
            So far I don't have much content, but still you can checkout some
            things:
            <motion.svg
              fill="none"
              initial="hidden"
              width="100%"
              viewBox="0 0 1531 193"
              whileInView="visible"
              strokeOpacity="0.7"
              className="mt-6 mb-10 stroke-black"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.path
                d="M18 45.045s811-60.545 1084 0c418.74 92.867-87 196.457 69.5 73.956 156.5-122.501 341-73.956 341-73.956"
                strokeWidth="30"
                strokeLinecap="round"
                variants={draw}
              />
            </motion.svg>
          </h4>
          <ul className="mx-auto mb-16 flex w-max flex-col gap-2">
            <li>
              <ArrowLink to="/bike" className="!text-lg md:!text-xl">
                Visit my bike blog
              </ArrowLink>
            </li>
            <li>
              <ArrowLink to="/about" className="!text-lg md:!text-xl">
                Read more about me
              </ArrowLink>
            </li>
            <li>
              <ArrowLink to="/art" className="!text-lg md:!text-xl">
                See my projects
              </ArrowLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
