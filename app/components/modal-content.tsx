import { Link, Outlet, useParams } from "@remix-run/react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const CloseLink = ({ className, to }: { className?: string; to: string }) => {
  return (
    <Link to={to} className={className} preventScrollReset>
      <motion.svg
        viewBox="0 0 1015 887"
        width="45px"
        fill="none"
        className="transition-fill group rounded-full "
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        <motion.path
          d="M980.5 443.5c0 221.663-207.254 409-473 409s-473-187.337-473-409 207.254-409 473-409 473 187.337 473 409Z"
          strokeWidth="60"
          fill="rgba(255,243,244,0.7)"
        />
        <motion.path
          d="M374 273c152.568 91.011 221.491 156.355 313 300m0-319.5s-122.804 75.281-188 139.308C416.961 473.376 328 632.5 328 632.5"
          strokeWidth="70"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-stroke absolute z-30 stroke-primary"
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
    if (params.postId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [params.postId]);

  return (
    <AnimatePresence>
      {params?.postId && (
        <>
          <motion.div className="overflow-hidden">
            <motion.div
              className="fixed left-0 right-0 top-0 z-20 mx-auto h-full w-full overflow-auto rounded-t-2xl border-mini border-gray-400 bg-[#fff3f4cf] pb-6 shadow-2xl backdrop-blur-md md:top-[2vh] md:h-[94vh] md:w-[50vw] md:min-w-[650px] md:max-w-[1100px] md:rounded-2xl md:pb-0"
              layoutId={params?.postId}
            >
              <CloseLink
                to={`/${route}`}
                className="sticky top-0 ml-auto flex h-[60px] w-[70px] items-center justify-center rounded-tr-2xl"
              />
              <Outlet />
            </motion.div>
          </motion.div>
          <Link
            to={`/${route}`}
            preventScrollReset
            className="fixed top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-sm backdrop-brightness-90"
          >
            <span className="hidden">Close and go back</span>
          </Link>
        </>
      )}
    </AnimatePresence>
  );
}
