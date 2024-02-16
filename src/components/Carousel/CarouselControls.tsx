import { IGameCarousel } from "../../data/gameList";

type CarouselProps = {
  images: IGameCarousel[];
  currentIndex: number;
  selectSlide: (param: number) => void;
};

export const CarouselControls = ({
  images,
  currentIndex,
  selectSlide,
}: CarouselProps) => {
  return (
    <div className="flex justify-center gap-4 md:grid md:grid-rows-6 md:justify-normal md:gap-1 h-full">
      {images.map((item, index: number) => (
        <div
          key={index}
          className={`rounded-md cursor-pointer ${
            currentIndex == index ? "bg-epic-gray-200" : ""
          } hover:bg-epic-gray-100 relative`}
          onClick={() => selectSlide(index)}
        >
          <div
            className={`hidden md:block z-10 absolute top-0 left-0 w-full h-full rounded-md bg-control ${
              currentIndex == index ? "control-active" : ""
            } bg-epic-gray-50`}
          ></div>
          <div className="hidden md:flex absolute left-0 top-0  p-2 items-center gap-3 z-20 w-full h-full">
            <img
              src={item.images.thumb}
              className="h-10 w-8 xl:h-14  xl:w-10 rounded-md"
              alt={item.title}
            />
            <span className="text-xs xl:text-sm">{item.title}</span>
          </div>
          <div className="block md:hidden bg-white size-2 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};
