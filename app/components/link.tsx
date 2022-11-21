import React, { ReactElement } from "react";

export const Link = ({ children, href, ...props }: any) => {
  return (
    <a
      href={href}
      target="blank"
      rel="noopener noreferrer"
      className="font-sligoil text-secondaryText underline hover:text-primaryText"
      {...props}
    >
      {children}
    </a>
  );
};
