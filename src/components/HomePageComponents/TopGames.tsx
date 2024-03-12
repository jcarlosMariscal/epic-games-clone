import { HoverImage } from "../pure/HoverImage";
import { ItemPrice } from "../pure/ItemPrice";
import { gameCarousel } from "../../data/gameList";
import { ButtonComponent } from "../pure/ButtonComponent";

type TTopGames = {
  title: string;
  condi: string;
};

export const TopGames = ({ title, condi }: TTopGames) => {
  let discount: string | boolean = true;
  if (condi === "1") {
    discount = "-10%";
  } else if (condi === "2") {
    discount = false;
  } else if (condi === "3") {
    discount = "-10%";
  }

  const handleClick = () => {};
  return (
    <>
      <div className="flex justify-between">
        <span>{title}</span>
        <ButtonComponent
          type="button"
          className="hover:text-opacity-80 w-[7rem] h-10 text-xs relative border border-white last:hover:bg-white last:hover:bg-opacity-30 hover:!opacity-100 rounded-sm"
          id=""
          size="sm"
          onClick={handleClick}
        >
          VIEW MORE
        </ButtonComponent>
      </div>
      <div className="my-2">
        {gameCarousel.map((game, index) => (
          <HoverImage
            key={index}
            className="w-full h-22 p-2"
            sizeImg="w-12"
            image={game.images.mobile}
            roundedImg="rounded-md"
            button={true}
            buttonTo="/"
          >
            <div className="flex flex-col justify-center">
              <p className="text-sm">{game.title}</p>
              <ItemPrice
                className="flex gap-1 items-center"
                discount={discount}
                price="334.99"
                discountPrice="301.49"
                classPrice="flex gap-2 text-xs my-2"
              ></ItemPrice>
            </div>
          </HoverImage>
        ))}
      </div>
    </>
  );
};
