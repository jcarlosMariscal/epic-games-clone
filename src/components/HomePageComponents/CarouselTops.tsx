import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { TopGames } from "./TopGames";

export const CarouselTops = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="my-0 px-1">
          <TopGames title="Top Sellers" condi="1" />
        </SwiperSlide>
        <SwiperSlide className="my-0 px-1">
          <TopGames title="Top Player Rated" condi="2" />
        </SwiperSlide>
        <SwiperSlide className="my-0 px-1">
          <TopGames title="Coming Soon" condi="3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
