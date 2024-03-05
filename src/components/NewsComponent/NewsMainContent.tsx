import { gameCarousel } from "../../data/gameList";
import { NewMain } from "./NewMain";

export const NewsMainContent = () => {
  const new1 = gameCarousel[0];
  const new2 = gameCarousel[1];
  return (
    <div className="flex flex-col md:flex-row my-4 md:my-0 gap-6">
      {/* className, sizeImg, image, roundedImg = "rounded-md", button, buttonTo, */}
      {/* children, */}
      <NewMain
        image={new1.images.image}
        date="15H AGO"
        title="The hellish art of 33 Immortals is seriously medieval"
        description="We talked with developer Thunder Lotus about the medieval inspirations behind 33 Immortals' noteworthy art style."
      />
      <NewMain
        image={new2.images.image}
        date="15H AGO"
        title="Exclusive chat with the team behind upcoming food-fighter RAWMEN about the labor inside the love"
        description="As the TinyBuild-owned studio Animal brings its food-fighting arena shooter to a boil, the game’s creators reflect on an unexpectedly demanding development cycle"
      />
    </div>
  );
};
