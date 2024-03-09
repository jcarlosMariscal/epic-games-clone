type TCardRating = {
  emoji: string;
  description: string;
};
export const CardRating = ({ emoji, description }: TCardRating) => {
  return (
    <div className="bg-epic-gray-100 rounded-md xl:text-center p-5 xl:p-10 flex gap-4 flex-row items-center xl:flex-col">
      <span className="block text-4xl lg:text-6xl">{emoji}</span>
      <div>
        <span className="block text-xs opacity-60 my-0 xl:my-4">
          This game has
        </span>
        <span className="block font-bold">{description}</span>
      </div>
    </div>
  );
};
