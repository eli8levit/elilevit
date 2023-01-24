import React from "react";
import { motion } from "framer-motion";

export const FaidInMotionContainer = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    {...props}
  >
    {children}
  </motion.div>
);
