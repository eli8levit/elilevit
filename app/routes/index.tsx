import React, { useRef } from "react";
import {
  motion,
  useInView,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { MotionNavLink } from "~/components";
import { FaidInMotionContainer } from "~/components/layout";

type Card = {
  href: string;
  background: string;
  text: string;
};

const IndexCard = ({ href, background, text }: Card) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <MotionNavLink
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        to={href}
        className={`group flex h-[200px] w-full rounded-2xl md:h-[350px] ${background} bg-cover bg-center shadow-xl hover:shadow-indexCardBg`}
      >
        <span className="font-bolds mt-auto mr-2 mb-2 ml-2 rounded-2xl py-2 px-3 font-ignazio text-lg font-light text-white backdrop-blur-md backdrop-brightness-50 transition transition-transform group-hover:text-indigo-300 group-hover:shadow-indexCard 2xl:text-xl">
          {text}
        </span>
      </MotionNavLink>
    </div>
  );
};

export default function Index() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.5 },
        },
      };
    },
  };

  return (
    <>
      <div className="content-container mb-20 overflow-x-hidden md:min-h-[500px] md:py-32">
        <FaidInMotionContainer>
          <h1 className="heading mb-2">
            <span>Hey,</span> good to see you!
          </h1>
          <h2 className="mb-6 max-w-[700px] text-left font-apfel text-xl font-normal text-black md:mb-20 md:text-2xl">
            I'm Eli,{" "}
            <strong className="highlight">FullStack Developer & Creator</strong>
            . Welcome to my brand new website <i>(still in progress)</i>. Hope I
            won't be lazy like with previous one and will publish some nice
            things.
          </h2>
        </FaidInMotionContainer>
        <motion.div style={{ scale }}>
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <motion.svg
            className="mx-auto h-[180px] object-contain md:h-[250px]"
            fill="none"
            initial="hidden"
            animate="visible"
            viewBox="0 0 884 325"
            width="100%"
          >
            <motion.path
              d="M34.5 260s22.5 18 71.5 4.5c40.92-11.274 51.5-30.826 74.5-33.5 19.877-2.311-8.645 27.628 17.017 52.538.311.302.673.586 1.042.815 26.366 16.366 56.437-3.546 82.941-30.853 15.77-16.248 31.034-58.996 44.625-60.991 1.221-.18 2.486-.342 3.7-.566C348.26 188.54 294.833 281 340 281c74 0 88-95 115-95 26.575 0-29.679 85.735-7.619 98.447.7.404 1.545.577 2.353.61C555.042 289.395 624.368 148.074 590.5 167c-34 19-44 86.5 20.5 98 58 6 144-156 113-143s-49.5 147.022 6.5 152.5c27.5 2.69 47.538-11.5 90-99.5S847 35 847 35"
              stroke="url(#a)"
              strokeWidth="68"
              strokeLinecap="round"
              variants={draw}
            />
            <defs>
              <linearGradient
                id="a"
                x1="868"
                y1="163"
                x2="34"
                y2="163"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6171FF" />
                <stop offset="1" stop-color="#281CAE" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      </div>
      <FaidInMotionContainer className="content-container px-3 pt-0">
        <section className="rounded-2xl bg-[#091223] px-4 py-8 shadow-xl shadow-indigo-300 md:p-16">
          <h3 className="mb-4 font-apfel text-4xl font-bold text-white md:mb-6 md:text-5xl">
            What to do here
          </h3>
          <ul className="grid items-end gap-6 text-xl md:grid-cols-2">
            <li>
              <IndexCard
                background="bg-river"
                text="Checkout my bike blog"
                href="/bike"
              />
            </li>
            <li>
              <IndexCard
                background="bg-oldCity"
                text="More about me"
                href="/about"
              />
            </li>
            <li className="col-span-full">
              <IndexCard
                background="bg-wall"
                text="Look at my art & projects"
                href="/art"
              />
            </li>
          </ul>
        </section>
      </FaidInMotionContainer>
    </>
  );
}
