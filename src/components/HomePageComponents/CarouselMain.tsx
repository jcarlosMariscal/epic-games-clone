import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper/types/swiper-class";
import SwiperCore from "swiper";
import {
  Autoplay,
  Controller,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules";
import { gameCarousel, gameCarouselDots } from "../../data/gameList";
import { CarouselContent } from "../Carousel/CarouselContent";

export const CarouselMain = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
  // const swiper2Ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  // useLayoutEffect(() => {
  // if (swiper1Ref.current !== null) {
  //   swiper1Ref.current.controller.control = swiper2Ref.current;
  // }
  // }, []);
  const handleSlideChange = (swiper: Swiper) => {
    setCurrentIndex(swiper.activeIndex);
    console.log(swiper);
  };

  return (
    <div className="grid grid-cols-10 !gap-3 h-[29rem]">
      <div className="col-span-8 h-full">
        <Swiper
          onSwiper={(swiper) => {
            if (swiper1Ref.current !== null) {
              swiper1Ref.current = swiper;
            }
          }}
          // preloadImages={false}
          controller={{ control: secondSwiper }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Autoplay, FreeMode, Thumbs, Controller]}
          className="mySwiper2 h-full rounded-xl"
          onSlideChange={handleSlideChange}
        >
          {gameCarousel.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="relative h-full">
                <img src={`${game.images.image}`} className="absolute-full" />
                <CarouselContent game={game} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-2 h-full">
        <Swiper
          controller={{ control: firstSwiper }}
          loop={false}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={8}
          watchSlidesProgress
          touchRatio={0.2}
          // preloadImages={false}
          // lazy
          slideToClickedSlide={true}
          onSwiper={setThumbsSwiper}
          modules={[Autoplay, Navigation, Thumbs, Controller]}
          className="mySwiper w-full h-full swiper-cat"
        >
          {gameCarouselDots.map((game) => (
            <SwiperSlide
              key={game.id}
              className={`!w-full h-full bg-epic-blue-600 p-2 rounded-md hover:bg-epic-gray-200 cursor-pointer ${
                currentIndex === game.id - 1 ? "bg-epic-gray-100" : ""
              }`}
            >
              <div
                className="dot-special-bg-anim"
                style={{
                  animation:
                    currentIndex === game.id - 1
                      ? `slideBgDot 7000ms linear forwards`
                      : "",
                }}
              ></div>
              <div className="dot-special-bg">
                <img
                  src={game.thumb}
                  className="object-cover w-auto rounded-md select-none h-full md:h-full"
                />
                <p className="block w-full text-xs">{game.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
