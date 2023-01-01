import { Link } from "~/components/link";
import React from "react";

export const Footer = () => (
  <footer className="flex h-20 w-full items-center justify-center gap-x-4 p-6 font-ignazio text-base text-primaryText drop-shadow-sm">
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
);
