import { CarouselGame } from "../components/Carousel/CarouselGame";
import { GameNav } from "../components/GameComponents/GameNav";
import { GameTitle } from "../components/GameComponents/GameTitle";

export const GamePage = () => {
  return (
    <div className="w-full">
      <GameTitle />
      <GameNav />
      <div className="md:grid md:grid-cols-12 gap-10 w-full">
        <div className="md:col-span-8">
          <CarouselGame />
        </div>
        <div className="col-span-4 w-full h-10"></div>
      </div>
    </div>
  );
};
