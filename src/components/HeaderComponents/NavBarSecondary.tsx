import { Fragment } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { InputSearch } from "../pure/InputSearch";
import { NavLinks } from "./NavLinks";
import { Menu, Transition } from "@headlessui/react";
const navigation = [
  {
    name: "Discover",
    to: "/",
    // current: location.pathname === "/"
  },
  {
    name: "Browse",
    to: "/pokedex",
    // current: location.pathname === "/support",
  },
  {
    name: "News",
    to: "/",
    // current: location.pathname === "/",
  },
];
export const NavBarSecondary = () => {
  return (
    <div className="background-dark h-24 flex-center sticky top-0 z-40">
      <div className="w-9/12 flex items-center gap-4">
        <InputSearch
          placeholder="Search Store"
          size="w-10 xl:w-[13.9rem] h-10"
          className="bg-epic-gray-100"
        />
        <div className="hidden xl:block">
          <NavLinks navigation={navigation} navbar="secondary" />
        </div>
        <div className="block xl:hidden">
          <Menu as="div" className="relative inline-block text-right">
            <div>
              <Menu.Button className="flex-center gap-2 w-full px-4 py-2 text-sm menu-dropdown">
                Discover
                <IoChevronDownSharp className="text-lg icon-dropdown" />
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
              <Menu.Items className="absolute left-0 mt-2 w-40 origin-top-right rounded-sm background-gray">
                <div className="p-1">
                  {navigation.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "opacity-80" : "opacity-100"
                          } text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {item.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
