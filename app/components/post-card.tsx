import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "@remix-run/react";

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
  const { isMobile }: { isMobile: boolean } = useOutletContext();

  return (
    <motion.li
      layoutId={id.toString()}
      className={`group flex h-[250px] w-[250px] flex-col overflow-hidden rounded-xl bg-lightGray text-black shadow-bikeCard md:h-[280px] md:w-[280px] 2xl:h-[300px] 2xl:w-[300px]  ${className}`}
      {...(!isMobile && {
        whileHover: { scale: 1.05 },
      })}
      whileTap={{ scale: 0.98 }}
      transition={{
        scale: { type: "spring", stiffness: 500, damping: 20 },
        backgroundColor: { type: "easeInOut" },
      }}
    >
      <motion.img
        alt="Probably photo of my bike"
        src={image}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 15 },
        }}
        className="h-[130px] w-full shrink-0 object-cover  md:h-[140px] md:group-hover:grayscale 2xl:h-[150px]"
      />
      <div className="flex h-full flex-col bg-blueCircle bg-[length:400px] bg-left bg-no-repeat p-3 2xl:p-4">
        <h3 className="mb-1 font-apfel text-lg font-extrabold transition-all md:leading-normal md:group-hover:text-black 2xl:text-xl">
          {title}
        </h3>
        <p className="mb-4 font-mona text-sm font-normal text-gray-700 transition-all md:text-sm md:group-hover:text-black 2xl:text-base">
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
