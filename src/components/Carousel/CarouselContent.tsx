import { FaPlus } from "react-icons/fa6";
import { IGameCarousel } from "../../data/gameList";
import { ButtonComponent } from "../pure/ButtonComponent";

type TGame = {
  game: IGameCarousel;
};
export const CarouselContent = ({ game }: TGame) => {
  const { status, description, price, buttonOne, buttonTwo, images } = game;
  const { logo } = images;
  const handleClick = () => {};
  return (
    <>
      <img
        src={game.images.image}
        alt={game.title}
        className="hidden md:block size-full rounded-xl"
      />
      <img
        src={game.images.mobile}
        alt={game.title}
        className="block md:hidden size-full rounded-xl"
      />
      <div className="absolute inset-0 grid size-full place-items-center">
        <a className="absolute-full text-md">
          <div className="absolute-full bg-epic-black opacity-40 z-10"></div>
          <div className="absolute-full z-20">
            <div className="w-full md:w-4/6 h-full p-7 flex flex-col justify-end">
              <img
                className="w-[8rem] xl:w-60 h-auto pointer-events-none"
                src={logo}
              ></img>
              <p className="mt-4 text-xs md:text-md">{status}</p>
              <p className="text-sm md:text-md mt-2">{description}</p>
              {price && <p className="mt-6 text-xs md:text-md">{price}</p>}
              <div className="hidden md:flex gap-1 mt-2">
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
                    className="hover:text-opacity-80 text-[10px] relative last:hover:bg-white last:hover:bg-opacity-30"
                    id=""
                    size="lg"
                    hover={true}
                    onClick={handleClick}
                  >
                    <FaPlus className="mx-1 size-5 p-[.2rem] text-sm bg-epic-black rounded-full border-2 text-white border-white" />
                    {buttonTwo}
                  </ButtonComponent>
                )}
              </div>
              <div className="absolute top-1 right-1 md:hidden gap-1 mt-2">
                {buttonTwo && (
                  <ButtonComponent
                    type="button"
                    className="hover:text-opacity-80 text-[10px] relative"
                    id=""
                    size="xs"
                    hover={true}
                    onClick={handleClick}
                  >
                    <FaPlus className="size-5 p-[2px] bg-epic-black rounded-full border-2 text-white border-white" />
                  </ButtonComponent>
                )}
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
