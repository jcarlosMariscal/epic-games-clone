import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

type Link = {
  to: string;
  size: string;
  className: string;
  children: string | ReactNode;
  navbar?: string;
};
type Style = {
  sizes: {
    [key: string]: string; // Índice de tipo string con valor de tipo string
  };
};
export const LinkComponent = ({
  to,
  size,
  className,
  children,
  navbar,
}: Link) => {
  const location = useLocation();
  const pathname = location.pathname;
  // console.log(location);
  // console.log(location.pathname);

  // console.log(pathname);
  // console.log(typeof pathname);

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
      className={`${style.sizes[size]} ${className} flex items-center xl:flex-center btn-transition`}
      style={({ isActive }) => {
        return {
          background:
            navbar === "primary"
              ? isActive
                ? pathname !== "/"
                  ? "#404044"
                  : ""
                : ""
              : "",
          // color: isActive ? (pathname !== "/" ? "white" : "") : "",
          color: isActive ? "white" : "",
        };
      }}
    >
      {children}
    </NavLink>
  );
};
