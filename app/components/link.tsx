import React from "react";

export const Link = ({ children, href, className = "", ...props }: any) => {
  return (
    <a
      href={href}
      target="blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};
