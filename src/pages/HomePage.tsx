import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { CarouselMain } from "../components/HomePageComponents/CarouselMain";
import { CarouselSecond } from "../components/HomePageComponents/CarouselSecond";
import { DeluxeEdition } from "../components/HomePageComponents/DeluxeEdition";
import { FreeGames } from "../components/HomePageComponents/FreeGames";
// import { HoverImage } from "../components/pure/HoverImage";

export const HomePage = () => {
  return (
    <div className="background-dark size-full flex items-center flex-col">
      <div className="main-content py-1 flex flex-col gap-14">
        <CarouselMain />
        <CarouselSecond />
        <DeluxeEdition />
        <FreeGames />
      </div>
    </div>
  );
};
