import { FiMenu } from "react-icons/fi";
import { NavLinks } from "./NavLinks";
import { MoreOptions } from "./MoreOptions";
import { LinkComponent } from "../pure/LinkComponent";
import { ButtonComponent } from "../pure/ButtonComponent";
import storeImg from "@/assets/store.svg";
import { EpicgamesLogoComponent } from "./EpicgamesLogoComponent";
const navigation = [
  {
    name: "Distribution",
    to: "/distribution",
    // current: location.pathname === "/"
  },
  {
    name: "Support",
    to: "/",
  },
  {
    name: "Unreal Engine",
    to: "/",
  },
];
export const NavBarPrimary = () => {
  const handleClick = () => {};
  return (
    <div className="background-gray h-[4.5rem] px-6 flex-center">
      <div className="flex gap-6">
        <EpicgamesLogoComponent />
        <div className="w-[2px] ml-1 bg-epic-gray-50 h-8"></div>
        <LinkComponent to="/" size="logo" className="opacity-100">
          <img src={storeImg} alt="Store" className="w-full" />
        </LinkComponent>
      </div>
      <div className="hidden ml-4 w-full xl:flex justify-between">
        <NavLinks navigation={navigation} navbar="primary" />
        <MoreOptions />
      </div>
      <div className="w-full flex justify-end xl:hidden">
        <ButtonComponent
          type="button"
          className="text-2xl"
          id="1"
          size="xs"
          onClick={handleClick}
        >
          <FiMenu />
        </ButtonComponent>
      </div>
    </div>
  );
};
