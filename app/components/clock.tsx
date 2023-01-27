import React from "react";

export default function Clock() {
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
    <div className="black mb-3 hidden font-bold md:block">
      <span className="font-ignazio text-xl md:text-5xl">
        {time.toLocaleTimeString("en-IL", {
          hour: "2-digit",
          hourCycle: "h23",
          hour12: false,
        })}
        <span className="animate-ping">:</span>
        {formattedMinute}
      </span>
    </div>
  );
}
