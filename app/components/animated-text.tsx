import { motion } from "framer-motion";

export function AnimatedText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      layout
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word) => (
        <motion.span
          className={`mr-2 2xl:mr-5 ${className}`}
          variants={child}
          key={word}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
