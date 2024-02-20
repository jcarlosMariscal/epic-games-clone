import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { CarouselMain } from "../components/HomePageComponents/CarouselMain";
import { CarouselSecond } from "../components/HomePageComponents/CarouselSecond";
import { DeluxeEdition } from "../components/HomePageComponents/DeluxeEdition";
// import { HoverImage } from "../components/pure/HoverImage";

export const HomePage = () => {
  return (
    <div className="background-dark size-full flex items-center flex-col">
      <div className="main-content py-1 flex flex-col gap-14">
        <CarouselMain />
        <CarouselSecond />
        {/* <HoverImage
          className="h-[30rem] w-[60rem] md:h-full relative bg-epic-gray-50 p-6"
          sizeImg="w-20"
          buttonTo="/"
          redirectTo="/"
          button={true}
        >
          <div className="flex flex-col">
            <p>Fornite</p>
            <p>Free</p>
          </div>
        </HoverImage> */}
        <DeluxeEdition />
      </div>
    </div>
  );
};
