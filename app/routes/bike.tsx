import React from "react";
import BikeCanvas from "~/sources/images/bike-illustration.png";
import { FaidInMotionContainer } from "~/components/layout";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet, useParams } from "@remix-run/react";
import { AnimatedText } from "~/components";

type Card = {
  background: string;
  title: string;
  type?: string;
  description: string;
  cardClass?: string;
  id?: string;
};

const BikeCard = ({ background, title, type = "", description, id }: Card) => {
  return (
    <motion.li
      layoutId={id}
      whileHover={{ scale: 1.03 }}
      className={`flex h-[300px] rounded-lg ${background} group bg-cover bg-center shadow-lg`}
    >
      <div className="mx-1 mt-auto mb-1 w-full flex-col rounded-2xl p-3 text-white shadow-lg backdrop-blur-xl backdrop-brightness-50 transition-all group-hover:shadow-bike md:mx-2 md:mb-2 md:p-4">
        <h3 className="mb-2 flex flex-row flex-wrap items-center gap-x-2 font-ignazio text-2xl transition-all group-hover:text-indigo-100">
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

function ModalContent() {
  const params = useParams();

  React.useEffect(() => {
    if (params.bikeId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [params.bikeId]);

  return (
    <AnimatePresence>
      {params?.bikeId && (
        <>
          <motion.div
            className="content-container fixed left-0 right-0 top-[20%] z-20 mx-auto h-[60vh] max-w-[1200px] max-w-[80vw] rounded-2xl bg-white shadow-2xl"
            layoutId={params?.bikeId}
          >
            <motion.h5>{"sdfsdfsdfsd"}</motion.h5>
            <motion.h2>{"sdfsdfsdfsdfsdfsdfsdf"}</motion.h2>
            <motion.div>
              Laborum anim reprehenderit veniam reprehenderit mollit officia
              consectetur cupidatat. Esse cupidatat ad excepteur sint consequat.
              Lorem excepteur commodo enim consectetur anim adipisicing nostrud
              exercitation mollit cupidatat amet. Quis veniam excepteur id
              excepteur sit ea consequat quis proident ad mollit eu. Ea ex
              deserunt voluptate ut minim reprehenderit adipisicing ut. Ea
              commodo cillum consequat incididunt sint enim consectetur officia
              incididunt. Magna ad veniam ullamco irure non fugiat fugiat
              laboris enim cupidatat proident consequat proident labore
              cupidatat. Eiusmod est ullamco adipisicing fugiat id quis pariatur
              ad qui minim velit amet aliqua commodo. Culpa ullamco mollit
              laboris occaecat qui nulla velit in non sint laborum non. Qui ut
              et est. Excepteur tempor ad magna elit est ullamco eu. Ex enim
              deserunt est dolore ex. Excepteur ipsum tempor ut labore.
              Consequat dolor do ullamco tempor ut elit laborum duis ullamco. Eu
              incididunt non ad nisi nulla ipsum do elit. Consequat est id minim
              aute. Aliqua do ullamco amet ea ipsum sint Lorem nulla
              reprehenderit deserunt. Pariatur dolor dolore quis ea ipsum id
              adipisicing cillum incididunt. Aliquip laborum quis ullamco
              nostrud non est occaecat ullamco commodo exercitation incididunt
              laborum. Occaecat sint aliquip minim quis duis ullamco voluptate
              cupidatat elit adipisicing nulla ullamco.
              <Outlet />
            </motion.div>
            <Link to="/bike" preventScrollReset>
              back
            </Link>
          </motion.div>
          <Link to="/bike" className="fixed top-0 bottom-0 left-0 right-0 z-10">
            <span className="hidden">Close and go back</span>
          </Link>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Bike() {
  return (
    <FaidInMotionContainer>
      <div
        className={`content-container relative mb-12 grid items-center justify-center gap-6 md:grid-cols-2 md:gap-12`}
      >
        <div className="md:mx-auto">
          <h1 className="heading mb-4">
            <AnimatedText>Bike Blog</AnimatedText>
          </h1>
          <h2 className="max-w-[500px] text-left font-apfel text-xl text-black md:text-2xl">
            Here is about my bike and stuff related to cycling: my rides, photos
            and, most interesting,{" "}
            <strong className="highlight">the upgrading evolution</strong>
          </h2>
        </div>
        <img
          src={BikeCanvas}
          alt="Illustrated blue bicycle on blue and green brush lines background"
          className="h-[250px] w-full object-contain text-center md:h-[550px]"
        />
      </div>
      <div className="content-container py-2 px-2 md:px-5 md:py-16">
        <div className="grid justify-center gap-y-20 gap-x-10 rounded-xl bg-secondaryBg py-8 px-4 shadow-xl shadow-2xl md:grid-cols-[1fr_max-content_1fr] md:px-8">
          <section>
            <h2
              className="mb-4 font-apfel text-4xl font-bold text-white"
              id="rides"
            >
              Rides
            </h2>
            <ModalContent />
            <ul className="flex flex-col gap-y-6">
              {/*<Link to="/bike/first" preventScrollReset>*/}
              <BikeCard
                type="gravel + road"
                background="bg-firstRide"
                description="Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431"
                title="#1"
                id="first"
              />
              {/*</Link>*/}
              <BikeCard
                id="second"
                type="gravel"
                background="bg-secondRide"
                description="National path in Ben Shemen Forest"
                title="#2"
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
                description="Firstly I decided to tune my wheels. More precisely I broke my front wheel in some small accident and was forced to buy replacement. I thought why not to use opportunity to upgrade them. That's how I bought DT Swiss."
              />
            </ul>
          </section>
        </div>
      </div>
    </FaidInMotionContainer>
  );
}
