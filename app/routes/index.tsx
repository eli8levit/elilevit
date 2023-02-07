import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { AnimatedText, MotionNavLink } from "~/components";
import { FaidInMotionContainer } from "~/components/layout";

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
      <span className="font-bolds mt-auto mr-2 mb-2 ml-2 rounded-2xl py-2 px-3 font-ignazio text-lg font-light text-white backdrop-blur-md backdrop-brightness-50 transition transition-transform group-hover:text-indigo-300 group-hover:shadow-indexCard 2xl:text-xl">
        {text}
      </span>
    </MotionNavLink>
  );
};

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

export default function Index() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

  return (
    <>
      <div className="content-container mb-20 overflow-x-hidden md:min-h-[500px] md:py-32">
        <h1 className="mb-4">
          <AnimatedText>Hey, good to see you!</AnimatedText>
        </h1>
        <FaidInMotionContainer>
          <h2 className="max-w-[700px] text-left font-apfel text-xl font-normal text-black md:mb-20 md:text-2xl">
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
            <motion.g filter="url(#a)">
              <motion.path
                layout
                d="M34.5 260s22.5 18 71.5 4.5c40.92-11.274 51.5-30.826 74.5-33.5 19.877-2.311-8.645 27.628 17.017 52.538.311.302.673.586 1.042.815 26.366 16.366 56.437-3.546 82.941-30.853 15.77-16.248 31.034-58.996 44.625-60.991 1.221-.18 2.486-.342 3.7-.566C348.26 188.54 294.833 281 340 281c74 0 88-95 115-95 26.575 0-29.679 85.735-7.619 98.447.7.404 1.545.577 2.353.61C555.042 289.395 624.368 148.074 590.5 167c-34 19-44 86.5 20.5 98 58 6 144-156 113-143s-50 147.022 6 152.5c27.5 2.69 48.038-11.5 90.5-99.5S847 35 847 35"
                stroke="url(#b)"
                strokeWidth="68"
                strokeLinecap="round"
                variants={draw}
              />
            </motion.g>
            <defs>
              <linearGradient
                id="b"
                x1="467.5"
                y1="104"
                x2="465.5"
                y2="353"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6171FF" />
                <stop offset="1" stopColor="#281CAE" />
              </linearGradient>
              <filter
                id="a"
                x=".499"
                y="-3.009"
                width="883.441"
                height="329.285"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-4" />
                <feGaussianBlur stdDeviation="17.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0.016059 0 0 0 0 0.0267512 0 0 0 0 0.154167 0 0 0 0.5 0" />
                <feBlend in2="shape" result="effect1_innerShadow_2_3" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0.770833 0 0 0 0 0.791269 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend
                  in2="effect1_innerShadow_2_3"
                  result="effect2_innerShadow_2_3"
                />
              </filter>
            </defs>
          </motion.svg>
        </motion.div>
      </div>
      <div className="content-container px-2 pt-0 md:px-5">
        <section className="rounded-2xl bg-secondaryBg px-4 py-8 shadow-2xl md:p-16">
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
      </div>
    </>
  );
}
