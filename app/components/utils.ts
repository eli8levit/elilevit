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

const memojiIds = [
  "8a30692c-8d72-402f-b86d-5d526d16926f",
  "350eb4d9-948b-4bba-bfa0-4c51da701a63",
  "2f16cd6a-2e13-4a86-add6-1f3e81622ca6",
  "a2e2ae19-3c90-43f8-bab5-c0fbcf8ecbee",
  "c1030a63-e03f-4703-8eb2-0904bb4b017e",
];

export const getRandomMemojiId = () => {
  const randomNum = Math.floor(Math.random() * 5);
  return memojiIds[randomNum];
};
