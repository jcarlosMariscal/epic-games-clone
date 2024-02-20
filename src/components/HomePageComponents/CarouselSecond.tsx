import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gameCarousel } from "../../data/gameList";
import { LinkComponent } from "../pure/LinkComponent";
import { ButtonComponent } from "../pure/ButtonComponent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CarouselContentSmall } from "../Carousel/CarouselContentSmall";

export const CarouselSecond = () => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 5;
  type TSwiper = {
    activeIndex: number;
  };
  const handleSlideChange = (swiper: TSwiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  const games = [...gameCarousel, ...gameCarousel];
  const disabled = (currentIndex: number, limit: number) => {
    return currentIndex === limit ? "pointer-events-none !opacity-50" : "";
  };
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
            className={`bg-epic-gray-100 hover:opacity-100 ${disabled(
              currentIndex,
              0
            )}`}
            id="slidePrev"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <FiChevronLeft />
          </ButtonComponent>
          <ButtonComponent
            type="button"
            size="xs"
            className={`bg-epic-gray-100 hover:opacity-100`}
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
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <CarouselContentSmall game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
