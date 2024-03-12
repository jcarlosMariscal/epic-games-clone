import { FiMenu, FiX } from "react-icons/fi";
import { NavLinks } from "./NavLinks";
import { MoreOptions } from "./MoreOptions";
import { LinkComponent } from "../pure/LinkComponent";
import { ButtonComponent } from "../pure/ButtonComponent";
import storeImg from "@/assets/store.svg";
import { EpicgamesLogoComponent } from "./EpicgamesLogoComponent";
import { useState } from "react";
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
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const handleClick = () => {
    setMenuActive(!menuActive);
    document.body.style.overflow = menuActive ? "auto" : "hidden";
  };
  const transitionLogo = menuActive ? "translate-x-[-6.5rem]" : "";
  const transitionMenu = menuActive
    ? ""
    : "translate-y-[-100%] xl:translate-y-0";
  return (
    <div className="background-gray h-[4.5rem] px-6 !w-full flex items-center xl:flex-center">
      <div className="flex gap-6">
        <EpicgamesLogoComponent />
        <div className="w-[2px] ml-1 bg-epic-gray-50 h-8"></div>
        <LinkComponent
          to="/"
          size="logo"
          className={`opacity-100 z-50 ${transitionLogo}`}
        >
          <img src={storeImg} alt="Store" className="w-full" />
        </LinkComponent>
      </div>
      <div
        className={`${transitionMenu} menu-mobile xl:bg-transparent xl:py-0 xl:ml-4 xl:flex-row xl:static xl:flex xl:justify-between`}
      >
        <NavLinks navigation={navigation} navbar="primary" />
        <MoreOptions />
      </div>
      <div className="w-full flex justify-end xl:hidden z-40">
        <ButtonComponent
          type="button"
          className={`text-2xl translate-x-2`}
          id="1"
          size="xs"
          onClick={handleClick}
        >
          {menuActive ? <FiX /> : <FiMenu />}
        </ButtonComponent>
      </div>
    </div>
  );
};
