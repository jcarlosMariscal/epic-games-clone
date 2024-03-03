import { useState } from "react";
import { FilterElement } from "./FilterElement";
import { InputSearch } from "./InputSearch";
import { ButtonComponent } from "./ButtonComponent";

const filters = [
  {
    id: 1,
    name: "EVENTS",
    active: false,
    subFilters: [
      { name: "Deals of the Week" },
      { name: "First Run" },
      { name: "Freedom Games Publisher Sale" },
    ],
  },
  {
    id: 2,
    name: "PRICE",
    active: false,
    subFilters: [
      { name: "Free" },
      { name: "Under MX$200.00" },
      { name: "Under MX$400.00" },
      { name: "Under MX$600.00" },
      { name: "MX$299.00 and above" },
      { name: "Discounted" },
    ],
  },
  {
    id: 3,
    name: "GENRE",
    active: false,
    subFilters: [
      { name: "Action" },
      { name: "Action-Adventure" },
      { name: "Adventure" },
      { name: "Card Game" },
      { name: "Casual" },
      { name: "City Builder" },
      { name: "Comedy" },
      { name: "Dungeon Crawler" },
      { name: "Exploration" },
      { name: "Fantasy" },
      { name: "Fighting" },
      { name: "First Person" },
      { name: "Horror" },
      { name: "Indie" },
      { name: "MOBA" },
      { name: "Music" },
      { name: "Narration" },
      { name: "Open World" },
      { name: "Party" },
      { name: "Platformer" },
      { name: "Puzzle" },
      { name: "Racing" },
      { name: "Retro" },
      { name: "Rogue-Lite" },
      { name: "RPG" },
      { name: "RTS" },
      { name: "Shooter" },
      { name: "Simulation" },
      { name: "Space" },
      { name: "Sports" },
      { name: "Stealth" },
      { name: "Strategy" },
      { name: "Survival" },
      { name: "Tower Defense" },
      { name: "Trivia" },
      { name: "Turn-Based" },
      { name: "Turn-Based Strategy" },
    ],
  },
  {
    id: 4,
    name: "FEATURES",
    active: false,
    subFilters: [
      { name: "Achievements" },
      { name: "Alexa Game Control" },
      { name: "Cloud Saves" },
      { name: "Co-op" },
      { name: "Competitive" },
      { name: "Controller Support" },
      { name: "Cross Platform" },
      { name: "Local Multiplayer" },
      { name: "MMO" },
      { name: "Multiplayer" },
      { name: "Online Multiplayer" },
      { name: "Single Player" },
      { name: "VR" },
    ],
  },
  {
    id: 5,
    name: "TYPES",
    active: true,
    subFilters: [
      { name: "Apps" },
      { name: "Editor" },
      { name: "Experience" },
      { name: "Game", active: true },
      { name: "Game Add-On" },
      { name: "Game Bundle" },
      { name: "Game Demo" },
      { name: "Game Edition" },
    ],
  },
  {
    id: 6,
    name: "PLATFORM",
    active: false,
    subFilters: [{ name: "Mac OS" }, { name: "Windows" }],
  },
];
type TFilterComponent = {
  screen: string;
};
export const FiltersComponent = ({ screen }: TFilterComponent) => {
  const val = screen === "lg" ? true : false;
  const [showFilters, setShowFilters] = useState(val);
  const handleClick = () => {
    console.log("hola");
    console.log(showFilters);

    if (screen === "sm") {
      setShowFilters(true);
      document.body.style.overflow = "hidden";
    }
  };
  const handleClear = () => {
    setShowFilters(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className="w-full">
      <div className="flex justify-between my-2 text-sm" onClick={handleClick}>
        <span>Filter (1)</span>
        {screen === "lg" && (
          <button className="text-xs cursor-pointer">RESET</button>
        )}
      </div>
      <div
        className={`${
          screen === "lg" ? "" : showFilters ? "block" : "hidden"
        } ${
          screen === "lg"
            ? ""
            : "absolute px-10 py-5 top-0 !h-screen left-0 right-0 bg-epic-black z-50 overflow-y-auto"
        }`}
      >
        <div className="pb-4 border50-opacity">
          <InputSearch
            placeholder="Keywords"
            size="w-full"
            className="bg-epic-gray-100 px-1 py-3 rounded-md"
          />
        </div>
        <div>
          {filters.map((filter) => (
            <FilterElement key={filter.id} filter={filter} />
          ))}
        </div>
        {screen === "sm" && (
          <div className="absolute left-0  right-0 h-20 flex justify-between items-center px-8 my-4 bg-epic-gray-100">
            <ButtonComponent
              type="button"
              id=""
              className="hover:bg-epic-gray-50 text-xs"
              size="lg"
              onClick={handleClear}
            >
              CLEAR
            </ButtonComponent>
            <ButtonComponent
              type="button"
              id=""
              className="bg-epic-blue-100 text-xs"
              size="lg"
              onClick={handleClear}
            >
              APPLY
            </ButtonComponent>
          </div>
        )}
      </div>
    </div>
  );
};
