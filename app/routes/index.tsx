import React from "react";
import { AnimatedText, Link } from "~/components";
import { FaidInMotionContainer } from "~/components/layout";
import Heart from "~/sources/images/heart.png";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import Hands from "~/sources/images/hands.png";
import { getMobileDetect } from "~/utilities";

export const loader: LoaderFunction = (params: any): { isMobile: boolean } => {
  const userAgent = params.request.headers.get("user-agent");
  const detect = getMobileDetect(userAgent);
  return { isMobile: detect.isMobile() };
};

export default function Index() {
  const { isMobile } = useLoaderData();

  const link = `https://my.spline.design/${
    isMobile
      ? "indexpagecopy-e155ae408be8f48aa62056d1e56967a6/"
      : "untitled-cb86c1341b3ede10b87c69bea515c76f/"
  }`;

  return (
    <>
      <div className="content-container overflow-x-hidden">
        <h1 className="heading mb-2">
          <AnimatedText>Hey, good to see you!</AnimatedText>
        </h1>
        <FaidInMotionContainer>
          <h2 className="mb-4 text-left font-apfel text-6xl text-2xl font-bold text-black md:mb-6 md:text-8xl md:text-4xl">
            <AnimatedText>I'm Eli, Developer & Creator</AnimatedText>
          </h2>
          <p className="max-w-[600px] font-mona text-2xl font-normal text-gray-700 md:mt-2 md:text-3xl">
            Hope I won't be lazy like with previous one and will publish some
            nice things.
          </p>
        </FaidInMotionContainer>
      </div>
      <iframe
        src={link}
        className="mb-8 h-[350px] w-[100wh] md:mb-0 md:-mt-[30px] md:h-[85vh] 2xl:h-[70vh]"
      />
      <div className="content-container max-w-[1200px] md:mt-20 2xl:max-w-[1600px]">
        <h3 className="mb-4 font-apfel text-5xl font-bold text-black md:text-6xl">
          Here you can feel save, no cookie popup will destruct you{" "}
          <img src={Heart} className="inline-block" width="60px" />
        </h3>
        <h3 className="font-apfel text-4xl font-light text-black md:text-5xl">
          Also I care about privacy and use{" "}
          <Link
            className="font-bold text-[#0000FF] hover:text-blue-700"
            href="https://usefathom.com/ref/EVUCYP"
          >
            Fathom
          </Link>{" "}
          service for analytics
        </h3>
        <img
          src={Hands}
          height="200px"
          className="my-24 mx-auto h-[200px] md:my-48 md:my-56"
        />
        <h4 className="mb-10 border-b-4 border-black pb-2 font-apfel text-5xl text-black md:text-6xl">
          So far I don't have much content, but still can can checkout some
          things:
        </h4>
        <ul className="mb-16 flex flex-col gap-y-2 font-mona text-3xl font-medium md:gap-y-8 md:pl-4 md:pl-16 md:text-4xl">
          <li>
            <span className="font-semibold text-[#0000FF]">1.</span> Visit my
            bike blog
          </li>
          <li className="ml-2 md:ml-12">
            <span className="font-semibold text-[#0000FF]">2.</span> Read more
            about me
          </li>
          <li className="ml-4 md:ml-24">
            <span className="font-semibold text-[#0000FF]">3.</span> See my
            projects
          </li>
        </ul>
      </div>
    </>
  );
}
