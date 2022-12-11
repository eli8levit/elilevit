import { Link } from "~/components/link";
import React from "react";

export const Footer = () => (
  <section className="mt-auto flex h-40 bg-blueNoise bg-contain">
    <footer className="mt-auto flex h-40 w-full items-center justify-center gap-x-4 bg-pinkTransp p-6 font-sligoil text-base font-light text-pinkLight backdrop-blur-sm">
      <span>
        Created with ❤️ with{" "}
        <Link
          className="text-base font-light  text-blueLight underline hover:text-blueLight"
          href="https://remix.run/"
        >
          Remix
        </Link>
      </span>
      <span className="text-pinkLight">|</span>
      <span>
        Fonts{" "}
        <Link
          className="text-base font-light text-white underline hover:text-blueLight"
          href="https://typefaces.temporarystate.net/preview/Wremena"
        >
          Wremena
        </Link>{" "}
        &{" "}
        <Link
          className="text-base font-light text-blueLight underline hover:text-blueLight"
          href="https://velvetyne.fr/fonts/sligoil/"
        >
          Sligoil
        </Link>
      </span>
      <span className="font-light text-blueLight">|</span>
      <Link
        className="text-base font-normal  text-blueLight underline hover:text-blueLight"
        href="https://twitter.com/eli8levit"
      >
        My Twitter
      </Link>
    </footer>
  </section>
);
