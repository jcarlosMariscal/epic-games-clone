import { gameCarousel } from "../../data/gameList";
import { useEffect, useState } from "react";
import { Controls } from "./Controls";
import { DotsBasic } from "./DotsBasic";

interface ICarousel {
  interval: number;
  autoplay: boolean;
  dots: boolean;
  dotsPosition: string;
  controls: boolean;
  controlsPosition: string;
  children: [];
}

export const CarouselBasic = ({
  interval,
  autoplay,
  dots,
  dotsPosition,
  controls,
  controlsPosition,
  children,
}: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(controlsPosition);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? gameCarousel.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === children.length - 1 ? 0 : currentIndex + 1
    );
  };
  const selectSlide = (index: number) => setCurrentIndex(index);
  useEffect(() => {
    if (autoplay) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === children.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, autoplay, interval, children]);
  console.log(children);
  const translateX = `translateX(-${currentIndex * (100 / children.length)}%)`;
  return (
    <>
      <div className={`relative overflow-hidden`}>
        <div
          className={`flex transition-300`}
          style={{ transform: translateX, width: `${100 * children.length}%` }}
        >
          {children.map((child, index: number) => (
            <div key={index} className="h-[30rem] w-full bg-epic-blue-50">
              {child}
            </div>
          ))}
        </div>
        {/* <div className="w-full absolute bottom-0 h-6 bg-epic-blue-50">

        </div> */}
        {dots && (
          <div
            className={`flex justify-center gap-5 my-3 ${
              dotsPosition === "inside" ? "absolute w-full bottom-0" : ""
            }`}
          >
            {children.map((_, index) => (
              <DotsBasic
                key={index}
                id={index}
                currentId={currentIndex}
                handleClick={selectSlide}
              />
            ))}
          </div>
        )}
        {controls && (
          <Controls
            left="absolute top-1/2 left-4"
            right="absolute top-1/2 right-4"
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        )}
      </div>
    </>
  );
};
