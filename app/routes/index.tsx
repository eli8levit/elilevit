import React from "react";
import Poster from "~/sources/images/poster.jpg";
import Sotim from "~/sources/images/sotim.jpg";
import { Link } from "~/components";

export default function Index() {
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
    <div>
      <img
        src={Sotim}
        className="max-h-[180px] w-full origin-bottom border-b-4 border-primaryText object-cover"
      />
      <nav className="flex flex-row gap-x-8 px-24 py-16">
        <Link href="ha-ish.com">What is this?</Link>
        <Link href="#">Stuff</Link>
        <Link href="#">Archive</Link>
      </nav>
      <div className="px-24 pb-16">
        <div className="flex flex-row justify-between gap-x-20">
          <h1 className="font-wremena text-9xl font-bold text-primaryText">
            Hey, How did you get here?
          </h1>
          <div className="flex flex-col gap-y-6">
            <span className="font-wremena text-9xl font-bold text-primaryText">
              {time.toLocaleTimeString("en-IL", {
                hour: "2-digit",
                hourCycle: "h23",
                hour12: false,
              })}
              <span className="animate-ping text-pinkLight">:</span>
              {formattedMinute}
            </span>
            <span className="text-center font-wremena text-lg font-light italic text-casualBlue">
              A bit cloudy but it will be alright ☁️
            </span>
          </div>
        </div>
        <div className="mb-28 mt-12 grid min-h-[580px] grid-cols-[40%_60%] gap-x-6">
          <div className="flex flex-col justify-end gap-y-14">
            <h2 className="font-wremena text-5xl  text-casualBlue">
              👋🏻 I'm Eli and this is my vinyl player. I created 3d model in
              Spline app to show how beautiful it is
            </h2>
            <p className="border-2 border-primaryText bg-pinkLight px-6 py-4 font-sligoil text-base text-primaryText ">
              <strong className="mb-1 block underline">
                Project Essential 3 User Manual:
              </strong>
              <ul className="ml-6 list-disc">
                <li>You can orbit model with mouse</li>
                <li>Open cover by clicking on it</li>
                <li>
                  Start and stop record by clicking on switch button on the side
                </li>
              </ul>
            </p>
          </div>
          <iframe
            src="https://my.spline.design/project-cca4dc6de45717fed5ca979536aa6a41/"
            width="100%"
            height="100%"
            // className="border-4 border-primaryText"
          ></iframe>
        </div>
        <h3 className="mb-5 font-wremena text-2xl font-light text-primaryText">
          This is what they call "modern art" and in theory, could cost a lot of
          money 🤔
        </h3>
        <img src={Poster} className="border-30 border-primaryText" />
      </div>
      <footer className="h-18 flex items-center gap-x-4 bg-pinkLight p-6 font-sligoil text-sm text-secondaryText">
        <span>
          Created with ❤️ with <Link href="https://remix.run/">Remix</Link>
        </span>
        <span className="text-primaryText">|</span>
        <span>
          Fonts{" "}
          <Link href="https://typefaces.temporarystate.net/preview/Wremena">
            Wremena
          </Link>{" "}
          & <Link href="https://velvetyne.fr/fonts/sligoil/">Sligoil</Link>
        </span>
        <span className="text-primaryText">|</span>
        <Link href="https://twitter.com/eli8levit">My Twitter</Link>
      </footer>
    </div>
  );
}
