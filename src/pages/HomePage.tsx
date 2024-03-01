import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { CarouselMain } from "../components/HomePageComponents/CarouselMain";
import { CarouselSecond } from "../components/Carousel/CarouselSecond";
import { DeluxeEdition } from "../components/HomePageComponents/DeluxeEdition";
import { FreeGames } from "../components/HomePageComponents/FreeGames";
import { CarouselTitle } from "../components/HomePageComponents/CarouselTitle";
import { OtherGames } from "../components/HomePageComponents/OtherGames";
import { CarouselTops } from "../components/HomePageComponents/CarouselTops";
import { OtherComponent } from "../components/HomePageComponents/OtherComponent";
// import { OtherGames } from "../components/HomePageComponents/OtherGames";
// import { HoverImage } from "../components/pure/HoverImage";

export const HomePage = () => {
  return (
    <div className="main-content w-full flex flex-col gap-14">
      <CarouselMain />
      <CarouselSecond
        title="Featured Discounts"
        size="lg"
        slidesPerView={1.4}
        spaceBetween={12}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
        }}
      />
      <DeluxeEdition />
      <FreeGames />
      <CarouselTitle
        title="Fornite Experiences"
        button={true}
        buttonText="VISIT FORNITE.COM"
      />
      <OtherGames />
      <CarouselTops />
      <OtherComponent />
      <CarouselTitle title="Trending" button={true} buttonText="VIEW MORE" />
    </div>
  );
};
