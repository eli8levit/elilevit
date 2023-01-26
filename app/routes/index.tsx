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
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <MotionNavLink
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        to={href}
        className={`group flex h-[200px] w-full rounded-xl md:h-[350px] ${background} bg-cover bg-center shadow-xl hover:shadow-indexCardBg`}
      >
        <span className="font-bolds mt-auto mr-2 mb-2 ml-2 rounded-md py-2 px-3 font-ignazio text-base font-light text-white backdrop-blur-md backdrop-brightness-50 transition transition-transform group-hover:text-indigo-300 group-hover:shadow-indexCard 2xl:text-lg">
          {text}
        </span>
      </MotionNavLink>
    </div>
  );
};

export default function Index() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

  return (
    <>
      <div className="content-container overflow-x-hidden py-20 md:min-h-[500px] md:py-32">
        <FaidInMotionContainer>
          <h1 className="mb-6 bg-gradient-to-r from-indigo-800 to-indigo-400 bg-clip-text text-left font-apfel text-6xl font-bold text-transparent md:mb-0 md:min-h-[80px]">
            <span>Hey,</span> good to see you!
          </h1>
          <h2 className="mb-10 max-w-[600px] text-left font-apfel text-xl font-normal text-black md:mb-12 md:text-2xl">
            I'm Eli, <strong>FullStack Developer & Creator</strong>. Welcome to
            my brand new website <i>(still in progress)</i>. Hope I won't be
            lazy like with previous one and will publish some nice things.
          </h2>
        </FaidInMotionContainer>
        <motion.div style={{ scale }}>
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="ml-auto h-[150px] bg-blueBrushUp bg-contain bg-center bg-no-repeat md:h-[350px]"
          />
        </motion.div>
      </div>
      <FaidInMotionContainer className="content-container px-3 pt-0">
        <section className="rounded-xl bg-[#091223] px-4 py-8 shadow-xl shadow-indigo-300 md:p-16">
          <h3 className="mb-4 border-primaryText font-apfel text-4xl font-bold text-white md:mb-6 md:text-5xl">
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
                href="/bike"
              />
            </li>
          </ul>
        </section>
      </FaidInMotionContainer>
    </>
  );
}
