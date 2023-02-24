import { Link } from "~/components/link";
import React from "react";
import { motion } from "framer-motion";
const colors = require("tailwindcss/colors");

export const Footer = () => {
  return (
    <div className="mt-auto pt-24 md:pt-48">
      <footer className="mx-auto grid grid-cols-1 grid-rows-2 items-center px-8 font-mona text-sm text-gray-500 md:h-14 md:grid-cols-2 md:grid-rows-1 md:text-lg">
        <div className="mx-auto">
          <Link
            className="ml-4 inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-300"
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.div>
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-300"
            href="https://twitter.com/eli8levit"
          >
            <motion.div
              whileHover={{ scale: 1.2, color: colors.pink["400"] }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
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
        </div>
        <div className="mx-auto flex flex-row flex-wrap items-center gap-1 md:flex-nowrap">
          Created with{" "}
          <Link
            className="text-blue-800 hover:text-[#0000ff]"
            href="https://remix.run/"
          >
            Remix
          </Link>
          Fonts{" "}
          <Link
            className="text-blue-800 hover:text-[#0000ff]"
            href="https://www.collletttivo.it/"
          >
            Apfel
          </Link>{" "}
          &{" "}
          <Link
            className="text-blue-800 hover:text-[#0000ff]"
            href="https://www.collletttivo.it/"
          >
            § Ignazio
          </Link>
        </div>
      </footer>
    </div>
  );
};
