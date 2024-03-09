import { RatingStars } from "../pure/RatingStars";

export const GameTitle = () => {
  return (
    <div className="my-2">
      <span className="text-3xl">Dragonheir: Silent Gods</span>
      <div className="my-2 flex gap-4">
        <div className="flex gap-2 items-center">
          <div className="flex items-center">
            <RatingStars size="size-4" />
          </div>
          <span className="text-[10px] bg-epic-gray-50 px-2 py-[2px] rounded-sm font-bold">
            4.0
          </span>
        </div>
        <div className="gap-2 hidden md:flex">
          <span>🐣</span>
          <span>Great for Beginners</span>
        </div>
        <div className="gap-2  hidden md:flex">
          <span>🔵</span>
          <span>Diverse Characters</span>
        </div>
      </div>
    </div>
  );
};
