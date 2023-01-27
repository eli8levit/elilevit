import React from "react";
import Leaf from "~/sources/images/blue-leaf.png";
import { FaidInMotionContainer } from "~/components/layout";
import defaultTheme from "tailwindcss/defaultTheme";

export default function About() {
  return (
    <FaidInMotionContainer>
      <main className="content-container mb-32 grid items-center gap-12 md:grid-cols-[2fr_3fr] md:grid-rows-[auto_100%] md:gap-8">
        <h1 className="text-left font-apfel text-6xl font-bold text-indigo-800 md:col-span-full md:mb-0 md:min-h-[80px]">
          A bit about me
        </h1>
        <img
          src={Leaf}
          alt="Blue illustrated leaf"
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 250px, 350px`}
          className="mx-auto h-[250px] md:h-[500px]"
        />
        <p className="mb-4 font-apfel text-xl text-black md:mr-auto md:text-2xl">
          Hello and welcome to my personal blog! I'm from Israel 🇮🇱 and I love
          sharing my hobbies, interests, and projects with others. On this blog,
          you'll find a mix of art, design, coding, and more. Some of my
          passions include biking, music, and photography (all of the photos you
          see here are taken by me). I also enjoy sharing my personal biking and
          lifestyle blog with readers. Feel free to browse and explore my art
          and projects. If you have any questions or just want to connect, don't
          hesitate to reach out. Thanks for visiting!
        </p>
      </main>
    </FaidInMotionContainer>
  );
}
