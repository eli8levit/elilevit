import React from "react";
import Tree from "~/sources/images/tree.png";
import { Nav } from "~/components";

export default function About() {
  return (
    <>
      <Nav />
      <main className="content-container">
        <h1 className="mb-12 bg-gradient-to-r px-2 py-8 text-center font-satisfy text-7xl text-indigo-800 md:mb-32 md:min-h-[150px] md:to-red-500 md:p-0 md:text-left md:text-9xl">
          Little bit about this place
        </h1>
        <div className="mx-auto mb-8 flex flex-col items-center gap-x-24 gap-y-8 md:mb-24 md:flex-row">
          <img src={Tree} height="500px" className="h-[250px] md:h-[500px]" />
          <div>
            <p className="p-4 font-roboto text-xl text-primaryText md:p-8 md:text-2xl">
              Hello and welcome to my personal blog! I'm from Israel 🇮🇱 and I
              love sharing my hobbies, interests, and projects with others. On
              this blog, you'll find a mix of art, design, coding, and more.
              Some of my passions include biking, music, and photography (all of
              the photos you see here are taken by me). I also enjoy sharing my
              personal biking and lifestyle blog with readers. Feel free to
              browse and explore my art and projects. If you have any questions
              or just want to connect, don't hesitate to reach out. Thanks for
              visiting!
            </p>
            <p className="p-4 font-roboto text-lg text-gray-700 md:px-8">
              <i>
                Thanks for{" "}
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  className="text-casualBlue underline"
                  href="https://chat.openai.com/chat"
                >
                  ChatGPD
                </a>{" "}
                that helped me to finetune this text 😁
              </i>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
