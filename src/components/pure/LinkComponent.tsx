import { ReactNode } from "react";

type Link = {
  to: string;
  size: string;
  className: string;
  children: string | ReactNode;
};
export const LinkComponent = ({ to, size, className, children }: Link) => {
  const cssSize =
    size === "sm"
      ? "rounded-full size-8"
      : "px-5 py-[.4rem] rounded-md text-sm";
  return (
    <a
      href={to}
      className={`${cssSize} ${className} flex items-center justify-center opacity-80 hover:opacity-100`}
    >
      {children}
    </a>
  );
};
