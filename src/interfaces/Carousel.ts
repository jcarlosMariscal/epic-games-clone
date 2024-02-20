import { ReactNode } from "react";

type ItemsPerPage = {
  auto: number;
  md: number;
};
export interface ICarouselBasic {
  interval: number;
  autoplay: boolean;
  dots: boolean;
  dotsPosition: string;
  controls: boolean;
  controlsPosition: string;
  className: string;
  children: ReactNode[];
  title: string;
  itemsPerPage: ItemsPerPage;
}
