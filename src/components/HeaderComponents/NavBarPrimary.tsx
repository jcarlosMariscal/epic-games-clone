import { IoChevronDownSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLinks } from "./NavLinks";
import { MoreOptions } from "./MoreOptions";
import { LinkComponent } from "../pure/LinkComponent";
import { ButtonComponent } from "../pure/ButtonComponent";
const navigation = [
  {
    name: "Distribution",
    to: "/",
    // current: location.pathname === "/"
  },
  {
    name: "Support",
    to: "/pokedex",
    // current: location.pathname === "/support",
  },
  {
    name: "UnrealEngine",
    to: "/",
    // current: location.pathname === "/",
  },
];
export const NavBarPrimary = () => {
  const handleClick = () => {};
  return (
    <div className="w-full bg-epic-gray-200 h-[70px] px-6 !text-white flex items-center">
      <div className="w-[12rem]  flex items-center justify-between">
        <button className="w-14 flex gap-2 justify-between items-center">
          <img
            src="./src/assets/epicgames-logo-light.svg"
            alt="Epic Games"
            className="size-8"
          />
          <IoChevronDownSharp className="text-md opacity-70" />
        </button>
        <div className="w-[2px] bg-epic-gray-50 h-8"></div>
        <LinkComponent to="/" size="" className="w-[5.8rem] opacity-100">
          <img src="./src/assets/store.svg" alt="Store" className="w-full" />
        </LinkComponent>
      </div>
      <div className="hidden ml-5 w-full xl:flex justify-between">
        <NavLinks navigation={navigation} navbar="primary" />
        <MoreOptions />
      </div>
      <div className="w-full flex justify-end xl:hidden">
        <ButtonComponent
          type="button"
          className="bg-transparent"
          id="1"
          size="sm"
          onClick={handleClick}
        >
          <RxHamburgerMenu className="text-xl" />
        </ButtonComponent>
      </div>
    </div>
  );
};
