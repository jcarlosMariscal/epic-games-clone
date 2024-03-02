import { Fragment, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { Menu, Transition } from "@headlessui/react";
type TItems = {
  name: string;
  to: string;
};
type TMenuDropdown = {
  title: string;
  items: TItems[];
  animIcon: string;
};
export const MenuDropdown = ({ title, items, animIcon }: TMenuDropdown) => {
  const anim = animIcon === "rotate" ? "transform rotate-180" : "";
  const [titleDropdown, setTitleDropdown] = useState(
    title === "selected" ? items[0].name : title
  );
  const handleClick = (name: string) => {
    if (title === "selected") {
      setTitleDropdown(name);
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-right z-20">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex-center gap-2 w-full px-4 py-2 text-sm menu-dropdown">
              {titleDropdown}
              <IoChevronDownSharp
                className={`${open ? anim : ""} text-lg transition-transform`}
              />
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
                {items.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "opacity-80" : "opacity-100"
                        } text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => handleClick(item.name)}
                      >
                        {item.name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
