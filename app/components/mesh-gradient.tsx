import { motion } from "framer-motion";
import React from "react";

export default function MeshGradient({ className }: { className: string }) {
  return (
    <motion.svg viewBox="0 0 4707 3462" className={className} fill="none">
      <motion.g
        filter="url(#a)"
        // animate={{ rotate: 360 }}
        // transition={{
        //   repeat: Infinity,
        //   repeatType: "loop",
        //   duration: 20,
        //   delay: 2,
        //   type: "linear",
        // }}
      >
        <motion.circle
          cx="1778.41"
          cy="1683.41"
          r="750"
          fill="url(#b)"
          // animate={{ translateX: "200px", translateY: "-100px" }}
          // transition={{
          //   repeat: Infinity,
          //   repeatType: "mirror",
          //   duration: 8,
          //   delay: 2,
          //   type: "linear",
          // }}
        />
        <motion.circle
          cx="2929"
          cy="1677"
          r="750"
          fill="url(#c)"
          // animate={{ translateX: "-300px", translateY: "100px" }}
          // transition={{
          //   repeat: Infinity,
          //   repeatType: "mirror",
          //   duration: 10,
          //   delay: 2,
          //   type: "linear",
          // }}
        />
      </motion.g>
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.00209 1196.26 -1831.22 .0032 1778.42 1683.41)"
        >
          <stop stopColor="#DB2877" stopOpacity=".4" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.00209 1196.26 -1831.22 .0032 2929 1677)"
        >
          <stop stopColor="#00F" stopOpacity=".25" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
        <filter
          id="a"
          x="-427.604"
          y="-544.604"
          width="5555.21"
          height="4455.21"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="350"
            result="effect1_foregroundBlur_111_4"
          />
        </filter>
      </defs>
    </motion.svg>
  );
}
