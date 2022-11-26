import { Link } from "~/components/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className="mb-28 mt-14 flex flex-row items-center gap-x-8 px-24 text-lg 2xl:px-44">
      <Link href="/">
        <span className="inline-block text-3xl">🏠</span> Home
      </Link>
      <Link href="/bike">
        <span className="inline-block text-3xl">🚲</span> Bike Blog
      </Link>
      <Link href="#">
        <span className="inline-block text-3xl">❓</span> What is it?
      </Link>
      <Link href="#">
        <span className="inline-block text-3xl">🖼️</span> Some art
      </Link>
    </nav>
  );
};
