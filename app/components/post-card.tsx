import React from "react";
import { motion } from "framer-motion";

type Card = {
  image: string;
  title: string | React.ReactElement;
  description: string;
  tag?: string | null;
  id: number;
  date: string;
  index: number;
  className?: string;
};

export const PostCard = ({
  index,
  image,
  title,
  description,
  id,
  date,
  className,
}: Card) => {
  return (
    <motion.li
      layoutId={id.toString()}
      className={`group flex w-[72vw] min-w-[200px] max-w-[400px] flex-col overflow-hidden rounded-xl bg-lightGray text-black shadow-bikeCard backdrop-blur-2xl active:backdrop-blur-sm md:w-[340px]  2xl:w-[400px] ${className}`}
      whileTap={{ scale: 0.98 }}
      transition={{
        scale: { type: "spring", stiffness: 200, damping: 10 },
        backgroundColor: { type: "easeInOut" },
      }}
    >
      <motion.img
        alt="Probably photo of my bike"
        src={image}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 15 },
        }}
        className="h-[230px] w-full shrink-0 object-cover md:h-[280px] md:group-hover:grayscale"
      />
      <div className="flex h-full flex-col p-6">
        <h3 className="mb-2 font-apfel text-lg font-extrabold leading-[1.2] transition-all md:text-lg md:leading-normal md:group-hover:text-black lg:text-2xl 2xl:text-3xl">
          {title}
        </h3>
        <p className="mb-6 font-mona text-sm font-normal text-gray-700 transition-all md:text-base md:group-hover:text-black 2xl:text-lg">
          {description}
        </p>
        <div className="mt-auto flex flex-row items-center justify-between text-gray-500 transition-all md:group-hover:text-black">
          <span className="w-max font-hubot text-xs font-medium md:text-sm 2xl:text-base">
            {date}
          </span>
          <span className="ml-auto w-max font-shantell text-xs font-medium md:text-sm 2xl:text-base">
            # {index}
          </span>
        </div>
      </div>
    </motion.li>
  );
};
