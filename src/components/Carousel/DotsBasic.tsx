type TDotBasic = {
  id: number;
  currentId: number;
  handleClick: (param: number) => void;
};

export const DotsBasic = ({ id, currentId, handleClick }: TDotBasic) => {
  const opacity = currentId === id ? "opacity-100" : "opacity-50";
  return (
    <div
      className={`dot-basic ${opacity} bg-white`}
      onClick={() => handleClick(id)}
    ></div>
  );
};
