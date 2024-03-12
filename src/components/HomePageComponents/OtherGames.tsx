import { freeGames } from "../../data/gameList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { HoverImage } from "../pure/HoverImage";

export const OtherGames = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {freeGames.map((game, index) => (
          <SwiperSlide className="my-0" key={index}>
            <HoverImage
              className=""
              image={game.image}
              roundedImg="rounded-2xl"
              button={false}
              buttonTo="/"
            />
            <div className="my-4">
              {game.id === 1 ? (
                <>
                  <p>Fall Guys</p>
                  <p className="text-sm opacity-60 mt-2">
                    Pick up your best shovel and scroll your way to the store as
                    Shovel Knight returns! Dig them up right now.
                  </p>
                </>
              ) : (
                <>
                  <p>Fortnite</p>
                  <p className="text-sm opacity-60 mt-2">
                    Get ready to raid with Wrecker. Available in the Item Shop
                    now!
                  </p>
                </>
              )}
              <a
                href=""
                className="underline underline-offset-4 block mt-4 decoration-epic-gray-50 hover:decoration-white"
              >
                Play For Free
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
