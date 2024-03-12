import { freeGames } from "../../data/gameList";
import { ButtonComponent } from "../pure/ButtonComponent";
import { HoverImage } from "../pure/HoverImage";

export const FreeGames = () => {
  const handleClick = () => {};
  return (
    <div className="bg-epic-gray-100 p-9 rounded-md">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-4 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg size-9"
            viewBox="0 0 32 32"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path d="M30.443 16.605H19.72v-3.46h10.724v3.46zm-2.075 12.308c0 .397-.576.838-1.402.838h-7.247V17.99h8.648v10.924zm-14.876.838h4.843v-18.68h-4.843v18.68zm-10.033-.838V17.99h8.649v11.762H4.861c-.826 0-1.402-.441-1.402-.838zM1.384 13.146h10.724v3.46H1.384v-3.46zm1.773-4.324c0-1.622 1.319-2.94 2.94-2.94 2.752 0 5.093 3.78 5.575 5.88H6.097a2.944 2.944 0 0 1-2.94-2.94zm22.573-2.94c1.621 0 2.94 1.318 2.94 2.94 0 1.621-1.319 2.94-2.94 2.94h-5.574c.481-2.1 2.822-5.88 5.574-5.88zm5.405 5.88h-2.244a4.304 4.304 0 0 0 1.163-2.94 4.329 4.329 0 0 0-4.324-4.325c-2.89 0-5.227 2.813-6.341 5.294a.686.686 0 0 0-.362-.105H12.8a.686.686 0 0 0-.362.105c-1.114-2.481-3.45-5.294-6.34-5.294a4.329 4.329 0 0 0-4.325 4.325c0 1.136.444 2.168 1.163 2.94H.692a.692.692 0 0 0-.692.692v4.843c0 .382.31.692.692.692h1.384v10.924c0 1.246 1.223 2.222 2.785 2.222h22.105c1.562 0 2.785-.976 2.785-2.222V17.99h1.384c.382 0 .692-.31.692-.692v-4.843a.692.692 0 0 0-.692-.692zM15.914 4.151c.381 0 .691-.31.691-.692V.692a.692.692 0 0 0-1.383 0v2.767c0 .382.31.692.692.692"></path>
              <path d="M19.546 5.362a.69.69 0 0 0 .49-.203l1.037-1.037a.692.692 0 1 0-.978-.979l-1.038 1.038a.692.692 0 0 0 .489 1.181M11.792 5.16a.69.69 0 0 0 .978 0 .692.692 0 0 0 0-.979l-1.038-1.038a.692.692 0 1 0-.978.979l1.038 1.037z"></path>
            </g>
          </svg>
          Free Games
        </span>
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
      <div className="flex flex-col sm:flex-row gap-4 mt-5">
        {freeGames.map((game, index) => (
          <div className="flex flex-col" key={index}>
            <HoverImage
              key={game.id}
              className="!w-full"
              image={game.image}
              roundedImg="rounded-t-md"
              button={false}
              buttonTo="/"
            />
            <div
              className={`${
                game.freeNow ? "bg-epic-blue-100" : "bg-epic-black"
              } text-center h-auto w-[99.9%] rounded-b-lg`}
            >
              <span className="text-sm font-bold">
                {game.freeNow ? "FREE NOW" : "COMING SOON"}
              </span>
            </div>
            <div className="mt-7 flex flex-col text-sm">
              <span>{game.title}</span>
              <span className="opacity-60">{game.rangeDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
