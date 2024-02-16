import { IGameCarousel } from "../../data/gameList";
import { FaPlus } from "react-icons/fa6";
type CarouselProps = {
  images: IGameCarousel[];
  currentIndex: number;
  // prevSlide: () => void;
  // nextSlide: () => void;
};
export const CarouselContent = ({
  images,
  currentIndex,
}: // prevSlide,
// nextSlide,
CarouselProps) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className="flex gap-6 md:gap-0 transition-transform duration-300 ease-in-out transform w-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((item: IGameCarousel, index: number) => (
          <>
            <div
              key={index}
              className="hidden md:block w-[100%] h-[20rem] xl:w-[58rem] md:h-[25rem] customMd:h-[27.5rem] lg:h-[23rem] xl:h-[29rem] rounded-md bg-center bg-cover relative"
              style={{
                backgroundImage: `url(${item.images.image})`,
              }}
            >
              <a className="absolute left-0 top-0 w-full h-full">
                <div className="w-6/12 h-full p-7 flex flex-col-reverse">
                  <div className="w-full flex gap-1 mt-4">
                    {item.buttonOne && (
                      <a className="w-[9rem] h-12 bg-white text-epic-black text-sm flex items-center justify-center cursor-pointer rounded-md">
                        {item.buttonOne}
                      </a>
                    )}
                    {item.buttonTwo && (
                      <a className="w-[9rem] text-[.6rem] h-12 text-white cursor-pointer rounded-md relative last:hover:bg-white last:hover:bg-opacity-40 font-bold">
                        <div className="z-20 absolute left-0 top-0 w-full h-full flex items-center justify-center">
                          <FaPlus className="mx-1 size-6 p-1 text-sm bg-epic-black rounded-full border-2 text-white border-white" />
                          {item.buttonTwo}
                        </div>
                        <div className="z-10 absolute left-0 top-0 w-full h-full"></div>
                      </a>
                    )}
                  </div>
                  {item.price && <p className="font-bold mt-6">{item.price}</p>}
                  <p className="font-bold">{item.description}</p>
                  <p className="font-bold mt-6">{item.status}</p>
                  <img
                    className="w-60 h-auto bg-no-repeat pointer-events-none"
                    src={item.images.logo}
                  ></img>
                </div>
              </a>
            </div>
            <div
              key={index}
              className="block md:hidden w-[26rem] h-[30rem] rounded-md bg-center bg-cover relative"
              style={{
                backgroundImage: `url(${item.images.mobile})`,
              }}
            >
              <a className="absolute left-0 top-0 w-full h-full">
                <div className="absolute top-1 right-1 flex gap-1 mt-4">
                  {item.buttonTwo && (
                    <a className="size-8 text-[.6rem] text-white cursor-pointer rounded-md relativ">
                      <FaPlus className="size-6 p-1 text-sm bg-epic-black rounded-full border-2 text-white border-white" />
                    </a>
                  )}
                </div>
                <div className="w-full h-full p-7 flex flex-col justify-end">
                  <img
                    className="w-60 h-auto bg-no-repeat pointer-events-none"
                    src={item.images.logo}
                  ></img>
                  <p className="font-bold mt-6">{item.status}</p>
                  <p className="font-bold">{item.description}</p>
                  {item.price && <p className="font-bold mt-6">{item.price}</p>}
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
      {/* <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-epic-black px-3 py-1 rounded-full shadow-md"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-epic-black px-3 py-1 rounded-full shadow-md"
          onClick={nextSlide}
        >
          &#10095;
        </button> */}
    </div>
  );
};
