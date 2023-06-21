import { FaidInMotionContainer } from "~/components/layout";
import { Link } from "@remix-run/react";
import Arrow from "~/components/arrow";
import React, { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  description?: string | ReactNode;
  children: ReactNode;
}

export const PostPage = ({ title, description, children }: Props) => {
  return (
    <FaidInMotionContainer className="content-container pb-40 2xl:max-w-[1800px]">
      <Link
        to="/#latest-stuff"
        className="mb-4 flex w-max flex-row items-baseline gap-2 rounded-md px-2 py-2 font-hubot text-sm text-zinc-600 hover:bg-lightGray hover:shadow-nav active:shadow-navActive 2xl:px-3 2xl:py-2 2xl:text-base"
        preventScrollReset
      >
        <Arrow className="rotate-180" />
        Back to home
      </Link>
      <h1 className="heading">{title}</h1>
      {description && (
        <p className="mb-8 max-w-[600px] font-mona text-lg">{description}</p>
      )}
      {children}
    </FaidInMotionContainer>
  );
};
