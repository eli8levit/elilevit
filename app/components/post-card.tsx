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
      className={`group flex h-[250px] w-[250px] flex-col overflow-hidden rounded-xl bg-lightGray bg-gradient bg-[length:300px] bg-bottom bg-no-repeat text-black shadow-bikeCard active:backdrop-blur-sm  ${className}`}
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
        className="h-[130px] w-full shrink-0 object-cover md:group-hover:grayscale"
      />
      <div className="flex h-full flex-col p-3">
        <h3 className="font-apfel text-lg font-extrabold leading-[1.2] transition-all md:text-lg md:leading-normal md:group-hover:text-black">
          {title}
        </h3>
        <p className="mb-4 font-mona text-xs font-normal text-gray-700 transition-all md:text-sm md:group-hover:text-black">
          {description}
        </p>
        <div className="mt-auto flex flex-row items-center justify-between text-xs text-gray-600 transition-all md:group-hover:text-black">
          <span className="w-max font-hubot">{date}</span>
          <span className="ml-auto w-max font-shantell"># {index}</span>
        </div>
      </div>
    </motion.li>
  );
};
