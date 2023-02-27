import { Link } from "~/components/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="mt-auto pt-24 md:pt-48">
      <footer className="mx-auto grid grid-cols-1 grid-cols-[3fr_1fr] grid-rows-2 items-center gap-y-2 bg-[#0000FF] p-6 font-mona text-xl font-semibold text-white md:grid-cols-[max-content_auto] md:p-12 md:px-0 md:text-2xl">
        <p className="md:ml-12">
          Created with{" "}
          <Link
            className="text-blue-200 hover:text-blue-400"
            href="https://remix.run/"
          >
            Remix
          </Link>
        </p>
        <p className="md:ml-12">
          Fonts{" "}
          <Link
            className="text-blue-200 hover:text-blue-400"
            href="https://www.collletttivo.it/"
          >
            Apfel
          </Link>{" "}
          §{" "}
          <Link
            className="text-blue-200 hover:text-blue-400"
            href="https://www.collletttivo.it/"
          >
            Ignazio
          </Link>
        </p>
        <div className="col-start-2 row-span-full mx-auto flex items-center md:mr-[50vw] md:translate-x-[50%] md:gap-x-2">
          <Link
            href="https://github.com/eli8levit"
            className="rounded-lg bg-transparent p-3 hover:bg-blue-700 hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-[24px] w-[24px] md:h-[35px] md:w-[35px]"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <Link
            href="https://twitter.com/eli8levit"
            className="rounded-lg bg-transparent p-3 hover:bg-blue-700 hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-[24px] h-[24px] md:h-[35px] md:w-[35px]"
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
