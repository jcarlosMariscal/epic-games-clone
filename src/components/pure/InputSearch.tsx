import { IoSearchOutline } from "react-icons/io5";

type InputSearch = {
  placeholder: string;
  size: string;
  className: string;
};
export const InputSearch = ({ placeholder, size, className }: InputSearch) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className={`pl-10 outline-none ${size} ${className} text-xs text-white`}
      />
      <div className="absolute text-white top-0 bottom-0 left-3 flex items-center">
        <IoSearchOutline className="text-sm" />
      </div>
    </div>
  );
};
