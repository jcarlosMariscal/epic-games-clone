import { ButtonComponent } from "../pure/ButtonComponent";
import { FaPlus } from "react-icons/fa6";
import { IGameCarousel } from "../../data/gameList";
import { useState } from "react";

type TGame = {
  game: IGameCarousel;
};
export const CarouselContentSmall = ({ game }: TGame) => {
  const [showBtn, setShowBtn] = useState(false);
  const handleClick = () => {};
  const handleEnter = () => setShowBtn(true);
  const handleLeave = () => setShowBtn(false);
  return (
    <>
      <div
        className="h-[30rem] md:h-[16rem] relative"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <img
          src={game.images.mobile}
          alt="image 1"
          className="size-full rounded-md object-cover"
        />
        <div className="absolute-full bg-transparent hover:bg-white hover:opacity-5 cursor-pointer rounded-md"></div>
        {showBtn && (
          <ButtonComponent
            type="button"
            className="hover:text-opacity-80 text-[10px] absolute top-0 right-0"
            id=""
            size="xs"
            hover={true}
            onClick={handleClick}
          >
            <FaPlus className="size-5 p-[2px] bg-epic-black rounded-full border-2 text-white border-white" />
          </ButtonComponent>
        )}
      </div>
      <div className="my-1 flex flex-col gap-1">
        <p className="text-[10px]">BASE GAME</p>
        <h4 className="text-sm bont-bold">Achilles Legends Untold</h4>
        <div className="flex items-center justify-between">
          <button className="bg-epic-blue-100 text-xs p-1 rounded-sm">
            -35%
          </button>
          <div className="flex flex-col text-sm">
            <span className="opacity-80 line-through">MX$299</span>
            <span>MX$119.60</span>
          </div>
        </div>
      </div>
    </>
  );
};
