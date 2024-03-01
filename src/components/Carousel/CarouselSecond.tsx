import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gameCarousel } from "../../data/gameList";
import { LinkComponent } from "../pure/LinkComponent";
import { ButtonComponent } from "../pure/ButtonComponent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CarouselContentSmall } from "./CarouselContentSmall";
import { useNavigate } from "react-router-dom";

type TCarouselSecond = {
  title: string;
  size: string;
  slidesPerView: number;
  spaceBetween: number;
  breakpoints: {
    [prop: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
};

export const CarouselSecond = ({
  title,
  size = "lg",
  slidesPerView,
  spaceBetween,
  breakpoints,
}: TCarouselSecond) => {
  const navigate = useNavigate();
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const handleClick = () => {
    navigate("/distribution");
  };
  return (
    <div className="">
      <div className="flex justify-between mb-2">
        <LinkComponent to="/" size="" className="">
          {title}
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
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {games.map((game, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer"
            onClick={handleClick}
          >
            <CarouselContentSmall game={game} size={size} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
