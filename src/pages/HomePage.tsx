import { CarouselComponent } from "../components/Carousel/CarouselComponent";

export const HomePage = () => {
  // const images = [
  //   "https://via.placeholder.com/600x300?text=Slide+1",
  //   "https://via.placeholder.com/600x300?text=Slide+2",
  //   "https://via.placeholder.com/600x300?text=Slide+3",
  // ];
  return (
    <div className="background-dark size-full flex-center flex-col">
      <div className="main-content">
        <CarouselComponent />
      </div>
      <div className="h-20">ss</div>
    </div>
  );
};
