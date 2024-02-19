import { CarouselBasic } from "../components/Carousel/CarouselBasic";
import { gameCarousel, gameCarouselDots } from "../data/gameList";
import { CarouselContent } from "../components/Carousel/CarouselContent";
import { CarouselSpecial } from "../components/Carousel/CarouselSpecial";

export const HomePage = () => {
  const carouselNormalOptions = {
    defaultPosition: 0,
    interval: 7000,
    autoplay: true,
    dots: true,
    dotsPosition: "inside", // inside | outside
    controls: true,
    controlsPosition: "leftTopOutside", // insideCenter | leftTopOutside | rightTopOutside | leftBottomOutside | rightBottomOutside
  };
  const carouselSpecialOptions = {
    interval: 7000,
    autoplay: true,
    height: "h-[10%] md:h-[50%]",
  };

  return (
    <div className="background-dark size-full flex items-center flex-col">
      <div className="main-content py-1">
        {/* <CarouselBasic {...carouselNormalOptions}>
          {gameCarousel.map((item, index) => (
            <div key={index} className="relative size-full">
              <img
                src={item.images.image}
                alt="image 1"
                className="h-full w-full"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center">
                <CarouselContent game={item} />
              </div>
            </div>
          ))}
        </CarouselBasic> */}
        <CarouselSpecial
          {...carouselSpecialOptions}
          dotsData={gameCarouselDots}
        >
          {gameCarousel.map((item, index) => (
            <div key={index} className="relative size-full">
              <img
                src={item.images.image}
                alt={item.title}
                className="hidden md:block size-full rounded-xl"
              />
              <img
                src={item.images.mobile}
                alt={item.title}
                className="block md:hidden size-full rounded-xl"
              />
              <div className="absolute inset-0 grid size-full place-items-center">
                <CarouselContent game={item} />
              </div>
            </div>
          ))}
        </CarouselSpecial>
      </div>
    </div>
  );
};
