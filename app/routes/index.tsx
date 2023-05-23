import React from "react";
import { draw } from "~/components";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import Circle from "~/sources/images/grad2.svg";
import Circle2 from "~/sources/images/grad.svg";
import Feed from "~/components/feed";
import Arrow from "~/components/arrow";
import { FaidInMotionContainer } from "~/components/layout";

export { loader } from "../use-mobile-loader";

export default function Index() {
  return (
    <>
      <FaidInMotionContainer className="content-container flex items-center pt-10 md:h-[500px]">
        <img
          src={Circle}
          className="absolute left-[50%] -top-[200px] -z-[10] h-max w-[700px] max-w-[700px] -translate-x-[50%] opacity-50 md:h-[1600px] md:w-full md:max-w-full"
        />
        <div className="mb-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-20 md:px-14">
          <div className="mx-auto">
            <h1 className="z-10 mb-1 font-shantell text-2xl font-normal text-primary md:text-3xl 2xl:text-4xl">
              Hey, good to see you ♡
            </h1>
            <h2 className="heading mb-6 font-bold text-black">
              I'm Eli, Developer & Creator
            </h2>
            <p className="subheading max-w-[450px] leading-relaxed">
              Here is my place to learn to beat my perfectionism and to tell
              about some things I like.
            </p>
          </div>
          <motion.svg
            viewBox="0 0 569 629"
            fill="none"
            className="row-start-1 mx-auto block h-[180px] max-w-[90%] stroke-[rgba(0,0,0,0.4)] md:h-[300px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.path
              d="M550.758 177.014s-37.916 36.648-67 33.5c-31.876-3.449-50.722-24.965-60.5-55.5-11.357-35.465-7.01-79.78 28.5-91 33.928-10.719 74.428 7.358 80 42.5 7.567 47.736-75.168 42.5-123.5 42.5-22 0-49-9.5-86.5 6-28.929 11.958-51.373 36.578-44 67 6.952 28.688 34.203 44.604 63.5 41 32.946-4.052 50.119-34.817 51-68 1.259-47.401-80.107-27.294-98.5-70.999-15.709-37.329-32.044-91.07 6.5-103.5 31.265-10.084 78.606 11.32 72 43.5-15.5 75.499-131.16 13.046-163.5 75.5C184.515 186.331 224 233 196.499 275m0 0c-36.394 41.593-113.5 38.33-159 39.5m159-39.5c27.173-41.5-52.499-63.5-93.999-63.5-26.5 0-59.5 5-73 27-13.869 22.599-20.504 76.733 8 76M196.499 275c-36.499 41.714-114.727 38.153-159 39.5m0 0c-29.5 0-9.741 296.014-9.741 296.014M37.5 314.5c-28.504.733 45.5-1.17 0 0Z"
              strokeWidth="38"
              strokeLinecap="round"
              variants={draw}
            />
          </motion.svg>
        </div>
      </FaidInMotionContainer>
      <Feed />
      <div className="content-container relative mb-8 pb-20 pt-0 md:mb-28">
        <img
          src={Circle2}
          className="absolute left-[50%] top-[40%] -z-[10] h-[550px] w-[600px] max-w-[600px] -translate-y-[50%] -translate-x-[50%] opacity-80 md:top-0 md:h-[1200px] md:w-full md:max-w-full md:translate-y-0"
        />
        <div className="rounded-2xl border-[0.5px] border-black border-opacity-10 bg-panel p-6 shadow-feed backdrop-blur-2xl md:p-20">
          <h3 className="mb-2 max-w-[700px] font-apfel text-3xl font-bold text-zinc-900 2xl:text-4xl">
            Here you can feel save, no cookie popup will destruct you, no one
            will know you have been here 🤐
          </h3>
          <h3 className="font-mona text-xl font-light text-gray-500 md:text-2xl">
            Also I care about user privacy and don't use any analytic service
          </h3>
          <motion.svg
            className="mx-auto my-[100px] w-[200px] -translate-y-[20px] stroke-[rgba(0,0,0,0.3)] md:my-[200px] md:w-[400px]"
            fill="none"
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
          <h4 className="ml-auto max-w-[700px] pb-2 text-right font-mona text-3xl font-bold text-zinc-900 2xl:text-4xl">
            So far I don't have much content, but still you can checkout some
            things:
            <motion.svg
              fill="none"
              initial="hidden"
              width="100%"
              viewBox="0 0 1531 193"
              whileInView="visible"
              className="mt-6 mb-10 stroke-[rgba(0,0,0,0.3)]"
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
          <ul className="mx-auto mb-16 flex w-max flex-col font-hubot text-lg md:text-2xl">
            <li>
              <Link
                className="flex flex-row items-center gap-x-2 rounded-lg p-3 text-secondary hover:bg-lightGray hover:decoration-primary hover:shadow-nav active:shadow-navActive"
                to="/bike"
              >
                Visit my bike blog
                <Arrow className="fill-secondary" width="18px" />
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row items-center gap-x-2 rounded-lg p-3 text-secondary hover:bg-lightGray hover:decoration-primary hover:shadow-nav active:shadow-navActive"
                to="/about"
              >
                Read more about me
                <Arrow className="fill-secondary" width="18px" />
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row items-center gap-x-2 rounded-lg p-3 text-secondary hover:bg-lightGray hover:decoration-primary hover:shadow-nav active:shadow-navActive"
                to="/art"
              >
                See my projects
                <Arrow className="fill-secondary" width="18px" />
              </Link>
            </li>
          </ul>
        </div>
        {/*<div className="content-container">*/}
        {/*  <h5 className="mb-4 font-monaWide text-xl">*/}
        {/*    Things I created recently*/}
        {/*  </h5>*/}
        {/*  <img*/}
        {/*    src={Cubism}*/}
        {/*    className="h-[500px] rounded-xl object-contain shadow-xl"*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </>
  );
}
