// import { games } from "googleapis/build/src/apis/games";
import { CarouselSecond } from "../components/Carousel/CarouselSecond";
import { CarouselContentSmall } from "../components/Carousel/CarouselContentSmall";
import { gameCarousel } from "../data/gameList";
import { MenuDropdown } from "../components/pure/MenuDropdown";
import { FiltersComponent } from "../components/pure/FiltersComponent";

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
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <div className="mb-3">
            <span className="text-sm opacity-60">Show:</span>
            <MenuDropdown title="selected" items={items} animIcon="rotate" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {games.map((game, index) => (
              <div key={index}>
                <CarouselContentSmall
                  game={game}
                  size="lg"
                  customHeight="h-[14rem]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 h-full">
          <FiltersComponent />
        </div>
      </div>
    </div>
  );
};
