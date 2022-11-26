import React from "react";
import Sotim from "~/sources/images/sotim.jpg";
import Bike from "~/sources/images/bike.jpg";
import Cubes from "~/sources/images/3cubes.png";

import { Link, Nav } from "~/components";

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
        height="180px"
        className="max-h-[180px] w-full origin-bottom border-b-4 border-primaryText object-cover"
      />
      <Nav />
      <div className="content-container">
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
        <section className="mb-48 mt-8 grid min-h-[580px] grid-cols-[40%_60%] gap-x-6">
          <div className="flex flex-col justify-end gap-y-14">
            <h2 className="font-wremena text-5xl text-casualBlue 2xl:text-6xl">
              👋🏻 I'm Eli and this is my vinyl player. I created 3d model in
              Spline app to show how beautiful it is
            </h2>
            <p className="border-2 border-primaryText bg-pinkLight px-6 py-4 font-sligoil text-base text-primaryText 2xl:text-lg ">
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
          {/*<iframe*/}
          {/*  src="https://my.spline.design/project-cca4dc6de45717fed5ca979536aa6a41/"*/}
          {/*  width="100%"*/}
          {/*  height="100%"*/}
          {/*></iframe>*/}
        </section>
        <img
          src={Cubes}
          width="180px"
          className="mx-auto mb-36 2xl:w-[250px]"
        />
        <section className="mb-48 text-primaryText">
          <h3 className="mb-14 font-wremena text-7xl text-primaryText first-letter:text-9xl first-letter:font-bold first-letter:text-secondaryText 2xl:text-8xl">
            What can you do here{" "}
            <span className="font bold text-9xl text-secondaryText">↴</span>
          </h3>
          <ul className="mx-auto flex w-max list-decimal flex-col gap-y-4  font-sligoil text-3xl backdrop-blur-sm">
            <li className="bg-blueLight p-4 px-6">
              You must check out my{" "}
              <Link
                href="#"
                className="bg-bike group inline-flex items-center  gap-x-4 bg-contain bg-center bg-no-repeat font-sligoil text-secondaryText hover:text-casualBlue"
              >
                bike blog
                <img
                  src={Bike}
                  width="80px"
                  className="group-hover:shadow-bike"
                />
              </Link>
            </li>
            <li className="bg-blueLight p-4">
              Read more{" "}
              <Link
                href="#"
                className="font-sligoil text-secondaryText hover:text-casualBlue"
              >
                about me
              </Link>
            </li>
            <li className="bg-blueLight p-4">
              Checkout my{" "}
              <Link
                href="#"
                className="font-sligoil text-secondaryText hover:text-casualBlue"
              >
                work
              </Link>
            </li>
            <li className="bg-blueLight p-4">
              But don't go{" "}
              <Link
                href="#"
                className="font-sligoil text-secondaryText hover:text-casualBlue"
              >
                here
              </Link>
              !!
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
