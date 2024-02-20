import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { CarouselMain } from "../components/HomePageComponents/CarouselMain";
import { CarouselSecond } from "../components/HomePageComponents/CarouselSecond";

export const HomePage = () => {
  return (
    <div className="background-dark size-full flex items-center flex-col">
      <div className="main-content py-1 flex flex-col gap-14">
        <CarouselMain />
        <CarouselSecond />
      </div>
    </div>
  );
};
