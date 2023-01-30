import React from "react";
import Leaf from "~/sources/images/leaf.png";
import { FaidInMotionContainer } from "~/components/layout";
import defaultTheme from "tailwindcss/defaultTheme";

export default function About() {
  return (
    <FaidInMotionContainer>
      <main className="content-container mb-32 grid items-center gap-12 md:grid-cols-[2fr_3fr] md:grid-rows-[auto_100%] md:gap-8">
        <h1 className="heading md:col-span-full">A bit about me</h1>
        <img
          src={Leaf}
          alt="Blue illustrated leaf"
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 250px, 350px`}
          className="mx-auto h-[250px] md:h-[500px]"
        />
        <p className="mb-4 font-apfel text-xl text-black md:mr-auto md:text-2xl">
          Shalom from Israel 🇮🇱. I'm Eli, currently I'm working in{" "}
          <a
            href="https://www.rapyd.net/"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rapyd
          </a>{" "}
          as a FullStack Developer. Apart from my work I enjoy cycling, music,
          photographing and a lot of other creative things that I would like to
          share here with you. Don't hesitate to reach out me and thanks for
          visiting!
        </p>
      </main>
    </FaidInMotionContainer>
  );
}
