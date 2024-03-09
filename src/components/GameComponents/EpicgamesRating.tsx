import { RatingStars } from "../pure/RatingStars";
import { CardRating } from "./CardRating";

export const EpicgamesRating = () => {
  return (
    <>
      <div className="my-10 flex flex-col gap-3">
        <span className="">Epic Player Ratings</span>
        <span className="text-xs opacity-60">
          Captured from players in the Epic Games ecosystem.
        </span>
        <div className="flex justify-center gap-4 my-2">
          <span className="text-2xl lg:text-6xl">4.0</span>
          <div className="flex items-center">
            <RatingStars size="size-7 lg:size-12" />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <CardRating emoji="🐣" description="Great for Beginners" />
          <CardRating emoji="🔵" description="Diverse Characters" />
          <CardRating emoji="💖" description="Beautiful Visuals" />
          <CardRating emoji="😄" description="Amazing Characters" />
          <CardRating emoji="📝" description="Amazing Storytelling" />
          <CardRating emoji="📣" description="Highly Recommended" />
        </div>
      </div>
    </>
  );
};
