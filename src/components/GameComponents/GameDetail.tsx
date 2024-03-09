type TGameDetail = {
  title: string;
  description: string;
};

export const GameDetail = ({ title, description }: TGameDetail) => {
  return (
    <div className="my-4 text-sm">
      <span className="block mb-5">{title}</span>
      <span className="opacity-60 font-light">{description}</span>
    </div>
  );
};
