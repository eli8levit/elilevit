import { Link } from "~/components/link";
import React from "react";
import End from "~/sources/images/end.png";
import { motion } from "framer-motion";
const colors = require("tailwindcss/colors");

export const Footer = () => {
  return (
    <div className="mt-auto pt-24 md:mb-10 md:pt-44">
      <footer className="mx-auto flex h-20 flex-row items-center gap-y-2 overflow-auto rounded-t-3xl bg-white font-apfel text-base text-gray-400 shadow-2xl md:h-14 md:w-max md:rounded-3xl">
        <div className="flex flex-row flex-wrap items-center gap-1 px-6 md:flex-nowrap md:px-12">
          Created with{" "}
          <Link
            className="text-blue-600 hover:text-[#0000ff]"
            href="https://remix.run/"
          >
            Remix
          </Link>
          <img src={End} width="40px" alt="Blue line in shape of wave" />
          Fonts{" "}
          <Link
            className="text-blue-600 hover:text-[#0000ff]"
            href="https://www.collletttivo.it/"
          >
            Apfel
          </Link>{" "}
          &{" "}
          <Link
            className="text-blue-600 hover:text-[#0000ff]"
            href="https://www.collletttivo.it/"
          >
            Ignazio
          </Link>
        </div>
        <Link
          className="ml-auto inline-flex h-full w-14 flex-shrink-0 items-center justify-center bg-gradient-to-b from-blue-500 to-[#0000ff] text-white shadow-md transition-all"
          href="https://github.com/eli8levit"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: colors.pink["400"] }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </motion.div>
        </Link>
        <Link
          className="inline-flex h-full w-14 flex-shrink-0 items-center justify-center bg-gradient-to-b from-blue-500 to-[#0000ff] text-white shadow-md transition-all"
          href="https://twitter.com/eli8levit"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: colors.pink["400"] }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              width="24"
              height="24"
              stroke="currentColor"
              fill="none"
            >
              <path d="M8.5,17c-2.73-.52-4.33-1.56-5-3"></path>
              <path d="M4.5,10c-1.15-1.92-1.7-5.38-1-6,3.1,2.5,6.12,4.09,9,4,0,0,0-5,4-5a4.38,4.38,0,0,1,3,1h3l-1,3a13.47,13.47,0,0,1-4,11c-5,5-13,4-16,0"></path>
              <path d="M5.5,14a7.57,7.57,0,0,1-3-5"></path>
            </svg>
          </motion.div>
        </Link>
      </footer>
    </div>
  );
};
