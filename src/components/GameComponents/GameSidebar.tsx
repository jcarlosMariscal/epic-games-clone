import dragonheirLogo from "@/assets/game/dragonheir-silent-gods-logo.png";
import ESRB_T from "@/assets/game/ESRB_T.png";
import { HyperLinkComponent } from "../pure/HyperLinkComponent";
import { ButtonComponent } from "../pure/ButtonComponent";
import { TiVendorMicrosoft } from "react-icons/ti";
import { MdShare } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { frostpunk2 } from "../../data/gameList";

export const GameSidebar = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="w-full py-2 md:p-6">
        <img
          src={dragonheirLogo}
          alt="Dragonheir Logo"
          className="hidden md:block"
        />
        <img src={frostpunk2} alt="Frost punk 2" className="block md:hidden" />
      </div>
      <div className="border border-epic-gray-100 border-opacity-80 rounded-md flex gap-4 p-4 hover:bg-epic-gray-50 cursor-pointer transition">
        <div className="w-1/6">
          <img src={ESRB_T} alt="ESRB_T" />
        </div>
        <div className="w-5/6 flex flex-col gap-2 text-sm">
          <div className="border-b border-epic-gray-50 pb-2 border-opacity-80">
            <span className="block">Teen</span>
            <span className="block opacity-60">Blood, Violence</span>
          </div>
          <span className="opacity-60">
            Users Interact, In-Game Purchases (Includes Random Items)
          </span>
        </div>
      </div>
      <div className="my-2">
        <span className="bg-epic-gray-100 rounded-sm text-[10px] text-center px-2 py-1 text-bold">
          BASE GAME
        </span>
        <span className="block text-sm mt-3">Free</span>
        <HyperLinkComponent className="text-xs underline underline-offset-1 opacity-60 hover:opacity-100">
          May include in-app purchases
        </HyperLinkComponent>
        <div className="my-2 flex flex-col gap-2">
          <ButtonComponent
            className="bg-epic-blue-100 !w-full text-xs bg-opacity-80 hover:bg-opacity-100 transition"
            type="button"
            id=""
            size="lg"
            onClick={handleClick}
          >
            GET
          </ButtonComponent>
          <ButtonComponent
            className="border border-epic-gray-50 !w-full text-xs hover:bg-epic-gray-50 transition"
            type="button"
            id=""
            size="lg"
            onClick={handleClick}
          >
            ADD TO CART
          </ButtonComponent>
          <ButtonComponent
            className="border border-epic-gray-50 !w-full !h-9 text-xs hover:bg-epic-gray-50  transition"
            type="button"
            id=""
            size="lg"
            onClick={handleClick}
          >
            ADD TO WISH LIST
          </ButtonComponent>
        </div>
        <div className="text-sm">
          <div className="flex justify-between my-2 border-b border-epic-gray-50 border-opacity-50 py-2">
            <span className="opacity-60">Developer</span>
            <span>SGRA Studio</span>
          </div>
          <div className="flex justify-between my-2 border-b border-epic-gray-50 border-opacity-50 py-2">
            <span className="opacity-60">Publisher</span>
            <span>Nuverse Pte. Ltd.</span>
          </div>
          <div className="flex justify-between my-2 border-b border-epic-gray-50 border-opacity-50 py-2">
            <span className="opacity-60">Release Date</span>
            <span>09/17/23</span>
          </div>
          <div className="flex justify-between my-2 border-b border-epic-gray-50 border-opacity-50 py-2">
            <span>Platform</span>
            <span className="text-2xl">
              <TiVendorMicrosoft />
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <ButtonComponent
            className="border border-epic-gray-50 !w-full !h-9 text-xs hover:bg-epic-gray-50  transition"
            type="button"
            id=""
            size="lg"
            onClick={handleClick}
          >
            <span className="mr-2 text-lg">
              <MdShare />
            </span>
            SHARE
          </ButtonComponent>
          <ButtonComponent
            className="border border-epic-gray-50 !w-full !h-9 text-xs hover:bg-epic-gray-50  transition"
            type="button"
            id=""
            size="lg"
            onClick={handleClick}
          >
            <span className="mr-2 text-md">
              <FaFlag />
            </span>
            REPORT
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};
