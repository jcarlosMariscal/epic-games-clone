import { useEffect, useState } from "react";
import { DotsSpecial } from "./DotsSpecial";
type IGame = {
  id: number;
  title: string;
  thumb: string;
};
interface ICarousel {
  interval: number;
  autoplay: boolean;
  height: string;
  children: [];
  containerClass?: string;
  containerCarousel?: string;
  containerDots?: string;
  dotsData: IGame[];
}

export const CarouselSpecial = ({
  interval,
  autoplay,
  height,
  children,
  containerClass = "flex flex-col md:grid md:grid-cols-12 lg:grid-cols-10 gap-5",
  containerCarousel = "md:col-span-9 lg:col-span-8",
  containerDots = "md:col-span-3 lg:col-span-2",
  dotsData,
}: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const translateX = `translateX(-${currentIndex * (100 / children.length)}%)`;
  return (
    <>
      <div className={containerClass}>
        <div className={containerCarousel}>
          <div className={`relative overflow-hidden`}>
            <div
              className={`flex transition-300`}
              style={{
                transform: translateX,
                width: `${100 * children.length}%`,
              }}
            >
              {children.map((child, index: number) => (
                <div key={index} className={`${height} w-full`}>
                  {child}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${containerDots}`}>
          <div className="flex-center gap-5 md:grid md:grid-rows-6 md:justify-normal md:gap-1 h-full">
            {dotsData.map((item: IGame) => (
              <DotsSpecial
                key={item.id}
                interval={interval}
                currentId={currentIndex}
                selectSlide={selectSlide}
                game={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
