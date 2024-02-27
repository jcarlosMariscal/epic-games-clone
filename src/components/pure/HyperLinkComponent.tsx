import { ReactNode } from "react";

type THyperLink = {
  children: string | ReactNode;
  to?: string;
  className?: string;
};
export const HyperLinkComponent = ({ children, className }: THyperLink) => {
  return (
    <a
      // href=""
      className={`hover:text-epic-blue-100 cursor-pointer btn-transition ${className}`}
    >
      {children}
    </a>
  );
};
