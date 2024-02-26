import { freeGames } from "../../data/gameList";
import { ButtonComponent } from "../pure/ButtonComponent";
import { HoverImage } from "../pure/HoverImage";

type TCarouselTitle = {
  title: string;
  button: boolean;
  buttonText: string;
};

export const CarouselTitle = ({
  title,
  button,
  buttonText,
}: TCarouselTitle) => {
  const games = [...freeGames, freeGames[0]];
  const handleClick = () => {};
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-lg">{title}</span>
        {button && (
          <ButtonComponent
            type="button"
            className="hover:text-opacity-80 w-auto px-4 h-8 text-xs relative border border-white hover:border-opacity-50 hover:!opacity-100 rounded-sm"
            id=""
            size="sm"
            onClick={handleClick}
          >
            {buttonText}
          </ButtonComponent>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        {games.map((game, index) => (
          <>
            <div className="flex flex-col">
              <HoverImage
                key={index}
                className="!w-full"
                image={game.image}
                roundedImg="rounded-md"
                button={true}
              />
              <div className="my-1 flex flex-col gap-1 text-sm">
                <span className="text-[10px] opacity-60">EXPERIENCE</span>
                <span>{game.title}</span>
                <span className="mt-2">
                  {game.freeNow ? "Free" : "Coming Soon"}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
