import { useRef, useState } from "react";
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
import { ButtonComponent } from "../pure/ButtonComponent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type TSwiper = { activeIndex: number };

export const CarouselGame = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper] = useState();
  const [secondSwiper] = useState();
  // const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
  const swiper1Ref = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: TSwiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  return (
    <div className="w-full">
      <div className="h-[10rem] ssm:h-[14rem] sm:h-full bg-epic-red">
        <Swiper
          onSwiper={(swiper) => (swiper1Ref.current = swiper)}
          controller={{ control: secondSwiper }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
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
              <img
                src={`${game.images.image}`}
                className=" w-full md:size-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <ButtonComponent
            type="button"
            size="xs"
            className={`bg-epic-gray-100 hover:opacity-100`}
            id="slidePrev"
            onClick={() => swiper1Ref.current.slidePrev()}
          >
            <FiChevronLeft />
          </ButtonComponent>
        </div>
        <div className="w-[7rem] ssm:w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem]">
          <Swiper
            controller={{ control: firstSwiper }}
            loop={false}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              1025: {
                slidesPerView: 4,
              },
            }}
            watchSlidesProgress
            touchRatio={0.2}
            slideToClickedSlide={true}
            onSwiper={setThumbsSwiper}
            modules={[Autoplay, Navigation, Thumbs, Controller]}
            className="mySwiper"
          >
            {gameCarouselDots.map((game) => (
              <SwiperSlide
                key={game.id}
                className={`opacity-40 py-2 cursor-pointer ${
                  currentIndex === game.id - 1 ? "!opacity-100" : ""
                }`}
              >
                <img
                  src={game.thumb}
                  className="object-cover w-full h-[3.5rem] rounded-sm select-none"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="">
          <ButtonComponent
            type="button"
            size="xs"
            className={`bg-epic-gray-100 hover:opacity-100`}
            id="slideNext"
            onClick={() => swiper1Ref.current.slideNext()}
          >
            <FiChevronRight />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
