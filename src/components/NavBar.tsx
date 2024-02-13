import { IoChevronDownSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { ButtonComponent } from "./pure/ButtonComponent";
import { LinkComponent } from "./pure/LinkComponent";
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
export const NavBar = () => {
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
        <div className="w-14">
          <img src="./src/assets/store.svg" alt="Store" />
        </div>
      </div>
      <div className="ml-5 w-full flex justify-between">
        <div className="flex items-center">
          {navigation.map((item, index) => (
            <LinkComponent
              key={index}
              to="/"
              size="lg"
              className={`bg-transparent hover:bg-epic-gray-50`}
            >
              {item.name}
            </LinkComponent>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ButtonComponent
            type="button"
            className="bg-transparent"
            id="1"
            size="sm"
            onClick={handleClick}
          >
            <TbWorld className="text-xl" />
          </ButtonComponent>
          <LinkComponent to="/" size="sm" className={`bg-epic-gray-50`}>
            <FiUser className="text-md" />
          </LinkComponent>
          <ButtonComponent
            type="button"
            className="bg-epic-blue-50 text-epic-black"
            id="1"
            size="lg"
            onClick={handleClick}
          >
            Download
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
