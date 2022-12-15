import React from "react";
import { Nav } from "~/components";
import Tree from "~/sources/images/tree.png";

export default function About() {
  return (
    <div>
      <div className="h-[180px] w-full bg-art bg-cover bg-center"></div>
      <Nav />
      <main className="bt-48 content-container">
        <h1 className="mb-44 font-butler text-8xl font-black text-primaryText">
          Little bit about this place
        </h1>
        <div className="mx-auto mb-48 flex max-w-[1600px] flex-row items-center justify-between gap-x-24">
          <img src={Tree} height="500px" className="h-[500px]" />
          <p className="font-butler text-3xl text-primaryText">
            Nulla sint consectetur cupidatat nostrud voluptate et irure
            consequat duis. Consequat est nostrud do Lorem adipisicing. Sit
            veniam ullamco cillum mollit dolore quis. Deserunt sit amet nostrud
            consectetur exercitation eu ex Lorem ipsum dolore fugiat veniam
            labore amet ex. Tempor velit dolor incididunt labore in dolore.
          </p>
        </div>
      </main>
    </div>
  );
}
