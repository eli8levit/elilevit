import { Link } from "~/components/link";
import React from "react";
import { motion } from "framer-motion";
import { draw } from "~/components/utils";

export const Footer = () => {
  return (
    <div className="mt-auto">
      <footer className="grid grid-cols-2 grid-rows-[auto_auto] items-center gap-y-2 gap-x-1 border-[0.5px] border-black border-opacity-10 bg-[rgba(0,0,255,0.02)] p-4 font-mona text-base font-normal text-black md:grid-cols-3 md:grid-rows-1 md:gap-y-4 2xl:text-xl">
        <div className="flex shrink-0 flex-col gap-1">
          <p>
            Created with{" "}
            <Link
              className="rounded-lg p-1 text-primary hover:bg-lightGray hover:shadow-nav md:p-2"
              href="https://remix.run/"
            >
              Remix
            </Link>
          </p>
          <p>
            Fonts{" "}
            <Link
              className="rounded-lg p-1 text-primary hover:bg-lightGray hover:shadow-nav md:p-2"
              href="https://www.collletttivo.it/"
            >
              Apfel
            </Link>{" "}
            §{" "}
            <Link
              className="rounded-lg p-1 text-primary hover:bg-lightGray hover:shadow-nav md:p-2"
              href="https://github.com/mona-sans"
            >
              Mona & Hubot Sans
            </Link>
          </p>
        </div>
        <motion.svg
          className="col-start-2 row-span-full mx-auto h-[60px] max-w-[100%] stroke-primary md:col-start-3 md:mx-0 md:ml-auto 2xl:h-[80px]"
          viewBox="0 0 1381 815"
          fill="none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.path
            d="M102 109c0 4.4 82 507 110 533.5s14-259.921 33.5-263C265 376.421 330 747 330 747M360 592l-1-2"
            strokeWidth="14"
            variants={draw}
            strokeLinecap="round"
          />
          <motion.path
            d="M463.211 808C423.402 518.447 361.273 241.541 361.273 66.553c0-174.987 120.128 594.4 138.288 515.406 18.161-78.994 37.931-222.049 0-208.485-37.93 13.564 59.267 280.537 73.491 227.541C587.276 548.019 654.444.558 554.086 7.057c-100.357 6.5 53.291 846.412 137.498 760.946 37.931-38.497 16.595-379.031 0-386.53-23.706 0-28.447 90.051 0 74.995 28.448-15.056 57.686-81.494 74.281-65.995 16.595 15.498-16.615 54.519 0 35.497 16.595-18.999 35.765-33.237 78.232-79.937 33.189-36.497-15.805 178.988 0 189.987C875.205 557.67 946.051 167.6 1188.5 139c73.5-8.67 168.5 32.5 183 84.5C1445.17 487.686 7 425.97 7 425.97"
            strokeWidth="14"
            strokeLinecap="round"
            variants={draw}
          />
        </motion.svg>
        <div className="flex items-center md:mx-auto md:gap-x-2">
          <Link
            href="https://github.com/eli8levit"
            className="rounded-lg bg-transparent p-3 hover:bg-lightGray hover:shadow-nav hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="h-[24px] w-[24px] stroke-primary 2xl:h-[30px] 2xl:w-[30px]"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <Link
            href="https://twitter.com/eli8levit"
            className="rounded-lg bg-transparent p-3 hover:bg-lightGray hover:shadow-nav hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="h-[24px] stroke-primary 2xl:h-[30px] 2xl:w-[30px]"
              fill="none"
            >
              <path d="M8.5,17c-2.73-.52-4.33-1.56-5-3"></path>
              <path d="M4.5,10c-1.15-1.92-1.7-5.38-1-6,3.1,2.5,6.12,4.09,9,4,0,0,0-5,4-5a4.38,4.38,0,0,1,3,1h3l-1,3a13.47,13.47,0,0,1-4,11c-5,5-13,4-16,0"></path>
              <path d="M5.5,14a7.57,7.57,0,0,1-3-5"></path>
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  );
};
