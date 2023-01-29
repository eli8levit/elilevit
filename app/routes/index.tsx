import React, { useRef } from "react";
import {
  motion,
  useInView,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { MotionNavLink } from "~/components";
import { FaidInMotionContainer } from "~/components/layout";
import BlueBrush from "~/sources/images/blue-brush-up.png";
import defaultTheme from "tailwindcss/defaultTheme";

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

  return (
    <>
      <div className="content-container mb-20 overflow-x-hidden md:min-h-[500px] md:py-32">
        <FaidInMotionContainer>
          <h1 className="heading mb-6">
            <span>Hey,</span> good to see you!
          </h1>
          <h2 className="mb-8 max-w-[700px] text-left font-apfel text-xl font-normal text-black md:mb-20 md:text-2xl">
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
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            sizes={`(max-width: ${defaultTheme.screens.sm}}) 180px, 250px`}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            alt="Blue illustrated line in wave form"
            src={BlueBrush}
            className="mx-auto h-[180px] object-contain md:h-[250px]"
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
