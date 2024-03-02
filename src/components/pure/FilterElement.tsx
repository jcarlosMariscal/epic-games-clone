import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

export const FilterElement = ({ filter }) => {
  const [showData, setShowData] = useState(false);
  const handleClick = () => {
    setShowData(!showData);
  };
  return (
    <div className="py-5 border50-opacity">
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
          {filter.subFilters.map((fil, index) => (
            <span
              key={index}
              className="block text-sm my-4 opacity-60 hover:opacity-100 cursor-pointer transition"
            >
              {fil.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
