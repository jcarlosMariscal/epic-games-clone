import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

type TSwiper = { activeIndex: number };

export const CarouselMain = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper] = useState();
  const [secondSwiper] = useState();
  const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
  // const swiper2Ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: TSwiper) => {
    setCurrentIndex(swiper.activeIndex);
    console.log(swiper);
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-10 !gap-3 h-[60%]">
      <div className="md:col-span-8 h-full">
        <Swiper
          onSwiper={(swiper) => {
            if (swiper1Ref.current !== null) {
              swiper1Ref.current = swiper;
            }
          }}
          controller={{ control: secondSwiper }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            770: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
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
                <CarouselContent game={game} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:col-span-2 h-full">
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
          slideToClickedSlide={true}
          onSwiper={setThumbsSwiper}
          modules={[Autoplay, Navigation, Thumbs, Controller]}
          className="mySwiper w-full h-full swiper-cat"
        >
          {gameCarouselDots.map((game) => (
            <SwiperSlide
              key={game.id}
              className={`!size-1 p-0 bg-white opacity-40 rounded-full md:opacity-100 md:bg-transparent md:!w-full md:!h-full md:p-2 md:rounded-md md:hover:bg-epic-gray-200 cursor-pointer ${
                currentIndex === game.id - 1
                  ? "!opacity-100 md:!bg-epic-gray-100"
                  : ""
              }`}
            >
              <div
                className="hidden md:block dot-special-bg-anim"
                style={{
                  animation:
                    currentIndex === game.id - 1
                      ? `slideBgDot 7000ms linear forwards`
                      : "",
                }}
              ></div>
              <div className="dot-special-bg ">
                <img
                  src={game.thumb}
                  className="hidden md:block object-cover w-auto rounded-md select-none h-full md:h-full"
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
