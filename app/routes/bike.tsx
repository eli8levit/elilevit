import React from "react";
import BikeCanvas from "~/sources/images/bike-illustration.png";
import { FaidInMotionContainer } from "~/components/layout";
import { motion } from "framer-motion";
import defaultTheme from "tailwindcss/defaultTheme";

type Card = {
  background: string;
  title: string;
  type?: string;
  description: string;
  cardClass?: string;
};

const BikeCard = ({ background, title, type = "", description }: Card) => {
  return (
    <motion.li
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className={`flex h-[300px] rounded-lg ${background} group bg-cover bg-center shadow-lg`}
    >
      <div className="mx-1 mt-auto mb-1 w-full flex-col rounded-xl p-3 text-white shadow-lg backdrop-blur-xl backdrop-brightness-50 transition-all group-hover:shadow-bike md:mx-2 md:mb-2 md:p-4">
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
    </motion.li>
  );
};

const UpgradeCard = ({ title, description, background, cardClass }: Card) => {
  return (
    <li className="flex w-full flex-col items-center rounded-lg md:flex-row">
      <div className="mb-5 flex-col font-ignazio">
        <h3 className="mb-1 text-xl font-bold text-indigo-400 md:text-xl">
          {title}
        </h3>
        <p className="font-apfel text-base font-light text-gray-400 lg:text-lg">
          {description}
        </p>
      </div>
      <div
        className={`flex rounded-md ${background} h-full h-[180px] w-full bg-cover bg-center bg-no-repeat shadow-2xl ${cardClass}`}
      />
    </li>
  );
};

export default function Bike() {
  return (
    <FaidInMotionContainer>
      <div className="content-container mb-10 grid items-center gap-16 md:grid-cols-2 md:py-28">
        <div>
          <h1 className="heading mb-4">Bike Blog</h1>
          <h2 className="max-w-[500px] text-left font-apfel text-xl text-black md:text-2xl">
            Here is about my bike and stuff related to cycling: my rides, photos
            and, most interesting,{" "}
            <strong className="highlight">the upgrading evolution</strong>
          </h2>
        </div>
        <img
          src={BikeCanvas}
          alt="Illustrated blue bicycle on blue and green brush lines background"
          sizes={`(max-width: ${defaultTheme.screens.sm}}) 100%, 500px`}
          className="ml-auto w-full object-contain md:w-[500px]"
        />
      </div>
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
              <BikeCard
                type="gravel + road"
                background="bg-firstRide"
                description="Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431"
                title="First one"
              />
              <BikeCard
                type="gravel"
                background="bg-secondRide"
                description="Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431"
                title="Second one"
              />
            </ul>
          </section>
          <div className="my-12 hidden w-[3px] rounded-lg bg-gradient-to-b from-indigo-500 to-indigo-900 md:block" />
          <section>
            <h2 className="mb-6 font-apfel text-4xl font-bold text-white md:mb-4">
              Upgrades
            </h2>
            <ul className="flex flex-col gap-y-6">
              <UpgradeCard
                background="bg-wheels"
                title="DT Swiss CR1600"
                description="Firstly I decided to tune my wheels. More precisely I broke my front wheel in some small accident."
              />
            </ul>
          </section>
        </div>
      </div>
    </FaidInMotionContainer>
  );
}
