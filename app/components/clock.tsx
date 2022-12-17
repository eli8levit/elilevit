import React from "react";
import { useMatches } from "@remix-run/react";

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
    <div className="text-white">
      <span className="font-sligoil text-5xl font-bold">
        {time.toLocaleTimeString("en-IL", {
          hour: "2-digit",
          hourCycle: "h23",
          hour12: false,
        })}
        <span className="animate-ping text-white">:</span>
        {formattedMinute}
      </span>
    </div>
  );
}
