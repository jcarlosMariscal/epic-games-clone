import { HyperLinkComponent } from "../pure/HyperLinkComponent";

type TNewList = {
  image: string;
  title: string;
  description: string;
  date: string;
};

export const NewList = ({ image, title, description, date }: TNewList) => {
  return (
    <div className="w-full borderTop-opacity py-6 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-[14rem]">
        <img
          src={image}
          className="size-full rounded-md object-cover"
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-3 md:gap-0">
        <span className="block text-[10px] opacity-60">{date}</span>
        <span className="block text-sm font-bold my-2">{title}</span>
        <span className="block text-sm opacity-60">{description}</span>
        <HyperLinkComponent className="a-hover-decoration" type="underline">
          Read more
        </HyperLinkComponent>
      </div>
    </div>
  );
};
