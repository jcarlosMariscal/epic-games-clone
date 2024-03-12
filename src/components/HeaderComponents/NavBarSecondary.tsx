import { InputSearch } from "../pure/InputSearch";
import { NavLinks } from "./NavLinks";
import { MenuDropdown } from "../pure/MenuDropdown";
const navigation = [
  {
    name: "Discover",
    to: "/",
    // current: location.pathname === "/"
  },
  {
    name: "Browse",
    to: "/browse",
    // current: location.pathname === "/support",
  },
  {
    name: "News",
    to: "/news",
    // current: location.pathname === "/",
  },
];
export const NavBarSecondary = () => {
  return (
    <div className="background-dark h-24 flex-center sticky top-0 z-30">
      <div className="w-9/12 flex items-center gap-4">
        <InputSearch
          placeholder="Search Store"
          size="w-10 xl:w-[13.9rem] h-10"
          className="bg-epic-gray-100 rounded-full"
        />
        <div className="hidden xl:block">
          <NavLinks navigation={navigation} navbar="secondary" />
        </div>
        <div className="block xl:hidden">
          <MenuDropdown title="Discover" items={navigation} animIcon="rotate" />
        </div>
      </div>
    </div>
  );
};
// 76
