import { FilterElement } from "./FilterElement";
import { InputSearch } from "./InputSearch";

export const FiltersComponent = () => {
  const filters = [
    {
      id: 1,
      name: "EVENTS",
      subFilters: [
        { name: "Deals of the Week" },
        { name: "First Run" },
        { name: "Freedom Games Publisher Sale" },
      ],
    },
    {
      id: 2,
      name: "Price",
      subFilters: [
        { name: "Free" },
        { name: "Under MX$200.00" },
        { name: "Under MX$400.00" },
        { name: "Under MX$600.00" },
        { name: "MX$299.00 and above" },
        { name: "Discounted" },
      ],
    },
  ];
  return (
    <div className="w-full">
      <div className="flex justify-between my-2 text-sm">
        <span>Filter (1)</span>
        <button className="text-xs cursor-pointer">RESET</button>
      </div>
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
    </div>
  );
};
