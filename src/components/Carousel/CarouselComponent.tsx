import { gameCarousel } from "../../data/gameList";
import { CarouselContent } from "./CarouselContent";
import { CarouselControls } from "./CarouselControls";
import { useEffect, useState } from "react";

export const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     currentIndex === 0 ? gameCarousel.length - 1 : currentIndex - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setCurrentIndex(
  //     currentIndex === gameCarousel.length - 1 ? 0 : currentIndex + 1
  //   );
  // };
  const selectSlide = (index: number) => setCurrentIndex(index);
  const changeSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gameCarousel.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      changeSlide();
    }, 7000); // 7000 milisegundos = 7 segundos
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div className="my-1 flex flex-col md:grid md:grid-cols-10 gap-5 h-auto">
      <div className="col-span-7 md:col-span-8 h-full">
        <CarouselContent
          images={gameCarousel}
          currentIndex={currentIndex}
          // prevSlide={prevSlide}
          // nextSlide={nextSlide}
        />
      </div>
      <div className="col-span-3 md:col-span-2">
        <CarouselControls
          images={gameCarousel}
          currentIndex={currentIndex}
          selectSlide={selectSlide}
        />
      </div>
    </div>
  );
};
