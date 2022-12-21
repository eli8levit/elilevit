import React from "react";

export const Link = ({ children, href, className = "", ...props }: any) => {
  return (
    <a
      href={href}
      target="blank"
      rel="noopener noreferrer"
      className={`font-sligoil ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
