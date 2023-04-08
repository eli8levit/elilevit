import { Link, Outlet, useParams } from "@remix-run/react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const CloseLink = ({ className, to }: { className?: string; to: string }) => {
  return (
    <Link to={to} className={className} preventScrollReset>
      <motion.svg
        viewBox="0 0 19.922 19.932"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className="transition-fill group"
        width="30px"
      >
        <path
          d="M9.96 19.922c5.45 0 9.962-4.522 9.962-9.961C19.922 4.51 15.4 0 9.952 0 4.511 0 0 4.512 0 9.96c0 5.44 4.521 9.962 9.96 9.962Zm-3.28-5.86a.8.8 0 0 1-.801-.81c0-.215.078-.42.234-.567l2.705-2.714-2.705-2.705a.782.782 0 0 1-.234-.567c0-.459.351-.8.8-.8.225 0 .401.078.557.224l2.725 2.715 2.744-2.725a.739.739 0 0 1 .557-.234.8.8 0 0 1 .81.8c0 .225-.068.401-.244.577L11.113 9.97l2.705 2.705a.746.746 0 0 1 .245.576.81.81 0 0 1-.82.81.773.773 0 0 1-.577-.234l-2.705-2.715-2.695 2.715a.81.81 0 0 1-.586.235Z"
          fill="#black"
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
              className="fixed left-0 right-0 top-0 z-20 mx-auto h-full max-h-[1500px] w-full overflow-auto bg-[rgba(255,243,244,0.9)] pb-6 shadow-2xl backdrop-blur-xl md:top-[2vh] md:h-[96vh] md:w-[50vw] md:min-w-[650px] md:max-w-[1100px] md:rounded-2xl md:rounded-t-2xl md:pb-0"
              layoutId={params?.postId}
            >
              <CloseLink
                to={`/${route}`}
                className="sticky top-2 right-2 ml-auto flex w-max md:top-4 md:right-4"
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
