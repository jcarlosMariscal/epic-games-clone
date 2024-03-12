import { IGameCarousel } from "../../data/gameList";
import { HoverImage } from "../pure/HoverImage";
import { ItemPrice } from "../pure/ItemPrice";

type TGame = {
  game: IGameCarousel;
  size: string;
  customHeight?: string;
};
type TStyle = {
  size: {
    [prop: string]: string;
  };
  img: {
    [prop: string]: string;
  };
};
export const CarouselContentSmall = ({
  game,
  size = "lg",
  customHeight,
}: TGame) => {
  const style: TStyle = {
    size: {
      md: "h-[9rem] md:h-[13rem] p-5 bg-epic-gray-100 rounded-md",
      lg: "w-full h-[16rem] ssm:h[20rem] sm:h-[30rem] md:h-[16rem]",
    },
    img: {
      md: "w-full h-[4rem] md:h-[8rem]",
      lg: "size-full",
    },
  };
  return (
    <>
      <HoverImage
        className={`${customHeight ? customHeight : style.size[size]} flex-col`}
        sizeImg={`${style.img[size]}`}
        image={game.images.mobile}
        button={size === "md" ? false : true}
        buttonTo="/"
      >
        {size === "md" && (
          <span className="text-xs md:text-md font-bold">
            Action-Adventure Games
          </span>
        )}
      </HoverImage>
      {size !== "md" && (
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
      )}
    </>
  );
};
