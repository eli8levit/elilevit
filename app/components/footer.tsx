import { Link } from "~/components/link";
import React from "react";

export const Footer = () => (
  <section className="mt-auto flex bg-blueNoise bg-contain">
    <footer className="mt-auto flex h-32 w-full items-center justify-center gap-x-4 bg-pinkTransp p-6 font-sligoil text-base font-light text-white backdrop-blur-sm">
      <span>
        Created with ❤️ with{" "}
        <Link
          className="text-base font-light  text-white underline hover:text-pinkLight"
          href="https://remix.run/"
        >
          Remix
        </Link>
      </span>
      <span>|</span>
      <span>
        Fonts{" "}
        <Link
          className="text-base font-light text-white underline hover:text-pinkLight"
          href="https://typefaces.temporarystate.net/preview/Wremena"
        >
          Wremena
        </Link>{" "}
        &{" "}
        <Link
          className="text-base font-light text-white underline hover:text-pinkLight"
          href="https://velvetyne.fr/fonts/sligoil/"
        >
          Sligoil
        </Link>
      </span>
      <span className="font-light text-blueLight">|</span>
      <Link
        className="text-base font-normal  text-white underline hover:text-pinkLight"
        href="https://twitter.com/eli8levit"
      >
        My Twitter
      </Link>
    </footer>
  </section>
);
