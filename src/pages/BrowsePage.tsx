// import { games } from "googleapis/build/src/apis/games";
import { CarouselSecond } from "../components/Carousel/CarouselSecond";
import { CarouselContentSmall } from "../components/Carousel/CarouselContentSmall";
import { gameCarousel } from "../data/gameList";
import { MenuDropdown } from "../components/pure/MenuDropdown";
import { FiltersComponent } from "../components/pure/FiltersComponent";
import { Pagination } from "../components/pure/Pagination";

const games = [
  ...gameCarousel,
  ...gameCarousel,
  ...gameCarousel,
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
        <div className="col-span-12 lg:col-span-9">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <span className="text-sm opacity-60">Show:</span>
              <MenuDropdown title="selected" items={items} animIcon="rotate" />
            </div>
            <div className="block lg:hidden">
              <FiltersComponent screen="sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {games.map((game, index) => (
              <div key={index}>
                <CarouselContentSmall
                  game={game}
                  size="lg"
                  customHeight="h-[50%] lg:h-[10rem] xl:h-[14rem]"
                />
              </div>
            ))}
          </div>
          <Pagination />
        </div>
        <div className="col-span-3 h-full hidden lg:block">
          <FiltersComponent screen="lg" />
        </div>
      </div>
    </div>
  );
};
