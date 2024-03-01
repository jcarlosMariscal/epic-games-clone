import { CarouselSecond } from "../components/Carousel/CarouselSecond";

export const BrowsePage = () => {
  return (
    <div className="main-content w-full flex flex-col gap-14">
      <CarouselSecond
        title="Popular Genres"
        size="md"
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
            slidesPerView: 4,
            spaceBetween: 12,
          },
        }}
      />
    </div>
  );
};
