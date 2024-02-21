import { gamesDeluxe } from "../../data/gameList";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { HoverImage } from "../pure/HoverImage";
import { ItemPrice } from "../pure/ItemPrice";

export const DeluxeEdition = () => {
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
        {gamesDeluxe.map((game) => (
          <SwiperSlide className="my-0">
            <HoverImage
              className=""
              image={game.image}
              roundedImg="rounded-2xl"
              button={true}
              buttonTo="/"
              redirectTo="/"
            />
            <div className="my-4">
              <p>{game.title}</p>
              {game.price ? (
                <ItemPrice
                  className="flex items-center justify-between text-xs my-2"
                  classPrice="flex gap-2 lg:gap-4 text-left lg:text-right text-sm lg:text-lg my-1"
                  discount={game.discount}
                  discountPrice={game.discountPrice}
                  price={game.price}
                />
              ) : (
                <a
                  href={game.linkTo}
                  className="underline underline-offset-4 block mt-4"
                >
                  {game.linkText}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
