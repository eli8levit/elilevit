import React from "react";
import { AnimatedText, draw, Link } from "~/components";
import { FaidInMotionContainer } from "~/components/layout";
import Heart from "~/sources/images/heart.png";
import { motion } from "framer-motion";
import config from "../../tailwind.config";
export { loader } from "../use-mobile-loader";

export default function Index() {
  return (
    <>
      <div className="content-container overflow-x-hidden">
        <h1 className="heading mb-2">
          <AnimatedText>Hey, good to see you!</AnimatedText>
        </h1>
        <FaidInMotionContainer>
          <h2 className="mb-4 text-left font-apfel text-6xl text-2xl font-bold text-black md:mb-6 md:text-8xl md:text-4xl">
            <AnimatedText>I'm Eli, Developer & Creator</AnimatedText>
          </h2>
          <p className="max-w-[600px] font-mona text-2xl font-normal text-gray-700 md:mt-2 md:text-3xl">
            Hope I won't be lazy like with previous one and will publish some
            nice things.
          </p>
        </FaidInMotionContainer>
      </div>
      <motion.svg
        className="mx-auto my-24 h-[180px] w-full md:h-[250px]"
        fill="none"
        initial="hidden"
        animate="visible"
        viewBox="0 0 884 325"
      >
        <motion.path
          stroke="#0000ff"
          d="M34.5 260s22.5 18 71.5 4.5c40.92-11.274 51.5-30.826 74.5-33.5 19.877-2.311-8.645 27.628 17.017 52.538.311.302.673.586 1.042.815 26.366 16.366 56.437-3.546 82.941-30.853 15.77-16.248 31.034-58.996 44.625-60.991 1.221-.18 2.486-.342 3.7-.566C348.26 188.54 294.833 281 340 281c74 0 88-95 115-95 26.575 0-29.679 85.735-7.619 98.447.7.404 1.545.577 2.353.61C555.042 289.395 624.368 148.074 590.5 167c-34 19-44 86.5 20.5 98 58 6 144-156 113-143s-50 147.022 6 152.5c27.5 2.69 48.038-11.5 90.5-99.5S847 35 847 35"
          strokeWidth="68"
          strokeLinecap="round"
          variants={draw}
        />
      </motion.svg>
      <div className="content-container max-w-[1200px] md:mt-20 2xl:max-w-[1600px]">
        <h3 className="mb-4 font-apfel text-5xl font-bold text-black md:text-6xl">
          Here you can feel save, no cookie popup will destruct you{" "}
          <img src={Heart} className="inline-block" width="60px" />
        </h3>
        <h3 className="font-apfel text-4xl font-light text-black md:text-5xl">
          Also I care about privacy and use{" "}
          <Link
            className="font-bold text-[#0000FF] hover:text-blue-700"
            href="https://usefathom.com/ref/EVUCYP"
          >
            Fathom
          </Link>{" "}
          service for analytics
        </h3>
        <motion.svg
          viewBox="0 0 569 629"
          height="400px"
          fill="none"
          className="mx-auto mt-32 mb-28 block stroke-primary"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M550.758 177.014s-37.916 36.648-67 33.5c-31.876-3.449-50.722-24.965-60.5-55.5-11.357-35.465-7.01-79.78 28.5-91 33.928-10.719 74.428 7.358 80 42.5 7.567 47.736-75.168 42.5-123.5 42.5-22 0-49-9.5-86.5 6-28.929 11.958-51.373 36.578-44 67 6.952 28.688 34.203 44.604 63.5 41 32.946-4.052 50.119-34.817 51-68 1.259-47.401-80.107-27.294-98.5-70.999-15.709-37.329-32.044-91.07 6.5-103.5 31.265-10.084 78.606 11.32 72 43.5-15.5 75.499-131.16 13.046-163.5 75.5C184.515 186.331 224 233 196.499 275m0 0c-36.394 41.593-113.5 38.33-159 39.5m159-39.5c27.173-41.5-52.499-63.5-93.999-63.5-26.5 0-59.5 5-73 27-13.869 22.599-20.504 76.733 8 76M196.499 275c-36.499 41.714-114.727 38.153-159 39.5m0 0c-29.5 0-9.741 296.014-9.741 296.014M37.5 314.5c-28.504.733 45.5-1.17 0 0Z"
            strokeWidth="35"
            strokeLinecap="round"
            variants={draw}
          />
        </motion.svg>
        <h4 className="pb-2 font-apfel text-5xl text-black md:text-6xl">
          So far I don't have much content, but still can can checkout some
          things:
        </h4>
        <motion.svg
          fill="none"
          initial="hidden"
          width="100%"
          viewBox="0 0 1531 193"
          animate="visible"
          className="mb-10"
        >
          <motion.path
            d="M18 45.045s811-60.545 1084 0c418.74 92.867-87 196.457 69.5 73.956 156.5-122.501 341-73.956 341-73.956"
            stroke={config.theme.extend.colors.secondary}
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <linearGradient id="myGradient">
            <stop offset="5%" stop-color={config.theme.extend.colors.primary} />
            <stop
              offset="95%"
              stop-color={config.theme.extend.colors.secondary}
            />
          </linearGradient>
        </motion.svg>
        <ul className="mb-16 flex flex-col gap-y-2 font-mona text-3xl font-medium md:gap-y-8 md:pl-4 md:pl-16 md:text-4xl">
          <li>
            <span className="font-semibold text-secondary">1.</span> Visit my
            bike blog
          </li>
          <li className="ml-2 md:ml-12">
            <span className="font-semibold text-secondary">2.</span> Read more
            about me
          </li>
          <li className="ml-4 md:ml-24">
            <span className="font-semibold text-secondary">3.</span> See my
            projects
          </li>
        </ul>
      </div>
    </>
  );
}
