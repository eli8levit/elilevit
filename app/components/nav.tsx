import { Link } from "~/components/link";
import React from "react";

export const Nav = () => {
  const [time, setTime] = React.useState<Date>(new Date());

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const minute = time.toLocaleTimeString([], {
    minute: "2-digit",
  });

  const formattedMinute = minute.length === 1 ? `0${minute}` : minute;

  return (
    <div className="mb-28 flex h-[70px] flex-row items-center justify-between bg-neutral-900 py-2 px-24 shadow-sm 2xl:px-44">
      <nav className="flex h-full flex-row items-center gap-x-2 text-base text-white">
        <Link
          href="/"
          className="flex h-full items-center rounded-md px-2.5 font-normal text-white transition  hover:bg-white hover:font-bold hover:text-black hover:shadow-lg hover:shadow-xl"
        >
          <span className="mr-1 inline-block text-base">🏠</span>Home
        </Link>
        <Link
          href="/bike"
          className="flex h-full items-center rounded-md px-2.5  font-normal text-white transition  hover:bg-white hover:font-bold hover:text-black hover:shadow-lg hover:shadow-xl"
        >
          <span className="mr-1 inline-block text-base">🚲</span>Bike Blog
        </Link>
        <Link
          href="/about"
          className="flex h-full items-center rounded-md px-2.5  font-normal text-white transition  hover:bg-white hover:font-bold hover:text-black hover:shadow-lg hover:shadow-xl"
        >
          <span className="mr-1 inline-block text-base">❓</span>What is it?
        </Link>
        <Link
          href="#"
          className="flex h-full items-center rounded-md px-2.5  font-normal text-white transition  hover:bg-white hover:font-bold hover:text-black hover:shadow-lg hover:shadow-xl"
        >
          <span className="mr-1 inline-block text-base">🖼️</span>Some art
        </Link>
      </nav>
      <div className="text-white">
        <span className="font-wremena text-5xl font-bold">
          {time.toLocaleTimeString("en-IL", {
            hour: "2-digit",
            hourCycle: "h23",
            hour12: false,
          })}
          <span className="animate-ping">:</span>
          {formattedMinute}
        </span>
      </div>
    </div>
  );
};
