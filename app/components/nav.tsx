import { Link } from "~/components/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className="mb-28 mt-14 flex flex-row items-center gap-x-6 px-24 text-base 2xl:px-44">
      <Link
        href="/"
        className="rounded-sm bg-pinkLighterMedium py-0.5 px-2 font-bold drop-shadow-sm hover:bg-blueLight"
      >
        <span className="inline-block text-xl">🏠</span> Home
      </Link>
      <Link
        href="/bike"
        className="rounded-sm bg-pinkLighterMedium py-0.5 px-2 font-bold drop-shadow-sm hover:bg-blueLight"
      >
        <span className="inline-block text-xl">🚲</span> Bike Blog
      </Link>
      <Link
        href="#"
        className="rounded-sm bg-pinkLighterMedium py-0.5 px-2 font-bold drop-shadow-sm hover:bg-blueLight"
      >
        <span className="inline-block text-xl">❓</span> What is it?
      </Link>
      <Link
        href="#"
        className="rounded-sm bg-pinkLighterMedium py-0.5 px-2 font-bold drop-shadow-sm hover:bg-blueLight"
      >
        <span className="inline-block text-xl">🖼️</span> Some art
      </Link>
    </nav>
  );
};
