import { IGameCarousel } from "../../data/gameList";
import { HoverImage } from "../pure/HoverImage";
import { ItemPrice } from "../pure/ItemPrice";

type TGame = {
  game: IGameCarousel;
};
export const CarouselContentSmall = ({ game }: TGame) => {
  return (
    <>
      <HoverImage
        className="h-[30rem] md:h-[16rem]"
        sizeImg="size-full"
        image={game.images.mobile}
        button={true}
        buttonTo="/"
        redirectTo="/"
      />
      <div className="my-1 flex flex-col gap-1">
        <p className="text-[10px]">BASE GAME</p>
        <h4 className="text-sm bont-bold">Achilles Legends Untold</h4>
        <ItemPrice
          className="flex items-center justify-between text-xs"
          classPrice="flex flex-col text-right text-xs my-2"
          discount="-35%"
          discountPrice="299"
          price="119.60"
        />
      </div>
    </>
  );
};
