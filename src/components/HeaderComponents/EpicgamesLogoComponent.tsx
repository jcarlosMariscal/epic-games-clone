import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DropdownEpicgames } from "./DropdownEpicgames";
import { IoChevronDownSharp } from "react-icons/io5";
import epicLogo from "@/assets/epicgames-logo-light.svg";

export const EpicgamesLogoComponent = () => {
  return (
    <Menu as="div" className="relative inline-block text-right z-30">
      <div>
        <Menu.Button className="flex justify-between text-sm items-center gap-3 menu-dropdown">
          <img src={epicLogo} alt="EpicGames Logo" className="size-[1.9rem]" />
          <IoChevronDownSharp className="text-[1.4rem] icon-dropdown " />
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
        <Menu.Items className="epicgames-dropdown background-gray">
          <DropdownEpicgames />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
