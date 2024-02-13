import { MouseEventHandler, ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;
type Button = {
  type: ButtonType;
  className: string;
  id: string;
  size: string;
  onClick: MouseEventHandler;
  children: string | ReactNode;
};
export const ButtonComponent = ({
  type,
  className,
  id,
  size,
  onClick,
  children,
}: Button) => {
  const cssSize =
    size === "sm"
      ? "rounded-full size-8"
      : "px-5 py-[.4rem] rounded-md text-sm";
  return (
    <button
      type={type ? type : "button"}
      className={`${cssSize} ${className} flex items-center justify-center opacity-80 hover:opacity-100 transition ease-in-out delay-100`}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
