import { HoverImage } from "../pure/HoverImage";
import { HyperLinkComponent } from "../pure/HyperLinkComponent";

type TNewMain = {
  image: string;
  date: string;
  title: string;
  description: string;
};
export const NewMain = ({ image, date, title, description }: TNewMain) => {
  return (
    <div className="relative">
      <HoverImage
        className=""
        image={image}
        roundedImg="rounded-md"
        button={false}
        buttonTo=""
      ></HoverImage>
      <div className="w-full mt-4 h-40">
        <span className="block text-[10px] opacity-60">{date}</span>
        <span className="block text-sm font-bold my-2">{title}</span>
        <span className="block text-sm opacity-60">{description}</span>
      </div>
      <div className="absolute bottom-0 w-full">
        <HyperLinkComponent
          className="underline underline-offset-2 decoration-epic-gray-50 hover:decoration-white"
          type="underline"
        >
          Read more
        </HyperLinkComponent>
      </div>
    </div>
  );
};
