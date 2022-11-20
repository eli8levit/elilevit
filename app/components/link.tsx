import React from "react";

export const Link = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="blank"
      rel="noopener noreferrer"
      className="font-sligoil text-secondaryText underline hover:text-primaryText"
    >
      {children}
    </a>
  );
};
