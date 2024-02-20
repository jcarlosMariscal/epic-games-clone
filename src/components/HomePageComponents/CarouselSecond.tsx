import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { gameCarousel } from "../../data/gameList";
import { LinkComponent } from "../pure/LinkComponent";
import { ButtonComponent } from "../pure/ButtonComponent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CarouselContentSmall } from "../Carousel/CarouselContentSmall";

export const CarouselSecond = () => {
  const swiperRef = useRef();
  const swiper = useSwiper();
  const swiperSli = useSwiperSlide();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 5;
  const handleSlideChange = (swiper: Swiper) => {
    setCurrentIndex(swiper.activeIndex);
    console.log(swiper.activeIndex);
  };
  const games = [...gameCarousel, ...gameCarousel];
  return (
    <div className="">
      <div className="flex justify-between mb-2">
        <LinkComponent to="/" size="" className="">
          Featured Discounts
        </LinkComponent>
        <div className="flex gap-2">
          <ButtonComponent
            type="button"
            size="xs"
            className={`bg-epic-gray-100 hover:opacity-100 ${
              currentIndex === 0 ? "pointer-events-none !opacity-50" : ""
            }`}
            id="slidePrev"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <FiChevronLeft />
          </ButtonComponent>
          <ButtonComponent
            type="button"
            size="xs"
            className={`bg-epic-gray-100 hover:opacity-100 ${
              currentIndex === games.length - slidesPerView
                ? "pointer-events-none !opacity-50"
                : ""
            }`}
            id="slideNext"
            onClick={() => swiperRef.current.slideNext()}
          >
            <FiChevronRight />
          </ButtonComponent>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={12}
        slidesPerView={slidesPerView}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            {/* <img src={game.images.mobile} alt="" className="w-80" /> */}
            <CarouselContentSmall game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
