import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Link = {
  to: string;
  size: string;
  className: string;
  children: string | ReactNode;
};
type Style = {
  sizes: {
    [key: string]: string; // Índice de tipo string con valor de tipo string
  };
};
export const LinkComponent = ({ to, size, className, children }: Link) => {
  const style: Style = {
    sizes: {
      xs: "size-8 rounded-full opacity-80",
      sm: "w-auto h-8 rounded-md",
      lg: "w-[150px] h-[3.4rem] rounded-md opacity-100",
      logo: "w-[3.8rem]",
    },
  };
  return (
    <NavLink
      to={to}
      className={`${style.sizes[size]} ${className} flex-center btn-transition`}
    >
      {children}
    </NavLink>
  );
};
