export const draw = {
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

export const draw2 = {
  hidden: draw.hidden,
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.2, type: "spring", duration: 2.3, bounce: 0 },
      opacity: { delay: 0.2, duration: 1 },
    },
  },
};
