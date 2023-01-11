import { Link } from "~/components/link";
import React from "react";
import End from "~/sources/images/end.png";

export const Footer = () => (
  <div className="mt-auto">
    <img src={End} width="250px" className="my-16 mx-auto md:my-24" />
    <footer className="flex w-full items-center gap-y-2 gap-x-2 overflow-auto whitespace-nowrap px-4 py-6 font-ignazio text-sm text-primaryText md:justify-center md:gap-x-4 md:p-6 md:text-base">
      <span>
        Created with ❤️ with{" "}
        <Link
          className="underline hover:text-indigo-600"
          href="https://remix.run/"
        >
          Remix
        </Link>
      </span>
      <span>|</span>
      <span>
        Fonts{" "}
        <Link
          className="underline hover:text-indigo-600"
          href="https://typefaces.temporarystate.net/preview/Wremena"
        >
          Wremena
        </Link>{" "}
        &{" "}
        <Link
          className="underline hover:text-indigo-600"
          href="https://velvetyne.fr/fonts/sligoil/"
        >
          Sligoil
        </Link>
      </span>
      <span className="font-ignazio text-blue-900">|</span>
      <Link
        className="underline hover:text-indigo-600"
        href="https://twitter.com/eli8levit"
      >
        My Twitter
      </Link>
    </footer>
  </div>
);
