import { Link } from "~/components/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className="flex flex-row items-baseline gap-x-8 px-24 pt-12 pb-16 text-lg 2xl:px-44">
      <Link href="ha-ish.com">What is this?</Link>
      <Link href="#">Stuff</Link>
      <Link href="#">Archive</Link>
      <Link href="/bike">
        <span className="text-3xl">🚲</span> Bike Blog
      </Link>
    </nav>
  );
};
