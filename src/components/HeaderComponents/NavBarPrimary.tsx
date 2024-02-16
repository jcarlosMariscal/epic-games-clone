import { IoChevronDownSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLinks } from "./NavLinks";
import { MoreOptions } from "./MoreOptions";
import { LinkComponent } from "../pure/LinkComponent";
import { ButtonComponent } from "../pure/ButtonComponent";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
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
        {/* <button className="w-14 flex gap-2 justify-between items-center">
          <img
            src="./src/assets/epicgames-logo-light.svg"
            alt="Epic Games"
            className="size-8"
          />
          <IoChevronDownSharp className="text-md opacity-70" />
        </button> */}
        <Menu as="div" className="relative inline-block text-right z-50">
          <div>
            <Menu.Button className="flex w-auto justify-between text-sm items-center gap-5 text-white menu-dropdown">
              <img
                src="./src/assets/epicgames-logo-light.svg"
                alt="Epic Games"
                className="size-8"
              />
              <IoChevronDownSharp className="text-[2rem] icon-dropdown " />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-[-1rem] top-14 mt-2 w-80 xl:w-[40rem] origin-top-right rounded-lg bg-epic-gray-100">
              <div className="p-10 text-left grid grid-cols-1 xl:grid-cols-2 gap-2">
                <div className="flex flex-col gap-6">
                  <div className="">
                    <span className="text-xl font-bold">Play</span>
                    <ul className="flex flex-col gap-1">
                      <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                        Fortnite
                      </li>
                      <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                        Rocket League
                      </li>
                      <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                        Fall Guys
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <span className="text-xl font-bold">Discover</span>
                    <ul className="flex flex-col  gap-1">
                      <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                        Epic Games Store
                      </li>
                      <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                        Fab
                      </li>
                      <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                        Sketchfab
                      </li>
                      <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                        ArtStation
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" ">
                  <span className="block text-xl font-bold my-2">Create</span>
                  <ul className="flex flex-col">
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      Unreal Engine
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      Create in Fortnite
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      MetaHuman
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      TwinMotion
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      RealityScan
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      RealityCapture
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      Epic Online Services
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      Public On Epic Games Store
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      Kids Web Services
                    </li>
                    <li className="px-2 py-2 hover:bg-epic-black cursor-pointer rounded-md">
                      Developer Community
                    </li>
                  </ul>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="w-[2px] ml-5 bg-epic-gray-100 h-8"></div>
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
