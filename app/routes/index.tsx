import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { AnimatedText, MotionNavLink } from "~/components";
import { FaidInMotionContainer } from "~/components/layout";
import Heart from "~/sources/images/heart.png";

type Card = {
  href: string;
  background: string;
  text: string;
};

const IndexCard = ({ href, background, text }: Card) => {
  return (
    <MotionNavLink
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      to={href}
      className={`group flex h-[200px] w-full rounded-2xl md:h-[350px] ${background} bg-cover bg-center shadow-xl hover:shadow-indexCardBg`}
    >
      <span className="font-bolds mt-auto mr-2 mb-2 ml-2 rounded-2xl py-2 px-3 font-ignazio text-lg text-white backdrop-blur-md backdrop-brightness-50 transition transition-transform group-hover:text-blue-100 group-hover:shadow-indexCard 2xl:text-xl">
        {text}
      </span>
    </MotionNavLink>
  );
};

export default function Index() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

  return (
    <>
      <div className="content-container mb-20 overflow-x-hidden md:min-h-[500px]">
        <h1 className="heading mb-2">
          <AnimatedText>Hey, good to see you!</AnimatedText>
        </h1>
        <FaidInMotionContainer className="mb-[240px] md:mb-[800px]">
          <h2 className="mb-4 text-left font-apfel text-6xl text-2xl font-bold text-black md:mb-6 md:text-8xl md:text-4xl">
            <AnimatedText>I'm Eli, Developer & Creator</AnimatedText>
          </h2>
          <p className="max-w-[600px] font-mona text-2xl font-normal text-gray-700 md:mt-2 md:text-3xl">
            Hope I won't be lazy like with previous one and will publish some
            nice things.
          </p>
        </FaidInMotionContainer>
        {/*<motion.div style={{ scale }}>*/}
        {/*  <motion.div*/}
        {/*    style={{*/}
        {/*      scaleY: scrollYProgress,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  <motion.svg*/}
        {/*    className="mx-auto h-[180px] w-full md:h-[250px]"*/}
        {/*    fill="none"*/}
        {/*    initial="hidden"*/}
        {/*    animate="visible"*/}
        {/*    viewBox="0 0 884 325"*/}
        {/*  >*/}
        {/*    <motion.path*/}
        {/*      stroke="#0000ff"*/}
        {/*      d="M34.5 260s22.5 18 71.5 4.5c40.92-11.274 51.5-30.826 74.5-33.5 19.877-2.311-8.645 27.628 17.017 52.538.311.302.673.586 1.042.815 26.366 16.366 56.437-3.546 82.941-30.853 15.77-16.248 31.034-58.996 44.625-60.991 1.221-.18 2.486-.342 3.7-.566C348.26 188.54 294.833 281 340 281c74 0 88-95 115-95 26.575 0-29.679 85.735-7.619 98.447.7.404 1.545.577 2.353.61C555.042 289.395 624.368 148.074 590.5 167c-34 19-44 86.5 20.5 98 58 6 144-156 113-143s-50 147.022 6 152.5c27.5 2.69 48.038-11.5 90.5-99.5S847 35 847 35"*/}
        {/*      strokeWidth="68"*/}
        {/*      strokeLinecap="round"*/}
        {/*      variants={draw}*/}
        {/*    />*/}
        {/*  </motion.svg>*/}
        {/*</motion.div>*/}
        <iframe
          src="https://my.spline.design/untitled-cb86c1341b3ede10b87c69bea515c76f/"
          className="absolute left-0 -bottom-[200px] h-[320px] w-[100vw] md:top-[28%] md:h-[110vh]"
        />
      </div>
      <div className="content-container md:mt-20">
        <h3 className="font-apfel text-4xl font-bold text-black md:px-12 md:text-6xl">
          At my website you can feel save,no single cookie popup will destruct
          you <img src={Heart} className="inline-block" width="60px" />
        </h3>
      </div>
    </>
  );
}
