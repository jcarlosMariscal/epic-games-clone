import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

type TFilter = {
  name: string;
  active?: boolean;
};

type TFilters = {
  filter: {
    id: number;
    name: string;
    active: boolean;
    subFilters: TFilter[];
  };
};
export const FilterElement = ({ filter }: TFilters) => {
  console.log(filter);

  const [showData, setShowData] = useState(filter.active);
  const handleClick = () => {
    setShowData(!showData);
  };
  return (
    <div className={`py-5 ${showData ? "pb-0" : ""} border50-opacity`}>
      <div
        className="flex justify-between opacity-60 hover:opacity-100 cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-xs">{filter.name}</span>
        <IoChevronDownSharp
          className={`${
            showData ? "rotate-180" : ""
          } text-md transition-transform`}
        />
      </div>
      {showData && (
        <div className="transition-all">
          {filter.subFilters.map((fil: TFilter, index: number) => (
            <span
              key={index}
              className={`${
                fil.active
                  ? "bg-epic-gray-100"
                  : "opacity-60 hover:opacity-100 cursor-pointer"
              } block w-full text-xs my-4 px-2 py-4 transition`}
            >
              {fil.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
