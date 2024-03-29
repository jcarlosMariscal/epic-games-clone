import {
  LogotypeVertical,
  servicePublishing,
} from "../../data/distributionPage";
import { LinkComponent } from "../pure/LinkComponent";

export const CardMain = () => {
  const gradient =
    "rgb(3, 5, 86) linear-gradient(315deg, rgb(32, 14, 67), rgb(3, 5, 86), rgb(4, 4, 24))";
  return (
    <div
      className="w-full h-auto flex items-center rounded-sm"
      style={{
        background: gradient,
      }}
    >
      <div className="w-1/2 hidden md:block">
        <img src={servicePublishing} alt="" className="w-full" />
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-center gap-9 xl:gap-11 my-10 xl:my-16 px-8 text-center">
        <LogotypeVertical className="size-[4rem] md:size-[6rem]" />
        <span className="text-3xl font-bold">
          Now open to all developers and publishers
        </span>
        <LinkComponent
          to="/login"
          size="lg"
          className="bg-white text-epic-black w-[15rem] md:w-[13rem] text-xs font-bold hover:text-opacity-80"
        >
          SIGN UP TODAY
        </LinkComponent>
        <span className="text-sm">
          Start distributing PC games on the Epic Games Store with our new
          self-service publishing tools.
        </span>
      </div>
    </div>
  );
};
