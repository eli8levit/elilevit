import { Link, Outlet, useParams } from "@remix-run/react";
import React from "react";
import BikePhoto from "~/sources/images/bike-photo.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { draw } from "~/components/utils";

const CloseLink = ({ className, to }: { className?: string; to: string }) => {
  return (
    <Link to={to} className={className} preventScrollReset>
      <motion.svg
        viewBox="0 0 1015 887"
        width="45px"
        fill="none"
        className="transition-fill group rounded-full hover:fill-[#0000ff]"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        <motion.path
          d="M980.5 443.5c0 221.663-207.254 409-473 409s-473-187.337-473-409 207.254-409 473-409 473 187.337 473 409Z"
          strokeWidth="60"
          className="fill-pinkLighter stroke-[#0000ff] group-hover:fill-[#0000ff]"
        />
        <motion.path
          d="M374 273c152.568 91.011 221.491 156.355 313 300m0-319.5s-122.804 75.281-188 139.308C416.961 473.376 328 632.5 328 632.5"
          strokeWidth="70"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-stroke absolute z-30 stroke-[#0000ff] group-hover:stroke-white"
        />
      </motion.svg>
    </Link>
  );
};

interface Props {
  route: string;
}

export function ModalContent({ route }: Props) {
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
          <motion.div className="overflow-hidden">
            <motion.div
              className="shadow-modal fixed left-0 right-0 top-0 z-20 mx-auto h-full w-full overflow-auto rounded-t-2xl bg-pinkLighter pb-6 md:top-[4vh] md:h-[94vh] md:w-[55vw] md:min-w-[650px] md:max-w-[1100px] md:rounded-2xl md:pb-0 md:shadow-2xl"
              layoutId={params?.bikeId}
            >
              <CloseLink
                to={`/${route}`}
                className="sticky top-0 ml-auto flex h-[60px] w-[70px] items-center justify-center rounded-tr-2xl"
              />
              <motion.img
                src={BikePhoto}
                height="20%"
                className="-mt-[70px] h-[50%] w-full rounded-t-2xl object-cover"
              />
              <motion.div className="p-6 md:p-16">
                <motion.div className="flex flex-col-reverse justify-between gap-y-4 md:flex-row md:items-end">
                  <motion.h1 className="font-apfel text-5xl font-bold text-[#0000ff]">
                    First Ride
                  </motion.h1>
                  <motion.div className="flex flex-col">
                    <motion.span className="highlight font-monaWide text-xs italic md:text-sm">
                      #cycling
                    </motion.span>
                    <motion.span className="font-monaWide text-sm text-zinc-400 md:text-xl">
                      23.05.2023
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.svg
                  fill="none"
                  initial="hidden"
                  width="250px"
                  viewBox="0 0 866 131"
                  animate="visible"
                  className="mb-12"
                >
                  <motion.path
                    d="M43 88s97.456-73.87 296.762-29.313C611.484 119.431 823 43 823 43"
                    stroke="#0000ff"
                    strokeWidth="20"
                    strokeLinecap="round"
                    variants={draw}
                    strokeLinejoin="round"
                  />
                </motion.svg>
                <motion.p className="text-md font-mona md:text-lg">
                  Laborum anim reprehenderit veniam reprehenderit mollit officia
                  consectetur cupidatat. Esse cupidatat ad excepteur sint
                  consequat. Lorem excepteur commodo enim consectetur anim
                  adipisicing nostrud exercitation mollit cupidatat amet. Quis
                  veniam excepteur id excepteur sit ea consequat quis proident
                  ad mollit eu. Ea ex deserunt voluptate ut minim reprehenderit
                  adipisicing ut. Ea commodo cillum consequat incididunt sint
                  enim consectetur officia incididunt. Magna ad veniam ullamco
                  irure non fugiat fugiat laboris enim cupidatat proident
                  consequat proident labore cupidatat. Eiusmod est ullamco
                  adipisicing fugiat id quis pariatur ad qui minim velit amet
                  aliqua commodo. Culpa ullamco mollit laboris occaecat qui
                  nulla velit in non sint laborum non. Qui ut et est. Excepteur
                  tempor ad magna elit est ullamco eu. Ex enim deserunt est
                  dolore ex. Excepteur ipsum tempor ut labore. Consequat dolor
                  do ullamco tempor ut elit laborum duis ullamco. Eu incididunt
                  non ad nisi nulla ipsum do elit. Consequat est id minim aute.
                  Aliqua do ullamco amet ea ipsum sint Lorem nulla reprehenderit
                  deserunt. Pariatur dolor dolore quis ea ipsum id adipisicing
                  cillum incididunt. Aliquip laborum quis ullamco nostrud non
                  est occaecat ullamco commodo exercitation incididunt laborum.
                  Occaecat sint aliquip minim quis duis ullamco voluptate
                  cupidatat elit adipisicing nulla ullamco.
                  <Outlet />
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          <Link
            to={`/${route}`}
            preventScrollReset
            className="fixed top-0 bottom-0 left-0 right-0 z-10"
          >
            <span className="hidden">Close and go back</span>
          </Link>
        </>
      )}
    </AnimatePresence>
  );
}
