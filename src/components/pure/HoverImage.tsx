import { ReactNode, useState } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { FaPlus } from "react-icons/fa6";

type THoverImage = {
  className?: string;
  sizeImg?: string;
  image: string;
  button: boolean;
  buttonTo?: string;
  redirectTo?: string;
  roundedImg?: string;
  children?: ReactNode | ReactNode[];
};

export const HoverImage = ({
  className,
  sizeImg,
  image,
  roundedImg = "rounded-md",
  button,
  buttonTo,
  redirectTo,
  children,
}: THoverImage) => {
  const [showBtn, setShowBtn] = useState(false);
  const handleClick = () => {};
  const handleEnter = () => setShowBtn(true);
  const handleLeave = () => setShowBtn(false);
  // console.log(buttonTo);
  // console.log(redirectTo);

  return (
    <div
      className={`relative flex gap-3 ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className={`relative ${sizeImg}`}>
        <img
          src={image}
          alt="image 1"
          className={`size-full object-cover ${roundedImg}`}
        />
        {showBtn && button && (
          <ButtonComponent
            type="button"
            className="z-20 hover:text-opacity-80 text-[10px] absolute top-0 right-0"
            id=""
            size="xs"
            hover={true}
            onClick={handleClick}
          >
            <FaPlus className="size-5 p-[2px] bg-epic-black rounded-full border-2 text-white border-white" />
          </ButtonComponent>
        )}
      </div>
      {children}
      <div className="z-10 absolute-full bg-transparent hover:bg-white hover:opacity-10 cursor-pointer rounded-md"></div>
    </div>
  );
};
