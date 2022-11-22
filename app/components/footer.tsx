import { Link } from "~/components/link";
import React from "react";

export const Footer = () => (
  <section className="mt-auto flex h-[600px] border-t-4 border-primaryText bg-poster bg-cover bg-center text-white">
    <footer className="mt-auto flex h-40 w-full items-center justify-center gap-x-4 bg-pinkTransp p-6 font-sligoil text-lg text-pinkLight backdrop-blur-sm">
      <span>
        Created with ❤️ with{" "}
        <Link
          className="text-blueLight underline hover:text-secondaryText"
          href="https://remix.run/"
        >
          Remix
        </Link>
      </span>
      <span className="text-pinkLight">|</span>
      <span>
        Fonts{" "}
        <Link
          className="text-white underline hover:text-secondaryText"
          href="https://typefaces.temporarystate.net/preview/Wremena"
        >
          Wremena
        </Link>{" "}
        &{" "}
        <Link
          className="text-blueLight underline hover:text-secondaryText"
          href="https://velvetyne.fr/fonts/sligoil/"
        >
          Sligoil
        </Link>
      </span>
      <span className="text-blueLight">|</span>
      <Link
        className="text-blueLight underline hover:text-secondaryText"
        href="https://twitter.com/eli8levit"
      >
        My Twitter
      </Link>
    </footer>
  </section>
);
