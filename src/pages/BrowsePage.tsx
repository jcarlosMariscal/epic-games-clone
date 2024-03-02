// import { games } from "googleapis/build/src/apis/games";
import { CarouselSecond } from "../components/Carousel/CarouselSecond";
import { CarouselContentSmall } from "../components/Carousel/CarouselContentSmall";
import { gameCarousel } from "../data/gameList";
import { MenuDropdown } from "../components/pure/MenuDropdown";

const games = [
  ...gameCarousel,
  ...gameCarousel,
  ...gameCarousel,
  ...gameCarousel,
  ...gameCarousel,
];

const items = [
  { name: "All", to: "/" },
  { name: "New Release", to: "/" },
  { name: "Coming Soon", to: "/" },
  { name: "Alphabetical", to: "/" },
  { name: "Price: High to Low", to: "/" },
  { name: "Price: Low to Hight", to: "/" },
];

export const BrowsePage = () => {
  return (
    <div className="main-content w-full flex flex-col gap-14">
      <CarouselSecond
        title="Popular Genres"
        size="md"
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        }}
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <div className="my-2">
            <span>
              Show:{" "}
              <MenuDropdown title="selected" items={items} animIcon="rotate" />
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {games.map((game, index) => (
              <div key={index} className="bg-epic-gray-200">
                <CarouselContentSmall
                  game={game}
                  size="lg"
                  customHeight="h-[14rem]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 bg-epic-blue-100 h-full"></div>
      </div>
    </div>
  );
};
