import { gameCarousel } from "../../data/gameList";
import { Pagination } from "../pure/Pagination";
import { NewList } from "./NewList";

const news = [
  ...gameCarousel,
  ...gameCarousel,
  ...gameCarousel,
  ...gameCarousel,
  ...gameCarousel,
];
export const NewsList = () => {
  return (
    <div className="my-14">
      {news.map((item, index) => (
        <NewList
          key={index}
          image={item.images.image}
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
      doloribus corporis quos ipsam ea doloremque vel, perspiciatis cumque
      laboriosam rerum."
          date="4D AGO"
        />
      ))}
      <Pagination />
    </div>
  );
};
