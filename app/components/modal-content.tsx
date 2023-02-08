import { Link, Outlet, useParams } from "@remix-run/react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ModalContent() {
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
