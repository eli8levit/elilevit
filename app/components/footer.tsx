import { Link } from "~/components/link";
import React from "react";
import End from "~/sources/images/end.png";

export const Footer = () => (
  <div className="mt-auto pt-24 md:pt-44">
    <footer className="flex w-full items-center gap-y-2 gap-x-2 overflow-auto whitespace-nowrap px-4 py-6 font-ignazio text-sm text-primaryText md:justify-center md:p-6">
      <span>
        Created with ❤️ with{" "}
        <Link
          className="underline hover:text-indigo-600"
          href="https://remix.run/"
        >
          Remix
        </Link>
      </span>
      <img src={End} width="40px" />
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
      <img src={End} width="40px" />
      <Link
        className="underline hover:text-indigo-600"
        href="https://twitter.com/eli8levit"
      >
        My Twitter
      </Link>
    </footer>
  </div>
);
