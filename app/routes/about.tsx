import React from "react";
import { AnimatedText, Link } from "~/components";
import Circle from "~/sources/images/grad.svg";
import { FaidInMotionContainer } from "~/components/layout";

export default function About() {
  return (
    <main className="content-container relative flex h-[calc(100vh-300px)] flex-col items-center justify-center p-0">
      <img
        src={Circle}
        className="absolute -z-10 h-[90vh] opacity-60 blur-2xl"
      />
      <FaidInMotionContainer className="max-w-[700px] rounded-2xl border-black border-opacity-10 p-6">
        <h1 className="heading text-black opacity-90">
          <AnimatedText>A bit about me</AnimatedText>
        </h1>
        <p className="font-mona text-xl font-normal leading-relaxed text-black">
          Shalom from Israel 🇮🇱. I'm Eli, currently I'm working in{" "}
          <Link
            href="https://www.rapyd.net/"
            className="decoration underline decoration-secondary transition-colors hover:decoration-primary"
          >
            Rapyd
          </Link>{" "}
          for 4 years as a FullStack Developer. Apart from my work I enjoy
          cycling, music, photographing and a lot of other creative things that
          I would like to share here with you. Don't hesitate to reach out me
          and thanks for visiting!
        </p>
      </FaidInMotionContainer>
    </main>
  );
}
