import { CarouselComponent } from "../components/Carousel/CarouselComponent";

export const HomePage = () => {
  // const images = [
  //   "https://via.placeholder.com/600x300?text=Slide+1",
  //   "https://via.placeholder.com/600x300?text=Slide+2",
  //   "https://via.placeholder.com/600x300?text=Slide+3",
  // ];
  return (
    <div className="bg-epic-black text-white w-full min-h-screen flex justify-center">
      <div className="w-[88vw] md:w-[95vw] lg:w-9/12 h-full">
        <CarouselComponent />
      </div>
    </div>
  );
};
