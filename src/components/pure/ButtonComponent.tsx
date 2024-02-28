import { MouseEventHandler, ReactNode } from "react";

type TButtonType = "button" | "submit" | "reset" | undefined;
type TButton = {
  type: TButtonType;
  className: string;
  id: string;
  size: string;
  hover?: boolean;
  onClick: MouseEventHandler;
  children: string | ReactNode;
};
type Style = {
  sizes: {
    [key: string]: string; // Índice de tipo string con valor de tipo string
  };
};
export const ButtonComponent = ({
  type,
  className,
  id,
  size,
  hover = false,
  onClick,
  children,
}: TButton) => {
  const style: Style = {
    sizes: {
      xs: "size-8 rounded-full opacity-80",
      sm: "w-[5.6rem] h-8 rounded-md hover:opacity-80 ml-3",
      lg: "w-[150px] h-[2.5rem] xl:w-[150px] xl:h-[3.4rem] rounded-md opacity-100",
      login: "w-20 h-16 rounded-md opacity-90 hover:opacity-100",
    },
  };
  return (
    <button
      type={type ? type : "button"}
      className={`${style.sizes[size]} ${className} flex-center btn-transition`}
      id={id}
      onClick={onClick}
    >
      {hover ? (
        <div className="z-10 absolute-full flex-center">{children}</div>
      ) : (
        children
      )}
    </button>
  );
};
