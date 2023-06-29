import { FaidInMotionContainer } from "~/components/layout";
import type { ReactNode } from "react";
import React from "react";
import { BackHomeLink } from "~/components/motion-nav-link";

interface Props {
  title: string | ReactNode;
  description?: string | ReactNode;
  children: ReactNode;
  className?: string;
}

export const PostPage = ({
  title,
  description,
  children,
  className,
}: Props) => {
  return (
    <FaidInMotionContainer
      className={`content-container pb-40 2xl:max-w-[1800px] ${className}`}
    >
      <BackHomeLink to="/#latest-stuff" />
      <h1 className="heading">{title}</h1>
      {description && (
        <p className="mb-8 max-w-[600px] font-mona text-lg">{description}</p>
      )}
      {children}
    </FaidInMotionContainer>
  );
};
