type IGame = {
  id: number;
  title: string;
  thumb: string;
};
type CarouselProps = {
  interval: number | boolean;
  currentId: number;
  game: IGame;
  selectSlide: (param: number) => void;
};

export const DotsSpecial = ({
  interval,
  currentId,
  selectSlide,
  game,
}: CarouselProps) => {
  const bgActive = currentId === game.id - 1 ? "bg-epic-gray-200" : "";
  const animate =
    currentId === game.id - 1 ? `slideBgDot ${interval}ms linear forwards` : "";
  return (
    <div
      className={`dot-special h-full ${bgActive}`}
      onClick={() => selectSlide(game.id - 1)}
    >
      <div
        className={`dot-special-bg-anim`}
        style={{
          animation: animate,
        }}
      ></div>
      <div className="dot-special-bg">
        <img src={game.thumb} className="dot-special-img" alt={game.title} />
        <span className="text-xs">{game.title}</span>
      </div>
      <div className="dot-basic md:hidden"></div>
    </div>
  );
};
