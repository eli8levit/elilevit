import { Link } from "~/components/link";
import React from "react";
import Home from "~/sources/images/home.svg";

export const Nav = () => {
  return (
    <nav className="flex flex-row items-center gap-x-8 px-24 pt-12 pb-16 text-lg 2xl:px-44">
      <Link href="/">
        <span className="inline-block text-2xl">🏠</span> Home
      </Link>
      <Link href="/bike">
        <span className="inline-block text-2xl">🚲</span> Bike Blog
      </Link>
      <Link href="#">
        <span className="inline-block text-2xl">❓</span> What is it?
      </Link>
      <Link href="#">
        <span className="inline-block text-2xl">🖼️</span> Some art
      </Link>
    </nav>
  );
};
