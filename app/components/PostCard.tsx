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
      className={`group flex h-[380px] w-[72vw] min-w-[200px] max-w-[400px] flex-col overflow-hidden rounded-xl bg-lightGray text-black shadow-bikeCard backdrop-blur-2xl active:backdrop-blur-sm md:h-[440px] md:w-[340px] 2xl:h-[480px] 2xl:w-[400px] ${className}`}
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
        <h3 className="mb-1 font-monaWide text-lg font-extrabold transition-all md:mb-4 md:text-lg md:group-hover:text-black 2xl:text-2xl">
          {title}
        </h3>
        <p className="font-mona text-sm font-normal text-gray-700 transition-all md:text-base md:group-hover:text-black lg:text-lg">
          {description}
        </p>
        <div className="mt-auto flex flex-row items-center justify-between text-gray-700 transition-all md:group-hover:text-black">
          <span className="w-max font-hubot text-xs md:text-sm 2xl:text-base">
            {date}
          </span>
          <span className="ml-auto w-max font-hubot text-xs md:text-sm 2xl:text-base">
            # {index}
          </span>
        </div>
      </div>
    </motion.li>
  );
};
