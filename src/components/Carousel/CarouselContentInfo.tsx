import { FaPlus } from "react-icons/fa6";
import { IGameCarousel } from "../../data/gameList";
import { ButtonComponent } from "../pure/ButtonComponent";

type TGame = {
  game: IGameCarousel;
};
export const CarouselContentInfo = ({ game }: TGame) => {
  const { status, description, price, buttonOne, buttonTwo, images } = game;
  const { logo } = images;
  const handleClick = () => {};
  return (
    <a className="absolute-full text-md">
      <div className="absolute-full bg-epic-black opacity-40 z-10"></div>
      <div className="absolute-full z-20">
        <div className="w-4/6 h-full p-7 flex flex-col justify-end">
          <img className="w-60 h-auto pointer-events-none" src={logo}></img>
          <p className="mt-4">{status}</p>
          <p className="mt-2">{description}</p>
          {price && <p className="mt-6">{price}</p>}
          <div className="flex gap-1 mt-2">
            <ButtonComponent
              type="button"
              className="bg-white text-epic-black hover:text-opacity-80 text-xs"
              id=""
              size="lg"
              onClick={handleClick}
            >
              {buttonOne}
            </ButtonComponent>
            {buttonTwo && (
              <ButtonComponent
                type="button"
                className="text-white hover:text-opacity-80 text-[10px] relative last:hover:bg-white last:hover:bg-opacity-30"
                id=""
                size="lg"
                hover={true}
                onClick={handleClick}
              >
                <FaPlus className="mx-1 size-5 p-[.2rem] text-sm bg-epic-black rounded-full border-2 text-white border-white" />
                {buttonTwo}
              </ButtonComponent>
            )}
            {/* {buttonOne && (
              <a className="w-[10rem] h-14 bg-white text-epic-black text-sm flex items-center justify-center cursor-pointer rounded-md">
                {buttonOne}
              </a>
            )} */}
            {/* {buttonTwo && (
              <a className="w-[10rem] text-[.6rem] h-14 text-white cursor-pointer rounded-md relative last:hover:bg-white last:hover:bg-opacity-40 font-bold">
                <div className="z-20 absolute left-0 top-0 w-full h-full flex items-center justify-center">
                  <FaPlus className="mx-1 size-6 p-1 text-sm bg-epic-black rounded-full border-2 text-white border-white" />
                  {buttonTwo}
                </div>
                <div className="z-10 absolute left-0 top-0 w-full h-full"></div>
              </a>
            )} */}
          </div>
        </div>
      </div>
    </a>
  );
};
