import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion } from "framer-motion";
import { AnimatedText, draw, Link } from "~/components";

export default function About() {
  return (
    <FaidInMotionContainer>
      <main className="content-container mb-22 grid items-center md:grid-cols-[2fr_3fr] md:grid-rows-[auto_100%]">
        <h1 className="heading md:col-span-full">
          <AnimatedText className="text-7xl md:text-8xl 2xl:text-9xl">
            A bit about me
          </AnimatedText>
        </h1>
        <motion.svg
          viewBox="0 0 980 2239"
          fill="none"
          className="mx-auto mb-12 h-[250px] md:h-[500px]"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M71 992.5C71 437.5 466.5 71 466.5 71s426 357 442 968.5c17.478 668-332.5 1129-332.5 1129S71 1648 71 992.5Z"
            stroke="#00F"
            strokeWidth="141"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
          />
          <motion.path
            d="M591 426.5 442 312l236.5 324.5-343-167.5L716 844 272 636.5l486.5 452L239 844l477 444-477-229 477 449.5-457.5-194 399 367-322-125L591 1854"
            stroke="#00F"
            strokeWidth="95"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
          />
        </motion.svg>

        <p className="mb-4 font-mona text-xl font-normal text-black md:mr-auto md:text-2xl">
          Shalom from Israel 🇮🇱. I'm Eli, currently I'm working in{" "}
          <Link>Rapyd</Link> as a FullStack Developer. Apart from my work I
          enjoy cycling, music, photographing and a lot of other creative things
          that I would like to share here with you. Don't hesitate to reach out
          me and thanks for visiting!
        </p>
      </main>
    </FaidInMotionContainer>
  );
}
