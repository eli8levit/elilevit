import React from "react";
import BikeCanvas from "~/sources/images/bike-illustration.png";
import { Outlet } from "@remix-run/react";
import { FaidInMotionContainer } from "~/components/layout";
import { motion } from "framer-motion";

type Card = {
  background: string;
  title: string;
  type?: string;
  description: string;
  cardClass?: string;
};

const BikeCard = ({ background, title, type = "", description }: Card) => {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      href="/bike/dd/#rides"
      className={`flex h-[300px] rounded-lg ${background} group bg-cover bg-center shadow-lg`}
    >
      <div className="mx-1 mt-auto mb-1 w-full flex-col rounded-md p-4 text-white shadow-lg backdrop-blur-xl backdrop-brightness-50 transition-all group-hover:shadow-bike md:mx-4 md:mb-2">
        <h3 className="mb-2 flex flex-row flex-wrap items-center gap-x-2 font-ignazio text-xl transition-all group-hover:text-indigo-100">
          {title}{" "}
          {type && (
            <span className="rounded-md bg-indigo-600 p-0.5 font-ignazio text-xs">
              {type}
            </span>
          )}
        </h3>
        <p className="font-apfel text-sm font-normal text-indigo-100 2xl:text-lg">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

const UpgradeCard = ({ title, description, background, cardClass }: Card) => {
  return (
    <div className="flex w-full flex-row items-center rounded-lg">
      <div className="mb-5 flex-col font-ignazio">
        <h3 className="mb-1 text-lg text-indigo-400 md:text-xl">{title}</h3>
        <p className="font-apfel text-sm font-light text-gray-400 lg:text-lg">
          {description}
        </p>
      </div>
      <div
        className={`flex rounded-md ${background} h-full h-[180px] w-full bg-cover bg-center bg-no-repeat shadow-2xl ${cardClass}`}
      />
    </div>
  );
};

export default function Bike() {
  return (
    <FaidInMotionContainer>
      <div className="content-container grid items-center gap-16 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h1 className="mb-4 text-left font-apfel text-6xl font-bold text-indigo-800 md:mb-0 md:min-h-[80px]">
            Bike Blog
          </h1>
          <h2 className="max-w-[500px] text-left font-apfel text-xl text-black md:text-2xl">
            Here is about my bike and stuff related to cycling: my rides, photos
            and, most interesting,{" "}
            <strong className="font-bold">the upgrading revolution</strong>
          </h2>
        </div>
        <img
          src={BikeCanvas}
          className="ml-auto object-contain md:h-[450px]"
          height="450px"
        />
      </div>
      <Outlet />
      <div className="content-container px-3 py-16">
        <div className="grid justify-center gap-y-20 gap-x-10 rounded-xl bg-[#091223] py-8 px-4 shadow-xl shadow-indigo-300 md:grid-cols-[1fr_max-content_1fr] md:px-8">
          <section>
            <h2
              className="mb-4 font-apfel text-4xl font-bold text-white"
              id="rides"
            >
              Rides
            </h2>
            <ul className="flex flex-col gap-y-6">
              <li>
                <BikeCard
                  type="gravel + road"
                  background="bg-firstRide"
                  description="Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431"
                  title="First one"
                />
              </li>
              <li>
                <BikeCard
                  type="gravel"
                  background="bg-secondRide"
                  description="Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431"
                  title="Second one"
                />
              </li>
            </ul>
          </section>
          <div className="my-24 hidden w-[1px] rounded-lg bg-zinc-700 md:block" />
          <section>
            <h2 className="mb-4 font-apfel text-4xl font-bold text-white">
              Upgrades
            </h2>
            <ul className="flex flex-col gap-y-6">
              <li>
                <UpgradeCard
                  background="bg-wheels"
                  title="DT Swiss CR1600"
                  description="Firstly I decided to tune my wheels. More precisely I broke my front wheel in some small accident."
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </FaidInMotionContainer>
  );
}
