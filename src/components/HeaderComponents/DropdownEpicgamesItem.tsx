type Item = {
  children: string;
};
export const DropdownEpicgamesItem = ({ children }: Item) => {
  return (
    <li className="px-2 py-3 hover:bg-epic-gray-50 cursor-pointer rounded-md">
      {children}
    </li>
  );
};
