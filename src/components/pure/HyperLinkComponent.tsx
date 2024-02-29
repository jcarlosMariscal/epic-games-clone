import { ReactNode } from "react";

type THyperLink = {
  children: string | ReactNode;
  to?: string;
  className?: string;
  type?: string;
};
export const HyperLinkComponent = ({
  children,
  className,
  type = "underline",
}: THyperLink) => {
  const typeCss =
    type === "hover" ? "hover:text-epic-blue-100 btn-transition" : "";
  return (
    <a
      // href=""
      className={`cursor-pointer ${className} ${typeCss}`}
    >
      {children}
    </a>
  );
};
