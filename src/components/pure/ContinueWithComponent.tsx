type TContinueWith = {
  text: string;
};
export const ContinueWithComponent = ({ text }: TContinueWith) => {
  return (
    <>
      <div className="flex-1 h-[1px] bg-epic-gray-50"></div>
      <p className="mx-4 opacity-80 text-xs">{text}</p>
      <div className="flex-1 h-[1px] bg-epic-gray-50"></div>
    </>
  );
};
